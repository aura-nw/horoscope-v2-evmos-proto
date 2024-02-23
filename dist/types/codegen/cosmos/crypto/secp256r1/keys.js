import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBasePubKey() {
    return {
        key: new Uint8Array()
    };
}
export const PubKey = {
    typeUrl: "/cosmos.crypto.secp256r1.PubKey",
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePubKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePubKey();
        message.key = object.key ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePubKey();
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? base64FromBytes(message.key) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PubKey.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PubKey",
            value: PubKey.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PubKey.decode(message.value);
    },
    toProto(message) {
        return PubKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.secp256r1.PubKey",
            value: PubKey.encode(message).finish()
        };
    }
};
function createBasePrivKey() {
    return {
        secret: new Uint8Array()
    };
}
export const PrivKey = {
    typeUrl: "/cosmos.crypto.secp256r1.PrivKey",
    encode(message, writer = _m0.Writer.create()) {
        if (message.secret.length !== 0) {
            writer.uint32(10).bytes(message.secret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrivKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secret = reader.bytes();
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
            secret: isSet(object.secret) ? bytesFromBase64(object.secret) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.secret !== undefined && (obj.secret = base64FromBytes(message.secret !== undefined ? message.secret : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePrivKey();
        message.secret = object.secret ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePrivKey();
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = bytesFromBase64(object.secret);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.secret = message.secret ? base64FromBytes(message.secret) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PrivKey.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PrivKey",
            value: PrivKey.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PrivKey.decode(message.value);
    },
    toProto(message) {
        return PrivKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.secp256r1.PrivKey",
            value: PrivKey.encode(message).finish()
        };
    }
};
