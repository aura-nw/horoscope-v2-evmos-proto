import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseIncentive() {
    return {
        contract: "",
        allocations: [],
        epochs: 0,
        startTime: new Date(),
        totalGas: Long.UZERO
    };
}
export const Incentive = {
    typeUrl: "/evmos.incentives.v1.Incentive",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        for (const v of message.allocations) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.epochs !== 0) {
            writer.uint32(24).uint32(message.epochs);
        }
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
        }
        if (!message.totalGas.isZero()) {
            writer.uint32(40).uint64(message.totalGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentive();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract = reader.string();
                    break;
                case 2:
                    message.allocations.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.epochs = reader.uint32();
                    break;
                case 4:
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.totalGas = reader.uint64();
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
            contract: isSet(object.contract) ? String(object.contract) : "",
            allocations: Array.isArray(object?.allocations) ? object.allocations.map((e) => DecCoin.fromJSON(e)) : [],
            epochs: isSet(object.epochs) ? Number(object.epochs) : 0,
            startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
            totalGas: isSet(object.totalGas) ? Long.fromValue(object.totalGas) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.contract !== undefined && (obj.contract = message.contract);
        if (message.allocations) {
            obj.allocations = message.allocations.map(e => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.allocations = [];
        }
        message.epochs !== undefined && (obj.epochs = Math.round(message.epochs));
        message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
        message.totalGas !== undefined && (obj.totalGas = (message.totalGas || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIncentive();
        message.contract = object.contract ?? "";
        message.allocations = object.allocations?.map(e => DecCoin.fromPartial(e)) || [];
        message.epochs = object.epochs ?? 0;
        message.startTime = object.startTime ?? undefined;
        message.totalGas = object.totalGas !== undefined && object.totalGas !== null ? Long.fromValue(object.totalGas) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseIncentive();
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        message.allocations = object.allocations?.map(e => DecCoin.fromAmino(e)) || [];
        if (object.epochs !== undefined && object.epochs !== null) {
            message.epochs = object.epochs;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
        }
        if (object.total_gas !== undefined && object.total_gas !== null) {
            message.totalGas = Long.fromString(object.total_gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract = message.contract;
        if (message.allocations) {
            obj.allocations = message.allocations.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.allocations = [];
        }
        obj.epochs = message.epochs;
        obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
        obj.total_gas = message.totalGas ? message.totalGas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Incentive.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Incentive.decode(message.value);
    },
    toProto(message) {
        return Incentive.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.incentives.v1.Incentive",
            value: Incentive.encode(message).finish()
        };
    }
};
function createBaseGasMeter() {
    return {
        contract: "",
        participant: "",
        cumulativeGas: Long.UZERO
    };
}
export const GasMeter = {
    typeUrl: "/evmos.incentives.v1.GasMeter",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        if (message.participant !== "") {
            writer.uint32(18).string(message.participant);
        }
        if (!message.cumulativeGas.isZero()) {
            writer.uint32(24).uint64(message.cumulativeGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGasMeter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract = reader.string();
                    break;
                case 2:
                    message.participant = reader.string();
                    break;
                case 3:
                    message.cumulativeGas = reader.uint64();
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
            contract: isSet(object.contract) ? String(object.contract) : "",
            participant: isSet(object.participant) ? String(object.participant) : "",
            cumulativeGas: isSet(object.cumulativeGas) ? Long.fromValue(object.cumulativeGas) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.contract !== undefined && (obj.contract = message.contract);
        message.participant !== undefined && (obj.participant = message.participant);
        message.cumulativeGas !== undefined && (obj.cumulativeGas = (message.cumulativeGas || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGasMeter();
        message.contract = object.contract ?? "";
        message.participant = object.participant ?? "";
        message.cumulativeGas = object.cumulativeGas !== undefined && object.cumulativeGas !== null ? Long.fromValue(object.cumulativeGas) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGasMeter();
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        if (object.participant !== undefined && object.participant !== null) {
            message.participant = object.participant;
        }
        if (object.cumulative_gas !== undefined && object.cumulative_gas !== null) {
            message.cumulativeGas = Long.fromString(object.cumulative_gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract = message.contract;
        obj.participant = message.participant;
        obj.cumulative_gas = message.cumulativeGas ? message.cumulativeGas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GasMeter.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GasMeter.decode(message.value);
    },
    toProto(message) {
        return GasMeter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.incentives.v1.GasMeter",
            value: GasMeter.encode(message).finish()
        };
    }
};
function createBaseRegisterIncentiveProposal() {
    return {
        title: "",
        description: "",
        contract: "",
        allocations: [],
        epochs: 0
    };
}
export const RegisterIncentiveProposal = {
    typeUrl: "/evmos.incentives.v1.RegisterIncentiveProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        for (const v of message.allocations) {
            DecCoin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.epochs !== 0) {
            writer.uint32(40).uint32(message.epochs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterIncentiveProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
                    break;
                case 4:
                    message.allocations.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.epochs = reader.uint32();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            contract: isSet(object.contract) ? String(object.contract) : "",
            allocations: Array.isArray(object?.allocations) ? object.allocations.map((e) => DecCoin.fromJSON(e)) : [],
            epochs: isSet(object.epochs) ? Number(object.epochs) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.contract !== undefined && (obj.contract = message.contract);
        if (message.allocations) {
            obj.allocations = message.allocations.map(e => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.allocations = [];
        }
        message.epochs !== undefined && (obj.epochs = Math.round(message.epochs));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisterIncentiveProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contract = object.contract ?? "";
        message.allocations = object.allocations?.map(e => DecCoin.fromPartial(e)) || [];
        message.epochs = object.epochs ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisterIncentiveProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        message.allocations = object.allocations?.map(e => DecCoin.fromAmino(e)) || [];
        if (object.epochs !== undefined && object.epochs !== null) {
            message.epochs = object.epochs;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.contract = message.contract;
        if (message.allocations) {
            obj.allocations = message.allocations.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.allocations = [];
        }
        obj.epochs = message.epochs;
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterIncentiveProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterIncentiveProposal.decode(message.value);
    },
    toProto(message) {
        return RegisterIncentiveProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.incentives.v1.RegisterIncentiveProposal",
            value: RegisterIncentiveProposal.encode(message).finish()
        };
    }
};
function createBaseCancelIncentiveProposal() {
    return {
        title: "",
        description: "",
        contract: ""
    };
}
export const CancelIncentiveProposal = {
    typeUrl: "/evmos.incentives.v1.CancelIncentiveProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelIncentiveProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            contract: isSet(object.contract) ? String(object.contract) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.contract !== undefined && (obj.contract = message.contract);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCancelIncentiveProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.contract = object.contract ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCancelIncentiveProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.contract = message.contract;
        return obj;
    },
    fromAminoMsg(object) {
        return CancelIncentiveProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CancelIncentiveProposal.decode(message.value);
    },
    toProto(message) {
        return CancelIncentiveProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.incentives.v1.CancelIncentiveProposal",
            value: CancelIncentiveProposal.encode(message).finish()
        };
    }
};
