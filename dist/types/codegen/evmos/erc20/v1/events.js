import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseEventRegisterPair() {
    return {
        denom: "",
        erc20Address: ""
    };
}
export const EventRegisterPair = {
    typeUrl: "/evmos.erc20.v1.EventRegisterPair",
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.erc20Address !== "") {
            writer.uint32(18).string(message.erc20Address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRegisterPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.erc20Address = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            erc20Address: isSet(object.erc20Address) ? String(object.erc20Address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.erc20Address !== undefined && (obj.erc20Address = message.erc20Address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventRegisterPair();
        message.denom = object.denom ?? "";
        message.erc20Address = object.erc20Address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventRegisterPair();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.erc20_address !== undefined && object.erc20_address !== null) {
            message.erc20Address = object.erc20_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.erc20_address = message.erc20Address;
        return obj;
    },
    fromAminoMsg(object) {
        return EventRegisterPair.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventRegisterPair.decode(message.value);
    },
    toProto(message) {
        return EventRegisterPair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.EventRegisterPair",
            value: EventRegisterPair.encode(message).finish()
        };
    }
};
function createBaseEventToggleTokenConversion() {
    return {
        denom: "",
        erc20Address: ""
    };
}
export const EventToggleTokenConversion = {
    typeUrl: "/evmos.erc20.v1.EventToggleTokenConversion",
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.erc20Address !== "") {
            writer.uint32(18).string(message.erc20Address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventToggleTokenConversion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.erc20Address = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            erc20Address: isSet(object.erc20Address) ? String(object.erc20Address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.erc20Address !== undefined && (obj.erc20Address = message.erc20Address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventToggleTokenConversion();
        message.denom = object.denom ?? "";
        message.erc20Address = object.erc20Address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventToggleTokenConversion();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.erc20_address !== undefined && object.erc20_address !== null) {
            message.erc20Address = object.erc20_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.erc20_address = message.erc20Address;
        return obj;
    },
    fromAminoMsg(object) {
        return EventToggleTokenConversion.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventToggleTokenConversion.decode(message.value);
    },
    toProto(message) {
        return EventToggleTokenConversion.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.EventToggleTokenConversion",
            value: EventToggleTokenConversion.encode(message).finish()
        };
    }
};
function createBaseEventConvertCoin() {
    return {
        sender: "",
        receiver: "",
        amount: "",
        denom: "",
        erc20Address: ""
    };
}
export const EventConvertCoin = {
    typeUrl: "/evmos.erc20.v1.EventConvertCoin",
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.denom !== "") {
            writer.uint32(34).string(message.denom);
        }
        if (message.erc20Address !== "") {
            writer.uint32(42).string(message.erc20Address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventConvertCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.denom = reader.string();
                    break;
                case 5:
                    message.erc20Address = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            erc20Address: isSet(object.erc20Address) ? String(object.erc20Address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        message.erc20Address !== undefined && (obj.erc20Address = message.erc20Address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventConvertCoin();
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        message.amount = object.amount ?? "";
        message.denom = object.denom ?? "";
        message.erc20Address = object.erc20Address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventConvertCoin();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.erc20_address !== undefined && object.erc20_address !== null) {
            message.erc20Address = object.erc20_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.receiver = message.receiver;
        obj.amount = message.amount;
        obj.denom = message.denom;
        obj.erc20_address = message.erc20Address;
        return obj;
    },
    fromAminoMsg(object) {
        return EventConvertCoin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventConvertCoin.decode(message.value);
    },
    toProto(message) {
        return EventConvertCoin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.EventConvertCoin",
            value: EventConvertCoin.encode(message).finish()
        };
    }
};
function createBaseEventConvertERC20() {
    return {
        sender: "",
        receiver: "",
        amount: "",
        denom: "",
        contractAddress: ""
    };
}
export const EventConvertERC20 = {
    typeUrl: "/evmos.erc20.v1.EventConvertERC20",
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.denom !== "") {
            writer.uint32(34).string(message.denom);
        }
        if (message.contractAddress !== "") {
            writer.uint32(42).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventConvertERC20();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.denom = reader.string();
                    break;
                case 5:
                    message.contractAddress = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventConvertERC20();
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        message.amount = object.amount ?? "";
        message.denom = object.denom ?? "";
        message.contractAddress = object.contractAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventConvertERC20();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.receiver = message.receiver;
        obj.amount = message.amount;
        obj.denom = message.denom;
        obj.contract_address = message.contractAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return EventConvertERC20.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventConvertERC20.decode(message.value);
    },
    toProto(message) {
        return EventConvertERC20.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.EventConvertERC20",
            value: EventConvertERC20.encode(message).finish()
        };
    }
};
