const jsutil = require('util');
const events = require('events');
const util = require('./util');
const operations = require('../api/operation');

jsutil.inherits(operations.Operation, events.EventEmitter);

operations.Operation.prototype.timeSpent = function() {
    const createdAt = new Date(this.createdAt.seconds.toNumber() * 1000);
    return new Date() - createdAt;
};

operations.Operation.prototype.eventNames = function() {
    return ['status', 'error', 'done'];
};

operations.Operation.prototype.completion = function(session) {
    const operationService = new operations.OperationService(session);
    const currentState = this;
    return new Promise(async (resolve, reject) => {
        const checkOperation = async () => {
            const op = await operationService.get({
                operationId: currentState.id,
            });
            currentState.emit('status', op);
            if (op.error) {
                currentState.emit('error', op);
                return reject(op);
            }
            if (op.done) {
                currentState.emit('done', op);
                return resolve(op);
            }
            setTimeout(async () => {
                try {
                    await checkOperation();
                } catch (e) {
                    reject(e);
                }
            }, session.__config.pollInterval);
        };
        await checkOperation();
    });
};

operations.Operation.prototype.getMetadata = function() {
    return util.extractAny(this.metadata);
};

operations.Operation.prototype.getResponse = function() {
    return util.extractAny(this.response);
};
