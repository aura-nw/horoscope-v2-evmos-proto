import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseExtensionOptionDynamicFeeTx() {
    return {
        maxPriorityPrice: ""
    };
}
export const ExtensionOptionDynamicFeeTx = {
    typeUrl: "/ethermint.types.v1.ExtensionOptionDynamicFeeTx",
    encode(message, writer = _m0.Writer.create()) {
        if (message.maxPriorityPrice !== "") {
            writer.uint32(10).string(message.maxPriorityPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionOptionDynamicFeeTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxPriorityPrice = reader.string();
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
            maxPriorityPrice: isSet(object.maxPriorityPrice) ? String(object.maxPriorityPrice) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.maxPriorityPrice !== undefined && (obj.maxPriorityPrice = message.maxPriorityPrice);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExtensionOptionDynamicFeeTx();
        message.maxPriorityPrice = object.maxPriorityPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseExtensionOptionDynamicFeeTx();
        if (object.max_priority_price !== undefined && object.max_priority_price !== null) {
            message.maxPriorityPrice = object.max_priority_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_priority_price = message.maxPriorityPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return ExtensionOptionDynamicFeeTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExtensionOptionDynamicFeeTx.decode(message.value);
    },
    toProto(message) {
        return ExtensionOptionDynamicFeeTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.types.v1.ExtensionOptionDynamicFeeTx",
            value: ExtensionOptionDynamicFeeTx.encode(message).finish()
        };
    }
};
