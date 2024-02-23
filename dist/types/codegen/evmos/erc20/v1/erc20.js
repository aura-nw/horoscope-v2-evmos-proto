import { Metadata } from "../../../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** Owner enumerates the ownership of a ERC20 contract. */
export var Owner;
(function (Owner) {
    /** OWNER_UNSPECIFIED - OWNER_UNSPECIFIED defines an invalid/undefined owner. */
    Owner[Owner["OWNER_UNSPECIFIED"] = 0] = "OWNER_UNSPECIFIED";
    /** OWNER_MODULE - OWNER_MODULE - erc20 is owned by the erc20 module account. */
    Owner[Owner["OWNER_MODULE"] = 1] = "OWNER_MODULE";
    /** OWNER_EXTERNAL - OWNER_EXTERNAL - erc20 is owned by an external account. */
    Owner[Owner["OWNER_EXTERNAL"] = 2] = "OWNER_EXTERNAL";
    Owner[Owner["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Owner || (Owner = {}));
export const OwnerSDKType = Owner;
export const OwnerAmino = Owner;
export function ownerFromJSON(object) {
    switch (object) {
        case 0:
        case "OWNER_UNSPECIFIED":
            return Owner.OWNER_UNSPECIFIED;
        case 1:
        case "OWNER_MODULE":
            return Owner.OWNER_MODULE;
        case 2:
        case "OWNER_EXTERNAL":
            return Owner.OWNER_EXTERNAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Owner.UNRECOGNIZED;
    }
}
export function ownerToJSON(object) {
    switch (object) {
        case Owner.OWNER_UNSPECIFIED:
            return "OWNER_UNSPECIFIED";
        case Owner.OWNER_MODULE:
            return "OWNER_MODULE";
        case Owner.OWNER_EXTERNAL:
            return "OWNER_EXTERNAL";
        case Owner.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseTokenPair() {
    return {
        erc20Address: "",
        denom: "",
        enabled: false,
        contractOwner: 0
    };
}
export const TokenPair = {
    typeUrl: "/evmos.erc20.v1.TokenPair",
    encode(message, writer = _m0.Writer.create()) {
        if (message.erc20Address !== "") {
            writer.uint32(10).string(message.erc20Address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.enabled === true) {
            writer.uint32(24).bool(message.enabled);
        }
        if (message.contractOwner !== 0) {
            writer.uint32(32).int32(message.contractOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.erc20Address = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.enabled = reader.bool();
                    break;
                case 4:
                    message.contractOwner = reader.int32();
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
            erc20Address: isSet(object.erc20Address) ? String(object.erc20Address) : "",
            denom: isSet(object.denom) ? String(object.denom) : "",
            enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
            contractOwner: isSet(object.contractOwner) ? ownerFromJSON(object.contractOwner) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.erc20Address !== undefined && (obj.erc20Address = message.erc20Address);
        message.denom !== undefined && (obj.denom = message.denom);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.contractOwner !== undefined && (obj.contractOwner = ownerToJSON(message.contractOwner));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTokenPair();
        message.erc20Address = object.erc20Address ?? "";
        message.denom = object.denom ?? "";
        message.enabled = object.enabled ?? false;
        message.contractOwner = object.contractOwner ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTokenPair();
        if (object.erc20_address !== undefined && object.erc20_address !== null) {
            message.erc20Address = object.erc20_address;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        if (object.contract_owner !== undefined && object.contract_owner !== null) {
            message.contractOwner = ownerFromJSON(object.contract_owner);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.erc20_address = message.erc20Address;
        obj.denom = message.denom;
        obj.enabled = message.enabled;
        obj.contract_owner = ownerToJSON(message.contractOwner);
        return obj;
    },
    fromAminoMsg(object) {
        return TokenPair.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TokenPair.decode(message.value);
    },
    toProto(message) {
        return TokenPair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.TokenPair",
            value: TokenPair.encode(message).finish()
        };
    }
};
function createBaseRegisterCoinProposal() {
    return {
        title: "",
        description: "",
        metadata: []
    };
}
export const RegisterCoinProposal = {
    typeUrl: "/evmos.erc20.v1.RegisterCoinProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.metadata) {
            Metadata.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterCoinProposal();
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
                    message.metadata.push(Metadata.decode(reader, reader.uint32()));
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
            metadata: Array.isArray(object?.metadata) ? object.metadata.map((e) => Metadata.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.metadata) {
            obj.metadata = message.metadata.map(e => e ? Metadata.toJSON(e) : undefined);
        }
        else {
            obj.metadata = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisterCoinProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.metadata = object.metadata?.map(e => Metadata.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisterCoinProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.metadata = object.metadata?.map(e => Metadata.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.metadata) {
            obj.metadata = message.metadata.map(e => e ? Metadata.toAmino(e) : undefined);
        }
        else {
            obj.metadata = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterCoinProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterCoinProposal.decode(message.value);
    },
    toProto(message) {
        return RegisterCoinProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.RegisterCoinProposal",
            value: RegisterCoinProposal.encode(message).finish()
        };
    }
};
function createBaseRegisterERC20Proposal() {
    return {
        title: "",
        description: "",
        erc20addresses: []
    };
}
export const RegisterERC20Proposal = {
    typeUrl: "/evmos.erc20.v1.RegisterERC20Proposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.erc20addresses) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterERC20Proposal();
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
                    message.erc20addresses.push(reader.string());
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
            erc20addresses: Array.isArray(object?.erc20addresses) ? object.erc20addresses.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.erc20addresses) {
            obj.erc20addresses = message.erc20addresses.map(e => e);
        }
        else {
            obj.erc20addresses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisterERC20Proposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.erc20addresses = object.erc20addresses?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisterERC20Proposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.erc20addresses = object.erc20addresses?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.erc20addresses) {
            obj.erc20addresses = message.erc20addresses.map(e => e);
        }
        else {
            obj.erc20addresses = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return RegisterERC20Proposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return RegisterERC20Proposal.decode(message.value);
    },
    toProto(message) {
        return RegisterERC20Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.RegisterERC20Proposal",
            value: RegisterERC20Proposal.encode(message).finish()
        };
    }
};
function createBaseToggleTokenConversionProposal() {
    return {
        title: "",
        description: "",
        token: ""
    };
}
export const ToggleTokenConversionProposal = {
    typeUrl: "/evmos.erc20.v1.ToggleTokenConversionProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.token !== "") {
            writer.uint32(26).string(message.token);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseToggleTokenConversionProposal();
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
                    message.token = reader.string();
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
            token: isSet(object.token) ? String(object.token) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseToggleTokenConversionProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.token = object.token ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseToggleTokenConversionProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.token !== undefined && object.token !== null) {
            message.token = object.token;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.token = message.token;
        return obj;
    },
    fromAminoMsg(object) {
        return ToggleTokenConversionProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ToggleTokenConversionProposal.decode(message.value);
    },
    toProto(message) {
        return ToggleTokenConversionProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.ToggleTokenConversionProposal",
            value: ToggleTokenConversionProposal.encode(message).finish()
        };
    }
};
function createBaseProposalMetadata() {
    return {
        metadata: []
    };
}
export const ProposalMetadata = {
    typeUrl: "/evmos.erc20.v1.ProposalMetadata",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.metadata) {
            Metadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposalMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata.push(Metadata.decode(reader, reader.uint32()));
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
            metadata: Array.isArray(object?.metadata) ? object.metadata.map((e) => Metadata.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.metadata) {
            obj.metadata = message.metadata.map(e => e ? Metadata.toJSON(e) : undefined);
        }
        else {
            obj.metadata = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProposalMetadata();
        message.metadata = object.metadata?.map(e => Metadata.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseProposalMetadata();
        message.metadata = object.metadata?.map(e => Metadata.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.metadata) {
            obj.metadata = message.metadata.map(e => e ? Metadata.toAmino(e) : undefined);
        }
        else {
            obj.metadata = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ProposalMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProposalMetadata.decode(message.value);
    },
    toProto(message) {
        return ProposalMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.erc20.v1.ProposalMetadata",
            value: ProposalMetadata.encode(message).finish()
        };
    }
};
