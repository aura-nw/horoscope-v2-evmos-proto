import { Timestamp } from "../../../google/protobuf/timestamp";
import { Period } from "../../../cosmos/vesting/v1beta1/vesting";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
function createBaseMsgCreateClawbackVestingAccount() {
    return {
        funderAddress: "",
        vestingAddress: "",
        enableGovClawback: false
    };
}
export const MsgCreateClawbackVestingAccount = {
    typeUrl: "/evmos.vesting.v2.MsgCreateClawbackVestingAccount",
    encode(message, writer = _m0.Writer.create()) {
        if (message.funderAddress !== "") {
            writer.uint32(10).string(message.funderAddress);
        }
        if (message.vestingAddress !== "") {
            writer.uint32(18).string(message.vestingAddress);
        }
        if (message.enableGovClawback === true) {
            writer.uint32(24).bool(message.enableGovClawback);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClawbackVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funderAddress = reader.string();
                    break;
                case 2:
                    message.vestingAddress = reader.string();
                    break;
                case 3:
                    message.enableGovClawback = reader.bool();
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
            funderAddress: isSet(object.funderAddress) ? String(object.funderAddress) : "",
            vestingAddress: isSet(object.vestingAddress) ? String(object.vestingAddress) : "",
            enableGovClawback: isSet(object.enableGovClawback) ? Boolean(object.enableGovClawback) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.funderAddress !== undefined && (obj.funderAddress = message.funderAddress);
        message.vestingAddress !== undefined && (obj.vestingAddress = message.vestingAddress);
        message.enableGovClawback !== undefined && (obj.enableGovClawback = message.enableGovClawback);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateClawbackVestingAccount();
        message.funderAddress = object.funderAddress ?? "";
        message.vestingAddress = object.vestingAddress ?? "";
        message.enableGovClawback = object.enableGovClawback ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateClawbackVestingAccount();
        if (object.funder_address !== undefined && object.funder_address !== null) {
            message.funderAddress = object.funder_address;
        }
        if (object.vesting_address !== undefined && object.vesting_address !== null) {
            message.vestingAddress = object.vesting_address;
        }
        if (object.enable_gov_clawback !== undefined && object.enable_gov_clawback !== null) {
            message.enableGovClawback = object.enable_gov_clawback;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.funder_address = message.funderAddress;
        obj.vesting_address = message.vestingAddress;
        obj.enable_gov_clawback = message.enableGovClawback;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateClawbackVestingAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateClawbackVestingAccount.decode(message.value);
    },
    toProto(message) {
        return MsgCreateClawbackVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.MsgCreateClawbackVestingAccount",
            value: MsgCreateClawbackVestingAccount.encode(message).finish()
        };
    }
};
function createBaseMsgCreateClawbackVestingAccountResponse() {
    return {};
}
export const MsgCreateClawbackVestingAccountResponse = {
    typeUrl: "/evmos.vesting.v2.MsgCreateClawbackVestingAccountResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClawbackVestingAccountResponse();
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
        const message = createBaseMsgCreateClawbackVestingAccountResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateClawbackVestingAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateClawbackVestingAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateClawbackVestingAccountResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateClawbackVestingAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.MsgCreateClawbackVestingAccountResponse",
            value: MsgCreateClawbackVestingAccountResponse.encode(message).finish()
        };
    }
};
function createBaseMsgFundVestingAccount() {
    return {
        funderAddress: "",
        vestingAddress: "",
        startTime: new Date(),
        lockupPeriods: [],
        vestingPeriods: []
    };
}
export const MsgFundVestingAccount = {
    typeUrl: "/evmos.vesting.v2.MsgFundVestingAccount",
    encode(message, writer = _m0.Writer.create()) {
        if (message.funderAddress !== "") {
            writer.uint32(10).string(message.funderAddress);
        }
        if (message.vestingAddress !== "") {
            writer.uint32(18).string(message.vestingAddress);
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
        const message = createBaseMsgFundVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funderAddress = reader.string();
                    break;
                case 2:
                    message.vestingAddress = reader.string();
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
            funderAddress: isSet(object.funderAddress) ? String(object.funderAddress) : "",
            vestingAddress: isSet(object.vestingAddress) ? String(object.vestingAddress) : "",
            startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
            lockupPeriods: Array.isArray(object?.lockupPeriods) ? object.lockupPeriods.map((e) => Period.fromJSON(e)) : [],
            vestingPeriods: Array.isArray(object?.vestingPeriods) ? object.vestingPeriods.map((e) => Period.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.funderAddress !== undefined && (obj.funderAddress = message.funderAddress);
        message.vestingAddress !== undefined && (obj.vestingAddress = message.vestingAddress);
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
        const message = createBaseMsgFundVestingAccount();
        message.funderAddress = object.funderAddress ?? "";
        message.vestingAddress = object.vestingAddress ?? "";
        message.startTime = object.startTime ?? undefined;
        message.lockupPeriods = object.lockupPeriods?.map(e => Period.fromPartial(e)) || [];
        message.vestingPeriods = object.vestingPeriods?.map(e => Period.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgFundVestingAccount();
        if (object.funder_address !== undefined && object.funder_address !== null) {
            message.funderAddress = object.funder_address;
        }
        if (object.vesting_address !== undefined && object.vesting_address !== null) {
            message.vestingAddress = object.vesting_address;
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
        obj.funder_address = message.funderAddress;
        obj.vesting_address = message.vestingAddress;
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
        return MsgFundVestingAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgFundVestingAccount.decode(message.value);
    },
    toProto(message) {
        return MsgFundVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.MsgFundVestingAccount",
            value: MsgFundVestingAccount.encode(message).finish()
        };
    }
};
function createBaseMsgFundVestingAccountResponse() {
    return {};
}
export const MsgFundVestingAccountResponse = {
    typeUrl: "/evmos.vesting.v2.MsgFundVestingAccountResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundVestingAccountResponse();
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
        const message = createBaseMsgFundVestingAccountResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgFundVestingAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgFundVestingAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgFundVestingAccountResponse.decode(message.value);
    },
    toProto(message) {
        return MsgFundVestingAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.MsgFundVestingAccountResponse",
            value: MsgFundVestingAccountResponse.encode(message).finish()
        };
    }
};
function createBaseMsgClawback() {
    return {
        funderAddress: "",
        accountAddress: "",
        destAddress: ""
    };
}
export const MsgClawback = {
    typeUrl: "/evmos.vesting.v2.MsgClawback",
    encode(message, writer = _m0.Writer.create()) {
        if (message.funderAddress !== "") {
            writer.uint32(10).string(message.funderAddress);
        }
        if (message.accountAddress !== "") {
            writer.uint32(18).string(message.accountAddress);
        }
        if (message.destAddress !== "") {
            writer.uint32(26).string(message.destAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClawback();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funderAddress = reader.string();
                    break;
                case 2:
                    message.accountAddress = reader.string();
                    break;
                case 3:
                    message.destAddress = reader.string();
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
            funderAddress: isSet(object.funderAddress) ? String(object.funderAddress) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
            destAddress: isSet(object.destAddress) ? String(object.destAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.funderAddress !== undefined && (obj.funderAddress = message.funderAddress);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        message.destAddress !== undefined && (obj.destAddress = message.destAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgClawback();
        message.funderAddress = object.funderAddress ?? "";
        message.accountAddress = object.accountAddress ?? "";
        message.destAddress = object.destAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgClawback();
        if (object.funder_address !== undefined && object.funder_address !== null) {
            message.funderAddress = object.funder_address;
        }
        if (object.account_address !== undefined && object.account_address !== null) {
            message.accountAddress = object.account_address;
        }
        if (object.dest_address !== undefined && object.dest_address !== null) {
            message.destAddress = object.dest_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.funder_address = message.funderAddress;
        obj.account_address = message.accountAddress;
        obj.dest_address = message.destAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgClawback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgClawback.decode(message.value);
    },
    toProto(message) {
        return MsgClawback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.MsgClawback",
            value: MsgClawback.encode(message).finish()
        };
    }
};
function createBaseMsgClawbackResponse() {
    return {
        coins: []
    };
}
export const MsgClawbackResponse = {
    typeUrl: "/evmos.vesting.v2.MsgClawbackResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClawbackResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgClawbackResponse();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgClawbackResponse();
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgClawbackResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgClawbackResponse.decode(message.value);
    },
    toProto(message) {
        return MsgClawbackResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.MsgClawbackResponse",
            value: MsgClawbackResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateVestingFunder() {
    return {
        funderAddress: "",
        newFunderAddress: "",
        vestingAddress: ""
    };
}
export const MsgUpdateVestingFunder = {
    typeUrl: "/evmos.vesting.v2.MsgUpdateVestingFunder",
    encode(message, writer = _m0.Writer.create()) {
        if (message.funderAddress !== "") {
            writer.uint32(10).string(message.funderAddress);
        }
        if (message.newFunderAddress !== "") {
            writer.uint32(18).string(message.newFunderAddress);
        }
        if (message.vestingAddress !== "") {
            writer.uint32(26).string(message.vestingAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateVestingFunder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funderAddress = reader.string();
                    break;
                case 2:
                    message.newFunderAddress = reader.string();
                    break;
                case 3:
                    message.vestingAddress = reader.string();
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
            funderAddress: isSet(object.funderAddress) ? String(object.funderAddress) : "",
            newFunderAddress: isSet(object.newFunderAddress) ? String(object.newFunderAddress) : "",
            vestingAddress: isSet(object.vestingAddress) ? String(object.vestingAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.funderAddress !== undefined && (obj.funderAddress = message.funderAddress);
        message.newFunderAddress !== undefined && (obj.newFunderAddress = message.newFunderAddress);
        message.vestingAddress !== undefined && (obj.vestingAddress = message.vestingAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateVestingFunder();
        message.funderAddress = object.funderAddress ?? "";
        message.newFunderAddress = object.newFunderAddress ?? "";
        message.vestingAddress = object.vestingAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateVestingFunder();
        if (object.funder_address !== undefined && object.funder_address !== null) {
            message.funderAddress = object.funder_address;
        }
        if (object.new_funder_address !== undefined && object.new_funder_address !== null) {
            message.newFunderAddress = object.new_funder_address;
        }
        if (object.vesting_address !== undefined && object.vesting_address !== null) {
            message.vestingAddress = object.vesting_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.funder_address = message.funderAddress;
        obj.new_funder_address = message.newFunderAddress;
        obj.vesting_address = message.vestingAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateVestingFunder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateVestingFunder.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateVestingFunder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.MsgUpdateVestingFunder",
            value: MsgUpdateVestingFunder.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateVestingFunderResponse() {
    return {};
}
export const MsgUpdateVestingFunderResponse = {
    typeUrl: "/evmos.vesting.v2.MsgUpdateVestingFunderResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateVestingFunderResponse();
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
        const message = createBaseMsgUpdateVestingFunderResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateVestingFunderResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateVestingFunderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateVestingFunderResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateVestingFunderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.MsgUpdateVestingFunderResponse",
            value: MsgUpdateVestingFunderResponse.encode(message).finish()
        };
    }
};
function createBaseMsgConvertVestingAccount() {
    return {
        vestingAddress: ""
    };
}
export const MsgConvertVestingAccount = {
    typeUrl: "/evmos.vesting.v2.MsgConvertVestingAccount",
    encode(message, writer = _m0.Writer.create()) {
        if (message.vestingAddress !== "") {
            writer.uint32(10).string(message.vestingAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vestingAddress = reader.string();
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
            vestingAddress: isSet(object.vestingAddress) ? String(object.vestingAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.vestingAddress !== undefined && (obj.vestingAddress = message.vestingAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConvertVestingAccount();
        message.vestingAddress = object.vestingAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgConvertVestingAccount();
        if (object.vesting_address !== undefined && object.vesting_address !== null) {
            message.vestingAddress = object.vesting_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vesting_address = message.vestingAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConvertVestingAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgConvertVestingAccount.decode(message.value);
    },
    toProto(message) {
        return MsgConvertVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.MsgConvertVestingAccount",
            value: MsgConvertVestingAccount.encode(message).finish()
        };
    }
};
function createBaseMsgConvertVestingAccountResponse() {
    return {};
}
export const MsgConvertVestingAccountResponse = {
    typeUrl: "/evmos.vesting.v2.MsgConvertVestingAccountResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConvertVestingAccountResponse();
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
        const message = createBaseMsgConvertVestingAccountResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgConvertVestingAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConvertVestingAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgConvertVestingAccountResponse.decode(message.value);
    },
    toProto(message) {
        return MsgConvertVestingAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.MsgConvertVestingAccountResponse",
            value: MsgConvertVestingAccountResponse.encode(message).finish()
        };
    }
};
