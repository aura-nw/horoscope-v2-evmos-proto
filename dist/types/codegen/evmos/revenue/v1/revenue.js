import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseRevenue() {
    return {
        contractAddress: "",
        deployerAddress: "",
        withdrawerAddress: ""
    };
}
export const Revenue = {
    typeUrl: "/evmos.revenue.v1.Revenue",
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
        const message = createBaseRevenue();
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
        const message = createBaseRevenue();
        message.contractAddress = object.contractAddress ?? "";
        message.deployerAddress = object.deployerAddress ?? "";
        message.withdrawerAddress = object.withdrawerAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRevenue();
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
        return Revenue.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Revenue.decode(message.value);
    },
    toProto(message) {
        return Revenue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.revenue.v1.Revenue",
            value: Revenue.encode(message).finish()
        };
    }
};
