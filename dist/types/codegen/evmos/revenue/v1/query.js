import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Revenue } from "./revenue";
import { Params } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseQueryRevenuesRequest() {
    return {
        pagination: undefined
    };
}
export const QueryRevenuesRequest = {
    typeUrl: "/evmos.revenue.v1.QueryRevenuesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRevenuesRequest();
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
        const message = createBaseQueryRevenuesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryRevenuesRequest();
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
        return QueryRevenuesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryRevenuesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryRevenuesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.QueryRevenuesRequest",
            value: QueryRevenuesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryRevenuesResponse() {
    return {
        revenues: [],
        pagination: undefined
    };
}
export const QueryRevenuesResponse = {
    typeUrl: "/evmos.revenue.v1.QueryRevenuesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.revenues) {
            Revenue.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRevenuesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.revenues.push(Revenue.decode(reader, reader.uint32()));
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
            revenues: Array.isArray(object?.revenues) ? object.revenues.map((e) => Revenue.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.revenues) {
            obj.revenues = message.revenues.map(e => e ? Revenue.toJSON(e) : undefined);
        }
        else {
            obj.revenues = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRevenuesResponse();
        message.revenues = object.revenues?.map(e => Revenue.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryRevenuesResponse();
        message.revenues = object.revenues?.map(e => Revenue.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.revenues) {
            obj.revenues = message.revenues.map(e => e ? Revenue.toAmino(e) : undefined);
        }
        else {
            obj.revenues = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRevenuesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryRevenuesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryRevenuesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.QueryRevenuesResponse",
            value: QueryRevenuesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryRevenueRequest() {
    return {
        contractAddress: ""
    };
}
export const QueryRevenueRequest = {
    typeUrl: "/evmos.revenue.v1.QueryRevenueRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRevenueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRevenueRequest();
        message.contractAddress = object.contractAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryRevenueRequest();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRevenueRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryRevenueRequest.decode(message.value);
    },
    toProto(message) {
        return QueryRevenueRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.QueryRevenueRequest",
            value: QueryRevenueRequest.encode(message).finish()
        };
    }
};
function createBaseQueryRevenueResponse() {
    return {
        revenue: Revenue.fromPartial({})
    };
}
export const QueryRevenueResponse = {
    typeUrl: "/evmos.revenue.v1.QueryRevenueResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.revenue !== undefined) {
            Revenue.encode(message.revenue, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRevenueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.revenue = Revenue.decode(reader, reader.uint32());
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
            revenue: isSet(object.revenue) ? Revenue.fromJSON(object.revenue) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.revenue !== undefined && (obj.revenue = message.revenue ? Revenue.toJSON(message.revenue) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRevenueResponse();
        message.revenue = object.revenue !== undefined && object.revenue !== null ? Revenue.fromPartial(object.revenue) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryRevenueResponse();
        if (object.revenue !== undefined && object.revenue !== null) {
            message.revenue = Revenue.fromAmino(object.revenue);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.revenue = message.revenue ? Revenue.toAmino(message.revenue) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRevenueResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryRevenueResponse.decode(message.value);
    },
    toProto(message) {
        return QueryRevenueResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.QueryRevenueResponse",
            value: QueryRevenueResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/evmos.revenue.v1.QueryParamsRequest",
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
            typeUrl: "/evmos.revenue.v1.QueryParamsRequest",
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
    typeUrl: "/evmos.revenue.v1.QueryParamsResponse",
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
            typeUrl: "/evmos.revenue.v1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDeployerRevenuesRequest() {
    return {
        deployerAddress: "",
        pagination: undefined
    };
}
export const QueryDeployerRevenuesRequest = {
    typeUrl: "/evmos.revenue.v1.QueryDeployerRevenuesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.deployerAddress !== "") {
            writer.uint32(10).string(message.deployerAddress);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeployerRevenuesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployerAddress = reader.string();
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
            deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDeployerRevenuesRequest();
        message.deployerAddress = object.deployerAddress ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDeployerRevenuesRequest();
        if (object.deployer_address !== undefined && object.deployer_address !== null) {
            message.deployerAddress = object.deployer_address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deployer_address = message.deployerAddress;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDeployerRevenuesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDeployerRevenuesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDeployerRevenuesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.QueryDeployerRevenuesRequest",
            value: QueryDeployerRevenuesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDeployerRevenuesResponse() {
    return {
        contractAddresses: [],
        pagination: undefined
    };
}
export const QueryDeployerRevenuesResponse = {
    typeUrl: "/evmos.revenue.v1.QueryDeployerRevenuesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.contractAddresses) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDeployerRevenuesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddresses.push(reader.string());
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
            contractAddresses: Array.isArray(object?.contractAddresses) ? object.contractAddresses.map((e) => String(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.contractAddresses) {
            obj.contractAddresses = message.contractAddresses.map(e => e);
        }
        else {
            obj.contractAddresses = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDeployerRevenuesResponse();
        message.contractAddresses = object.contractAddresses?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDeployerRevenuesResponse();
        message.contractAddresses = object.contract_addresses?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.contractAddresses) {
            obj.contract_addresses = message.contractAddresses.map(e => e);
        }
        else {
            obj.contract_addresses = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDeployerRevenuesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDeployerRevenuesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDeployerRevenuesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.QueryDeployerRevenuesResponse",
            value: QueryDeployerRevenuesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryWithdrawerRevenuesRequest() {
    return {
        withdrawerAddress: "",
        pagination: undefined
    };
}
export const QueryWithdrawerRevenuesRequest = {
    typeUrl: "/evmos.revenue.v1.QueryWithdrawerRevenuesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.withdrawerAddress !== "") {
            writer.uint32(10).string(message.withdrawerAddress);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWithdrawerRevenuesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawerAddress = reader.string();
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
            withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryWithdrawerRevenuesRequest();
        message.withdrawerAddress = object.withdrawerAddress ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryWithdrawerRevenuesRequest();
        if (object.withdrawer_address !== undefined && object.withdrawer_address !== null) {
            message.withdrawerAddress = object.withdrawer_address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.withdrawer_address = message.withdrawerAddress;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryWithdrawerRevenuesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryWithdrawerRevenuesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryWithdrawerRevenuesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.QueryWithdrawerRevenuesRequest",
            value: QueryWithdrawerRevenuesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryWithdrawerRevenuesResponse() {
    return {
        contractAddresses: [],
        pagination: undefined
    };
}
export const QueryWithdrawerRevenuesResponse = {
    typeUrl: "/evmos.revenue.v1.QueryWithdrawerRevenuesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.contractAddresses) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWithdrawerRevenuesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddresses.push(reader.string());
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
            contractAddresses: Array.isArray(object?.contractAddresses) ? object.contractAddresses.map((e) => String(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.contractAddresses) {
            obj.contractAddresses = message.contractAddresses.map(e => e);
        }
        else {
            obj.contractAddresses = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryWithdrawerRevenuesResponse();
        message.contractAddresses = object.contractAddresses?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryWithdrawerRevenuesResponse();
        message.contractAddresses = object.contract_addresses?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.contractAddresses) {
            obj.contract_addresses = message.contractAddresses.map(e => e);
        }
        else {
            obj.contract_addresses = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryWithdrawerRevenuesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryWithdrawerRevenuesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryWithdrawerRevenuesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.QueryWithdrawerRevenuesResponse",
            value: QueryWithdrawerRevenuesResponse.encode(message).finish()
        };
    }
};
