import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseQueryBalancesRequest() {
    return {
        address: ""
    };
}
export const QueryBalancesRequest = {
    typeUrl: "/evmos.vesting.v2.QueryBalancesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBalancesRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalancesRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBalancesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBalancesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBalancesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.QueryBalancesRequest",
            value: QueryBalancesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBalancesResponse() {
    return {
        locked: [],
        unvested: [],
        vested: []
    };
}
export const QueryBalancesResponse = {
    typeUrl: "/evmos.vesting.v2.QueryBalancesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.locked) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.unvested) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.vested) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locked.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.unvested.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.vested.push(Coin.decode(reader, reader.uint32()));
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
            locked: Array.isArray(object?.locked) ? object.locked.map((e) => Coin.fromJSON(e)) : [],
            unvested: Array.isArray(object?.unvested) ? object.unvested.map((e) => Coin.fromJSON(e)) : [],
            vested: Array.isArray(object?.vested) ? object.vested.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locked) {
            obj.locked = message.locked.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.locked = [];
        }
        if (message.unvested) {
            obj.unvested = message.unvested.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.unvested = [];
        }
        if (message.vested) {
            obj.vested = message.vested.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.vested = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBalancesResponse();
        message.locked = object.locked?.map(e => Coin.fromPartial(e)) || [];
        message.unvested = object.unvested?.map(e => Coin.fromPartial(e)) || [];
        message.vested = object.vested?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalancesResponse();
        message.locked = object.locked?.map(e => Coin.fromAmino(e)) || [];
        message.unvested = object.unvested?.map(e => Coin.fromAmino(e)) || [];
        message.vested = object.vested?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.locked) {
            obj.locked = message.locked.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.locked = [];
        }
        if (message.unvested) {
            obj.unvested = message.unvested.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.unvested = [];
        }
        if (message.vested) {
            obj.vested = message.vested.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.vested = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBalancesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBalancesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBalancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/evmos.vesting.v2.QueryBalancesResponse",
            value: QueryBalancesResponse.encode(message).finish()
        };
    }
};
