import { Incentive, GasMeter } from "./incentives";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        incentives: [],
        gasMeters: []
    };
}
export const GenesisState = {
    typeUrl: "/evmos.incentives.v1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.incentives) {
            Incentive.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.gasMeters) {
            GasMeter.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.incentives.push(Incentive.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.gasMeters.push(GasMeter.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            incentives: Array.isArray(object?.incentives) ? object.incentives.map((e) => Incentive.fromJSON(e)) : [],
            gasMeters: Array.isArray(object?.gasMeters) ? object.gasMeters.map((e) => GasMeter.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.incentives) {
            obj.incentives = message.incentives.map(e => e ? Incentive.toJSON(e) : undefined);
        }
        else {
            obj.incentives = [];
        }
        if (message.gasMeters) {
            obj.gasMeters = message.gasMeters.map(e => e ? GasMeter.toJSON(e) : undefined);
        }
        else {
            obj.gasMeters = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.incentives = object.incentives?.map(e => Incentive.fromPartial(e)) || [];
        message.gasMeters = object.gasMeters?.map(e => GasMeter.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.incentives = object.incentives?.map(e => Incentive.fromAmino(e)) || [];
        message.gasMeters = object.gas_meters?.map(e => GasMeter.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.incentives) {
            obj.incentives = message.incentives.map(e => e ? Incentive.toAmino(e) : undefined);
        }
        else {
            obj.incentives = [];
        }
        if (message.gasMeters) {
            obj.gas_meters = message.gasMeters.map(e => e ? GasMeter.toAmino(e) : undefined);
        }
        else {
            obj.gas_meters = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.incentives.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        enableIncentives: false,
        allocationLimit: "",
        incentivesEpochIdentifier: "",
        rewardScaler: ""
    };
}
export const Params = {
    typeUrl: "/evmos.incentives.v1.Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.enableIncentives === true) {
            writer.uint32(8).bool(message.enableIncentives);
        }
        if (message.allocationLimit !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.allocationLimit, 18).atomics);
        }
        if (message.incentivesEpochIdentifier !== "") {
            writer.uint32(26).string(message.incentivesEpochIdentifier);
        }
        if (message.rewardScaler !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.rewardScaler, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enableIncentives = reader.bool();
                    break;
                case 2:
                    message.allocationLimit = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.incentivesEpochIdentifier = reader.string();
                    break;
                case 4:
                    message.rewardScaler = Decimal.fromAtomics(reader.string(), 18).toString();
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
            enableIncentives: isSet(object.enableIncentives) ? Boolean(object.enableIncentives) : false,
            allocationLimit: isSet(object.allocationLimit) ? String(object.allocationLimit) : "",
            incentivesEpochIdentifier: isSet(object.incentivesEpochIdentifier) ? String(object.incentivesEpochIdentifier) : "",
            rewardScaler: isSet(object.rewardScaler) ? String(object.rewardScaler) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.enableIncentives !== undefined && (obj.enableIncentives = message.enableIncentives);
        message.allocationLimit !== undefined && (obj.allocationLimit = message.allocationLimit);
        message.incentivesEpochIdentifier !== undefined && (obj.incentivesEpochIdentifier = message.incentivesEpochIdentifier);
        message.rewardScaler !== undefined && (obj.rewardScaler = message.rewardScaler);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.enableIncentives = object.enableIncentives ?? false;
        message.allocationLimit = object.allocationLimit ?? "";
        message.incentivesEpochIdentifier = object.incentivesEpochIdentifier ?? "";
        message.rewardScaler = object.rewardScaler ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.enable_incentives !== undefined && object.enable_incentives !== null) {
            message.enableIncentives = object.enable_incentives;
        }
        if (object.allocation_limit !== undefined && object.allocation_limit !== null) {
            message.allocationLimit = object.allocation_limit;
        }
        if (object.incentives_epoch_identifier !== undefined && object.incentives_epoch_identifier !== null) {
            message.incentivesEpochIdentifier = object.incentives_epoch_identifier;
        }
        if (object.reward_scaler !== undefined && object.reward_scaler !== null) {
            message.rewardScaler = object.reward_scaler;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.enable_incentives = message.enableIncentives;
        obj.allocation_limit = message.allocationLimit;
        obj.incentives_epoch_identifier = message.incentivesEpochIdentifier;
        obj.reward_scaler = message.rewardScaler;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.incentives.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
