import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
function createBaseMetadata() {
    return {
        feeVersion: "",
        appVersion: ""
    };
}
export const Metadata = {
    typeUrl: "/ibc.applications.fee.v1.Metadata",
    encode(message, writer = _m0.Writer.create()) {
        if (message.feeVersion !== "") {
            writer.uint32(10).string(message.feeVersion);
        }
        if (message.appVersion !== "") {
            writer.uint32(18).string(message.appVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeVersion = reader.string();
                    break;
                case 2:
                    message.appVersion = reader.string();
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
            feeVersion: isSet(object.feeVersion) ? String(object.feeVersion) : "",
            appVersion: isSet(object.appVersion) ? String(object.appVersion) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.feeVersion !== undefined && (obj.feeVersion = message.feeVersion);
        message.appVersion !== undefined && (obj.appVersion = message.appVersion);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.feeVersion = object.feeVersion ?? "";
        message.appVersion = object.appVersion ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMetadata();
        if (object.fee_version !== undefined && object.fee_version !== null) {
            message.feeVersion = object.fee_version;
        }
        if (object.app_version !== undefined && object.app_version !== null) {
            message.appVersion = object.app_version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fee_version = message.feeVersion;
        obj.app_version = message.appVersion;
        return obj;
    },
    fromAminoMsg(object) {
        return Metadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Metadata",
            value: Metadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Metadata.decode(message.value);
    },
    toProto(message) {
        return Metadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.Metadata",
            value: Metadata.encode(message).finish()
        };
    }
};
