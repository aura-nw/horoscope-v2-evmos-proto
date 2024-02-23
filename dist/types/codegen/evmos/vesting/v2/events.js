import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseEventCreateClawbackVestingAccount() {
    return {
        funder: "",
        vestingAccount: ""
    };
}
export const EventCreateClawbackVestingAccount = {
    typeUrl: "/evmos.vesting.v2.EventCreateClawbackVestingAccount",
    encode(message, writer = _m0.Writer.create()) {
        if (message.funder !== "") {
            writer.uint32(10).string(message.funder);
        }
        if (message.vestingAccount !== "") {
            writer.uint32(18).string(message.vestingAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateClawbackVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funder = reader.string();
                    break;
                case 2:
                    message.vestingAccount = reader.string();
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
            funder: isSet(object.funder) ? String(object.funder) : "",
            vestingAccount: isSet(object.vestingAccount) ? String(object.vestingAccount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.funder !== undefined && (obj.funder = message.funder);
        message.vestingAccount !== undefined && (obj.vestingAccount = message.vestingAccount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventCreateClawbackVestingAccount();
        message.funder = object.funder ?? "";
        message.vestingAccount = object.vestingAccount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCreateClawbackVestingAccount();
        if (object.funder !== undefined && object.funder !== null) {
            message.funder = object.funder;
        }
        if (object.vesting_account !== undefined && object.vesting_account !== null) {
            message.vestingAccount = object.vesting_account;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.funder = message.funder;
        obj.vesting_account = message.vestingAccount;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCreateClawbackVestingAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCreateClawbackVestingAccount.decode(message.value);
    },
    toProto(message) {
        return EventCreateClawbackVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.EventCreateClawbackVestingAccount",
            value: EventCreateClawbackVestingAccount.encode(message).finish()
        };
    }
};
function createBaseEventFundVestingAccount() {
    return {
        funder: "",
        coins: "",
        startTime: "",
        vestingAccount: ""
    };
}
export const EventFundVestingAccount = {
    typeUrl: "/evmos.vesting.v2.EventFundVestingAccount",
    encode(message, writer = _m0.Writer.create()) {
        if (message.funder !== "") {
            writer.uint32(10).string(message.funder);
        }
        if (message.coins !== "") {
            writer.uint32(18).string(message.coins);
        }
        if (message.startTime !== "") {
            writer.uint32(26).string(message.startTime);
        }
        if (message.vestingAccount !== "") {
            writer.uint32(42).string(message.vestingAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventFundVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funder = reader.string();
                    break;
                case 2:
                    message.coins = reader.string();
                    break;
                case 3:
                    message.startTime = reader.string();
                    break;
                case 5:
                    message.vestingAccount = reader.string();
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
            funder: isSet(object.funder) ? String(object.funder) : "",
            coins: isSet(object.coins) ? String(object.coins) : "",
            startTime: isSet(object.startTime) ? String(object.startTime) : "",
            vestingAccount: isSet(object.vestingAccount) ? String(object.vestingAccount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.funder !== undefined && (obj.funder = message.funder);
        message.coins !== undefined && (obj.coins = message.coins);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.vestingAccount !== undefined && (obj.vestingAccount = message.vestingAccount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventFundVestingAccount();
        message.funder = object.funder ?? "";
        message.coins = object.coins ?? "";
        message.startTime = object.startTime ?? "";
        message.vestingAccount = object.vestingAccount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventFundVestingAccount();
        if (object.funder !== undefined && object.funder !== null) {
            message.funder = object.funder;
        }
        if (object.coins !== undefined && object.coins !== null) {
            message.coins = object.coins;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = object.start_time;
        }
        if (object.vesting_account !== undefined && object.vesting_account !== null) {
            message.vestingAccount = object.vesting_account;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.funder = message.funder;
        obj.coins = message.coins;
        obj.start_time = message.startTime;
        obj.vesting_account = message.vestingAccount;
        return obj;
    },
    fromAminoMsg(object) {
        return EventFundVestingAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventFundVestingAccount.decode(message.value);
    },
    toProto(message) {
        return EventFundVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.EventFundVestingAccount",
            value: EventFundVestingAccount.encode(message).finish()
        };
    }
};
function createBaseEventClawback() {
    return {
        funder: "",
        account: "",
        destination: ""
    };
}
export const EventClawback = {
    typeUrl: "/evmos.vesting.v2.EventClawback",
    encode(message, writer = _m0.Writer.create()) {
        if (message.funder !== "") {
            writer.uint32(10).string(message.funder);
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        if (message.destination !== "") {
            writer.uint32(26).string(message.destination);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventClawback();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funder = reader.string();
                    break;
                case 2:
                    message.account = reader.string();
                    break;
                case 3:
                    message.destination = reader.string();
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
            funder: isSet(object.funder) ? String(object.funder) : "",
            account: isSet(object.account) ? String(object.account) : "",
            destination: isSet(object.destination) ? String(object.destination) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.funder !== undefined && (obj.funder = message.funder);
        message.account !== undefined && (obj.account = message.account);
        message.destination !== undefined && (obj.destination = message.destination);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventClawback();
        message.funder = object.funder ?? "";
        message.account = object.account ?? "";
        message.destination = object.destination ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventClawback();
        if (object.funder !== undefined && object.funder !== null) {
            message.funder = object.funder;
        }
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        if (object.destination !== undefined && object.destination !== null) {
            message.destination = object.destination;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.funder = message.funder;
        obj.account = message.account;
        obj.destination = message.destination;
        return obj;
    },
    fromAminoMsg(object) {
        return EventClawback.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventClawback.decode(message.value);
    },
    toProto(message) {
        return EventClawback.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.EventClawback",
            value: EventClawback.encode(message).finish()
        };
    }
};
function createBaseEventUpdateVestingFunder() {
    return {
        funder: "",
        account: "",
        newFunder: ""
    };
}
export const EventUpdateVestingFunder = {
    typeUrl: "/evmos.vesting.v2.EventUpdateVestingFunder",
    encode(message, writer = _m0.Writer.create()) {
        if (message.funder !== "") {
            writer.uint32(10).string(message.funder);
        }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        if (message.newFunder !== "") {
            writer.uint32(26).string(message.newFunder);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateVestingFunder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funder = reader.string();
                    break;
                case 2:
                    message.account = reader.string();
                    break;
                case 3:
                    message.newFunder = reader.string();
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
            funder: isSet(object.funder) ? String(object.funder) : "",
            account: isSet(object.account) ? String(object.account) : "",
            newFunder: isSet(object.newFunder) ? String(object.newFunder) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.funder !== undefined && (obj.funder = message.funder);
        message.account !== undefined && (obj.account = message.account);
        message.newFunder !== undefined && (obj.newFunder = message.newFunder);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateVestingFunder();
        message.funder = object.funder ?? "";
        message.account = object.account ?? "";
        message.newFunder = object.newFunder ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateVestingFunder();
        if (object.funder !== undefined && object.funder !== null) {
            message.funder = object.funder;
        }
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        if (object.new_funder !== undefined && object.new_funder !== null) {
            message.newFunder = object.new_funder;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.funder = message.funder;
        obj.account = message.account;
        obj.new_funder = message.newFunder;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUpdateVestingFunder.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventUpdateVestingFunder.decode(message.value);
    },
    toProto(message) {
        return EventUpdateVestingFunder.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.EventUpdateVestingFunder",
            value: EventUpdateVestingFunder.encode(message).finish()
        };
    }
};
