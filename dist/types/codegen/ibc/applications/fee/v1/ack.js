import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseIncentivizedAcknowledgement() {
    return {
        appAcknowledgement: new Uint8Array(),
        forwardRelayerAddress: "",
        underlyingAppSuccess: false
    };
}
export const IncentivizedAcknowledgement = {
    typeUrl: "/ibc.applications.fee.v1.IncentivizedAcknowledgement",
    encode(message, writer = _m0.Writer.create()) {
        if (message.appAcknowledgement.length !== 0) {
            writer.uint32(10).bytes(message.appAcknowledgement);
        }
        if (message.forwardRelayerAddress !== "") {
            writer.uint32(18).string(message.forwardRelayerAddress);
        }
        if (message.underlyingAppSuccess === true) {
            writer.uint32(24).bool(message.underlyingAppSuccess);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentivizedAcknowledgement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appAcknowledgement = reader.bytes();
                    break;
                case 2:
                    message.forwardRelayerAddress = reader.string();
                    break;
                case 3:
                    message.underlyingAppSuccess = reader.bool();
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
            appAcknowledgement: isSet(object.appAcknowledgement) ? bytesFromBase64(object.appAcknowledgement) : new Uint8Array(),
            forwardRelayerAddress: isSet(object.forwardRelayerAddress) ? String(object.forwardRelayerAddress) : "",
            underlyingAppSuccess: isSet(object.underlyingAppSuccess) ? Boolean(object.underlyingAppSuccess) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.appAcknowledgement !== undefined && (obj.appAcknowledgement = base64FromBytes(message.appAcknowledgement !== undefined ? message.appAcknowledgement : new Uint8Array()));
        message.forwardRelayerAddress !== undefined && (obj.forwardRelayerAddress = message.forwardRelayerAddress);
        message.underlyingAppSuccess !== undefined && (obj.underlyingAppSuccess = message.underlyingAppSuccess);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIncentivizedAcknowledgement();
        message.appAcknowledgement = object.appAcknowledgement ?? new Uint8Array();
        message.forwardRelayerAddress = object.forwardRelayerAddress ?? "";
        message.underlyingAppSuccess = object.underlyingAppSuccess ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseIncentivizedAcknowledgement();
        if (object.app_acknowledgement !== undefined && object.app_acknowledgement !== null) {
            message.appAcknowledgement = bytesFromBase64(object.app_acknowledgement);
        }
        if (object.forward_relayer_address !== undefined && object.forward_relayer_address !== null) {
            message.forwardRelayerAddress = object.forward_relayer_address;
        }
        if (object.underlying_app_success !== undefined && object.underlying_app_success !== null) {
            message.underlyingAppSuccess = object.underlying_app_success;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.app_acknowledgement = message.appAcknowledgement ? base64FromBytes(message.appAcknowledgement) : undefined;
        obj.forward_relayer_address = message.forwardRelayerAddress;
        obj.underlying_app_success = message.underlyingAppSuccess;
        return obj;
    },
    fromAminoMsg(object) {
        return IncentivizedAcknowledgement.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IncentivizedAcknowledgement",
            value: IncentivizedAcknowledgement.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return IncentivizedAcknowledgement.decode(message.value);
    },
    toProto(message) {
        return IncentivizedAcknowledgement.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.fee.v1.IncentivizedAcknowledgement",
            value: IncentivizedAcknowledgement.encode(message).finish()
        };
    }
};
