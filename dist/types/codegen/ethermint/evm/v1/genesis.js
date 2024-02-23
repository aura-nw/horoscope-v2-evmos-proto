import { Params, State } from "./evm";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseGenesisState() {
    return {
        accounts: [],
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/ethermint.evm.v1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accounts) {
            GenesisAccount.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.accounts.push(GenesisAccount.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
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
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => GenesisAccount.fromJSON(e)) : [],
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? GenesisAccount.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.accounts = object.accounts?.map(e => GenesisAccount.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.accounts = object.accounts?.map(e => GenesisAccount.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? GenesisAccount.toAmino(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseGenesisAccount() {
    return {
        address: "",
        code: "",
        storage: []
    };
}
export const GenesisAccount = {
    typeUrl: "/ethermint.evm.v1.GenesisAccount",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        for (const v of message.storage) {
            State.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                case 3:
                    message.storage.push(State.decode(reader, reader.uint32()));
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
            code: isSet(object.code) ? String(object.code) : "",
            storage: Array.isArray(object?.storage) ? object.storage.map((e) => State.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.code !== undefined && (obj.code = message.code);
        if (message.storage) {
            obj.storage = message.storage.map(e => e ? State.toJSON(e) : undefined);
        }
        else {
            obj.storage = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisAccount();
        message.address = object.address ?? "";
        message.code = object.code ?? "";
        message.storage = object.storage?.map(e => State.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisAccount();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        message.storage = object.storage?.map(e => State.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.code = message.code;
        if (message.storage) {
            obj.storage = message.storage.map(e => e ? State.toAmino(e) : undefined);
        }
        else {
            obj.storage = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisAccount.decode(message.value);
    },
    toProto(message) {
        return GenesisAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.GenesisAccount",
            value: GenesisAccount.encode(message).finish()
        };
    }
};
