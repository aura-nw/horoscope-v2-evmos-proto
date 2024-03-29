import { Params as Params1 } from "../../controller/v1/controller";
import { Params as Params2 } from "../../host/v1/host";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
function createBaseGenesisState() {
    return {
        controllerGenesisState: ControllerGenesisState.fromPartial({}),
        hostGenesisState: HostGenesisState.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.controllerGenesisState !== undefined) {
            ControllerGenesisState.encode(message.controllerGenesisState, writer.uint32(10).fork()).ldelim();
        }
        if (message.hostGenesisState !== undefined) {
            HostGenesisState.encode(message.hostGenesisState, writer.uint32(18).fork()).ldelim();
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
                    message.controllerGenesisState = ControllerGenesisState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.hostGenesisState = HostGenesisState.decode(reader, reader.uint32());
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
            controllerGenesisState: isSet(object.controllerGenesisState) ? ControllerGenesisState.fromJSON(object.controllerGenesisState) : undefined,
            hostGenesisState: isSet(object.hostGenesisState) ? HostGenesisState.fromJSON(object.hostGenesisState) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.controllerGenesisState !== undefined && (obj.controllerGenesisState = message.controllerGenesisState ? ControllerGenesisState.toJSON(message.controllerGenesisState) : undefined);
        message.hostGenesisState !== undefined && (obj.hostGenesisState = message.hostGenesisState ? HostGenesisState.toJSON(message.hostGenesisState) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.controllerGenesisState = object.controllerGenesisState !== undefined && object.controllerGenesisState !== null ? ControllerGenesisState.fromPartial(object.controllerGenesisState) : undefined;
        message.hostGenesisState = object.hostGenesisState !== undefined && object.hostGenesisState !== null ? HostGenesisState.fromPartial(object.hostGenesisState) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.controller_genesis_state !== undefined && object.controller_genesis_state !== null) {
            message.controllerGenesisState = ControllerGenesisState.fromAmino(object.controller_genesis_state);
        }
        if (object.host_genesis_state !== undefined && object.host_genesis_state !== null) {
            message.hostGenesisState = HostGenesisState.fromAmino(object.host_genesis_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.controller_genesis_state = message.controllerGenesisState ? ControllerGenesisState.toAmino(message.controllerGenesisState) : undefined;
        obj.host_genesis_state = message.hostGenesisState ? HostGenesisState.toAmino(message.hostGenesisState) : undefined;
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
            typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseControllerGenesisState() {
    return {
        activeChannels: [],
        interchainAccounts: [],
        ports: [],
        params: Params1.fromPartial({})
    };
}
export const ControllerGenesisState = {
    typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.activeChannels) {
            ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.interchainAccounts) {
            RegisteredInterchainAccount.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.ports) {
            writer.uint32(26).string(v);
        }
        if (message.params !== undefined) {
            Params1.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseControllerGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.activeChannels.push(ActiveChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.interchainAccounts.push(RegisteredInterchainAccount.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.ports.push(reader.string());
                    break;
                case 4:
                    message.params = Params1.decode(reader, reader.uint32());
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
            activeChannels: Array.isArray(object?.activeChannels) ? object.activeChannels.map((e) => ActiveChannel.fromJSON(e)) : [],
            interchainAccounts: Array.isArray(object?.interchainAccounts) ? object.interchainAccounts.map((e) => RegisteredInterchainAccount.fromJSON(e)) : [],
            ports: Array.isArray(object?.ports) ? object.ports.map((e) => String(e)) : [],
            params: isSet(object.params) ? Params1.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.activeChannels) {
            obj.activeChannels = message.activeChannels.map(e => e ? ActiveChannel.toJSON(e) : undefined);
        }
        else {
            obj.activeChannels = [];
        }
        if (message.interchainAccounts) {
            obj.interchainAccounts = message.interchainAccounts.map(e => e ? RegisteredInterchainAccount.toJSON(e) : undefined);
        }
        else {
            obj.interchainAccounts = [];
        }
        if (message.ports) {
            obj.ports = message.ports.map(e => e);
        }
        else {
            obj.ports = [];
        }
        message.params !== undefined && (obj.params = message.params ? Params1.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseControllerGenesisState();
        message.activeChannels = object.activeChannels?.map(e => ActiveChannel.fromPartial(e)) || [];
        message.interchainAccounts = object.interchainAccounts?.map(e => RegisteredInterchainAccount.fromPartial(e)) || [];
        message.ports = object.ports?.map(e => e) || [];
        message.params = object.params !== undefined && object.params !== null ? Params1.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseControllerGenesisState();
        message.activeChannels = object.active_channels?.map(e => ActiveChannel.fromAmino(e)) || [];
        message.interchainAccounts = object.interchain_accounts?.map(e => RegisteredInterchainAccount.fromAmino(e)) || [];
        message.ports = object.ports?.map(e => e) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params1.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.activeChannels) {
            obj.active_channels = message.activeChannels.map(e => e ? ActiveChannel.toAmino(e) : undefined);
        }
        else {
            obj.active_channels = [];
        }
        if (message.interchainAccounts) {
            obj.interchain_accounts = message.interchainAccounts.map(e => e ? RegisteredInterchainAccount.toAmino(e) : undefined);
        }
        else {
            obj.interchain_accounts = [];
        }
        if (message.ports) {
            obj.ports = message.ports.map(e => e);
        }
        else {
            obj.ports = [];
        }
        obj.params = message.params ? Params1.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ControllerGenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ControllerGenesisState",
            value: ControllerGenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ControllerGenesisState.decode(message.value);
    },
    toProto(message) {
        return ControllerGenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState",
            value: ControllerGenesisState.encode(message).finish()
        };
    }
};
function createBaseHostGenesisState() {
    return {
        activeChannels: [],
        interchainAccounts: [],
        port: "",
        params: Params2.fromPartial({})
    };
}
export const HostGenesisState = {
    typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.HostGenesisState",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.activeChannels) {
            ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.interchainAccounts) {
            RegisteredInterchainAccount.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.port !== "") {
            writer.uint32(26).string(message.port);
        }
        if (message.params !== undefined) {
            Params2.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHostGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.activeChannels.push(ActiveChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.interchainAccounts.push(RegisteredInterchainAccount.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.port = reader.string();
                    break;
                case 4:
                    message.params = Params2.decode(reader, reader.uint32());
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
            activeChannels: Array.isArray(object?.activeChannels) ? object.activeChannels.map((e) => ActiveChannel.fromJSON(e)) : [],
            interchainAccounts: Array.isArray(object?.interchainAccounts) ? object.interchainAccounts.map((e) => RegisteredInterchainAccount.fromJSON(e)) : [],
            port: isSet(object.port) ? String(object.port) : "",
            params: isSet(object.params) ? Params2.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.activeChannels) {
            obj.activeChannels = message.activeChannels.map(e => e ? ActiveChannel.toJSON(e) : undefined);
        }
        else {
            obj.activeChannels = [];
        }
        if (message.interchainAccounts) {
            obj.interchainAccounts = message.interchainAccounts.map(e => e ? RegisteredInterchainAccount.toJSON(e) : undefined);
        }
        else {
            obj.interchainAccounts = [];
        }
        message.port !== undefined && (obj.port = message.port);
        message.params !== undefined && (obj.params = message.params ? Params2.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHostGenesisState();
        message.activeChannels = object.activeChannels?.map(e => ActiveChannel.fromPartial(e)) || [];
        message.interchainAccounts = object.interchainAccounts?.map(e => RegisteredInterchainAccount.fromPartial(e)) || [];
        message.port = object.port ?? "";
        message.params = object.params !== undefined && object.params !== null ? Params2.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseHostGenesisState();
        message.activeChannels = object.active_channels?.map(e => ActiveChannel.fromAmino(e)) || [];
        message.interchainAccounts = object.interchain_accounts?.map(e => RegisteredInterchainAccount.fromAmino(e)) || [];
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params2.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.activeChannels) {
            obj.active_channels = message.activeChannels.map(e => e ? ActiveChannel.toAmino(e) : undefined);
        }
        else {
            obj.active_channels = [];
        }
        if (message.interchainAccounts) {
            obj.interchain_accounts = message.interchainAccounts.map(e => e ? RegisteredInterchainAccount.toAmino(e) : undefined);
        }
        else {
            obj.interchain_accounts = [];
        }
        obj.port = message.port;
        obj.params = message.params ? Params2.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return HostGenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/HostGenesisState",
            value: HostGenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return HostGenesisState.decode(message.value);
    },
    toProto(message) {
        return HostGenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.HostGenesisState",
            value: HostGenesisState.encode(message).finish()
        };
    }
};
function createBaseActiveChannel() {
    return {
        connectionId: "",
        portId: "",
        channelId: "",
        isMiddlewareEnabled: false
    };
}
export const ActiveChannel = {
    typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ActiveChannel",
    encode(message, writer = _m0.Writer.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(26).string(message.channelId);
        }
        if (message.isMiddlewareEnabled === true) {
            writer.uint32(32).bool(message.isMiddlewareEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                case 3:
                    message.channelId = reader.string();
                    break;
                case 4:
                    message.isMiddlewareEnabled = reader.bool();
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
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
            isMiddlewareEnabled: isSet(object.isMiddlewareEnabled) ? Boolean(object.isMiddlewareEnabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.isMiddlewareEnabled !== undefined && (obj.isMiddlewareEnabled = message.isMiddlewareEnabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseActiveChannel();
        message.connectionId = object.connectionId ?? "";
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.isMiddlewareEnabled = object.isMiddlewareEnabled ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseActiveChannel();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connectionId = object.connection_id;
        }
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.is_middleware_enabled !== undefined && object.is_middleware_enabled !== null) {
            message.isMiddlewareEnabled = object.is_middleware_enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connectionId;
        obj.port_id = message.portId;
        obj.channel_id = message.channelId;
        obj.is_middleware_enabled = message.isMiddlewareEnabled;
        return obj;
    },
    fromAminoMsg(object) {
        return ActiveChannel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ActiveChannel",
            value: ActiveChannel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ActiveChannel.decode(message.value);
    },
    toProto(message) {
        return ActiveChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ActiveChannel",
            value: ActiveChannel.encode(message).finish()
        };
    }
};
function createBaseRegisteredInterchainAccount() {
    return {
        connectionId: "",
        portId: "",
        accountAddress: ""
    };
}
export const RegisteredInterchainAccount = {
    typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount",
    encode(message, writer = _m0.Writer.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        if (message.accountAddress !== "") {
            writer.uint32(26).string(message.accountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisteredInterchainAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                case 3:
                    message.accountAddress = reader.string();
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
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            portId: isSet(object.portId) ? String(object.portId) : "",
            accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.portId !== undefined && (obj.portId = message.portId);
        message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisteredInterchainAccount();
        message.connectionId = object.connectionId ?? "";
        message.portId = object.portId ?? "";
        message.accountAddress = object.accountAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisteredInterchainAccount();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connectionId = object.connection_id;
        }
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.account_address !== undefined && object.account_address !== null) {
            message.accountAddress = object.account_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connectionId;
        obj.port_id = message.portId;
        obj.account_address = message.accountAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return RegisteredInterchainAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RegisteredInterchainAccount",
            value: RegisteredInterchainAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RegisteredInterchainAccount.decode(message.value);
    },
    toProto(message) {
        return RegisteredInterchainAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount",
            value: RegisteredInterchainAccount.encode(message).finish()
        };
    }
};
