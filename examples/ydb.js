const run = require('./').run;
const { createDriver } = require('../legacy/lib/slydb');

run(async (session, _, folderId) => {
    const driver = createDriver();
    const timeout = 2000;
    if (!(await driver.ready(timeout))) {
        console.log(`Driver has not become ready in ${timeout}ms!`);
        process.exit(1);
    }
});
