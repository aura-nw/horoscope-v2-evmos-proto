import { BaseVestingAccount, Period } from "../../../cosmos/vesting/v1beta1/vesting";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";
function createBaseClawbackVestingAccount() {
    return {
        baseVestingAccount: undefined,
        funderAddress: "",
        startTime: new Date(),
        lockupPeriods: [],
        vestingPeriods: []
    };
}
export const ClawbackVestingAccount = {
    typeUrl: "/evmos.vesting.v2.ClawbackVestingAccount",
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.funderAddress !== "") {
            writer.uint32(18).string(message.funderAddress);
        }
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.lockupPeriods) {
            Period.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.vestingPeriods) {
            Period.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClawbackVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.funderAddress = reader.string();
                    break;
                case 3:
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.lockupPeriods.push(Period.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
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
            baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined,
            funderAddress: isSet(object.funderAddress) ? String(object.funderAddress) : "",
            startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
            lockupPeriods: Array.isArray(object?.lockupPeriods) ? object.lockupPeriods.map((e) => Period.fromJSON(e)) : [],
            vestingPeriods: Array.isArray(object?.vestingPeriods) ? object.vestingPeriods.map((e) => Period.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined && (obj.baseVestingAccount = message.baseVestingAccount ? BaseVestingAccount.toJSON(message.baseVestingAccount) : undefined);
        message.funderAddress !== undefined && (obj.funderAddress = message.funderAddress);
        message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
        if (message.lockupPeriods) {
            obj.lockupPeriods = message.lockupPeriods.map(e => e ? Period.toJSON(e) : undefined);
        }
        else {
            obj.lockupPeriods = [];
        }
        if (message.vestingPeriods) {
            obj.vestingPeriods = message.vestingPeriods.map(e => e ? Period.toJSON(e) : undefined);
        }
        else {
            obj.vestingPeriods = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClawbackVestingAccount();
        message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
        message.funderAddress = object.funderAddress ?? "";
        message.startTime = object.startTime ?? undefined;
        message.lockupPeriods = object.lockupPeriods?.map(e => Period.fromPartial(e)) || [];
        message.vestingPeriods = object.vestingPeriods?.map(e => Period.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseClawbackVestingAccount();
        if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
            message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
        }
        if (object.funder_address !== undefined && object.funder_address !== null) {
            message.funderAddress = object.funder_address;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
        }
        message.lockupPeriods = object.lockup_periods?.map(e => Period.fromAmino(e)) || [];
        message.vestingPeriods = object.vesting_periods?.map(e => Period.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
        obj.funder_address = message.funderAddress;
        obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
        if (message.lockupPeriods) {
            obj.lockup_periods = message.lockupPeriods.map(e => e ? Period.toAmino(e) : undefined);
        }
        else {
            obj.lockup_periods = [];
        }
        if (message.vestingPeriods) {
            obj.vesting_periods = message.vestingPeriods.map(e => e ? Period.toAmino(e) : undefined);
        }
        else {
            obj.vesting_periods = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ClawbackVestingAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ClawbackVestingAccount.decode(message.value);
    },
    toProto(message) {
        return ClawbackVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.ClawbackVestingAccount",
            value: ClawbackVestingAccount.encode(message).finish()
        };
    }
};
function createBaseClawbackProposal() {
    return {
        title: "",
        description: "",
        address: "",
        destinationAddress: ""
    };
}
export const ClawbackProposal = {
    typeUrl: "/evmos.vesting.v2.ClawbackProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        if (message.destinationAddress !== "") {
            writer.uint32(34).string(message.destinationAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClawbackProposal();
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
                    message.address = reader.string();
                    break;
                case 4:
                    message.destinationAddress = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.address !== undefined && (obj.address = message.address);
        message.destinationAddress !== undefined && (obj.destinationAddress = message.destinationAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClawbackProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.address = object.address ?? "";
        message.destinationAddress = object.destinationAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseClawbackProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.destination_address !== undefined && object.destination_address !== null) {
            message.destinationAddress = object.destination_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.address = message.address;
        obj.destination_address = message.destinationAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return ClawbackProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ClawbackProposal.decode(message.value);
    },
    toProto(message) {
        return ClawbackProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.ClawbackProposal",
            value: ClawbackProposal.encode(message).finish()
        };
    }
};
