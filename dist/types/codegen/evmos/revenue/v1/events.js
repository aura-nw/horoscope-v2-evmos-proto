import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseEventRegisterRevenue() {
    return {
        deployerAddress: "",
        contractAddress: "",
        effectiveWithdrawer: ""
    };
}
export const EventRegisterRevenue = {
    typeUrl: "/evmos.revenue.v1.EventRegisterRevenue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.deployerAddress !== "") {
            writer.uint32(10).string(message.deployerAddress);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        if (message.effectiveWithdrawer !== "") {
            writer.uint32(26).string(message.effectiveWithdrawer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRegisterRevenue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployerAddress = reader.string();
                    break;
                case 2:
                    message.contractAddress = reader.string();
                    break;
                case 3:
                    message.effectiveWithdrawer = reader.string();
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
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            effectiveWithdrawer: isSet(object.effectiveWithdrawer) ? String(object.effectiveWithdrawer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.effectiveWithdrawer !== undefined && (obj.effectiveWithdrawer = message.effectiveWithdrawer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventRegisterRevenue();
        message.deployerAddress = object.deployerAddress ?? "";
        message.contractAddress = object.contractAddress ?? "";
        message.effectiveWithdrawer = object.effectiveWithdrawer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventRegisterRevenue();
        if (object.deployer_address !== undefined && object.deployer_address !== null) {
            message.deployerAddress = object.deployer_address;
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.effective_withdrawer !== undefined && object.effective_withdrawer !== null) {
            message.effectiveWithdrawer = object.effective_withdrawer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deployer_address = message.deployerAddress;
        obj.contract_address = message.contractAddress;
        obj.effective_withdrawer = message.effectiveWithdrawer;
        return obj;
    },
    fromAminoMsg(object) {
        return EventRegisterRevenue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventRegisterRevenue.decode(message.value);
    },
    toProto(message) {
        return EventRegisterRevenue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.EventRegisterRevenue",
            value: EventRegisterRevenue.encode(message).finish()
        };
    }
};
function createBaseEventUpdateRevenue() {
    return {
        contractAddress: "",
        deployerAddress: "",
        withdrawerAddress: ""
    };
}
export const EventUpdateRevenue = {
    typeUrl: "/evmos.revenue.v1.EventUpdateRevenue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.deployerAddress !== "") {
            writer.uint32(18).string(message.deployerAddress);
        }
        if (message.withdrawerAddress !== "") {
            writer.uint32(26).string(message.withdrawerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventUpdateRevenue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.deployerAddress = reader.string();
                    break;
                case 3:
                    message.withdrawerAddress = reader.string();
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
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
            withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
        message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventUpdateRevenue();
        message.contractAddress = object.contractAddress ?? "";
        message.deployerAddress = object.deployerAddress ?? "";
        message.withdrawerAddress = object.withdrawerAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventUpdateRevenue();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.deployer_address !== undefined && object.deployer_address !== null) {
            message.deployerAddress = object.deployer_address;
        }
        if (object.withdrawer_address !== undefined && object.withdrawer_address !== null) {
            message.withdrawerAddress = object.withdrawer_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress;
        obj.deployer_address = message.deployerAddress;
        obj.withdrawer_address = message.withdrawerAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return EventUpdateRevenue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventUpdateRevenue.decode(message.value);
    },
    toProto(message) {
        return EventUpdateRevenue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.EventUpdateRevenue",
            value: EventUpdateRevenue.encode(message).finish()
        };
    }
};
function createBaseEventCancelRevenue() {
    return {
        deployerAddress: "",
        contractAddress: ""
    };
}
export const EventCancelRevenue = {
    typeUrl: "/evmos.revenue.v1.EventCancelRevenue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.deployerAddress !== "") {
            writer.uint32(10).string(message.deployerAddress);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCancelRevenue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deployerAddress = reader.string();
                    break;
                case 2:
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
            deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventCancelRevenue();
        message.deployerAddress = object.deployerAddress ?? "";
        message.contractAddress = object.contractAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventCancelRevenue();
        if (object.deployer_address !== undefined && object.deployer_address !== null) {
            message.deployerAddress = object.deployer_address;
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deployer_address = message.deployerAddress;
        obj.contract_address = message.contractAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return EventCancelRevenue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventCancelRevenue.decode(message.value);
    },
    toProto(message) {
        return EventCancelRevenue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.EventCancelRevenue",
            value: EventCancelRevenue.encode(message).finish()
        };
    }
};
function createBaseEventDistributeRevenue() {
    return {
        sender: "",
        contract: "",
        withdrawerAddress: "",
        amount: ""
    };
}
export const EventDistributeRevenue = {
    typeUrl: "/evmos.revenue.v1.EventDistributeRevenue",
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contract !== "") {
            writer.uint32(18).string(message.contract);
        }
        if (message.withdrawerAddress !== "") {
            writer.uint32(26).string(message.withdrawerAddress);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventDistributeRevenue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.contract = reader.string();
                    break;
                case 3:
                    message.withdrawerAddress = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            contract: isSet(object.contract) ? String(object.contract) : "",
            withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : "",
            amount: isSet(object.amount) ? String(object.amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.contract !== undefined && (obj.contract = message.contract);
        message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventDistributeRevenue();
        message.sender = object.sender ?? "";
        message.contract = object.contract ?? "";
        message.withdrawerAddress = object.withdrawerAddress ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventDistributeRevenue();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        }
        if (object.withdrawer_address !== undefined && object.withdrawer_address !== null) {
            message.withdrawerAddress = object.withdrawer_address;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.contract = message.contract;
        obj.withdrawer_address = message.withdrawerAddress;
        obj.amount = message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return EventDistributeRevenue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventDistributeRevenue.decode(message.value);
    },
    toProto(message) {
        return EventDistributeRevenue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.EventDistributeRevenue",
            value: EventDistributeRevenue.encode(message).finish()
        };
    }
};
