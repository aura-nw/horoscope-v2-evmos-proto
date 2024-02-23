import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
function createBaseQueryPeriodRequest() {
    return {};
}
export const QueryPeriodRequest = {
    typeUrl: "/evmos.inflation.v1.QueryPeriodRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPeriodRequest();
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
        const message = createBaseQueryPeriodRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryPeriodRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPeriodRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPeriodRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPeriodRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.inflation.v1.QueryPeriodRequest",
            value: QueryPeriodRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPeriodResponse() {
    return {
        period: Long.UZERO
    };
}
export const QueryPeriodResponse = {
    typeUrl: "/evmos.inflation.v1.QueryPeriodResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.period.isZero()) {
            writer.uint32(8).uint64(message.period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPeriodResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.period = reader.uint64();
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
            period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.period !== undefined && (obj.period = (message.period || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPeriodResponse();
        message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPeriodResponse();
        if (object.period !== undefined && object.period !== null) {
            message.period = Long.fromString(object.period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.period = message.period ? message.period.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPeriodResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPeriodResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPeriodResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.inflation.v1.QueryPeriodResponse",
            value: QueryPeriodResponse.encode(message).finish()
        };
    }
};
function createBaseQueryEpochMintProvisionRequest() {
    return {};
}
export const QueryEpochMintProvisionRequest = {
    typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochMintProvisionRequest();
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
        const message = createBaseQueryEpochMintProvisionRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryEpochMintProvisionRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEpochMintProvisionRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryEpochMintProvisionRequest.decode(message.value);
    },
    toProto(message) {
        return QueryEpochMintProvisionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionRequest",
            value: QueryEpochMintProvisionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEpochMintProvisionResponse() {
    return {
        epochMintProvision: DecCoin.fromPartial({})
    };
}
export const QueryEpochMintProvisionResponse = {
    typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.epochMintProvision !== undefined) {
            DecCoin.encode(message.epochMintProvision, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochMintProvisionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochMintProvision = DecCoin.decode(reader, reader.uint32());
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
            epochMintProvision: isSet(object.epochMintProvision) ? DecCoin.fromJSON(object.epochMintProvision) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochMintProvision !== undefined && (obj.epochMintProvision = message.epochMintProvision ? DecCoin.toJSON(message.epochMintProvision) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEpochMintProvisionResponse();
        message.epochMintProvision = object.epochMintProvision !== undefined && object.epochMintProvision !== null ? DecCoin.fromPartial(object.epochMintProvision) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryEpochMintProvisionResponse();
        if (object.epoch_mint_provision !== undefined && object.epoch_mint_provision !== null) {
            message.epochMintProvision = DecCoin.fromAmino(object.epoch_mint_provision);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.epoch_mint_provision = message.epochMintProvision ? DecCoin.toAmino(message.epochMintProvision) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEpochMintProvisionResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryEpochMintProvisionResponse.decode(message.value);
    },
    toProto(message) {
        return QueryEpochMintProvisionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionResponse",
            value: QueryEpochMintProvisionResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySkippedEpochsRequest() {
    return {};
}
export const QuerySkippedEpochsRequest = {
    typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySkippedEpochsRequest();
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
        const message = createBaseQuerySkippedEpochsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQuerySkippedEpochsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySkippedEpochsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySkippedEpochsRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySkippedEpochsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsRequest",
            value: QuerySkippedEpochsRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySkippedEpochsResponse() {
    return {
        skippedEpochs: Long.UZERO
    };
}
export const QuerySkippedEpochsResponse = {
    typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.skippedEpochs.isZero()) {
            writer.uint32(8).uint64(message.skippedEpochs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySkippedEpochsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.skippedEpochs = reader.uint64();
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
            skippedEpochs: isSet(object.skippedEpochs) ? Long.fromValue(object.skippedEpochs) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.skippedEpochs !== undefined && (obj.skippedEpochs = (message.skippedEpochs || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySkippedEpochsResponse();
        message.skippedEpochs = object.skippedEpochs !== undefined && object.skippedEpochs !== null ? Long.fromValue(object.skippedEpochs) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySkippedEpochsResponse();
        if (object.skipped_epochs !== undefined && object.skipped_epochs !== null) {
            message.skippedEpochs = Long.fromString(object.skipped_epochs);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.skipped_epochs = message.skippedEpochs ? message.skippedEpochs.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySkippedEpochsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QuerySkippedEpochsResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySkippedEpochsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsResponse",
            value: QuerySkippedEpochsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCirculatingSupplyRequest() {
    return {};
}
export const QueryCirculatingSupplyRequest = {
    typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCirculatingSupplyRequest();
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
        const message = createBaseQueryCirculatingSupplyRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryCirculatingSupplyRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCirculatingSupplyRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCirculatingSupplyRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCirculatingSupplyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyRequest",
            value: QueryCirculatingSupplyRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCirculatingSupplyResponse() {
    return {
        circulatingSupply: DecCoin.fromPartial({})
    };
}
export const QueryCirculatingSupplyResponse = {
    typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.circulatingSupply !== undefined) {
            DecCoin.encode(message.circulatingSupply, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCirculatingSupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.circulatingSupply = DecCoin.decode(reader, reader.uint32());
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
            circulatingSupply: isSet(object.circulatingSupply) ? DecCoin.fromJSON(object.circulatingSupply) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.circulatingSupply !== undefined && (obj.circulatingSupply = message.circulatingSupply ? DecCoin.toJSON(message.circulatingSupply) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCirculatingSupplyResponse();
        message.circulatingSupply = object.circulatingSupply !== undefined && object.circulatingSupply !== null ? DecCoin.fromPartial(object.circulatingSupply) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCirculatingSupplyResponse();
        if (object.circulating_supply !== undefined && object.circulating_supply !== null) {
            message.circulatingSupply = DecCoin.fromAmino(object.circulating_supply);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.circulating_supply = message.circulatingSupply ? DecCoin.toAmino(message.circulatingSupply) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCirculatingSupplyResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCirculatingSupplyResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCirculatingSupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyResponse",
            value: QueryCirculatingSupplyResponse.encode(message).finish()
        };
    }
};
function createBaseQueryInflationRateRequest() {
    return {};
}
export const QueryInflationRateRequest = {
    typeUrl: "/evmos.inflation.v1.QueryInflationRateRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInflationRateRequest();
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
        const message = createBaseQueryInflationRateRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryInflationRateRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryInflationRateRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryInflationRateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryInflationRateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.inflation.v1.QueryInflationRateRequest",
            value: QueryInflationRateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryInflationRateResponse() {
    return {
        inflationRate: ""
    };
}
export const QueryInflationRateResponse = {
    typeUrl: "/evmos.inflation.v1.QueryInflationRateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.inflationRate !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.inflationRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInflationRateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inflationRate = Decimal.fromAtomics(reader.string(), 18).toString();
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
            inflationRate: isSet(object.inflationRate) ? String(object.inflationRate) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.inflationRate !== undefined && (obj.inflationRate = message.inflationRate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryInflationRateResponse();
        message.inflationRate = object.inflationRate ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryInflationRateResponse();
        if (object.inflation_rate !== undefined && object.inflation_rate !== null) {
            message.inflationRate = object.inflation_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.inflation_rate = message.inflationRate;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryInflationRateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryInflationRateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryInflationRateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.inflation.v1.QueryInflationRateResponse",
            value: QueryInflationRateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/evmos.inflation.v1.QueryParamsRequest",
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
            typeUrl: "/evmos.inflation.v1.QueryParamsRequest",
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
    typeUrl: "/evmos.inflation.v1.QueryParamsResponse",
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
            typeUrl: "/evmos.inflation.v1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
