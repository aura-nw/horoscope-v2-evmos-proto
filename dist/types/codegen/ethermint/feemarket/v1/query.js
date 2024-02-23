import { Params } from "./feemarket";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/ethermint.feemarket.v1.QueryParamsRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.feemarket.v1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/ethermint.feemarket.v1.QueryParamsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.feemarket.v1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBaseFeeRequest() {
    return {};
}
export const QueryBaseFeeRequest = {
    typeUrl: "/ethermint.feemarket.v1.QueryBaseFeeRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBaseFeeRequest();
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
        const message = createBaseQueryBaseFeeRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryBaseFeeRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBaseFeeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBaseFeeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBaseFeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.feemarket.v1.QueryBaseFeeRequest",
            value: QueryBaseFeeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBaseFeeResponse() {
    return {
        baseFee: ""
    };
}
export const QueryBaseFeeResponse = {
    typeUrl: "/ethermint.feemarket.v1.QueryBaseFeeResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseFee !== "") {
            writer.uint32(10).string(message.baseFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBaseFeeResponse();
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
        const message = createBaseQueryBaseFeeResponse();
        message.baseFee = object.baseFee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBaseFeeResponse();
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
        return QueryBaseFeeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBaseFeeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBaseFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.feemarket.v1.QueryBaseFeeResponse",
            value: QueryBaseFeeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBlockGasRequest() {
    return {};
}
export const QueryBlockGasRequest = {
    typeUrl: "/ethermint.feemarket.v1.QueryBlockGasRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBlockGasRequest();
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
        const message = createBaseQueryBlockGasRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryBlockGasRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBlockGasRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBlockGasRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBlockGasRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.feemarket.v1.QueryBlockGasRequest",
            value: QueryBlockGasRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBlockGasResponse() {
    return {
        gas: Long.ZERO
    };
}
export const QueryBlockGasResponse = {
    typeUrl: "/ethermint.feemarket.v1.QueryBlockGasResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.gas.isZero()) {
            writer.uint32(8).int64(message.gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBlockGasResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas = reader.int64();
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
            gas: isSet(object.gas) ? Long.fromValue(object.gas) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.gas !== undefined && (obj.gas = (message.gas || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBlockGasResponse();
        message.gas = object.gas !== undefined && object.gas !== null ? Long.fromValue(object.gas) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBlockGasResponse();
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = Long.fromString(object.gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gas = message.gas ? message.gas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBlockGasResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBlockGasResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBlockGasResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.feemarket.v1.QueryBlockGasResponse",
            value: QueryBlockGasResponse.encode(message).finish()
        };
    }
};
