import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Decimal } from "@cosmjs/math";
function createBaseParams() {
    return {
        noBaseFee: false,
        baseFeeChangeDenominator: 0,
        elasticityMultiplier: 0,
        enableHeight: Long.ZERO,
        baseFee: "",
        minGasPrice: "",
        minGasMultiplier: ""
    };
}
export const Params = {
    typeUrl: "/ethermint.feemarket.v1.Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.noBaseFee === true) {
            writer.uint32(8).bool(message.noBaseFee);
        }
        if (message.baseFeeChangeDenominator !== 0) {
            writer.uint32(16).uint32(message.baseFeeChangeDenominator);
        }
        if (message.elasticityMultiplier !== 0) {
            writer.uint32(24).uint32(message.elasticityMultiplier);
        }
        if (!message.enableHeight.isZero()) {
            writer.uint32(40).int64(message.enableHeight);
        }
        if (message.baseFee !== "") {
            writer.uint32(50).string(message.baseFee);
        }
        if (message.minGasPrice !== "") {
            writer.uint32(58).string(Decimal.fromUserInput(message.minGasPrice, 18).atomics);
        }
        if (message.minGasMultiplier !== "") {
            writer.uint32(66).string(Decimal.fromUserInput(message.minGasMultiplier, 18).atomics);
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
                    message.noBaseFee = reader.bool();
                    break;
                case 2:
                    message.baseFeeChangeDenominator = reader.uint32();
                    break;
                case 3:
                    message.elasticityMultiplier = reader.uint32();
                    break;
                case 5:
                    message.enableHeight = reader.int64();
                    break;
                case 6:
                    message.baseFee = reader.string();
                    break;
                case 7:
                    message.minGasPrice = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.minGasMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
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
            noBaseFee: isSet(object.noBaseFee) ? Boolean(object.noBaseFee) : false,
            baseFeeChangeDenominator: isSet(object.baseFeeChangeDenominator) ? Number(object.baseFeeChangeDenominator) : 0,
            elasticityMultiplier: isSet(object.elasticityMultiplier) ? Number(object.elasticityMultiplier) : 0,
            enableHeight: isSet(object.enableHeight) ? Long.fromValue(object.enableHeight) : Long.ZERO,
            baseFee: isSet(object.baseFee) ? String(object.baseFee) : "",
            minGasPrice: isSet(object.minGasPrice) ? String(object.minGasPrice) : "",
            minGasMultiplier: isSet(object.minGasMultiplier) ? String(object.minGasMultiplier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.noBaseFee !== undefined && (obj.noBaseFee = message.noBaseFee);
        message.baseFeeChangeDenominator !== undefined && (obj.baseFeeChangeDenominator = Math.round(message.baseFeeChangeDenominator));
        message.elasticityMultiplier !== undefined && (obj.elasticityMultiplier = Math.round(message.elasticityMultiplier));
        message.enableHeight !== undefined && (obj.enableHeight = (message.enableHeight || Long.ZERO).toString());
        message.baseFee !== undefined && (obj.baseFee = message.baseFee);
        message.minGasPrice !== undefined && (obj.minGasPrice = message.minGasPrice);
        message.minGasMultiplier !== undefined && (obj.minGasMultiplier = message.minGasMultiplier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.noBaseFee = object.noBaseFee ?? false;
        message.baseFeeChangeDenominator = object.baseFeeChangeDenominator ?? 0;
        message.elasticityMultiplier = object.elasticityMultiplier ?? 0;
        message.enableHeight = object.enableHeight !== undefined && object.enableHeight !== null ? Long.fromValue(object.enableHeight) : Long.ZERO;
        message.baseFee = object.baseFee ?? "";
        message.minGasPrice = object.minGasPrice ?? "";
        message.minGasMultiplier = object.minGasMultiplier ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.no_base_fee !== undefined && object.no_base_fee !== null) {
            message.noBaseFee = object.no_base_fee;
        }
        if (object.base_fee_change_denominator !== undefined && object.base_fee_change_denominator !== null) {
            message.baseFeeChangeDenominator = object.base_fee_change_denominator;
        }
        if (object.elasticity_multiplier !== undefined && object.elasticity_multiplier !== null) {
            message.elasticityMultiplier = object.elasticity_multiplier;
        }
        if (object.enable_height !== undefined && object.enable_height !== null) {
            message.enableHeight = Long.fromString(object.enable_height);
        }
        if (object.base_fee !== undefined && object.base_fee !== null) {
            message.baseFee = object.base_fee;
        }
        if (object.min_gas_price !== undefined && object.min_gas_price !== null) {
            message.minGasPrice = object.min_gas_price;
        }
        if (object.min_gas_multiplier !== undefined && object.min_gas_multiplier !== null) {
            message.minGasMultiplier = object.min_gas_multiplier;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.no_base_fee = message.noBaseFee;
        obj.base_fee_change_denominator = message.baseFeeChangeDenominator;
        obj.elasticity_multiplier = message.elasticityMultiplier;
        obj.enable_height = message.enableHeight ? message.enableHeight.toString() : undefined;
        obj.base_fee = message.baseFee;
        obj.min_gas_price = message.minGasPrice;
        obj.min_gas_multiplier = message.minGasMultiplier;
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
            typeUrl: "/ethermint.feemarket.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
