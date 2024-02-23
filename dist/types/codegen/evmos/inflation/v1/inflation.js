import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
function createBaseInflationDistribution() {
    return {
        stakingRewards: "",
        usageIncentives: "",
        communityPool: ""
    };
}
export const InflationDistribution = {
    typeUrl: "/evmos.inflation.v1.InflationDistribution",
    encode(message, writer = _m0.Writer.create()) {
        if (message.stakingRewards !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.stakingRewards, 18).atomics);
        }
        if (message.usageIncentives !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.usageIncentives, 18).atomics);
        }
        if (message.communityPool !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.communityPool, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInflationDistribution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stakingRewards = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.usageIncentives = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.communityPool = Decimal.fromAtomics(reader.string(), 18).toString();
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
            stakingRewards: isSet(object.stakingRewards) ? String(object.stakingRewards) : "",
            usageIncentives: isSet(object.usageIncentives) ? String(object.usageIncentives) : "",
            communityPool: isSet(object.communityPool) ? String(object.communityPool) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.stakingRewards !== undefined && (obj.stakingRewards = message.stakingRewards);
        message.usageIncentives !== undefined && (obj.usageIncentives = message.usageIncentives);
        message.communityPool !== undefined && (obj.communityPool = message.communityPool);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInflationDistribution();
        message.stakingRewards = object.stakingRewards ?? "";
        message.usageIncentives = object.usageIncentives ?? "";
        message.communityPool = object.communityPool ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseInflationDistribution();
        if (object.staking_rewards !== undefined && object.staking_rewards !== null) {
            message.stakingRewards = object.staking_rewards;
        }
        if (object.usage_incentives !== undefined && object.usage_incentives !== null) {
            message.usageIncentives = object.usage_incentives;
        }
        if (object.community_pool !== undefined && object.community_pool !== null) {
            message.communityPool = object.community_pool;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.staking_rewards = message.stakingRewards;
        obj.usage_incentives = message.usageIncentives;
        obj.community_pool = message.communityPool;
        return obj;
    },
    fromAminoMsg(object) {
        return InflationDistribution.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return InflationDistribution.decode(message.value);
    },
    toProto(message) {
        return InflationDistribution.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.inflation.v1.InflationDistribution",
            value: InflationDistribution.encode(message).finish()
        };
    }
};
function createBaseExponentialCalculation() {
    return {
        a: "",
        r: "",
        c: "",
        bondingTarget: "",
        maxVariance: ""
    };
}
export const ExponentialCalculation = {
    typeUrl: "/evmos.inflation.v1.ExponentialCalculation",
    encode(message, writer = _m0.Writer.create()) {
        if (message.a !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.a, 18).atomics);
        }
        if (message.r !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.r, 18).atomics);
        }
        if (message.c !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.c, 18).atomics);
        }
        if (message.bondingTarget !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.bondingTarget, 18).atomics);
        }
        if (message.maxVariance !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.maxVariance, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExponentialCalculation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.a = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.r = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.c = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.bondingTarget = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.maxVariance = Decimal.fromAtomics(reader.string(), 18).toString();
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
            a: isSet(object.a) ? String(object.a) : "",
            r: isSet(object.r) ? String(object.r) : "",
            c: isSet(object.c) ? String(object.c) : "",
            bondingTarget: isSet(object.bondingTarget) ? String(object.bondingTarget) : "",
            maxVariance: isSet(object.maxVariance) ? String(object.maxVariance) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.a !== undefined && (obj.a = message.a);
        message.r !== undefined && (obj.r = message.r);
        message.c !== undefined && (obj.c = message.c);
        message.bondingTarget !== undefined && (obj.bondingTarget = message.bondingTarget);
        message.maxVariance !== undefined && (obj.maxVariance = message.maxVariance);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExponentialCalculation();
        message.a = object.a ?? "";
        message.r = object.r ?? "";
        message.c = object.c ?? "";
        message.bondingTarget = object.bondingTarget ?? "";
        message.maxVariance = object.maxVariance ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseExponentialCalculation();
        if (object.a !== undefined && object.a !== null) {
            message.a = object.a;
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = object.r;
        }
        if (object.c !== undefined && object.c !== null) {
            message.c = object.c;
        }
        if (object.bonding_target !== undefined && object.bonding_target !== null) {
            message.bondingTarget = object.bonding_target;
        }
        if (object.max_variance !== undefined && object.max_variance !== null) {
            message.maxVariance = object.max_variance;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.a = message.a;
        obj.r = message.r;
        obj.c = message.c;
        obj.bonding_target = message.bondingTarget;
        obj.max_variance = message.maxVariance;
        return obj;
    },
    fromAminoMsg(object) {
        return ExponentialCalculation.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExponentialCalculation.decode(message.value);
    },
    toProto(message) {
        return ExponentialCalculation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.inflation.v1.ExponentialCalculation",
            value: ExponentialCalculation.encode(message).finish()
        };
    }
};
