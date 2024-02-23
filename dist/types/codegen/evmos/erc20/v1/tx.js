import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseMsgConvertCoin() {
    return {
        coin: Coin.fromPartial({}),
        receiver: "",
        sender: ""
    };
}
export const MsgConvertCoin = {
    typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
    encode(message, writer = _m0.Writer.create()) {
        if (message.coin !== undefined) {
            Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coin = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
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
            coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            sender: isSet(object.sender) ? String(object.sender) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConvertCoin();
        message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
        message.receiver = object.receiver ?? "";
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgConvertCoin();
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = Coin.fromAmino(object.coin);
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
        obj.receiver = message.receiver;
        obj.sender = message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConvertCoin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgConvertCoin.decode(message.value);
    },
    toProto(message) {
        return MsgConvertCoin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
            value: MsgConvertCoin.encode(message).finish()
        };
    }
};
function createBaseMsgConvertCoinResponse() {
    return {};
}
export const MsgConvertCoinResponse = {
    typeUrl: "/evmos.erc20.v1.MsgConvertCoinResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertCoinResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgConvertCoinResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgConvertCoinResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConvertCoinResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgConvertCoinResponse.decode(message.value);
    },
    toProto(message) {
        return MsgConvertCoinResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.MsgConvertCoinResponse",
            value: MsgConvertCoinResponse.encode(message).finish()
        };
    }
};
function createBaseMsgConvertERC20() {
    return {
        contractAddress: "",
        amount: "",
        receiver: "",
        sender: ""
    };
}
export const MsgConvertERC20 = {
    typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.receiver !== "") {
            writer.uint32(26).string(message.receiver);
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertERC20();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                case 3:
                    message.receiver = reader.string();
                    break;
                case 4:
                    message.sender = reader.string();
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
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            sender: isSet(object.sender) ? String(object.sender) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.amount !== undefined && (obj.amount = message.amount);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConvertERC20();
        message.contractAddress = object.contractAddress ?? "";
        message.amount = object.amount ?? "";
        message.receiver = object.receiver ?? "";
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgConvertERC20();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress;
        obj.amount = message.amount;
        obj.receiver = message.receiver;
        obj.sender = message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConvertERC20.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgConvertERC20.decode(message.value);
    },
    toProto(message) {
        return MsgConvertERC20.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
            value: MsgConvertERC20.encode(message).finish()
        };
    }
};
function createBaseMsgConvertERC20Response() {
    return {};
}
export const MsgConvertERC20Response = {
    typeUrl: "/evmos.erc20.v1.MsgConvertERC20Response",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertERC20Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgConvertERC20Response();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgConvertERC20Response();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConvertERC20Response.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgConvertERC20Response.decode(message.value);
    },
    toProto(message) {
        return MsgConvertERC20Response.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.MsgConvertERC20Response",
            value: MsgConvertERC20Response.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: Params.fromPartial({})
    };
}
export const MsgUpdateParams = {
    typeUrl: "/evmos.erc20.v1.MsgUpdateParams",
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.MsgUpdateParams",
            value: MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: "/evmos.erc20.v1.MsgUpdateParamsResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
