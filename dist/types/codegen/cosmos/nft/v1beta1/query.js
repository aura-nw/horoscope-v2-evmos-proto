import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { NFT, Class } from "./nft";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryBalanceRequest() {
    return {
        classId: "",
        owner: ""
    };
}
export const QueryBalanceRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            owner: isSet(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceRequest();
        message.classId = object.classId ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceRequest();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBalanceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryBalanceRequest",
            value: QueryBalanceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
            value: QueryBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceResponse() {
    return {
        amount: Long.UZERO
    };
}
export const QueryBalanceResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.amount.isZero()) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.uint64();
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
            amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Long.fromString(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? message.amount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBalanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryBalanceResponse",
            value: QueryBalanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
            value: QueryBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOwnerRequest() {
    return {
        classId: "",
        id: ""
    };
}
export const QueryOwnerRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryOwnerRequest();
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOwnerRequest();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOwnerRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryOwnerRequest",
            value: QueryOwnerRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryOwnerRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOwnerRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
            value: QueryOwnerRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOwnerResponse() {
    return {
        owner: ""
    };
}
export const QueryOwnerResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryOwnerResponse();
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryOwnerResponse();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOwnerResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryOwnerResponse",
            value: QueryOwnerResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryOwnerResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOwnerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
            value: QueryOwnerResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyRequest() {
    return {
        classId: ""
    };
}
export const QuerySupplyRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyRequest();
        message.classId = object.classId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySupplyRequest();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySupplyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySupplyRequest",
            value: QuerySupplyRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySupplyRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySupplyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
            value: QuerySupplyRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyResponse() {
    return {
        amount: Long.UZERO
    };
}
export const QuerySupplyResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.amount.isZero()) {
            writer.uint32(8).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.uint64();
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
            amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySupplyResponse();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Long.fromString(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? message.amount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySupplyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySupplyResponse",
            value: QuerySupplyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySupplyResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
            value: QuerySupplyResponse.encode(message).finish()
        };
    }
};
function createBaseQueryNFTsRequest() {
    return {
        classId: "",
        owner: "",
        pagination: undefined
    };
}
export const QueryNFTsRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNFTsRequest();
        message.classId = object.classId ?? "";
        message.owner = object.owner ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryNFTsRequest();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.owner = message.owner;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryNFTsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNFTsRequest",
            value: QueryNFTsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryNFTsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryNFTsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
            value: QueryNFTsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryNFTsResponse() {
    return {
        nfts: [],
        pagination: undefined
    };
}
export const QueryNFTsResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.nfts) {
            NFT.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nfts.push(NFT.decode(reader, reader.uint32()));
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
            nfts: Array.isArray(object?.nfts) ? object.nfts.map((e) => NFT.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nfts) {
            obj.nfts = message.nfts.map(e => e ? NFT.toJSON(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNFTsResponse();
        message.nfts = object.nfts?.map(e => NFT.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryNFTsResponse();
        message.nfts = object.nfts?.map(e => NFT.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.nfts) {
            obj.nfts = message.nfts.map(e => e ? NFT.toAmino(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryNFTsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNFTsResponse",
            value: QueryNFTsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryNFTsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryNFTsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
            value: QueryNFTsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryNFTRequest() {
    return {
        classId: "",
        id: ""
    };
}
export const QueryNFTRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : "",
            id: isSet(object.id) ? String(object.id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNFTRequest();
        message.classId = object.classId ?? "";
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryNFTRequest();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryNFTRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNFTRequest",
            value: QueryNFTRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryNFTRequest.decode(message.value);
    },
    toProto(message) {
        return QueryNFTRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
            value: QueryNFTRequest.encode(message).finish()
        };
    }
};
function createBaseQueryNFTResponse() {
    return {
        nft: undefined
    };
}
export const QueryNFTResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.nft !== undefined) {
            NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNFTResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nft = NFT.decode(reader, reader.uint32());
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
            nft: isSet(object.nft) ? NFT.fromJSON(object.nft) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.nft !== undefined && (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNFTResponse();
        message.nft = object.nft !== undefined && object.nft !== null ? NFT.fromPartial(object.nft) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryNFTResponse();
        if (object.nft !== undefined && object.nft !== null) {
            message.nft = NFT.fromAmino(object.nft);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nft = message.nft ? NFT.toAmino(message.nft) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryNFTResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNFTResponse",
            value: QueryNFTResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryNFTResponse.decode(message.value);
    },
    toProto(message) {
        return QueryNFTResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
            value: QueryNFTResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClassRequest() {
    return {
        classId: ""
    };
}
export const QueryClassRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
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
            classId: isSet(object.classId) ? String(object.classId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.classId !== undefined && (obj.classId = message.classId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClassRequest();
        message.classId = object.classId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassRequest();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClassRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClassRequest",
            value: QueryClassRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClassRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClassRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
            value: QueryClassRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassResponse() {
    return {
        class: undefined
    };
}
export const QueryClassResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.class !== undefined) {
            Class.encode(message.class, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class = Class.decode(reader, reader.uint32());
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
            class: isSet(object.class) ? Class.fromJSON(object.class) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.class !== undefined && (obj.class = message.class ? Class.toJSON(message.class) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClassResponse();
        message.class = object.class !== undefined && object.class !== null ? Class.fromPartial(object.class) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassResponse();
        if (object.class !== undefined && object.class !== null) {
            message.class = Class.fromAmino(object.class);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class = message.class ? Class.toAmino(message.class) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClassResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClassResponse",
            value: QueryClassResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClassResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClassResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
            value: QueryClassResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClassesRequest() {
    return {
        pagination: undefined
    };
}
export const QueryClassesRequest = {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesRequest();
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
        const message = createBaseQueryClassesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassesRequest();
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
        return QueryClassesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClassesRequest",
            value: QueryClassesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClassesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClassesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
            value: QueryClassesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClassesResponse() {
    return {
        classes: [],
        pagination: undefined
    };
}
export const QueryClassesResponse = {
    typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.classes) {
            Class.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClassesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classes.push(Class.decode(reader, reader.uint32()));
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
            classes: Array.isArray(object?.classes) ? object.classes.map((e) => Class.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? Class.toJSON(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClassesResponse();
        message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClassesResponse();
        message.classes = object.classes?.map(e => Class.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? Class.toAmino(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClassesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClassesResponse",
            value: QueryClassesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClassesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClassesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
            value: QueryClassesResponse.encode(message).finish()
        };
    }
};
