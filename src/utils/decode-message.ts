import { Any } from '../generated/google/protobuf/any';

import { MessageType, messageTypeRegistry, UnknownMessage } from '../generated/typeRegistry';

type OptionalMessage<T extends UnknownMessage> = MessageType<T> | undefined;

export const decodeMessage = <T extends UnknownMessage>(data: Any): T => {
    const fqn = data.typeUrl.slice(Math.max(0, data.typeUrl.lastIndexOf('/') + 1));
    const cls: OptionalMessage<T> | undefined = messageTypeRegistry.get(
        fqn,
    ) as unknown as OptionalMessage<T>;

    if (!cls) {
        throw new Error(`Message contains unknown type ${fqn}`);
    }

    return cls.decode(data.value);
};
