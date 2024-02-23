import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair } from "./erc20";
import { Params } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseQueryTokenPairsRequest() {
    return {
        pagination: undefined
    };
}
export const QueryTokenPairsRequest = {
    typeUrl: "/evmos.erc20.v1.QueryTokenPairsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenPairsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenPairsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTokenPairsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTokenPairsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTokenPairsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTokenPairsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.QueryTokenPairsRequest",
            value: QueryTokenPairsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTokenPairsResponse() {
    return {
        tokenPairs: [],
        pagination: undefined
    };
}
export const QueryTokenPairsResponse = {
    typeUrl: "/evmos.erc20.v1.QueryTokenPairsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tokenPairs) {
            TokenPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenPairsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenPairs.push(TokenPair.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            tokenPairs: Array.isArray(object?.tokenPairs) ? object.tokenPairs.map((e) => TokenPair.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tokenPairs) {
            obj.tokenPairs = message.tokenPairs.map(e => e ? TokenPair.toJSON(e) : undefined);
        }
        else {
            obj.tokenPairs = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenPairsResponse();
        message.tokenPairs = object.tokenPairs?.map(e => TokenPair.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTokenPairsResponse();
        message.tokenPairs = object.token_pairs?.map(e => TokenPair.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.tokenPairs) {
            obj.token_pairs = message.tokenPairs.map(e => e ? TokenPair.toAmino(e) : undefined);
        }
        else {
            obj.token_pairs = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTokenPairsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTokenPairsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTokenPairsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.QueryTokenPairsResponse",
            value: QueryTokenPairsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTokenPairRequest() {
    return {
        token: ""
    };
}
export const QueryTokenPairRequest = {
    typeUrl: "/evmos.erc20.v1.QueryTokenPairRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
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
            token: isSet(object.token) ? String(object.token) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenPairRequest();
        message.token = object.token ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTokenPairRequest();
        if (object.token !== undefined && object.token !== null) {
            message.token = object.token;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token = message.token;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTokenPairRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTokenPairRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTokenPairRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.QueryTokenPairRequest",
            value: QueryTokenPairRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTokenPairResponse() {
    return {
        tokenPair: TokenPair.fromPartial({})
    };
}
export const QueryTokenPairResponse = {
    typeUrl: "/evmos.erc20.v1.QueryTokenPairResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.tokenPair !== undefined) {
            TokenPair.encode(message.tokenPair, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenPair = TokenPair.decode(reader, reader.uint32());
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
            tokenPair: isSet(object.tokenPair) ? TokenPair.fromJSON(object.tokenPair) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tokenPair !== undefined && (obj.tokenPair = message.tokenPair ? TokenPair.toJSON(message.tokenPair) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenPairResponse();
        message.tokenPair = object.tokenPair !== undefined && object.tokenPair !== null ? TokenPair.fromPartial(object.tokenPair) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTokenPairResponse();
        if (object.token_pair !== undefined && object.token_pair !== null) {
            message.tokenPair = TokenPair.fromAmino(object.token_pair);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_pair = message.tokenPair ? TokenPair.toAmino(message.tokenPair) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTokenPairResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryTokenPairResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTokenPairResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.QueryTokenPairResponse",
            value: QueryTokenPairResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/evmos.erc20.v1.QueryParamsRequest",
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
            typeUrl: "/evmos.erc20.v1.QueryParamsRequest",
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
    typeUrl: "/evmos.erc20.v1.QueryParamsResponse",
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
            typeUrl: "/evmos.erc20.v1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
