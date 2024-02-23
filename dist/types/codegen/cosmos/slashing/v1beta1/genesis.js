import { Params, ValidatorMissedBlockArray, ValidatorMissedBlockArrayLegacyMissedHeights, ValidatorSigningInfo, ValidatorSigningInfoLegacyMissedHeights } from "./slashing";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        signingInfos: [],
        missedBlocks: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signingInfos) {
            SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.missedBlocks) {
            ValidatorMissedBlockArray.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.signingInfos.push(SigningInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.missedBlocks.push(ValidatorMissedBlockArray.decode(reader, reader.uint32()));
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
            signingInfos: Array.isArray(object?.signingInfos) ? object.signingInfos.map((e) => SigningInfo.fromJSON(e)) : [],
            missedBlocks: Array.isArray(object?.missedBlocks) ? object.missedBlocks.map((e) => ValidatorMissedBlockArray.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.signingInfos) {
            obj.signingInfos = message.signingInfos.map(e => e ? SigningInfo.toJSON(e) : undefined);
        }
        else {
            obj.signingInfos = [];
        }
        if (message.missedBlocks) {
            obj.missedBlocks = message.missedBlocks.map(e => e ? ValidatorMissedBlockArray.toJSON(e) : undefined);
        }
        else {
            obj.missedBlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.signingInfos = object.signingInfos?.map(e => SigningInfo.fromPartial(e)) || [];
        message.missedBlocks = object.missedBlocks?.map(e => ValidatorMissedBlockArray.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.signingInfos = object.signing_infos?.map(e => SigningInfo.fromAmino(e)) || [];
        message.missedBlocks = object.missed_blocks?.map(e => ValidatorMissedBlockArray.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.signingInfos) {
            obj.signing_infos = message.signingInfos.map(e => e ? SigningInfo.toAmino(e) : undefined);
        }
        else {
            obj.signing_infos = [];
        }
        if (message.missedBlocks) {
            obj.missed_blocks = message.missedBlocks.map(e => e ? ValidatorMissedBlockArray.toAmino(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseGenesisStateLegacyMissingHeights() {
    return {
        params: Params.fromPartial({}),
        signingInfos: [],
        missedBlocks: []
    };
}
export const GenesisStateLegacyMissingHeights = {
    typeUrl: "/cosmos.slashing.v1beta1.GenesisStateLegacyMissingHeights",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signingInfos) {
            SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.missedBlocks) {
            ValidatorMissedBlockArrayLegacyMissedHeights.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisStateLegacyMissingHeights();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signingInfos.push(SigningInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.missedBlocks.push(ValidatorMissedBlockArrayLegacyMissedHeights.decode(reader, reader.uint32()));
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
            signingInfos: Array.isArray(object?.signingInfos) ? object.signingInfos.map((e) => SigningInfo.fromJSON(e)) : [],
            missedBlocks: Array.isArray(object?.missedBlocks) ? object.missedBlocks.map((e) => ValidatorMissedBlockArrayLegacyMissedHeights.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.signingInfos) {
            obj.signingInfos = message.signingInfos.map(e => e ? SigningInfo.toJSON(e) : undefined);
        }
        else {
            obj.signingInfos = [];
        }
        if (message.missedBlocks) {
            obj.missedBlocks = message.missedBlocks.map(e => e ? ValidatorMissedBlockArrayLegacyMissedHeights.toJSON(e) : undefined);
        }
        else {
            obj.missedBlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisStateLegacyMissingHeights();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.signingInfos = object.signingInfos?.map(e => SigningInfo.fromPartial(e)) || [];
        message.missedBlocks = object.missedBlocks?.map(e => ValidatorMissedBlockArrayLegacyMissedHeights.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisStateLegacyMissingHeights();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.signingInfos = object.signing_infos?.map(e => SigningInfo.fromAmino(e)) || [];
        message.missedBlocks = object.missed_blocks?.map(e => ValidatorMissedBlockArrayLegacyMissedHeights.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.signingInfos) {
            obj.signing_infos = message.signingInfos.map(e => e ? SigningInfo.toAmino(e) : undefined);
        }
        else {
            obj.signing_infos = [];
        }
        if (message.missedBlocks) {
            obj.missed_blocks = message.missedBlocks.map(e => e ? ValidatorMissedBlockArrayLegacyMissedHeights.toAmino(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisStateLegacyMissingHeights.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisStateLegacyMissingHeights",
            value: GenesisStateLegacyMissingHeights.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisStateLegacyMissingHeights.decode(message.value);
    },
    toProto(message) {
        return GenesisStateLegacyMissingHeights.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.GenesisStateLegacyMissingHeights",
            value: GenesisStateLegacyMissingHeights.encode(message).finish()
        };
    }
};
function createBaseGenesisStateLegacyV43() {
    return {
        params: Params.fromPartial({}),
        signingInfos: [],
        missedBlocks: []
    };
}
export const GenesisStateLegacyV43 = {
    typeUrl: "/cosmos.slashing.v1beta1.GenesisStateLegacyV43",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signingInfos) {
            SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.missedBlocks) {
            ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisStateLegacyV43();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signingInfos.push(SigningInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.missedBlocks.push(ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
            signingInfos: Array.isArray(object?.signingInfos) ? object.signingInfos.map((e) => SigningInfo.fromJSON(e)) : [],
            missedBlocks: Array.isArray(object?.missedBlocks) ? object.missedBlocks.map((e) => ValidatorMissedBlocks.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.signingInfos) {
            obj.signingInfos = message.signingInfos.map(e => e ? SigningInfo.toJSON(e) : undefined);
        }
        else {
            obj.signingInfos = [];
        }
        if (message.missedBlocks) {
            obj.missedBlocks = message.missedBlocks.map(e => e ? ValidatorMissedBlocks.toJSON(e) : undefined);
        }
        else {
            obj.missedBlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisStateLegacyV43();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.signingInfos = object.signingInfos?.map(e => SigningInfo.fromPartial(e)) || [];
        message.missedBlocks = object.missedBlocks?.map(e => ValidatorMissedBlocks.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisStateLegacyV43();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.signingInfos = object.signing_infos?.map(e => SigningInfo.fromAmino(e)) || [];
        message.missedBlocks = object.missed_blocks?.map(e => ValidatorMissedBlocks.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.signingInfos) {
            obj.signing_infos = message.signingInfos.map(e => e ? SigningInfo.toAmino(e) : undefined);
        }
        else {
            obj.signing_infos = [];
        }
        if (message.missedBlocks) {
            obj.missed_blocks = message.missedBlocks.map(e => e ? ValidatorMissedBlocks.toAmino(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisStateLegacyV43.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisStateLegacyV43",
            value: GenesisStateLegacyV43.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisStateLegacyV43.decode(message.value);
    },
    toProto(message) {
        return GenesisStateLegacyV43.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.GenesisStateLegacyV43",
            value: GenesisStateLegacyV43.encode(message).finish()
        };
    }
};
function createBaseSigningInfo() {
    return {
        address: "",
        validatorSigningInfo: ValidatorSigningInfo.fromPartial({})
    };
}
export const SigningInfo = {
    typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.validatorSigningInfo !== undefined) {
            ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.validatorSigningInfo = ValidatorSigningInfo.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? String(object.address) : "",
            validatorSigningInfo: isSet(object.validatorSigningInfo) ? ValidatorSigningInfo.fromJSON(object.validatorSigningInfo) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.validatorSigningInfo !== undefined && (obj.validatorSigningInfo = message.validatorSigningInfo ? ValidatorSigningInfo.toJSON(message.validatorSigningInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSigningInfo();
        message.address = object.address ?? "";
        message.validatorSigningInfo = object.validatorSigningInfo !== undefined && object.validatorSigningInfo !== null ? ValidatorSigningInfo.fromPartial(object.validatorSigningInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSigningInfo();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.validator_signing_info !== undefined && object.validator_signing_info !== null) {
            message.validatorSigningInfo = ValidatorSigningInfo.fromAmino(object.validator_signing_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.validator_signing_info = message.validatorSigningInfo ? ValidatorSigningInfo.toAmino(message.validatorSigningInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SigningInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SigningInfo",
            value: SigningInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SigningInfo.decode(message.value);
    },
    toProto(message) {
        return SigningInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
            value: SigningInfo.encode(message).finish()
        };
    }
};
function createBaseSigningInfoLegacyMissedHeights() {
    return {
        address: "",
        validatorSigningInfo: ValidatorSigningInfoLegacyMissedHeights.fromPartial({})
    };
}
export const SigningInfoLegacyMissedHeights = {
    typeUrl: "/cosmos.slashing.v1beta1.SigningInfoLegacyMissedHeights",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.validatorSigningInfo !== undefined) {
            ValidatorSigningInfoLegacyMissedHeights.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningInfoLegacyMissedHeights();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.validatorSigningInfo = ValidatorSigningInfoLegacyMissedHeights.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? String(object.address) : "",
            validatorSigningInfo: isSet(object.validatorSigningInfo) ? ValidatorSigningInfoLegacyMissedHeights.fromJSON(object.validatorSigningInfo) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.validatorSigningInfo !== undefined && (obj.validatorSigningInfo = message.validatorSigningInfo ? ValidatorSigningInfoLegacyMissedHeights.toJSON(message.validatorSigningInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSigningInfoLegacyMissedHeights();
        message.address = object.address ?? "";
        message.validatorSigningInfo = object.validatorSigningInfo !== undefined && object.validatorSigningInfo !== null ? ValidatorSigningInfoLegacyMissedHeights.fromPartial(object.validatorSigningInfo) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSigningInfoLegacyMissedHeights();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.validator_signing_info !== undefined && object.validator_signing_info !== null) {
            message.validatorSigningInfo = ValidatorSigningInfoLegacyMissedHeights.fromAmino(object.validator_signing_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.validator_signing_info = message.validatorSigningInfo ? ValidatorSigningInfoLegacyMissedHeights.toAmino(message.validatorSigningInfo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SigningInfoLegacyMissedHeights.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SigningInfoLegacyMissedHeights",
            value: SigningInfoLegacyMissedHeights.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SigningInfoLegacyMissedHeights.decode(message.value);
    },
    toProto(message) {
        return SigningInfoLegacyMissedHeights.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.SigningInfoLegacyMissedHeights",
            value: SigningInfoLegacyMissedHeights.encode(message).finish()
        };
    }
};
function createBaseValidatorMissedBlocks() {
    return {
        address: "",
        missedBlocks: []
    };
}
export const ValidatorMissedBlocks = {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.missedBlocks) {
            MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorMissedBlocks();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.missedBlocks.push(MissedBlock.decode(reader, reader.uint32()));
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
            address: isSet(object.address) ? String(object.address) : "",
            missedBlocks: Array.isArray(object?.missedBlocks) ? object.missedBlocks.map((e) => MissedBlock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.missedBlocks) {
            obj.missedBlocks = message.missedBlocks.map(e => e ? MissedBlock.toJSON(e) : undefined);
        }
        else {
            obj.missedBlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorMissedBlocks();
        message.address = object.address ?? "";
        message.missedBlocks = object.missedBlocks?.map(e => MissedBlock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorMissedBlocks();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.missedBlocks = object.missed_blocks?.map(e => MissedBlock.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.missedBlocks) {
            obj.missed_blocks = message.missedBlocks.map(e => e ? MissedBlock.toAmino(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorMissedBlocks.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorMissedBlocks",
            value: ValidatorMissedBlocks.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorMissedBlocks.decode(message.value);
    },
    toProto(message) {
        return ValidatorMissedBlocks.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
            value: ValidatorMissedBlocks.encode(message).finish()
        };
    }
};
function createBaseMissedBlock() {
    return {
        index: Long.ZERO,
        missed: false
    };
}
export const MissedBlock = {
    typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.index.isZero()) {
            writer.uint32(8).int64(message.index);
        }
        if (message.missed === true) {
            writer.uint32(16).bool(message.missed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissedBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.int64();
                    break;
                case 2:
                    message.missed = reader.bool();
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
            index: isSet(object.index) ? Long.fromValue(object.index) : Long.ZERO,
            missed: isSet(object.missed) ? Boolean(object.missed) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || Long.ZERO).toString());
        message.missed !== undefined && (obj.missed = message.missed);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMissedBlock();
        message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.ZERO;
        message.missed = object.missed ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMissedBlock();
        if (object.index !== undefined && object.index !== null) {
            message.index = Long.fromString(object.index);
        }
        if (object.missed !== undefined && object.missed !== null) {
            message.missed = object.missed;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        obj.missed = message.missed;
        return obj;
    },
    fromAminoMsg(object) {
        return MissedBlock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MissedBlock",
            value: MissedBlock.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MissedBlock.decode(message.value);
    },
    toProto(message) {
        return MissedBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
            value: MissedBlock.encode(message).finish()
        };
    }
};
