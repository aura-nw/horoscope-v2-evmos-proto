import { Height } from "../../../core/client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
function createBaseClientState() {
    return {
        latestHeight: Height.fromPartial({})
    };
}
export const ClientState = {
    typeUrl: "/ibc.lightclients.localhost.v2.ClientState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.latestHeight !== undefined) {
            Height.encode(message.latestHeight, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.latestHeight = Height.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            latestHeight: isSet(object.latestHeight) ? Height.fromJSON(object.latestHeight) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight ? Height.toJSON(message.latestHeight) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.latestHeight = object.latestHeight !== undefined && object.latestHeight !== null ? Height.fromPartial(object.latestHeight) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseClientState();
        if (object.latest_height !== undefined && object.latest_height !== null) {
            message.latestHeight = Height.fromAmino(object.latest_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.latest_height = message.latestHeight ? Height.toAmino(message.latestHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return ClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientState",
            value: ClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientState.decode(message.value);
    },
    toProto(message) {
        return ClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.localhost.v2.ClientState",
            value: ClientState.encode(message).finish()
        };
    }
};
