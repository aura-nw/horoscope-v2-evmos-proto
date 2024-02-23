import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** StorageType */
export var StorageType;
(function (StorageType) {
    /**
     * STORAGE_TYPE_DEFAULT_UNSPECIFIED - STORAGE_TYPE_DEFAULT_UNSPECIFIED indicates the persistent
     * KV-storage where primary key entries are stored in merkle-tree
     * backed commitment storage and indexes and seqs are stored in
     * fast index storage. Note that the Cosmos SDK before store/v2alpha1
     * does not support this.
     */
    StorageType[StorageType["STORAGE_TYPE_DEFAULT_UNSPECIFIED"] = 0] = "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
    /**
     * STORAGE_TYPE_MEMORY - STORAGE_TYPE_MEMORY indicates in-memory storage that will be
     * reloaded every time an app restarts. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     */
    StorageType[StorageType["STORAGE_TYPE_MEMORY"] = 1] = "STORAGE_TYPE_MEMORY";
    /**
     * STORAGE_TYPE_TRANSIENT - STORAGE_TYPE_TRANSIENT indicates transient storage that is reset
     * at the end of every block. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     */
    StorageType[StorageType["STORAGE_TYPE_TRANSIENT"] = 2] = "STORAGE_TYPE_TRANSIENT";
    /**
     * STORAGE_TYPE_INDEX - STORAGE_TYPE_INDEX indicates persistent storage which is not backed
     * by a merkle-tree and won't affect the app hash. Note that the Cosmos SDK
     * before store/v2alpha1 does not support this.
     */
    StorageType[StorageType["STORAGE_TYPE_INDEX"] = 3] = "STORAGE_TYPE_INDEX";
    /**
     * STORAGE_TYPE_COMMITMENT - STORAGE_TYPE_INDEX indicates persistent storage which is backed by
     * a merkle-tree. With this type of storage, both primary and index keys
     * will affect the app hash and this is generally less efficient
     * than using STORAGE_TYPE_DEFAULT_UNSPECIFIED which separates index
     * keys into index storage. Note that modules built with the
     * Cosmos SDK before store/v2alpha1 must specify STORAGE_TYPE_COMMITMENT
     * instead of STORAGE_TYPE_DEFAULT_UNSPECIFIED or STORAGE_TYPE_INDEX
     * because this is the only type of persistent storage available.
     */
    StorageType[StorageType["STORAGE_TYPE_COMMITMENT"] = 4] = "STORAGE_TYPE_COMMITMENT";
    StorageType[StorageType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StorageType || (StorageType = {}));
export const StorageTypeSDKType = StorageType;
export const StorageTypeAmino = StorageType;
export function storageTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STORAGE_TYPE_DEFAULT_UNSPECIFIED":
            return StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED;
        case 1:
        case "STORAGE_TYPE_MEMORY":
            return StorageType.STORAGE_TYPE_MEMORY;
        case 2:
        case "STORAGE_TYPE_TRANSIENT":
            return StorageType.STORAGE_TYPE_TRANSIENT;
        case 3:
        case "STORAGE_TYPE_INDEX":
            return StorageType.STORAGE_TYPE_INDEX;
        case 4:
        case "STORAGE_TYPE_COMMITMENT":
            return StorageType.STORAGE_TYPE_COMMITMENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StorageType.UNRECOGNIZED;
    }
}
export function storageTypeToJSON(object) {
    switch (object) {
        case StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED:
            return "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
        case StorageType.STORAGE_TYPE_MEMORY:
            return "STORAGE_TYPE_MEMORY";
        case StorageType.STORAGE_TYPE_TRANSIENT:
            return "STORAGE_TYPE_TRANSIENT";
        case StorageType.STORAGE_TYPE_INDEX:
            return "STORAGE_TYPE_INDEX";
        case StorageType.STORAGE_TYPE_COMMITMENT:
            return "STORAGE_TYPE_COMMITMENT";
        case StorageType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseModuleSchemaDescriptor() {
    return {
        schemaFile: [],
        prefix: new Uint8Array()
    };
}
export const ModuleSchemaDescriptor = {
    typeUrl: "/cosmos.orm.v1alpha1.ModuleSchemaDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.schemaFile) {
            ModuleSchemaDescriptor_FileEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.prefix.length !== 0) {
            writer.uint32(18).bytes(message.prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleSchemaDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schemaFile.push(ModuleSchemaDescriptor_FileEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.prefix = reader.bytes();
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
            schemaFile: Array.isArray(object?.schemaFile) ? object.schemaFile.map((e) => ModuleSchemaDescriptor_FileEntry.fromJSON(e)) : [],
            prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.schemaFile) {
            obj.schemaFile = message.schemaFile.map(e => e ? ModuleSchemaDescriptor_FileEntry.toJSON(e) : undefined);
        }
        else {
            obj.schemaFile = [];
        }
        message.prefix !== undefined && (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleSchemaDescriptor();
        message.schemaFile = object.schemaFile?.map(e => ModuleSchemaDescriptor_FileEntry.fromPartial(e)) || [];
        message.prefix = object.prefix ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleSchemaDescriptor();
        message.schemaFile = object.schema_file?.map(e => ModuleSchemaDescriptor_FileEntry.fromAmino(e)) || [];
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = bytesFromBase64(object.prefix);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.schemaFile) {
            obj.schema_file = message.schemaFile.map(e => e ? ModuleSchemaDescriptor_FileEntry.toAmino(e) : undefined);
        }
        else {
            obj.schema_file = [];
        }
        obj.prefix = message.prefix ? base64FromBytes(message.prefix) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleSchemaDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleSchemaDescriptor",
            value: ModuleSchemaDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleSchemaDescriptor.decode(message.value);
    },
    toProto(message) {
        return ModuleSchemaDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.v1alpha1.ModuleSchemaDescriptor",
            value: ModuleSchemaDescriptor.encode(message).finish()
        };
    }
};
function createBaseModuleSchemaDescriptor_FileEntry() {
    return {
        id: 0,
        protoFileName: "",
        storageType: 0
    };
}
export const ModuleSchemaDescriptor_FileEntry = {
    typeUrl: "/cosmos.orm.v1alpha1.FileEntry",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.protoFileName !== "") {
            writer.uint32(18).string(message.protoFileName);
        }
        if (message.storageType !== 0) {
            writer.uint32(24).int32(message.storageType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleSchemaDescriptor_FileEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.protoFileName = reader.string();
                    break;
                case 3:
                    message.storageType = reader.int32();
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
            id: isSet(object.id) ? Number(object.id) : 0,
            protoFileName: isSet(object.protoFileName) ? String(object.protoFileName) : "",
            storageType: isSet(object.storageType) ? storageTypeFromJSON(object.storageType) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.protoFileName !== undefined && (obj.protoFileName = message.protoFileName);
        message.storageType !== undefined && (obj.storageType = storageTypeToJSON(message.storageType));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleSchemaDescriptor_FileEntry();
        message.id = object.id ?? 0;
        message.protoFileName = object.protoFileName ?? "";
        message.storageType = object.storageType ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleSchemaDescriptor_FileEntry();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.proto_file_name !== undefined && object.proto_file_name !== null) {
            message.protoFileName = object.proto_file_name;
        }
        if (object.storage_type !== undefined && object.storage_type !== null) {
            message.storageType = storageTypeFromJSON(object.storage_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.proto_file_name = message.protoFileName;
        obj.storage_type = storageTypeToJSON(message.storageType);
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleSchemaDescriptor_FileEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/FileEntry",
            value: ModuleSchemaDescriptor_FileEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleSchemaDescriptor_FileEntry.decode(message.value);
    },
    toProto(message) {
        return ModuleSchemaDescriptor_FileEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.v1alpha1.FileEntry",
            value: ModuleSchemaDescriptor_FileEntry.encode(message).finish()
        };
    }
};
