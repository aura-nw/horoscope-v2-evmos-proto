import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant } from "./feegrant";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseQueryAllowanceRequest() {
    return {
        granter: "",
        grantee: ""
    };
}
export const QueryAllowanceRequest = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
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
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowanceRequest();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowanceRequest();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllowanceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowanceRequest",
            value: QueryAllowanceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAllowanceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllowanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest",
            value: QueryAllowanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllowanceResponse() {
    return {
        allowance: undefined
    };
}
export const QueryAllowanceResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.allowance !== undefined) {
            Grant.encode(message.allowance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowance = Grant.decode(reader, reader.uint32());
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
            allowance: isSet(object.allowance) ? Grant.fromJSON(object.allowance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.allowance !== undefined && (obj.allowance = message.allowance ? Grant.toJSON(message.allowance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowanceResponse();
        message.allowance = object.allowance !== undefined && object.allowance !== null ? Grant.fromPartial(object.allowance) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowanceResponse();
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = Grant.fromAmino(object.allowance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.allowance = message.allowance ? Grant.toAmino(message.allowance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllowanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowanceResponse",
            value: QueryAllowanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAllowanceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllowanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse",
            value: QueryAllowanceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllowancesRequest() {
    return {
        grantee: "",
        pagination: undefined
    };
}
export const QueryAllowancesRequest = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.grantee !== "") {
            writer.uint32(10).string(message.grantee);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grantee = reader.string();
                    break;
                case 2:
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
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowancesRequest();
        message.grantee = object.grantee ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowancesRequest();
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.grantee = message.grantee;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllowancesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowancesRequest",
            value: QueryAllowancesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAllowancesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllowancesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest",
            value: QueryAllowancesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllowancesResponse() {
    return {
        allowances: [],
        pagination: undefined
    };
}
export const QueryAllowancesResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.allowances) {
            Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowances.push(Grant.decode(reader, reader.uint32()));
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
            allowances: Array.isArray(object?.allowances) ? object.allowances.map((e) => Grant.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? Grant.toJSON(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowancesResponse();
        message.allowances = object.allowances?.map(e => Grant.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowancesResponse();
        message.allowances = object.allowances?.map(e => Grant.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? Grant.toAmino(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllowancesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowancesResponse",
            value: QueryAllowancesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAllowancesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllowancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse",
            value: QueryAllowancesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllowancesByGranterRequest() {
    return {
        granter: "",
        pagination: undefined
    };
}
export const QueryAllowancesByGranterRequest = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesByGranterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
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
            granter: isSet(object.granter) ? String(object.granter) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowancesByGranterRequest();
        message.granter = object.granter ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowancesByGranterRequest();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllowancesByGranterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowancesByGranterRequest",
            value: QueryAllowancesByGranterRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAllowancesByGranterRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllowancesByGranterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest",
            value: QueryAllowancesByGranterRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllowancesByGranterResponse() {
    return {
        allowances: [],
        pagination: undefined
    };
}
export const QueryAllowancesByGranterResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.allowances) {
            Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesByGranterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowances.push(Grant.decode(reader, reader.uint32()));
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
            allowances: Array.isArray(object?.allowances) ? object.allowances.map((e) => Grant.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? Grant.toJSON(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowancesByGranterResponse();
        message.allowances = object.allowances?.map(e => Grant.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllowancesByGranterResponse();
        message.allowances = object.allowances?.map(e => Grant.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map(e => e ? Grant.toAmino(e) : undefined);
        }
        else {
            obj.allowances = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllowancesByGranterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllowancesByGranterResponse",
            value: QueryAllowancesByGranterResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAllowancesByGranterResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllowancesByGranterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse",
            value: QueryAllowancesByGranterResponse.encode(message).finish()
        };
    }
};
