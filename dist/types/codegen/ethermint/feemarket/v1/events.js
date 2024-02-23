import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseEventFeeMarket() {
    return {
        baseFee: ""
    };
}
export const EventFeeMarket = {
    typeUrl: "/ethermint.feemarket.v1.EventFeeMarket",
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseFee !== "") {
            writer.uint32(10).string(message.baseFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventFeeMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseFee = reader.string();
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
            baseFee: isSet(object.baseFee) ? String(object.baseFee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseFee !== undefined && (obj.baseFee = message.baseFee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventFeeMarket();
        message.baseFee = object.baseFee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventFeeMarket();
        if (object.base_fee !== undefined && object.base_fee !== null) {
            message.baseFee = object.base_fee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_fee = message.baseFee;
        return obj;
    },
    fromAminoMsg(object) {
        return EventFeeMarket.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventFeeMarket.decode(message.value);
    },
    toProto(message) {
        return EventFeeMarket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.feemarket.v1.EventFeeMarket",
            value: EventFeeMarket.encode(message).finish()
        };
    }
};
function createBaseEventBlockGas() {
    return {
        height: "",
        amount: ""
    };
}
export const EventBlockGas = {
    typeUrl: "/ethermint.feemarket.v1.EventBlockGas",
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "") {
            writer.uint32(10).string(message.height);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBlockGas();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
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
            height: isSet(object.height) ? String(object.height) : "",
            amount: isSet(object.amount) ? String(object.amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventBlockGas();
        message.height = object.height ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBlockGas();
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height;
        obj.amount = message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return EventBlockGas.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventBlockGas.decode(message.value);
    },
    toProto(message) {
        return EventBlockGas.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.feemarket.v1.EventBlockGas",
            value: EventBlockGas.encode(message).finish()
        };
    }
};
