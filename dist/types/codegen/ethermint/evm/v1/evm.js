import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseParams() {
    return {
        evmDenom: "",
        enableCreate: false,
        enableCall: false,
        extraEips: [],
        chainConfig: ChainConfig.fromPartial({}),
        allowUnprotectedTxs: false,
        activePrecompiles: [],
        evmChannels: []
    };
}
export const Params = {
    typeUrl: "/ethermint.evm.v1.Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.evmDenom !== "") {
            writer.uint32(10).string(message.evmDenom);
        }
        if (message.enableCreate === true) {
            writer.uint32(16).bool(message.enableCreate);
        }
        if (message.enableCall === true) {
            writer.uint32(24).bool(message.enableCall);
        }
        writer.uint32(34).fork();
        for (const v of message.extraEips) {
            writer.int64(v);
        }
        writer.ldelim();
        if (message.chainConfig !== undefined) {
            ChainConfig.encode(message.chainConfig, writer.uint32(42).fork()).ldelim();
        }
        if (message.allowUnprotectedTxs === true) {
            writer.uint32(48).bool(message.allowUnprotectedTxs);
        }
        for (const v of message.activePrecompiles) {
            writer.uint32(58).string(v);
        }
        for (const v of message.evmChannels) {
            writer.uint32(66).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evmDenom = reader.string();
                    break;
                case 2:
                    message.enableCreate = reader.bool();
                    break;
                case 3:
                    message.enableCall = reader.bool();
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.extraEips.push(reader.int64());
                        }
                    }
                    else {
                        message.extraEips.push(reader.int64());
                    }
                    break;
                case 5:
                    message.chainConfig = ChainConfig.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.allowUnprotectedTxs = reader.bool();
                    break;
                case 7:
                    message.activePrecompiles.push(reader.string());
                    break;
                case 8:
                    message.evmChannels.push(reader.string());
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
            evmDenom: isSet(object.evmDenom) ? String(object.evmDenom) : "",
            enableCreate: isSet(object.enableCreate) ? Boolean(object.enableCreate) : false,
            enableCall: isSet(object.enableCall) ? Boolean(object.enableCall) : false,
            extraEips: Array.isArray(object?.extraEips) ? object.extraEips.map((e) => Long.fromValue(e)) : [],
            chainConfig: isSet(object.chainConfig) ? ChainConfig.fromJSON(object.chainConfig) : undefined,
            allowUnprotectedTxs: isSet(object.allowUnprotectedTxs) ? Boolean(object.allowUnprotectedTxs) : false,
            activePrecompiles: Array.isArray(object?.activePrecompiles) ? object.activePrecompiles.map((e) => String(e)) : [],
            evmChannels: Array.isArray(object?.evmChannels) ? object.evmChannels.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.evmDenom !== undefined && (obj.evmDenom = message.evmDenom);
        message.enableCreate !== undefined && (obj.enableCreate = message.enableCreate);
        message.enableCall !== undefined && (obj.enableCall = message.enableCall);
        if (message.extraEips) {
            obj.extraEips = message.extraEips.map(e => (e || Long.ZERO).toString());
        }
        else {
            obj.extraEips = [];
        }
        message.chainConfig !== undefined && (obj.chainConfig = message.chainConfig ? ChainConfig.toJSON(message.chainConfig) : undefined);
        message.allowUnprotectedTxs !== undefined && (obj.allowUnprotectedTxs = message.allowUnprotectedTxs);
        if (message.activePrecompiles) {
            obj.activePrecompiles = message.activePrecompiles.map(e => e);
        }
        else {
            obj.activePrecompiles = [];
        }
        if (message.evmChannels) {
            obj.evmChannels = message.evmChannels.map(e => e);
        }
        else {
            obj.evmChannels = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.evmDenom = object.evmDenom ?? "";
        message.enableCreate = object.enableCreate ?? false;
        message.enableCall = object.enableCall ?? false;
        message.extraEips = object.extraEips?.map(e => Long.fromValue(e)) || [];
        message.chainConfig = object.chainConfig !== undefined && object.chainConfig !== null ? ChainConfig.fromPartial(object.chainConfig) : undefined;
        message.allowUnprotectedTxs = object.allowUnprotectedTxs ?? false;
        message.activePrecompiles = object.activePrecompiles?.map(e => e) || [];
        message.evmChannels = object.evmChannels?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.evm_denom !== undefined && object.evm_denom !== null) {
            message.evmDenom = object.evm_denom;
        }
        if (object.enable_create !== undefined && object.enable_create !== null) {
            message.enableCreate = object.enable_create;
        }
        if (object.enable_call !== undefined && object.enable_call !== null) {
            message.enableCall = object.enable_call;
        }
        message.extraEips = object.extra_eips?.map(e => Long.fromString(e)) || [];
        if (object.chain_config !== undefined && object.chain_config !== null) {
            message.chainConfig = ChainConfig.fromAmino(object.chain_config);
        }
        if (object.allow_unprotected_txs !== undefined && object.allow_unprotected_txs !== null) {
            message.allowUnprotectedTxs = object.allow_unprotected_txs;
        }
        message.activePrecompiles = object.active_precompiles?.map(e => e) || [];
        message.evmChannels = object.evm_channels?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.evm_denom = message.evmDenom;
        obj.enable_create = message.enableCreate;
        obj.enable_call = message.enableCall;
        if (message.extraEips) {
            obj.extra_eips = message.extraEips.map(e => e);
        }
        else {
            obj.extra_eips = [];
        }
        obj.chain_config = message.chainConfig ? ChainConfig.toAmino(message.chainConfig) : undefined;
        obj.allow_unprotected_txs = message.allowUnprotectedTxs;
        if (message.activePrecompiles) {
            obj.active_precompiles = message.activePrecompiles.map(e => e);
        }
        else {
            obj.active_precompiles = [];
        }
        if (message.evmChannels) {
            obj.evm_channels = message.evmChannels.map(e => e);
        }
        else {
            obj.evm_channels = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseChainConfig() {
    return {
        homesteadBlock: "",
        daoForkBlock: "",
        daoForkSupport: false,
        eip150Block: "",
        eip150Hash: "",
        eip155Block: "",
        eip158Block: "",
        byzantiumBlock: "",
        constantinopleBlock: "",
        petersburgBlock: "",
        istanbulBlock: "",
        muirGlacierBlock: "",
        berlinBlock: "",
        londonBlock: "",
        arrowGlacierBlock: "",
        grayGlacierBlock: "",
        mergeNetsplitBlock: "",
        shanghaiBlock: "",
        cancunBlock: ""
    };
}
export const ChainConfig = {
    typeUrl: "/ethermint.evm.v1.ChainConfig",
    encode(message, writer = _m0.Writer.create()) {
        if (message.homesteadBlock !== "") {
            writer.uint32(10).string(message.homesteadBlock);
        }
        if (message.daoForkBlock !== "") {
            writer.uint32(18).string(message.daoForkBlock);
        }
        if (message.daoForkSupport === true) {
            writer.uint32(24).bool(message.daoForkSupport);
        }
        if (message.eip150Block !== "") {
            writer.uint32(34).string(message.eip150Block);
        }
        if (message.eip150Hash !== "") {
            writer.uint32(42).string(message.eip150Hash);
        }
        if (message.eip155Block !== "") {
            writer.uint32(50).string(message.eip155Block);
        }
        if (message.eip158Block !== "") {
            writer.uint32(58).string(message.eip158Block);
        }
        if (message.byzantiumBlock !== "") {
            writer.uint32(66).string(message.byzantiumBlock);
        }
        if (message.constantinopleBlock !== "") {
            writer.uint32(74).string(message.constantinopleBlock);
        }
        if (message.petersburgBlock !== "") {
            writer.uint32(82).string(message.petersburgBlock);
        }
        if (message.istanbulBlock !== "") {
            writer.uint32(90).string(message.istanbulBlock);
        }
        if (message.muirGlacierBlock !== "") {
            writer.uint32(98).string(message.muirGlacierBlock);
        }
        if (message.berlinBlock !== "") {
            writer.uint32(106).string(message.berlinBlock);
        }
        if (message.londonBlock !== "") {
            writer.uint32(138).string(message.londonBlock);
        }
        if (message.arrowGlacierBlock !== "") {
            writer.uint32(146).string(message.arrowGlacierBlock);
        }
        if (message.grayGlacierBlock !== "") {
            writer.uint32(162).string(message.grayGlacierBlock);
        }
        if (message.mergeNetsplitBlock !== "") {
            writer.uint32(170).string(message.mergeNetsplitBlock);
        }
        if (message.shanghaiBlock !== "") {
            writer.uint32(178).string(message.shanghaiBlock);
        }
        if (message.cancunBlock !== "") {
            writer.uint32(186).string(message.cancunBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.homesteadBlock = reader.string();
                    break;
                case 2:
                    message.daoForkBlock = reader.string();
                    break;
                case 3:
                    message.daoForkSupport = reader.bool();
                    break;
                case 4:
                    message.eip150Block = reader.string();
                    break;
                case 5:
                    message.eip150Hash = reader.string();
                    break;
                case 6:
                    message.eip155Block = reader.string();
                    break;
                case 7:
                    message.eip158Block = reader.string();
                    break;
                case 8:
                    message.byzantiumBlock = reader.string();
                    break;
                case 9:
                    message.constantinopleBlock = reader.string();
                    break;
                case 10:
                    message.petersburgBlock = reader.string();
                    break;
                case 11:
                    message.istanbulBlock = reader.string();
                    break;
                case 12:
                    message.muirGlacierBlock = reader.string();
                    break;
                case 13:
                    message.berlinBlock = reader.string();
                    break;
                case 17:
                    message.londonBlock = reader.string();
                    break;
                case 18:
                    message.arrowGlacierBlock = reader.string();
                    break;
                case 20:
                    message.grayGlacierBlock = reader.string();
                    break;
                case 21:
                    message.mergeNetsplitBlock = reader.string();
                    break;
                case 22:
                    message.shanghaiBlock = reader.string();
                    break;
                case 23:
                    message.cancunBlock = reader.string();
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
            homesteadBlock: isSet(object.homesteadBlock) ? String(object.homesteadBlock) : "",
            daoForkBlock: isSet(object.daoForkBlock) ? String(object.daoForkBlock) : "",
            daoForkSupport: isSet(object.daoForkSupport) ? Boolean(object.daoForkSupport) : false,
            eip150Block: isSet(object.eip150Block) ? String(object.eip150Block) : "",
            eip150Hash: isSet(object.eip150Hash) ? String(object.eip150Hash) : "",
            eip155Block: isSet(object.eip155Block) ? String(object.eip155Block) : "",
            eip158Block: isSet(object.eip158Block) ? String(object.eip158Block) : "",
            byzantiumBlock: isSet(object.byzantiumBlock) ? String(object.byzantiumBlock) : "",
            constantinopleBlock: isSet(object.constantinopleBlock) ? String(object.constantinopleBlock) : "",
            petersburgBlock: isSet(object.petersburgBlock) ? String(object.petersburgBlock) : "",
            istanbulBlock: isSet(object.istanbulBlock) ? String(object.istanbulBlock) : "",
            muirGlacierBlock: isSet(object.muirGlacierBlock) ? String(object.muirGlacierBlock) : "",
            berlinBlock: isSet(object.berlinBlock) ? String(object.berlinBlock) : "",
            londonBlock: isSet(object.londonBlock) ? String(object.londonBlock) : "",
            arrowGlacierBlock: isSet(object.arrowGlacierBlock) ? String(object.arrowGlacierBlock) : "",
            grayGlacierBlock: isSet(object.grayGlacierBlock) ? String(object.grayGlacierBlock) : "",
            mergeNetsplitBlock: isSet(object.mergeNetsplitBlock) ? String(object.mergeNetsplitBlock) : "",
            shanghaiBlock: isSet(object.shanghaiBlock) ? String(object.shanghaiBlock) : "",
            cancunBlock: isSet(object.cancunBlock) ? String(object.cancunBlock) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.homesteadBlock !== undefined && (obj.homesteadBlock = message.homesteadBlock);
        message.daoForkBlock !== undefined && (obj.daoForkBlock = message.daoForkBlock);
        message.daoForkSupport !== undefined && (obj.daoForkSupport = message.daoForkSupport);
        message.eip150Block !== undefined && (obj.eip150Block = message.eip150Block);
        message.eip150Hash !== undefined && (obj.eip150Hash = message.eip150Hash);
        message.eip155Block !== undefined && (obj.eip155Block = message.eip155Block);
        message.eip158Block !== undefined && (obj.eip158Block = message.eip158Block);
        message.byzantiumBlock !== undefined && (obj.byzantiumBlock = message.byzantiumBlock);
        message.constantinopleBlock !== undefined && (obj.constantinopleBlock = message.constantinopleBlock);
        message.petersburgBlock !== undefined && (obj.petersburgBlock = message.petersburgBlock);
        message.istanbulBlock !== undefined && (obj.istanbulBlock = message.istanbulBlock);
        message.muirGlacierBlock !== undefined && (obj.muirGlacierBlock = message.muirGlacierBlock);
        message.berlinBlock !== undefined && (obj.berlinBlock = message.berlinBlock);
        message.londonBlock !== undefined && (obj.londonBlock = message.londonBlock);
        message.arrowGlacierBlock !== undefined && (obj.arrowGlacierBlock = message.arrowGlacierBlock);
        message.grayGlacierBlock !== undefined && (obj.grayGlacierBlock = message.grayGlacierBlock);
        message.mergeNetsplitBlock !== undefined && (obj.mergeNetsplitBlock = message.mergeNetsplitBlock);
        message.shanghaiBlock !== undefined && (obj.shanghaiBlock = message.shanghaiBlock);
        message.cancunBlock !== undefined && (obj.cancunBlock = message.cancunBlock);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChainConfig();
        message.homesteadBlock = object.homesteadBlock ?? "";
        message.daoForkBlock = object.daoForkBlock ?? "";
        message.daoForkSupport = object.daoForkSupport ?? false;
        message.eip150Block = object.eip150Block ?? "";
        message.eip150Hash = object.eip150Hash ?? "";
        message.eip155Block = object.eip155Block ?? "";
        message.eip158Block = object.eip158Block ?? "";
        message.byzantiumBlock = object.byzantiumBlock ?? "";
        message.constantinopleBlock = object.constantinopleBlock ?? "";
        message.petersburgBlock = object.petersburgBlock ?? "";
        message.istanbulBlock = object.istanbulBlock ?? "";
        message.muirGlacierBlock = object.muirGlacierBlock ?? "";
        message.berlinBlock = object.berlinBlock ?? "";
        message.londonBlock = object.londonBlock ?? "";
        message.arrowGlacierBlock = object.arrowGlacierBlock ?? "";
        message.grayGlacierBlock = object.grayGlacierBlock ?? "";
        message.mergeNetsplitBlock = object.mergeNetsplitBlock ?? "";
        message.shanghaiBlock = object.shanghaiBlock ?? "";
        message.cancunBlock = object.cancunBlock ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainConfig();
        if (object.homestead_block !== undefined && object.homestead_block !== null) {
            message.homesteadBlock = object.homestead_block;
        }
        if (object.dao_fork_block !== undefined && object.dao_fork_block !== null) {
            message.daoForkBlock = object.dao_fork_block;
        }
        if (object.dao_fork_support !== undefined && object.dao_fork_support !== null) {
            message.daoForkSupport = object.dao_fork_support;
        }
        if (object.eip150_block !== undefined && object.eip150_block !== null) {
            message.eip150Block = object.eip150_block;
        }
        if (object.eip150_hash !== undefined && object.eip150_hash !== null) {
            message.eip150Hash = object.eip150_hash;
        }
        if (object.eip155_block !== undefined && object.eip155_block !== null) {
            message.eip155Block = object.eip155_block;
        }
        if (object.eip158_block !== undefined && object.eip158_block !== null) {
            message.eip158Block = object.eip158_block;
        }
        if (object.byzantium_block !== undefined && object.byzantium_block !== null) {
            message.byzantiumBlock = object.byzantium_block;
        }
        if (object.constantinople_block !== undefined && object.constantinople_block !== null) {
            message.constantinopleBlock = object.constantinople_block;
        }
        if (object.petersburg_block !== undefined && object.petersburg_block !== null) {
            message.petersburgBlock = object.petersburg_block;
        }
        if (object.istanbul_block !== undefined && object.istanbul_block !== null) {
            message.istanbulBlock = object.istanbul_block;
        }
        if (object.muir_glacier_block !== undefined && object.muir_glacier_block !== null) {
            message.muirGlacierBlock = object.muir_glacier_block;
        }
        if (object.berlin_block !== undefined && object.berlin_block !== null) {
            message.berlinBlock = object.berlin_block;
        }
        if (object.london_block !== undefined && object.london_block !== null) {
            message.londonBlock = object.london_block;
        }
        if (object.arrow_glacier_block !== undefined && object.arrow_glacier_block !== null) {
            message.arrowGlacierBlock = object.arrow_glacier_block;
        }
        if (object.gray_glacier_block !== undefined && object.gray_glacier_block !== null) {
            message.grayGlacierBlock = object.gray_glacier_block;
        }
        if (object.merge_netsplit_block !== undefined && object.merge_netsplit_block !== null) {
            message.mergeNetsplitBlock = object.merge_netsplit_block;
        }
        if (object.shanghai_block !== undefined && object.shanghai_block !== null) {
            message.shanghaiBlock = object.shanghai_block;
        }
        if (object.cancun_block !== undefined && object.cancun_block !== null) {
            message.cancunBlock = object.cancun_block;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.homestead_block = message.homesteadBlock;
        obj.dao_fork_block = message.daoForkBlock;
        obj.dao_fork_support = message.daoForkSupport;
        obj.eip150_block = message.eip150Block;
        obj.eip150_hash = message.eip150Hash;
        obj.eip155_block = message.eip155Block;
        obj.eip158_block = message.eip158Block;
        obj.byzantium_block = message.byzantiumBlock;
        obj.constantinople_block = message.constantinopleBlock;
        obj.petersburg_block = message.petersburgBlock;
        obj.istanbul_block = message.istanbulBlock;
        obj.muir_glacier_block = message.muirGlacierBlock;
        obj.berlin_block = message.berlinBlock;
        obj.london_block = message.londonBlock;
        obj.arrow_glacier_block = message.arrowGlacierBlock;
        obj.gray_glacier_block = message.grayGlacierBlock;
        obj.merge_netsplit_block = message.mergeNetsplitBlock;
        obj.shanghai_block = message.shanghaiBlock;
        obj.cancun_block = message.cancunBlock;
        return obj;
    },
    fromAminoMsg(object) {
        return ChainConfig.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ChainConfig.decode(message.value);
    },
    toProto(message) {
        return ChainConfig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.ChainConfig",
            value: ChainConfig.encode(message).finish()
        };
    }
};
function createBaseState() {
    return {
        key: "",
        value: ""
    };
}
export const State = {
    typeUrl: "/ethermint.evm.v1.State",
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseState();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseState();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return State.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return State.decode(message.value);
    },
    toProto(message) {
        return State.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.State",
            value: State.encode(message).finish()
        };
    }
};
function createBaseTransactionLogs() {
    return {
        hash: "",
        logs: []
    };
}
export const TransactionLogs = {
    typeUrl: "/ethermint.evm.v1.TransactionLogs",
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        for (const v of message.logs) {
            Log.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransactionLogs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.logs.push(Log.decode(reader, reader.uint32()));
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
            hash: isSet(object.hash) ? String(object.hash) : "",
            logs: Array.isArray(object?.logs) ? object.logs.map((e) => Log.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? Log.toJSON(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTransactionLogs();
        message.hash = object.hash ?? "";
        message.logs = object.logs?.map(e => Log.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTransactionLogs();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        message.logs = object.logs?.map(e => Log.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? Log.toAmino(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TransactionLogs.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TransactionLogs.decode(message.value);
    },
    toProto(message) {
        return TransactionLogs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.TransactionLogs",
            value: TransactionLogs.encode(message).finish()
        };
    }
};
function createBaseLog() {
    return {
        address: "",
        topics: [],
        data: new Uint8Array(),
        blockNumber: Long.UZERO,
        txHash: "",
        txIndex: Long.UZERO,
        blockHash: "",
        index: Long.UZERO,
        removed: false
    };
}
export const Log = {
    typeUrl: "/ethermint.evm.v1.Log",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.topics) {
            writer.uint32(18).string(v);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        if (!message.blockNumber.isZero()) {
            writer.uint32(32).uint64(message.blockNumber);
        }
        if (message.txHash !== "") {
            writer.uint32(42).string(message.txHash);
        }
        if (!message.txIndex.isZero()) {
            writer.uint32(48).uint64(message.txIndex);
        }
        if (message.blockHash !== "") {
            writer.uint32(58).string(message.blockHash);
        }
        if (!message.index.isZero()) {
            writer.uint32(64).uint64(message.index);
        }
        if (message.removed === true) {
            writer.uint32(72).bool(message.removed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.topics.push(reader.string());
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.blockNumber = reader.uint64();
                    break;
                case 5:
                    message.txHash = reader.string();
                    break;
                case 6:
                    message.txIndex = reader.uint64();
                    break;
                case 7:
                    message.blockHash = reader.string();
                    break;
                case 8:
                    message.index = reader.uint64();
                    break;
                case 9:
                    message.removed = reader.bool();
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
            topics: Array.isArray(object?.topics) ? object.topics.map((e) => String(e)) : [],
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            blockNumber: isSet(object.blockNumber) ? Long.fromValue(object.blockNumber) : Long.UZERO,
            txHash: isSet(object.txHash) ? String(object.txHash) : "",
            txIndex: isSet(object.txIndex) ? Long.fromValue(object.txIndex) : Long.UZERO,
            blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
            index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
            removed: isSet(object.removed) ? Boolean(object.removed) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.topics) {
            obj.topics = message.topics.map(e => e);
        }
        else {
            obj.topics = [];
        }
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.blockNumber !== undefined && (obj.blockNumber = (message.blockNumber || Long.UZERO).toString());
        message.txHash !== undefined && (obj.txHash = message.txHash);
        message.txIndex !== undefined && (obj.txIndex = (message.txIndex || Long.UZERO).toString());
        message.blockHash !== undefined && (obj.blockHash = message.blockHash);
        message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
        message.removed !== undefined && (obj.removed = message.removed);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLog();
        message.address = object.address ?? "";
        message.topics = object.topics?.map(e => e) || [];
        message.data = object.data ?? new Uint8Array();
        message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? Long.fromValue(object.blockNumber) : Long.UZERO;
        message.txHash = object.txHash ?? "";
        message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? Long.fromValue(object.txIndex) : Long.UZERO;
        message.blockHash = object.blockHash ?? "";
        message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
        message.removed = object.removed ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseLog();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.topics = object.topics?.map(e => e) || [];
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.block_number !== undefined && object.block_number !== null) {
            message.blockNumber = Long.fromString(object.block_number);
        }
        if (object.tx_hash !== undefined && object.tx_hash !== null) {
            message.txHash = object.tx_hash;
        }
        if (object.tx_index !== undefined && object.tx_index !== null) {
            message.txIndex = Long.fromString(object.tx_index);
        }
        if (object.block_hash !== undefined && object.block_hash !== null) {
            message.blockHash = object.block_hash;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = Long.fromString(object.index);
        }
        if (object.removed !== undefined && object.removed !== null) {
            message.removed = object.removed;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.topics) {
            obj.topics = message.topics.map(e => e);
        }
        else {
            obj.topics = [];
        }
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        obj.block_number = message.blockNumber ? message.blockNumber.toString() : undefined;
        obj.tx_hash = message.txHash;
        obj.tx_index = message.txIndex ? message.txIndex.toString() : undefined;
        obj.block_hash = message.blockHash;
        obj.index = message.index ? message.index.toString() : undefined;
        obj.removed = message.removed;
        return obj;
    },
    fromAminoMsg(object) {
        return Log.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Log.decode(message.value);
    },
    toProto(message) {
        return Log.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.Log",
            value: Log.encode(message).finish()
        };
    }
};
function createBaseTxResult() {
    return {
        contractAddress: "",
        bloom: new Uint8Array(),
        txLogs: TransactionLogs.fromPartial({}),
        ret: new Uint8Array(),
        reverted: false,
        gasUsed: Long.UZERO
    };
}
export const TxResult = {
    typeUrl: "/ethermint.evm.v1.TxResult",
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.bloom.length !== 0) {
            writer.uint32(18).bytes(message.bloom);
        }
        if (message.txLogs !== undefined) {
            TransactionLogs.encode(message.txLogs, writer.uint32(26).fork()).ldelim();
        }
        if (message.ret.length !== 0) {
            writer.uint32(34).bytes(message.ret);
        }
        if (message.reverted === true) {
            writer.uint32(40).bool(message.reverted);
        }
        if (!message.gasUsed.isZero()) {
            writer.uint32(48).uint64(message.gasUsed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.bloom = reader.bytes();
                    break;
                case 3:
                    message.txLogs = TransactionLogs.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ret = reader.bytes();
                    break;
                case 5:
                    message.reverted = reader.bool();
                    break;
                case 6:
                    message.gasUsed = reader.uint64();
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
            bloom: isSet(object.bloom) ? bytesFromBase64(object.bloom) : new Uint8Array(),
            txLogs: isSet(object.txLogs) ? TransactionLogs.fromJSON(object.txLogs) : undefined,
            ret: isSet(object.ret) ? bytesFromBase64(object.ret) : new Uint8Array(),
            reverted: isSet(object.reverted) ? Boolean(object.reverted) : false,
            gasUsed: isSet(object.gasUsed) ? Long.fromValue(object.gasUsed) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.bloom !== undefined && (obj.bloom = base64FromBytes(message.bloom !== undefined ? message.bloom : new Uint8Array()));
        message.txLogs !== undefined && (obj.txLogs = message.txLogs ? TransactionLogs.toJSON(message.txLogs) : undefined);
        message.ret !== undefined && (obj.ret = base64FromBytes(message.ret !== undefined ? message.ret : new Uint8Array()));
        message.reverted !== undefined && (obj.reverted = message.reverted);
        message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxResult();
        message.contractAddress = object.contractAddress ?? "";
        message.bloom = object.bloom ?? new Uint8Array();
        message.txLogs = object.txLogs !== undefined && object.txLogs !== null ? TransactionLogs.fromPartial(object.txLogs) : undefined;
        message.ret = object.ret ?? new Uint8Array();
        message.reverted = object.reverted ?? false;
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? Long.fromValue(object.gasUsed) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxResult();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.bloom !== undefined && object.bloom !== null) {
            message.bloom = bytesFromBase64(object.bloom);
        }
        if (object.tx_logs !== undefined && object.tx_logs !== null) {
            message.txLogs = TransactionLogs.fromAmino(object.tx_logs);
        }
        if (object.ret !== undefined && object.ret !== null) {
            message.ret = bytesFromBase64(object.ret);
        }
        if (object.reverted !== undefined && object.reverted !== null) {
            message.reverted = object.reverted;
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = Long.fromString(object.gas_used);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress;
        obj.bloom = message.bloom ? base64FromBytes(message.bloom) : undefined;
        obj.tx_logs = message.txLogs ? TransactionLogs.toAmino(message.txLogs) : undefined;
        obj.ret = message.ret ? base64FromBytes(message.ret) : undefined;
        obj.reverted = message.reverted;
        obj.gas_used = message.gasUsed ? message.gasUsed.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TxResult.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TxResult.decode(message.value);
    },
    toProto(message) {
        return TxResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.TxResult",
            value: TxResult.encode(message).finish()
        };
    }
};
function createBaseAccessTuple() {
    return {
        address: "",
        storageKeys: []
    };
}
export const AccessTuple = {
    typeUrl: "/ethermint.evm.v1.AccessTuple",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.storageKeys) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessTuple();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.storageKeys.push(reader.string());
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
            storageKeys: Array.isArray(object?.storageKeys) ? object.storageKeys.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.storageKeys) {
            obj.storageKeys = message.storageKeys.map(e => e);
        }
        else {
            obj.storageKeys = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccessTuple();
        message.address = object.address ?? "";
        message.storageKeys = object.storageKeys?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccessTuple();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.storageKeys = object.storage_keys?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.storageKeys) {
            obj.storage_keys = message.storageKeys.map(e => e);
        }
        else {
            obj.storage_keys = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccessTuple.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AccessTuple.decode(message.value);
    },
    toProto(message) {
        return AccessTuple.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.AccessTuple",
            value: AccessTuple.encode(message).finish()
        };
    }
};
function createBaseTraceConfig() {
    return {
        tracer: "",
        timeout: "",
        reexec: Long.UZERO,
        disableStack: false,
        disableStorage: false,
        debug: false,
        limit: 0,
        overrides: undefined,
        enableMemory: false,
        enableReturnData: false,
        tracerJsonConfig: ""
    };
}
export const TraceConfig = {
    typeUrl: "/ethermint.evm.v1.TraceConfig",
    encode(message, writer = _m0.Writer.create()) {
        if (message.tracer !== "") {
            writer.uint32(10).string(message.tracer);
        }
        if (message.timeout !== "") {
            writer.uint32(18).string(message.timeout);
        }
        if (!message.reexec.isZero()) {
            writer.uint32(24).uint64(message.reexec);
        }
        if (message.disableStack === true) {
            writer.uint32(40).bool(message.disableStack);
        }
        if (message.disableStorage === true) {
            writer.uint32(48).bool(message.disableStorage);
        }
        if (message.debug === true) {
            writer.uint32(64).bool(message.debug);
        }
        if (message.limit !== 0) {
            writer.uint32(72).int32(message.limit);
        }
        if (message.overrides !== undefined) {
            ChainConfig.encode(message.overrides, writer.uint32(82).fork()).ldelim();
        }
        if (message.enableMemory === true) {
            writer.uint32(88).bool(message.enableMemory);
        }
        if (message.enableReturnData === true) {
            writer.uint32(96).bool(message.enableReturnData);
        }
        if (message.tracerJsonConfig !== "") {
            writer.uint32(106).string(message.tracerJsonConfig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTraceConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tracer = reader.string();
                    break;
                case 2:
                    message.timeout = reader.string();
                    break;
                case 3:
                    message.reexec = reader.uint64();
                    break;
                case 5:
                    message.disableStack = reader.bool();
                    break;
                case 6:
                    message.disableStorage = reader.bool();
                    break;
                case 8:
                    message.debug = reader.bool();
                    break;
                case 9:
                    message.limit = reader.int32();
                    break;
                case 10:
                    message.overrides = ChainConfig.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.enableMemory = reader.bool();
                    break;
                case 12:
                    message.enableReturnData = reader.bool();
                    break;
                case 13:
                    message.tracerJsonConfig = reader.string();
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
            tracer: isSet(object.tracer) ? String(object.tracer) : "",
            timeout: isSet(object.timeout) ? String(object.timeout) : "",
            reexec: isSet(object.reexec) ? Long.fromValue(object.reexec) : Long.UZERO,
            disableStack: isSet(object.disableStack) ? Boolean(object.disableStack) : false,
            disableStorage: isSet(object.disableStorage) ? Boolean(object.disableStorage) : false,
            debug: isSet(object.debug) ? Boolean(object.debug) : false,
            limit: isSet(object.limit) ? Number(object.limit) : 0,
            overrides: isSet(object.overrides) ? ChainConfig.fromJSON(object.overrides) : undefined,
            enableMemory: isSet(object.enableMemory) ? Boolean(object.enableMemory) : false,
            enableReturnData: isSet(object.enableReturnData) ? Boolean(object.enableReturnData) : false,
            tracerJsonConfig: isSet(object.tracerJsonConfig) ? String(object.tracerJsonConfig) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.tracer !== undefined && (obj.tracer = message.tracer);
        message.timeout !== undefined && (obj.timeout = message.timeout);
        message.reexec !== undefined && (obj.reexec = (message.reexec || Long.UZERO).toString());
        message.disableStack !== undefined && (obj.disableStack = message.disableStack);
        message.disableStorage !== undefined && (obj.disableStorage = message.disableStorage);
        message.debug !== undefined && (obj.debug = message.debug);
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.overrides !== undefined && (obj.overrides = message.overrides ? ChainConfig.toJSON(message.overrides) : undefined);
        message.enableMemory !== undefined && (obj.enableMemory = message.enableMemory);
        message.enableReturnData !== undefined && (obj.enableReturnData = message.enableReturnData);
        message.tracerJsonConfig !== undefined && (obj.tracerJsonConfig = message.tracerJsonConfig);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTraceConfig();
        message.tracer = object.tracer ?? "";
        message.timeout = object.timeout ?? "";
        message.reexec = object.reexec !== undefined && object.reexec !== null ? Long.fromValue(object.reexec) : Long.UZERO;
        message.disableStack = object.disableStack ?? false;
        message.disableStorage = object.disableStorage ?? false;
        message.debug = object.debug ?? false;
        message.limit = object.limit ?? 0;
        message.overrides = object.overrides !== undefined && object.overrides !== null ? ChainConfig.fromPartial(object.overrides) : undefined;
        message.enableMemory = object.enableMemory ?? false;
        message.enableReturnData = object.enableReturnData ?? false;
        message.tracerJsonConfig = object.tracerJsonConfig ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTraceConfig();
        if (object.tracer !== undefined && object.tracer !== null) {
            message.tracer = object.tracer;
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = object.timeout;
        }
        if (object.reexec !== undefined && object.reexec !== null) {
            message.reexec = Long.fromString(object.reexec);
        }
        if (object.disable_stack !== undefined && object.disable_stack !== null) {
            message.disableStack = object.disable_stack;
        }
        if (object.disable_storage !== undefined && object.disable_storage !== null) {
            message.disableStorage = object.disable_storage;
        }
        if (object.debug !== undefined && object.debug !== null) {
            message.debug = object.debug;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        }
        if (object.overrides !== undefined && object.overrides !== null) {
            message.overrides = ChainConfig.fromAmino(object.overrides);
        }
        if (object.enable_memory !== undefined && object.enable_memory !== null) {
            message.enableMemory = object.enable_memory;
        }
        if (object.enable_return_data !== undefined && object.enable_return_data !== null) {
            message.enableReturnData = object.enable_return_data;
        }
        if (object.tracer_json_config !== undefined && object.tracer_json_config !== null) {
            message.tracerJsonConfig = object.tracer_json_config;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tracer = message.tracer;
        obj.timeout = message.timeout;
        obj.reexec = message.reexec ? message.reexec.toString() : undefined;
        obj.disable_stack = message.disableStack;
        obj.disable_storage = message.disableStorage;
        obj.debug = message.debug;
        obj.limit = message.limit;
        obj.overrides = message.overrides ? ChainConfig.toAmino(message.overrides) : undefined;
        obj.enable_memory = message.enableMemory;
        obj.enable_return_data = message.enableReturnData;
        obj.tracer_json_config = message.tracerJsonConfig;
        return obj;
    },
    fromAminoMsg(object) {
        return TraceConfig.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TraceConfig.decode(message.value);
    },
    toProto(message) {
        return TraceConfig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.TraceConfig",
            value: TraceConfig.encode(message).finish()
        };
    }
};
