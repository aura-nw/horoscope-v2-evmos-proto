import * as _1 from "./accesscontrol_x/genesis";
import * as _2 from "./accesscontrol_x/query";
import * as _3 from "./accesscontrol_x/tx";
import * as _4 from "./accesscontrol_x/gov";
import * as _5 from "./accesscontrol/accesscontrol";
import * as _6 from "./accesscontrol/constants";
import * as _7 from "./accesscontrol/legacy";
import * as _8 from "./app/v1alpha1/config";
import * as _9 from "./app/v1alpha1/module";
import * as _10 from "./app/v1alpha1/query";
import * as _11 from "./auth/v1beta1/auth";
import * as _12 from "./auth/v1beta1/genesis";
import * as _13 from "./auth/v1beta1/query";
import * as _14 from "./authz/v1beta1/authz";
import * as _15 from "./authz/v1beta1/event";
import * as _16 from "./authz/v1beta1/genesis";
import * as _17 from "./authz/v1beta1/query";
import * as _18 from "./authz/v1beta1/tx";
import * as _19 from "./bank/v1beta1/authz";
import * as _20 from "./bank/v1beta1/bank";
import * as _21 from "./bank/v1beta1/genesis";
import * as _22 from "./bank/v1beta1/query";
import * as _23 from "./bank/v1beta1/tx";
import * as _24 from "./base/abci/v1beta1/abci";
import * as _25 from "./base/kv/v1beta1/kv";
import * as _26 from "./base/query/v1beta1/pagination";
import * as _27 from "./base/reflection/v1beta1/reflection";
import * as _28 from "./base/reflection/v2alpha1/reflection";
import * as _29 from "./base/snapshots/v1beta1/snapshot";
import * as _30 from "./base/store/v1beta1/commit_info";
import * as _31 from "./base/store/v1beta1/listening";
import * as _32 from "./base/tendermint/v1beta1/query";
import * as _33 from "./base/v1beta1/coin";
import * as _34 from "./capability/v1beta1/capability";
import * as _35 from "./capability/v1beta1/genesis";
import * as _36 from "./crisis/v1beta1/genesis";
import * as _37 from "./crisis/v1beta1/tx";
import * as _38 from "./crypto/ed25519/keys";
import * as _39 from "./crypto/hd/v1/hd";
import * as _40 from "./crypto/keyring/v1/record";
import * as _41 from "./crypto/multisig/keys";
import * as _42 from "./crypto/secp256k1/keys";
import * as _43 from "./crypto/secp256r1/keys";
import * as _44 from "./crypto/sr25519/keys";
import * as _45 from "./distribution/v1beta1/distribution";
import * as _46 from "./distribution/v1beta1/genesis";
import * as _47 from "./distribution/v1beta1/query";
import * as _48 from "./distribution/v1beta1/tx";
import * as _49 from "./evidence/v1beta1/evidence";
import * as _50 from "./evidence/v1beta1/genesis";
import * as _51 from "./evidence/v1beta1/query";
import * as _52 from "./evidence/v1beta1/tx";
import * as _53 from "./feegrant/v1beta1/feegrant";
import * as _54 from "./feegrant/v1beta1/genesis";
import * as _55 from "./feegrant/v1beta1/query";
import * as _56 from "./feegrant/v1beta1/tx";
import * as _57 from "./genutil/v1beta1/genesis";
import * as _58 from "./gov/v1/genesis";
import * as _59 from "./gov/v1/gov";
import * as _60 from "./gov/v1/query";
import * as _61 from "./gov/v1/tx";
import * as _62 from "./gov/v1beta1/genesis";
import * as _63 from "./gov/v1beta1/gov";
import * as _64 from "./gov/v1beta1/query";
import * as _65 from "./gov/v1beta1/tx";
import * as _66 from "./group/v1/events";
import * as _67 from "./group/v1/genesis";
import * as _68 from "./group/v1/query";
import * as _69 from "./group/v1/tx";
import * as _70 from "./group/v1/types";
import * as _71 from "./ics23/v1/proofs";
import * as _72 from "./mint/v1beta1/genesis";
import * as _73 from "./mint/v1beta1/mint";
import * as _74 from "./mint/v1beta1/query";
import * as _76 from "./nft/v1beta1/event";
import * as _77 from "./nft/v1beta1/genesis";
import * as _78 from "./nft/v1beta1/nft";
import * as _79 from "./nft/v1beta1/query";
import * as _80 from "./nft/v1beta1/tx";
import * as _81 from "./orm/v1/orm";
import * as _82 from "./orm/v1alpha1/schema";
import * as _83 from "./params/types/types";
import * as _84 from "./params/v1beta1/params";
import * as _85 from "./params/v1beta1/query";
import * as _86 from "./slashing/v1beta1/genesis";
import * as _87 from "./slashing/v1beta1/query";
import * as _88 from "./slashing/v1beta1/slashing";
import * as _89 from "./slashing/v1beta1/tx";
import * as _90 from "./staking/v1beta1/authz";
import * as _91 from "./staking/v1beta1/genesis";
import * as _92 from "./staking/v1beta1/query";
import * as _93 from "./staking/v1beta1/staking";
import * as _94 from "./staking/v1beta1/tx";
import * as _95 from "./tx/signing/v1beta1/signing";
import * as _96 from "./tx/v1beta1/service";
import * as _97 from "./tx/v1beta1/tx";
import * as _98 from "./upgrade/v1beta1/query";
import * as _99 from "./upgrade/v1beta1/tx";
import * as _100 from "./upgrade/v1beta1/upgrade";
import * as _101 from "./vesting/v1beta1/tx";
import * as _102 from "./vesting/v1beta1/vesting";
import * as _229 from "./accesscontrol_x/query.lcd";
import * as _230 from "./auth/v1beta1/query.lcd";
import * as _231 from "./authz/v1beta1/query.lcd";
import * as _232 from "./bank/v1beta1/query.lcd";
import * as _233 from "./base/tendermint/v1beta1/query.lcd";
import * as _234 from "./distribution/v1beta1/query.lcd";
import * as _235 from "./evidence/v1beta1/query.lcd";
import * as _236 from "./feegrant/v1beta1/query.lcd";
import * as _237 from "./gov/v1/query.lcd";
import * as _238 from "./gov/v1beta1/query.lcd";
import * as _239 from "./group/v1/query.lcd";
import * as _240 from "./mint/v1beta1/query.lcd";
import * as _241 from "./nft/v1beta1/query.lcd";
import * as _242 from "./params/v1beta1/query.lcd";
import * as _243 from "./slashing/v1beta1/query.lcd";
import * as _244 from "./staking/v1beta1/query.lcd";
import * as _245 from "./tx/v1beta1/service.lcd";
import * as _246 from "./upgrade/v1beta1/query.lcd";
import * as _247 from "./accesscontrol_x/query.rpc.Query";
import * as _248 from "./app/v1alpha1/query.rpc.Query";
import * as _249 from "./auth/v1beta1/query.rpc.Query";
import * as _250 from "./authz/v1beta1/query.rpc.Query";
import * as _251 from "./bank/v1beta1/query.rpc.Query";
import * as _252 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _253 from "./distribution/v1beta1/query.rpc.Query";
import * as _254 from "./evidence/v1beta1/query.rpc.Query";
import * as _255 from "./feegrant/v1beta1/query.rpc.Query";
import * as _256 from "./gov/v1/query.rpc.Query";
import * as _257 from "./gov/v1beta1/query.rpc.Query";
import * as _258 from "./group/v1/query.rpc.Query";
import * as _259 from "./mint/v1beta1/query.rpc.Query";
import * as _260 from "./nft/v1beta1/query.rpc.Query";
import * as _261 from "./params/v1beta1/query.rpc.Query";
import * as _262 from "./slashing/v1beta1/query.rpc.Query";
import * as _263 from "./staking/v1beta1/query.rpc.Query";
import * as _264 from "./tx/v1beta1/service.rpc.Service";
import * as _265 from "./upgrade/v1beta1/query.rpc.Query";
import * as _266 from "./accesscontrol_x/tx.rpc.msg";
import * as _267 from "./authz/v1beta1/tx.rpc.msg";
import * as _268 from "./bank/v1beta1/tx.rpc.msg";
import * as _269 from "./crisis/v1beta1/tx.rpc.msg";
import * as _270 from "./distribution/v1beta1/tx.rpc.msg";
import * as _271 from "./evidence/v1beta1/tx.rpc.msg";
import * as _272 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _273 from "./gov/v1/tx.rpc.msg";
import * as _274 from "./gov/v1beta1/tx.rpc.msg";
import * as _275 from "./group/v1/tx.rpc.msg";
import * as _276 from "./nft/v1beta1/tx.rpc.msg";
import * as _277 from "./slashing/v1beta1/tx.rpc.msg";
import * as _278 from "./staking/v1beta1/tx.rpc.msg";
import * as _279 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _280 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace accesscontrol_x {
        const v1beta1: {
            MsgClientImpl: typeof _266.MsgClientImpl;
            QueryClientImpl: typeof _247.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                resourceDependencyMappingFromMessageKey(request: _2.ResourceDependencyMappingFromMessageKeyRequest): Promise<_2.ResourceDependencyMappingFromMessageKeyResponse>;
                listResourceDependencyMapping(request?: _2.ListResourceDependencyMappingRequest): Promise<_2.ListResourceDependencyMappingResponse>;
                wasmDependencyMapping(request: _2.WasmDependencyMappingRequest): Promise<_2.WasmDependencyMappingResponse>;
                listWasmDependencyMapping(request?: _2.ListWasmDependencyMappingRequest): Promise<_2.ListWasmDependencyMappingResponse>;
            };
            LCDQueryClient: typeof _229.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerWasmDependency(value: _3.MsgRegisterWasmDependency): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerWasmDependency(value: _3.MsgRegisterWasmDependency): {
                        typeUrl: string;
                        value: _3.MsgRegisterWasmDependency;
                    };
                };
                toJSON: {
                    registerWasmDependency(value: _3.MsgRegisterWasmDependency): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerWasmDependency(value: any): {
                        typeUrl: string;
                        value: _3.MsgRegisterWasmDependency;
                    };
                };
                fromPartial: {
                    registerWasmDependency(value: _3.MsgRegisterWasmDependency): {
                        typeUrl: string;
                        value: _3.MsgRegisterWasmDependency;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency": {
                    aminoType: string;
                    toAmino: (message: _3.MsgRegisterWasmDependency) => _3.MsgRegisterWasmDependencyAmino;
                    fromAmino: (object: _3.MsgRegisterWasmDependencyAmino) => _3.MsgRegisterWasmDependency;
                };
            };
            RegisterWasmDependencyJSONFile: {
                typeUrl: string;
                encode(message: _3.RegisterWasmDependencyJSONFile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.RegisterWasmDependencyJSONFile;
                fromJSON(object: any): _3.RegisterWasmDependencyJSONFile;
                toJSON(message: _3.RegisterWasmDependencyJSONFile): unknown;
                fromPartial(object: Partial<_3.RegisterWasmDependencyJSONFile>): _3.RegisterWasmDependencyJSONFile;
                fromAmino(object: _3.RegisterWasmDependencyJSONFileAmino): _3.RegisterWasmDependencyJSONFile;
                toAmino(message: _3.RegisterWasmDependencyJSONFile): _3.RegisterWasmDependencyJSONFileAmino;
                fromAminoMsg(object: _3.RegisterWasmDependencyJSONFileAminoMsg): _3.RegisterWasmDependencyJSONFile;
                toAminoMsg(message: _3.RegisterWasmDependencyJSONFile): _3.RegisterWasmDependencyJSONFileAminoMsg;
                fromProtoMsg(message: _3.RegisterWasmDependencyJSONFileProtoMsg): _3.RegisterWasmDependencyJSONFile;
                toProto(message: _3.RegisterWasmDependencyJSONFile): Uint8Array;
                toProtoMsg(message: _3.RegisterWasmDependencyJSONFile): _3.RegisterWasmDependencyJSONFileProtoMsg;
            };
            MsgRegisterWasmDependency: {
                typeUrl: string;
                encode(message: _3.MsgRegisterWasmDependency, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgRegisterWasmDependency;
                fromJSON(object: any): _3.MsgRegisterWasmDependency;
                toJSON(message: _3.MsgRegisterWasmDependency): unknown;
                fromPartial(object: Partial<_3.MsgRegisterWasmDependency>): _3.MsgRegisterWasmDependency;
                fromAmino(object: _3.MsgRegisterWasmDependencyAmino): _3.MsgRegisterWasmDependency;
                toAmino(message: _3.MsgRegisterWasmDependency): _3.MsgRegisterWasmDependencyAmino;
                fromAminoMsg(object: _3.MsgRegisterWasmDependencyAminoMsg): _3.MsgRegisterWasmDependency;
                toAminoMsg(message: _3.MsgRegisterWasmDependency): _3.MsgRegisterWasmDependencyAminoMsg;
                fromProtoMsg(message: _3.MsgRegisterWasmDependencyProtoMsg): _3.MsgRegisterWasmDependency;
                toProto(message: _3.MsgRegisterWasmDependency): Uint8Array;
                toProtoMsg(message: _3.MsgRegisterWasmDependency): _3.MsgRegisterWasmDependencyProtoMsg;
            };
            MsgRegisterWasmDependencyResponse: {
                typeUrl: string;
                encode(_: _3.MsgRegisterWasmDependencyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.MsgRegisterWasmDependencyResponse;
                fromJSON(_: any): _3.MsgRegisterWasmDependencyResponse;
                toJSON(_: _3.MsgRegisterWasmDependencyResponse): unknown;
                fromPartial(_: Partial<_3.MsgRegisterWasmDependencyResponse>): _3.MsgRegisterWasmDependencyResponse;
                fromAmino(_: _3.MsgRegisterWasmDependencyResponseAmino): _3.MsgRegisterWasmDependencyResponse;
                toAmino(_: _3.MsgRegisterWasmDependencyResponse): _3.MsgRegisterWasmDependencyResponseAmino;
                fromAminoMsg(object: _3.MsgRegisterWasmDependencyResponseAminoMsg): _3.MsgRegisterWasmDependencyResponse;
                toAminoMsg(message: _3.MsgRegisterWasmDependencyResponse): _3.MsgRegisterWasmDependencyResponseAminoMsg;
                fromProtoMsg(message: _3.MsgRegisterWasmDependencyResponseProtoMsg): _3.MsgRegisterWasmDependencyResponse;
                toProto(message: _3.MsgRegisterWasmDependencyResponse): Uint8Array;
                toProtoMsg(message: _3.MsgRegisterWasmDependencyResponse): _3.MsgRegisterWasmDependencyResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _2.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryParamsRequest;
                fromJSON(_: any): _2.QueryParamsRequest;
                toJSON(_: _2.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_2.QueryParamsRequest>): _2.QueryParamsRequest;
                fromAmino(_: _2.QueryParamsRequestAmino): _2.QueryParamsRequest;
                toAmino(_: _2.QueryParamsRequest): _2.QueryParamsRequestAmino;
                fromAminoMsg(object: _2.QueryParamsRequestAminoMsg): _2.QueryParamsRequest;
                toAminoMsg(message: _2.QueryParamsRequest): _2.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _2.QueryParamsRequestProtoMsg): _2.QueryParamsRequest;
                toProto(message: _2.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _2.QueryParamsRequest): _2.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _2.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryParamsResponse;
                fromJSON(object: any): _2.QueryParamsResponse;
                toJSON(message: _2.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_2.QueryParamsResponse>): _2.QueryParamsResponse;
                fromAmino(object: _2.QueryParamsResponseAmino): _2.QueryParamsResponse;
                toAmino(message: _2.QueryParamsResponse): _2.QueryParamsResponseAmino;
                fromAminoMsg(object: _2.QueryParamsResponseAminoMsg): _2.QueryParamsResponse;
                toAminoMsg(message: _2.QueryParamsResponse): _2.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _2.QueryParamsResponseProtoMsg): _2.QueryParamsResponse;
                toProto(message: _2.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _2.QueryParamsResponse): _2.QueryParamsResponseProtoMsg;
            };
            ResourceDependencyMappingFromMessageKeyRequest: {
                typeUrl: string;
                encode(message: _2.ResourceDependencyMappingFromMessageKeyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ResourceDependencyMappingFromMessageKeyRequest;
                fromJSON(object: any): _2.ResourceDependencyMappingFromMessageKeyRequest;
                toJSON(message: _2.ResourceDependencyMappingFromMessageKeyRequest): unknown;
                fromPartial(object: Partial<_2.ResourceDependencyMappingFromMessageKeyRequest>): _2.ResourceDependencyMappingFromMessageKeyRequest;
                fromAmino(object: _2.ResourceDependencyMappingFromMessageKeyRequestAmino): _2.ResourceDependencyMappingFromMessageKeyRequest;
                toAmino(message: _2.ResourceDependencyMappingFromMessageKeyRequest): _2.ResourceDependencyMappingFromMessageKeyRequestAmino;
                fromAminoMsg(object: _2.ResourceDependencyMappingFromMessageKeyRequestAminoMsg): _2.ResourceDependencyMappingFromMessageKeyRequest;
                toAminoMsg(message: _2.ResourceDependencyMappingFromMessageKeyRequest): _2.ResourceDependencyMappingFromMessageKeyRequestAminoMsg;
                fromProtoMsg(message: _2.ResourceDependencyMappingFromMessageKeyRequestProtoMsg): _2.ResourceDependencyMappingFromMessageKeyRequest;
                toProto(message: _2.ResourceDependencyMappingFromMessageKeyRequest): Uint8Array;
                toProtoMsg(message: _2.ResourceDependencyMappingFromMessageKeyRequest): _2.ResourceDependencyMappingFromMessageKeyRequestProtoMsg;
            };
            ResourceDependencyMappingFromMessageKeyResponse: {
                typeUrl: string;
                encode(message: _2.ResourceDependencyMappingFromMessageKeyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ResourceDependencyMappingFromMessageKeyResponse;
                fromJSON(object: any): _2.ResourceDependencyMappingFromMessageKeyResponse;
                toJSON(message: _2.ResourceDependencyMappingFromMessageKeyResponse): unknown;
                fromPartial(object: Partial<_2.ResourceDependencyMappingFromMessageKeyResponse>): _2.ResourceDependencyMappingFromMessageKeyResponse;
                fromAmino(object: _2.ResourceDependencyMappingFromMessageKeyResponseAmino): _2.ResourceDependencyMappingFromMessageKeyResponse;
                toAmino(message: _2.ResourceDependencyMappingFromMessageKeyResponse): _2.ResourceDependencyMappingFromMessageKeyResponseAmino;
                fromAminoMsg(object: _2.ResourceDependencyMappingFromMessageKeyResponseAminoMsg): _2.ResourceDependencyMappingFromMessageKeyResponse;
                toAminoMsg(message: _2.ResourceDependencyMappingFromMessageKeyResponse): _2.ResourceDependencyMappingFromMessageKeyResponseAminoMsg;
                fromProtoMsg(message: _2.ResourceDependencyMappingFromMessageKeyResponseProtoMsg): _2.ResourceDependencyMappingFromMessageKeyResponse;
                toProto(message: _2.ResourceDependencyMappingFromMessageKeyResponse): Uint8Array;
                toProtoMsg(message: _2.ResourceDependencyMappingFromMessageKeyResponse): _2.ResourceDependencyMappingFromMessageKeyResponseProtoMsg;
            };
            WasmDependencyMappingRequest: {
                typeUrl: string;
                encode(message: _2.WasmDependencyMappingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.WasmDependencyMappingRequest;
                fromJSON(object: any): _2.WasmDependencyMappingRequest;
                toJSON(message: _2.WasmDependencyMappingRequest): unknown;
                fromPartial(object: Partial<_2.WasmDependencyMappingRequest>): _2.WasmDependencyMappingRequest;
                fromAmino(object: _2.WasmDependencyMappingRequestAmino): _2.WasmDependencyMappingRequest;
                toAmino(message: _2.WasmDependencyMappingRequest): _2.WasmDependencyMappingRequestAmino;
                fromAminoMsg(object: _2.WasmDependencyMappingRequestAminoMsg): _2.WasmDependencyMappingRequest;
                toAminoMsg(message: _2.WasmDependencyMappingRequest): _2.WasmDependencyMappingRequestAminoMsg;
                fromProtoMsg(message: _2.WasmDependencyMappingRequestProtoMsg): _2.WasmDependencyMappingRequest;
                toProto(message: _2.WasmDependencyMappingRequest): Uint8Array;
                toProtoMsg(message: _2.WasmDependencyMappingRequest): _2.WasmDependencyMappingRequestProtoMsg;
            };
            WasmDependencyMappingResponse: {
                typeUrl: string;
                encode(message: _2.WasmDependencyMappingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.WasmDependencyMappingResponse;
                fromJSON(object: any): _2.WasmDependencyMappingResponse;
                toJSON(message: _2.WasmDependencyMappingResponse): unknown;
                fromPartial(object: Partial<_2.WasmDependencyMappingResponse>): _2.WasmDependencyMappingResponse;
                fromAmino(object: _2.WasmDependencyMappingResponseAmino): _2.WasmDependencyMappingResponse;
                toAmino(message: _2.WasmDependencyMappingResponse): _2.WasmDependencyMappingResponseAmino;
                fromAminoMsg(object: _2.WasmDependencyMappingResponseAminoMsg): _2.WasmDependencyMappingResponse;
                toAminoMsg(message: _2.WasmDependencyMappingResponse): _2.WasmDependencyMappingResponseAminoMsg;
                fromProtoMsg(message: _2.WasmDependencyMappingResponseProtoMsg): _2.WasmDependencyMappingResponse;
                toProto(message: _2.WasmDependencyMappingResponse): Uint8Array;
                toProtoMsg(message: _2.WasmDependencyMappingResponse): _2.WasmDependencyMappingResponseProtoMsg;
            };
            ListResourceDependencyMappingRequest: {
                typeUrl: string;
                encode(_: _2.ListResourceDependencyMappingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ListResourceDependencyMappingRequest;
                fromJSON(_: any): _2.ListResourceDependencyMappingRequest;
                toJSON(_: _2.ListResourceDependencyMappingRequest): unknown;
                fromPartial(_: Partial<_2.ListResourceDependencyMappingRequest>): _2.ListResourceDependencyMappingRequest;
                fromAmino(_: _2.ListResourceDependencyMappingRequestAmino): _2.ListResourceDependencyMappingRequest;
                toAmino(_: _2.ListResourceDependencyMappingRequest): _2.ListResourceDependencyMappingRequestAmino;
                fromAminoMsg(object: _2.ListResourceDependencyMappingRequestAminoMsg): _2.ListResourceDependencyMappingRequest;
                toAminoMsg(message: _2.ListResourceDependencyMappingRequest): _2.ListResourceDependencyMappingRequestAminoMsg;
                fromProtoMsg(message: _2.ListResourceDependencyMappingRequestProtoMsg): _2.ListResourceDependencyMappingRequest;
                toProto(message: _2.ListResourceDependencyMappingRequest): Uint8Array;
                toProtoMsg(message: _2.ListResourceDependencyMappingRequest): _2.ListResourceDependencyMappingRequestProtoMsg;
            };
            ListResourceDependencyMappingResponse: {
                typeUrl: string;
                encode(message: _2.ListResourceDependencyMappingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ListResourceDependencyMappingResponse;
                fromJSON(object: any): _2.ListResourceDependencyMappingResponse;
                toJSON(message: _2.ListResourceDependencyMappingResponse): unknown;
                fromPartial(object: Partial<_2.ListResourceDependencyMappingResponse>): _2.ListResourceDependencyMappingResponse;
                fromAmino(object: _2.ListResourceDependencyMappingResponseAmino): _2.ListResourceDependencyMappingResponse;
                toAmino(message: _2.ListResourceDependencyMappingResponse): _2.ListResourceDependencyMappingResponseAmino;
                fromAminoMsg(object: _2.ListResourceDependencyMappingResponseAminoMsg): _2.ListResourceDependencyMappingResponse;
                toAminoMsg(message: _2.ListResourceDependencyMappingResponse): _2.ListResourceDependencyMappingResponseAminoMsg;
                fromProtoMsg(message: _2.ListResourceDependencyMappingResponseProtoMsg): _2.ListResourceDependencyMappingResponse;
                toProto(message: _2.ListResourceDependencyMappingResponse): Uint8Array;
                toProtoMsg(message: _2.ListResourceDependencyMappingResponse): _2.ListResourceDependencyMappingResponseProtoMsg;
            };
            ListWasmDependencyMappingRequest: {
                typeUrl: string;
                encode(_: _2.ListWasmDependencyMappingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ListWasmDependencyMappingRequest;
                fromJSON(_: any): _2.ListWasmDependencyMappingRequest;
                toJSON(_: _2.ListWasmDependencyMappingRequest): unknown;
                fromPartial(_: Partial<_2.ListWasmDependencyMappingRequest>): _2.ListWasmDependencyMappingRequest;
                fromAmino(_: _2.ListWasmDependencyMappingRequestAmino): _2.ListWasmDependencyMappingRequest;
                toAmino(_: _2.ListWasmDependencyMappingRequest): _2.ListWasmDependencyMappingRequestAmino;
                fromAminoMsg(object: _2.ListWasmDependencyMappingRequestAminoMsg): _2.ListWasmDependencyMappingRequest;
                toAminoMsg(message: _2.ListWasmDependencyMappingRequest): _2.ListWasmDependencyMappingRequestAminoMsg;
                fromProtoMsg(message: _2.ListWasmDependencyMappingRequestProtoMsg): _2.ListWasmDependencyMappingRequest;
                toProto(message: _2.ListWasmDependencyMappingRequest): Uint8Array;
                toProtoMsg(message: _2.ListWasmDependencyMappingRequest): _2.ListWasmDependencyMappingRequestProtoMsg;
            };
            ListWasmDependencyMappingResponse: {
                typeUrl: string;
                encode(message: _2.ListWasmDependencyMappingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ListWasmDependencyMappingResponse;
                fromJSON(object: any): _2.ListWasmDependencyMappingResponse;
                toJSON(message: _2.ListWasmDependencyMappingResponse): unknown;
                fromPartial(object: Partial<_2.ListWasmDependencyMappingResponse>): _2.ListWasmDependencyMappingResponse;
                fromAmino(object: _2.ListWasmDependencyMappingResponseAmino): _2.ListWasmDependencyMappingResponse;
                toAmino(message: _2.ListWasmDependencyMappingResponse): _2.ListWasmDependencyMappingResponseAmino;
                fromAminoMsg(object: _2.ListWasmDependencyMappingResponseAminoMsg): _2.ListWasmDependencyMappingResponse;
                toAminoMsg(message: _2.ListWasmDependencyMappingResponse): _2.ListWasmDependencyMappingResponseAminoMsg;
                fromProtoMsg(message: _2.ListWasmDependencyMappingResponseProtoMsg): _2.ListWasmDependencyMappingResponse;
                toProto(message: _2.ListWasmDependencyMappingResponse): Uint8Array;
                toProtoMsg(message: _2.ListWasmDependencyMappingResponse): _2.ListWasmDependencyMappingResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.GenesisState;
                fromJSON(object: any): _1.GenesisState;
                toJSON(message: _1.GenesisState): unknown;
                fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
                fromAmino(object: _1.GenesisStateAmino): _1.GenesisState;
                toAmino(message: _1.GenesisState): _1.GenesisStateAmino;
                fromAminoMsg(object: _1.GenesisStateAminoMsg): _1.GenesisState;
                toAminoMsg(message: _1.GenesisState): _1.GenesisStateAminoMsg;
                fromProtoMsg(message: _1.GenesisStateProtoMsg): _1.GenesisState;
                toProto(message: _1.GenesisState): Uint8Array;
                toProtoMsg(message: _1.GenesisState): _1.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _1.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.Params;
                fromJSON(_: any): _1.Params;
                toJSON(_: _1.Params): unknown;
                fromPartial(_: Partial<_1.Params>): _1.Params;
                fromAmino(_: _1.ParamsAmino): _1.Params;
                toAmino(_: _1.Params): _1.ParamsAmino;
                fromAminoMsg(object: _1.ParamsAminoMsg): _1.Params;
                toAminoMsg(message: _1.Params): _1.ParamsAminoMsg;
                fromProtoMsg(message: _1.ParamsProtoMsg): _1.Params;
                toProto(message: _1.Params): Uint8Array;
                toProtoMsg(message: _1.Params): _1.ParamsProtoMsg;
            };
        };
    }
    namespace accesscontrol {
        const v1beta1: {
            LegacyAccessOperationWithSelector: {
                typeUrl: string;
                encode(message: _7.LegacyAccessOperationWithSelector, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.LegacyAccessOperationWithSelector;
                fromJSON(object: any): _7.LegacyAccessOperationWithSelector;
                toJSON(message: _7.LegacyAccessOperationWithSelector): unknown;
                fromPartial(object: Partial<_7.LegacyAccessOperationWithSelector>): _7.LegacyAccessOperationWithSelector;
                fromAmino(object: _7.LegacyAccessOperationWithSelectorAmino): _7.LegacyAccessOperationWithSelector;
                toAmino(message: _7.LegacyAccessOperationWithSelector): _7.LegacyAccessOperationWithSelectorAmino;
                fromAminoMsg(object: _7.LegacyAccessOperationWithSelectorAminoMsg): _7.LegacyAccessOperationWithSelector;
                toAminoMsg(message: _7.LegacyAccessOperationWithSelector): _7.LegacyAccessOperationWithSelectorAminoMsg;
                fromProtoMsg(message: _7.LegacyAccessOperationWithSelectorProtoMsg): _7.LegacyAccessOperationWithSelector;
                toProto(message: _7.LegacyAccessOperationWithSelector): Uint8Array;
                toProtoMsg(message: _7.LegacyAccessOperationWithSelector): _7.LegacyAccessOperationWithSelectorProtoMsg;
            };
            LegacyWasmDependencyMapping: {
                typeUrl: string;
                encode(message: _7.LegacyWasmDependencyMapping, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.LegacyWasmDependencyMapping;
                fromJSON(object: any): _7.LegacyWasmDependencyMapping;
                toJSON(message: _7.LegacyWasmDependencyMapping): unknown;
                fromPartial(object: Partial<_7.LegacyWasmDependencyMapping>): _7.LegacyWasmDependencyMapping;
                fromAmino(object: _7.LegacyWasmDependencyMappingAmino): _7.LegacyWasmDependencyMapping;
                toAmino(message: _7.LegacyWasmDependencyMapping): _7.LegacyWasmDependencyMappingAmino;
                fromAminoMsg(object: _7.LegacyWasmDependencyMappingAminoMsg): _7.LegacyWasmDependencyMapping;
                toAminoMsg(message: _7.LegacyWasmDependencyMapping): _7.LegacyWasmDependencyMappingAminoMsg;
                fromProtoMsg(message: _7.LegacyWasmDependencyMappingProtoMsg): _7.LegacyWasmDependencyMapping;
                toProto(message: _7.LegacyWasmDependencyMapping): Uint8Array;
                toProtoMsg(message: _7.LegacyWasmDependencyMapping): _7.LegacyWasmDependencyMappingProtoMsg;
            };
            accessTypeFromJSON(object: any): _6.AccessType;
            accessTypeToJSON(object: _6.AccessType): string;
            accessOperationSelectorTypeFromJSON(object: any): _6.AccessOperationSelectorType;
            accessOperationSelectorTypeToJSON(object: _6.AccessOperationSelectorType): string;
            resourceTypeFromJSON(object: any): _6.ResourceType;
            resourceTypeToJSON(object: _6.ResourceType): string;
            wasmMessageSubtypeFromJSON(object: any): _6.WasmMessageSubtype;
            wasmMessageSubtypeToJSON(object: _6.WasmMessageSubtype): string;
            AccessType: typeof _6.AccessType;
            AccessTypeSDKType: typeof _6.AccessType;
            AccessTypeAmino: typeof _6.AccessType;
            AccessOperationSelectorType: typeof _6.AccessOperationSelectorType;
            AccessOperationSelectorTypeSDKType: typeof _6.AccessOperationSelectorType;
            AccessOperationSelectorTypeAmino: typeof _6.AccessOperationSelectorType;
            ResourceType: typeof _6.ResourceType;
            ResourceTypeSDKType: typeof _6.ResourceType;
            ResourceTypeAmino: typeof _6.ResourceType;
            WasmMessageSubtype: typeof _6.WasmMessageSubtype;
            WasmMessageSubtypeSDKType: typeof _6.WasmMessageSubtype;
            WasmMessageSubtypeAmino: typeof _6.WasmMessageSubtype;
            AccessOperation: {
                typeUrl: string;
                encode(message: _5.AccessOperation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.AccessOperation;
                fromJSON(object: any): _5.AccessOperation;
                toJSON(message: _5.AccessOperation): unknown;
                fromPartial(object: Partial<_5.AccessOperation>): _5.AccessOperation;
                fromAmino(object: _5.AccessOperationAmino): _5.AccessOperation;
                toAmino(message: _5.AccessOperation): _5.AccessOperationAmino;
                fromAminoMsg(object: _5.AccessOperationAminoMsg): _5.AccessOperation;
                toAminoMsg(message: _5.AccessOperation): _5.AccessOperationAminoMsg;
                fromProtoMsg(message: _5.AccessOperationProtoMsg): _5.AccessOperation;
                toProto(message: _5.AccessOperation): Uint8Array;
                toProtoMsg(message: _5.AccessOperation): _5.AccessOperationProtoMsg;
            };
            WasmAccessOperation: {
                typeUrl: string;
                encode(message: _5.WasmAccessOperation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.WasmAccessOperation;
                fromJSON(object: any): _5.WasmAccessOperation;
                toJSON(message: _5.WasmAccessOperation): unknown;
                fromPartial(object: Partial<_5.WasmAccessOperation>): _5.WasmAccessOperation;
                fromAmino(object: _5.WasmAccessOperationAmino): _5.WasmAccessOperation;
                toAmino(message: _5.WasmAccessOperation): _5.WasmAccessOperationAmino;
                fromAminoMsg(object: _5.WasmAccessOperationAminoMsg): _5.WasmAccessOperation;
                toAminoMsg(message: _5.WasmAccessOperation): _5.WasmAccessOperationAminoMsg;
                fromProtoMsg(message: _5.WasmAccessOperationProtoMsg): _5.WasmAccessOperation;
                toProto(message: _5.WasmAccessOperation): Uint8Array;
                toProtoMsg(message: _5.WasmAccessOperation): _5.WasmAccessOperationProtoMsg;
            };
            WasmContractReference: {
                typeUrl: string;
                encode(message: _5.WasmContractReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.WasmContractReference;
                fromJSON(object: any): _5.WasmContractReference;
                toJSON(message: _5.WasmContractReference): unknown;
                fromPartial(object: Partial<_5.WasmContractReference>): _5.WasmContractReference;
                fromAmino(object: _5.WasmContractReferenceAmino): _5.WasmContractReference;
                toAmino(message: _5.WasmContractReference): _5.WasmContractReferenceAmino;
                fromAminoMsg(object: _5.WasmContractReferenceAminoMsg): _5.WasmContractReference;
                toAminoMsg(message: _5.WasmContractReference): _5.WasmContractReferenceAminoMsg;
                fromProtoMsg(message: _5.WasmContractReferenceProtoMsg): _5.WasmContractReference;
                toProto(message: _5.WasmContractReference): Uint8Array;
                toProtoMsg(message: _5.WasmContractReference): _5.WasmContractReferenceProtoMsg;
            };
            WasmContractReferences: {
                typeUrl: string;
                encode(message: _5.WasmContractReferences, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.WasmContractReferences;
                fromJSON(object: any): _5.WasmContractReferences;
                toJSON(message: _5.WasmContractReferences): unknown;
                fromPartial(object: Partial<_5.WasmContractReferences>): _5.WasmContractReferences;
                fromAmino(object: _5.WasmContractReferencesAmino): _5.WasmContractReferences;
                toAmino(message: _5.WasmContractReferences): _5.WasmContractReferencesAmino;
                fromAminoMsg(object: _5.WasmContractReferencesAminoMsg): _5.WasmContractReferences;
                toAminoMsg(message: _5.WasmContractReferences): _5.WasmContractReferencesAminoMsg;
                fromProtoMsg(message: _5.WasmContractReferencesProtoMsg): _5.WasmContractReferences;
                toProto(message: _5.WasmContractReferences): Uint8Array;
                toProtoMsg(message: _5.WasmContractReferences): _5.WasmContractReferencesProtoMsg;
            };
            WasmAccessOperations: {
                typeUrl: string;
                encode(message: _5.WasmAccessOperations, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.WasmAccessOperations;
                fromJSON(object: any): _5.WasmAccessOperations;
                toJSON(message: _5.WasmAccessOperations): unknown;
                fromPartial(object: Partial<_5.WasmAccessOperations>): _5.WasmAccessOperations;
                fromAmino(object: _5.WasmAccessOperationsAmino): _5.WasmAccessOperations;
                toAmino(message: _5.WasmAccessOperations): _5.WasmAccessOperationsAmino;
                fromAminoMsg(object: _5.WasmAccessOperationsAminoMsg): _5.WasmAccessOperations;
                toAminoMsg(message: _5.WasmAccessOperations): _5.WasmAccessOperationsAminoMsg;
                fromProtoMsg(message: _5.WasmAccessOperationsProtoMsg): _5.WasmAccessOperations;
                toProto(message: _5.WasmAccessOperations): Uint8Array;
                toProtoMsg(message: _5.WasmAccessOperations): _5.WasmAccessOperationsProtoMsg;
            };
            MessageDependencyMapping: {
                typeUrl: string;
                encode(message: _5.MessageDependencyMapping, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MessageDependencyMapping;
                fromJSON(object: any): _5.MessageDependencyMapping;
                toJSON(message: _5.MessageDependencyMapping): unknown;
                fromPartial(object: Partial<_5.MessageDependencyMapping>): _5.MessageDependencyMapping;
                fromAmino(object: _5.MessageDependencyMappingAmino): _5.MessageDependencyMapping;
                toAmino(message: _5.MessageDependencyMapping): _5.MessageDependencyMappingAmino;
                fromAminoMsg(object: _5.MessageDependencyMappingAminoMsg): _5.MessageDependencyMapping;
                toAminoMsg(message: _5.MessageDependencyMapping): _5.MessageDependencyMappingAminoMsg;
                fromProtoMsg(message: _5.MessageDependencyMappingProtoMsg): _5.MessageDependencyMapping;
                toProto(message: _5.MessageDependencyMapping): Uint8Array;
                toProtoMsg(message: _5.MessageDependencyMapping): _5.MessageDependencyMappingProtoMsg;
            };
            WasmDependencyMapping: {
                typeUrl: string;
                encode(message: _5.WasmDependencyMapping, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.WasmDependencyMapping;
                fromJSON(object: any): _5.WasmDependencyMapping;
                toJSON(message: _5.WasmDependencyMapping): unknown;
                fromPartial(object: Partial<_5.WasmDependencyMapping>): _5.WasmDependencyMapping;
                fromAmino(object: _5.WasmDependencyMappingAmino): _5.WasmDependencyMapping;
                toAmino(message: _5.WasmDependencyMapping): _5.WasmDependencyMappingAmino;
                fromAminoMsg(object: _5.WasmDependencyMappingAminoMsg): _5.WasmDependencyMapping;
                toAminoMsg(message: _5.WasmDependencyMapping): _5.WasmDependencyMappingAminoMsg;
                fromProtoMsg(message: _5.WasmDependencyMappingProtoMsg): _5.WasmDependencyMapping;
                toProto(message: _5.WasmDependencyMapping): Uint8Array;
                toProtoMsg(message: _5.WasmDependencyMapping): _5.WasmDependencyMappingProtoMsg;
            };
            MsgUpdateResourceDependencyMappingProposal: {
                typeUrl: string;
                encode(message: _4.MsgUpdateResourceDependencyMappingProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgUpdateResourceDependencyMappingProposal;
                fromJSON(object: any): _4.MsgUpdateResourceDependencyMappingProposal;
                toJSON(message: _4.MsgUpdateResourceDependencyMappingProposal): unknown;
                fromPartial(object: Partial<_4.MsgUpdateResourceDependencyMappingProposal>): _4.MsgUpdateResourceDependencyMappingProposal;
                fromAmino(object: _4.MsgUpdateResourceDependencyMappingProposalAmino): _4.MsgUpdateResourceDependencyMappingProposal;
                toAmino(message: _4.MsgUpdateResourceDependencyMappingProposal): _4.MsgUpdateResourceDependencyMappingProposalAmino;
                fromAminoMsg(object: _4.MsgUpdateResourceDependencyMappingProposalAminoMsg): _4.MsgUpdateResourceDependencyMappingProposal;
                toAminoMsg(message: _4.MsgUpdateResourceDependencyMappingProposal): _4.MsgUpdateResourceDependencyMappingProposalAminoMsg;
                fromProtoMsg(message: _4.MsgUpdateResourceDependencyMappingProposalProtoMsg): _4.MsgUpdateResourceDependencyMappingProposal;
                toProto(message: _4.MsgUpdateResourceDependencyMappingProposal): Uint8Array;
                toProtoMsg(message: _4.MsgUpdateResourceDependencyMappingProposal): _4.MsgUpdateResourceDependencyMappingProposalProtoMsg;
            };
            MsgUpdateResourceDependencyMappingProposalJsonFile: {
                typeUrl: string;
                encode(message: _4.MsgUpdateResourceDependencyMappingProposalJsonFile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgUpdateResourceDependencyMappingProposalJsonFile;
                fromJSON(object: any): _4.MsgUpdateResourceDependencyMappingProposalJsonFile;
                toJSON(message: _4.MsgUpdateResourceDependencyMappingProposalJsonFile): unknown;
                fromPartial(object: Partial<_4.MsgUpdateResourceDependencyMappingProposalJsonFile>): _4.MsgUpdateResourceDependencyMappingProposalJsonFile;
                fromAmino(object: _4.MsgUpdateResourceDependencyMappingProposalJsonFileAmino): _4.MsgUpdateResourceDependencyMappingProposalJsonFile;
                toAmino(message: _4.MsgUpdateResourceDependencyMappingProposalJsonFile): _4.MsgUpdateResourceDependencyMappingProposalJsonFileAmino;
                fromAminoMsg(object: _4.MsgUpdateResourceDependencyMappingProposalJsonFileAminoMsg): _4.MsgUpdateResourceDependencyMappingProposalJsonFile;
                toAminoMsg(message: _4.MsgUpdateResourceDependencyMappingProposalJsonFile): _4.MsgUpdateResourceDependencyMappingProposalJsonFileAminoMsg;
                fromProtoMsg(message: _4.MsgUpdateResourceDependencyMappingProposalJsonFileProtoMsg): _4.MsgUpdateResourceDependencyMappingProposalJsonFile;
                toProto(message: _4.MsgUpdateResourceDependencyMappingProposalJsonFile): Uint8Array;
                toProtoMsg(message: _4.MsgUpdateResourceDependencyMappingProposalJsonFile): _4.MsgUpdateResourceDependencyMappingProposalJsonFileProtoMsg;
            };
            MsgUpdateResourceDependencyMappingProposalResponse: {
                typeUrl: string;
                encode(_: _4.MsgUpdateResourceDependencyMappingProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgUpdateResourceDependencyMappingProposalResponse;
                fromJSON(_: any): _4.MsgUpdateResourceDependencyMappingProposalResponse;
                toJSON(_: _4.MsgUpdateResourceDependencyMappingProposalResponse): unknown;
                fromPartial(_: Partial<_4.MsgUpdateResourceDependencyMappingProposalResponse>): _4.MsgUpdateResourceDependencyMappingProposalResponse;
                fromAmino(_: _4.MsgUpdateResourceDependencyMappingProposalResponseAmino): _4.MsgUpdateResourceDependencyMappingProposalResponse;
                toAmino(_: _4.MsgUpdateResourceDependencyMappingProposalResponse): _4.MsgUpdateResourceDependencyMappingProposalResponseAmino;
                fromAminoMsg(object: _4.MsgUpdateResourceDependencyMappingProposalResponseAminoMsg): _4.MsgUpdateResourceDependencyMappingProposalResponse;
                toAminoMsg(message: _4.MsgUpdateResourceDependencyMappingProposalResponse): _4.MsgUpdateResourceDependencyMappingProposalResponseAminoMsg;
                fromProtoMsg(message: _4.MsgUpdateResourceDependencyMappingProposalResponseProtoMsg): _4.MsgUpdateResourceDependencyMappingProposalResponse;
                toProto(message: _4.MsgUpdateResourceDependencyMappingProposalResponse): Uint8Array;
                toProtoMsg(message: _4.MsgUpdateResourceDependencyMappingProposalResponse): _4.MsgUpdateResourceDependencyMappingProposalResponseProtoMsg;
            };
            MsgUpdateWasmDependencyMappingProposal: {
                typeUrl: string;
                encode(message: _4.MsgUpdateWasmDependencyMappingProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgUpdateWasmDependencyMappingProposal;
                fromJSON(object: any): _4.MsgUpdateWasmDependencyMappingProposal;
                toJSON(message: _4.MsgUpdateWasmDependencyMappingProposal): unknown;
                fromPartial(object: Partial<_4.MsgUpdateWasmDependencyMappingProposal>): _4.MsgUpdateWasmDependencyMappingProposal;
                fromAmino(object: _4.MsgUpdateWasmDependencyMappingProposalAmino): _4.MsgUpdateWasmDependencyMappingProposal;
                toAmino(message: _4.MsgUpdateWasmDependencyMappingProposal): _4.MsgUpdateWasmDependencyMappingProposalAmino;
                fromAminoMsg(object: _4.MsgUpdateWasmDependencyMappingProposalAminoMsg): _4.MsgUpdateWasmDependencyMappingProposal;
                toAminoMsg(message: _4.MsgUpdateWasmDependencyMappingProposal): _4.MsgUpdateWasmDependencyMappingProposalAminoMsg;
                fromProtoMsg(message: _4.MsgUpdateWasmDependencyMappingProposalProtoMsg): _4.MsgUpdateWasmDependencyMappingProposal;
                toProto(message: _4.MsgUpdateWasmDependencyMappingProposal): Uint8Array;
                toProtoMsg(message: _4.MsgUpdateWasmDependencyMappingProposal): _4.MsgUpdateWasmDependencyMappingProposalProtoMsg;
            };
            MsgUpdateWasmDependencyMappingProposalJsonFile: {
                typeUrl: string;
                encode(message: _4.MsgUpdateWasmDependencyMappingProposalJsonFile, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgUpdateWasmDependencyMappingProposalJsonFile;
                fromJSON(object: any): _4.MsgUpdateWasmDependencyMappingProposalJsonFile;
                toJSON(message: _4.MsgUpdateWasmDependencyMappingProposalJsonFile): unknown;
                fromPartial(object: Partial<_4.MsgUpdateWasmDependencyMappingProposalJsonFile>): _4.MsgUpdateWasmDependencyMappingProposalJsonFile;
                fromAmino(object: _4.MsgUpdateWasmDependencyMappingProposalJsonFileAmino): _4.MsgUpdateWasmDependencyMappingProposalJsonFile;
                toAmino(message: _4.MsgUpdateWasmDependencyMappingProposalJsonFile): _4.MsgUpdateWasmDependencyMappingProposalJsonFileAmino;
                fromAminoMsg(object: _4.MsgUpdateWasmDependencyMappingProposalJsonFileAminoMsg): _4.MsgUpdateWasmDependencyMappingProposalJsonFile;
                toAminoMsg(message: _4.MsgUpdateWasmDependencyMappingProposalJsonFile): _4.MsgUpdateWasmDependencyMappingProposalJsonFileAminoMsg;
                fromProtoMsg(message: _4.MsgUpdateWasmDependencyMappingProposalJsonFileProtoMsg): _4.MsgUpdateWasmDependencyMappingProposalJsonFile;
                toProto(message: _4.MsgUpdateWasmDependencyMappingProposalJsonFile): Uint8Array;
                toProtoMsg(message: _4.MsgUpdateWasmDependencyMappingProposalJsonFile): _4.MsgUpdateWasmDependencyMappingProposalJsonFileProtoMsg;
            };
        };
    }
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _248.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _10.QueryConfigRequest): Promise<_10.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _10.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryConfigRequest;
                fromJSON(_: any): _10.QueryConfigRequest;
                toJSON(_: _10.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_10.QueryConfigRequest>): _10.QueryConfigRequest;
                fromAmino(_: _10.QueryConfigRequestAmino): _10.QueryConfigRequest;
                toAmino(_: _10.QueryConfigRequest): _10.QueryConfigRequestAmino;
                fromAminoMsg(object: _10.QueryConfigRequestAminoMsg): _10.QueryConfigRequest;
                toAminoMsg(message: _10.QueryConfigRequest): _10.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _10.QueryConfigRequestProtoMsg): _10.QueryConfigRequest;
                toProto(message: _10.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _10.QueryConfigRequest): _10.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _10.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryConfigResponse;
                fromJSON(object: any): _10.QueryConfigResponse;
                toJSON(message: _10.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_10.QueryConfigResponse>): _10.QueryConfigResponse;
                fromAmino(object: _10.QueryConfigResponseAmino): _10.QueryConfigResponse;
                toAmino(message: _10.QueryConfigResponse): _10.QueryConfigResponseAmino;
                fromAminoMsg(object: _10.QueryConfigResponseAminoMsg): _10.QueryConfigResponse;
                toAminoMsg(message: _10.QueryConfigResponse): _10.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _10.QueryConfigResponseProtoMsg): _10.QueryConfigResponse;
                toProto(message: _10.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _10.QueryConfigResponse): _10.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _9.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.ModuleDescriptor;
                fromJSON(object: any): _9.ModuleDescriptor;
                toJSON(message: _9.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_9.ModuleDescriptor>): _9.ModuleDescriptor;
                fromAmino(object: _9.ModuleDescriptorAmino): _9.ModuleDescriptor;
                toAmino(message: _9.ModuleDescriptor): _9.ModuleDescriptorAmino;
                fromAminoMsg(object: _9.ModuleDescriptorAminoMsg): _9.ModuleDescriptor;
                toAminoMsg(message: _9.ModuleDescriptor): _9.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _9.ModuleDescriptorProtoMsg): _9.ModuleDescriptor;
                toProto(message: _9.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _9.ModuleDescriptor): _9.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _9.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.PackageReference;
                fromJSON(object: any): _9.PackageReference;
                toJSON(message: _9.PackageReference): unknown;
                fromPartial(object: Partial<_9.PackageReference>): _9.PackageReference;
                fromAmino(object: _9.PackageReferenceAmino): _9.PackageReference;
                toAmino(message: _9.PackageReference): _9.PackageReferenceAmino;
                fromAminoMsg(object: _9.PackageReferenceAminoMsg): _9.PackageReference;
                toAminoMsg(message: _9.PackageReference): _9.PackageReferenceAminoMsg;
                fromProtoMsg(message: _9.PackageReferenceProtoMsg): _9.PackageReference;
                toProto(message: _9.PackageReference): Uint8Array;
                toProtoMsg(message: _9.PackageReference): _9.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _9.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MigrateFromInfo;
                fromJSON(object: any): _9.MigrateFromInfo;
                toJSON(message: _9.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_9.MigrateFromInfo>): _9.MigrateFromInfo;
                fromAmino(object: _9.MigrateFromInfoAmino): _9.MigrateFromInfo;
                toAmino(message: _9.MigrateFromInfo): _9.MigrateFromInfoAmino;
                fromAminoMsg(object: _9.MigrateFromInfoAminoMsg): _9.MigrateFromInfo;
                toAminoMsg(message: _9.MigrateFromInfo): _9.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _9.MigrateFromInfoProtoMsg): _9.MigrateFromInfo;
                toProto(message: _9.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _9.MigrateFromInfo): _9.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _8.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Config;
                fromJSON(object: any): _8.Config;
                toJSON(message: _8.Config): unknown;
                fromPartial(object: Partial<_8.Config>): _8.Config;
                fromAmino(object: _8.ConfigAmino): _8.Config;
                toAmino(message: _8.Config): _8.ConfigAmino;
                fromAminoMsg(object: _8.ConfigAminoMsg): _8.Config;
                toAminoMsg(message: _8.Config): _8.ConfigAminoMsg;
                fromProtoMsg(message: _8.ConfigProtoMsg): _8.Config;
                toProto(message: _8.Config): Uint8Array;
                toProtoMsg(message: _8.Config): _8.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _8.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.ModuleConfig;
                fromJSON(object: any): _8.ModuleConfig;
                toJSON(message: _8.ModuleConfig): unknown;
                fromPartial(object: Partial<_8.ModuleConfig>): _8.ModuleConfig;
                fromAmino(object: _8.ModuleConfigAmino): _8.ModuleConfig;
                toAmino(message: _8.ModuleConfig): _8.ModuleConfigAmino;
                fromAminoMsg(object: _8.ModuleConfigAminoMsg): _8.ModuleConfig;
                toAminoMsg(message: _8.ModuleConfig): _8.ModuleConfigAminoMsg;
                fromProtoMsg(message: _8.ModuleConfigProtoMsg): _8.ModuleConfig;
                toProto(message: _8.ModuleConfig): Uint8Array;
                toProtoMsg(message: _8.ModuleConfig): _8.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _249.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _13.QueryAccountsRequest): Promise<_13.QueryAccountsResponse>;
                account(request: _13.QueryAccountRequest): Promise<_13.QueryAccountResponse>;
                params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                nextAccountNumber(request?: _13.QueryNextAccountNumberRequest): Promise<_13.QueryNextAccountNumberResponse>;
            };
            LCDQueryClient: typeof _230.LCDQueryClient;
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _13.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAccountsRequest;
                fromJSON(object: any): _13.QueryAccountsRequest;
                toJSON(message: _13.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_13.QueryAccountsRequest>): _13.QueryAccountsRequest;
                fromAmino(object: _13.QueryAccountsRequestAmino): _13.QueryAccountsRequest;
                toAmino(message: _13.QueryAccountsRequest): _13.QueryAccountsRequestAmino;
                fromAminoMsg(object: _13.QueryAccountsRequestAminoMsg): _13.QueryAccountsRequest;
                toAminoMsg(message: _13.QueryAccountsRequest): _13.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _13.QueryAccountsRequestProtoMsg): _13.QueryAccountsRequest;
                toProto(message: _13.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryAccountsRequest): _13.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _13.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAccountsResponse;
                fromJSON(object: any): _13.QueryAccountsResponse;
                toJSON(message: _13.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_13.QueryAccountsResponse>): _13.QueryAccountsResponse;
                fromAmino(object: _13.QueryAccountsResponseAmino): _13.QueryAccountsResponse;
                toAmino(message: _13.QueryAccountsResponse): _13.QueryAccountsResponseAmino;
                fromAminoMsg(object: _13.QueryAccountsResponseAminoMsg): _13.QueryAccountsResponse;
                toAminoMsg(message: _13.QueryAccountsResponse): _13.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _13.QueryAccountsResponseProtoMsg): _13.QueryAccountsResponse;
                toProto(message: _13.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryAccountsResponse): _13.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _13.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAccountRequest;
                fromJSON(object: any): _13.QueryAccountRequest;
                toJSON(message: _13.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_13.QueryAccountRequest>): _13.QueryAccountRequest;
                fromAmino(object: _13.QueryAccountRequestAmino): _13.QueryAccountRequest;
                toAmino(message: _13.QueryAccountRequest): _13.QueryAccountRequestAmino;
                fromAminoMsg(object: _13.QueryAccountRequestAminoMsg): _13.QueryAccountRequest;
                toAminoMsg(message: _13.QueryAccountRequest): _13.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _13.QueryAccountRequestProtoMsg): _13.QueryAccountRequest;
                toProto(message: _13.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _13.QueryAccountRequest): _13.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _13.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAccountResponse;
                fromJSON(object: any): _13.QueryAccountResponse;
                toJSON(message: _13.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_13.QueryAccountResponse>): _13.QueryAccountResponse;
                fromAmino(object: _13.QueryAccountResponseAmino): _13.QueryAccountResponse;
                toAmino(message: _13.QueryAccountResponse): _13.QueryAccountResponseAmino;
                fromAminoMsg(object: _13.QueryAccountResponseAminoMsg): _13.QueryAccountResponse;
                toAminoMsg(message: _13.QueryAccountResponse): _13.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _13.QueryAccountResponseProtoMsg): _13.QueryAccountResponse;
                toProto(message: _13.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _13.QueryAccountResponse): _13.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _13.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryParamsRequest;
                fromJSON(_: any): _13.QueryParamsRequest;
                toJSON(_: _13.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_13.QueryParamsRequest>): _13.QueryParamsRequest;
                fromAmino(_: _13.QueryParamsRequestAmino): _13.QueryParamsRequest;
                toAmino(_: _13.QueryParamsRequest): _13.QueryParamsRequestAmino;
                fromAminoMsg(object: _13.QueryParamsRequestAminoMsg): _13.QueryParamsRequest;
                toAminoMsg(message: _13.QueryParamsRequest): _13.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _13.QueryParamsRequestProtoMsg): _13.QueryParamsRequest;
                toProto(message: _13.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _13.QueryParamsRequest): _13.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _13.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryParamsResponse;
                fromJSON(object: any): _13.QueryParamsResponse;
                toJSON(message: _13.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_13.QueryParamsResponse>): _13.QueryParamsResponse;
                fromAmino(object: _13.QueryParamsResponseAmino): _13.QueryParamsResponse;
                toAmino(message: _13.QueryParamsResponse): _13.QueryParamsResponseAmino;
                fromAminoMsg(object: _13.QueryParamsResponseAminoMsg): _13.QueryParamsResponse;
                toAminoMsg(message: _13.QueryParamsResponse): _13.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _13.QueryParamsResponseProtoMsg): _13.QueryParamsResponse;
                toProto(message: _13.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _13.QueryParamsResponse): _13.QueryParamsResponseProtoMsg;
            };
            QueryNextAccountNumberRequest: {
                typeUrl: string;
                encode(_: _13.QueryNextAccountNumberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryNextAccountNumberRequest;
                fromJSON(_: any): _13.QueryNextAccountNumberRequest;
                toJSON(_: _13.QueryNextAccountNumberRequest): unknown;
                fromPartial(_: Partial<_13.QueryNextAccountNumberRequest>): _13.QueryNextAccountNumberRequest;
                fromAmino(_: _13.QueryNextAccountNumberRequestAmino): _13.QueryNextAccountNumberRequest;
                toAmino(_: _13.QueryNextAccountNumberRequest): _13.QueryNextAccountNumberRequestAmino;
                fromAminoMsg(object: _13.QueryNextAccountNumberRequestAminoMsg): _13.QueryNextAccountNumberRequest;
                toAminoMsg(message: _13.QueryNextAccountNumberRequest): _13.QueryNextAccountNumberRequestAminoMsg;
                fromProtoMsg(message: _13.QueryNextAccountNumberRequestProtoMsg): _13.QueryNextAccountNumberRequest;
                toProto(message: _13.QueryNextAccountNumberRequest): Uint8Array;
                toProtoMsg(message: _13.QueryNextAccountNumberRequest): _13.QueryNextAccountNumberRequestProtoMsg;
            };
            QueryNextAccountNumberResponse: {
                typeUrl: string;
                encode(message: _13.QueryNextAccountNumberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryNextAccountNumberResponse;
                fromJSON(object: any): _13.QueryNextAccountNumberResponse;
                toJSON(message: _13.QueryNextAccountNumberResponse): unknown;
                fromPartial(object: Partial<_13.QueryNextAccountNumberResponse>): _13.QueryNextAccountNumberResponse;
                fromAmino(object: _13.QueryNextAccountNumberResponseAmino): _13.QueryNextAccountNumberResponse;
                toAmino(message: _13.QueryNextAccountNumberResponse): _13.QueryNextAccountNumberResponseAmino;
                fromAminoMsg(object: _13.QueryNextAccountNumberResponseAminoMsg): _13.QueryNextAccountNumberResponse;
                toAminoMsg(message: _13.QueryNextAccountNumberResponse): _13.QueryNextAccountNumberResponseAminoMsg;
                fromProtoMsg(message: _13.QueryNextAccountNumberResponseProtoMsg): _13.QueryNextAccountNumberResponse;
                toProto(message: _13.QueryNextAccountNumberResponse): Uint8Array;
                toProtoMsg(message: _13.QueryNextAccountNumberResponse): _13.QueryNextAccountNumberResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _12.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GenesisState;
                fromJSON(object: any): _12.GenesisState;
                toJSON(message: _12.GenesisState): unknown;
                fromPartial(object: Partial<_12.GenesisState>): _12.GenesisState;
                fromAmino(object: _12.GenesisStateAmino): _12.GenesisState;
                toAmino(message: _12.GenesisState): _12.GenesisStateAmino;
                fromAminoMsg(object: _12.GenesisStateAminoMsg): _12.GenesisState;
                toAminoMsg(message: _12.GenesisState): _12.GenesisStateAminoMsg;
                fromProtoMsg(message: _12.GenesisStateProtoMsg): _12.GenesisState;
                toProto(message: _12.GenesisState): Uint8Array;
                toProtoMsg(message: _12.GenesisState): _12.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _11.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.BaseAccount;
                fromJSON(object: any): _11.BaseAccount;
                toJSON(message: _11.BaseAccount): unknown;
                fromPartial(object: Partial<_11.BaseAccount>): _11.BaseAccount;
                fromAmino(object: _11.BaseAccountAmino): _11.BaseAccount;
                toAmino(message: _11.BaseAccount): _11.BaseAccountAmino;
                fromAminoMsg(object: _11.BaseAccountAminoMsg): _11.BaseAccount;
                toAminoMsg(message: _11.BaseAccount): _11.BaseAccountAminoMsg;
                fromProtoMsg(message: _11.BaseAccountProtoMsg): _11.BaseAccount;
                toProto(message: _11.BaseAccount): Uint8Array;
                toProtoMsg(message: _11.BaseAccount): _11.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _11.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.ModuleAccount;
                fromJSON(object: any): _11.ModuleAccount;
                toJSON(message: _11.ModuleAccount): unknown;
                fromPartial(object: Partial<_11.ModuleAccount>): _11.ModuleAccount;
                fromAmino(object: _11.ModuleAccountAmino): _11.ModuleAccount;
                toAmino(message: _11.ModuleAccount): _11.ModuleAccountAmino;
                fromAminoMsg(object: _11.ModuleAccountAminoMsg): _11.ModuleAccount;
                toAminoMsg(message: _11.ModuleAccount): _11.ModuleAccountAminoMsg;
                fromProtoMsg(message: _11.ModuleAccountProtoMsg): _11.ModuleAccount;
                toProto(message: _11.ModuleAccount): Uint8Array;
                toProtoMsg(message: _11.ModuleAccount): _11.ModuleAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _11.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Params;
                fromJSON(object: any): _11.Params;
                toJSON(message: _11.Params): unknown;
                fromPartial(object: Partial<_11.Params>): _11.Params;
                fromAmino(object: _11.ParamsAmino): _11.Params;
                toAmino(message: _11.Params): _11.ParamsAmino;
                fromAminoMsg(object: _11.ParamsAminoMsg): _11.Params;
                toAminoMsg(message: _11.Params): _11.ParamsAminoMsg;
                fromProtoMsg(message: _11.ParamsProtoMsg): _11.Params;
                toProto(message: _11.Params): Uint8Array;
                toProtoMsg(message: _11.Params): _11.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _267.MsgClientImpl;
            QueryClientImpl: typeof _250.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _17.QueryGrantsRequest): Promise<_17.QueryGrantsResponse>;
                granterGrants(request: _17.QueryGranterGrantsRequest): Promise<_17.QueryGranterGrantsResponse>;
                granteeGrants(request: _17.QueryGranteeGrantsRequest): Promise<_17.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _231.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _18.MsgGrant) => _18.MsgGrantAmino;
                    fromAmino: (object: _18.MsgGrantAmino) => _18.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _18.MsgExec) => _18.MsgExecAmino;
                    fromAmino: (object: _18.MsgExecAmino) => _18.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _18.MsgRevoke) => _18.MsgRevokeAmino;
                    fromAmino: (object: _18.MsgRevokeAmino) => _18.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _18.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgGrant;
                fromJSON(object: any): _18.MsgGrant;
                toJSON(message: _18.MsgGrant): unknown;
                fromPartial(object: Partial<_18.MsgGrant>): _18.MsgGrant;
                fromAmino(object: _18.MsgGrantAmino): _18.MsgGrant;
                toAmino(message: _18.MsgGrant): _18.MsgGrantAmino;
                fromAminoMsg(object: _18.MsgGrantAminoMsg): _18.MsgGrant;
                toAminoMsg(message: _18.MsgGrant): _18.MsgGrantAminoMsg;
                fromProtoMsg(message: _18.MsgGrantProtoMsg): _18.MsgGrant;
                toProto(message: _18.MsgGrant): Uint8Array;
                toProtoMsg(message: _18.MsgGrant): _18.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _18.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgExecResponse;
                fromJSON(object: any): _18.MsgExecResponse;
                toJSON(message: _18.MsgExecResponse): unknown;
                fromPartial(object: Partial<_18.MsgExecResponse>): _18.MsgExecResponse;
                fromAmino(object: _18.MsgExecResponseAmino): _18.MsgExecResponse;
                toAmino(message: _18.MsgExecResponse): _18.MsgExecResponseAmino;
                fromAminoMsg(object: _18.MsgExecResponseAminoMsg): _18.MsgExecResponse;
                toAminoMsg(message: _18.MsgExecResponse): _18.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _18.MsgExecResponseProtoMsg): _18.MsgExecResponse;
                toProto(message: _18.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _18.MsgExecResponse): _18.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _18.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgExec;
                fromJSON(object: any): _18.MsgExec;
                toJSON(message: _18.MsgExec): unknown;
                fromPartial(object: Partial<_18.MsgExec>): _18.MsgExec;
                fromAmino(object: _18.MsgExecAmino): _18.MsgExec;
                toAmino(message: _18.MsgExec): _18.MsgExecAmino;
                fromAminoMsg(object: _18.MsgExecAminoMsg): _18.MsgExec;
                toAminoMsg(message: _18.MsgExec): _18.MsgExecAminoMsg;
                fromProtoMsg(message: _18.MsgExecProtoMsg): _18.MsgExec;
                toProto(message: _18.MsgExec): Uint8Array;
                toProtoMsg(message: _18.MsgExec): _18.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _18.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgGrantResponse;
                fromJSON(_: any): _18.MsgGrantResponse;
                toJSON(_: _18.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_18.MsgGrantResponse>): _18.MsgGrantResponse;
                fromAmino(_: _18.MsgGrantResponseAmino): _18.MsgGrantResponse;
                toAmino(_: _18.MsgGrantResponse): _18.MsgGrantResponseAmino;
                fromAminoMsg(object: _18.MsgGrantResponseAminoMsg): _18.MsgGrantResponse;
                toAminoMsg(message: _18.MsgGrantResponse): _18.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _18.MsgGrantResponseProtoMsg): _18.MsgGrantResponse;
                toProto(message: _18.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _18.MsgGrantResponse): _18.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _18.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgRevoke;
                fromJSON(object: any): _18.MsgRevoke;
                toJSON(message: _18.MsgRevoke): unknown;
                fromPartial(object: Partial<_18.MsgRevoke>): _18.MsgRevoke;
                fromAmino(object: _18.MsgRevokeAmino): _18.MsgRevoke;
                toAmino(message: _18.MsgRevoke): _18.MsgRevokeAmino;
                fromAminoMsg(object: _18.MsgRevokeAminoMsg): _18.MsgRevoke;
                toAminoMsg(message: _18.MsgRevoke): _18.MsgRevokeAminoMsg;
                fromProtoMsg(message: _18.MsgRevokeProtoMsg): _18.MsgRevoke;
                toProto(message: _18.MsgRevoke): Uint8Array;
                toProtoMsg(message: _18.MsgRevoke): _18.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _18.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgRevokeResponse;
                fromJSON(_: any): _18.MsgRevokeResponse;
                toJSON(_: _18.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_18.MsgRevokeResponse>): _18.MsgRevokeResponse;
                fromAmino(_: _18.MsgRevokeResponseAmino): _18.MsgRevokeResponse;
                toAmino(_: _18.MsgRevokeResponse): _18.MsgRevokeResponseAmino;
                fromAminoMsg(object: _18.MsgRevokeResponseAminoMsg): _18.MsgRevokeResponse;
                toAminoMsg(message: _18.MsgRevokeResponse): _18.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _18.MsgRevokeResponseProtoMsg): _18.MsgRevokeResponse;
                toProto(message: _18.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _18.MsgRevokeResponse): _18.MsgRevokeResponseProtoMsg;
            };
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _17.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGrantsRequest;
                fromJSON(object: any): _17.QueryGrantsRequest;
                toJSON(message: _17.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_17.QueryGrantsRequest>): _17.QueryGrantsRequest;
                fromAmino(object: _17.QueryGrantsRequestAmino): _17.QueryGrantsRequest;
                toAmino(message: _17.QueryGrantsRequest): _17.QueryGrantsRequestAmino;
                fromAminoMsg(object: _17.QueryGrantsRequestAminoMsg): _17.QueryGrantsRequest;
                toAminoMsg(message: _17.QueryGrantsRequest): _17.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _17.QueryGrantsRequestProtoMsg): _17.QueryGrantsRequest;
                toProto(message: _17.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryGrantsRequest): _17.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _17.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGrantsResponse;
                fromJSON(object: any): _17.QueryGrantsResponse;
                toJSON(message: _17.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_17.QueryGrantsResponse>): _17.QueryGrantsResponse;
                fromAmino(object: _17.QueryGrantsResponseAmino): _17.QueryGrantsResponse;
                toAmino(message: _17.QueryGrantsResponse): _17.QueryGrantsResponseAmino;
                fromAminoMsg(object: _17.QueryGrantsResponseAminoMsg): _17.QueryGrantsResponse;
                toAminoMsg(message: _17.QueryGrantsResponse): _17.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _17.QueryGrantsResponseProtoMsg): _17.QueryGrantsResponse;
                toProto(message: _17.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryGrantsResponse): _17.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _17.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGranterGrantsRequest;
                fromJSON(object: any): _17.QueryGranterGrantsRequest;
                toJSON(message: _17.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_17.QueryGranterGrantsRequest>): _17.QueryGranterGrantsRequest;
                fromAmino(object: _17.QueryGranterGrantsRequestAmino): _17.QueryGranterGrantsRequest;
                toAmino(message: _17.QueryGranterGrantsRequest): _17.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _17.QueryGranterGrantsRequestAminoMsg): _17.QueryGranterGrantsRequest;
                toAminoMsg(message: _17.QueryGranterGrantsRequest): _17.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _17.QueryGranterGrantsRequestProtoMsg): _17.QueryGranterGrantsRequest;
                toProto(message: _17.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryGranterGrantsRequest): _17.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _17.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGranterGrantsResponse;
                fromJSON(object: any): _17.QueryGranterGrantsResponse;
                toJSON(message: _17.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_17.QueryGranterGrantsResponse>): _17.QueryGranterGrantsResponse;
                fromAmino(object: _17.QueryGranterGrantsResponseAmino): _17.QueryGranterGrantsResponse;
                toAmino(message: _17.QueryGranterGrantsResponse): _17.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _17.QueryGranterGrantsResponseAminoMsg): _17.QueryGranterGrantsResponse;
                toAminoMsg(message: _17.QueryGranterGrantsResponse): _17.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _17.QueryGranterGrantsResponseProtoMsg): _17.QueryGranterGrantsResponse;
                toProto(message: _17.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryGranterGrantsResponse): _17.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _17.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGranteeGrantsRequest;
                fromJSON(object: any): _17.QueryGranteeGrantsRequest;
                toJSON(message: _17.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_17.QueryGranteeGrantsRequest>): _17.QueryGranteeGrantsRequest;
                fromAmino(object: _17.QueryGranteeGrantsRequestAmino): _17.QueryGranteeGrantsRequest;
                toAmino(message: _17.QueryGranteeGrantsRequest): _17.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _17.QueryGranteeGrantsRequestAminoMsg): _17.QueryGranteeGrantsRequest;
                toAminoMsg(message: _17.QueryGranteeGrantsRequest): _17.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _17.QueryGranteeGrantsRequestProtoMsg): _17.QueryGranteeGrantsRequest;
                toProto(message: _17.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _17.QueryGranteeGrantsRequest): _17.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _17.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGranteeGrantsResponse;
                fromJSON(object: any): _17.QueryGranteeGrantsResponse;
                toJSON(message: _17.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_17.QueryGranteeGrantsResponse>): _17.QueryGranteeGrantsResponse;
                fromAmino(object: _17.QueryGranteeGrantsResponseAmino): _17.QueryGranteeGrantsResponse;
                toAmino(message: _17.QueryGranteeGrantsResponse): _17.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _17.QueryGranteeGrantsResponseAminoMsg): _17.QueryGranteeGrantsResponse;
                toAminoMsg(message: _17.QueryGranteeGrantsResponse): _17.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _17.QueryGranteeGrantsResponseProtoMsg): _17.QueryGranteeGrantsResponse;
                toProto(message: _17.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _17.QueryGranteeGrantsResponse): _17.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.GenesisState;
                fromJSON(object: any): _16.GenesisState;
                toJSON(message: _16.GenesisState): unknown;
                fromPartial(object: Partial<_16.GenesisState>): _16.GenesisState;
                fromAmino(object: _16.GenesisStateAmino): _16.GenesisState;
                toAmino(message: _16.GenesisState): _16.GenesisStateAmino;
                fromAminoMsg(object: _16.GenesisStateAminoMsg): _16.GenesisState;
                toAminoMsg(message: _16.GenesisState): _16.GenesisStateAminoMsg;
                fromProtoMsg(message: _16.GenesisStateProtoMsg): _16.GenesisState;
                toProto(message: _16.GenesisState): Uint8Array;
                toProtoMsg(message: _16.GenesisState): _16.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _15.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.EventGrant;
                fromJSON(object: any): _15.EventGrant;
                toJSON(message: _15.EventGrant): unknown;
                fromPartial(object: Partial<_15.EventGrant>): _15.EventGrant;
                fromAmino(object: _15.EventGrantAmino): _15.EventGrant;
                toAmino(message: _15.EventGrant): _15.EventGrantAmino;
                fromAminoMsg(object: _15.EventGrantAminoMsg): _15.EventGrant;
                toAminoMsg(message: _15.EventGrant): _15.EventGrantAminoMsg;
                fromProtoMsg(message: _15.EventGrantProtoMsg): _15.EventGrant;
                toProto(message: _15.EventGrant): Uint8Array;
                toProtoMsg(message: _15.EventGrant): _15.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _15.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.EventRevoke;
                fromJSON(object: any): _15.EventRevoke;
                toJSON(message: _15.EventRevoke): unknown;
                fromPartial(object: Partial<_15.EventRevoke>): _15.EventRevoke;
                fromAmino(object: _15.EventRevokeAmino): _15.EventRevoke;
                toAmino(message: _15.EventRevoke): _15.EventRevokeAmino;
                fromAminoMsg(object: _15.EventRevokeAminoMsg): _15.EventRevoke;
                toAminoMsg(message: _15.EventRevoke): _15.EventRevokeAminoMsg;
                fromProtoMsg(message: _15.EventRevokeProtoMsg): _15.EventRevoke;
                toProto(message: _15.EventRevoke): Uint8Array;
                toProtoMsg(message: _15.EventRevoke): _15.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _14.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GenericAuthorization;
                fromJSON(object: any): _14.GenericAuthorization;
                toJSON(message: _14.GenericAuthorization): unknown;
                fromPartial(object: Partial<_14.GenericAuthorization>): _14.GenericAuthorization;
                fromAmino(object: _14.GenericAuthorizationAmino): _14.GenericAuthorization;
                toAmino(message: _14.GenericAuthorization): _14.GenericAuthorizationAmino;
                fromAminoMsg(object: _14.GenericAuthorizationAminoMsg): _14.GenericAuthorization;
                toAminoMsg(message: _14.GenericAuthorization): _14.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _14.GenericAuthorizationProtoMsg): _14.GenericAuthorization;
                toProto(message: _14.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _14.GenericAuthorization): _14.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _14.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Grant;
                fromJSON(object: any): _14.Grant;
                toJSON(message: _14.Grant): unknown;
                fromPartial(object: Partial<_14.Grant>): _14.Grant;
                fromAmino(object: _14.GrantAmino): _14.Grant;
                toAmino(message: _14.Grant): _14.GrantAmino;
                fromAminoMsg(object: _14.GrantAminoMsg): _14.Grant;
                toAminoMsg(message: _14.Grant): _14.GrantAminoMsg;
                fromProtoMsg(message: _14.GrantProtoMsg): _14.Grant;
                toProto(message: _14.Grant): Uint8Array;
                toProtoMsg(message: _14.Grant): _14.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _14.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GrantAuthorization;
                fromJSON(object: any): _14.GrantAuthorization;
                toJSON(message: _14.GrantAuthorization): unknown;
                fromPartial(object: Partial<_14.GrantAuthorization>): _14.GrantAuthorization;
                fromAmino(object: _14.GrantAuthorizationAmino): _14.GrantAuthorization;
                toAmino(message: _14.GrantAuthorization): _14.GrantAuthorizationAmino;
                fromAminoMsg(object: _14.GrantAuthorizationAminoMsg): _14.GrantAuthorization;
                toAminoMsg(message: _14.GrantAuthorization): _14.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _14.GrantAuthorizationProtoMsg): _14.GrantAuthorization;
                toProto(message: _14.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _14.GrantAuthorization): _14.GrantAuthorizationProtoMsg;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _268.MsgClientImpl;
            QueryClientImpl: typeof _251.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _22.QueryBalanceRequest): Promise<_22.QueryBalanceResponse>;
                allBalances(request: _22.QueryAllBalancesRequest): Promise<_22.QueryAllBalancesResponse>;
                spendableBalances(request: _22.QuerySpendableBalancesRequest): Promise<_22.QuerySpendableBalancesResponse>;
                totalSupply(request?: _22.QueryTotalSupplyRequest): Promise<_22.QueryTotalSupplyResponse>;
                supplyOf(request: _22.QuerySupplyOfRequest): Promise<_22.QuerySupplyOfResponse>;
                params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
                denomMetadata(request: _22.QueryDenomMetadataRequest): Promise<_22.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _22.QueryDenomsMetadataRequest): Promise<_22.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _232.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _23.MsgSend) => _23.MsgSendAmino;
                    fromAmino: (object: _23.MsgSendAmino) => _23.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _23.MsgMultiSend) => _23.MsgMultiSendAmino;
                    fromAmino: (object: _23.MsgMultiSendAmino) => _23.MsgMultiSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _23.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgSend;
                fromJSON(object: any): _23.MsgSend;
                toJSON(message: _23.MsgSend): unknown;
                fromPartial(object: Partial<_23.MsgSend>): _23.MsgSend;
                fromAmino(object: _23.MsgSendAmino): _23.MsgSend;
                toAmino(message: _23.MsgSend): _23.MsgSendAmino;
                fromAminoMsg(object: _23.MsgSendAminoMsg): _23.MsgSend;
                toAminoMsg(message: _23.MsgSend): _23.MsgSendAminoMsg;
                fromProtoMsg(message: _23.MsgSendProtoMsg): _23.MsgSend;
                toProto(message: _23.MsgSend): Uint8Array;
                toProtoMsg(message: _23.MsgSend): _23.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _23.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgSendResponse;
                fromJSON(_: any): _23.MsgSendResponse;
                toJSON(_: _23.MsgSendResponse): unknown;
                fromPartial(_: Partial<_23.MsgSendResponse>): _23.MsgSendResponse;
                fromAmino(_: _23.MsgSendResponseAmino): _23.MsgSendResponse;
                toAmino(_: _23.MsgSendResponse): _23.MsgSendResponseAmino;
                fromAminoMsg(object: _23.MsgSendResponseAminoMsg): _23.MsgSendResponse;
                toAminoMsg(message: _23.MsgSendResponse): _23.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _23.MsgSendResponseProtoMsg): _23.MsgSendResponse;
                toProto(message: _23.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _23.MsgSendResponse): _23.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _23.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgMultiSend;
                fromJSON(object: any): _23.MsgMultiSend;
                toJSON(message: _23.MsgMultiSend): unknown;
                fromPartial(object: Partial<_23.MsgMultiSend>): _23.MsgMultiSend;
                fromAmino(object: _23.MsgMultiSendAmino): _23.MsgMultiSend;
                toAmino(message: _23.MsgMultiSend): _23.MsgMultiSendAmino;
                fromAminoMsg(object: _23.MsgMultiSendAminoMsg): _23.MsgMultiSend;
                toAminoMsg(message: _23.MsgMultiSend): _23.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _23.MsgMultiSendProtoMsg): _23.MsgMultiSend;
                toProto(message: _23.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _23.MsgMultiSend): _23.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _23.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgMultiSendResponse;
                fromJSON(_: any): _23.MsgMultiSendResponse;
                toJSON(_: _23.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_23.MsgMultiSendResponse>): _23.MsgMultiSendResponse;
                fromAmino(_: _23.MsgMultiSendResponseAmino): _23.MsgMultiSendResponse;
                toAmino(_: _23.MsgMultiSendResponse): _23.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _23.MsgMultiSendResponseAminoMsg): _23.MsgMultiSendResponse;
                toAminoMsg(message: _23.MsgMultiSendResponse): _23.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _23.MsgMultiSendResponseProtoMsg): _23.MsgMultiSendResponse;
                toProto(message: _23.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _23.MsgMultiSendResponse): _23.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _22.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryBalanceRequest;
                fromJSON(object: any): _22.QueryBalanceRequest;
                toJSON(message: _22.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_22.QueryBalanceRequest>): _22.QueryBalanceRequest;
                fromAmino(object: _22.QueryBalanceRequestAmino): _22.QueryBalanceRequest;
                toAmino(message: _22.QueryBalanceRequest): _22.QueryBalanceRequestAmino;
                fromAminoMsg(object: _22.QueryBalanceRequestAminoMsg): _22.QueryBalanceRequest;
                toAminoMsg(message: _22.QueryBalanceRequest): _22.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _22.QueryBalanceRequestProtoMsg): _22.QueryBalanceRequest;
                toProto(message: _22.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _22.QueryBalanceRequest): _22.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _22.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryBalanceResponse;
                fromJSON(object: any): _22.QueryBalanceResponse;
                toJSON(message: _22.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_22.QueryBalanceResponse>): _22.QueryBalanceResponse;
                fromAmino(object: _22.QueryBalanceResponseAmino): _22.QueryBalanceResponse;
                toAmino(message: _22.QueryBalanceResponse): _22.QueryBalanceResponseAmino;
                fromAminoMsg(object: _22.QueryBalanceResponseAminoMsg): _22.QueryBalanceResponse;
                toAminoMsg(message: _22.QueryBalanceResponse): _22.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _22.QueryBalanceResponseProtoMsg): _22.QueryBalanceResponse;
                toProto(message: _22.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _22.QueryBalanceResponse): _22.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _22.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryAllBalancesRequest;
                fromJSON(object: any): _22.QueryAllBalancesRequest;
                toJSON(message: _22.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_22.QueryAllBalancesRequest>): _22.QueryAllBalancesRequest;
                fromAmino(object: _22.QueryAllBalancesRequestAmino): _22.QueryAllBalancesRequest;
                toAmino(message: _22.QueryAllBalancesRequest): _22.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _22.QueryAllBalancesRequestAminoMsg): _22.QueryAllBalancesRequest;
                toAminoMsg(message: _22.QueryAllBalancesRequest): _22.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _22.QueryAllBalancesRequestProtoMsg): _22.QueryAllBalancesRequest;
                toProto(message: _22.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _22.QueryAllBalancesRequest): _22.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _22.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryAllBalancesResponse;
                fromJSON(object: any): _22.QueryAllBalancesResponse;
                toJSON(message: _22.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_22.QueryAllBalancesResponse>): _22.QueryAllBalancesResponse;
                fromAmino(object: _22.QueryAllBalancesResponseAmino): _22.QueryAllBalancesResponse;
                toAmino(message: _22.QueryAllBalancesResponse): _22.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _22.QueryAllBalancesResponseAminoMsg): _22.QueryAllBalancesResponse;
                toAminoMsg(message: _22.QueryAllBalancesResponse): _22.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _22.QueryAllBalancesResponseProtoMsg): _22.QueryAllBalancesResponse;
                toProto(message: _22.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _22.QueryAllBalancesResponse): _22.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _22.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QuerySpendableBalancesRequest;
                fromJSON(object: any): _22.QuerySpendableBalancesRequest;
                toJSON(message: _22.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_22.QuerySpendableBalancesRequest>): _22.QuerySpendableBalancesRequest;
                fromAmino(object: _22.QuerySpendableBalancesRequestAmino): _22.QuerySpendableBalancesRequest;
                toAmino(message: _22.QuerySpendableBalancesRequest): _22.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _22.QuerySpendableBalancesRequestAminoMsg): _22.QuerySpendableBalancesRequest;
                toAminoMsg(message: _22.QuerySpendableBalancesRequest): _22.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _22.QuerySpendableBalancesRequestProtoMsg): _22.QuerySpendableBalancesRequest;
                toProto(message: _22.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _22.QuerySpendableBalancesRequest): _22.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _22.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QuerySpendableBalancesResponse;
                fromJSON(object: any): _22.QuerySpendableBalancesResponse;
                toJSON(message: _22.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_22.QuerySpendableBalancesResponse>): _22.QuerySpendableBalancesResponse;
                fromAmino(object: _22.QuerySpendableBalancesResponseAmino): _22.QuerySpendableBalancesResponse;
                toAmino(message: _22.QuerySpendableBalancesResponse): _22.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _22.QuerySpendableBalancesResponseAminoMsg): _22.QuerySpendableBalancesResponse;
                toAminoMsg(message: _22.QuerySpendableBalancesResponse): _22.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _22.QuerySpendableBalancesResponseProtoMsg): _22.QuerySpendableBalancesResponse;
                toProto(message: _22.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _22.QuerySpendableBalancesResponse): _22.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _22.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryTotalSupplyRequest;
                fromJSON(object: any): _22.QueryTotalSupplyRequest;
                toJSON(message: _22.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_22.QueryTotalSupplyRequest>): _22.QueryTotalSupplyRequest;
                fromAmino(object: _22.QueryTotalSupplyRequestAmino): _22.QueryTotalSupplyRequest;
                toAmino(message: _22.QueryTotalSupplyRequest): _22.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _22.QueryTotalSupplyRequestAminoMsg): _22.QueryTotalSupplyRequest;
                toAminoMsg(message: _22.QueryTotalSupplyRequest): _22.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _22.QueryTotalSupplyRequestProtoMsg): _22.QueryTotalSupplyRequest;
                toProto(message: _22.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _22.QueryTotalSupplyRequest): _22.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _22.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryTotalSupplyResponse;
                fromJSON(object: any): _22.QueryTotalSupplyResponse;
                toJSON(message: _22.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_22.QueryTotalSupplyResponse>): _22.QueryTotalSupplyResponse;
                fromAmino(object: _22.QueryTotalSupplyResponseAmino): _22.QueryTotalSupplyResponse;
                toAmino(message: _22.QueryTotalSupplyResponse): _22.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _22.QueryTotalSupplyResponseAminoMsg): _22.QueryTotalSupplyResponse;
                toAminoMsg(message: _22.QueryTotalSupplyResponse): _22.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _22.QueryTotalSupplyResponseProtoMsg): _22.QueryTotalSupplyResponse;
                toProto(message: _22.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _22.QueryTotalSupplyResponse): _22.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _22.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QuerySupplyOfRequest;
                fromJSON(object: any): _22.QuerySupplyOfRequest;
                toJSON(message: _22.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_22.QuerySupplyOfRequest>): _22.QuerySupplyOfRequest;
                fromAmino(object: _22.QuerySupplyOfRequestAmino): _22.QuerySupplyOfRequest;
                toAmino(message: _22.QuerySupplyOfRequest): _22.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _22.QuerySupplyOfRequestAminoMsg): _22.QuerySupplyOfRequest;
                toAminoMsg(message: _22.QuerySupplyOfRequest): _22.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _22.QuerySupplyOfRequestProtoMsg): _22.QuerySupplyOfRequest;
                toProto(message: _22.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _22.QuerySupplyOfRequest): _22.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _22.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QuerySupplyOfResponse;
                fromJSON(object: any): _22.QuerySupplyOfResponse;
                toJSON(message: _22.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_22.QuerySupplyOfResponse>): _22.QuerySupplyOfResponse;
                fromAmino(object: _22.QuerySupplyOfResponseAmino): _22.QuerySupplyOfResponse;
                toAmino(message: _22.QuerySupplyOfResponse): _22.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _22.QuerySupplyOfResponseAminoMsg): _22.QuerySupplyOfResponse;
                toAminoMsg(message: _22.QuerySupplyOfResponse): _22.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _22.QuerySupplyOfResponseProtoMsg): _22.QuerySupplyOfResponse;
                toProto(message: _22.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _22.QuerySupplyOfResponse): _22.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _22.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryParamsRequest;
                fromJSON(_: any): _22.QueryParamsRequest;
                toJSON(_: _22.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_22.QueryParamsRequest>): _22.QueryParamsRequest;
                fromAmino(_: _22.QueryParamsRequestAmino): _22.QueryParamsRequest;
                toAmino(_: _22.QueryParamsRequest): _22.QueryParamsRequestAmino;
                fromAminoMsg(object: _22.QueryParamsRequestAminoMsg): _22.QueryParamsRequest;
                toAminoMsg(message: _22.QueryParamsRequest): _22.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _22.QueryParamsRequestProtoMsg): _22.QueryParamsRequest;
                toProto(message: _22.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _22.QueryParamsRequest): _22.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _22.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryParamsResponse;
                fromJSON(object: any): _22.QueryParamsResponse;
                toJSON(message: _22.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_22.QueryParamsResponse>): _22.QueryParamsResponse;
                fromAmino(object: _22.QueryParamsResponseAmino): _22.QueryParamsResponse;
                toAmino(message: _22.QueryParamsResponse): _22.QueryParamsResponseAmino;
                fromAminoMsg(object: _22.QueryParamsResponseAminoMsg): _22.QueryParamsResponse;
                toAminoMsg(message: _22.QueryParamsResponse): _22.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _22.QueryParamsResponseProtoMsg): _22.QueryParamsResponse;
                toProto(message: _22.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _22.QueryParamsResponse): _22.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _22.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDenomsMetadataRequest;
                fromJSON(object: any): _22.QueryDenomsMetadataRequest;
                toJSON(message: _22.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_22.QueryDenomsMetadataRequest>): _22.QueryDenomsMetadataRequest;
                fromAmino(object: _22.QueryDenomsMetadataRequestAmino): _22.QueryDenomsMetadataRequest;
                toAmino(message: _22.QueryDenomsMetadataRequest): _22.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _22.QueryDenomsMetadataRequestAminoMsg): _22.QueryDenomsMetadataRequest;
                toAminoMsg(message: _22.QueryDenomsMetadataRequest): _22.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _22.QueryDenomsMetadataRequestProtoMsg): _22.QueryDenomsMetadataRequest;
                toProto(message: _22.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _22.QueryDenomsMetadataRequest): _22.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _22.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDenomsMetadataResponse;
                fromJSON(object: any): _22.QueryDenomsMetadataResponse;
                toJSON(message: _22.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_22.QueryDenomsMetadataResponse>): _22.QueryDenomsMetadataResponse;
                fromAmino(object: _22.QueryDenomsMetadataResponseAmino): _22.QueryDenomsMetadataResponse;
                toAmino(message: _22.QueryDenomsMetadataResponse): _22.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _22.QueryDenomsMetadataResponseAminoMsg): _22.QueryDenomsMetadataResponse;
                toAminoMsg(message: _22.QueryDenomsMetadataResponse): _22.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _22.QueryDenomsMetadataResponseProtoMsg): _22.QueryDenomsMetadataResponse;
                toProto(message: _22.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _22.QueryDenomsMetadataResponse): _22.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _22.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDenomMetadataRequest;
                fromJSON(object: any): _22.QueryDenomMetadataRequest;
                toJSON(message: _22.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_22.QueryDenomMetadataRequest>): _22.QueryDenomMetadataRequest;
                fromAmino(object: _22.QueryDenomMetadataRequestAmino): _22.QueryDenomMetadataRequest;
                toAmino(message: _22.QueryDenomMetadataRequest): _22.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _22.QueryDenomMetadataRequestAminoMsg): _22.QueryDenomMetadataRequest;
                toAminoMsg(message: _22.QueryDenomMetadataRequest): _22.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _22.QueryDenomMetadataRequestProtoMsg): _22.QueryDenomMetadataRequest;
                toProto(message: _22.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _22.QueryDenomMetadataRequest): _22.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _22.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDenomMetadataResponse;
                fromJSON(object: any): _22.QueryDenomMetadataResponse;
                toJSON(message: _22.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_22.QueryDenomMetadataResponse>): _22.QueryDenomMetadataResponse;
                fromAmino(object: _22.QueryDenomMetadataResponseAmino): _22.QueryDenomMetadataResponse;
                toAmino(message: _22.QueryDenomMetadataResponse): _22.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _22.QueryDenomMetadataResponseAminoMsg): _22.QueryDenomMetadataResponse;
                toAminoMsg(message: _22.QueryDenomMetadataResponse): _22.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _22.QueryDenomMetadataResponseProtoMsg): _22.QueryDenomMetadataResponse;
                toProto(message: _22.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _22.QueryDenomMetadataResponse): _22.QueryDenomMetadataResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _21.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GenesisState;
                fromJSON(object: any): _21.GenesisState;
                toJSON(message: _21.GenesisState): unknown;
                fromPartial(object: Partial<_21.GenesisState>): _21.GenesisState;
                fromAmino(object: _21.GenesisStateAmino): _21.GenesisState;
                toAmino(message: _21.GenesisState): _21.GenesisStateAmino;
                fromAminoMsg(object: _21.GenesisStateAminoMsg): _21.GenesisState;
                toAminoMsg(message: _21.GenesisState): _21.GenesisStateAminoMsg;
                fromProtoMsg(message: _21.GenesisStateProtoMsg): _21.GenesisState;
                toProto(message: _21.GenesisState): Uint8Array;
                toProtoMsg(message: _21.GenesisState): _21.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _21.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Balance;
                fromJSON(object: any): _21.Balance;
                toJSON(message: _21.Balance): unknown;
                fromPartial(object: Partial<_21.Balance>): _21.Balance;
                fromAmino(object: _21.BalanceAmino): _21.Balance;
                toAmino(message: _21.Balance): _21.BalanceAmino;
                fromAminoMsg(object: _21.BalanceAminoMsg): _21.Balance;
                toAminoMsg(message: _21.Balance): _21.BalanceAminoMsg;
                fromProtoMsg(message: _21.BalanceProtoMsg): _21.Balance;
                toProto(message: _21.Balance): Uint8Array;
                toProtoMsg(message: _21.Balance): _21.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _20.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Params;
                fromJSON(object: any): _20.Params;
                toJSON(message: _20.Params): unknown;
                fromPartial(object: Partial<_20.Params>): _20.Params;
                fromAmino(object: _20.ParamsAmino): _20.Params;
                toAmino(message: _20.Params): _20.ParamsAmino;
                fromAminoMsg(object: _20.ParamsAminoMsg): _20.Params;
                toAminoMsg(message: _20.Params): _20.ParamsAminoMsg;
                fromProtoMsg(message: _20.ParamsProtoMsg): _20.Params;
                toProto(message: _20.Params): Uint8Array;
                toProtoMsg(message: _20.Params): _20.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _20.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.SendEnabled;
                fromJSON(object: any): _20.SendEnabled;
                toJSON(message: _20.SendEnabled): unknown;
                fromPartial(object: Partial<_20.SendEnabled>): _20.SendEnabled;
                fromAmino(object: _20.SendEnabledAmino): _20.SendEnabled;
                toAmino(message: _20.SendEnabled): _20.SendEnabledAmino;
                fromAminoMsg(object: _20.SendEnabledAminoMsg): _20.SendEnabled;
                toAminoMsg(message: _20.SendEnabled): _20.SendEnabledAminoMsg;
                fromProtoMsg(message: _20.SendEnabledProtoMsg): _20.SendEnabled;
                toProto(message: _20.SendEnabled): Uint8Array;
                toProtoMsg(message: _20.SendEnabled): _20.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _20.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Input;
                fromJSON(object: any): _20.Input;
                toJSON(message: _20.Input): unknown;
                fromPartial(object: Partial<_20.Input>): _20.Input;
                fromAmino(object: _20.InputAmino): _20.Input;
                toAmino(message: _20.Input): _20.InputAmino;
                fromAminoMsg(object: _20.InputAminoMsg): _20.Input;
                toAminoMsg(message: _20.Input): _20.InputAminoMsg;
                fromProtoMsg(message: _20.InputProtoMsg): _20.Input;
                toProto(message: _20.Input): Uint8Array;
                toProtoMsg(message: _20.Input): _20.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _20.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Output;
                fromJSON(object: any): _20.Output;
                toJSON(message: _20.Output): unknown;
                fromPartial(object: Partial<_20.Output>): _20.Output;
                fromAmino(object: _20.OutputAmino): _20.Output;
                toAmino(message: _20.Output): _20.OutputAmino;
                fromAminoMsg(object: _20.OutputAminoMsg): _20.Output;
                toAminoMsg(message: _20.Output): _20.OutputAminoMsg;
                fromProtoMsg(message: _20.OutputProtoMsg): _20.Output;
                toProto(message: _20.Output): Uint8Array;
                toProtoMsg(message: _20.Output): _20.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _20.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Supply;
                fromJSON(object: any): _20.Supply;
                toJSON(message: _20.Supply): unknown;
                fromPartial(object: Partial<_20.Supply>): _20.Supply;
                fromAmino(object: _20.SupplyAmino): _20.Supply;
                toAmino(message: _20.Supply): _20.SupplyAmino;
                fromAminoMsg(object: _20.SupplyAminoMsg): _20.Supply;
                toAminoMsg(message: _20.Supply): _20.SupplyAminoMsg;
                fromProtoMsg(message: _20.SupplyProtoMsg): _20.Supply;
                toProto(message: _20.Supply): Uint8Array;
                toProtoMsg(message: _20.Supply): _20.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _20.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.DenomUnit;
                fromJSON(object: any): _20.DenomUnit;
                toJSON(message: _20.DenomUnit): unknown;
                fromPartial(object: Partial<_20.DenomUnit>): _20.DenomUnit;
                fromAmino(object: _20.DenomUnitAmino): _20.DenomUnit;
                toAmino(message: _20.DenomUnit): _20.DenomUnitAmino;
                fromAminoMsg(object: _20.DenomUnitAminoMsg): _20.DenomUnit;
                toAminoMsg(message: _20.DenomUnit): _20.DenomUnitAminoMsg;
                fromProtoMsg(message: _20.DenomUnitProtoMsg): _20.DenomUnit;
                toProto(message: _20.DenomUnit): Uint8Array;
                toProtoMsg(message: _20.DenomUnit): _20.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _20.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Metadata;
                fromJSON(object: any): _20.Metadata;
                toJSON(message: _20.Metadata): unknown;
                fromPartial(object: Partial<_20.Metadata>): _20.Metadata;
                fromAmino(object: _20.MetadataAmino): _20.Metadata;
                toAmino(message: _20.Metadata): _20.MetadataAmino;
                fromAminoMsg(object: _20.MetadataAminoMsg): _20.Metadata;
                toAminoMsg(message: _20.Metadata): _20.MetadataAminoMsg;
                fromProtoMsg(message: _20.MetadataProtoMsg): _20.Metadata;
                toProto(message: _20.Metadata): Uint8Array;
                toProtoMsg(message: _20.Metadata): _20.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _19.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SendAuthorization;
                fromJSON(object: any): _19.SendAuthorization;
                toJSON(message: _19.SendAuthorization): unknown;
                fromPartial(object: Partial<_19.SendAuthorization>): _19.SendAuthorization;
                fromAmino(object: _19.SendAuthorizationAmino): _19.SendAuthorization;
                toAmino(message: _19.SendAuthorization): _19.SendAuthorizationAmino;
                fromAminoMsg(object: _19.SendAuthorizationAminoMsg): _19.SendAuthorization;
                toAminoMsg(message: _19.SendAuthorization): _19.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _19.SendAuthorizationProtoMsg): _19.SendAuthorization;
                toProto(message: _19.SendAuthorization): Uint8Array;
                toProtoMsg(message: _19.SendAuthorization): _19.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _24.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.TxResponse;
                    fromJSON(object: any): _24.TxResponse;
                    toJSON(message: _24.TxResponse): unknown;
                    fromPartial(object: Partial<_24.TxResponse>): _24.TxResponse;
                    fromAmino(object: _24.TxResponseAmino): _24.TxResponse;
                    toAmino(message: _24.TxResponse): _24.TxResponseAmino;
                    fromAminoMsg(object: _24.TxResponseAminoMsg): _24.TxResponse;
                    toAminoMsg(message: _24.TxResponse): _24.TxResponseAminoMsg;
                    fromProtoMsg(message: _24.TxResponseProtoMsg): _24.TxResponse;
                    toProto(message: _24.TxResponse): Uint8Array;
                    toProtoMsg(message: _24.TxResponse): _24.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _24.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ABCIMessageLog;
                    fromJSON(object: any): _24.ABCIMessageLog;
                    toJSON(message: _24.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_24.ABCIMessageLog>): _24.ABCIMessageLog;
                    fromAmino(object: _24.ABCIMessageLogAmino): _24.ABCIMessageLog;
                    toAmino(message: _24.ABCIMessageLog): _24.ABCIMessageLogAmino;
                    fromAminoMsg(object: _24.ABCIMessageLogAminoMsg): _24.ABCIMessageLog;
                    toAminoMsg(message: _24.ABCIMessageLog): _24.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _24.ABCIMessageLogProtoMsg): _24.ABCIMessageLog;
                    toProto(message: _24.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _24.ABCIMessageLog): _24.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _24.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.StringEvent;
                    fromJSON(object: any): _24.StringEvent;
                    toJSON(message: _24.StringEvent): unknown;
                    fromPartial(object: Partial<_24.StringEvent>): _24.StringEvent;
                    fromAmino(object: _24.StringEventAmino): _24.StringEvent;
                    toAmino(message: _24.StringEvent): _24.StringEventAmino;
                    fromAminoMsg(object: _24.StringEventAminoMsg): _24.StringEvent;
                    toAminoMsg(message: _24.StringEvent): _24.StringEventAminoMsg;
                    fromProtoMsg(message: _24.StringEventProtoMsg): _24.StringEvent;
                    toProto(message: _24.StringEvent): Uint8Array;
                    toProtoMsg(message: _24.StringEvent): _24.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _24.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Attribute;
                    fromJSON(object: any): _24.Attribute;
                    toJSON(message: _24.Attribute): unknown;
                    fromPartial(object: Partial<_24.Attribute>): _24.Attribute;
                    fromAmino(object: _24.AttributeAmino): _24.Attribute;
                    toAmino(message: _24.Attribute): _24.AttributeAmino;
                    fromAminoMsg(object: _24.AttributeAminoMsg): _24.Attribute;
                    toAminoMsg(message: _24.Attribute): _24.AttributeAminoMsg;
                    fromProtoMsg(message: _24.AttributeProtoMsg): _24.Attribute;
                    toProto(message: _24.Attribute): Uint8Array;
                    toProtoMsg(message: _24.Attribute): _24.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _24.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GasInfo;
                    fromJSON(object: any): _24.GasInfo;
                    toJSON(message: _24.GasInfo): unknown;
                    fromPartial(object: Partial<_24.GasInfo>): _24.GasInfo;
                    fromAmino(object: _24.GasInfoAmino): _24.GasInfo;
                    toAmino(message: _24.GasInfo): _24.GasInfoAmino;
                    fromAminoMsg(object: _24.GasInfoAminoMsg): _24.GasInfo;
                    toAminoMsg(message: _24.GasInfo): _24.GasInfoAminoMsg;
                    fromProtoMsg(message: _24.GasInfoProtoMsg): _24.GasInfo;
                    toProto(message: _24.GasInfo): Uint8Array;
                    toProtoMsg(message: _24.GasInfo): _24.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _24.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Result;
                    fromJSON(object: any): _24.Result;
                    toJSON(message: _24.Result): unknown;
                    fromPartial(object: Partial<_24.Result>): _24.Result;
                    fromAmino(object: _24.ResultAmino): _24.Result;
                    toAmino(message: _24.Result): _24.ResultAmino;
                    fromAminoMsg(object: _24.ResultAminoMsg): _24.Result;
                    toAminoMsg(message: _24.Result): _24.ResultAminoMsg;
                    fromProtoMsg(message: _24.ResultProtoMsg): _24.Result;
                    toProto(message: _24.Result): Uint8Array;
                    toProtoMsg(message: _24.Result): _24.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _24.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SimulationResponse;
                    fromJSON(object: any): _24.SimulationResponse;
                    toJSON(message: _24.SimulationResponse): unknown;
                    fromPartial(object: Partial<_24.SimulationResponse>): _24.SimulationResponse;
                    fromAmino(object: _24.SimulationResponseAmino): _24.SimulationResponse;
                    toAmino(message: _24.SimulationResponse): _24.SimulationResponseAmino;
                    fromAminoMsg(object: _24.SimulationResponseAminoMsg): _24.SimulationResponse;
                    toAminoMsg(message: _24.SimulationResponse): _24.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _24.SimulationResponseProtoMsg): _24.SimulationResponse;
                    toProto(message: _24.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _24.SimulationResponse): _24.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _24.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgData;
                    fromJSON(object: any): _24.MsgData;
                    toJSON(message: _24.MsgData): unknown;
                    fromPartial(object: Partial<_24.MsgData>): _24.MsgData;
                    fromAmino(object: _24.MsgDataAmino): _24.MsgData;
                    toAmino(message: _24.MsgData): _24.MsgDataAmino;
                    fromAminoMsg(object: _24.MsgDataAminoMsg): _24.MsgData;
                    toAminoMsg(message: _24.MsgData): _24.MsgDataAminoMsg;
                    fromProtoMsg(message: _24.MsgDataProtoMsg): _24.MsgData;
                    toProto(message: _24.MsgData): Uint8Array;
                    toProtoMsg(message: _24.MsgData): _24.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _24.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.TxMsgData;
                    fromJSON(object: any): _24.TxMsgData;
                    toJSON(message: _24.TxMsgData): unknown;
                    fromPartial(object: Partial<_24.TxMsgData>): _24.TxMsgData;
                    fromAmino(object: _24.TxMsgDataAmino): _24.TxMsgData;
                    toAmino(message: _24.TxMsgData): _24.TxMsgDataAmino;
                    fromAminoMsg(object: _24.TxMsgDataAminoMsg): _24.TxMsgData;
                    toAminoMsg(message: _24.TxMsgData): _24.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _24.TxMsgDataProtoMsg): _24.TxMsgData;
                    toProto(message: _24.TxMsgData): Uint8Array;
                    toProtoMsg(message: _24.TxMsgData): _24.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _24.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SearchTxsResult;
                    fromJSON(object: any): _24.SearchTxsResult;
                    toJSON(message: _24.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_24.SearchTxsResult>): _24.SearchTxsResult;
                    fromAmino(object: _24.SearchTxsResultAmino): _24.SearchTxsResult;
                    toAmino(message: _24.SearchTxsResult): _24.SearchTxsResultAmino;
                    fromAminoMsg(object: _24.SearchTxsResultAminoMsg): _24.SearchTxsResult;
                    toAminoMsg(message: _24.SearchTxsResult): _24.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _24.SearchTxsResultProtoMsg): _24.SearchTxsResult;
                    toProto(message: _24.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _24.SearchTxsResult): _24.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _25.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Pairs;
                    fromJSON(object: any): _25.Pairs;
                    toJSON(message: _25.Pairs): unknown;
                    fromPartial(object: Partial<_25.Pairs>): _25.Pairs;
                    fromAmino(object: _25.PairsAmino): _25.Pairs;
                    toAmino(message: _25.Pairs): _25.PairsAmino;
                    fromAminoMsg(object: _25.PairsAminoMsg): _25.Pairs;
                    toAminoMsg(message: _25.Pairs): _25.PairsAminoMsg;
                    fromProtoMsg(message: _25.PairsProtoMsg): _25.Pairs;
                    toProto(message: _25.Pairs): Uint8Array;
                    toProtoMsg(message: _25.Pairs): _25.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _25.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Pair;
                    fromJSON(object: any): _25.Pair;
                    toJSON(message: _25.Pair): unknown;
                    fromPartial(object: Partial<_25.Pair>): _25.Pair;
                    fromAmino(object: _25.PairAmino): _25.Pair;
                    toAmino(message: _25.Pair): _25.PairAmino;
                    fromAminoMsg(object: _25.PairAminoMsg): _25.Pair;
                    toAminoMsg(message: _25.Pair): _25.PairAminoMsg;
                    fromProtoMsg(message: _25.PairProtoMsg): _25.Pair;
                    toProto(message: _25.Pair): Uint8Array;
                    toProtoMsg(message: _25.Pair): _25.PairProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _26.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.PageRequest;
                    fromJSON(object: any): _26.PageRequest;
                    toJSON(message: _26.PageRequest): unknown;
                    fromPartial(object: Partial<_26.PageRequest>): _26.PageRequest;
                    fromAmino(object: _26.PageRequestAmino): _26.PageRequest;
                    toAmino(message: _26.PageRequest): _26.PageRequestAmino;
                    fromAminoMsg(object: _26.PageRequestAminoMsg): _26.PageRequest;
                    toAminoMsg(message: _26.PageRequest): _26.PageRequestAminoMsg;
                    fromProtoMsg(message: _26.PageRequestProtoMsg): _26.PageRequest;
                    toProto(message: _26.PageRequest): Uint8Array;
                    toProtoMsg(message: _26.PageRequest): _26.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _26.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.PageResponse;
                    fromJSON(object: any): _26.PageResponse;
                    toJSON(message: _26.PageResponse): unknown;
                    fromPartial(object: Partial<_26.PageResponse>): _26.PageResponse;
                    fromAmino(object: _26.PageResponseAmino): _26.PageResponse;
                    toAmino(message: _26.PageResponse): _26.PageResponseAmino;
                    fromAminoMsg(object: _26.PageResponseAminoMsg): _26.PageResponse;
                    toAminoMsg(message: _26.PageResponse): _26.PageResponseAminoMsg;
                    fromProtoMsg(message: _26.PageResponseProtoMsg): _26.PageResponse;
                    toProto(message: _26.PageResponse): Uint8Array;
                    toProtoMsg(message: _26.PageResponse): _26.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _27.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ListAllInterfacesRequest;
                    fromJSON(_: any): _27.ListAllInterfacesRequest;
                    toJSON(_: _27.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_27.ListAllInterfacesRequest>): _27.ListAllInterfacesRequest;
                    fromAmino(_: _27.ListAllInterfacesRequestAmino): _27.ListAllInterfacesRequest;
                    toAmino(_: _27.ListAllInterfacesRequest): _27.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _27.ListAllInterfacesRequestAminoMsg): _27.ListAllInterfacesRequest;
                    toAminoMsg(message: _27.ListAllInterfacesRequest): _27.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _27.ListAllInterfacesRequestProtoMsg): _27.ListAllInterfacesRequest;
                    toProto(message: _27.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _27.ListAllInterfacesRequest): _27.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _27.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ListAllInterfacesResponse;
                    fromJSON(object: any): _27.ListAllInterfacesResponse;
                    toJSON(message: _27.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_27.ListAllInterfacesResponse>): _27.ListAllInterfacesResponse;
                    fromAmino(object: _27.ListAllInterfacesResponseAmino): _27.ListAllInterfacesResponse;
                    toAmino(message: _27.ListAllInterfacesResponse): _27.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _27.ListAllInterfacesResponseAminoMsg): _27.ListAllInterfacesResponse;
                    toAminoMsg(message: _27.ListAllInterfacesResponse): _27.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _27.ListAllInterfacesResponseProtoMsg): _27.ListAllInterfacesResponse;
                    toProto(message: _27.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _27.ListAllInterfacesResponse): _27.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _27.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ListImplementationsRequest;
                    fromJSON(object: any): _27.ListImplementationsRequest;
                    toJSON(message: _27.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_27.ListImplementationsRequest>): _27.ListImplementationsRequest;
                    fromAmino(object: _27.ListImplementationsRequestAmino): _27.ListImplementationsRequest;
                    toAmino(message: _27.ListImplementationsRequest): _27.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _27.ListImplementationsRequestAminoMsg): _27.ListImplementationsRequest;
                    toAminoMsg(message: _27.ListImplementationsRequest): _27.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _27.ListImplementationsRequestProtoMsg): _27.ListImplementationsRequest;
                    toProto(message: _27.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _27.ListImplementationsRequest): _27.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _27.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ListImplementationsResponse;
                    fromJSON(object: any): _27.ListImplementationsResponse;
                    toJSON(message: _27.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_27.ListImplementationsResponse>): _27.ListImplementationsResponse;
                    fromAmino(object: _27.ListImplementationsResponseAmino): _27.ListImplementationsResponse;
                    toAmino(message: _27.ListImplementationsResponse): _27.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _27.ListImplementationsResponseAminoMsg): _27.ListImplementationsResponse;
                    toAminoMsg(message: _27.ListImplementationsResponse): _27.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _27.ListImplementationsResponseProtoMsg): _27.ListImplementationsResponse;
                    toProto(message: _27.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _27.ListImplementationsResponse): _27.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _28.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.AppDescriptor;
                    fromJSON(object: any): _28.AppDescriptor;
                    toJSON(message: _28.AppDescriptor): unknown;
                    fromPartial(object: Partial<_28.AppDescriptor>): _28.AppDescriptor;
                    fromAmino(object: _28.AppDescriptorAmino): _28.AppDescriptor;
                    toAmino(message: _28.AppDescriptor): _28.AppDescriptorAmino;
                    fromAminoMsg(object: _28.AppDescriptorAminoMsg): _28.AppDescriptor;
                    toAminoMsg(message: _28.AppDescriptor): _28.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _28.AppDescriptorProtoMsg): _28.AppDescriptor;
                    toProto(message: _28.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _28.AppDescriptor): _28.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _28.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.TxDescriptor;
                    fromJSON(object: any): _28.TxDescriptor;
                    toJSON(message: _28.TxDescriptor): unknown;
                    fromPartial(object: Partial<_28.TxDescriptor>): _28.TxDescriptor;
                    fromAmino(object: _28.TxDescriptorAmino): _28.TxDescriptor;
                    toAmino(message: _28.TxDescriptor): _28.TxDescriptorAmino;
                    fromAminoMsg(object: _28.TxDescriptorAminoMsg): _28.TxDescriptor;
                    toAminoMsg(message: _28.TxDescriptor): _28.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _28.TxDescriptorProtoMsg): _28.TxDescriptor;
                    toProto(message: _28.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _28.TxDescriptor): _28.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _28.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.AuthnDescriptor;
                    fromJSON(object: any): _28.AuthnDescriptor;
                    toJSON(message: _28.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_28.AuthnDescriptor>): _28.AuthnDescriptor;
                    fromAmino(object: _28.AuthnDescriptorAmino): _28.AuthnDescriptor;
                    toAmino(message: _28.AuthnDescriptor): _28.AuthnDescriptorAmino;
                    fromAminoMsg(object: _28.AuthnDescriptorAminoMsg): _28.AuthnDescriptor;
                    toAminoMsg(message: _28.AuthnDescriptor): _28.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _28.AuthnDescriptorProtoMsg): _28.AuthnDescriptor;
                    toProto(message: _28.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _28.AuthnDescriptor): _28.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _28.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.SigningModeDescriptor;
                    fromJSON(object: any): _28.SigningModeDescriptor;
                    toJSON(message: _28.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_28.SigningModeDescriptor>): _28.SigningModeDescriptor;
                    fromAmino(object: _28.SigningModeDescriptorAmino): _28.SigningModeDescriptor;
                    toAmino(message: _28.SigningModeDescriptor): _28.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _28.SigningModeDescriptorAminoMsg): _28.SigningModeDescriptor;
                    toAminoMsg(message: _28.SigningModeDescriptor): _28.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _28.SigningModeDescriptorProtoMsg): _28.SigningModeDescriptor;
                    toProto(message: _28.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _28.SigningModeDescriptor): _28.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _28.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ChainDescriptor;
                    fromJSON(object: any): _28.ChainDescriptor;
                    toJSON(message: _28.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_28.ChainDescriptor>): _28.ChainDescriptor;
                    fromAmino(object: _28.ChainDescriptorAmino): _28.ChainDescriptor;
                    toAmino(message: _28.ChainDescriptor): _28.ChainDescriptorAmino;
                    fromAminoMsg(object: _28.ChainDescriptorAminoMsg): _28.ChainDescriptor;
                    toAminoMsg(message: _28.ChainDescriptor): _28.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _28.ChainDescriptorProtoMsg): _28.ChainDescriptor;
                    toProto(message: _28.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _28.ChainDescriptor): _28.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _28.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.CodecDescriptor;
                    fromJSON(object: any): _28.CodecDescriptor;
                    toJSON(message: _28.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_28.CodecDescriptor>): _28.CodecDescriptor;
                    fromAmino(object: _28.CodecDescriptorAmino): _28.CodecDescriptor;
                    toAmino(message: _28.CodecDescriptor): _28.CodecDescriptorAmino;
                    fromAminoMsg(object: _28.CodecDescriptorAminoMsg): _28.CodecDescriptor;
                    toAminoMsg(message: _28.CodecDescriptor): _28.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _28.CodecDescriptorProtoMsg): _28.CodecDescriptor;
                    toProto(message: _28.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _28.CodecDescriptor): _28.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _28.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.InterfaceDescriptor;
                    fromJSON(object: any): _28.InterfaceDescriptor;
                    toJSON(message: _28.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_28.InterfaceDescriptor>): _28.InterfaceDescriptor;
                    fromAmino(object: _28.InterfaceDescriptorAmino): _28.InterfaceDescriptor;
                    toAmino(message: _28.InterfaceDescriptor): _28.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _28.InterfaceDescriptorAminoMsg): _28.InterfaceDescriptor;
                    toAminoMsg(message: _28.InterfaceDescriptor): _28.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _28.InterfaceDescriptorProtoMsg): _28.InterfaceDescriptor;
                    toProto(message: _28.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _28.InterfaceDescriptor): _28.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _28.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _28.InterfaceImplementerDescriptor;
                    toJSON(message: _28.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_28.InterfaceImplementerDescriptor>): _28.InterfaceImplementerDescriptor;
                    fromAmino(object: _28.InterfaceImplementerDescriptorAmino): _28.InterfaceImplementerDescriptor;
                    toAmino(message: _28.InterfaceImplementerDescriptor): _28.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _28.InterfaceImplementerDescriptorAminoMsg): _28.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _28.InterfaceImplementerDescriptor): _28.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _28.InterfaceImplementerDescriptorProtoMsg): _28.InterfaceImplementerDescriptor;
                    toProto(message: _28.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _28.InterfaceImplementerDescriptor): _28.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _28.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _28.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _28.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_28.InterfaceAcceptingMessageDescriptor>): _28.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _28.InterfaceAcceptingMessageDescriptorAmino): _28.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _28.InterfaceAcceptingMessageDescriptor): _28.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _28.InterfaceAcceptingMessageDescriptorAminoMsg): _28.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _28.InterfaceAcceptingMessageDescriptor): _28.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _28.InterfaceAcceptingMessageDescriptorProtoMsg): _28.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _28.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _28.InterfaceAcceptingMessageDescriptor): _28.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _28.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ConfigurationDescriptor;
                    fromJSON(object: any): _28.ConfigurationDescriptor;
                    toJSON(message: _28.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_28.ConfigurationDescriptor>): _28.ConfigurationDescriptor;
                    fromAmino(object: _28.ConfigurationDescriptorAmino): _28.ConfigurationDescriptor;
                    toAmino(message: _28.ConfigurationDescriptor): _28.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _28.ConfigurationDescriptorAminoMsg): _28.ConfigurationDescriptor;
                    toAminoMsg(message: _28.ConfigurationDescriptor): _28.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _28.ConfigurationDescriptorProtoMsg): _28.ConfigurationDescriptor;
                    toProto(message: _28.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _28.ConfigurationDescriptor): _28.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _28.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgDescriptor;
                    fromJSON(object: any): _28.MsgDescriptor;
                    toJSON(message: _28.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_28.MsgDescriptor>): _28.MsgDescriptor;
                    fromAmino(object: _28.MsgDescriptorAmino): _28.MsgDescriptor;
                    toAmino(message: _28.MsgDescriptor): _28.MsgDescriptorAmino;
                    fromAminoMsg(object: _28.MsgDescriptorAminoMsg): _28.MsgDescriptor;
                    toAminoMsg(message: _28.MsgDescriptor): _28.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _28.MsgDescriptorProtoMsg): _28.MsgDescriptor;
                    toProto(message: _28.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _28.MsgDescriptor): _28.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _28.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _28.GetAuthnDescriptorRequest;
                    toJSON(_: _28.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_28.GetAuthnDescriptorRequest>): _28.GetAuthnDescriptorRequest;
                    fromAmino(_: _28.GetAuthnDescriptorRequestAmino): _28.GetAuthnDescriptorRequest;
                    toAmino(_: _28.GetAuthnDescriptorRequest): _28.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _28.GetAuthnDescriptorRequestAminoMsg): _28.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _28.GetAuthnDescriptorRequest): _28.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _28.GetAuthnDescriptorRequestProtoMsg): _28.GetAuthnDescriptorRequest;
                    toProto(message: _28.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _28.GetAuthnDescriptorRequest): _28.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _28.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _28.GetAuthnDescriptorResponse;
                    toJSON(message: _28.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_28.GetAuthnDescriptorResponse>): _28.GetAuthnDescriptorResponse;
                    fromAmino(object: _28.GetAuthnDescriptorResponseAmino): _28.GetAuthnDescriptorResponse;
                    toAmino(message: _28.GetAuthnDescriptorResponse): _28.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _28.GetAuthnDescriptorResponseAminoMsg): _28.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _28.GetAuthnDescriptorResponse): _28.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _28.GetAuthnDescriptorResponseProtoMsg): _28.GetAuthnDescriptorResponse;
                    toProto(message: _28.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _28.GetAuthnDescriptorResponse): _28.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _28.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetChainDescriptorRequest;
                    fromJSON(_: any): _28.GetChainDescriptorRequest;
                    toJSON(_: _28.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_28.GetChainDescriptorRequest>): _28.GetChainDescriptorRequest;
                    fromAmino(_: _28.GetChainDescriptorRequestAmino): _28.GetChainDescriptorRequest;
                    toAmino(_: _28.GetChainDescriptorRequest): _28.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _28.GetChainDescriptorRequestAminoMsg): _28.GetChainDescriptorRequest;
                    toAminoMsg(message: _28.GetChainDescriptorRequest): _28.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _28.GetChainDescriptorRequestProtoMsg): _28.GetChainDescriptorRequest;
                    toProto(message: _28.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _28.GetChainDescriptorRequest): _28.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _28.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetChainDescriptorResponse;
                    fromJSON(object: any): _28.GetChainDescriptorResponse;
                    toJSON(message: _28.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_28.GetChainDescriptorResponse>): _28.GetChainDescriptorResponse;
                    fromAmino(object: _28.GetChainDescriptorResponseAmino): _28.GetChainDescriptorResponse;
                    toAmino(message: _28.GetChainDescriptorResponse): _28.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _28.GetChainDescriptorResponseAminoMsg): _28.GetChainDescriptorResponse;
                    toAminoMsg(message: _28.GetChainDescriptorResponse): _28.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _28.GetChainDescriptorResponseProtoMsg): _28.GetChainDescriptorResponse;
                    toProto(message: _28.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _28.GetChainDescriptorResponse): _28.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _28.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetCodecDescriptorRequest;
                    fromJSON(_: any): _28.GetCodecDescriptorRequest;
                    toJSON(_: _28.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_28.GetCodecDescriptorRequest>): _28.GetCodecDescriptorRequest;
                    fromAmino(_: _28.GetCodecDescriptorRequestAmino): _28.GetCodecDescriptorRequest;
                    toAmino(_: _28.GetCodecDescriptorRequest): _28.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _28.GetCodecDescriptorRequestAminoMsg): _28.GetCodecDescriptorRequest;
                    toAminoMsg(message: _28.GetCodecDescriptorRequest): _28.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _28.GetCodecDescriptorRequestProtoMsg): _28.GetCodecDescriptorRequest;
                    toProto(message: _28.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _28.GetCodecDescriptorRequest): _28.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _28.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetCodecDescriptorResponse;
                    fromJSON(object: any): _28.GetCodecDescriptorResponse;
                    toJSON(message: _28.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_28.GetCodecDescriptorResponse>): _28.GetCodecDescriptorResponse;
                    fromAmino(object: _28.GetCodecDescriptorResponseAmino): _28.GetCodecDescriptorResponse;
                    toAmino(message: _28.GetCodecDescriptorResponse): _28.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _28.GetCodecDescriptorResponseAminoMsg): _28.GetCodecDescriptorResponse;
                    toAminoMsg(message: _28.GetCodecDescriptorResponse): _28.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _28.GetCodecDescriptorResponseProtoMsg): _28.GetCodecDescriptorResponse;
                    toProto(message: _28.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _28.GetCodecDescriptorResponse): _28.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _28.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _28.GetConfigurationDescriptorRequest;
                    toJSON(_: _28.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_28.GetConfigurationDescriptorRequest>): _28.GetConfigurationDescriptorRequest;
                    fromAmino(_: _28.GetConfigurationDescriptorRequestAmino): _28.GetConfigurationDescriptorRequest;
                    toAmino(_: _28.GetConfigurationDescriptorRequest): _28.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _28.GetConfigurationDescriptorRequestAminoMsg): _28.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _28.GetConfigurationDescriptorRequest): _28.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _28.GetConfigurationDescriptorRequestProtoMsg): _28.GetConfigurationDescriptorRequest;
                    toProto(message: _28.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _28.GetConfigurationDescriptorRequest): _28.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _28.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _28.GetConfigurationDescriptorResponse;
                    toJSON(message: _28.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_28.GetConfigurationDescriptorResponse>): _28.GetConfigurationDescriptorResponse;
                    fromAmino(object: _28.GetConfigurationDescriptorResponseAmino): _28.GetConfigurationDescriptorResponse;
                    toAmino(message: _28.GetConfigurationDescriptorResponse): _28.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _28.GetConfigurationDescriptorResponseAminoMsg): _28.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _28.GetConfigurationDescriptorResponse): _28.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _28.GetConfigurationDescriptorResponseProtoMsg): _28.GetConfigurationDescriptorResponse;
                    toProto(message: _28.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _28.GetConfigurationDescriptorResponse): _28.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _28.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _28.GetQueryServicesDescriptorRequest;
                    toJSON(_: _28.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_28.GetQueryServicesDescriptorRequest>): _28.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _28.GetQueryServicesDescriptorRequestAmino): _28.GetQueryServicesDescriptorRequest;
                    toAmino(_: _28.GetQueryServicesDescriptorRequest): _28.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _28.GetQueryServicesDescriptorRequestAminoMsg): _28.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _28.GetQueryServicesDescriptorRequest): _28.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _28.GetQueryServicesDescriptorRequestProtoMsg): _28.GetQueryServicesDescriptorRequest;
                    toProto(message: _28.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _28.GetQueryServicesDescriptorRequest): _28.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _28.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _28.GetQueryServicesDescriptorResponse;
                    toJSON(message: _28.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_28.GetQueryServicesDescriptorResponse>): _28.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _28.GetQueryServicesDescriptorResponseAmino): _28.GetQueryServicesDescriptorResponse;
                    toAmino(message: _28.GetQueryServicesDescriptorResponse): _28.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _28.GetQueryServicesDescriptorResponseAminoMsg): _28.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _28.GetQueryServicesDescriptorResponse): _28.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _28.GetQueryServicesDescriptorResponseProtoMsg): _28.GetQueryServicesDescriptorResponse;
                    toProto(message: _28.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _28.GetQueryServicesDescriptorResponse): _28.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _28.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetTxDescriptorRequest;
                    fromJSON(_: any): _28.GetTxDescriptorRequest;
                    toJSON(_: _28.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_28.GetTxDescriptorRequest>): _28.GetTxDescriptorRequest;
                    fromAmino(_: _28.GetTxDescriptorRequestAmino): _28.GetTxDescriptorRequest;
                    toAmino(_: _28.GetTxDescriptorRequest): _28.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _28.GetTxDescriptorRequestAminoMsg): _28.GetTxDescriptorRequest;
                    toAminoMsg(message: _28.GetTxDescriptorRequest): _28.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _28.GetTxDescriptorRequestProtoMsg): _28.GetTxDescriptorRequest;
                    toProto(message: _28.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _28.GetTxDescriptorRequest): _28.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _28.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetTxDescriptorResponse;
                    fromJSON(object: any): _28.GetTxDescriptorResponse;
                    toJSON(message: _28.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_28.GetTxDescriptorResponse>): _28.GetTxDescriptorResponse;
                    fromAmino(object: _28.GetTxDescriptorResponseAmino): _28.GetTxDescriptorResponse;
                    toAmino(message: _28.GetTxDescriptorResponse): _28.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _28.GetTxDescriptorResponseAminoMsg): _28.GetTxDescriptorResponse;
                    toAminoMsg(message: _28.GetTxDescriptorResponse): _28.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _28.GetTxDescriptorResponseProtoMsg): _28.GetTxDescriptorResponse;
                    toProto(message: _28.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _28.GetTxDescriptorResponse): _28.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _28.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryServicesDescriptor;
                    fromJSON(object: any): _28.QueryServicesDescriptor;
                    toJSON(message: _28.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_28.QueryServicesDescriptor>): _28.QueryServicesDescriptor;
                    fromAmino(object: _28.QueryServicesDescriptorAmino): _28.QueryServicesDescriptor;
                    toAmino(message: _28.QueryServicesDescriptor): _28.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _28.QueryServicesDescriptorAminoMsg): _28.QueryServicesDescriptor;
                    toAminoMsg(message: _28.QueryServicesDescriptor): _28.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _28.QueryServicesDescriptorProtoMsg): _28.QueryServicesDescriptor;
                    toProto(message: _28.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _28.QueryServicesDescriptor): _28.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _28.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryServiceDescriptor;
                    fromJSON(object: any): _28.QueryServiceDescriptor;
                    toJSON(message: _28.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_28.QueryServiceDescriptor>): _28.QueryServiceDescriptor;
                    fromAmino(object: _28.QueryServiceDescriptorAmino): _28.QueryServiceDescriptor;
                    toAmino(message: _28.QueryServiceDescriptor): _28.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _28.QueryServiceDescriptorAminoMsg): _28.QueryServiceDescriptor;
                    toAminoMsg(message: _28.QueryServiceDescriptor): _28.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _28.QueryServiceDescriptorProtoMsg): _28.QueryServiceDescriptor;
                    toProto(message: _28.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _28.QueryServiceDescriptor): _28.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _28.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryMethodDescriptor;
                    fromJSON(object: any): _28.QueryMethodDescriptor;
                    toJSON(message: _28.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_28.QueryMethodDescriptor>): _28.QueryMethodDescriptor;
                    fromAmino(object: _28.QueryMethodDescriptorAmino): _28.QueryMethodDescriptor;
                    toAmino(message: _28.QueryMethodDescriptor): _28.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _28.QueryMethodDescriptorAminoMsg): _28.QueryMethodDescriptor;
                    toAminoMsg(message: _28.QueryMethodDescriptor): _28.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _28.QueryMethodDescriptorProtoMsg): _28.QueryMethodDescriptor;
                    toProto(message: _28.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _28.QueryMethodDescriptor): _28.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _29.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Snapshot;
                    fromJSON(object: any): _29.Snapshot;
                    toJSON(message: _29.Snapshot): unknown;
                    fromPartial(object: Partial<_29.Snapshot>): _29.Snapshot;
                    fromAmino(object: _29.SnapshotAmino): _29.Snapshot;
                    toAmino(message: _29.Snapshot): _29.SnapshotAmino;
                    fromAminoMsg(object: _29.SnapshotAminoMsg): _29.Snapshot;
                    toAminoMsg(message: _29.Snapshot): _29.SnapshotAminoMsg;
                    fromProtoMsg(message: _29.SnapshotProtoMsg): _29.Snapshot;
                    toProto(message: _29.Snapshot): Uint8Array;
                    toProtoMsg(message: _29.Snapshot): _29.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _29.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Metadata;
                    fromJSON(object: any): _29.Metadata;
                    toJSON(message: _29.Metadata): unknown;
                    fromPartial(object: Partial<_29.Metadata>): _29.Metadata;
                    fromAmino(object: _29.MetadataAmino): _29.Metadata;
                    toAmino(message: _29.Metadata): _29.MetadataAmino;
                    fromAminoMsg(object: _29.MetadataAminoMsg): _29.Metadata;
                    toAminoMsg(message: _29.Metadata): _29.MetadataAminoMsg;
                    fromProtoMsg(message: _29.MetadataProtoMsg): _29.Metadata;
                    toProto(message: _29.Metadata): Uint8Array;
                    toProtoMsg(message: _29.Metadata): _29.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _29.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotItem;
                    fromJSON(object: any): _29.SnapshotItem;
                    toJSON(message: _29.SnapshotItem): unknown;
                    fromPartial(object: Partial<_29.SnapshotItem>): _29.SnapshotItem;
                    fromAmino(object: _29.SnapshotItemAmino): _29.SnapshotItem;
                    toAmino(message: _29.SnapshotItem): _29.SnapshotItemAmino;
                    fromAminoMsg(object: _29.SnapshotItemAminoMsg): _29.SnapshotItem;
                    toAminoMsg(message: _29.SnapshotItem): _29.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _29.SnapshotItemProtoMsg): _29.SnapshotItem;
                    toProto(message: _29.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _29.SnapshotItem): _29.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _29.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotStoreItem;
                    fromJSON(object: any): _29.SnapshotStoreItem;
                    toJSON(message: _29.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_29.SnapshotStoreItem>): _29.SnapshotStoreItem;
                    fromAmino(object: _29.SnapshotStoreItemAmino): _29.SnapshotStoreItem;
                    toAmino(message: _29.SnapshotStoreItem): _29.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _29.SnapshotStoreItemAminoMsg): _29.SnapshotStoreItem;
                    toAminoMsg(message: _29.SnapshotStoreItem): _29.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _29.SnapshotStoreItemProtoMsg): _29.SnapshotStoreItem;
                    toProto(message: _29.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _29.SnapshotStoreItem): _29.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _29.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotIAVLItem;
                    fromJSON(object: any): _29.SnapshotIAVLItem;
                    toJSON(message: _29.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_29.SnapshotIAVLItem>): _29.SnapshotIAVLItem;
                    fromAmino(object: _29.SnapshotIAVLItemAmino): _29.SnapshotIAVLItem;
                    toAmino(message: _29.SnapshotIAVLItem): _29.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _29.SnapshotIAVLItemAminoMsg): _29.SnapshotIAVLItem;
                    toAminoMsg(message: _29.SnapshotIAVLItem): _29.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _29.SnapshotIAVLItemProtoMsg): _29.SnapshotIAVLItem;
                    toProto(message: _29.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _29.SnapshotIAVLItem): _29.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _29.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotExtensionMeta;
                    fromJSON(object: any): _29.SnapshotExtensionMeta;
                    toJSON(message: _29.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_29.SnapshotExtensionMeta>): _29.SnapshotExtensionMeta;
                    fromAmino(object: _29.SnapshotExtensionMetaAmino): _29.SnapshotExtensionMeta;
                    toAmino(message: _29.SnapshotExtensionMeta): _29.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _29.SnapshotExtensionMetaAminoMsg): _29.SnapshotExtensionMeta;
                    toAminoMsg(message: _29.SnapshotExtensionMeta): _29.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _29.SnapshotExtensionMetaProtoMsg): _29.SnapshotExtensionMeta;
                    toProto(message: _29.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _29.SnapshotExtensionMeta): _29.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _29.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotExtensionPayload;
                    fromJSON(object: any): _29.SnapshotExtensionPayload;
                    toJSON(message: _29.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_29.SnapshotExtensionPayload>): _29.SnapshotExtensionPayload;
                    fromAmino(object: _29.SnapshotExtensionPayloadAmino): _29.SnapshotExtensionPayload;
                    toAmino(message: _29.SnapshotExtensionPayload): _29.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _29.SnapshotExtensionPayloadAminoMsg): _29.SnapshotExtensionPayload;
                    toAminoMsg(message: _29.SnapshotExtensionPayload): _29.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _29.SnapshotExtensionPayloadProtoMsg): _29.SnapshotExtensionPayload;
                    toProto(message: _29.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _29.SnapshotExtensionPayload): _29.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _31.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.StoreKVPair;
                    fromJSON(object: any): _31.StoreKVPair;
                    toJSON(message: _31.StoreKVPair): unknown;
                    fromPartial(object: Partial<_31.StoreKVPair>): _31.StoreKVPair;
                    fromAmino(object: _31.StoreKVPairAmino): _31.StoreKVPair;
                    toAmino(message: _31.StoreKVPair): _31.StoreKVPairAmino;
                    fromAminoMsg(object: _31.StoreKVPairAminoMsg): _31.StoreKVPair;
                    toAminoMsg(message: _31.StoreKVPair): _31.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _31.StoreKVPairProtoMsg): _31.StoreKVPair;
                    toProto(message: _31.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _31.StoreKVPair): _31.StoreKVPairProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _30.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.CommitInfo;
                    fromJSON(object: any): _30.CommitInfo;
                    toJSON(message: _30.CommitInfo): unknown;
                    fromPartial(object: Partial<_30.CommitInfo>): _30.CommitInfo;
                    fromAmino(object: _30.CommitInfoAmino): _30.CommitInfo;
                    toAmino(message: _30.CommitInfo): _30.CommitInfoAmino;
                    fromAminoMsg(object: _30.CommitInfoAminoMsg): _30.CommitInfo;
                    toAminoMsg(message: _30.CommitInfo): _30.CommitInfoAminoMsg;
                    fromProtoMsg(message: _30.CommitInfoProtoMsg): _30.CommitInfo;
                    toProto(message: _30.CommitInfo): Uint8Array;
                    toProtoMsg(message: _30.CommitInfo): _30.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _30.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.StoreInfo;
                    fromJSON(object: any): _30.StoreInfo;
                    toJSON(message: _30.StoreInfo): unknown;
                    fromPartial(object: Partial<_30.StoreInfo>): _30.StoreInfo;
                    fromAmino(object: _30.StoreInfoAmino): _30.StoreInfo;
                    toAmino(message: _30.StoreInfo): _30.StoreInfoAmino;
                    fromAminoMsg(object: _30.StoreInfoAminoMsg): _30.StoreInfo;
                    toAminoMsg(message: _30.StoreInfo): _30.StoreInfoAminoMsg;
                    fromProtoMsg(message: _30.StoreInfoProtoMsg): _30.StoreInfo;
                    toProto(message: _30.StoreInfo): Uint8Array;
                    toProtoMsg(message: _30.StoreInfo): _30.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _30.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.CommitID;
                    fromJSON(object: any): _30.CommitID;
                    toJSON(message: _30.CommitID): unknown;
                    fromPartial(object: Partial<_30.CommitID>): _30.CommitID;
                    fromAmino(object: _30.CommitIDAmino): _30.CommitID;
                    toAmino(message: _30.CommitID): _30.CommitIDAmino;
                    fromAminoMsg(object: _30.CommitIDAminoMsg): _30.CommitID;
                    toAminoMsg(message: _30.CommitID): _30.CommitIDAminoMsg;
                    fromProtoMsg(message: _30.CommitIDProtoMsg): _30.CommitID;
                    toProto(message: _30.CommitID): Uint8Array;
                    toProtoMsg(message: _30.CommitID): _30.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _252.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _32.GetNodeInfoRequest): Promise<_32.GetNodeInfoResponse>;
                    getSyncing(request?: _32.GetSyncingRequest): Promise<_32.GetSyncingResponse>;
                    getLatestBlock(request?: _32.GetLatestBlockRequest): Promise<_32.GetLatestBlockResponse>;
                    getBlockByHeight(request: _32.GetBlockByHeightRequest): Promise<_32.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _32.GetLatestValidatorSetRequest): Promise<_32.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _32.GetValidatorSetByHeightRequest): Promise<_32.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _233.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _32.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _32.GetValidatorSetByHeightRequest;
                    toJSON(message: _32.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_32.GetValidatorSetByHeightRequest>): _32.GetValidatorSetByHeightRequest;
                    fromAmino(object: _32.GetValidatorSetByHeightRequestAmino): _32.GetValidatorSetByHeightRequest;
                    toAmino(message: _32.GetValidatorSetByHeightRequest): _32.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _32.GetValidatorSetByHeightRequestAminoMsg): _32.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _32.GetValidatorSetByHeightRequest): _32.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _32.GetValidatorSetByHeightRequestProtoMsg): _32.GetValidatorSetByHeightRequest;
                    toProto(message: _32.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _32.GetValidatorSetByHeightRequest): _32.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _32.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _32.GetValidatorSetByHeightResponse;
                    toJSON(message: _32.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_32.GetValidatorSetByHeightResponse>): _32.GetValidatorSetByHeightResponse;
                    fromAmino(object: _32.GetValidatorSetByHeightResponseAmino): _32.GetValidatorSetByHeightResponse;
                    toAmino(message: _32.GetValidatorSetByHeightResponse): _32.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _32.GetValidatorSetByHeightResponseAminoMsg): _32.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _32.GetValidatorSetByHeightResponse): _32.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _32.GetValidatorSetByHeightResponseProtoMsg): _32.GetValidatorSetByHeightResponse;
                    toProto(message: _32.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _32.GetValidatorSetByHeightResponse): _32.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _32.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _32.GetLatestValidatorSetRequest;
                    toJSON(message: _32.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_32.GetLatestValidatorSetRequest>): _32.GetLatestValidatorSetRequest;
                    fromAmino(object: _32.GetLatestValidatorSetRequestAmino): _32.GetLatestValidatorSetRequest;
                    toAmino(message: _32.GetLatestValidatorSetRequest): _32.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _32.GetLatestValidatorSetRequestAminoMsg): _32.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _32.GetLatestValidatorSetRequest): _32.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _32.GetLatestValidatorSetRequestProtoMsg): _32.GetLatestValidatorSetRequest;
                    toProto(message: _32.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _32.GetLatestValidatorSetRequest): _32.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _32.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _32.GetLatestValidatorSetResponse;
                    toJSON(message: _32.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_32.GetLatestValidatorSetResponse>): _32.GetLatestValidatorSetResponse;
                    fromAmino(object: _32.GetLatestValidatorSetResponseAmino): _32.GetLatestValidatorSetResponse;
                    toAmino(message: _32.GetLatestValidatorSetResponse): _32.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _32.GetLatestValidatorSetResponseAminoMsg): _32.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _32.GetLatestValidatorSetResponse): _32.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _32.GetLatestValidatorSetResponseProtoMsg): _32.GetLatestValidatorSetResponse;
                    toProto(message: _32.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _32.GetLatestValidatorSetResponse): _32.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _32.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Validator;
                    fromJSON(object: any): _32.Validator;
                    toJSON(message: _32.Validator): unknown;
                    fromPartial(object: Partial<_32.Validator>): _32.Validator;
                    fromAmino(object: _32.ValidatorAmino): _32.Validator;
                    toAmino(message: _32.Validator): _32.ValidatorAmino;
                    fromAminoMsg(object: _32.ValidatorAminoMsg): _32.Validator;
                    toAminoMsg(message: _32.Validator): _32.ValidatorAminoMsg;
                    fromProtoMsg(message: _32.ValidatorProtoMsg): _32.Validator;
                    toProto(message: _32.Validator): Uint8Array;
                    toProtoMsg(message: _32.Validator): _32.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _32.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetBlockByHeightRequest;
                    fromJSON(object: any): _32.GetBlockByHeightRequest;
                    toJSON(message: _32.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_32.GetBlockByHeightRequest>): _32.GetBlockByHeightRequest;
                    fromAmino(object: _32.GetBlockByHeightRequestAmino): _32.GetBlockByHeightRequest;
                    toAmino(message: _32.GetBlockByHeightRequest): _32.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _32.GetBlockByHeightRequestAminoMsg): _32.GetBlockByHeightRequest;
                    toAminoMsg(message: _32.GetBlockByHeightRequest): _32.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _32.GetBlockByHeightRequestProtoMsg): _32.GetBlockByHeightRequest;
                    toProto(message: _32.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _32.GetBlockByHeightRequest): _32.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _32.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetBlockByHeightResponse;
                    fromJSON(object: any): _32.GetBlockByHeightResponse;
                    toJSON(message: _32.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_32.GetBlockByHeightResponse>): _32.GetBlockByHeightResponse;
                    fromAmino(object: _32.GetBlockByHeightResponseAmino): _32.GetBlockByHeightResponse;
                    toAmino(message: _32.GetBlockByHeightResponse): _32.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _32.GetBlockByHeightResponseAminoMsg): _32.GetBlockByHeightResponse;
                    toAminoMsg(message: _32.GetBlockByHeightResponse): _32.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _32.GetBlockByHeightResponseProtoMsg): _32.GetBlockByHeightResponse;
                    toProto(message: _32.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _32.GetBlockByHeightResponse): _32.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _32.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetLatestBlockRequest;
                    fromJSON(_: any): _32.GetLatestBlockRequest;
                    toJSON(_: _32.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_32.GetLatestBlockRequest>): _32.GetLatestBlockRequest;
                    fromAmino(_: _32.GetLatestBlockRequestAmino): _32.GetLatestBlockRequest;
                    toAmino(_: _32.GetLatestBlockRequest): _32.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _32.GetLatestBlockRequestAminoMsg): _32.GetLatestBlockRequest;
                    toAminoMsg(message: _32.GetLatestBlockRequest): _32.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _32.GetLatestBlockRequestProtoMsg): _32.GetLatestBlockRequest;
                    toProto(message: _32.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _32.GetLatestBlockRequest): _32.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _32.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetLatestBlockResponse;
                    fromJSON(object: any): _32.GetLatestBlockResponse;
                    toJSON(message: _32.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_32.GetLatestBlockResponse>): _32.GetLatestBlockResponse;
                    fromAmino(object: _32.GetLatestBlockResponseAmino): _32.GetLatestBlockResponse;
                    toAmino(message: _32.GetLatestBlockResponse): _32.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _32.GetLatestBlockResponseAminoMsg): _32.GetLatestBlockResponse;
                    toAminoMsg(message: _32.GetLatestBlockResponse): _32.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _32.GetLatestBlockResponseProtoMsg): _32.GetLatestBlockResponse;
                    toProto(message: _32.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _32.GetLatestBlockResponse): _32.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _32.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetSyncingRequest;
                    fromJSON(_: any): _32.GetSyncingRequest;
                    toJSON(_: _32.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_32.GetSyncingRequest>): _32.GetSyncingRequest;
                    fromAmino(_: _32.GetSyncingRequestAmino): _32.GetSyncingRequest;
                    toAmino(_: _32.GetSyncingRequest): _32.GetSyncingRequestAmino;
                    fromAminoMsg(object: _32.GetSyncingRequestAminoMsg): _32.GetSyncingRequest;
                    toAminoMsg(message: _32.GetSyncingRequest): _32.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _32.GetSyncingRequestProtoMsg): _32.GetSyncingRequest;
                    toProto(message: _32.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _32.GetSyncingRequest): _32.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _32.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetSyncingResponse;
                    fromJSON(object: any): _32.GetSyncingResponse;
                    toJSON(message: _32.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_32.GetSyncingResponse>): _32.GetSyncingResponse;
                    fromAmino(object: _32.GetSyncingResponseAmino): _32.GetSyncingResponse;
                    toAmino(message: _32.GetSyncingResponse): _32.GetSyncingResponseAmino;
                    fromAminoMsg(object: _32.GetSyncingResponseAminoMsg): _32.GetSyncingResponse;
                    toAminoMsg(message: _32.GetSyncingResponse): _32.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _32.GetSyncingResponseProtoMsg): _32.GetSyncingResponse;
                    toProto(message: _32.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _32.GetSyncingResponse): _32.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _32.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetNodeInfoRequest;
                    fromJSON(_: any): _32.GetNodeInfoRequest;
                    toJSON(_: _32.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_32.GetNodeInfoRequest>): _32.GetNodeInfoRequest;
                    fromAmino(_: _32.GetNodeInfoRequestAmino): _32.GetNodeInfoRequest;
                    toAmino(_: _32.GetNodeInfoRequest): _32.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _32.GetNodeInfoRequestAminoMsg): _32.GetNodeInfoRequest;
                    toAminoMsg(message: _32.GetNodeInfoRequest): _32.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _32.GetNodeInfoRequestProtoMsg): _32.GetNodeInfoRequest;
                    toProto(message: _32.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _32.GetNodeInfoRequest): _32.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _32.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetNodeInfoResponse;
                    fromJSON(object: any): _32.GetNodeInfoResponse;
                    toJSON(message: _32.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_32.GetNodeInfoResponse>): _32.GetNodeInfoResponse;
                    fromAmino(object: _32.GetNodeInfoResponseAmino): _32.GetNodeInfoResponse;
                    toAmino(message: _32.GetNodeInfoResponse): _32.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _32.GetNodeInfoResponseAminoMsg): _32.GetNodeInfoResponse;
                    toAminoMsg(message: _32.GetNodeInfoResponse): _32.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _32.GetNodeInfoResponseProtoMsg): _32.GetNodeInfoResponse;
                    toProto(message: _32.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _32.GetNodeInfoResponse): _32.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _32.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.VersionInfo;
                    fromJSON(object: any): _32.VersionInfo;
                    toJSON(message: _32.VersionInfo): unknown;
                    fromPartial(object: Partial<_32.VersionInfo>): _32.VersionInfo;
                    fromAmino(object: _32.VersionInfoAmino): _32.VersionInfo;
                    toAmino(message: _32.VersionInfo): _32.VersionInfoAmino;
                    fromAminoMsg(object: _32.VersionInfoAminoMsg): _32.VersionInfo;
                    toAminoMsg(message: _32.VersionInfo): _32.VersionInfoAminoMsg;
                    fromProtoMsg(message: _32.VersionInfoProtoMsg): _32.VersionInfo;
                    toProto(message: _32.VersionInfo): Uint8Array;
                    toProtoMsg(message: _32.VersionInfo): _32.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _32.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Module;
                    fromJSON(object: any): _32.Module;
                    toJSON(message: _32.Module): unknown;
                    fromPartial(object: Partial<_32.Module>): _32.Module;
                    fromAmino(object: _32.ModuleAmino): _32.Module;
                    toAmino(message: _32.Module): _32.ModuleAmino;
                    fromAminoMsg(object: _32.ModuleAminoMsg): _32.Module;
                    toAminoMsg(message: _32.Module): _32.ModuleAminoMsg;
                    fromProtoMsg(message: _32.ModuleProtoMsg): _32.Module;
                    toProto(message: _32.Module): Uint8Array;
                    toProtoMsg(message: _32.Module): _32.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _33.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Coin;
                fromJSON(object: any): _33.Coin;
                toJSON(message: _33.Coin): unknown;
                fromPartial(object: Partial<_33.Coin>): _33.Coin;
                fromAmino(object: _33.CoinAmino): _33.Coin;
                toAmino(message: _33.Coin): _33.CoinAmino;
                fromAminoMsg(object: _33.CoinAminoMsg): _33.Coin;
                toAminoMsg(message: _33.Coin): _33.CoinAminoMsg;
                fromProtoMsg(message: _33.CoinProtoMsg): _33.Coin;
                toProto(message: _33.Coin): Uint8Array;
                toProtoMsg(message: _33.Coin): _33.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _33.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DecCoin;
                fromJSON(object: any): _33.DecCoin;
                toJSON(message: _33.DecCoin): unknown;
                fromPartial(object: Partial<_33.DecCoin>): _33.DecCoin;
                fromAmino(object: _33.DecCoinAmino): _33.DecCoin;
                toAmino(message: _33.DecCoin): _33.DecCoinAmino;
                fromAminoMsg(object: _33.DecCoinAminoMsg): _33.DecCoin;
                toAminoMsg(message: _33.DecCoin): _33.DecCoinAminoMsg;
                fromProtoMsg(message: _33.DecCoinProtoMsg): _33.DecCoin;
                toProto(message: _33.DecCoin): Uint8Array;
                toProtoMsg(message: _33.DecCoin): _33.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _33.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.IntProto;
                fromJSON(object: any): _33.IntProto;
                toJSON(message: _33.IntProto): unknown;
                fromPartial(object: Partial<_33.IntProto>): _33.IntProto;
                fromAmino(object: _33.IntProtoAmino): _33.IntProto;
                toAmino(message: _33.IntProto): _33.IntProtoAmino;
                fromAminoMsg(object: _33.IntProtoAminoMsg): _33.IntProto;
                toAminoMsg(message: _33.IntProto): _33.IntProtoAminoMsg;
                fromProtoMsg(message: _33.IntProtoProtoMsg): _33.IntProto;
                toProto(message: _33.IntProto): Uint8Array;
                toProtoMsg(message: _33.IntProto): _33.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _33.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DecProto;
                fromJSON(object: any): _33.DecProto;
                toJSON(message: _33.DecProto): unknown;
                fromPartial(object: Partial<_33.DecProto>): _33.DecProto;
                fromAmino(object: _33.DecProtoAmino): _33.DecProto;
                toAmino(message: _33.DecProto): _33.DecProtoAmino;
                fromAminoMsg(object: _33.DecProtoAminoMsg): _33.DecProto;
                toAminoMsg(message: _33.DecProto): _33.DecProtoAminoMsg;
                fromProtoMsg(message: _33.DecProtoProtoMsg): _33.DecProto;
                toProto(message: _33.DecProto): Uint8Array;
                toProtoMsg(message: _33.DecProto): _33.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _35.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.GenesisOwners;
                fromJSON(object: any): _35.GenesisOwners;
                toJSON(message: _35.GenesisOwners): unknown;
                fromPartial(object: Partial<_35.GenesisOwners>): _35.GenesisOwners;
                fromAmino(object: _35.GenesisOwnersAmino): _35.GenesisOwners;
                toAmino(message: _35.GenesisOwners): _35.GenesisOwnersAmino;
                fromAminoMsg(object: _35.GenesisOwnersAminoMsg): _35.GenesisOwners;
                toAminoMsg(message: _35.GenesisOwners): _35.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _35.GenesisOwnersProtoMsg): _35.GenesisOwners;
                toProto(message: _35.GenesisOwners): Uint8Array;
                toProtoMsg(message: _35.GenesisOwners): _35.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _35.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.GenesisState;
                fromJSON(object: any): _35.GenesisState;
                toJSON(message: _35.GenesisState): unknown;
                fromPartial(object: Partial<_35.GenesisState>): _35.GenesisState;
                fromAmino(object: _35.GenesisStateAmino): _35.GenesisState;
                toAmino(message: _35.GenesisState): _35.GenesisStateAmino;
                fromAminoMsg(object: _35.GenesisStateAminoMsg): _35.GenesisState;
                toAminoMsg(message: _35.GenesisState): _35.GenesisStateAminoMsg;
                fromProtoMsg(message: _35.GenesisStateProtoMsg): _35.GenesisState;
                toProto(message: _35.GenesisState): Uint8Array;
                toProtoMsg(message: _35.GenesisState): _35.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _34.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Capability;
                fromJSON(object: any): _34.Capability;
                toJSON(message: _34.Capability): unknown;
                fromPartial(object: Partial<_34.Capability>): _34.Capability;
                fromAmino(object: _34.CapabilityAmino): _34.Capability;
                toAmino(message: _34.Capability): _34.CapabilityAmino;
                fromAminoMsg(object: _34.CapabilityAminoMsg): _34.Capability;
                toAminoMsg(message: _34.Capability): _34.CapabilityAminoMsg;
                fromProtoMsg(message: _34.CapabilityProtoMsg): _34.Capability;
                toProto(message: _34.Capability): Uint8Array;
                toProtoMsg(message: _34.Capability): _34.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _34.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Owner;
                fromJSON(object: any): _34.Owner;
                toJSON(message: _34.Owner): unknown;
                fromPartial(object: Partial<_34.Owner>): _34.Owner;
                fromAmino(object: _34.OwnerAmino): _34.Owner;
                toAmino(message: _34.Owner): _34.OwnerAmino;
                fromAminoMsg(object: _34.OwnerAminoMsg): _34.Owner;
                toAminoMsg(message: _34.Owner): _34.OwnerAminoMsg;
                fromProtoMsg(message: _34.OwnerProtoMsg): _34.Owner;
                toProto(message: _34.Owner): Uint8Array;
                toProtoMsg(message: _34.Owner): _34.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _34.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.CapabilityOwners;
                fromJSON(object: any): _34.CapabilityOwners;
                toJSON(message: _34.CapabilityOwners): unknown;
                fromPartial(object: Partial<_34.CapabilityOwners>): _34.CapabilityOwners;
                fromAmino(object: _34.CapabilityOwnersAmino): _34.CapabilityOwners;
                toAmino(message: _34.CapabilityOwners): _34.CapabilityOwnersAmino;
                fromAminoMsg(object: _34.CapabilityOwnersAminoMsg): _34.CapabilityOwners;
                toAminoMsg(message: _34.CapabilityOwners): _34.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _34.CapabilityOwnersProtoMsg): _34.CapabilityOwners;
                toProto(message: _34.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _34.CapabilityOwners): _34.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _269.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _37.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _37.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _37.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _37.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _37.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _37.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _37.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _37.MsgVerifyInvariant) => _37.MsgVerifyInvariantAmino;
                    fromAmino: (object: _37.MsgVerifyInvariantAmino) => _37.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _37.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgVerifyInvariant;
                fromJSON(object: any): _37.MsgVerifyInvariant;
                toJSON(message: _37.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_37.MsgVerifyInvariant>): _37.MsgVerifyInvariant;
                fromAmino(object: _37.MsgVerifyInvariantAmino): _37.MsgVerifyInvariant;
                toAmino(message: _37.MsgVerifyInvariant): _37.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _37.MsgVerifyInvariantAminoMsg): _37.MsgVerifyInvariant;
                toAminoMsg(message: _37.MsgVerifyInvariant): _37.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _37.MsgVerifyInvariantProtoMsg): _37.MsgVerifyInvariant;
                toProto(message: _37.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _37.MsgVerifyInvariant): _37.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _37.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgVerifyInvariantResponse;
                fromJSON(_: any): _37.MsgVerifyInvariantResponse;
                toJSON(_: _37.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_37.MsgVerifyInvariantResponse>): _37.MsgVerifyInvariantResponse;
                fromAmino(_: _37.MsgVerifyInvariantResponseAmino): _37.MsgVerifyInvariantResponse;
                toAmino(_: _37.MsgVerifyInvariantResponse): _37.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _37.MsgVerifyInvariantResponseAminoMsg): _37.MsgVerifyInvariantResponse;
                toAminoMsg(message: _37.MsgVerifyInvariantResponse): _37.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _37.MsgVerifyInvariantResponseProtoMsg): _37.MsgVerifyInvariantResponse;
                toProto(message: _37.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _37.MsgVerifyInvariantResponse): _37.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _36.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.GenesisState;
                fromJSON(object: any): _36.GenesisState;
                toJSON(message: _36.GenesisState): unknown;
                fromPartial(object: Partial<_36.GenesisState>): _36.GenesisState;
                fromAmino(object: _36.GenesisStateAmino): _36.GenesisState;
                toAmino(message: _36.GenesisState): _36.GenesisStateAmino;
                fromAminoMsg(object: _36.GenesisStateAminoMsg): _36.GenesisState;
                toAminoMsg(message: _36.GenesisState): _36.GenesisStateAminoMsg;
                fromProtoMsg(message: _36.GenesisStateProtoMsg): _36.GenesisState;
                toProto(message: _36.GenesisState): Uint8Array;
                toProtoMsg(message: _36.GenesisState): _36.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _38.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.PubKey;
                fromJSON(object: any): _38.PubKey;
                toJSON(message: _38.PubKey): unknown;
                fromPartial(object: Partial<_38.PubKey>): _38.PubKey;
                fromAmino(object: _38.PubKeyAmino): _38.PubKey;
                toAmino(message: _38.PubKey): _38.PubKeyAmino;
                fromAminoMsg(object: _38.PubKeyAminoMsg): _38.PubKey;
                toAminoMsg(message: _38.PubKey): _38.PubKeyAminoMsg;
                fromProtoMsg(message: _38.PubKeyProtoMsg): _38.PubKey;
                toProto(message: _38.PubKey): Uint8Array;
                toProtoMsg(message: _38.PubKey): _38.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _38.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.PrivKey;
                fromJSON(object: any): _38.PrivKey;
                toJSON(message: _38.PrivKey): unknown;
                fromPartial(object: Partial<_38.PrivKey>): _38.PrivKey;
                fromAmino(object: _38.PrivKeyAmino): _38.PrivKey;
                toAmino(message: _38.PrivKey): _38.PrivKeyAmino;
                fromAminoMsg(object: _38.PrivKeyAminoMsg): _38.PrivKey;
                toAminoMsg(message: _38.PrivKey): _38.PrivKeyAminoMsg;
                fromProtoMsg(message: _38.PrivKeyProtoMsg): _38.PrivKey;
                toProto(message: _38.PrivKey): Uint8Array;
                toProtoMsg(message: _38.PrivKey): _38.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _39.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.BIP44Params;
                    fromJSON(object: any): _39.BIP44Params;
                    toJSON(message: _39.BIP44Params): unknown;
                    fromPartial(object: Partial<_39.BIP44Params>): _39.BIP44Params;
                    fromAmino(object: _39.BIP44ParamsAmino): _39.BIP44Params;
                    toAmino(message: _39.BIP44Params): _39.BIP44ParamsAmino;
                    fromAminoMsg(object: _39.BIP44ParamsAminoMsg): _39.BIP44Params;
                    toAminoMsg(message: _39.BIP44Params): _39.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _39.BIP44ParamsProtoMsg): _39.BIP44Params;
                    toProto(message: _39.BIP44Params): Uint8Array;
                    toProtoMsg(message: _39.BIP44Params): _39.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _40.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Record;
                    fromJSON(object: any): _40.Record;
                    toJSON(message: _40.Record): unknown;
                    fromPartial(object: Partial<_40.Record>): _40.Record;
                    fromAmino(object: _40.RecordAmino): _40.Record;
                    toAmino(message: _40.Record): _40.RecordAmino;
                    fromAminoMsg(object: _40.RecordAminoMsg): _40.Record;
                    toAminoMsg(message: _40.Record): _40.RecordAminoMsg;
                    fromProtoMsg(message: _40.RecordProtoMsg): _40.Record;
                    toProto(message: _40.Record): Uint8Array;
                    toProtoMsg(message: _40.Record): _40.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _40.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Record_Local;
                    fromJSON(object: any): _40.Record_Local;
                    toJSON(message: _40.Record_Local): unknown;
                    fromPartial(object: Partial<_40.Record_Local>): _40.Record_Local;
                    fromAmino(object: _40.Record_LocalAmino): _40.Record_Local;
                    toAmino(message: _40.Record_Local): _40.Record_LocalAmino;
                    fromAminoMsg(object: _40.Record_LocalAminoMsg): _40.Record_Local;
                    toAminoMsg(message: _40.Record_Local): _40.Record_LocalAminoMsg;
                    fromProtoMsg(message: _40.Record_LocalProtoMsg): _40.Record_Local;
                    toProto(message: _40.Record_Local): Uint8Array;
                    toProtoMsg(message: _40.Record_Local): _40.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _40.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Record_Ledger;
                    fromJSON(object: any): _40.Record_Ledger;
                    toJSON(message: _40.Record_Ledger): unknown;
                    fromPartial(object: Partial<_40.Record_Ledger>): _40.Record_Ledger;
                    fromAmino(object: _40.Record_LedgerAmino): _40.Record_Ledger;
                    toAmino(message: _40.Record_Ledger): _40.Record_LedgerAmino;
                    fromAminoMsg(object: _40.Record_LedgerAminoMsg): _40.Record_Ledger;
                    toAminoMsg(message: _40.Record_Ledger): _40.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _40.Record_LedgerProtoMsg): _40.Record_Ledger;
                    toProto(message: _40.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _40.Record_Ledger): _40.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _40.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Record_Multi;
                    fromJSON(_: any): _40.Record_Multi;
                    toJSON(_: _40.Record_Multi): unknown;
                    fromPartial(_: Partial<_40.Record_Multi>): _40.Record_Multi;
                    fromAmino(_: _40.Record_MultiAmino): _40.Record_Multi;
                    toAmino(_: _40.Record_Multi): _40.Record_MultiAmino;
                    fromAminoMsg(object: _40.Record_MultiAminoMsg): _40.Record_Multi;
                    toAminoMsg(message: _40.Record_Multi): _40.Record_MultiAminoMsg;
                    fromProtoMsg(message: _40.Record_MultiProtoMsg): _40.Record_Multi;
                    toProto(message: _40.Record_Multi): Uint8Array;
                    toProtoMsg(message: _40.Record_Multi): _40.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _40.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Record_Offline;
                    fromJSON(_: any): _40.Record_Offline;
                    toJSON(_: _40.Record_Offline): unknown;
                    fromPartial(_: Partial<_40.Record_Offline>): _40.Record_Offline;
                    fromAmino(_: _40.Record_OfflineAmino): _40.Record_Offline;
                    toAmino(_: _40.Record_Offline): _40.Record_OfflineAmino;
                    fromAminoMsg(object: _40.Record_OfflineAminoMsg): _40.Record_Offline;
                    toAminoMsg(message: _40.Record_Offline): _40.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _40.Record_OfflineProtoMsg): _40.Record_Offline;
                    toProto(message: _40.Record_Offline): Uint8Array;
                    toProtoMsg(message: _40.Record_Offline): _40.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _41.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.LegacyAminoPubKey;
                fromJSON(object: any): _41.LegacyAminoPubKey;
                toJSON(message: _41.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_41.LegacyAminoPubKey>): _41.LegacyAminoPubKey;
                fromAmino(object: _41.LegacyAminoPubKeyAmino): _41.LegacyAminoPubKey;
                toAmino(message: _41.LegacyAminoPubKey): _41.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _41.LegacyAminoPubKeyAminoMsg): _41.LegacyAminoPubKey;
                toAminoMsg(message: _41.LegacyAminoPubKey): _41.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _41.LegacyAminoPubKeyProtoMsg): _41.LegacyAminoPubKey;
                toProto(message: _41.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _41.LegacyAminoPubKey): _41.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _42.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.PubKey;
                fromJSON(object: any): _42.PubKey;
                toJSON(message: _42.PubKey): unknown;
                fromPartial(object: Partial<_42.PubKey>): _42.PubKey;
                fromAmino(object: _42.PubKeyAmino): _42.PubKey;
                toAmino(message: _42.PubKey): _42.PubKeyAmino;
                fromAminoMsg(object: _42.PubKeyAminoMsg): _42.PubKey;
                toAminoMsg(message: _42.PubKey): _42.PubKeyAminoMsg;
                fromProtoMsg(message: _42.PubKeyProtoMsg): _42.PubKey;
                toProto(message: _42.PubKey): Uint8Array;
                toProtoMsg(message: _42.PubKey): _42.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _42.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.PrivKey;
                fromJSON(object: any): _42.PrivKey;
                toJSON(message: _42.PrivKey): unknown;
                fromPartial(object: Partial<_42.PrivKey>): _42.PrivKey;
                fromAmino(object: _42.PrivKeyAmino): _42.PrivKey;
                toAmino(message: _42.PrivKey): _42.PrivKeyAmino;
                fromAminoMsg(object: _42.PrivKeyAminoMsg): _42.PrivKey;
                toAminoMsg(message: _42.PrivKey): _42.PrivKeyAminoMsg;
                fromProtoMsg(message: _42.PrivKeyProtoMsg): _42.PrivKey;
                toProto(message: _42.PrivKey): Uint8Array;
                toProtoMsg(message: _42.PrivKey): _42.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _43.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.PubKey;
                fromJSON(object: any): _43.PubKey;
                toJSON(message: _43.PubKey): unknown;
                fromPartial(object: Partial<_43.PubKey>): _43.PubKey;
                fromAmino(object: _43.PubKeyAmino): _43.PubKey;
                toAmino(message: _43.PubKey): _43.PubKeyAmino;
                fromAminoMsg(object: _43.PubKeyAminoMsg): _43.PubKey;
                toAminoMsg(message: _43.PubKey): _43.PubKeyAminoMsg;
                fromProtoMsg(message: _43.PubKeyProtoMsg): _43.PubKey;
                toProto(message: _43.PubKey): Uint8Array;
                toProtoMsg(message: _43.PubKey): _43.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _43.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.PrivKey;
                fromJSON(object: any): _43.PrivKey;
                toJSON(message: _43.PrivKey): unknown;
                fromPartial(object: Partial<_43.PrivKey>): _43.PrivKey;
                fromAmino(object: _43.PrivKeyAmino): _43.PrivKey;
                toAmino(message: _43.PrivKey): _43.PrivKeyAmino;
                fromAminoMsg(object: _43.PrivKeyAminoMsg): _43.PrivKey;
                toAminoMsg(message: _43.PrivKey): _43.PrivKeyAminoMsg;
                fromProtoMsg(message: _43.PrivKeyProtoMsg): _43.PrivKey;
                toProto(message: _43.PrivKey): Uint8Array;
                toProtoMsg(message: _43.PrivKey): _43.PrivKeyProtoMsg;
            };
        };
        const sr25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _44.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.PubKey;
                fromJSON(object: any): _44.PubKey;
                toJSON(message: _44.PubKey): unknown;
                fromPartial(object: Partial<_44.PubKey>): _44.PubKey;
                fromAmino(object: _44.PubKeyAmino): _44.PubKey;
                toAmino(message: _44.PubKey): _44.PubKeyAmino;
                fromAminoMsg(object: _44.PubKeyAminoMsg): _44.PubKey;
                toAminoMsg(message: _44.PubKey): _44.PubKeyAminoMsg;
                fromProtoMsg(message: _44.PubKeyProtoMsg): _44.PubKey;
                toProto(message: _44.PubKey): Uint8Array;
                toProtoMsg(message: _44.PubKey): _44.PubKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _270.MsgClientImpl;
            QueryClientImpl: typeof _253.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _47.QueryParamsRequest): Promise<_47.QueryParamsResponse>;
                validatorOutstandingRewards(request: _47.QueryValidatorOutstandingRewardsRequest): Promise<_47.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _47.QueryValidatorCommissionRequest): Promise<_47.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _47.QueryValidatorSlashesRequest): Promise<_47.QueryValidatorSlashesResponse>;
                delegationRewards(request: _47.QueryDelegationRewardsRequest): Promise<_47.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _47.QueryDelegationTotalRewardsRequest): Promise<_47.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _47.QueryDelegatorValidatorsRequest): Promise<_47.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _47.QueryDelegatorWithdrawAddressRequest): Promise<_47.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _47.QueryCommunityPoolRequest): Promise<_47.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _234.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _48.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _48.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _48.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _48.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _48.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _48.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _48.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _48.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _48.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _48.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _48.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _48.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _48.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _48.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _48.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _48.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _48.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _48.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _48.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _48.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _48.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _48.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _48.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _48.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _48.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _48.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _48.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _48.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _48.MsgSetWithdrawAddress) => _48.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _48.MsgSetWithdrawAddressAmino) => _48.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _48.MsgWithdrawDelegatorReward) => _48.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _48.MsgWithdrawDelegatorRewardAmino) => _48.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _48.MsgWithdrawValidatorCommission) => _48.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _48.MsgWithdrawValidatorCommissionAmino) => _48.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _48.MsgFundCommunityPool) => _48.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _48.MsgFundCommunityPoolAmino) => _48.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _48.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgSetWithdrawAddress;
                fromJSON(object: any): _48.MsgSetWithdrawAddress;
                toJSON(message: _48.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_48.MsgSetWithdrawAddress>): _48.MsgSetWithdrawAddress;
                fromAmino(object: _48.MsgSetWithdrawAddressAmino): _48.MsgSetWithdrawAddress;
                toAmino(message: _48.MsgSetWithdrawAddress): _48.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _48.MsgSetWithdrawAddressAminoMsg): _48.MsgSetWithdrawAddress;
                toAminoMsg(message: _48.MsgSetWithdrawAddress): _48.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _48.MsgSetWithdrawAddressProtoMsg): _48.MsgSetWithdrawAddress;
                toProto(message: _48.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _48.MsgSetWithdrawAddress): _48.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _48.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _48.MsgSetWithdrawAddressResponse;
                toJSON(_: _48.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_48.MsgSetWithdrawAddressResponse>): _48.MsgSetWithdrawAddressResponse;
                fromAmino(_: _48.MsgSetWithdrawAddressResponseAmino): _48.MsgSetWithdrawAddressResponse;
                toAmino(_: _48.MsgSetWithdrawAddressResponse): _48.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _48.MsgSetWithdrawAddressResponseAminoMsg): _48.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _48.MsgSetWithdrawAddressResponse): _48.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _48.MsgSetWithdrawAddressResponseProtoMsg): _48.MsgSetWithdrawAddressResponse;
                toProto(message: _48.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _48.MsgSetWithdrawAddressResponse): _48.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _48.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _48.MsgWithdrawDelegatorReward;
                toJSON(message: _48.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_48.MsgWithdrawDelegatorReward>): _48.MsgWithdrawDelegatorReward;
                fromAmino(object: _48.MsgWithdrawDelegatorRewardAmino): _48.MsgWithdrawDelegatorReward;
                toAmino(message: _48.MsgWithdrawDelegatorReward): _48.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _48.MsgWithdrawDelegatorRewardAminoMsg): _48.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _48.MsgWithdrawDelegatorReward): _48.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _48.MsgWithdrawDelegatorRewardProtoMsg): _48.MsgWithdrawDelegatorReward;
                toProto(message: _48.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _48.MsgWithdrawDelegatorReward): _48.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(_: _48.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgWithdrawDelegatorRewardResponse;
                fromJSON(_: any): _48.MsgWithdrawDelegatorRewardResponse;
                toJSON(_: _48.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(_: Partial<_48.MsgWithdrawDelegatorRewardResponse>): _48.MsgWithdrawDelegatorRewardResponse;
                fromAmino(_: _48.MsgWithdrawDelegatorRewardResponseAmino): _48.MsgWithdrawDelegatorRewardResponse;
                toAmino(_: _48.MsgWithdrawDelegatorRewardResponse): _48.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _48.MsgWithdrawDelegatorRewardResponseAminoMsg): _48.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _48.MsgWithdrawDelegatorRewardResponse): _48.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _48.MsgWithdrawDelegatorRewardResponseProtoMsg): _48.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _48.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _48.MsgWithdrawDelegatorRewardResponse): _48.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _48.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _48.MsgWithdrawValidatorCommission;
                toJSON(message: _48.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_48.MsgWithdrawValidatorCommission>): _48.MsgWithdrawValidatorCommission;
                fromAmino(object: _48.MsgWithdrawValidatorCommissionAmino): _48.MsgWithdrawValidatorCommission;
                toAmino(message: _48.MsgWithdrawValidatorCommission): _48.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _48.MsgWithdrawValidatorCommissionAminoMsg): _48.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _48.MsgWithdrawValidatorCommission): _48.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _48.MsgWithdrawValidatorCommissionProtoMsg): _48.MsgWithdrawValidatorCommission;
                toProto(message: _48.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _48.MsgWithdrawValidatorCommission): _48.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(_: _48.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgWithdrawValidatorCommissionResponse;
                fromJSON(_: any): _48.MsgWithdrawValidatorCommissionResponse;
                toJSON(_: _48.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(_: Partial<_48.MsgWithdrawValidatorCommissionResponse>): _48.MsgWithdrawValidatorCommissionResponse;
                fromAmino(_: _48.MsgWithdrawValidatorCommissionResponseAmino): _48.MsgWithdrawValidatorCommissionResponse;
                toAmino(_: _48.MsgWithdrawValidatorCommissionResponse): _48.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _48.MsgWithdrawValidatorCommissionResponseAminoMsg): _48.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _48.MsgWithdrawValidatorCommissionResponse): _48.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _48.MsgWithdrawValidatorCommissionResponseProtoMsg): _48.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _48.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _48.MsgWithdrawValidatorCommissionResponse): _48.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _48.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgFundCommunityPool;
                fromJSON(object: any): _48.MsgFundCommunityPool;
                toJSON(message: _48.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_48.MsgFundCommunityPool>): _48.MsgFundCommunityPool;
                fromAmino(object: _48.MsgFundCommunityPoolAmino): _48.MsgFundCommunityPool;
                toAmino(message: _48.MsgFundCommunityPool): _48.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _48.MsgFundCommunityPoolAminoMsg): _48.MsgFundCommunityPool;
                toAminoMsg(message: _48.MsgFundCommunityPool): _48.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _48.MsgFundCommunityPoolProtoMsg): _48.MsgFundCommunityPool;
                toProto(message: _48.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _48.MsgFundCommunityPool): _48.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _48.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _48.MsgFundCommunityPoolResponse;
                toJSON(_: _48.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_48.MsgFundCommunityPoolResponse>): _48.MsgFundCommunityPoolResponse;
                fromAmino(_: _48.MsgFundCommunityPoolResponseAmino): _48.MsgFundCommunityPoolResponse;
                toAmino(_: _48.MsgFundCommunityPoolResponse): _48.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _48.MsgFundCommunityPoolResponseAminoMsg): _48.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _48.MsgFundCommunityPoolResponse): _48.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _48.MsgFundCommunityPoolResponseProtoMsg): _48.MsgFundCommunityPoolResponse;
                toProto(message: _48.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _48.MsgFundCommunityPoolResponse): _48.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _47.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryParamsRequest;
                fromJSON(_: any): _47.QueryParamsRequest;
                toJSON(_: _47.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_47.QueryParamsRequest>): _47.QueryParamsRequest;
                fromAmino(_: _47.QueryParamsRequestAmino): _47.QueryParamsRequest;
                toAmino(_: _47.QueryParamsRequest): _47.QueryParamsRequestAmino;
                fromAminoMsg(object: _47.QueryParamsRequestAminoMsg): _47.QueryParamsRequest;
                toAminoMsg(message: _47.QueryParamsRequest): _47.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryParamsRequestProtoMsg): _47.QueryParamsRequest;
                toProto(message: _47.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryParamsRequest): _47.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _47.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryParamsResponse;
                fromJSON(object: any): _47.QueryParamsResponse;
                toJSON(message: _47.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_47.QueryParamsResponse>): _47.QueryParamsResponse;
                fromAmino(object: _47.QueryParamsResponseAmino): _47.QueryParamsResponse;
                toAmino(message: _47.QueryParamsResponse): _47.QueryParamsResponseAmino;
                fromAminoMsg(object: _47.QueryParamsResponseAminoMsg): _47.QueryParamsResponse;
                toAminoMsg(message: _47.QueryParamsResponse): _47.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryParamsResponseProtoMsg): _47.QueryParamsResponse;
                toProto(message: _47.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryParamsResponse): _47.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _47.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _47.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _47.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_47.QueryValidatorOutstandingRewardsRequest>): _47.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _47.QueryValidatorOutstandingRewardsRequestAmino): _47.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _47.QueryValidatorOutstandingRewardsRequest): _47.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _47.QueryValidatorOutstandingRewardsRequestAminoMsg): _47.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _47.QueryValidatorOutstandingRewardsRequest): _47.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryValidatorOutstandingRewardsRequestProtoMsg): _47.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _47.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryValidatorOutstandingRewardsRequest): _47.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _47.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _47.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _47.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_47.QueryValidatorOutstandingRewardsResponse>): _47.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _47.QueryValidatorOutstandingRewardsResponseAmino): _47.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _47.QueryValidatorOutstandingRewardsResponse): _47.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _47.QueryValidatorOutstandingRewardsResponseAminoMsg): _47.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _47.QueryValidatorOutstandingRewardsResponse): _47.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryValidatorOutstandingRewardsResponseProtoMsg): _47.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _47.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryValidatorOutstandingRewardsResponse): _47.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _47.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryValidatorCommissionRequest;
                fromJSON(object: any): _47.QueryValidatorCommissionRequest;
                toJSON(message: _47.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_47.QueryValidatorCommissionRequest>): _47.QueryValidatorCommissionRequest;
                fromAmino(object: _47.QueryValidatorCommissionRequestAmino): _47.QueryValidatorCommissionRequest;
                toAmino(message: _47.QueryValidatorCommissionRequest): _47.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _47.QueryValidatorCommissionRequestAminoMsg): _47.QueryValidatorCommissionRequest;
                toAminoMsg(message: _47.QueryValidatorCommissionRequest): _47.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _47.QueryValidatorCommissionRequestProtoMsg): _47.QueryValidatorCommissionRequest;
                toProto(message: _47.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _47.QueryValidatorCommissionRequest): _47.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _47.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryValidatorCommissionResponse;
                fromJSON(object: any): _47.QueryValidatorCommissionResponse;
                toJSON(message: _47.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_47.QueryValidatorCommissionResponse>): _47.QueryValidatorCommissionResponse;
                fromAmino(object: _47.QueryValidatorCommissionResponseAmino): _47.QueryValidatorCommissionResponse;
                toAmino(message: _47.QueryValidatorCommissionResponse): _47.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _47.QueryValidatorCommissionResponseAminoMsg): _47.QueryValidatorCommissionResponse;
                toAminoMsg(message: _47.QueryValidatorCommissionResponse): _47.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _47.QueryValidatorCommissionResponseProtoMsg): _47.QueryValidatorCommissionResponse;
                toProto(message: _47.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _47.QueryValidatorCommissionResponse): _47.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _47.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryValidatorSlashesRequest;
                fromJSON(object: any): _47.QueryValidatorSlashesRequest;
                toJSON(message: _47.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_47.QueryValidatorSlashesRequest>): _47.QueryValidatorSlashesRequest;
                fromAmino(object: _47.QueryValidatorSlashesRequestAmino): _47.QueryValidatorSlashesRequest;
                toAmino(message: _47.QueryValidatorSlashesRequest): _47.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _47.QueryValidatorSlashesRequestAminoMsg): _47.QueryValidatorSlashesRequest;
                toAminoMsg(message: _47.QueryValidatorSlashesRequest): _47.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _47.QueryValidatorSlashesRequestProtoMsg): _47.QueryValidatorSlashesRequest;
                toProto(message: _47.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _47.QueryValidatorSlashesRequest): _47.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _47.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryValidatorSlashesResponse;
                fromJSON(object: any): _47.QueryValidatorSlashesResponse;
                toJSON(message: _47.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_47.QueryValidatorSlashesResponse>): _47.QueryValidatorSlashesResponse;
                fromAmino(object: _47.QueryValidatorSlashesResponseAmino): _47.QueryValidatorSlashesResponse;
                toAmino(message: _47.QueryValidatorSlashesResponse): _47.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _47.QueryValidatorSlashesResponseAminoMsg): _47.QueryValidatorSlashesResponse;
                toAminoMsg(message: _47.QueryValidatorSlashesResponse): _47.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _47.QueryValidatorSlashesResponseProtoMsg): _47.QueryValidatorSlashesResponse;
                toProto(message: _47.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _47.QueryValidatorSlashesResponse): _47.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _47.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryDelegationRewardsRequest;
                fromJSON(object: any): _47.QueryDelegationRewardsRequest;
                toJSON(message: _47.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_47.QueryDelegationRewardsRequest>): _47.QueryDelegationRewardsRequest;
                fromAmino(object: _47.QueryDelegationRewardsRequestAmino): _47.QueryDelegationRewardsRequest;
                toAmino(message: _47.QueryDelegationRewardsRequest): _47.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _47.QueryDelegationRewardsRequestAminoMsg): _47.QueryDelegationRewardsRequest;
                toAminoMsg(message: _47.QueryDelegationRewardsRequest): _47.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryDelegationRewardsRequestProtoMsg): _47.QueryDelegationRewardsRequest;
                toProto(message: _47.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryDelegationRewardsRequest): _47.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _47.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryDelegationRewardsResponse;
                fromJSON(object: any): _47.QueryDelegationRewardsResponse;
                toJSON(message: _47.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_47.QueryDelegationRewardsResponse>): _47.QueryDelegationRewardsResponse;
                fromAmino(object: _47.QueryDelegationRewardsResponseAmino): _47.QueryDelegationRewardsResponse;
                toAmino(message: _47.QueryDelegationRewardsResponse): _47.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _47.QueryDelegationRewardsResponseAminoMsg): _47.QueryDelegationRewardsResponse;
                toAminoMsg(message: _47.QueryDelegationRewardsResponse): _47.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryDelegationRewardsResponseProtoMsg): _47.QueryDelegationRewardsResponse;
                toProto(message: _47.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryDelegationRewardsResponse): _47.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _47.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _47.QueryDelegationTotalRewardsRequest;
                toJSON(message: _47.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_47.QueryDelegationTotalRewardsRequest>): _47.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _47.QueryDelegationTotalRewardsRequestAmino): _47.QueryDelegationTotalRewardsRequest;
                toAmino(message: _47.QueryDelegationTotalRewardsRequest): _47.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _47.QueryDelegationTotalRewardsRequestAminoMsg): _47.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _47.QueryDelegationTotalRewardsRequest): _47.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryDelegationTotalRewardsRequestProtoMsg): _47.QueryDelegationTotalRewardsRequest;
                toProto(message: _47.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryDelegationTotalRewardsRequest): _47.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _47.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _47.QueryDelegationTotalRewardsResponse;
                toJSON(message: _47.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_47.QueryDelegationTotalRewardsResponse>): _47.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _47.QueryDelegationTotalRewardsResponseAmino): _47.QueryDelegationTotalRewardsResponse;
                toAmino(message: _47.QueryDelegationTotalRewardsResponse): _47.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _47.QueryDelegationTotalRewardsResponseAminoMsg): _47.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _47.QueryDelegationTotalRewardsResponse): _47.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryDelegationTotalRewardsResponseProtoMsg): _47.QueryDelegationTotalRewardsResponse;
                toProto(message: _47.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryDelegationTotalRewardsResponse): _47.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _47.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _47.QueryDelegatorValidatorsRequest;
                toJSON(message: _47.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_47.QueryDelegatorValidatorsRequest>): _47.QueryDelegatorValidatorsRequest;
                fromAmino(object: _47.QueryDelegatorValidatorsRequestAmino): _47.QueryDelegatorValidatorsRequest;
                toAmino(message: _47.QueryDelegatorValidatorsRequest): _47.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _47.QueryDelegatorValidatorsRequestAminoMsg): _47.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _47.QueryDelegatorValidatorsRequest): _47.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryDelegatorValidatorsRequestProtoMsg): _47.QueryDelegatorValidatorsRequest;
                toProto(message: _47.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryDelegatorValidatorsRequest): _47.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _47.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _47.QueryDelegatorValidatorsResponse;
                toJSON(message: _47.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_47.QueryDelegatorValidatorsResponse>): _47.QueryDelegatorValidatorsResponse;
                fromAmino(object: _47.QueryDelegatorValidatorsResponseAmino): _47.QueryDelegatorValidatorsResponse;
                toAmino(message: _47.QueryDelegatorValidatorsResponse): _47.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _47.QueryDelegatorValidatorsResponseAminoMsg): _47.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _47.QueryDelegatorValidatorsResponse): _47.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryDelegatorValidatorsResponseProtoMsg): _47.QueryDelegatorValidatorsResponse;
                toProto(message: _47.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryDelegatorValidatorsResponse): _47.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _47.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _47.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _47.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_47.QueryDelegatorWithdrawAddressRequest>): _47.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _47.QueryDelegatorWithdrawAddressRequestAmino): _47.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _47.QueryDelegatorWithdrawAddressRequest): _47.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _47.QueryDelegatorWithdrawAddressRequestAminoMsg): _47.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _47.QueryDelegatorWithdrawAddressRequest): _47.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _47.QueryDelegatorWithdrawAddressRequestProtoMsg): _47.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _47.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _47.QueryDelegatorWithdrawAddressRequest): _47.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _47.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _47.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _47.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_47.QueryDelegatorWithdrawAddressResponse>): _47.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _47.QueryDelegatorWithdrawAddressResponseAmino): _47.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _47.QueryDelegatorWithdrawAddressResponse): _47.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _47.QueryDelegatorWithdrawAddressResponseAminoMsg): _47.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _47.QueryDelegatorWithdrawAddressResponse): _47.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _47.QueryDelegatorWithdrawAddressResponseProtoMsg): _47.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _47.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _47.QueryDelegatorWithdrawAddressResponse): _47.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _47.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryCommunityPoolRequest;
                fromJSON(_: any): _47.QueryCommunityPoolRequest;
                toJSON(_: _47.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_47.QueryCommunityPoolRequest>): _47.QueryCommunityPoolRequest;
                fromAmino(_: _47.QueryCommunityPoolRequestAmino): _47.QueryCommunityPoolRequest;
                toAmino(_: _47.QueryCommunityPoolRequest): _47.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _47.QueryCommunityPoolRequestAminoMsg): _47.QueryCommunityPoolRequest;
                toAminoMsg(message: _47.QueryCommunityPoolRequest): _47.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _47.QueryCommunityPoolRequestProtoMsg): _47.QueryCommunityPoolRequest;
                toProto(message: _47.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _47.QueryCommunityPoolRequest): _47.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _47.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryCommunityPoolResponse;
                fromJSON(object: any): _47.QueryCommunityPoolResponse;
                toJSON(message: _47.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_47.QueryCommunityPoolResponse>): _47.QueryCommunityPoolResponse;
                fromAmino(object: _47.QueryCommunityPoolResponseAmino): _47.QueryCommunityPoolResponse;
                toAmino(message: _47.QueryCommunityPoolResponse): _47.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _47.QueryCommunityPoolResponseAminoMsg): _47.QueryCommunityPoolResponse;
                toAminoMsg(message: _47.QueryCommunityPoolResponse): _47.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _47.QueryCommunityPoolResponseProtoMsg): _47.QueryCommunityPoolResponse;
                toProto(message: _47.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _47.QueryCommunityPoolResponse): _47.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _46.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.DelegatorWithdrawInfo;
                fromJSON(object: any): _46.DelegatorWithdrawInfo;
                toJSON(message: _46.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_46.DelegatorWithdrawInfo>): _46.DelegatorWithdrawInfo;
                fromAmino(object: _46.DelegatorWithdrawInfoAmino): _46.DelegatorWithdrawInfo;
                toAmino(message: _46.DelegatorWithdrawInfo): _46.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _46.DelegatorWithdrawInfoAminoMsg): _46.DelegatorWithdrawInfo;
                toAminoMsg(message: _46.DelegatorWithdrawInfo): _46.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _46.DelegatorWithdrawInfoProtoMsg): _46.DelegatorWithdrawInfo;
                toProto(message: _46.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _46.DelegatorWithdrawInfo): _46.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _46.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _46.ValidatorOutstandingRewardsRecord;
                toJSON(message: _46.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_46.ValidatorOutstandingRewardsRecord>): _46.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _46.ValidatorOutstandingRewardsRecordAmino): _46.ValidatorOutstandingRewardsRecord;
                toAmino(message: _46.ValidatorOutstandingRewardsRecord): _46.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _46.ValidatorOutstandingRewardsRecordAminoMsg): _46.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _46.ValidatorOutstandingRewardsRecord): _46.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _46.ValidatorOutstandingRewardsRecordProtoMsg): _46.ValidatorOutstandingRewardsRecord;
                toProto(message: _46.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _46.ValidatorOutstandingRewardsRecord): _46.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _46.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _46.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _46.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_46.ValidatorAccumulatedCommissionRecord>): _46.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _46.ValidatorAccumulatedCommissionRecordAmino): _46.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _46.ValidatorAccumulatedCommissionRecord): _46.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _46.ValidatorAccumulatedCommissionRecordAminoMsg): _46.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _46.ValidatorAccumulatedCommissionRecord): _46.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _46.ValidatorAccumulatedCommissionRecordProtoMsg): _46.ValidatorAccumulatedCommissionRecord;
                toProto(message: _46.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _46.ValidatorAccumulatedCommissionRecord): _46.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _46.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _46.ValidatorHistoricalRewardsRecord;
                toJSON(message: _46.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_46.ValidatorHistoricalRewardsRecord>): _46.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _46.ValidatorHistoricalRewardsRecordAmino): _46.ValidatorHistoricalRewardsRecord;
                toAmino(message: _46.ValidatorHistoricalRewardsRecord): _46.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _46.ValidatorHistoricalRewardsRecordAminoMsg): _46.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _46.ValidatorHistoricalRewardsRecord): _46.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _46.ValidatorHistoricalRewardsRecordProtoMsg): _46.ValidatorHistoricalRewardsRecord;
                toProto(message: _46.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _46.ValidatorHistoricalRewardsRecord): _46.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _46.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _46.ValidatorCurrentRewardsRecord;
                toJSON(message: _46.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_46.ValidatorCurrentRewardsRecord>): _46.ValidatorCurrentRewardsRecord;
                fromAmino(object: _46.ValidatorCurrentRewardsRecordAmino): _46.ValidatorCurrentRewardsRecord;
                toAmino(message: _46.ValidatorCurrentRewardsRecord): _46.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _46.ValidatorCurrentRewardsRecordAminoMsg): _46.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _46.ValidatorCurrentRewardsRecord): _46.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _46.ValidatorCurrentRewardsRecordProtoMsg): _46.ValidatorCurrentRewardsRecord;
                toProto(message: _46.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _46.ValidatorCurrentRewardsRecord): _46.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _46.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.DelegatorStartingInfoRecord;
                fromJSON(object: any): _46.DelegatorStartingInfoRecord;
                toJSON(message: _46.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_46.DelegatorStartingInfoRecord>): _46.DelegatorStartingInfoRecord;
                fromAmino(object: _46.DelegatorStartingInfoRecordAmino): _46.DelegatorStartingInfoRecord;
                toAmino(message: _46.DelegatorStartingInfoRecord): _46.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _46.DelegatorStartingInfoRecordAminoMsg): _46.DelegatorStartingInfoRecord;
                toAminoMsg(message: _46.DelegatorStartingInfoRecord): _46.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _46.DelegatorStartingInfoRecordProtoMsg): _46.DelegatorStartingInfoRecord;
                toProto(message: _46.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _46.DelegatorStartingInfoRecord): _46.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _46.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ValidatorSlashEventRecord;
                fromJSON(object: any): _46.ValidatorSlashEventRecord;
                toJSON(message: _46.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_46.ValidatorSlashEventRecord>): _46.ValidatorSlashEventRecord;
                fromAmino(object: _46.ValidatorSlashEventRecordAmino): _46.ValidatorSlashEventRecord;
                toAmino(message: _46.ValidatorSlashEventRecord): _46.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _46.ValidatorSlashEventRecordAminoMsg): _46.ValidatorSlashEventRecord;
                toAminoMsg(message: _46.ValidatorSlashEventRecord): _46.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _46.ValidatorSlashEventRecordProtoMsg): _46.ValidatorSlashEventRecord;
                toProto(message: _46.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _46.ValidatorSlashEventRecord): _46.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GenesisState;
                fromJSON(object: any): _46.GenesisState;
                toJSON(message: _46.GenesisState): unknown;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
                fromAmino(object: _46.GenesisStateAmino): _46.GenesisState;
                toAmino(message: _46.GenesisState): _46.GenesisStateAmino;
                fromAminoMsg(object: _46.GenesisStateAminoMsg): _46.GenesisState;
                toAminoMsg(message: _46.GenesisState): _46.GenesisStateAminoMsg;
                fromProtoMsg(message: _46.GenesisStateProtoMsg): _46.GenesisState;
                toProto(message: _46.GenesisState): Uint8Array;
                toProtoMsg(message: _46.GenesisState): _46.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _45.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Params;
                fromJSON(object: any): _45.Params;
                toJSON(message: _45.Params): unknown;
                fromPartial(object: Partial<_45.Params>): _45.Params;
                fromAmino(object: _45.ParamsAmino): _45.Params;
                toAmino(message: _45.Params): _45.ParamsAmino;
                fromAminoMsg(object: _45.ParamsAminoMsg): _45.Params;
                toAminoMsg(message: _45.Params): _45.ParamsAminoMsg;
                fromProtoMsg(message: _45.ParamsProtoMsg): _45.Params;
                toProto(message: _45.Params): Uint8Array;
                toProtoMsg(message: _45.Params): _45.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _45.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ValidatorHistoricalRewards;
                fromJSON(object: any): _45.ValidatorHistoricalRewards;
                toJSON(message: _45.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_45.ValidatorHistoricalRewards>): _45.ValidatorHistoricalRewards;
                fromAmino(object: _45.ValidatorHistoricalRewardsAmino): _45.ValidatorHistoricalRewards;
                toAmino(message: _45.ValidatorHistoricalRewards): _45.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _45.ValidatorHistoricalRewardsAminoMsg): _45.ValidatorHistoricalRewards;
                toAminoMsg(message: _45.ValidatorHistoricalRewards): _45.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _45.ValidatorHistoricalRewardsProtoMsg): _45.ValidatorHistoricalRewards;
                toProto(message: _45.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _45.ValidatorHistoricalRewards): _45.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _45.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ValidatorCurrentRewards;
                fromJSON(object: any): _45.ValidatorCurrentRewards;
                toJSON(message: _45.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_45.ValidatorCurrentRewards>): _45.ValidatorCurrentRewards;
                fromAmino(object: _45.ValidatorCurrentRewardsAmino): _45.ValidatorCurrentRewards;
                toAmino(message: _45.ValidatorCurrentRewards): _45.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _45.ValidatorCurrentRewardsAminoMsg): _45.ValidatorCurrentRewards;
                toAminoMsg(message: _45.ValidatorCurrentRewards): _45.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _45.ValidatorCurrentRewardsProtoMsg): _45.ValidatorCurrentRewards;
                toProto(message: _45.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _45.ValidatorCurrentRewards): _45.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _45.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ValidatorAccumulatedCommission;
                fromJSON(object: any): _45.ValidatorAccumulatedCommission;
                toJSON(message: _45.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_45.ValidatorAccumulatedCommission>): _45.ValidatorAccumulatedCommission;
                fromAmino(object: _45.ValidatorAccumulatedCommissionAmino): _45.ValidatorAccumulatedCommission;
                toAmino(message: _45.ValidatorAccumulatedCommission): _45.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _45.ValidatorAccumulatedCommissionAminoMsg): _45.ValidatorAccumulatedCommission;
                toAminoMsg(message: _45.ValidatorAccumulatedCommission): _45.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _45.ValidatorAccumulatedCommissionProtoMsg): _45.ValidatorAccumulatedCommission;
                toProto(message: _45.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _45.ValidatorAccumulatedCommission): _45.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _45.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ValidatorOutstandingRewards;
                fromJSON(object: any): _45.ValidatorOutstandingRewards;
                toJSON(message: _45.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_45.ValidatorOutstandingRewards>): _45.ValidatorOutstandingRewards;
                fromAmino(object: _45.ValidatorOutstandingRewardsAmino): _45.ValidatorOutstandingRewards;
                toAmino(message: _45.ValidatorOutstandingRewards): _45.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _45.ValidatorOutstandingRewardsAminoMsg): _45.ValidatorOutstandingRewards;
                toAminoMsg(message: _45.ValidatorOutstandingRewards): _45.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _45.ValidatorOutstandingRewardsProtoMsg): _45.ValidatorOutstandingRewards;
                toProto(message: _45.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _45.ValidatorOutstandingRewards): _45.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _45.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ValidatorSlashEvent;
                fromJSON(object: any): _45.ValidatorSlashEvent;
                toJSON(message: _45.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_45.ValidatorSlashEvent>): _45.ValidatorSlashEvent;
                fromAmino(object: _45.ValidatorSlashEventAmino): _45.ValidatorSlashEvent;
                toAmino(message: _45.ValidatorSlashEvent): _45.ValidatorSlashEventAmino;
                fromAminoMsg(object: _45.ValidatorSlashEventAminoMsg): _45.ValidatorSlashEvent;
                toAminoMsg(message: _45.ValidatorSlashEvent): _45.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _45.ValidatorSlashEventProtoMsg): _45.ValidatorSlashEvent;
                toProto(message: _45.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _45.ValidatorSlashEvent): _45.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _45.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ValidatorSlashEvents;
                fromJSON(object: any): _45.ValidatorSlashEvents;
                toJSON(message: _45.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_45.ValidatorSlashEvents>): _45.ValidatorSlashEvents;
                fromAmino(object: _45.ValidatorSlashEventsAmino): _45.ValidatorSlashEvents;
                toAmino(message: _45.ValidatorSlashEvents): _45.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _45.ValidatorSlashEventsAminoMsg): _45.ValidatorSlashEvents;
                toAminoMsg(message: _45.ValidatorSlashEvents): _45.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _45.ValidatorSlashEventsProtoMsg): _45.ValidatorSlashEvents;
                toProto(message: _45.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _45.ValidatorSlashEvents): _45.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _45.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.FeePool;
                fromJSON(object: any): _45.FeePool;
                toJSON(message: _45.FeePool): unknown;
                fromPartial(object: Partial<_45.FeePool>): _45.FeePool;
                fromAmino(object: _45.FeePoolAmino): _45.FeePool;
                toAmino(message: _45.FeePool): _45.FeePoolAmino;
                fromAminoMsg(object: _45.FeePoolAminoMsg): _45.FeePool;
                toAminoMsg(message: _45.FeePool): _45.FeePoolAminoMsg;
                fromProtoMsg(message: _45.FeePoolProtoMsg): _45.FeePool;
                toProto(message: _45.FeePool): Uint8Array;
                toProtoMsg(message: _45.FeePool): _45.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _45.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.CommunityPoolSpendProposal;
                fromJSON(object: any): _45.CommunityPoolSpendProposal;
                toJSON(message: _45.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_45.CommunityPoolSpendProposal>): _45.CommunityPoolSpendProposal;
                fromAmino(object: _45.CommunityPoolSpendProposalAmino): _45.CommunityPoolSpendProposal;
                toAmino(message: _45.CommunityPoolSpendProposal): _45.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _45.CommunityPoolSpendProposalAminoMsg): _45.CommunityPoolSpendProposal;
                toAminoMsg(message: _45.CommunityPoolSpendProposal): _45.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _45.CommunityPoolSpendProposalProtoMsg): _45.CommunityPoolSpendProposal;
                toProto(message: _45.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _45.CommunityPoolSpendProposal): _45.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _45.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.DelegatorStartingInfo;
                fromJSON(object: any): _45.DelegatorStartingInfo;
                toJSON(message: _45.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_45.DelegatorStartingInfo>): _45.DelegatorStartingInfo;
                fromAmino(object: _45.DelegatorStartingInfoAmino): _45.DelegatorStartingInfo;
                toAmino(message: _45.DelegatorStartingInfo): _45.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _45.DelegatorStartingInfoAminoMsg): _45.DelegatorStartingInfo;
                toAminoMsg(message: _45.DelegatorStartingInfo): _45.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _45.DelegatorStartingInfoProtoMsg): _45.DelegatorStartingInfo;
                toProto(message: _45.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _45.DelegatorStartingInfo): _45.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _45.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.DelegationDelegatorReward;
                fromJSON(object: any): _45.DelegationDelegatorReward;
                toJSON(message: _45.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_45.DelegationDelegatorReward>): _45.DelegationDelegatorReward;
                fromAmino(object: _45.DelegationDelegatorRewardAmino): _45.DelegationDelegatorReward;
                toAmino(message: _45.DelegationDelegatorReward): _45.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _45.DelegationDelegatorRewardAminoMsg): _45.DelegationDelegatorReward;
                toAminoMsg(message: _45.DelegationDelegatorReward): _45.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _45.DelegationDelegatorRewardProtoMsg): _45.DelegationDelegatorReward;
                toProto(message: _45.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _45.DelegationDelegatorReward): _45.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _45.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _45.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _45.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_45.CommunityPoolSpendProposalWithDeposit>): _45.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _45.CommunityPoolSpendProposalWithDepositAmino): _45.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _45.CommunityPoolSpendProposalWithDeposit): _45.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _45.CommunityPoolSpendProposalWithDepositAminoMsg): _45.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _45.CommunityPoolSpendProposalWithDeposit): _45.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _45.CommunityPoolSpendProposalWithDepositProtoMsg): _45.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _45.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _45.CommunityPoolSpendProposalWithDeposit): _45.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _271.MsgClientImpl;
            QueryClientImpl: typeof _254.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _51.QueryEvidenceRequest): Promise<_51.QueryEvidenceResponse>;
                allEvidence(request?: _51.QueryAllEvidenceRequest): Promise<_51.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _235.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _52.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _52.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _52.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _52.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _52.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _52.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _52.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _52.MsgSubmitEvidence) => _52.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _52.MsgSubmitEvidenceAmino) => _52.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _52.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgSubmitEvidence;
                fromJSON(object: any): _52.MsgSubmitEvidence;
                toJSON(message: _52.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_52.MsgSubmitEvidence>): _52.MsgSubmitEvidence;
                fromAmino(object: _52.MsgSubmitEvidenceAmino): _52.MsgSubmitEvidence;
                toAmino(message: _52.MsgSubmitEvidence): _52.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _52.MsgSubmitEvidenceAminoMsg): _52.MsgSubmitEvidence;
                toAminoMsg(message: _52.MsgSubmitEvidence): _52.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _52.MsgSubmitEvidenceProtoMsg): _52.MsgSubmitEvidence;
                toProto(message: _52.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _52.MsgSubmitEvidence): _52.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _52.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _52.MsgSubmitEvidenceResponse;
                toJSON(message: _52.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_52.MsgSubmitEvidenceResponse>): _52.MsgSubmitEvidenceResponse;
                fromAmino(object: _52.MsgSubmitEvidenceResponseAmino): _52.MsgSubmitEvidenceResponse;
                toAmino(message: _52.MsgSubmitEvidenceResponse): _52.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _52.MsgSubmitEvidenceResponseAminoMsg): _52.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _52.MsgSubmitEvidenceResponse): _52.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _52.MsgSubmitEvidenceResponseProtoMsg): _52.MsgSubmitEvidenceResponse;
                toProto(message: _52.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _52.MsgSubmitEvidenceResponse): _52.MsgSubmitEvidenceResponseProtoMsg;
            };
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _51.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryEvidenceRequest;
                fromJSON(object: any): _51.QueryEvidenceRequest;
                toJSON(message: _51.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_51.QueryEvidenceRequest>): _51.QueryEvidenceRequest;
                fromAmino(object: _51.QueryEvidenceRequestAmino): _51.QueryEvidenceRequest;
                toAmino(message: _51.QueryEvidenceRequest): _51.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _51.QueryEvidenceRequestAminoMsg): _51.QueryEvidenceRequest;
                toAminoMsg(message: _51.QueryEvidenceRequest): _51.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _51.QueryEvidenceRequestProtoMsg): _51.QueryEvidenceRequest;
                toProto(message: _51.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _51.QueryEvidenceRequest): _51.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _51.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryEvidenceResponse;
                fromJSON(object: any): _51.QueryEvidenceResponse;
                toJSON(message: _51.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_51.QueryEvidenceResponse>): _51.QueryEvidenceResponse;
                fromAmino(object: _51.QueryEvidenceResponseAmino): _51.QueryEvidenceResponse;
                toAmino(message: _51.QueryEvidenceResponse): _51.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _51.QueryEvidenceResponseAminoMsg): _51.QueryEvidenceResponse;
                toAminoMsg(message: _51.QueryEvidenceResponse): _51.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _51.QueryEvidenceResponseProtoMsg): _51.QueryEvidenceResponse;
                toProto(message: _51.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _51.QueryEvidenceResponse): _51.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _51.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryAllEvidenceRequest;
                fromJSON(object: any): _51.QueryAllEvidenceRequest;
                toJSON(message: _51.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_51.QueryAllEvidenceRequest>): _51.QueryAllEvidenceRequest;
                fromAmino(object: _51.QueryAllEvidenceRequestAmino): _51.QueryAllEvidenceRequest;
                toAmino(message: _51.QueryAllEvidenceRequest): _51.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _51.QueryAllEvidenceRequestAminoMsg): _51.QueryAllEvidenceRequest;
                toAminoMsg(message: _51.QueryAllEvidenceRequest): _51.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _51.QueryAllEvidenceRequestProtoMsg): _51.QueryAllEvidenceRequest;
                toProto(message: _51.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _51.QueryAllEvidenceRequest): _51.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _51.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryAllEvidenceResponse;
                fromJSON(object: any): _51.QueryAllEvidenceResponse;
                toJSON(message: _51.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_51.QueryAllEvidenceResponse>): _51.QueryAllEvidenceResponse;
                fromAmino(object: _51.QueryAllEvidenceResponseAmino): _51.QueryAllEvidenceResponse;
                toAmino(message: _51.QueryAllEvidenceResponse): _51.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _51.QueryAllEvidenceResponseAminoMsg): _51.QueryAllEvidenceResponse;
                toAminoMsg(message: _51.QueryAllEvidenceResponse): _51.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _51.QueryAllEvidenceResponseProtoMsg): _51.QueryAllEvidenceResponse;
                toProto(message: _51.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _51.QueryAllEvidenceResponse): _51.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GenesisState;
                fromJSON(object: any): _50.GenesisState;
                toJSON(message: _50.GenesisState): unknown;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
                fromAmino(object: _50.GenesisStateAmino): _50.GenesisState;
                toAmino(message: _50.GenesisState): _50.GenesisStateAmino;
                fromAminoMsg(object: _50.GenesisStateAminoMsg): _50.GenesisState;
                toAminoMsg(message: _50.GenesisState): _50.GenesisStateAminoMsg;
                fromProtoMsg(message: _50.GenesisStateProtoMsg): _50.GenesisState;
                toProto(message: _50.GenesisState): Uint8Array;
                toProtoMsg(message: _50.GenesisState): _50.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _49.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Equivocation;
                fromJSON(object: any): _49.Equivocation;
                toJSON(message: _49.Equivocation): unknown;
                fromPartial(object: Partial<_49.Equivocation>): _49.Equivocation;
                fromAmino(object: _49.EquivocationAmino): _49.Equivocation;
                toAmino(message: _49.Equivocation): _49.EquivocationAmino;
                fromAminoMsg(object: _49.EquivocationAminoMsg): _49.Equivocation;
                toAminoMsg(message: _49.Equivocation): _49.EquivocationAminoMsg;
                fromProtoMsg(message: _49.EquivocationProtoMsg): _49.Equivocation;
                toProto(message: _49.Equivocation): Uint8Array;
                toProtoMsg(message: _49.Equivocation): _49.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _272.MsgClientImpl;
            QueryClientImpl: typeof _255.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _55.QueryAllowanceRequest): Promise<_55.QueryAllowanceResponse>;
                allowances(request: _55.QueryAllowancesRequest): Promise<_55.QueryAllowancesResponse>;
                allowancesByGranter(request: _55.QueryAllowancesByGranterRequest): Promise<_55.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _236.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _56.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _56.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _56.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _56.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _56.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _56.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _56.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _56.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _56.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _56.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _56.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _56.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _56.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _56.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _56.MsgGrantAllowance) => _56.MsgGrantAllowanceAmino;
                    fromAmino: (object: _56.MsgGrantAllowanceAmino) => _56.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _56.MsgRevokeAllowance) => _56.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _56.MsgRevokeAllowanceAmino) => _56.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _56.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgGrantAllowance;
                fromJSON(object: any): _56.MsgGrantAllowance;
                toJSON(message: _56.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_56.MsgGrantAllowance>): _56.MsgGrantAllowance;
                fromAmino(object: _56.MsgGrantAllowanceAmino): _56.MsgGrantAllowance;
                toAmino(message: _56.MsgGrantAllowance): _56.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _56.MsgGrantAllowanceAminoMsg): _56.MsgGrantAllowance;
                toAminoMsg(message: _56.MsgGrantAllowance): _56.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _56.MsgGrantAllowanceProtoMsg): _56.MsgGrantAllowance;
                toProto(message: _56.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _56.MsgGrantAllowance): _56.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _56.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgGrantAllowanceResponse;
                fromJSON(_: any): _56.MsgGrantAllowanceResponse;
                toJSON(_: _56.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_56.MsgGrantAllowanceResponse>): _56.MsgGrantAllowanceResponse;
                fromAmino(_: _56.MsgGrantAllowanceResponseAmino): _56.MsgGrantAllowanceResponse;
                toAmino(_: _56.MsgGrantAllowanceResponse): _56.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _56.MsgGrantAllowanceResponseAminoMsg): _56.MsgGrantAllowanceResponse;
                toAminoMsg(message: _56.MsgGrantAllowanceResponse): _56.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _56.MsgGrantAllowanceResponseProtoMsg): _56.MsgGrantAllowanceResponse;
                toProto(message: _56.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _56.MsgGrantAllowanceResponse): _56.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _56.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgRevokeAllowance;
                fromJSON(object: any): _56.MsgRevokeAllowance;
                toJSON(message: _56.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_56.MsgRevokeAllowance>): _56.MsgRevokeAllowance;
                fromAmino(object: _56.MsgRevokeAllowanceAmino): _56.MsgRevokeAllowance;
                toAmino(message: _56.MsgRevokeAllowance): _56.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _56.MsgRevokeAllowanceAminoMsg): _56.MsgRevokeAllowance;
                toAminoMsg(message: _56.MsgRevokeAllowance): _56.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _56.MsgRevokeAllowanceProtoMsg): _56.MsgRevokeAllowance;
                toProto(message: _56.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _56.MsgRevokeAllowance): _56.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _56.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _56.MsgRevokeAllowanceResponse;
                toJSON(_: _56.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_56.MsgRevokeAllowanceResponse>): _56.MsgRevokeAllowanceResponse;
                fromAmino(_: _56.MsgRevokeAllowanceResponseAmino): _56.MsgRevokeAllowanceResponse;
                toAmino(_: _56.MsgRevokeAllowanceResponse): _56.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _56.MsgRevokeAllowanceResponseAminoMsg): _56.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _56.MsgRevokeAllowanceResponse): _56.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _56.MsgRevokeAllowanceResponseProtoMsg): _56.MsgRevokeAllowanceResponse;
                toProto(message: _56.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _56.MsgRevokeAllowanceResponse): _56.MsgRevokeAllowanceResponseProtoMsg;
            };
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _55.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryAllowanceRequest;
                fromJSON(object: any): _55.QueryAllowanceRequest;
                toJSON(message: _55.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_55.QueryAllowanceRequest>): _55.QueryAllowanceRequest;
                fromAmino(object: _55.QueryAllowanceRequestAmino): _55.QueryAllowanceRequest;
                toAmino(message: _55.QueryAllowanceRequest): _55.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _55.QueryAllowanceRequestAminoMsg): _55.QueryAllowanceRequest;
                toAminoMsg(message: _55.QueryAllowanceRequest): _55.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _55.QueryAllowanceRequestProtoMsg): _55.QueryAllowanceRequest;
                toProto(message: _55.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _55.QueryAllowanceRequest): _55.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _55.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryAllowanceResponse;
                fromJSON(object: any): _55.QueryAllowanceResponse;
                toJSON(message: _55.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_55.QueryAllowanceResponse>): _55.QueryAllowanceResponse;
                fromAmino(object: _55.QueryAllowanceResponseAmino): _55.QueryAllowanceResponse;
                toAmino(message: _55.QueryAllowanceResponse): _55.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _55.QueryAllowanceResponseAminoMsg): _55.QueryAllowanceResponse;
                toAminoMsg(message: _55.QueryAllowanceResponse): _55.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _55.QueryAllowanceResponseProtoMsg): _55.QueryAllowanceResponse;
                toProto(message: _55.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _55.QueryAllowanceResponse): _55.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _55.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryAllowancesRequest;
                fromJSON(object: any): _55.QueryAllowancesRequest;
                toJSON(message: _55.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_55.QueryAllowancesRequest>): _55.QueryAllowancesRequest;
                fromAmino(object: _55.QueryAllowancesRequestAmino): _55.QueryAllowancesRequest;
                toAmino(message: _55.QueryAllowancesRequest): _55.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _55.QueryAllowancesRequestAminoMsg): _55.QueryAllowancesRequest;
                toAminoMsg(message: _55.QueryAllowancesRequest): _55.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _55.QueryAllowancesRequestProtoMsg): _55.QueryAllowancesRequest;
                toProto(message: _55.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _55.QueryAllowancesRequest): _55.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _55.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryAllowancesResponse;
                fromJSON(object: any): _55.QueryAllowancesResponse;
                toJSON(message: _55.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_55.QueryAllowancesResponse>): _55.QueryAllowancesResponse;
                fromAmino(object: _55.QueryAllowancesResponseAmino): _55.QueryAllowancesResponse;
                toAmino(message: _55.QueryAllowancesResponse): _55.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _55.QueryAllowancesResponseAminoMsg): _55.QueryAllowancesResponse;
                toAminoMsg(message: _55.QueryAllowancesResponse): _55.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _55.QueryAllowancesResponseProtoMsg): _55.QueryAllowancesResponse;
                toProto(message: _55.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _55.QueryAllowancesResponse): _55.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _55.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _55.QueryAllowancesByGranterRequest;
                toJSON(message: _55.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_55.QueryAllowancesByGranterRequest>): _55.QueryAllowancesByGranterRequest;
                fromAmino(object: _55.QueryAllowancesByGranterRequestAmino): _55.QueryAllowancesByGranterRequest;
                toAmino(message: _55.QueryAllowancesByGranterRequest): _55.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _55.QueryAllowancesByGranterRequestAminoMsg): _55.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _55.QueryAllowancesByGranterRequest): _55.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _55.QueryAllowancesByGranterRequestProtoMsg): _55.QueryAllowancesByGranterRequest;
                toProto(message: _55.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _55.QueryAllowancesByGranterRequest): _55.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _55.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _55.QueryAllowancesByGranterResponse;
                toJSON(message: _55.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_55.QueryAllowancesByGranterResponse>): _55.QueryAllowancesByGranterResponse;
                fromAmino(object: _55.QueryAllowancesByGranterResponseAmino): _55.QueryAllowancesByGranterResponse;
                toAmino(message: _55.QueryAllowancesByGranterResponse): _55.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _55.QueryAllowancesByGranterResponseAminoMsg): _55.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _55.QueryAllowancesByGranterResponse): _55.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _55.QueryAllowancesByGranterResponseProtoMsg): _55.QueryAllowancesByGranterResponse;
                toProto(message: _55.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _55.QueryAllowancesByGranterResponse): _55.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.GenesisState;
                fromJSON(object: any): _54.GenesisState;
                toJSON(message: _54.GenesisState): unknown;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
                fromAmino(object: _54.GenesisStateAmino): _54.GenesisState;
                toAmino(message: _54.GenesisState): _54.GenesisStateAmino;
                fromAminoMsg(object: _54.GenesisStateAminoMsg): _54.GenesisState;
                toAminoMsg(message: _54.GenesisState): _54.GenesisStateAminoMsg;
                fromProtoMsg(message: _54.GenesisStateProtoMsg): _54.GenesisState;
                toProto(message: _54.GenesisState): Uint8Array;
                toProtoMsg(message: _54.GenesisState): _54.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _53.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.BasicAllowance;
                fromJSON(object: any): _53.BasicAllowance;
                toJSON(message: _53.BasicAllowance): unknown;
                fromPartial(object: Partial<_53.BasicAllowance>): _53.BasicAllowance;
                fromAmino(object: _53.BasicAllowanceAmino): _53.BasicAllowance;
                toAmino(message: _53.BasicAllowance): _53.BasicAllowanceAmino;
                fromAminoMsg(object: _53.BasicAllowanceAminoMsg): _53.BasicAllowance;
                toAminoMsg(message: _53.BasicAllowance): _53.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _53.BasicAllowanceProtoMsg): _53.BasicAllowance;
                toProto(message: _53.BasicAllowance): Uint8Array;
                toProtoMsg(message: _53.BasicAllowance): _53.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _53.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.PeriodicAllowance;
                fromJSON(object: any): _53.PeriodicAllowance;
                toJSON(message: _53.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_53.PeriodicAllowance>): _53.PeriodicAllowance;
                fromAmino(object: _53.PeriodicAllowanceAmino): _53.PeriodicAllowance;
                toAmino(message: _53.PeriodicAllowance): _53.PeriodicAllowanceAmino;
                fromAminoMsg(object: _53.PeriodicAllowanceAminoMsg): _53.PeriodicAllowance;
                toAminoMsg(message: _53.PeriodicAllowance): _53.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _53.PeriodicAllowanceProtoMsg): _53.PeriodicAllowance;
                toProto(message: _53.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _53.PeriodicAllowance): _53.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _53.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.AllowedMsgAllowance;
                fromJSON(object: any): _53.AllowedMsgAllowance;
                toJSON(message: _53.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_53.AllowedMsgAllowance>): _53.AllowedMsgAllowance;
                fromAmino(object: _53.AllowedMsgAllowanceAmino): _53.AllowedMsgAllowance;
                toAmino(message: _53.AllowedMsgAllowance): _53.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _53.AllowedMsgAllowanceAminoMsg): _53.AllowedMsgAllowance;
                toAminoMsg(message: _53.AllowedMsgAllowance): _53.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _53.AllowedMsgAllowanceProtoMsg): _53.AllowedMsgAllowance;
                toProto(message: _53.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _53.AllowedMsgAllowance): _53.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _53.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Grant;
                fromJSON(object: any): _53.Grant;
                toJSON(message: _53.Grant): unknown;
                fromPartial(object: Partial<_53.Grant>): _53.Grant;
                fromAmino(object: _53.GrantAmino): _53.Grant;
                toAmino(message: _53.Grant): _53.GrantAmino;
                fromAminoMsg(object: _53.GrantAminoMsg): _53.Grant;
                toAminoMsg(message: _53.Grant): _53.GrantAminoMsg;
                fromProtoMsg(message: _53.GrantProtoMsg): _53.Grant;
                toProto(message: _53.Grant): Uint8Array;
                toProtoMsg(message: _53.Grant): _53.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _57.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.GenesisState;
                fromJSON(object: any): _57.GenesisState;
                toJSON(message: _57.GenesisState): unknown;
                fromPartial(object: Partial<_57.GenesisState>): _57.GenesisState;
                fromAmino(object: _57.GenesisStateAmino): _57.GenesisState;
                toAmino(message: _57.GenesisState): _57.GenesisStateAmino;
                fromAminoMsg(object: _57.GenesisStateAminoMsg): _57.GenesisState;
                toAminoMsg(message: _57.GenesisState): _57.GenesisStateAminoMsg;
                fromProtoMsg(message: _57.GenesisStateProtoMsg): _57.GenesisState;
                toProto(message: _57.GenesisState): Uint8Array;
                toProtoMsg(message: _57.GenesisState): _57.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _273.MsgClientImpl;
            QueryClientImpl: typeof _256.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _60.QueryProposalRequest): Promise<_60.QueryProposalResponse>;
                proposals(request: _60.QueryProposalsRequest): Promise<_60.QueryProposalsResponse>;
                vote(request: _60.QueryVoteRequest): Promise<_60.QueryVoteResponse>;
                votes(request: _60.QueryVotesRequest): Promise<_60.QueryVotesResponse>;
                params(request: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                deposit(request: _60.QueryDepositRequest): Promise<_60.QueryDepositResponse>;
                deposits(request: _60.QueryDepositsRequest): Promise<_60.QueryDepositsResponse>;
                tallyResult(request: _60.QueryTallyResultRequest): Promise<_60.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _237.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _61.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _61.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _61.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _61.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _61.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _61.MsgExecLegacyContent;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: _61.MsgVote;
                    };
                    voteWeighted(value: _61.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _61.MsgVoteWeighted;
                    };
                    deposit(value: _61.MsgDeposit): {
                        typeUrl: string;
                        value: _61.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _61.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _61.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _61.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _61.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _61.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _61.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _61.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _61.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _61.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _61.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _61.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _61.MsgExecLegacyContent;
                    };
                    vote(value: _61.MsgVote): {
                        typeUrl: string;
                        value: _61.MsgVote;
                    };
                    voteWeighted(value: _61.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _61.MsgVoteWeighted;
                    };
                    deposit(value: _61.MsgDeposit): {
                        typeUrl: string;
                        value: _61.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _61.MsgSubmitProposal) => _61.MsgSubmitProposalAmino;
                    fromAmino: (object: _61.MsgSubmitProposalAmino) => _61.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _61.MsgExecLegacyContent) => _61.MsgExecLegacyContentAmino;
                    fromAmino: (object: _61.MsgExecLegacyContentAmino) => _61.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _61.MsgVote) => _61.MsgVoteAmino;
                    fromAmino: (object: _61.MsgVoteAmino) => _61.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _61.MsgVoteWeighted) => _61.MsgVoteWeightedAmino;
                    fromAmino: (object: _61.MsgVoteWeightedAmino) => _61.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _61.MsgDeposit) => _61.MsgDepositAmino;
                    fromAmino: (object: _61.MsgDepositAmino) => _61.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _61.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgSubmitProposal;
                fromJSON(object: any): _61.MsgSubmitProposal;
                toJSON(message: _61.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_61.MsgSubmitProposal>): _61.MsgSubmitProposal;
                fromAmino(object: _61.MsgSubmitProposalAmino): _61.MsgSubmitProposal;
                toAmino(message: _61.MsgSubmitProposal): _61.MsgSubmitProposalAmino;
                fromAminoMsg(object: _61.MsgSubmitProposalAminoMsg): _61.MsgSubmitProposal;
                toAminoMsg(message: _61.MsgSubmitProposal): _61.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _61.MsgSubmitProposalProtoMsg): _61.MsgSubmitProposal;
                toProto(message: _61.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _61.MsgSubmitProposal): _61.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _61.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgSubmitProposalResponse;
                fromJSON(object: any): _61.MsgSubmitProposalResponse;
                toJSON(message: _61.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_61.MsgSubmitProposalResponse>): _61.MsgSubmitProposalResponse;
                fromAmino(object: _61.MsgSubmitProposalResponseAmino): _61.MsgSubmitProposalResponse;
                toAmino(message: _61.MsgSubmitProposalResponse): _61.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _61.MsgSubmitProposalResponseAminoMsg): _61.MsgSubmitProposalResponse;
                toAminoMsg(message: _61.MsgSubmitProposalResponse): _61.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _61.MsgSubmitProposalResponseProtoMsg): _61.MsgSubmitProposalResponse;
                toProto(message: _61.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _61.MsgSubmitProposalResponse): _61.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _61.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgExecLegacyContent;
                fromJSON(object: any): _61.MsgExecLegacyContent;
                toJSON(message: _61.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_61.MsgExecLegacyContent>): _61.MsgExecLegacyContent;
                fromAmino(object: _61.MsgExecLegacyContentAmino): _61.MsgExecLegacyContent;
                toAmino(message: _61.MsgExecLegacyContent): _61.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _61.MsgExecLegacyContentAminoMsg): _61.MsgExecLegacyContent;
                toAminoMsg(message: _61.MsgExecLegacyContent): _61.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _61.MsgExecLegacyContentProtoMsg): _61.MsgExecLegacyContent;
                toProto(message: _61.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _61.MsgExecLegacyContent): _61.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _61.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgExecLegacyContentResponse;
                fromJSON(_: any): _61.MsgExecLegacyContentResponse;
                toJSON(_: _61.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_61.MsgExecLegacyContentResponse>): _61.MsgExecLegacyContentResponse;
                fromAmino(_: _61.MsgExecLegacyContentResponseAmino): _61.MsgExecLegacyContentResponse;
                toAmino(_: _61.MsgExecLegacyContentResponse): _61.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _61.MsgExecLegacyContentResponseAminoMsg): _61.MsgExecLegacyContentResponse;
                toAminoMsg(message: _61.MsgExecLegacyContentResponse): _61.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _61.MsgExecLegacyContentResponseProtoMsg): _61.MsgExecLegacyContentResponse;
                toProto(message: _61.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _61.MsgExecLegacyContentResponse): _61.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _61.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgVote;
                fromJSON(object: any): _61.MsgVote;
                toJSON(message: _61.MsgVote): unknown;
                fromPartial(object: Partial<_61.MsgVote>): _61.MsgVote;
                fromAmino(object: _61.MsgVoteAmino): _61.MsgVote;
                toAmino(message: _61.MsgVote): _61.MsgVoteAmino;
                fromAminoMsg(object: _61.MsgVoteAminoMsg): _61.MsgVote;
                toAminoMsg(message: _61.MsgVote): _61.MsgVoteAminoMsg;
                fromProtoMsg(message: _61.MsgVoteProtoMsg): _61.MsgVote;
                toProto(message: _61.MsgVote): Uint8Array;
                toProtoMsg(message: _61.MsgVote): _61.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _61.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgVoteResponse;
                fromJSON(_: any): _61.MsgVoteResponse;
                toJSON(_: _61.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_61.MsgVoteResponse>): _61.MsgVoteResponse;
                fromAmino(_: _61.MsgVoteResponseAmino): _61.MsgVoteResponse;
                toAmino(_: _61.MsgVoteResponse): _61.MsgVoteResponseAmino;
                fromAminoMsg(object: _61.MsgVoteResponseAminoMsg): _61.MsgVoteResponse;
                toAminoMsg(message: _61.MsgVoteResponse): _61.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _61.MsgVoteResponseProtoMsg): _61.MsgVoteResponse;
                toProto(message: _61.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _61.MsgVoteResponse): _61.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _61.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgVoteWeighted;
                fromJSON(object: any): _61.MsgVoteWeighted;
                toJSON(message: _61.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_61.MsgVoteWeighted>): _61.MsgVoteWeighted;
                fromAmino(object: _61.MsgVoteWeightedAmino): _61.MsgVoteWeighted;
                toAmino(message: _61.MsgVoteWeighted): _61.MsgVoteWeightedAmino;
                fromAminoMsg(object: _61.MsgVoteWeightedAminoMsg): _61.MsgVoteWeighted;
                toAminoMsg(message: _61.MsgVoteWeighted): _61.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _61.MsgVoteWeightedProtoMsg): _61.MsgVoteWeighted;
                toProto(message: _61.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _61.MsgVoteWeighted): _61.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _61.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgVoteWeightedResponse;
                fromJSON(_: any): _61.MsgVoteWeightedResponse;
                toJSON(_: _61.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_61.MsgVoteWeightedResponse>): _61.MsgVoteWeightedResponse;
                fromAmino(_: _61.MsgVoteWeightedResponseAmino): _61.MsgVoteWeightedResponse;
                toAmino(_: _61.MsgVoteWeightedResponse): _61.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _61.MsgVoteWeightedResponseAminoMsg): _61.MsgVoteWeightedResponse;
                toAminoMsg(message: _61.MsgVoteWeightedResponse): _61.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _61.MsgVoteWeightedResponseProtoMsg): _61.MsgVoteWeightedResponse;
                toProto(message: _61.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _61.MsgVoteWeightedResponse): _61.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _61.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgDeposit;
                fromJSON(object: any): _61.MsgDeposit;
                toJSON(message: _61.MsgDeposit): unknown;
                fromPartial(object: Partial<_61.MsgDeposit>): _61.MsgDeposit;
                fromAmino(object: _61.MsgDepositAmino): _61.MsgDeposit;
                toAmino(message: _61.MsgDeposit): _61.MsgDepositAmino;
                fromAminoMsg(object: _61.MsgDepositAminoMsg): _61.MsgDeposit;
                toAminoMsg(message: _61.MsgDeposit): _61.MsgDepositAminoMsg;
                fromProtoMsg(message: _61.MsgDepositProtoMsg): _61.MsgDeposit;
                toProto(message: _61.MsgDeposit): Uint8Array;
                toProtoMsg(message: _61.MsgDeposit): _61.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _61.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.MsgDepositResponse;
                fromJSON(_: any): _61.MsgDepositResponse;
                toJSON(_: _61.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_61.MsgDepositResponse>): _61.MsgDepositResponse;
                fromAmino(_: _61.MsgDepositResponseAmino): _61.MsgDepositResponse;
                toAmino(_: _61.MsgDepositResponse): _61.MsgDepositResponseAmino;
                fromAminoMsg(object: _61.MsgDepositResponseAminoMsg): _61.MsgDepositResponse;
                toAminoMsg(message: _61.MsgDepositResponse): _61.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _61.MsgDepositResponseProtoMsg): _61.MsgDepositResponse;
                toProto(message: _61.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _61.MsgDepositResponse): _61.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _60.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryProposalRequest;
                fromJSON(object: any): _60.QueryProposalRequest;
                toJSON(message: _60.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_60.QueryProposalRequest>): _60.QueryProposalRequest;
                fromAmino(object: _60.QueryProposalRequestAmino): _60.QueryProposalRequest;
                toAmino(message: _60.QueryProposalRequest): _60.QueryProposalRequestAmino;
                fromAminoMsg(object: _60.QueryProposalRequestAminoMsg): _60.QueryProposalRequest;
                toAminoMsg(message: _60.QueryProposalRequest): _60.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _60.QueryProposalRequestProtoMsg): _60.QueryProposalRequest;
                toProto(message: _60.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _60.QueryProposalRequest): _60.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _60.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryProposalResponse;
                fromJSON(object: any): _60.QueryProposalResponse;
                toJSON(message: _60.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_60.QueryProposalResponse>): _60.QueryProposalResponse;
                fromAmino(object: _60.QueryProposalResponseAmino): _60.QueryProposalResponse;
                toAmino(message: _60.QueryProposalResponse): _60.QueryProposalResponseAmino;
                fromAminoMsg(object: _60.QueryProposalResponseAminoMsg): _60.QueryProposalResponse;
                toAminoMsg(message: _60.QueryProposalResponse): _60.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _60.QueryProposalResponseProtoMsg): _60.QueryProposalResponse;
                toProto(message: _60.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _60.QueryProposalResponse): _60.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _60.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryProposalsRequest;
                fromJSON(object: any): _60.QueryProposalsRequest;
                toJSON(message: _60.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_60.QueryProposalsRequest>): _60.QueryProposalsRequest;
                fromAmino(object: _60.QueryProposalsRequestAmino): _60.QueryProposalsRequest;
                toAmino(message: _60.QueryProposalsRequest): _60.QueryProposalsRequestAmino;
                fromAminoMsg(object: _60.QueryProposalsRequestAminoMsg): _60.QueryProposalsRequest;
                toAminoMsg(message: _60.QueryProposalsRequest): _60.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryProposalsRequestProtoMsg): _60.QueryProposalsRequest;
                toProto(message: _60.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryProposalsRequest): _60.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _60.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryProposalsResponse;
                fromJSON(object: any): _60.QueryProposalsResponse;
                toJSON(message: _60.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_60.QueryProposalsResponse>): _60.QueryProposalsResponse;
                fromAmino(object: _60.QueryProposalsResponseAmino): _60.QueryProposalsResponse;
                toAmino(message: _60.QueryProposalsResponse): _60.QueryProposalsResponseAmino;
                fromAminoMsg(object: _60.QueryProposalsResponseAminoMsg): _60.QueryProposalsResponse;
                toAminoMsg(message: _60.QueryProposalsResponse): _60.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryProposalsResponseProtoMsg): _60.QueryProposalsResponse;
                toProto(message: _60.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryProposalsResponse): _60.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _60.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVoteRequest;
                fromJSON(object: any): _60.QueryVoteRequest;
                toJSON(message: _60.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_60.QueryVoteRequest>): _60.QueryVoteRequest;
                fromAmino(object: _60.QueryVoteRequestAmino): _60.QueryVoteRequest;
                toAmino(message: _60.QueryVoteRequest): _60.QueryVoteRequestAmino;
                fromAminoMsg(object: _60.QueryVoteRequestAminoMsg): _60.QueryVoteRequest;
                toAminoMsg(message: _60.QueryVoteRequest): _60.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _60.QueryVoteRequestProtoMsg): _60.QueryVoteRequest;
                toProto(message: _60.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _60.QueryVoteRequest): _60.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _60.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVoteResponse;
                fromJSON(object: any): _60.QueryVoteResponse;
                toJSON(message: _60.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_60.QueryVoteResponse>): _60.QueryVoteResponse;
                fromAmino(object: _60.QueryVoteResponseAmino): _60.QueryVoteResponse;
                toAmino(message: _60.QueryVoteResponse): _60.QueryVoteResponseAmino;
                fromAminoMsg(object: _60.QueryVoteResponseAminoMsg): _60.QueryVoteResponse;
                toAminoMsg(message: _60.QueryVoteResponse): _60.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _60.QueryVoteResponseProtoMsg): _60.QueryVoteResponse;
                toProto(message: _60.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _60.QueryVoteResponse): _60.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _60.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVotesRequest;
                fromJSON(object: any): _60.QueryVotesRequest;
                toJSON(message: _60.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_60.QueryVotesRequest>): _60.QueryVotesRequest;
                fromAmino(object: _60.QueryVotesRequestAmino): _60.QueryVotesRequest;
                toAmino(message: _60.QueryVotesRequest): _60.QueryVotesRequestAmino;
                fromAminoMsg(object: _60.QueryVotesRequestAminoMsg): _60.QueryVotesRequest;
                toAminoMsg(message: _60.QueryVotesRequest): _60.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _60.QueryVotesRequestProtoMsg): _60.QueryVotesRequest;
                toProto(message: _60.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _60.QueryVotesRequest): _60.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _60.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryVotesResponse;
                fromJSON(object: any): _60.QueryVotesResponse;
                toJSON(message: _60.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_60.QueryVotesResponse>): _60.QueryVotesResponse;
                fromAmino(object: _60.QueryVotesResponseAmino): _60.QueryVotesResponse;
                toAmino(message: _60.QueryVotesResponse): _60.QueryVotesResponseAmino;
                fromAminoMsg(object: _60.QueryVotesResponseAminoMsg): _60.QueryVotesResponse;
                toAminoMsg(message: _60.QueryVotesResponse): _60.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _60.QueryVotesResponseProtoMsg): _60.QueryVotesResponse;
                toProto(message: _60.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _60.QueryVotesResponse): _60.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _60.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryParamsRequest;
                fromJSON(object: any): _60.QueryParamsRequest;
                toJSON(message: _60.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_60.QueryParamsRequest>): _60.QueryParamsRequest;
                fromAmino(object: _60.QueryParamsRequestAmino): _60.QueryParamsRequest;
                toAmino(message: _60.QueryParamsRequest): _60.QueryParamsRequestAmino;
                fromAminoMsg(object: _60.QueryParamsRequestAminoMsg): _60.QueryParamsRequest;
                toAminoMsg(message: _60.QueryParamsRequest): _60.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryParamsRequestProtoMsg): _60.QueryParamsRequest;
                toProto(message: _60.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryParamsRequest): _60.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _60.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryParamsResponse;
                fromJSON(object: any): _60.QueryParamsResponse;
                toJSON(message: _60.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_60.QueryParamsResponse>): _60.QueryParamsResponse;
                fromAmino(object: _60.QueryParamsResponseAmino): _60.QueryParamsResponse;
                toAmino(message: _60.QueryParamsResponse): _60.QueryParamsResponseAmino;
                fromAminoMsg(object: _60.QueryParamsResponseAminoMsg): _60.QueryParamsResponse;
                toAminoMsg(message: _60.QueryParamsResponse): _60.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryParamsResponseProtoMsg): _60.QueryParamsResponse;
                toProto(message: _60.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryParamsResponse): _60.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _60.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryDepositRequest;
                fromJSON(object: any): _60.QueryDepositRequest;
                toJSON(message: _60.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_60.QueryDepositRequest>): _60.QueryDepositRequest;
                fromAmino(object: _60.QueryDepositRequestAmino): _60.QueryDepositRequest;
                toAmino(message: _60.QueryDepositRequest): _60.QueryDepositRequestAmino;
                fromAminoMsg(object: _60.QueryDepositRequestAminoMsg): _60.QueryDepositRequest;
                toAminoMsg(message: _60.QueryDepositRequest): _60.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDepositRequestProtoMsg): _60.QueryDepositRequest;
                toProto(message: _60.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDepositRequest): _60.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _60.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryDepositResponse;
                fromJSON(object: any): _60.QueryDepositResponse;
                toJSON(message: _60.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_60.QueryDepositResponse>): _60.QueryDepositResponse;
                fromAmino(object: _60.QueryDepositResponseAmino): _60.QueryDepositResponse;
                toAmino(message: _60.QueryDepositResponse): _60.QueryDepositResponseAmino;
                fromAminoMsg(object: _60.QueryDepositResponseAminoMsg): _60.QueryDepositResponse;
                toAminoMsg(message: _60.QueryDepositResponse): _60.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDepositResponseProtoMsg): _60.QueryDepositResponse;
                toProto(message: _60.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDepositResponse): _60.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _60.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryDepositsRequest;
                fromJSON(object: any): _60.QueryDepositsRequest;
                toJSON(message: _60.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_60.QueryDepositsRequest>): _60.QueryDepositsRequest;
                fromAmino(object: _60.QueryDepositsRequestAmino): _60.QueryDepositsRequest;
                toAmino(message: _60.QueryDepositsRequest): _60.QueryDepositsRequestAmino;
                fromAminoMsg(object: _60.QueryDepositsRequestAminoMsg): _60.QueryDepositsRequest;
                toAminoMsg(message: _60.QueryDepositsRequest): _60.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDepositsRequestProtoMsg): _60.QueryDepositsRequest;
                toProto(message: _60.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDepositsRequest): _60.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _60.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryDepositsResponse;
                fromJSON(object: any): _60.QueryDepositsResponse;
                toJSON(message: _60.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_60.QueryDepositsResponse>): _60.QueryDepositsResponse;
                fromAmino(object: _60.QueryDepositsResponseAmino): _60.QueryDepositsResponse;
                toAmino(message: _60.QueryDepositsResponse): _60.QueryDepositsResponseAmino;
                fromAminoMsg(object: _60.QueryDepositsResponseAminoMsg): _60.QueryDepositsResponse;
                toAminoMsg(message: _60.QueryDepositsResponse): _60.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDepositsResponseProtoMsg): _60.QueryDepositsResponse;
                toProto(message: _60.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDepositsResponse): _60.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _60.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryTallyResultRequest;
                fromJSON(object: any): _60.QueryTallyResultRequest;
                toJSON(message: _60.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_60.QueryTallyResultRequest>): _60.QueryTallyResultRequest;
                fromAmino(object: _60.QueryTallyResultRequestAmino): _60.QueryTallyResultRequest;
                toAmino(message: _60.QueryTallyResultRequest): _60.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _60.QueryTallyResultRequestAminoMsg): _60.QueryTallyResultRequest;
                toAminoMsg(message: _60.QueryTallyResultRequest): _60.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _60.QueryTallyResultRequestProtoMsg): _60.QueryTallyResultRequest;
                toProto(message: _60.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _60.QueryTallyResultRequest): _60.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _60.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryTallyResultResponse;
                fromJSON(object: any): _60.QueryTallyResultResponse;
                toJSON(message: _60.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_60.QueryTallyResultResponse>): _60.QueryTallyResultResponse;
                fromAmino(object: _60.QueryTallyResultResponseAmino): _60.QueryTallyResultResponse;
                toAmino(message: _60.QueryTallyResultResponse): _60.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _60.QueryTallyResultResponseAminoMsg): _60.QueryTallyResultResponse;
                toAminoMsg(message: _60.QueryTallyResultResponse): _60.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _60.QueryTallyResultResponseProtoMsg): _60.QueryTallyResultResponse;
                toProto(message: _60.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _60.QueryTallyResultResponse): _60.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _59.VoteOption;
            voteOptionToJSON(object: _59.VoteOption): string;
            proposalStatusFromJSON(object: any): _59.ProposalStatus;
            proposalStatusToJSON(object: _59.ProposalStatus): string;
            VoteOption: typeof _59.VoteOption;
            VoteOptionSDKType: typeof _59.VoteOption;
            VoteOptionAmino: typeof _59.VoteOption;
            ProposalStatus: typeof _59.ProposalStatus;
            ProposalStatusSDKType: typeof _59.ProposalStatus;
            ProposalStatusAmino: typeof _59.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _59.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.WeightedVoteOption;
                fromJSON(object: any): _59.WeightedVoteOption;
                toJSON(message: _59.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_59.WeightedVoteOption>): _59.WeightedVoteOption;
                fromAmino(object: _59.WeightedVoteOptionAmino): _59.WeightedVoteOption;
                toAmino(message: _59.WeightedVoteOption): _59.WeightedVoteOptionAmino;
                fromAminoMsg(object: _59.WeightedVoteOptionAminoMsg): _59.WeightedVoteOption;
                toAminoMsg(message: _59.WeightedVoteOption): _59.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _59.WeightedVoteOptionProtoMsg): _59.WeightedVoteOption;
                toProto(message: _59.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _59.WeightedVoteOption): _59.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _59.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Deposit;
                fromJSON(object: any): _59.Deposit;
                toJSON(message: _59.Deposit): unknown;
                fromPartial(object: Partial<_59.Deposit>): _59.Deposit;
                fromAmino(object: _59.DepositAmino): _59.Deposit;
                toAmino(message: _59.Deposit): _59.DepositAmino;
                fromAminoMsg(object: _59.DepositAminoMsg): _59.Deposit;
                toAminoMsg(message: _59.Deposit): _59.DepositAminoMsg;
                fromProtoMsg(message: _59.DepositProtoMsg): _59.Deposit;
                toProto(message: _59.Deposit): Uint8Array;
                toProtoMsg(message: _59.Deposit): _59.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _59.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Proposal;
                fromJSON(object: any): _59.Proposal;
                toJSON(message: _59.Proposal): unknown;
                fromPartial(object: Partial<_59.Proposal>): _59.Proposal;
                fromAmino(object: _59.ProposalAmino): _59.Proposal;
                toAmino(message: _59.Proposal): _59.ProposalAmino;
                fromAminoMsg(object: _59.ProposalAminoMsg): _59.Proposal;
                toAminoMsg(message: _59.Proposal): _59.ProposalAminoMsg;
                fromProtoMsg(message: _59.ProposalProtoMsg): _59.Proposal;
                toProto(message: _59.Proposal): Uint8Array;
                toProtoMsg(message: _59.Proposal): _59.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _59.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.TallyResult;
                fromJSON(object: any): _59.TallyResult;
                toJSON(message: _59.TallyResult): unknown;
                fromPartial(object: Partial<_59.TallyResult>): _59.TallyResult;
                fromAmino(object: _59.TallyResultAmino): _59.TallyResult;
                toAmino(message: _59.TallyResult): _59.TallyResultAmino;
                fromAminoMsg(object: _59.TallyResultAminoMsg): _59.TallyResult;
                toAminoMsg(message: _59.TallyResult): _59.TallyResultAminoMsg;
                fromProtoMsg(message: _59.TallyResultProtoMsg): _59.TallyResult;
                toProto(message: _59.TallyResult): Uint8Array;
                toProtoMsg(message: _59.TallyResult): _59.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _59.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Vote;
                fromJSON(object: any): _59.Vote;
                toJSON(message: _59.Vote): unknown;
                fromPartial(object: Partial<_59.Vote>): _59.Vote;
                fromAmino(object: _59.VoteAmino): _59.Vote;
                toAmino(message: _59.Vote): _59.VoteAmino;
                fromAminoMsg(object: _59.VoteAminoMsg): _59.Vote;
                toAminoMsg(message: _59.Vote): _59.VoteAminoMsg;
                fromProtoMsg(message: _59.VoteProtoMsg): _59.Vote;
                toProto(message: _59.Vote): Uint8Array;
                toProtoMsg(message: _59.Vote): _59.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _59.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.DepositParams;
                fromJSON(object: any): _59.DepositParams;
                toJSON(message: _59.DepositParams): unknown;
                fromPartial(object: Partial<_59.DepositParams>): _59.DepositParams;
                fromAmino(object: _59.DepositParamsAmino): _59.DepositParams;
                toAmino(message: _59.DepositParams): _59.DepositParamsAmino;
                fromAminoMsg(object: _59.DepositParamsAminoMsg): _59.DepositParams;
                toAminoMsg(message: _59.DepositParams): _59.DepositParamsAminoMsg;
                fromProtoMsg(message: _59.DepositParamsProtoMsg): _59.DepositParams;
                toProto(message: _59.DepositParams): Uint8Array;
                toProtoMsg(message: _59.DepositParams): _59.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _59.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.VotingParams;
                fromJSON(object: any): _59.VotingParams;
                toJSON(message: _59.VotingParams): unknown;
                fromPartial(object: Partial<_59.VotingParams>): _59.VotingParams;
                fromAmino(object: _59.VotingParamsAmino): _59.VotingParams;
                toAmino(message: _59.VotingParams): _59.VotingParamsAmino;
                fromAminoMsg(object: _59.VotingParamsAminoMsg): _59.VotingParams;
                toAminoMsg(message: _59.VotingParams): _59.VotingParamsAminoMsg;
                fromProtoMsg(message: _59.VotingParamsProtoMsg): _59.VotingParams;
                toProto(message: _59.VotingParams): Uint8Array;
                toProtoMsg(message: _59.VotingParams): _59.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _59.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.TallyParams;
                fromJSON(object: any): _59.TallyParams;
                toJSON(message: _59.TallyParams): unknown;
                fromPartial(object: Partial<_59.TallyParams>): _59.TallyParams;
                fromAmino(object: _59.TallyParamsAmino): _59.TallyParams;
                toAmino(message: _59.TallyParams): _59.TallyParamsAmino;
                fromAminoMsg(object: _59.TallyParamsAminoMsg): _59.TallyParams;
                toAminoMsg(message: _59.TallyParams): _59.TallyParamsAminoMsg;
                fromProtoMsg(message: _59.TallyParamsProtoMsg): _59.TallyParams;
                toProto(message: _59.TallyParams): Uint8Array;
                toProtoMsg(message: _59.TallyParams): _59.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GenesisState;
                fromJSON(object: any): _58.GenesisState;
                toJSON(message: _58.GenesisState): unknown;
                fromPartial(object: Partial<_58.GenesisState>): _58.GenesisState;
                fromAmino(object: _58.GenesisStateAmino): _58.GenesisState;
                toAmino(message: _58.GenesisState): _58.GenesisStateAmino;
                fromAminoMsg(object: _58.GenesisStateAminoMsg): _58.GenesisState;
                toAminoMsg(message: _58.GenesisState): _58.GenesisStateAminoMsg;
                fromProtoMsg(message: _58.GenesisStateProtoMsg): _58.GenesisState;
                toProto(message: _58.GenesisState): Uint8Array;
                toProtoMsg(message: _58.GenesisState): _58.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _274.MsgClientImpl;
            QueryClientImpl: typeof _257.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _64.QueryProposalRequest): Promise<_64.QueryProposalResponse>;
                proposals(request: _64.QueryProposalsRequest): Promise<_64.QueryProposalsResponse>;
                vote(request: _64.QueryVoteRequest): Promise<_64.QueryVoteResponse>;
                votes(request: _64.QueryVotesRequest): Promise<_64.QueryVotesResponse>;
                params(request: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                deposit(request: _64.QueryDepositRequest): Promise<_64.QueryDepositResponse>;
                deposits(request: _64.QueryDepositsRequest): Promise<_64.QueryDepositsResponse>;
                tallyResult(request: _64.QueryTallyResultRequest): Promise<_64.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _238.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _65.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _65.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    voteWeighted(value: _65.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _65.MsgVoteWeighted;
                    };
                    deposit(value: _65.MsgDeposit): {
                        typeUrl: string;
                        value: _65.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _65.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _65.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _65.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _65.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _65.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _65.MsgSubmitProposal;
                    };
                    vote(value: _65.MsgVote): {
                        typeUrl: string;
                        value: _65.MsgVote;
                    };
                    voteWeighted(value: _65.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _65.MsgVoteWeighted;
                    };
                    deposit(value: _65.MsgDeposit): {
                        typeUrl: string;
                        value: _65.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _65.MsgSubmitProposal) => _65.MsgSubmitProposalAmino;
                    fromAmino: (object: _65.MsgSubmitProposalAmino) => _65.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _65.MsgVote) => _65.MsgVoteAmino;
                    fromAmino: (object: _65.MsgVoteAmino) => _65.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _65.MsgVoteWeighted) => _65.MsgVoteWeightedAmino;
                    fromAmino: (object: _65.MsgVoteWeightedAmino) => _65.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _65.MsgDeposit) => _65.MsgDepositAmino;
                    fromAmino: (object: _65.MsgDepositAmino) => _65.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _65.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgSubmitProposal;
                fromJSON(object: any): _65.MsgSubmitProposal;
                toJSON(message: _65.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_65.MsgSubmitProposal>): _65.MsgSubmitProposal;
                fromAmino(object: _65.MsgSubmitProposalAmino): _65.MsgSubmitProposal;
                toAmino(message: _65.MsgSubmitProposal): _65.MsgSubmitProposalAmino;
                fromAminoMsg(object: _65.MsgSubmitProposalAminoMsg): _65.MsgSubmitProposal;
                toAminoMsg(message: _65.MsgSubmitProposal): _65.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _65.MsgSubmitProposalProtoMsg): _65.MsgSubmitProposal;
                toProto(message: _65.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _65.MsgSubmitProposal): _65.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _65.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgSubmitProposalResponse;
                fromJSON(object: any): _65.MsgSubmitProposalResponse;
                toJSON(message: _65.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_65.MsgSubmitProposalResponse>): _65.MsgSubmitProposalResponse;
                fromAmino(object: _65.MsgSubmitProposalResponseAmino): _65.MsgSubmitProposalResponse;
                toAmino(message: _65.MsgSubmitProposalResponse): _65.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _65.MsgSubmitProposalResponseAminoMsg): _65.MsgSubmitProposalResponse;
                toAminoMsg(message: _65.MsgSubmitProposalResponse): _65.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _65.MsgSubmitProposalResponseProtoMsg): _65.MsgSubmitProposalResponse;
                toProto(message: _65.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _65.MsgSubmitProposalResponse): _65.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _65.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgVote;
                fromJSON(object: any): _65.MsgVote;
                toJSON(message: _65.MsgVote): unknown;
                fromPartial(object: Partial<_65.MsgVote>): _65.MsgVote;
                fromAmino(object: _65.MsgVoteAmino): _65.MsgVote;
                toAmino(message: _65.MsgVote): _65.MsgVoteAmino;
                fromAminoMsg(object: _65.MsgVoteAminoMsg): _65.MsgVote;
                toAminoMsg(message: _65.MsgVote): _65.MsgVoteAminoMsg;
                fromProtoMsg(message: _65.MsgVoteProtoMsg): _65.MsgVote;
                toProto(message: _65.MsgVote): Uint8Array;
                toProtoMsg(message: _65.MsgVote): _65.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _65.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgVoteResponse;
                fromJSON(_: any): _65.MsgVoteResponse;
                toJSON(_: _65.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_65.MsgVoteResponse>): _65.MsgVoteResponse;
                fromAmino(_: _65.MsgVoteResponseAmino): _65.MsgVoteResponse;
                toAmino(_: _65.MsgVoteResponse): _65.MsgVoteResponseAmino;
                fromAminoMsg(object: _65.MsgVoteResponseAminoMsg): _65.MsgVoteResponse;
                toAminoMsg(message: _65.MsgVoteResponse): _65.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _65.MsgVoteResponseProtoMsg): _65.MsgVoteResponse;
                toProto(message: _65.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _65.MsgVoteResponse): _65.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _65.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgVoteWeighted;
                fromJSON(object: any): _65.MsgVoteWeighted;
                toJSON(message: _65.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_65.MsgVoteWeighted>): _65.MsgVoteWeighted;
                fromAmino(object: _65.MsgVoteWeightedAmino): _65.MsgVoteWeighted;
                toAmino(message: _65.MsgVoteWeighted): _65.MsgVoteWeightedAmino;
                fromAminoMsg(object: _65.MsgVoteWeightedAminoMsg): _65.MsgVoteWeighted;
                toAminoMsg(message: _65.MsgVoteWeighted): _65.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _65.MsgVoteWeightedProtoMsg): _65.MsgVoteWeighted;
                toProto(message: _65.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _65.MsgVoteWeighted): _65.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _65.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgVoteWeightedResponse;
                fromJSON(_: any): _65.MsgVoteWeightedResponse;
                toJSON(_: _65.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_65.MsgVoteWeightedResponse>): _65.MsgVoteWeightedResponse;
                fromAmino(_: _65.MsgVoteWeightedResponseAmino): _65.MsgVoteWeightedResponse;
                toAmino(_: _65.MsgVoteWeightedResponse): _65.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _65.MsgVoteWeightedResponseAminoMsg): _65.MsgVoteWeightedResponse;
                toAminoMsg(message: _65.MsgVoteWeightedResponse): _65.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _65.MsgVoteWeightedResponseProtoMsg): _65.MsgVoteWeightedResponse;
                toProto(message: _65.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _65.MsgVoteWeightedResponse): _65.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _65.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgDeposit;
                fromJSON(object: any): _65.MsgDeposit;
                toJSON(message: _65.MsgDeposit): unknown;
                fromPartial(object: Partial<_65.MsgDeposit>): _65.MsgDeposit;
                fromAmino(object: _65.MsgDepositAmino): _65.MsgDeposit;
                toAmino(message: _65.MsgDeposit): _65.MsgDepositAmino;
                fromAminoMsg(object: _65.MsgDepositAminoMsg): _65.MsgDeposit;
                toAminoMsg(message: _65.MsgDeposit): _65.MsgDepositAminoMsg;
                fromProtoMsg(message: _65.MsgDepositProtoMsg): _65.MsgDeposit;
                toProto(message: _65.MsgDeposit): Uint8Array;
                toProtoMsg(message: _65.MsgDeposit): _65.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _65.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgDepositResponse;
                fromJSON(_: any): _65.MsgDepositResponse;
                toJSON(_: _65.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_65.MsgDepositResponse>): _65.MsgDepositResponse;
                fromAmino(_: _65.MsgDepositResponseAmino): _65.MsgDepositResponse;
                toAmino(_: _65.MsgDepositResponse): _65.MsgDepositResponseAmino;
                fromAminoMsg(object: _65.MsgDepositResponseAminoMsg): _65.MsgDepositResponse;
                toAminoMsg(message: _65.MsgDepositResponse): _65.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _65.MsgDepositResponseProtoMsg): _65.MsgDepositResponse;
                toProto(message: _65.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _65.MsgDepositResponse): _65.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _64.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryProposalRequest;
                fromJSON(object: any): _64.QueryProposalRequest;
                toJSON(message: _64.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_64.QueryProposalRequest>): _64.QueryProposalRequest;
                fromAmino(object: _64.QueryProposalRequestAmino): _64.QueryProposalRequest;
                toAmino(message: _64.QueryProposalRequest): _64.QueryProposalRequestAmino;
                fromAminoMsg(object: _64.QueryProposalRequestAminoMsg): _64.QueryProposalRequest;
                toAminoMsg(message: _64.QueryProposalRequest): _64.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _64.QueryProposalRequestProtoMsg): _64.QueryProposalRequest;
                toProto(message: _64.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _64.QueryProposalRequest): _64.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _64.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryProposalResponse;
                fromJSON(object: any): _64.QueryProposalResponse;
                toJSON(message: _64.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_64.QueryProposalResponse>): _64.QueryProposalResponse;
                fromAmino(object: _64.QueryProposalResponseAmino): _64.QueryProposalResponse;
                toAmino(message: _64.QueryProposalResponse): _64.QueryProposalResponseAmino;
                fromAminoMsg(object: _64.QueryProposalResponseAminoMsg): _64.QueryProposalResponse;
                toAminoMsg(message: _64.QueryProposalResponse): _64.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _64.QueryProposalResponseProtoMsg): _64.QueryProposalResponse;
                toProto(message: _64.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _64.QueryProposalResponse): _64.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _64.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryProposalsRequest;
                fromJSON(object: any): _64.QueryProposalsRequest;
                toJSON(message: _64.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_64.QueryProposalsRequest>): _64.QueryProposalsRequest;
                fromAmino(object: _64.QueryProposalsRequestAmino): _64.QueryProposalsRequest;
                toAmino(message: _64.QueryProposalsRequest): _64.QueryProposalsRequestAmino;
                fromAminoMsg(object: _64.QueryProposalsRequestAminoMsg): _64.QueryProposalsRequest;
                toAminoMsg(message: _64.QueryProposalsRequest): _64.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryProposalsRequestProtoMsg): _64.QueryProposalsRequest;
                toProto(message: _64.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryProposalsRequest): _64.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _64.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryProposalsResponse;
                fromJSON(object: any): _64.QueryProposalsResponse;
                toJSON(message: _64.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_64.QueryProposalsResponse>): _64.QueryProposalsResponse;
                fromAmino(object: _64.QueryProposalsResponseAmino): _64.QueryProposalsResponse;
                toAmino(message: _64.QueryProposalsResponse): _64.QueryProposalsResponseAmino;
                fromAminoMsg(object: _64.QueryProposalsResponseAminoMsg): _64.QueryProposalsResponse;
                toAminoMsg(message: _64.QueryProposalsResponse): _64.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryProposalsResponseProtoMsg): _64.QueryProposalsResponse;
                toProto(message: _64.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryProposalsResponse): _64.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _64.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryVoteRequest;
                fromJSON(object: any): _64.QueryVoteRequest;
                toJSON(message: _64.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_64.QueryVoteRequest>): _64.QueryVoteRequest;
                fromAmino(object: _64.QueryVoteRequestAmino): _64.QueryVoteRequest;
                toAmino(message: _64.QueryVoteRequest): _64.QueryVoteRequestAmino;
                fromAminoMsg(object: _64.QueryVoteRequestAminoMsg): _64.QueryVoteRequest;
                toAminoMsg(message: _64.QueryVoteRequest): _64.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _64.QueryVoteRequestProtoMsg): _64.QueryVoteRequest;
                toProto(message: _64.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _64.QueryVoteRequest): _64.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _64.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryVoteResponse;
                fromJSON(object: any): _64.QueryVoteResponse;
                toJSON(message: _64.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_64.QueryVoteResponse>): _64.QueryVoteResponse;
                fromAmino(object: _64.QueryVoteResponseAmino): _64.QueryVoteResponse;
                toAmino(message: _64.QueryVoteResponse): _64.QueryVoteResponseAmino;
                fromAminoMsg(object: _64.QueryVoteResponseAminoMsg): _64.QueryVoteResponse;
                toAminoMsg(message: _64.QueryVoteResponse): _64.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _64.QueryVoteResponseProtoMsg): _64.QueryVoteResponse;
                toProto(message: _64.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _64.QueryVoteResponse): _64.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _64.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryVotesRequest;
                fromJSON(object: any): _64.QueryVotesRequest;
                toJSON(message: _64.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_64.QueryVotesRequest>): _64.QueryVotesRequest;
                fromAmino(object: _64.QueryVotesRequestAmino): _64.QueryVotesRequest;
                toAmino(message: _64.QueryVotesRequest): _64.QueryVotesRequestAmino;
                fromAminoMsg(object: _64.QueryVotesRequestAminoMsg): _64.QueryVotesRequest;
                toAminoMsg(message: _64.QueryVotesRequest): _64.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _64.QueryVotesRequestProtoMsg): _64.QueryVotesRequest;
                toProto(message: _64.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _64.QueryVotesRequest): _64.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _64.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryVotesResponse;
                fromJSON(object: any): _64.QueryVotesResponse;
                toJSON(message: _64.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_64.QueryVotesResponse>): _64.QueryVotesResponse;
                fromAmino(object: _64.QueryVotesResponseAmino): _64.QueryVotesResponse;
                toAmino(message: _64.QueryVotesResponse): _64.QueryVotesResponseAmino;
                fromAminoMsg(object: _64.QueryVotesResponseAminoMsg): _64.QueryVotesResponse;
                toAminoMsg(message: _64.QueryVotesResponse): _64.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _64.QueryVotesResponseProtoMsg): _64.QueryVotesResponse;
                toProto(message: _64.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _64.QueryVotesResponse): _64.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _64.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryParamsRequest;
                fromJSON(object: any): _64.QueryParamsRequest;
                toJSON(message: _64.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_64.QueryParamsRequest>): _64.QueryParamsRequest;
                fromAmino(object: _64.QueryParamsRequestAmino): _64.QueryParamsRequest;
                toAmino(message: _64.QueryParamsRequest): _64.QueryParamsRequestAmino;
                fromAminoMsg(object: _64.QueryParamsRequestAminoMsg): _64.QueryParamsRequest;
                toAminoMsg(message: _64.QueryParamsRequest): _64.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryParamsRequestProtoMsg): _64.QueryParamsRequest;
                toProto(message: _64.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryParamsRequest): _64.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _64.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryParamsResponse;
                fromJSON(object: any): _64.QueryParamsResponse;
                toJSON(message: _64.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_64.QueryParamsResponse>): _64.QueryParamsResponse;
                fromAmino(object: _64.QueryParamsResponseAmino): _64.QueryParamsResponse;
                toAmino(message: _64.QueryParamsResponse): _64.QueryParamsResponseAmino;
                fromAminoMsg(object: _64.QueryParamsResponseAminoMsg): _64.QueryParamsResponse;
                toAminoMsg(message: _64.QueryParamsResponse): _64.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryParamsResponseProtoMsg): _64.QueryParamsResponse;
                toProto(message: _64.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryParamsResponse): _64.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _64.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDepositRequest;
                fromJSON(object: any): _64.QueryDepositRequest;
                toJSON(message: _64.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_64.QueryDepositRequest>): _64.QueryDepositRequest;
                fromAmino(object: _64.QueryDepositRequestAmino): _64.QueryDepositRequest;
                toAmino(message: _64.QueryDepositRequest): _64.QueryDepositRequestAmino;
                fromAminoMsg(object: _64.QueryDepositRequestAminoMsg): _64.QueryDepositRequest;
                toAminoMsg(message: _64.QueryDepositRequest): _64.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDepositRequestProtoMsg): _64.QueryDepositRequest;
                toProto(message: _64.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDepositRequest): _64.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _64.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDepositResponse;
                fromJSON(object: any): _64.QueryDepositResponse;
                toJSON(message: _64.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_64.QueryDepositResponse>): _64.QueryDepositResponse;
                fromAmino(object: _64.QueryDepositResponseAmino): _64.QueryDepositResponse;
                toAmino(message: _64.QueryDepositResponse): _64.QueryDepositResponseAmino;
                fromAminoMsg(object: _64.QueryDepositResponseAminoMsg): _64.QueryDepositResponse;
                toAminoMsg(message: _64.QueryDepositResponse): _64.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDepositResponseProtoMsg): _64.QueryDepositResponse;
                toProto(message: _64.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDepositResponse): _64.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _64.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDepositsRequest;
                fromJSON(object: any): _64.QueryDepositsRequest;
                toJSON(message: _64.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_64.QueryDepositsRequest>): _64.QueryDepositsRequest;
                fromAmino(object: _64.QueryDepositsRequestAmino): _64.QueryDepositsRequest;
                toAmino(message: _64.QueryDepositsRequest): _64.QueryDepositsRequestAmino;
                fromAminoMsg(object: _64.QueryDepositsRequestAminoMsg): _64.QueryDepositsRequest;
                toAminoMsg(message: _64.QueryDepositsRequest): _64.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDepositsRequestProtoMsg): _64.QueryDepositsRequest;
                toProto(message: _64.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDepositsRequest): _64.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _64.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryDepositsResponse;
                fromJSON(object: any): _64.QueryDepositsResponse;
                toJSON(message: _64.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_64.QueryDepositsResponse>): _64.QueryDepositsResponse;
                fromAmino(object: _64.QueryDepositsResponseAmino): _64.QueryDepositsResponse;
                toAmino(message: _64.QueryDepositsResponse): _64.QueryDepositsResponseAmino;
                fromAminoMsg(object: _64.QueryDepositsResponseAminoMsg): _64.QueryDepositsResponse;
                toAminoMsg(message: _64.QueryDepositsResponse): _64.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDepositsResponseProtoMsg): _64.QueryDepositsResponse;
                toProto(message: _64.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDepositsResponse): _64.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _64.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryTallyResultRequest;
                fromJSON(object: any): _64.QueryTallyResultRequest;
                toJSON(message: _64.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_64.QueryTallyResultRequest>): _64.QueryTallyResultRequest;
                fromAmino(object: _64.QueryTallyResultRequestAmino): _64.QueryTallyResultRequest;
                toAmino(message: _64.QueryTallyResultRequest): _64.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _64.QueryTallyResultRequestAminoMsg): _64.QueryTallyResultRequest;
                toAminoMsg(message: _64.QueryTallyResultRequest): _64.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _64.QueryTallyResultRequestProtoMsg): _64.QueryTallyResultRequest;
                toProto(message: _64.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _64.QueryTallyResultRequest): _64.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _64.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryTallyResultResponse;
                fromJSON(object: any): _64.QueryTallyResultResponse;
                toJSON(message: _64.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_64.QueryTallyResultResponse>): _64.QueryTallyResultResponse;
                fromAmino(object: _64.QueryTallyResultResponseAmino): _64.QueryTallyResultResponse;
                toAmino(message: _64.QueryTallyResultResponse): _64.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _64.QueryTallyResultResponseAminoMsg): _64.QueryTallyResultResponse;
                toAminoMsg(message: _64.QueryTallyResultResponse): _64.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _64.QueryTallyResultResponseProtoMsg): _64.QueryTallyResultResponse;
                toProto(message: _64.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _64.QueryTallyResultResponse): _64.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _63.VoteOption;
            voteOptionToJSON(object: _63.VoteOption): string;
            proposalStatusFromJSON(object: any): _63.ProposalStatus;
            proposalStatusToJSON(object: _63.ProposalStatus): string;
            VoteOption: typeof _63.VoteOption;
            VoteOptionSDKType: typeof _63.VoteOption;
            VoteOptionAmino: typeof _63.VoteOption;
            ProposalStatus: typeof _63.ProposalStatus;
            ProposalStatusSDKType: typeof _63.ProposalStatus;
            ProposalStatusAmino: typeof _63.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _63.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.WeightedVoteOption;
                fromJSON(object: any): _63.WeightedVoteOption;
                toJSON(message: _63.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_63.WeightedVoteOption>): _63.WeightedVoteOption;
                fromAmino(object: _63.WeightedVoteOptionAmino): _63.WeightedVoteOption;
                toAmino(message: _63.WeightedVoteOption): _63.WeightedVoteOptionAmino;
                fromAminoMsg(object: _63.WeightedVoteOptionAminoMsg): _63.WeightedVoteOption;
                toAminoMsg(message: _63.WeightedVoteOption): _63.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _63.WeightedVoteOptionProtoMsg): _63.WeightedVoteOption;
                toProto(message: _63.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _63.WeightedVoteOption): _63.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _63.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.TextProposal;
                fromJSON(object: any): _63.TextProposal;
                toJSON(message: _63.TextProposal): unknown;
                fromPartial(object: Partial<_63.TextProposal>): _63.TextProposal;
                fromAmino(object: _63.TextProposalAmino): _63.TextProposal;
                toAmino(message: _63.TextProposal): _63.TextProposalAmino;
                fromAminoMsg(object: _63.TextProposalAminoMsg): _63.TextProposal;
                toAminoMsg(message: _63.TextProposal): _63.TextProposalAminoMsg;
                fromProtoMsg(message: _63.TextProposalProtoMsg): _63.TextProposal;
                toProto(message: _63.TextProposal): Uint8Array;
                toProtoMsg(message: _63.TextProposal): _63.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _63.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Deposit;
                fromJSON(object: any): _63.Deposit;
                toJSON(message: _63.Deposit): unknown;
                fromPartial(object: Partial<_63.Deposit>): _63.Deposit;
                fromAmino(object: _63.DepositAmino): _63.Deposit;
                toAmino(message: _63.Deposit): _63.DepositAmino;
                fromAminoMsg(object: _63.DepositAminoMsg): _63.Deposit;
                toAminoMsg(message: _63.Deposit): _63.DepositAminoMsg;
                fromProtoMsg(message: _63.DepositProtoMsg): _63.Deposit;
                toProto(message: _63.Deposit): Uint8Array;
                toProtoMsg(message: _63.Deposit): _63.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _63.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Proposal;
                fromJSON(object: any): _63.Proposal;
                toJSON(message: _63.Proposal): unknown;
                fromPartial(object: Partial<_63.Proposal>): _63.Proposal;
                fromAmino(object: _63.ProposalAmino): _63.Proposal;
                toAmino(message: _63.Proposal): _63.ProposalAmino;
                fromAminoMsg(object: _63.ProposalAminoMsg): _63.Proposal;
                toAminoMsg(message: _63.Proposal): _63.ProposalAminoMsg;
                fromProtoMsg(message: _63.ProposalProtoMsg): _63.Proposal;
                toProto(message: _63.Proposal): Uint8Array;
                toProtoMsg(message: _63.Proposal): _63.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _63.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.TallyResult;
                fromJSON(object: any): _63.TallyResult;
                toJSON(message: _63.TallyResult): unknown;
                fromPartial(object: Partial<_63.TallyResult>): _63.TallyResult;
                fromAmino(object: _63.TallyResultAmino): _63.TallyResult;
                toAmino(message: _63.TallyResult): _63.TallyResultAmino;
                fromAminoMsg(object: _63.TallyResultAminoMsg): _63.TallyResult;
                toAminoMsg(message: _63.TallyResult): _63.TallyResultAminoMsg;
                fromProtoMsg(message: _63.TallyResultProtoMsg): _63.TallyResult;
                toProto(message: _63.TallyResult): Uint8Array;
                toProtoMsg(message: _63.TallyResult): _63.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _63.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Vote;
                fromJSON(object: any): _63.Vote;
                toJSON(message: _63.Vote): unknown;
                fromPartial(object: Partial<_63.Vote>): _63.Vote;
                fromAmino(object: _63.VoteAmino): _63.Vote;
                toAmino(message: _63.Vote): _63.VoteAmino;
                fromAminoMsg(object: _63.VoteAminoMsg): _63.Vote;
                toAminoMsg(message: _63.Vote): _63.VoteAminoMsg;
                fromProtoMsg(message: _63.VoteProtoMsg): _63.Vote;
                toProto(message: _63.Vote): Uint8Array;
                toProtoMsg(message: _63.Vote): _63.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _63.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.DepositParams;
                fromJSON(object: any): _63.DepositParams;
                toJSON(message: _63.DepositParams): unknown;
                fromPartial(object: Partial<_63.DepositParams>): _63.DepositParams;
                fromAmino(object: _63.DepositParamsAmino): _63.DepositParams;
                toAmino(message: _63.DepositParams): _63.DepositParamsAmino;
                fromAminoMsg(object: _63.DepositParamsAminoMsg): _63.DepositParams;
                toAminoMsg(message: _63.DepositParams): _63.DepositParamsAminoMsg;
                fromProtoMsg(message: _63.DepositParamsProtoMsg): _63.DepositParams;
                toProto(message: _63.DepositParams): Uint8Array;
                toProtoMsg(message: _63.DepositParams): _63.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _63.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.VotingParams;
                fromJSON(object: any): _63.VotingParams;
                toJSON(message: _63.VotingParams): unknown;
                fromPartial(object: Partial<_63.VotingParams>): _63.VotingParams;
                fromAmino(object: _63.VotingParamsAmino): _63.VotingParams;
                toAmino(message: _63.VotingParams): _63.VotingParamsAmino;
                fromAminoMsg(object: _63.VotingParamsAminoMsg): _63.VotingParams;
                toAminoMsg(message: _63.VotingParams): _63.VotingParamsAminoMsg;
                fromProtoMsg(message: _63.VotingParamsProtoMsg): _63.VotingParams;
                toProto(message: _63.VotingParams): Uint8Array;
                toProtoMsg(message: _63.VotingParams): _63.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _63.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.TallyParams;
                fromJSON(object: any): _63.TallyParams;
                toJSON(message: _63.TallyParams): unknown;
                fromPartial(object: Partial<_63.TallyParams>): _63.TallyParams;
                fromAmino(object: _63.TallyParamsAmino): _63.TallyParams;
                toAmino(message: _63.TallyParams): _63.TallyParamsAmino;
                fromAminoMsg(object: _63.TallyParamsAminoMsg): _63.TallyParams;
                toAminoMsg(message: _63.TallyParams): _63.TallyParamsAminoMsg;
                fromProtoMsg(message: _63.TallyParamsProtoMsg): _63.TallyParams;
                toProto(message: _63.TallyParams): Uint8Array;
                toProtoMsg(message: _63.TallyParams): _63.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _62.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GenesisState;
                fromJSON(object: any): _62.GenesisState;
                toJSON(message: _62.GenesisState): unknown;
                fromPartial(object: Partial<_62.GenesisState>): _62.GenesisState;
                fromAmino(object: _62.GenesisStateAmino): _62.GenesisState;
                toAmino(message: _62.GenesisState): _62.GenesisStateAmino;
                fromAminoMsg(object: _62.GenesisStateAminoMsg): _62.GenesisState;
                toAminoMsg(message: _62.GenesisState): _62.GenesisStateAminoMsg;
                fromProtoMsg(message: _62.GenesisStateProtoMsg): _62.GenesisState;
                toProto(message: _62.GenesisState): Uint8Array;
                toProtoMsg(message: _62.GenesisState): _62.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _275.MsgClientImpl;
            QueryClientImpl: typeof _258.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _68.QueryGroupInfoRequest): Promise<_68.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _68.QueryGroupPolicyInfoRequest): Promise<_68.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _68.QueryGroupMembersRequest): Promise<_68.QueryGroupMembersResponse>;
                groupsByAdmin(request: _68.QueryGroupsByAdminRequest): Promise<_68.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _68.QueryGroupPoliciesByGroupRequest): Promise<_68.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _68.QueryGroupPoliciesByAdminRequest): Promise<_68.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _68.QueryProposalRequest): Promise<_68.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _68.QueryProposalsByGroupPolicyRequest): Promise<_68.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _68.QueryVoteByProposalVoterRequest): Promise<_68.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _68.QueryVotesByProposalRequest): Promise<_68.QueryVotesByProposalResponse>;
                votesByVoter(request: _68.QueryVotesByVoterRequest): Promise<_68.QueryVotesByVoterResponse>;
                groupsByMember(request: _68.QueryGroupsByMemberRequest): Promise<_68.QueryGroupsByMemberResponse>;
                tallyResult(request: _68.QueryTallyResultRequest): Promise<_68.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _239.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _69.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _69.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _69.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _69.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _69.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _69.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _69.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _69.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _69.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _69.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _69.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _69.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _69.MsgCreateGroup): {
                        typeUrl: string;
                        value: _69.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _69.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _69.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _69.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _69.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _69.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _69.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _69.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _69.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _69.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _69.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _69.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _69.MsgWithdrawProposal;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    exec(value: _69.MsgExec): {
                        typeUrl: string;
                        value: _69.MsgExec;
                    };
                    leaveGroup(value: _69.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _69.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _69.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _69.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _69.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _69.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _69.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _69.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _69.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _69.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _69.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _69.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _69.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _69.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _69.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _69.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _69.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _69.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _69.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _69.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _69.MsgCreateGroup): {
                        typeUrl: string;
                        value: _69.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _69.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _69.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _69.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _69.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _69.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _69.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _69.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _69.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _69.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _69.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _69.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _69.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _69.MsgWithdrawProposal;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    exec(value: _69.MsgExec): {
                        typeUrl: string;
                        value: _69.MsgExec;
                    };
                    leaveGroup(value: _69.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _69.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _69.MsgCreateGroup) => _69.MsgCreateGroupAmino;
                    fromAmino: (object: _69.MsgCreateGroupAmino) => _69.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _69.MsgUpdateGroupMembers) => _69.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _69.MsgUpdateGroupMembersAmino) => _69.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _69.MsgUpdateGroupAdmin) => _69.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _69.MsgUpdateGroupAdminAmino) => _69.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _69.MsgUpdateGroupMetadata) => _69.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _69.MsgUpdateGroupMetadataAmino) => _69.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _69.MsgCreateGroupPolicy) => _69.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _69.MsgCreateGroupPolicyAmino) => _69.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _69.MsgCreateGroupWithPolicy) => _69.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _69.MsgCreateGroupWithPolicyAmino) => _69.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _69.MsgUpdateGroupPolicyAdmin) => _69.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _69.MsgUpdateGroupPolicyAdminAmino) => _69.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _69.MsgUpdateGroupPolicyDecisionPolicy) => _69.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _69.MsgUpdateGroupPolicyDecisionPolicyAmino) => _69.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _69.MsgUpdateGroupPolicyMetadata) => _69.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _69.MsgUpdateGroupPolicyMetadataAmino) => _69.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _69.MsgSubmitProposal) => _69.MsgSubmitProposalAmino;
                    fromAmino: (object: _69.MsgSubmitProposalAmino) => _69.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _69.MsgWithdrawProposal) => _69.MsgWithdrawProposalAmino;
                    fromAmino: (object: _69.MsgWithdrawProposalAmino) => _69.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _69.MsgVote) => _69.MsgVoteAmino;
                    fromAmino: (object: _69.MsgVoteAmino) => _69.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _69.MsgExec) => _69.MsgExecAmino;
                    fromAmino: (object: _69.MsgExecAmino) => _69.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _69.MsgLeaveGroup) => _69.MsgLeaveGroupAmino;
                    fromAmino: (object: _69.MsgLeaveGroupAmino) => _69.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _70.VoteOption;
            voteOptionToJSON(object: _70.VoteOption): string;
            proposalStatusFromJSON(object: any): _70.ProposalStatus;
            proposalStatusToJSON(object: _70.ProposalStatus): string;
            proposalResultFromJSON(object: any): _70.ProposalResult;
            proposalResultToJSON(object: _70.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _70.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _70.ProposalExecutorResult): string;
            VoteOption: typeof _70.VoteOption;
            VoteOptionSDKType: typeof _70.VoteOption;
            VoteOptionAmino: typeof _70.VoteOption;
            ProposalStatus: typeof _70.ProposalStatus;
            ProposalStatusSDKType: typeof _70.ProposalStatus;
            ProposalStatusAmino: typeof _70.ProposalStatus;
            ProposalResult: typeof _70.ProposalResult;
            ProposalResultSDKType: typeof _70.ProposalResult;
            ProposalResultAmino: typeof _70.ProposalResult;
            ProposalExecutorResult: typeof _70.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _70.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _70.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _70.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Member;
                fromJSON(object: any): _70.Member;
                toJSON(message: _70.Member): unknown;
                fromPartial(object: Partial<_70.Member>): _70.Member;
                fromAmino(object: _70.MemberAmino): _70.Member;
                toAmino(message: _70.Member): _70.MemberAmino;
                fromAminoMsg(object: _70.MemberAminoMsg): _70.Member;
                toAminoMsg(message: _70.Member): _70.MemberAminoMsg;
                fromProtoMsg(message: _70.MemberProtoMsg): _70.Member;
                toProto(message: _70.Member): Uint8Array;
                toProtoMsg(message: _70.Member): _70.MemberProtoMsg;
            };
            Members: {
                typeUrl: string;
                encode(message: _70.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Members;
                fromJSON(object: any): _70.Members;
                toJSON(message: _70.Members): unknown;
                fromPartial(object: Partial<_70.Members>): _70.Members;
                fromAmino(object: _70.MembersAmino): _70.Members;
                toAmino(message: _70.Members): _70.MembersAmino;
                fromAminoMsg(object: _70.MembersAminoMsg): _70.Members;
                toAminoMsg(message: _70.Members): _70.MembersAminoMsg;
                fromProtoMsg(message: _70.MembersProtoMsg): _70.Members;
                toProto(message: _70.Members): Uint8Array;
                toProtoMsg(message: _70.Members): _70.MembersProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _70.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ThresholdDecisionPolicy;
                fromJSON(object: any): _70.ThresholdDecisionPolicy;
                toJSON(message: _70.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_70.ThresholdDecisionPolicy>): _70.ThresholdDecisionPolicy;
                fromAmino(object: _70.ThresholdDecisionPolicyAmino): _70.ThresholdDecisionPolicy;
                toAmino(message: _70.ThresholdDecisionPolicy): _70.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _70.ThresholdDecisionPolicyAminoMsg): _70.ThresholdDecisionPolicy;
                toAminoMsg(message: _70.ThresholdDecisionPolicy): _70.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _70.ThresholdDecisionPolicyProtoMsg): _70.ThresholdDecisionPolicy;
                toProto(message: _70.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _70.ThresholdDecisionPolicy): _70.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _70.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.PercentageDecisionPolicy;
                fromJSON(object: any): _70.PercentageDecisionPolicy;
                toJSON(message: _70.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_70.PercentageDecisionPolicy>): _70.PercentageDecisionPolicy;
                fromAmino(object: _70.PercentageDecisionPolicyAmino): _70.PercentageDecisionPolicy;
                toAmino(message: _70.PercentageDecisionPolicy): _70.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _70.PercentageDecisionPolicyAminoMsg): _70.PercentageDecisionPolicy;
                toAminoMsg(message: _70.PercentageDecisionPolicy): _70.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _70.PercentageDecisionPolicyProtoMsg): _70.PercentageDecisionPolicy;
                toProto(message: _70.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _70.PercentageDecisionPolicy): _70.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _70.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.DecisionPolicyWindows;
                fromJSON(object: any): _70.DecisionPolicyWindows;
                toJSON(message: _70.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_70.DecisionPolicyWindows>): _70.DecisionPolicyWindows;
                fromAmino(object: _70.DecisionPolicyWindowsAmino): _70.DecisionPolicyWindows;
                toAmino(message: _70.DecisionPolicyWindows): _70.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _70.DecisionPolicyWindowsAminoMsg): _70.DecisionPolicyWindows;
                toAminoMsg(message: _70.DecisionPolicyWindows): _70.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _70.DecisionPolicyWindowsProtoMsg): _70.DecisionPolicyWindows;
                toProto(message: _70.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _70.DecisionPolicyWindows): _70.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _70.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.GroupInfo;
                fromJSON(object: any): _70.GroupInfo;
                toJSON(message: _70.GroupInfo): unknown;
                fromPartial(object: Partial<_70.GroupInfo>): _70.GroupInfo;
                fromAmino(object: _70.GroupInfoAmino): _70.GroupInfo;
                toAmino(message: _70.GroupInfo): _70.GroupInfoAmino;
                fromAminoMsg(object: _70.GroupInfoAminoMsg): _70.GroupInfo;
                toAminoMsg(message: _70.GroupInfo): _70.GroupInfoAminoMsg;
                fromProtoMsg(message: _70.GroupInfoProtoMsg): _70.GroupInfo;
                toProto(message: _70.GroupInfo): Uint8Array;
                toProtoMsg(message: _70.GroupInfo): _70.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _70.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.GroupMember;
                fromJSON(object: any): _70.GroupMember;
                toJSON(message: _70.GroupMember): unknown;
                fromPartial(object: Partial<_70.GroupMember>): _70.GroupMember;
                fromAmino(object: _70.GroupMemberAmino): _70.GroupMember;
                toAmino(message: _70.GroupMember): _70.GroupMemberAmino;
                fromAminoMsg(object: _70.GroupMemberAminoMsg): _70.GroupMember;
                toAminoMsg(message: _70.GroupMember): _70.GroupMemberAminoMsg;
                fromProtoMsg(message: _70.GroupMemberProtoMsg): _70.GroupMember;
                toProto(message: _70.GroupMember): Uint8Array;
                toProtoMsg(message: _70.GroupMember): _70.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _70.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.GroupPolicyInfo;
                fromJSON(object: any): _70.GroupPolicyInfo;
                toJSON(message: _70.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_70.GroupPolicyInfo>): _70.GroupPolicyInfo;
                fromAmino(object: _70.GroupPolicyInfoAmino): _70.GroupPolicyInfo;
                toAmino(message: _70.GroupPolicyInfo): _70.GroupPolicyInfoAmino;
                fromAminoMsg(object: _70.GroupPolicyInfoAminoMsg): _70.GroupPolicyInfo;
                toAminoMsg(message: _70.GroupPolicyInfo): _70.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _70.GroupPolicyInfoProtoMsg): _70.GroupPolicyInfo;
                toProto(message: _70.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _70.GroupPolicyInfo): _70.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _70.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Proposal;
                fromJSON(object: any): _70.Proposal;
                toJSON(message: _70.Proposal): unknown;
                fromPartial(object: Partial<_70.Proposal>): _70.Proposal;
                fromAmino(object: _70.ProposalAmino): _70.Proposal;
                toAmino(message: _70.Proposal): _70.ProposalAmino;
                fromAminoMsg(object: _70.ProposalAminoMsg): _70.Proposal;
                toAminoMsg(message: _70.Proposal): _70.ProposalAminoMsg;
                fromProtoMsg(message: _70.ProposalProtoMsg): _70.Proposal;
                toProto(message: _70.Proposal): Uint8Array;
                toProtoMsg(message: _70.Proposal): _70.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _70.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.TallyResult;
                fromJSON(object: any): _70.TallyResult;
                toJSON(message: _70.TallyResult): unknown;
                fromPartial(object: Partial<_70.TallyResult>): _70.TallyResult;
                fromAmino(object: _70.TallyResultAmino): _70.TallyResult;
                toAmino(message: _70.TallyResult): _70.TallyResultAmino;
                fromAminoMsg(object: _70.TallyResultAminoMsg): _70.TallyResult;
                toAminoMsg(message: _70.TallyResult): _70.TallyResultAminoMsg;
                fromProtoMsg(message: _70.TallyResultProtoMsg): _70.TallyResult;
                toProto(message: _70.TallyResult): Uint8Array;
                toProtoMsg(message: _70.TallyResult): _70.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _70.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Vote;
                fromJSON(object: any): _70.Vote;
                toJSON(message: _70.Vote): unknown;
                fromPartial(object: Partial<_70.Vote>): _70.Vote;
                fromAmino(object: _70.VoteAmino): _70.Vote;
                toAmino(message: _70.Vote): _70.VoteAmino;
                fromAminoMsg(object: _70.VoteAminoMsg): _70.Vote;
                toAminoMsg(message: _70.Vote): _70.VoteAminoMsg;
                fromProtoMsg(message: _70.VoteProtoMsg): _70.Vote;
                toProto(message: _70.Vote): Uint8Array;
                toProtoMsg(message: _70.Vote): _70.VoteProtoMsg;
            };
            execFromJSON(object: any): _69.Exec;
            execToJSON(object: _69.Exec): string;
            Exec: typeof _69.Exec;
            ExecSDKType: typeof _69.Exec;
            ExecAmino: typeof _69.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _69.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgCreateGroup;
                fromJSON(object: any): _69.MsgCreateGroup;
                toJSON(message: _69.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_69.MsgCreateGroup>): _69.MsgCreateGroup;
                fromAmino(object: _69.MsgCreateGroupAmino): _69.MsgCreateGroup;
                toAmino(message: _69.MsgCreateGroup): _69.MsgCreateGroupAmino;
                fromAminoMsg(object: _69.MsgCreateGroupAminoMsg): _69.MsgCreateGroup;
                toAminoMsg(message: _69.MsgCreateGroup): _69.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _69.MsgCreateGroupProtoMsg): _69.MsgCreateGroup;
                toProto(message: _69.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _69.MsgCreateGroup): _69.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _69.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgCreateGroupResponse;
                fromJSON(object: any): _69.MsgCreateGroupResponse;
                toJSON(message: _69.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_69.MsgCreateGroupResponse>): _69.MsgCreateGroupResponse;
                fromAmino(object: _69.MsgCreateGroupResponseAmino): _69.MsgCreateGroupResponse;
                toAmino(message: _69.MsgCreateGroupResponse): _69.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _69.MsgCreateGroupResponseAminoMsg): _69.MsgCreateGroupResponse;
                toAminoMsg(message: _69.MsgCreateGroupResponse): _69.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _69.MsgCreateGroupResponseProtoMsg): _69.MsgCreateGroupResponse;
                toProto(message: _69.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _69.MsgCreateGroupResponse): _69.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _69.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgUpdateGroupMembers;
                fromJSON(object: any): _69.MsgUpdateGroupMembers;
                toJSON(message: _69.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_69.MsgUpdateGroupMembers>): _69.MsgUpdateGroupMembers;
                fromAmino(object: _69.MsgUpdateGroupMembersAmino): _69.MsgUpdateGroupMembers;
                toAmino(message: _69.MsgUpdateGroupMembers): _69.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _69.MsgUpdateGroupMembersAminoMsg): _69.MsgUpdateGroupMembers;
                toAminoMsg(message: _69.MsgUpdateGroupMembers): _69.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _69.MsgUpdateGroupMembersProtoMsg): _69.MsgUpdateGroupMembers;
                toProto(message: _69.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _69.MsgUpdateGroupMembers): _69.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _69.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _69.MsgUpdateGroupMembersResponse;
                toJSON(_: _69.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_69.MsgUpdateGroupMembersResponse>): _69.MsgUpdateGroupMembersResponse;
                fromAmino(_: _69.MsgUpdateGroupMembersResponseAmino): _69.MsgUpdateGroupMembersResponse;
                toAmino(_: _69.MsgUpdateGroupMembersResponse): _69.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _69.MsgUpdateGroupMembersResponseAminoMsg): _69.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _69.MsgUpdateGroupMembersResponse): _69.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _69.MsgUpdateGroupMembersResponseProtoMsg): _69.MsgUpdateGroupMembersResponse;
                toProto(message: _69.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _69.MsgUpdateGroupMembersResponse): _69.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _69.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgUpdateGroupAdmin;
                fromJSON(object: any): _69.MsgUpdateGroupAdmin;
                toJSON(message: _69.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_69.MsgUpdateGroupAdmin>): _69.MsgUpdateGroupAdmin;
                fromAmino(object: _69.MsgUpdateGroupAdminAmino): _69.MsgUpdateGroupAdmin;
                toAmino(message: _69.MsgUpdateGroupAdmin): _69.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _69.MsgUpdateGroupAdminAminoMsg): _69.MsgUpdateGroupAdmin;
                toAminoMsg(message: _69.MsgUpdateGroupAdmin): _69.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _69.MsgUpdateGroupAdminProtoMsg): _69.MsgUpdateGroupAdmin;
                toProto(message: _69.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _69.MsgUpdateGroupAdmin): _69.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _69.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _69.MsgUpdateGroupAdminResponse;
                toJSON(_: _69.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_69.MsgUpdateGroupAdminResponse>): _69.MsgUpdateGroupAdminResponse;
                fromAmino(_: _69.MsgUpdateGroupAdminResponseAmino): _69.MsgUpdateGroupAdminResponse;
                toAmino(_: _69.MsgUpdateGroupAdminResponse): _69.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _69.MsgUpdateGroupAdminResponseAminoMsg): _69.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _69.MsgUpdateGroupAdminResponse): _69.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _69.MsgUpdateGroupAdminResponseProtoMsg): _69.MsgUpdateGroupAdminResponse;
                toProto(message: _69.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _69.MsgUpdateGroupAdminResponse): _69.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _69.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgUpdateGroupMetadata;
                fromJSON(object: any): _69.MsgUpdateGroupMetadata;
                toJSON(message: _69.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_69.MsgUpdateGroupMetadata>): _69.MsgUpdateGroupMetadata;
                fromAmino(object: _69.MsgUpdateGroupMetadataAmino): _69.MsgUpdateGroupMetadata;
                toAmino(message: _69.MsgUpdateGroupMetadata): _69.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _69.MsgUpdateGroupMetadataAminoMsg): _69.MsgUpdateGroupMetadata;
                toAminoMsg(message: _69.MsgUpdateGroupMetadata): _69.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _69.MsgUpdateGroupMetadataProtoMsg): _69.MsgUpdateGroupMetadata;
                toProto(message: _69.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _69.MsgUpdateGroupMetadata): _69.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _69.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _69.MsgUpdateGroupMetadataResponse;
                toJSON(_: _69.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_69.MsgUpdateGroupMetadataResponse>): _69.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _69.MsgUpdateGroupMetadataResponseAmino): _69.MsgUpdateGroupMetadataResponse;
                toAmino(_: _69.MsgUpdateGroupMetadataResponse): _69.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _69.MsgUpdateGroupMetadataResponseAminoMsg): _69.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _69.MsgUpdateGroupMetadataResponse): _69.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _69.MsgUpdateGroupMetadataResponseProtoMsg): _69.MsgUpdateGroupMetadataResponse;
                toProto(message: _69.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _69.MsgUpdateGroupMetadataResponse): _69.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _69.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgCreateGroupPolicy;
                fromJSON(object: any): _69.MsgCreateGroupPolicy;
                toJSON(message: _69.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_69.MsgCreateGroupPolicy>): _69.MsgCreateGroupPolicy;
                fromAmino(object: _69.MsgCreateGroupPolicyAmino): _69.MsgCreateGroupPolicy;
                toAmino(message: _69.MsgCreateGroupPolicy): _69.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _69.MsgCreateGroupPolicyAminoMsg): _69.MsgCreateGroupPolicy;
                toAminoMsg(message: _69.MsgCreateGroupPolicy): _69.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _69.MsgCreateGroupPolicyProtoMsg): _69.MsgCreateGroupPolicy;
                toProto(message: _69.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _69.MsgCreateGroupPolicy): _69.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _69.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _69.MsgCreateGroupPolicyResponse;
                toJSON(message: _69.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_69.MsgCreateGroupPolicyResponse>): _69.MsgCreateGroupPolicyResponse;
                fromAmino(object: _69.MsgCreateGroupPolicyResponseAmino): _69.MsgCreateGroupPolicyResponse;
                toAmino(message: _69.MsgCreateGroupPolicyResponse): _69.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _69.MsgCreateGroupPolicyResponseAminoMsg): _69.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _69.MsgCreateGroupPolicyResponse): _69.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _69.MsgCreateGroupPolicyResponseProtoMsg): _69.MsgCreateGroupPolicyResponse;
                toProto(message: _69.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _69.MsgCreateGroupPolicyResponse): _69.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _69.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _69.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _69.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_69.MsgUpdateGroupPolicyAdmin>): _69.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _69.MsgUpdateGroupPolicyAdminAmino): _69.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _69.MsgUpdateGroupPolicyAdmin): _69.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _69.MsgUpdateGroupPolicyAdminAminoMsg): _69.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _69.MsgUpdateGroupPolicyAdmin): _69.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _69.MsgUpdateGroupPolicyAdminProtoMsg): _69.MsgUpdateGroupPolicyAdmin;
                toProto(message: _69.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _69.MsgUpdateGroupPolicyAdmin): _69.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _69.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _69.MsgCreateGroupWithPolicy;
                toJSON(message: _69.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_69.MsgCreateGroupWithPolicy>): _69.MsgCreateGroupWithPolicy;
                fromAmino(object: _69.MsgCreateGroupWithPolicyAmino): _69.MsgCreateGroupWithPolicy;
                toAmino(message: _69.MsgCreateGroupWithPolicy): _69.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _69.MsgCreateGroupWithPolicyAminoMsg): _69.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _69.MsgCreateGroupWithPolicy): _69.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _69.MsgCreateGroupWithPolicyProtoMsg): _69.MsgCreateGroupWithPolicy;
                toProto(message: _69.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _69.MsgCreateGroupWithPolicy): _69.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _69.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _69.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _69.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_69.MsgCreateGroupWithPolicyResponse>): _69.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _69.MsgCreateGroupWithPolicyResponseAmino): _69.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _69.MsgCreateGroupWithPolicyResponse): _69.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _69.MsgCreateGroupWithPolicyResponseAminoMsg): _69.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _69.MsgCreateGroupWithPolicyResponse): _69.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _69.MsgCreateGroupWithPolicyResponseProtoMsg): _69.MsgCreateGroupWithPolicyResponse;
                toProto(message: _69.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _69.MsgCreateGroupWithPolicyResponse): _69.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _69.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _69.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _69.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_69.MsgUpdateGroupPolicyAdminResponse>): _69.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _69.MsgUpdateGroupPolicyAdminResponseAmino): _69.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _69.MsgUpdateGroupPolicyAdminResponse): _69.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _69.MsgUpdateGroupPolicyAdminResponseAminoMsg): _69.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _69.MsgUpdateGroupPolicyAdminResponse): _69.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _69.MsgUpdateGroupPolicyAdminResponseProtoMsg): _69.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _69.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _69.MsgUpdateGroupPolicyAdminResponse): _69.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _69.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _69.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _69.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_69.MsgUpdateGroupPolicyDecisionPolicy>): _69.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _69.MsgUpdateGroupPolicyDecisionPolicyAmino): _69.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _69.MsgUpdateGroupPolicyDecisionPolicy): _69.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _69.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _69.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _69.MsgUpdateGroupPolicyDecisionPolicy): _69.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _69.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _69.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _69.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _69.MsgUpdateGroupPolicyDecisionPolicy): _69.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _69.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _69.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _69.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_69.MsgUpdateGroupPolicyDecisionPolicyResponse>): _69.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _69.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _69.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _69.MsgUpdateGroupPolicyDecisionPolicyResponse): _69.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _69.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _69.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _69.MsgUpdateGroupPolicyDecisionPolicyResponse): _69.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _69.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _69.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _69.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _69.MsgUpdateGroupPolicyDecisionPolicyResponse): _69.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _69.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _69.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _69.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_69.MsgUpdateGroupPolicyMetadata>): _69.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _69.MsgUpdateGroupPolicyMetadataAmino): _69.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _69.MsgUpdateGroupPolicyMetadata): _69.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _69.MsgUpdateGroupPolicyMetadataAminoMsg): _69.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _69.MsgUpdateGroupPolicyMetadata): _69.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _69.MsgUpdateGroupPolicyMetadataProtoMsg): _69.MsgUpdateGroupPolicyMetadata;
                toProto(message: _69.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _69.MsgUpdateGroupPolicyMetadata): _69.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _69.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _69.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _69.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_69.MsgUpdateGroupPolicyMetadataResponse>): _69.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _69.MsgUpdateGroupPolicyMetadataResponseAmino): _69.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _69.MsgUpdateGroupPolicyMetadataResponse): _69.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _69.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _69.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _69.MsgUpdateGroupPolicyMetadataResponse): _69.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _69.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _69.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _69.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _69.MsgUpdateGroupPolicyMetadataResponse): _69.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _69.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgSubmitProposal;
                fromJSON(object: any): _69.MsgSubmitProposal;
                toJSON(message: _69.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_69.MsgSubmitProposal>): _69.MsgSubmitProposal;
                fromAmino(object: _69.MsgSubmitProposalAmino): _69.MsgSubmitProposal;
                toAmino(message: _69.MsgSubmitProposal): _69.MsgSubmitProposalAmino;
                fromAminoMsg(object: _69.MsgSubmitProposalAminoMsg): _69.MsgSubmitProposal;
                toAminoMsg(message: _69.MsgSubmitProposal): _69.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _69.MsgSubmitProposalProtoMsg): _69.MsgSubmitProposal;
                toProto(message: _69.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _69.MsgSubmitProposal): _69.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _69.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgSubmitProposalResponse;
                fromJSON(object: any): _69.MsgSubmitProposalResponse;
                toJSON(message: _69.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_69.MsgSubmitProposalResponse>): _69.MsgSubmitProposalResponse;
                fromAmino(object: _69.MsgSubmitProposalResponseAmino): _69.MsgSubmitProposalResponse;
                toAmino(message: _69.MsgSubmitProposalResponse): _69.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _69.MsgSubmitProposalResponseAminoMsg): _69.MsgSubmitProposalResponse;
                toAminoMsg(message: _69.MsgSubmitProposalResponse): _69.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _69.MsgSubmitProposalResponseProtoMsg): _69.MsgSubmitProposalResponse;
                toProto(message: _69.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _69.MsgSubmitProposalResponse): _69.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _69.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgWithdrawProposal;
                fromJSON(object: any): _69.MsgWithdrawProposal;
                toJSON(message: _69.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_69.MsgWithdrawProposal>): _69.MsgWithdrawProposal;
                fromAmino(object: _69.MsgWithdrawProposalAmino): _69.MsgWithdrawProposal;
                toAmino(message: _69.MsgWithdrawProposal): _69.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _69.MsgWithdrawProposalAminoMsg): _69.MsgWithdrawProposal;
                toAminoMsg(message: _69.MsgWithdrawProposal): _69.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _69.MsgWithdrawProposalProtoMsg): _69.MsgWithdrawProposal;
                toProto(message: _69.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _69.MsgWithdrawProposal): _69.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _69.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgWithdrawProposalResponse;
                fromJSON(_: any): _69.MsgWithdrawProposalResponse;
                toJSON(_: _69.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_69.MsgWithdrawProposalResponse>): _69.MsgWithdrawProposalResponse;
                fromAmino(_: _69.MsgWithdrawProposalResponseAmino): _69.MsgWithdrawProposalResponse;
                toAmino(_: _69.MsgWithdrawProposalResponse): _69.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _69.MsgWithdrawProposalResponseAminoMsg): _69.MsgWithdrawProposalResponse;
                toAminoMsg(message: _69.MsgWithdrawProposalResponse): _69.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _69.MsgWithdrawProposalResponseProtoMsg): _69.MsgWithdrawProposalResponse;
                toProto(message: _69.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _69.MsgWithdrawProposalResponse): _69.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _69.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgVote;
                fromJSON(object: any): _69.MsgVote;
                toJSON(message: _69.MsgVote): unknown;
                fromPartial(object: Partial<_69.MsgVote>): _69.MsgVote;
                fromAmino(object: _69.MsgVoteAmino): _69.MsgVote;
                toAmino(message: _69.MsgVote): _69.MsgVoteAmino;
                fromAminoMsg(object: _69.MsgVoteAminoMsg): _69.MsgVote;
                toAminoMsg(message: _69.MsgVote): _69.MsgVoteAminoMsg;
                fromProtoMsg(message: _69.MsgVoteProtoMsg): _69.MsgVote;
                toProto(message: _69.MsgVote): Uint8Array;
                toProtoMsg(message: _69.MsgVote): _69.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _69.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgVoteResponse;
                fromJSON(_: any): _69.MsgVoteResponse;
                toJSON(_: _69.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_69.MsgVoteResponse>): _69.MsgVoteResponse;
                fromAmino(_: _69.MsgVoteResponseAmino): _69.MsgVoteResponse;
                toAmino(_: _69.MsgVoteResponse): _69.MsgVoteResponseAmino;
                fromAminoMsg(object: _69.MsgVoteResponseAminoMsg): _69.MsgVoteResponse;
                toAminoMsg(message: _69.MsgVoteResponse): _69.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _69.MsgVoteResponseProtoMsg): _69.MsgVoteResponse;
                toProto(message: _69.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _69.MsgVoteResponse): _69.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _69.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgExec;
                fromJSON(object: any): _69.MsgExec;
                toJSON(message: _69.MsgExec): unknown;
                fromPartial(object: Partial<_69.MsgExec>): _69.MsgExec;
                fromAmino(object: _69.MsgExecAmino): _69.MsgExec;
                toAmino(message: _69.MsgExec): _69.MsgExecAmino;
                fromAminoMsg(object: _69.MsgExecAminoMsg): _69.MsgExec;
                toAminoMsg(message: _69.MsgExec): _69.MsgExecAminoMsg;
                fromProtoMsg(message: _69.MsgExecProtoMsg): _69.MsgExec;
                toProto(message: _69.MsgExec): Uint8Array;
                toProtoMsg(message: _69.MsgExec): _69.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(_: _69.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgExecResponse;
                fromJSON(_: any): _69.MsgExecResponse;
                toJSON(_: _69.MsgExecResponse): unknown;
                fromPartial(_: Partial<_69.MsgExecResponse>): _69.MsgExecResponse;
                fromAmino(_: _69.MsgExecResponseAmino): _69.MsgExecResponse;
                toAmino(_: _69.MsgExecResponse): _69.MsgExecResponseAmino;
                fromAminoMsg(object: _69.MsgExecResponseAminoMsg): _69.MsgExecResponse;
                toAminoMsg(message: _69.MsgExecResponse): _69.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _69.MsgExecResponseProtoMsg): _69.MsgExecResponse;
                toProto(message: _69.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _69.MsgExecResponse): _69.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _69.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgLeaveGroup;
                fromJSON(object: any): _69.MsgLeaveGroup;
                toJSON(message: _69.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_69.MsgLeaveGroup>): _69.MsgLeaveGroup;
                fromAmino(object: _69.MsgLeaveGroupAmino): _69.MsgLeaveGroup;
                toAmino(message: _69.MsgLeaveGroup): _69.MsgLeaveGroupAmino;
                fromAminoMsg(object: _69.MsgLeaveGroupAminoMsg): _69.MsgLeaveGroup;
                toAminoMsg(message: _69.MsgLeaveGroup): _69.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _69.MsgLeaveGroupProtoMsg): _69.MsgLeaveGroup;
                toProto(message: _69.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _69.MsgLeaveGroup): _69.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _69.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgLeaveGroupResponse;
                fromJSON(_: any): _69.MsgLeaveGroupResponse;
                toJSON(_: _69.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_69.MsgLeaveGroupResponse>): _69.MsgLeaveGroupResponse;
                fromAmino(_: _69.MsgLeaveGroupResponseAmino): _69.MsgLeaveGroupResponse;
                toAmino(_: _69.MsgLeaveGroupResponse): _69.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _69.MsgLeaveGroupResponseAminoMsg): _69.MsgLeaveGroupResponse;
                toAminoMsg(message: _69.MsgLeaveGroupResponse): _69.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _69.MsgLeaveGroupResponseProtoMsg): _69.MsgLeaveGroupResponse;
                toProto(message: _69.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _69.MsgLeaveGroupResponse): _69.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _68.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGroupInfoRequest;
                fromJSON(object: any): _68.QueryGroupInfoRequest;
                toJSON(message: _68.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_68.QueryGroupInfoRequest>): _68.QueryGroupInfoRequest;
                fromAmino(object: _68.QueryGroupInfoRequestAmino): _68.QueryGroupInfoRequest;
                toAmino(message: _68.QueryGroupInfoRequest): _68.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _68.QueryGroupInfoRequestAminoMsg): _68.QueryGroupInfoRequest;
                toAminoMsg(message: _68.QueryGroupInfoRequest): _68.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _68.QueryGroupInfoRequestProtoMsg): _68.QueryGroupInfoRequest;
                toProto(message: _68.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _68.QueryGroupInfoRequest): _68.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _68.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGroupInfoResponse;
                fromJSON(object: any): _68.QueryGroupInfoResponse;
                toJSON(message: _68.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_68.QueryGroupInfoResponse>): _68.QueryGroupInfoResponse;
                fromAmino(object: _68.QueryGroupInfoResponseAmino): _68.QueryGroupInfoResponse;
                toAmino(message: _68.QueryGroupInfoResponse): _68.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _68.QueryGroupInfoResponseAminoMsg): _68.QueryGroupInfoResponse;
                toAminoMsg(message: _68.QueryGroupInfoResponse): _68.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _68.QueryGroupInfoResponseProtoMsg): _68.QueryGroupInfoResponse;
                toProto(message: _68.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _68.QueryGroupInfoResponse): _68.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _68.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _68.QueryGroupPolicyInfoRequest;
                toJSON(message: _68.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_68.QueryGroupPolicyInfoRequest>): _68.QueryGroupPolicyInfoRequest;
                fromAmino(object: _68.QueryGroupPolicyInfoRequestAmino): _68.QueryGroupPolicyInfoRequest;
                toAmino(message: _68.QueryGroupPolicyInfoRequest): _68.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _68.QueryGroupPolicyInfoRequestAminoMsg): _68.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _68.QueryGroupPolicyInfoRequest): _68.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _68.QueryGroupPolicyInfoRequestProtoMsg): _68.QueryGroupPolicyInfoRequest;
                toProto(message: _68.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _68.QueryGroupPolicyInfoRequest): _68.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _68.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _68.QueryGroupPolicyInfoResponse;
                toJSON(message: _68.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_68.QueryGroupPolicyInfoResponse>): _68.QueryGroupPolicyInfoResponse;
                fromAmino(object: _68.QueryGroupPolicyInfoResponseAmino): _68.QueryGroupPolicyInfoResponse;
                toAmino(message: _68.QueryGroupPolicyInfoResponse): _68.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _68.QueryGroupPolicyInfoResponseAminoMsg): _68.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _68.QueryGroupPolicyInfoResponse): _68.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _68.QueryGroupPolicyInfoResponseProtoMsg): _68.QueryGroupPolicyInfoResponse;
                toProto(message: _68.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _68.QueryGroupPolicyInfoResponse): _68.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _68.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGroupMembersRequest;
                fromJSON(object: any): _68.QueryGroupMembersRequest;
                toJSON(message: _68.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_68.QueryGroupMembersRequest>): _68.QueryGroupMembersRequest;
                fromAmino(object: _68.QueryGroupMembersRequestAmino): _68.QueryGroupMembersRequest;
                toAmino(message: _68.QueryGroupMembersRequest): _68.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _68.QueryGroupMembersRequestAminoMsg): _68.QueryGroupMembersRequest;
                toAminoMsg(message: _68.QueryGroupMembersRequest): _68.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _68.QueryGroupMembersRequestProtoMsg): _68.QueryGroupMembersRequest;
                toProto(message: _68.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _68.QueryGroupMembersRequest): _68.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _68.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGroupMembersResponse;
                fromJSON(object: any): _68.QueryGroupMembersResponse;
                toJSON(message: _68.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_68.QueryGroupMembersResponse>): _68.QueryGroupMembersResponse;
                fromAmino(object: _68.QueryGroupMembersResponseAmino): _68.QueryGroupMembersResponse;
                toAmino(message: _68.QueryGroupMembersResponse): _68.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _68.QueryGroupMembersResponseAminoMsg): _68.QueryGroupMembersResponse;
                toAminoMsg(message: _68.QueryGroupMembersResponse): _68.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _68.QueryGroupMembersResponseProtoMsg): _68.QueryGroupMembersResponse;
                toProto(message: _68.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _68.QueryGroupMembersResponse): _68.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _68.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGroupsByAdminRequest;
                fromJSON(object: any): _68.QueryGroupsByAdminRequest;
                toJSON(message: _68.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_68.QueryGroupsByAdminRequest>): _68.QueryGroupsByAdminRequest;
                fromAmino(object: _68.QueryGroupsByAdminRequestAmino): _68.QueryGroupsByAdminRequest;
                toAmino(message: _68.QueryGroupsByAdminRequest): _68.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _68.QueryGroupsByAdminRequestAminoMsg): _68.QueryGroupsByAdminRequest;
                toAminoMsg(message: _68.QueryGroupsByAdminRequest): _68.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _68.QueryGroupsByAdminRequestProtoMsg): _68.QueryGroupsByAdminRequest;
                toProto(message: _68.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _68.QueryGroupsByAdminRequest): _68.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _68.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGroupsByAdminResponse;
                fromJSON(object: any): _68.QueryGroupsByAdminResponse;
                toJSON(message: _68.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_68.QueryGroupsByAdminResponse>): _68.QueryGroupsByAdminResponse;
                fromAmino(object: _68.QueryGroupsByAdminResponseAmino): _68.QueryGroupsByAdminResponse;
                toAmino(message: _68.QueryGroupsByAdminResponse): _68.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _68.QueryGroupsByAdminResponseAminoMsg): _68.QueryGroupsByAdminResponse;
                toAminoMsg(message: _68.QueryGroupsByAdminResponse): _68.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _68.QueryGroupsByAdminResponseProtoMsg): _68.QueryGroupsByAdminResponse;
                toProto(message: _68.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _68.QueryGroupsByAdminResponse): _68.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _68.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _68.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _68.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_68.QueryGroupPoliciesByGroupRequest>): _68.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _68.QueryGroupPoliciesByGroupRequestAmino): _68.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _68.QueryGroupPoliciesByGroupRequest): _68.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _68.QueryGroupPoliciesByGroupRequestAminoMsg): _68.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _68.QueryGroupPoliciesByGroupRequest): _68.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _68.QueryGroupPoliciesByGroupRequestProtoMsg): _68.QueryGroupPoliciesByGroupRequest;
                toProto(message: _68.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _68.QueryGroupPoliciesByGroupRequest): _68.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _68.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _68.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _68.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_68.QueryGroupPoliciesByGroupResponse>): _68.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _68.QueryGroupPoliciesByGroupResponseAmino): _68.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _68.QueryGroupPoliciesByGroupResponse): _68.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _68.QueryGroupPoliciesByGroupResponseAminoMsg): _68.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _68.QueryGroupPoliciesByGroupResponse): _68.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _68.QueryGroupPoliciesByGroupResponseProtoMsg): _68.QueryGroupPoliciesByGroupResponse;
                toProto(message: _68.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _68.QueryGroupPoliciesByGroupResponse): _68.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _68.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _68.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _68.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_68.QueryGroupPoliciesByAdminRequest>): _68.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _68.QueryGroupPoliciesByAdminRequestAmino): _68.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _68.QueryGroupPoliciesByAdminRequest): _68.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _68.QueryGroupPoliciesByAdminRequestAminoMsg): _68.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _68.QueryGroupPoliciesByAdminRequest): _68.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _68.QueryGroupPoliciesByAdminRequestProtoMsg): _68.QueryGroupPoliciesByAdminRequest;
                toProto(message: _68.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _68.QueryGroupPoliciesByAdminRequest): _68.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _68.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _68.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _68.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_68.QueryGroupPoliciesByAdminResponse>): _68.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _68.QueryGroupPoliciesByAdminResponseAmino): _68.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _68.QueryGroupPoliciesByAdminResponse): _68.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _68.QueryGroupPoliciesByAdminResponseAminoMsg): _68.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _68.QueryGroupPoliciesByAdminResponse): _68.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _68.QueryGroupPoliciesByAdminResponseProtoMsg): _68.QueryGroupPoliciesByAdminResponse;
                toProto(message: _68.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _68.QueryGroupPoliciesByAdminResponse): _68.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _68.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryProposalRequest;
                fromJSON(object: any): _68.QueryProposalRequest;
                toJSON(message: _68.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_68.QueryProposalRequest>): _68.QueryProposalRequest;
                fromAmino(object: _68.QueryProposalRequestAmino): _68.QueryProposalRequest;
                toAmino(message: _68.QueryProposalRequest): _68.QueryProposalRequestAmino;
                fromAminoMsg(object: _68.QueryProposalRequestAminoMsg): _68.QueryProposalRequest;
                toAminoMsg(message: _68.QueryProposalRequest): _68.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _68.QueryProposalRequestProtoMsg): _68.QueryProposalRequest;
                toProto(message: _68.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _68.QueryProposalRequest): _68.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _68.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryProposalResponse;
                fromJSON(object: any): _68.QueryProposalResponse;
                toJSON(message: _68.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_68.QueryProposalResponse>): _68.QueryProposalResponse;
                fromAmino(object: _68.QueryProposalResponseAmino): _68.QueryProposalResponse;
                toAmino(message: _68.QueryProposalResponse): _68.QueryProposalResponseAmino;
                fromAminoMsg(object: _68.QueryProposalResponseAminoMsg): _68.QueryProposalResponse;
                toAminoMsg(message: _68.QueryProposalResponse): _68.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _68.QueryProposalResponseProtoMsg): _68.QueryProposalResponse;
                toProto(message: _68.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _68.QueryProposalResponse): _68.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _68.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _68.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _68.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_68.QueryProposalsByGroupPolicyRequest>): _68.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _68.QueryProposalsByGroupPolicyRequestAmino): _68.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _68.QueryProposalsByGroupPolicyRequest): _68.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _68.QueryProposalsByGroupPolicyRequestAminoMsg): _68.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _68.QueryProposalsByGroupPolicyRequest): _68.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _68.QueryProposalsByGroupPolicyRequestProtoMsg): _68.QueryProposalsByGroupPolicyRequest;
                toProto(message: _68.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _68.QueryProposalsByGroupPolicyRequest): _68.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _68.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _68.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _68.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_68.QueryProposalsByGroupPolicyResponse>): _68.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _68.QueryProposalsByGroupPolicyResponseAmino): _68.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _68.QueryProposalsByGroupPolicyResponse): _68.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _68.QueryProposalsByGroupPolicyResponseAminoMsg): _68.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _68.QueryProposalsByGroupPolicyResponse): _68.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _68.QueryProposalsByGroupPolicyResponseProtoMsg): _68.QueryProposalsByGroupPolicyResponse;
                toProto(message: _68.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _68.QueryProposalsByGroupPolicyResponse): _68.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _68.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _68.QueryVoteByProposalVoterRequest;
                toJSON(message: _68.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_68.QueryVoteByProposalVoterRequest>): _68.QueryVoteByProposalVoterRequest;
                fromAmino(object: _68.QueryVoteByProposalVoterRequestAmino): _68.QueryVoteByProposalVoterRequest;
                toAmino(message: _68.QueryVoteByProposalVoterRequest): _68.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _68.QueryVoteByProposalVoterRequestAminoMsg): _68.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _68.QueryVoteByProposalVoterRequest): _68.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _68.QueryVoteByProposalVoterRequestProtoMsg): _68.QueryVoteByProposalVoterRequest;
                toProto(message: _68.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _68.QueryVoteByProposalVoterRequest): _68.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _68.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _68.QueryVoteByProposalVoterResponse;
                toJSON(message: _68.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_68.QueryVoteByProposalVoterResponse>): _68.QueryVoteByProposalVoterResponse;
                fromAmino(object: _68.QueryVoteByProposalVoterResponseAmino): _68.QueryVoteByProposalVoterResponse;
                toAmino(message: _68.QueryVoteByProposalVoterResponse): _68.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _68.QueryVoteByProposalVoterResponseAminoMsg): _68.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _68.QueryVoteByProposalVoterResponse): _68.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _68.QueryVoteByProposalVoterResponseProtoMsg): _68.QueryVoteByProposalVoterResponse;
                toProto(message: _68.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _68.QueryVoteByProposalVoterResponse): _68.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _68.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryVotesByProposalRequest;
                fromJSON(object: any): _68.QueryVotesByProposalRequest;
                toJSON(message: _68.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_68.QueryVotesByProposalRequest>): _68.QueryVotesByProposalRequest;
                fromAmino(object: _68.QueryVotesByProposalRequestAmino): _68.QueryVotesByProposalRequest;
                toAmino(message: _68.QueryVotesByProposalRequest): _68.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _68.QueryVotesByProposalRequestAminoMsg): _68.QueryVotesByProposalRequest;
                toAminoMsg(message: _68.QueryVotesByProposalRequest): _68.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _68.QueryVotesByProposalRequestProtoMsg): _68.QueryVotesByProposalRequest;
                toProto(message: _68.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _68.QueryVotesByProposalRequest): _68.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _68.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryVotesByProposalResponse;
                fromJSON(object: any): _68.QueryVotesByProposalResponse;
                toJSON(message: _68.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_68.QueryVotesByProposalResponse>): _68.QueryVotesByProposalResponse;
                fromAmino(object: _68.QueryVotesByProposalResponseAmino): _68.QueryVotesByProposalResponse;
                toAmino(message: _68.QueryVotesByProposalResponse): _68.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _68.QueryVotesByProposalResponseAminoMsg): _68.QueryVotesByProposalResponse;
                toAminoMsg(message: _68.QueryVotesByProposalResponse): _68.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _68.QueryVotesByProposalResponseProtoMsg): _68.QueryVotesByProposalResponse;
                toProto(message: _68.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _68.QueryVotesByProposalResponse): _68.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _68.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryVotesByVoterRequest;
                fromJSON(object: any): _68.QueryVotesByVoterRequest;
                toJSON(message: _68.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_68.QueryVotesByVoterRequest>): _68.QueryVotesByVoterRequest;
                fromAmino(object: _68.QueryVotesByVoterRequestAmino): _68.QueryVotesByVoterRequest;
                toAmino(message: _68.QueryVotesByVoterRequest): _68.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _68.QueryVotesByVoterRequestAminoMsg): _68.QueryVotesByVoterRequest;
                toAminoMsg(message: _68.QueryVotesByVoterRequest): _68.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _68.QueryVotesByVoterRequestProtoMsg): _68.QueryVotesByVoterRequest;
                toProto(message: _68.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _68.QueryVotesByVoterRequest): _68.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _68.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryVotesByVoterResponse;
                fromJSON(object: any): _68.QueryVotesByVoterResponse;
                toJSON(message: _68.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_68.QueryVotesByVoterResponse>): _68.QueryVotesByVoterResponse;
                fromAmino(object: _68.QueryVotesByVoterResponseAmino): _68.QueryVotesByVoterResponse;
                toAmino(message: _68.QueryVotesByVoterResponse): _68.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _68.QueryVotesByVoterResponseAminoMsg): _68.QueryVotesByVoterResponse;
                toAminoMsg(message: _68.QueryVotesByVoterResponse): _68.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _68.QueryVotesByVoterResponseProtoMsg): _68.QueryVotesByVoterResponse;
                toProto(message: _68.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _68.QueryVotesByVoterResponse): _68.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _68.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGroupsByMemberRequest;
                fromJSON(object: any): _68.QueryGroupsByMemberRequest;
                toJSON(message: _68.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_68.QueryGroupsByMemberRequest>): _68.QueryGroupsByMemberRequest;
                fromAmino(object: _68.QueryGroupsByMemberRequestAmino): _68.QueryGroupsByMemberRequest;
                toAmino(message: _68.QueryGroupsByMemberRequest): _68.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _68.QueryGroupsByMemberRequestAminoMsg): _68.QueryGroupsByMemberRequest;
                toAminoMsg(message: _68.QueryGroupsByMemberRequest): _68.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _68.QueryGroupsByMemberRequestProtoMsg): _68.QueryGroupsByMemberRequest;
                toProto(message: _68.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _68.QueryGroupsByMemberRequest): _68.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _68.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGroupsByMemberResponse;
                fromJSON(object: any): _68.QueryGroupsByMemberResponse;
                toJSON(message: _68.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_68.QueryGroupsByMemberResponse>): _68.QueryGroupsByMemberResponse;
                fromAmino(object: _68.QueryGroupsByMemberResponseAmino): _68.QueryGroupsByMemberResponse;
                toAmino(message: _68.QueryGroupsByMemberResponse): _68.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _68.QueryGroupsByMemberResponseAminoMsg): _68.QueryGroupsByMemberResponse;
                toAminoMsg(message: _68.QueryGroupsByMemberResponse): _68.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _68.QueryGroupsByMemberResponseProtoMsg): _68.QueryGroupsByMemberResponse;
                toProto(message: _68.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _68.QueryGroupsByMemberResponse): _68.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _68.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryTallyResultRequest;
                fromJSON(object: any): _68.QueryTallyResultRequest;
                toJSON(message: _68.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_68.QueryTallyResultRequest>): _68.QueryTallyResultRequest;
                fromAmino(object: _68.QueryTallyResultRequestAmino): _68.QueryTallyResultRequest;
                toAmino(message: _68.QueryTallyResultRequest): _68.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _68.QueryTallyResultRequestAminoMsg): _68.QueryTallyResultRequest;
                toAminoMsg(message: _68.QueryTallyResultRequest): _68.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _68.QueryTallyResultRequestProtoMsg): _68.QueryTallyResultRequest;
                toProto(message: _68.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _68.QueryTallyResultRequest): _68.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _68.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryTallyResultResponse;
                fromJSON(object: any): _68.QueryTallyResultResponse;
                toJSON(message: _68.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_68.QueryTallyResultResponse>): _68.QueryTallyResultResponse;
                fromAmino(object: _68.QueryTallyResultResponseAmino): _68.QueryTallyResultResponse;
                toAmino(message: _68.QueryTallyResultResponse): _68.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _68.QueryTallyResultResponseAminoMsg): _68.QueryTallyResultResponse;
                toAminoMsg(message: _68.QueryTallyResultResponse): _68.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _68.QueryTallyResultResponseProtoMsg): _68.QueryTallyResultResponse;
                toProto(message: _68.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _68.QueryTallyResultResponse): _68.QueryTallyResultResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _67.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.GenesisState;
                fromJSON(object: any): _67.GenesisState;
                toJSON(message: _67.GenesisState): unknown;
                fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
                fromAmino(object: _67.GenesisStateAmino): _67.GenesisState;
                toAmino(message: _67.GenesisState): _67.GenesisStateAmino;
                fromAminoMsg(object: _67.GenesisStateAminoMsg): _67.GenesisState;
                toAminoMsg(message: _67.GenesisState): _67.GenesisStateAminoMsg;
                fromProtoMsg(message: _67.GenesisStateProtoMsg): _67.GenesisState;
                toProto(message: _67.GenesisState): Uint8Array;
                toProtoMsg(message: _67.GenesisState): _67.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _66.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventCreateGroup;
                fromJSON(object: any): _66.EventCreateGroup;
                toJSON(message: _66.EventCreateGroup): unknown;
                fromPartial(object: Partial<_66.EventCreateGroup>): _66.EventCreateGroup;
                fromAmino(object: _66.EventCreateGroupAmino): _66.EventCreateGroup;
                toAmino(message: _66.EventCreateGroup): _66.EventCreateGroupAmino;
                fromAminoMsg(object: _66.EventCreateGroupAminoMsg): _66.EventCreateGroup;
                toAminoMsg(message: _66.EventCreateGroup): _66.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _66.EventCreateGroupProtoMsg): _66.EventCreateGroup;
                toProto(message: _66.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _66.EventCreateGroup): _66.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _66.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventUpdateGroup;
                fromJSON(object: any): _66.EventUpdateGroup;
                toJSON(message: _66.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_66.EventUpdateGroup>): _66.EventUpdateGroup;
                fromAmino(object: _66.EventUpdateGroupAmino): _66.EventUpdateGroup;
                toAmino(message: _66.EventUpdateGroup): _66.EventUpdateGroupAmino;
                fromAminoMsg(object: _66.EventUpdateGroupAminoMsg): _66.EventUpdateGroup;
                toAminoMsg(message: _66.EventUpdateGroup): _66.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _66.EventUpdateGroupProtoMsg): _66.EventUpdateGroup;
                toProto(message: _66.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _66.EventUpdateGroup): _66.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _66.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventCreateGroupPolicy;
                fromJSON(object: any): _66.EventCreateGroupPolicy;
                toJSON(message: _66.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_66.EventCreateGroupPolicy>): _66.EventCreateGroupPolicy;
                fromAmino(object: _66.EventCreateGroupPolicyAmino): _66.EventCreateGroupPolicy;
                toAmino(message: _66.EventCreateGroupPolicy): _66.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _66.EventCreateGroupPolicyAminoMsg): _66.EventCreateGroupPolicy;
                toAminoMsg(message: _66.EventCreateGroupPolicy): _66.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _66.EventCreateGroupPolicyProtoMsg): _66.EventCreateGroupPolicy;
                toProto(message: _66.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _66.EventCreateGroupPolicy): _66.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _66.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventUpdateGroupPolicy;
                fromJSON(object: any): _66.EventUpdateGroupPolicy;
                toJSON(message: _66.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_66.EventUpdateGroupPolicy>): _66.EventUpdateGroupPolicy;
                fromAmino(object: _66.EventUpdateGroupPolicyAmino): _66.EventUpdateGroupPolicy;
                toAmino(message: _66.EventUpdateGroupPolicy): _66.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _66.EventUpdateGroupPolicyAminoMsg): _66.EventUpdateGroupPolicy;
                toAminoMsg(message: _66.EventUpdateGroupPolicy): _66.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _66.EventUpdateGroupPolicyProtoMsg): _66.EventUpdateGroupPolicy;
                toProto(message: _66.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _66.EventUpdateGroupPolicy): _66.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _66.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventSubmitProposal;
                fromJSON(object: any): _66.EventSubmitProposal;
                toJSON(message: _66.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_66.EventSubmitProposal>): _66.EventSubmitProposal;
                fromAmino(object: _66.EventSubmitProposalAmino): _66.EventSubmitProposal;
                toAmino(message: _66.EventSubmitProposal): _66.EventSubmitProposalAmino;
                fromAminoMsg(object: _66.EventSubmitProposalAminoMsg): _66.EventSubmitProposal;
                toAminoMsg(message: _66.EventSubmitProposal): _66.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _66.EventSubmitProposalProtoMsg): _66.EventSubmitProposal;
                toProto(message: _66.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _66.EventSubmitProposal): _66.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _66.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventWithdrawProposal;
                fromJSON(object: any): _66.EventWithdrawProposal;
                toJSON(message: _66.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_66.EventWithdrawProposal>): _66.EventWithdrawProposal;
                fromAmino(object: _66.EventWithdrawProposalAmino): _66.EventWithdrawProposal;
                toAmino(message: _66.EventWithdrawProposal): _66.EventWithdrawProposalAmino;
                fromAminoMsg(object: _66.EventWithdrawProposalAminoMsg): _66.EventWithdrawProposal;
                toAminoMsg(message: _66.EventWithdrawProposal): _66.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _66.EventWithdrawProposalProtoMsg): _66.EventWithdrawProposal;
                toProto(message: _66.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _66.EventWithdrawProposal): _66.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _66.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventVote;
                fromJSON(object: any): _66.EventVote;
                toJSON(message: _66.EventVote): unknown;
                fromPartial(object: Partial<_66.EventVote>): _66.EventVote;
                fromAmino(object: _66.EventVoteAmino): _66.EventVote;
                toAmino(message: _66.EventVote): _66.EventVoteAmino;
                fromAminoMsg(object: _66.EventVoteAminoMsg): _66.EventVote;
                toAminoMsg(message: _66.EventVote): _66.EventVoteAminoMsg;
                fromProtoMsg(message: _66.EventVoteProtoMsg): _66.EventVote;
                toProto(message: _66.EventVote): Uint8Array;
                toProtoMsg(message: _66.EventVote): _66.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _66.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventExec;
                fromJSON(object: any): _66.EventExec;
                toJSON(message: _66.EventExec): unknown;
                fromPartial(object: Partial<_66.EventExec>): _66.EventExec;
                fromAmino(object: _66.EventExecAmino): _66.EventExec;
                toAmino(message: _66.EventExec): _66.EventExecAmino;
                fromAminoMsg(object: _66.EventExecAminoMsg): _66.EventExec;
                toAminoMsg(message: _66.EventExec): _66.EventExecAminoMsg;
                fromProtoMsg(message: _66.EventExecProtoMsg): _66.EventExec;
                toProto(message: _66.EventExec): Uint8Array;
                toProtoMsg(message: _66.EventExec): _66.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _66.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventLeaveGroup;
                fromJSON(object: any): _66.EventLeaveGroup;
                toJSON(message: _66.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_66.EventLeaveGroup>): _66.EventLeaveGroup;
                fromAmino(object: _66.EventLeaveGroupAmino): _66.EventLeaveGroup;
                toAmino(message: _66.EventLeaveGroup): _66.EventLeaveGroupAmino;
                fromAminoMsg(object: _66.EventLeaveGroupAminoMsg): _66.EventLeaveGroup;
                toAminoMsg(message: _66.EventLeaveGroup): _66.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _66.EventLeaveGroupProtoMsg): _66.EventLeaveGroup;
                toProto(message: _66.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _66.EventLeaveGroup): _66.EventLeaveGroupProtoMsg;
            };
        };
    }
    namespace ics23 {
        const v1: {
            hashOpFromJSON(object: any): _71.HashOp;
            hashOpToJSON(object: _71.HashOp): string;
            lengthOpFromJSON(object: any): _71.LengthOp;
            lengthOpToJSON(object: _71.LengthOp): string;
            HashOp: typeof _71.HashOp;
            HashOpSDKType: typeof _71.HashOp;
            HashOpAmino: typeof _71.HashOp;
            LengthOp: typeof _71.LengthOp;
            LengthOpSDKType: typeof _71.LengthOp;
            LengthOpAmino: typeof _71.LengthOp;
            ExistenceProof: {
                typeUrl: string;
                encode(message: _71.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ExistenceProof;
                fromJSON(object: any): _71.ExistenceProof;
                toJSON(message: _71.ExistenceProof): unknown;
                fromPartial(object: Partial<_71.ExistenceProof>): _71.ExistenceProof;
                fromAmino(object: _71.ExistenceProofAmino): _71.ExistenceProof;
                toAmino(message: _71.ExistenceProof): _71.ExistenceProofAmino;
                fromAminoMsg(object: _71.ExistenceProofAminoMsg): _71.ExistenceProof;
                toAminoMsg(message: _71.ExistenceProof): _71.ExistenceProofAminoMsg;
                fromProtoMsg(message: _71.ExistenceProofProtoMsg): _71.ExistenceProof;
                toProto(message: _71.ExistenceProof): Uint8Array;
                toProtoMsg(message: _71.ExistenceProof): _71.ExistenceProofProtoMsg;
            };
            NonExistenceProof: {
                typeUrl: string;
                encode(message: _71.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.NonExistenceProof;
                fromJSON(object: any): _71.NonExistenceProof;
                toJSON(message: _71.NonExistenceProof): unknown;
                fromPartial(object: Partial<_71.NonExistenceProof>): _71.NonExistenceProof;
                fromAmino(object: _71.NonExistenceProofAmino): _71.NonExistenceProof;
                toAmino(message: _71.NonExistenceProof): _71.NonExistenceProofAmino;
                fromAminoMsg(object: _71.NonExistenceProofAminoMsg): _71.NonExistenceProof;
                toAminoMsg(message: _71.NonExistenceProof): _71.NonExistenceProofAminoMsg;
                fromProtoMsg(message: _71.NonExistenceProofProtoMsg): _71.NonExistenceProof;
                toProto(message: _71.NonExistenceProof): Uint8Array;
                toProtoMsg(message: _71.NonExistenceProof): _71.NonExistenceProofProtoMsg;
            };
            CommitmentProof: {
                typeUrl: string;
                encode(message: _71.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.CommitmentProof;
                fromJSON(object: any): _71.CommitmentProof;
                toJSON(message: _71.CommitmentProof): unknown;
                fromPartial(object: Partial<_71.CommitmentProof>): _71.CommitmentProof;
                fromAmino(object: _71.CommitmentProofAmino): _71.CommitmentProof;
                toAmino(message: _71.CommitmentProof): _71.CommitmentProofAmino;
                fromAminoMsg(object: _71.CommitmentProofAminoMsg): _71.CommitmentProof;
                toAminoMsg(message: _71.CommitmentProof): _71.CommitmentProofAminoMsg;
                fromProtoMsg(message: _71.CommitmentProofProtoMsg): _71.CommitmentProof;
                toProto(message: _71.CommitmentProof): Uint8Array;
                toProtoMsg(message: _71.CommitmentProof): _71.CommitmentProofProtoMsg;
            };
            LeafOp: {
                typeUrl: string;
                encode(message: _71.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.LeafOp;
                fromJSON(object: any): _71.LeafOp;
                toJSON(message: _71.LeafOp): unknown;
                fromPartial(object: Partial<_71.LeafOp>): _71.LeafOp;
                fromAmino(object: _71.LeafOpAmino): _71.LeafOp;
                toAmino(message: _71.LeafOp): _71.LeafOpAmino;
                fromAminoMsg(object: _71.LeafOpAminoMsg): _71.LeafOp;
                toAminoMsg(message: _71.LeafOp): _71.LeafOpAminoMsg;
                fromProtoMsg(message: _71.LeafOpProtoMsg): _71.LeafOp;
                toProto(message: _71.LeafOp): Uint8Array;
                toProtoMsg(message: _71.LeafOp): _71.LeafOpProtoMsg;
            };
            InnerOp: {
                typeUrl: string;
                encode(message: _71.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.InnerOp;
                fromJSON(object: any): _71.InnerOp;
                toJSON(message: _71.InnerOp): unknown;
                fromPartial(object: Partial<_71.InnerOp>): _71.InnerOp;
                fromAmino(object: _71.InnerOpAmino): _71.InnerOp;
                toAmino(message: _71.InnerOp): _71.InnerOpAmino;
                fromAminoMsg(object: _71.InnerOpAminoMsg): _71.InnerOp;
                toAminoMsg(message: _71.InnerOp): _71.InnerOpAminoMsg;
                fromProtoMsg(message: _71.InnerOpProtoMsg): _71.InnerOp;
                toProto(message: _71.InnerOp): Uint8Array;
                toProtoMsg(message: _71.InnerOp): _71.InnerOpProtoMsg;
            };
            ProofSpec: {
                typeUrl: string;
                encode(message: _71.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ProofSpec;
                fromJSON(object: any): _71.ProofSpec;
                toJSON(message: _71.ProofSpec): unknown;
                fromPartial(object: Partial<_71.ProofSpec>): _71.ProofSpec;
                fromAmino(object: _71.ProofSpecAmino): _71.ProofSpec;
                toAmino(message: _71.ProofSpec): _71.ProofSpecAmino;
                fromAminoMsg(object: _71.ProofSpecAminoMsg): _71.ProofSpec;
                toAminoMsg(message: _71.ProofSpec): _71.ProofSpecAminoMsg;
                fromProtoMsg(message: _71.ProofSpecProtoMsg): _71.ProofSpec;
                toProto(message: _71.ProofSpec): Uint8Array;
                toProtoMsg(message: _71.ProofSpec): _71.ProofSpecProtoMsg;
            };
            InnerSpec: {
                typeUrl: string;
                encode(message: _71.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.InnerSpec;
                fromJSON(object: any): _71.InnerSpec;
                toJSON(message: _71.InnerSpec): unknown;
                fromPartial(object: Partial<_71.InnerSpec>): _71.InnerSpec;
                fromAmino(object: _71.InnerSpecAmino): _71.InnerSpec;
                toAmino(message: _71.InnerSpec): _71.InnerSpecAmino;
                fromAminoMsg(object: _71.InnerSpecAminoMsg): _71.InnerSpec;
                toAminoMsg(message: _71.InnerSpec): _71.InnerSpecAminoMsg;
                fromProtoMsg(message: _71.InnerSpecProtoMsg): _71.InnerSpec;
                toProto(message: _71.InnerSpec): Uint8Array;
                toProtoMsg(message: _71.InnerSpec): _71.InnerSpecProtoMsg;
            };
            BatchProof: {
                typeUrl: string;
                encode(message: _71.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.BatchProof;
                fromJSON(object: any): _71.BatchProof;
                toJSON(message: _71.BatchProof): unknown;
                fromPartial(object: Partial<_71.BatchProof>): _71.BatchProof;
                fromAmino(object: _71.BatchProofAmino): _71.BatchProof;
                toAmino(message: _71.BatchProof): _71.BatchProofAmino;
                fromAminoMsg(object: _71.BatchProofAminoMsg): _71.BatchProof;
                toAminoMsg(message: _71.BatchProof): _71.BatchProofAminoMsg;
                fromProtoMsg(message: _71.BatchProofProtoMsg): _71.BatchProof;
                toProto(message: _71.BatchProof): Uint8Array;
                toProtoMsg(message: _71.BatchProof): _71.BatchProofProtoMsg;
            };
            BatchEntry: {
                typeUrl: string;
                encode(message: _71.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.BatchEntry;
                fromJSON(object: any): _71.BatchEntry;
                toJSON(message: _71.BatchEntry): unknown;
                fromPartial(object: Partial<_71.BatchEntry>): _71.BatchEntry;
                fromAmino(object: _71.BatchEntryAmino): _71.BatchEntry;
                toAmino(message: _71.BatchEntry): _71.BatchEntryAmino;
                fromAminoMsg(object: _71.BatchEntryAminoMsg): _71.BatchEntry;
                toAminoMsg(message: _71.BatchEntry): _71.BatchEntryAminoMsg;
                fromProtoMsg(message: _71.BatchEntryProtoMsg): _71.BatchEntry;
                toProto(message: _71.BatchEntry): Uint8Array;
                toProtoMsg(message: _71.BatchEntry): _71.BatchEntryProtoMsg;
            };
            CompressedBatchProof: {
                typeUrl: string;
                encode(message: _71.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.CompressedBatchProof;
                fromJSON(object: any): _71.CompressedBatchProof;
                toJSON(message: _71.CompressedBatchProof): unknown;
                fromPartial(object: Partial<_71.CompressedBatchProof>): _71.CompressedBatchProof;
                fromAmino(object: _71.CompressedBatchProofAmino): _71.CompressedBatchProof;
                toAmino(message: _71.CompressedBatchProof): _71.CompressedBatchProofAmino;
                fromAminoMsg(object: _71.CompressedBatchProofAminoMsg): _71.CompressedBatchProof;
                toAminoMsg(message: _71.CompressedBatchProof): _71.CompressedBatchProofAminoMsg;
                fromProtoMsg(message: _71.CompressedBatchProofProtoMsg): _71.CompressedBatchProof;
                toProto(message: _71.CompressedBatchProof): Uint8Array;
                toProtoMsg(message: _71.CompressedBatchProof): _71.CompressedBatchProofProtoMsg;
            };
            CompressedBatchEntry: {
                typeUrl: string;
                encode(message: _71.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.CompressedBatchEntry;
                fromJSON(object: any): _71.CompressedBatchEntry;
                toJSON(message: _71.CompressedBatchEntry): unknown;
                fromPartial(object: Partial<_71.CompressedBatchEntry>): _71.CompressedBatchEntry;
                fromAmino(object: _71.CompressedBatchEntryAmino): _71.CompressedBatchEntry;
                toAmino(message: _71.CompressedBatchEntry): _71.CompressedBatchEntryAmino;
                fromAminoMsg(object: _71.CompressedBatchEntryAminoMsg): _71.CompressedBatchEntry;
                toAminoMsg(message: _71.CompressedBatchEntry): _71.CompressedBatchEntryAminoMsg;
                fromProtoMsg(message: _71.CompressedBatchEntryProtoMsg): _71.CompressedBatchEntry;
                toProto(message: _71.CompressedBatchEntry): Uint8Array;
                toProtoMsg(message: _71.CompressedBatchEntry): _71.CompressedBatchEntryProtoMsg;
            };
            CompressedExistenceProof: {
                typeUrl: string;
                encode(message: _71.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.CompressedExistenceProof;
                fromJSON(object: any): _71.CompressedExistenceProof;
                toJSON(message: _71.CompressedExistenceProof): unknown;
                fromPartial(object: Partial<_71.CompressedExistenceProof>): _71.CompressedExistenceProof;
                fromAmino(object: _71.CompressedExistenceProofAmino): _71.CompressedExistenceProof;
                toAmino(message: _71.CompressedExistenceProof): _71.CompressedExistenceProofAmino;
                fromAminoMsg(object: _71.CompressedExistenceProofAminoMsg): _71.CompressedExistenceProof;
                toAminoMsg(message: _71.CompressedExistenceProof): _71.CompressedExistenceProofAminoMsg;
                fromProtoMsg(message: _71.CompressedExistenceProofProtoMsg): _71.CompressedExistenceProof;
                toProto(message: _71.CompressedExistenceProof): Uint8Array;
                toProtoMsg(message: _71.CompressedExistenceProof): _71.CompressedExistenceProofProtoMsg;
            };
            CompressedNonExistenceProof: {
                typeUrl: string;
                encode(message: _71.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.CompressedNonExistenceProof;
                fromJSON(object: any): _71.CompressedNonExistenceProof;
                toJSON(message: _71.CompressedNonExistenceProof): unknown;
                fromPartial(object: Partial<_71.CompressedNonExistenceProof>): _71.CompressedNonExistenceProof;
                fromAmino(object: _71.CompressedNonExistenceProofAmino): _71.CompressedNonExistenceProof;
                toAmino(message: _71.CompressedNonExistenceProof): _71.CompressedNonExistenceProofAmino;
                fromAminoMsg(object: _71.CompressedNonExistenceProofAminoMsg): _71.CompressedNonExistenceProof;
                toAminoMsg(message: _71.CompressedNonExistenceProof): _71.CompressedNonExistenceProofAminoMsg;
                fromProtoMsg(message: _71.CompressedNonExistenceProofProtoMsg): _71.CompressedNonExistenceProof;
                toProto(message: _71.CompressedNonExistenceProof): Uint8Array;
                toProtoMsg(message: _71.CompressedNonExistenceProof): _71.CompressedNonExistenceProofProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _259.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                inflation(request?: _74.QueryInflationRequest): Promise<_74.QueryInflationResponse>;
                annualProvisions(request?: _74.QueryAnnualProvisionsRequest): Promise<_74.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _240.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _74.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryParamsRequest;
                fromJSON(_: any): _74.QueryParamsRequest;
                toJSON(_: _74.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_74.QueryParamsRequest>): _74.QueryParamsRequest;
                fromAmino(_: _74.QueryParamsRequestAmino): _74.QueryParamsRequest;
                toAmino(_: _74.QueryParamsRequest): _74.QueryParamsRequestAmino;
                fromAminoMsg(object: _74.QueryParamsRequestAminoMsg): _74.QueryParamsRequest;
                toAminoMsg(message: _74.QueryParamsRequest): _74.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryParamsRequestProtoMsg): _74.QueryParamsRequest;
                toProto(message: _74.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryParamsRequest): _74.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _74.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryParamsResponse;
                fromJSON(object: any): _74.QueryParamsResponse;
                toJSON(message: _74.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_74.QueryParamsResponse>): _74.QueryParamsResponse;
                fromAmino(object: _74.QueryParamsResponseAmino): _74.QueryParamsResponse;
                toAmino(message: _74.QueryParamsResponse): _74.QueryParamsResponseAmino;
                fromAminoMsg(object: _74.QueryParamsResponseAminoMsg): _74.QueryParamsResponse;
                toAminoMsg(message: _74.QueryParamsResponse): _74.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryParamsResponseProtoMsg): _74.QueryParamsResponse;
                toProto(message: _74.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryParamsResponse): _74.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _74.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryInflationRequest;
                fromJSON(_: any): _74.QueryInflationRequest;
                toJSON(_: _74.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_74.QueryInflationRequest>): _74.QueryInflationRequest;
                fromAmino(_: _74.QueryInflationRequestAmino): _74.QueryInflationRequest;
                toAmino(_: _74.QueryInflationRequest): _74.QueryInflationRequestAmino;
                fromAminoMsg(object: _74.QueryInflationRequestAminoMsg): _74.QueryInflationRequest;
                toAminoMsg(message: _74.QueryInflationRequest): _74.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _74.QueryInflationRequestProtoMsg): _74.QueryInflationRequest;
                toProto(message: _74.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _74.QueryInflationRequest): _74.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _74.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryInflationResponse;
                fromJSON(object: any): _74.QueryInflationResponse;
                toJSON(message: _74.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_74.QueryInflationResponse>): _74.QueryInflationResponse;
                fromAmino(object: _74.QueryInflationResponseAmino): _74.QueryInflationResponse;
                toAmino(message: _74.QueryInflationResponse): _74.QueryInflationResponseAmino;
                fromAminoMsg(object: _74.QueryInflationResponseAminoMsg): _74.QueryInflationResponse;
                toAminoMsg(message: _74.QueryInflationResponse): _74.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _74.QueryInflationResponseProtoMsg): _74.QueryInflationResponse;
                toProto(message: _74.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _74.QueryInflationResponse): _74.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _74.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _74.QueryAnnualProvisionsRequest;
                toJSON(_: _74.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_74.QueryAnnualProvisionsRequest>): _74.QueryAnnualProvisionsRequest;
                fromAmino(_: _74.QueryAnnualProvisionsRequestAmino): _74.QueryAnnualProvisionsRequest;
                toAmino(_: _74.QueryAnnualProvisionsRequest): _74.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _74.QueryAnnualProvisionsRequestAminoMsg): _74.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _74.QueryAnnualProvisionsRequest): _74.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryAnnualProvisionsRequestProtoMsg): _74.QueryAnnualProvisionsRequest;
                toProto(message: _74.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryAnnualProvisionsRequest): _74.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _74.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _74.QueryAnnualProvisionsResponse;
                toJSON(message: _74.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_74.QueryAnnualProvisionsResponse>): _74.QueryAnnualProvisionsResponse;
                fromAmino(object: _74.QueryAnnualProvisionsResponseAmino): _74.QueryAnnualProvisionsResponse;
                toAmino(message: _74.QueryAnnualProvisionsResponse): _74.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _74.QueryAnnualProvisionsResponseAminoMsg): _74.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _74.QueryAnnualProvisionsResponse): _74.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryAnnualProvisionsResponseProtoMsg): _74.QueryAnnualProvisionsResponse;
                toProto(message: _74.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryAnnualProvisionsResponse): _74.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _73.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Minter;
                fromJSON(object: any): _73.Minter;
                toJSON(message: _73.Minter): unknown;
                fromPartial(object: Partial<_73.Minter>): _73.Minter;
                fromAmino(object: _73.MinterAmino): _73.Minter;
                toAmino(message: _73.Minter): _73.MinterAmino;
                fromAminoMsg(object: _73.MinterAminoMsg): _73.Minter;
                toAminoMsg(message: _73.Minter): _73.MinterAminoMsg;
                fromProtoMsg(message: _73.MinterProtoMsg): _73.Minter;
                toProto(message: _73.Minter): Uint8Array;
                toProtoMsg(message: _73.Minter): _73.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _73.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Params;
                fromJSON(object: any): _73.Params;
                toJSON(message: _73.Params): unknown;
                fromPartial(object: Partial<_73.Params>): _73.Params;
                fromAmino(object: _73.ParamsAmino): _73.Params;
                toAmino(message: _73.Params): _73.ParamsAmino;
                fromAminoMsg(object: _73.ParamsAminoMsg): _73.Params;
                toAminoMsg(message: _73.Params): _73.ParamsAminoMsg;
                fromProtoMsg(message: _73.ParamsProtoMsg): _73.Params;
                toProto(message: _73.Params): Uint8Array;
                toProtoMsg(message: _73.Params): _73.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _72.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GenesisState;
                fromJSON(object: any): _72.GenesisState;
                toJSON(message: _72.GenesisState): unknown;
                fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
                fromAmino(object: _72.GenesisStateAmino): _72.GenesisState;
                toAmino(message: _72.GenesisState): _72.GenesisStateAmino;
                fromAminoMsg(object: _72.GenesisStateAminoMsg): _72.GenesisState;
                toAminoMsg(message: _72.GenesisState): _72.GenesisStateAminoMsg;
                fromProtoMsg(message: _72.GenesisStateProtoMsg): _72.GenesisState;
                toProto(message: _72.GenesisState): Uint8Array;
                toProtoMsg(message: _72.GenesisState): _72.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _276.MsgClientImpl;
            QueryClientImpl: typeof _260.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _79.QueryBalanceRequest): Promise<_79.QueryBalanceResponse>;
                owner(request: _79.QueryOwnerRequest): Promise<_79.QueryOwnerResponse>;
                supply(request: _79.QuerySupplyRequest): Promise<_79.QuerySupplyResponse>;
                nFTs(request: _79.QueryNFTsRequest): Promise<_79.QueryNFTsResponse>;
                nFT(request: _79.QueryNFTRequest): Promise<_79.QueryNFTResponse>;
                class(request: _79.QueryClassRequest): Promise<_79.QueryClassResponse>;
                classes(request?: _79.QueryClassesRequest): Promise<_79.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _241.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _80.MsgSend): {
                        typeUrl: string;
                        value: _80.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _80.MsgSend) => _80.MsgSendAmino;
                    fromAmino: (object: _80.MsgSendAmino) => _80.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _80.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgSend;
                fromJSON(object: any): _80.MsgSend;
                toJSON(message: _80.MsgSend): unknown;
                fromPartial(object: Partial<_80.MsgSend>): _80.MsgSend;
                fromAmino(object: _80.MsgSendAmino): _80.MsgSend;
                toAmino(message: _80.MsgSend): _80.MsgSendAmino;
                fromAminoMsg(object: _80.MsgSendAminoMsg): _80.MsgSend;
                toAminoMsg(message: _80.MsgSend): _80.MsgSendAminoMsg;
                fromProtoMsg(message: _80.MsgSendProtoMsg): _80.MsgSend;
                toProto(message: _80.MsgSend): Uint8Array;
                toProtoMsg(message: _80.MsgSend): _80.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _80.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgSendResponse;
                fromJSON(_: any): _80.MsgSendResponse;
                toJSON(_: _80.MsgSendResponse): unknown;
                fromPartial(_: Partial<_80.MsgSendResponse>): _80.MsgSendResponse;
                fromAmino(_: _80.MsgSendResponseAmino): _80.MsgSendResponse;
                toAmino(_: _80.MsgSendResponse): _80.MsgSendResponseAmino;
                fromAminoMsg(object: _80.MsgSendResponseAminoMsg): _80.MsgSendResponse;
                toAminoMsg(message: _80.MsgSendResponse): _80.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _80.MsgSendResponseProtoMsg): _80.MsgSendResponse;
                toProto(message: _80.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _80.MsgSendResponse): _80.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _79.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryBalanceRequest;
                fromJSON(object: any): _79.QueryBalanceRequest;
                toJSON(message: _79.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_79.QueryBalanceRequest>): _79.QueryBalanceRequest;
                fromAmino(object: _79.QueryBalanceRequestAmino): _79.QueryBalanceRequest;
                toAmino(message: _79.QueryBalanceRequest): _79.QueryBalanceRequestAmino;
                fromAminoMsg(object: _79.QueryBalanceRequestAminoMsg): _79.QueryBalanceRequest;
                toAminoMsg(message: _79.QueryBalanceRequest): _79.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _79.QueryBalanceRequestProtoMsg): _79.QueryBalanceRequest;
                toProto(message: _79.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _79.QueryBalanceRequest): _79.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _79.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryBalanceResponse;
                fromJSON(object: any): _79.QueryBalanceResponse;
                toJSON(message: _79.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_79.QueryBalanceResponse>): _79.QueryBalanceResponse;
                fromAmino(object: _79.QueryBalanceResponseAmino): _79.QueryBalanceResponse;
                toAmino(message: _79.QueryBalanceResponse): _79.QueryBalanceResponseAmino;
                fromAminoMsg(object: _79.QueryBalanceResponseAminoMsg): _79.QueryBalanceResponse;
                toAminoMsg(message: _79.QueryBalanceResponse): _79.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _79.QueryBalanceResponseProtoMsg): _79.QueryBalanceResponse;
                toProto(message: _79.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _79.QueryBalanceResponse): _79.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _79.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryOwnerRequest;
                fromJSON(object: any): _79.QueryOwnerRequest;
                toJSON(message: _79.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_79.QueryOwnerRequest>): _79.QueryOwnerRequest;
                fromAmino(object: _79.QueryOwnerRequestAmino): _79.QueryOwnerRequest;
                toAmino(message: _79.QueryOwnerRequest): _79.QueryOwnerRequestAmino;
                fromAminoMsg(object: _79.QueryOwnerRequestAminoMsg): _79.QueryOwnerRequest;
                toAminoMsg(message: _79.QueryOwnerRequest): _79.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _79.QueryOwnerRequestProtoMsg): _79.QueryOwnerRequest;
                toProto(message: _79.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _79.QueryOwnerRequest): _79.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _79.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryOwnerResponse;
                fromJSON(object: any): _79.QueryOwnerResponse;
                toJSON(message: _79.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_79.QueryOwnerResponse>): _79.QueryOwnerResponse;
                fromAmino(object: _79.QueryOwnerResponseAmino): _79.QueryOwnerResponse;
                toAmino(message: _79.QueryOwnerResponse): _79.QueryOwnerResponseAmino;
                fromAminoMsg(object: _79.QueryOwnerResponseAminoMsg): _79.QueryOwnerResponse;
                toAminoMsg(message: _79.QueryOwnerResponse): _79.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _79.QueryOwnerResponseProtoMsg): _79.QueryOwnerResponse;
                toProto(message: _79.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _79.QueryOwnerResponse): _79.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _79.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySupplyRequest;
                fromJSON(object: any): _79.QuerySupplyRequest;
                toJSON(message: _79.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_79.QuerySupplyRequest>): _79.QuerySupplyRequest;
                fromAmino(object: _79.QuerySupplyRequestAmino): _79.QuerySupplyRequest;
                toAmino(message: _79.QuerySupplyRequest): _79.QuerySupplyRequestAmino;
                fromAminoMsg(object: _79.QuerySupplyRequestAminoMsg): _79.QuerySupplyRequest;
                toAminoMsg(message: _79.QuerySupplyRequest): _79.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _79.QuerySupplyRequestProtoMsg): _79.QuerySupplyRequest;
                toProto(message: _79.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _79.QuerySupplyRequest): _79.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _79.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QuerySupplyResponse;
                fromJSON(object: any): _79.QuerySupplyResponse;
                toJSON(message: _79.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_79.QuerySupplyResponse>): _79.QuerySupplyResponse;
                fromAmino(object: _79.QuerySupplyResponseAmino): _79.QuerySupplyResponse;
                toAmino(message: _79.QuerySupplyResponse): _79.QuerySupplyResponseAmino;
                fromAminoMsg(object: _79.QuerySupplyResponseAminoMsg): _79.QuerySupplyResponse;
                toAminoMsg(message: _79.QuerySupplyResponse): _79.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _79.QuerySupplyResponseProtoMsg): _79.QuerySupplyResponse;
                toProto(message: _79.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _79.QuerySupplyResponse): _79.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _79.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryNFTsRequest;
                fromJSON(object: any): _79.QueryNFTsRequest;
                toJSON(message: _79.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_79.QueryNFTsRequest>): _79.QueryNFTsRequest;
                fromAmino(object: _79.QueryNFTsRequestAmino): _79.QueryNFTsRequest;
                toAmino(message: _79.QueryNFTsRequest): _79.QueryNFTsRequestAmino;
                fromAminoMsg(object: _79.QueryNFTsRequestAminoMsg): _79.QueryNFTsRequest;
                toAminoMsg(message: _79.QueryNFTsRequest): _79.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _79.QueryNFTsRequestProtoMsg): _79.QueryNFTsRequest;
                toProto(message: _79.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryNFTsRequest): _79.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _79.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryNFTsResponse;
                fromJSON(object: any): _79.QueryNFTsResponse;
                toJSON(message: _79.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_79.QueryNFTsResponse>): _79.QueryNFTsResponse;
                fromAmino(object: _79.QueryNFTsResponseAmino): _79.QueryNFTsResponse;
                toAmino(message: _79.QueryNFTsResponse): _79.QueryNFTsResponseAmino;
                fromAminoMsg(object: _79.QueryNFTsResponseAminoMsg): _79.QueryNFTsResponse;
                toAminoMsg(message: _79.QueryNFTsResponse): _79.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _79.QueryNFTsResponseProtoMsg): _79.QueryNFTsResponse;
                toProto(message: _79.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryNFTsResponse): _79.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _79.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryNFTRequest;
                fromJSON(object: any): _79.QueryNFTRequest;
                toJSON(message: _79.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_79.QueryNFTRequest>): _79.QueryNFTRequest;
                fromAmino(object: _79.QueryNFTRequestAmino): _79.QueryNFTRequest;
                toAmino(message: _79.QueryNFTRequest): _79.QueryNFTRequestAmino;
                fromAminoMsg(object: _79.QueryNFTRequestAminoMsg): _79.QueryNFTRequest;
                toAminoMsg(message: _79.QueryNFTRequest): _79.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _79.QueryNFTRequestProtoMsg): _79.QueryNFTRequest;
                toProto(message: _79.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _79.QueryNFTRequest): _79.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _79.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryNFTResponse;
                fromJSON(object: any): _79.QueryNFTResponse;
                toJSON(message: _79.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_79.QueryNFTResponse>): _79.QueryNFTResponse;
                fromAmino(object: _79.QueryNFTResponseAmino): _79.QueryNFTResponse;
                toAmino(message: _79.QueryNFTResponse): _79.QueryNFTResponseAmino;
                fromAminoMsg(object: _79.QueryNFTResponseAminoMsg): _79.QueryNFTResponse;
                toAminoMsg(message: _79.QueryNFTResponse): _79.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _79.QueryNFTResponseProtoMsg): _79.QueryNFTResponse;
                toProto(message: _79.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _79.QueryNFTResponse): _79.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _79.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClassRequest;
                fromJSON(object: any): _79.QueryClassRequest;
                toJSON(message: _79.QueryClassRequest): unknown;
                fromPartial(object: Partial<_79.QueryClassRequest>): _79.QueryClassRequest;
                fromAmino(object: _79.QueryClassRequestAmino): _79.QueryClassRequest;
                toAmino(message: _79.QueryClassRequest): _79.QueryClassRequestAmino;
                fromAminoMsg(object: _79.QueryClassRequestAminoMsg): _79.QueryClassRequest;
                toAminoMsg(message: _79.QueryClassRequest): _79.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _79.QueryClassRequestProtoMsg): _79.QueryClassRequest;
                toProto(message: _79.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _79.QueryClassRequest): _79.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _79.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClassResponse;
                fromJSON(object: any): _79.QueryClassResponse;
                toJSON(message: _79.QueryClassResponse): unknown;
                fromPartial(object: Partial<_79.QueryClassResponse>): _79.QueryClassResponse;
                fromAmino(object: _79.QueryClassResponseAmino): _79.QueryClassResponse;
                toAmino(message: _79.QueryClassResponse): _79.QueryClassResponseAmino;
                fromAminoMsg(object: _79.QueryClassResponseAminoMsg): _79.QueryClassResponse;
                toAminoMsg(message: _79.QueryClassResponse): _79.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _79.QueryClassResponseProtoMsg): _79.QueryClassResponse;
                toProto(message: _79.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _79.QueryClassResponse): _79.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _79.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClassesRequest;
                fromJSON(object: any): _79.QueryClassesRequest;
                toJSON(message: _79.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_79.QueryClassesRequest>): _79.QueryClassesRequest;
                fromAmino(object: _79.QueryClassesRequestAmino): _79.QueryClassesRequest;
                toAmino(message: _79.QueryClassesRequest): _79.QueryClassesRequestAmino;
                fromAminoMsg(object: _79.QueryClassesRequestAminoMsg): _79.QueryClassesRequest;
                toAminoMsg(message: _79.QueryClassesRequest): _79.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _79.QueryClassesRequestProtoMsg): _79.QueryClassesRequest;
                toProto(message: _79.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _79.QueryClassesRequest): _79.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _79.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClassesResponse;
                fromJSON(object: any): _79.QueryClassesResponse;
                toJSON(message: _79.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_79.QueryClassesResponse>): _79.QueryClassesResponse;
                fromAmino(object: _79.QueryClassesResponseAmino): _79.QueryClassesResponse;
                toAmino(message: _79.QueryClassesResponse): _79.QueryClassesResponseAmino;
                fromAminoMsg(object: _79.QueryClassesResponseAminoMsg): _79.QueryClassesResponse;
                toAminoMsg(message: _79.QueryClassesResponse): _79.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _79.QueryClassesResponseProtoMsg): _79.QueryClassesResponse;
                toProto(message: _79.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _79.QueryClassesResponse): _79.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _78.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Class;
                fromJSON(object: any): _78.Class;
                toJSON(message: _78.Class): unknown;
                fromPartial(object: Partial<_78.Class>): _78.Class;
                fromAmino(object: _78.ClassAmino): _78.Class;
                toAmino(message: _78.Class): _78.ClassAmino;
                fromAminoMsg(object: _78.ClassAminoMsg): _78.Class;
                toAminoMsg(message: _78.Class): _78.ClassAminoMsg;
                fromProtoMsg(message: _78.ClassProtoMsg): _78.Class;
                toProto(message: _78.Class): Uint8Array;
                toProtoMsg(message: _78.Class): _78.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _78.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.NFT;
                fromJSON(object: any): _78.NFT;
                toJSON(message: _78.NFT): unknown;
                fromPartial(object: Partial<_78.NFT>): _78.NFT;
                fromAmino(object: _78.NFTAmino): _78.NFT;
                toAmino(message: _78.NFT): _78.NFTAmino;
                fromAminoMsg(object: _78.NFTAminoMsg): _78.NFT;
                toAminoMsg(message: _78.NFT): _78.NFTAminoMsg;
                fromProtoMsg(message: _78.NFTProtoMsg): _78.NFT;
                toProto(message: _78.NFT): Uint8Array;
                toProtoMsg(message: _78.NFT): _78.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _77.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.GenesisState;
                fromJSON(object: any): _77.GenesisState;
                toJSON(message: _77.GenesisState): unknown;
                fromPartial(object: Partial<_77.GenesisState>): _77.GenesisState;
                fromAmino(object: _77.GenesisStateAmino): _77.GenesisState;
                toAmino(message: _77.GenesisState): _77.GenesisStateAmino;
                fromAminoMsg(object: _77.GenesisStateAminoMsg): _77.GenesisState;
                toAminoMsg(message: _77.GenesisState): _77.GenesisStateAminoMsg;
                fromProtoMsg(message: _77.GenesisStateProtoMsg): _77.GenesisState;
                toProto(message: _77.GenesisState): Uint8Array;
                toProtoMsg(message: _77.GenesisState): _77.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _77.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Entry;
                fromJSON(object: any): _77.Entry;
                toJSON(message: _77.Entry): unknown;
                fromPartial(object: Partial<_77.Entry>): _77.Entry;
                fromAmino(object: _77.EntryAmino): _77.Entry;
                toAmino(message: _77.Entry): _77.EntryAmino;
                fromAminoMsg(object: _77.EntryAminoMsg): _77.Entry;
                toAminoMsg(message: _77.Entry): _77.EntryAminoMsg;
                fromProtoMsg(message: _77.EntryProtoMsg): _77.Entry;
                toProto(message: _77.Entry): Uint8Array;
                toProtoMsg(message: _77.Entry): _77.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _76.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventSend;
                fromJSON(object: any): _76.EventSend;
                toJSON(message: _76.EventSend): unknown;
                fromPartial(object: Partial<_76.EventSend>): _76.EventSend;
                fromAmino(object: _76.EventSendAmino): _76.EventSend;
                toAmino(message: _76.EventSend): _76.EventSendAmino;
                fromAminoMsg(object: _76.EventSendAminoMsg): _76.EventSend;
                toAminoMsg(message: _76.EventSend): _76.EventSendAminoMsg;
                fromProtoMsg(message: _76.EventSendProtoMsg): _76.EventSend;
                toProto(message: _76.EventSend): Uint8Array;
                toProtoMsg(message: _76.EventSend): _76.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _76.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventMint;
                fromJSON(object: any): _76.EventMint;
                toJSON(message: _76.EventMint): unknown;
                fromPartial(object: Partial<_76.EventMint>): _76.EventMint;
                fromAmino(object: _76.EventMintAmino): _76.EventMint;
                toAmino(message: _76.EventMint): _76.EventMintAmino;
                fromAminoMsg(object: _76.EventMintAminoMsg): _76.EventMint;
                toAminoMsg(message: _76.EventMint): _76.EventMintAminoMsg;
                fromProtoMsg(message: _76.EventMintProtoMsg): _76.EventMint;
                toProto(message: _76.EventMint): Uint8Array;
                toProtoMsg(message: _76.EventMint): _76.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _76.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.EventBurn;
                fromJSON(object: any): _76.EventBurn;
                toJSON(message: _76.EventBurn): unknown;
                fromPartial(object: Partial<_76.EventBurn>): _76.EventBurn;
                fromAmino(object: _76.EventBurnAmino): _76.EventBurn;
                toAmino(message: _76.EventBurn): _76.EventBurnAmino;
                fromAminoMsg(object: _76.EventBurnAminoMsg): _76.EventBurn;
                toAminoMsg(message: _76.EventBurn): _76.EventBurnAminoMsg;
                fromProtoMsg(message: _76.EventBurnProtoMsg): _76.EventBurn;
                toProto(message: _76.EventBurn): Uint8Array;
                toProtoMsg(message: _76.EventBurn): _76.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _81.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.TableDescriptor;
                fromJSON(object: any): _81.TableDescriptor;
                toJSON(message: _81.TableDescriptor): unknown;
                fromPartial(object: Partial<_81.TableDescriptor>): _81.TableDescriptor;
                fromAmino(object: _81.TableDescriptorAmino): _81.TableDescriptor;
                toAmino(message: _81.TableDescriptor): _81.TableDescriptorAmino;
                fromAminoMsg(object: _81.TableDescriptorAminoMsg): _81.TableDescriptor;
                toAminoMsg(message: _81.TableDescriptor): _81.TableDescriptorAminoMsg;
                fromProtoMsg(message: _81.TableDescriptorProtoMsg): _81.TableDescriptor;
                toProto(message: _81.TableDescriptor): Uint8Array;
                toProtoMsg(message: _81.TableDescriptor): _81.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _81.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.PrimaryKeyDescriptor;
                fromJSON(object: any): _81.PrimaryKeyDescriptor;
                toJSON(message: _81.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_81.PrimaryKeyDescriptor>): _81.PrimaryKeyDescriptor;
                fromAmino(object: _81.PrimaryKeyDescriptorAmino): _81.PrimaryKeyDescriptor;
                toAmino(message: _81.PrimaryKeyDescriptor): _81.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _81.PrimaryKeyDescriptorAminoMsg): _81.PrimaryKeyDescriptor;
                toAminoMsg(message: _81.PrimaryKeyDescriptor): _81.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _81.PrimaryKeyDescriptorProtoMsg): _81.PrimaryKeyDescriptor;
                toProto(message: _81.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _81.PrimaryKeyDescriptor): _81.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _81.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.SecondaryIndexDescriptor;
                fromJSON(object: any): _81.SecondaryIndexDescriptor;
                toJSON(message: _81.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_81.SecondaryIndexDescriptor>): _81.SecondaryIndexDescriptor;
                fromAmino(object: _81.SecondaryIndexDescriptorAmino): _81.SecondaryIndexDescriptor;
                toAmino(message: _81.SecondaryIndexDescriptor): _81.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _81.SecondaryIndexDescriptorAminoMsg): _81.SecondaryIndexDescriptor;
                toAminoMsg(message: _81.SecondaryIndexDescriptor): _81.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _81.SecondaryIndexDescriptorProtoMsg): _81.SecondaryIndexDescriptor;
                toProto(message: _81.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _81.SecondaryIndexDescriptor): _81.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _81.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.SingletonDescriptor;
                fromJSON(object: any): _81.SingletonDescriptor;
                toJSON(message: _81.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_81.SingletonDescriptor>): _81.SingletonDescriptor;
                fromAmino(object: _81.SingletonDescriptorAmino): _81.SingletonDescriptor;
                toAmino(message: _81.SingletonDescriptor): _81.SingletonDescriptorAmino;
                fromAminoMsg(object: _81.SingletonDescriptorAminoMsg): _81.SingletonDescriptor;
                toAminoMsg(message: _81.SingletonDescriptor): _81.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _81.SingletonDescriptorProtoMsg): _81.SingletonDescriptor;
                toProto(message: _81.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _81.SingletonDescriptor): _81.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _82.StorageType;
            storageTypeToJSON(object: _82.StorageType): string;
            StorageType: typeof _82.StorageType;
            StorageTypeSDKType: typeof _82.StorageType;
            StorageTypeAmino: typeof _82.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _82.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ModuleSchemaDescriptor;
                fromJSON(object: any): _82.ModuleSchemaDescriptor;
                toJSON(message: _82.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_82.ModuleSchemaDescriptor>): _82.ModuleSchemaDescriptor;
                fromAmino(object: _82.ModuleSchemaDescriptorAmino): _82.ModuleSchemaDescriptor;
                toAmino(message: _82.ModuleSchemaDescriptor): _82.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _82.ModuleSchemaDescriptorAminoMsg): _82.ModuleSchemaDescriptor;
                toAminoMsg(message: _82.ModuleSchemaDescriptor): _82.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _82.ModuleSchemaDescriptorProtoMsg): _82.ModuleSchemaDescriptor;
                toProto(message: _82.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _82.ModuleSchemaDescriptor): _82.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _82.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _82.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _82.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_82.ModuleSchemaDescriptor_FileEntry>): _82.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _82.ModuleSchemaDescriptor_FileEntryAmino): _82.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _82.ModuleSchemaDescriptor_FileEntry): _82.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _82.ModuleSchemaDescriptor_FileEntryAminoMsg): _82.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _82.ModuleSchemaDescriptor_FileEntry): _82.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _82.ModuleSchemaDescriptor_FileEntryProtoMsg): _82.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _82.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _82.ModuleSchemaDescriptor_FileEntry): _82.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _261.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _242.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _85.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryParamsRequest;
                fromJSON(object: any): _85.QueryParamsRequest;
                toJSON(message: _85.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_85.QueryParamsRequest>): _85.QueryParamsRequest;
                fromAmino(object: _85.QueryParamsRequestAmino): _85.QueryParamsRequest;
                toAmino(message: _85.QueryParamsRequest): _85.QueryParamsRequestAmino;
                fromAminoMsg(object: _85.QueryParamsRequestAminoMsg): _85.QueryParamsRequest;
                toAminoMsg(message: _85.QueryParamsRequest): _85.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryParamsRequestProtoMsg): _85.QueryParamsRequest;
                toProto(message: _85.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryParamsRequest): _85.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _85.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryParamsResponse;
                fromJSON(object: any): _85.QueryParamsResponse;
                toJSON(message: _85.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_85.QueryParamsResponse>): _85.QueryParamsResponse;
                fromAmino(object: _85.QueryParamsResponseAmino): _85.QueryParamsResponse;
                toAmino(message: _85.QueryParamsResponse): _85.QueryParamsResponseAmino;
                fromAminoMsg(object: _85.QueryParamsResponseAminoMsg): _85.QueryParamsResponse;
                toAminoMsg(message: _85.QueryParamsResponse): _85.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryParamsResponseProtoMsg): _85.QueryParamsResponse;
                toProto(message: _85.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryParamsResponse): _85.QueryParamsResponseProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _84.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ParameterChangeProposal;
                fromJSON(object: any): _84.ParameterChangeProposal;
                toJSON(message: _84.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_84.ParameterChangeProposal>): _84.ParameterChangeProposal;
                fromAmino(object: _84.ParameterChangeProposalAmino): _84.ParameterChangeProposal;
                toAmino(message: _84.ParameterChangeProposal): _84.ParameterChangeProposalAmino;
                fromAminoMsg(object: _84.ParameterChangeProposalAminoMsg): _84.ParameterChangeProposal;
                toAminoMsg(message: _84.ParameterChangeProposal): _84.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _84.ParameterChangeProposalProtoMsg): _84.ParameterChangeProposal;
                toProto(message: _84.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _84.ParameterChangeProposal): _84.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _84.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ParamChange;
                fromJSON(object: any): _84.ParamChange;
                toJSON(message: _84.ParamChange): unknown;
                fromPartial(object: Partial<_84.ParamChange>): _84.ParamChange;
                fromAmino(object: _84.ParamChangeAmino): _84.ParamChange;
                toAmino(message: _84.ParamChange): _84.ParamChangeAmino;
                fromAminoMsg(object: _84.ParamChangeAminoMsg): _84.ParamChange;
                toAminoMsg(message: _84.ParamChange): _84.ParamChangeAminoMsg;
                fromProtoMsg(message: _84.ParamChangeProtoMsg): _84.ParamChange;
                toProto(message: _84.ParamChange): Uint8Array;
                toProtoMsg(message: _84.ParamChange): _84.ParamChangeProtoMsg;
            };
            FeesParams: {
                typeUrl: string;
                encode(message: _83.FeesParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.FeesParams;
                fromJSON(object: any): _83.FeesParams;
                toJSON(message: _83.FeesParams): unknown;
                fromPartial(object: Partial<_83.FeesParams>): _83.FeesParams;
                fromAmino(object: _83.FeesParamsAmino): _83.FeesParams;
                toAmino(message: _83.FeesParams): _83.FeesParamsAmino;
                fromAminoMsg(object: _83.FeesParamsAminoMsg): _83.FeesParams;
                toAminoMsg(message: _83.FeesParams): _83.FeesParamsAminoMsg;
                fromProtoMsg(message: _83.FeesParamsProtoMsg): _83.FeesParams;
                toProto(message: _83.FeesParams): Uint8Array;
                toProtoMsg(message: _83.FeesParams): _83.FeesParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _83.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GenesisState;
                fromJSON(object: any): _83.GenesisState;
                toJSON(message: _83.GenesisState): unknown;
                fromPartial(object: Partial<_83.GenesisState>): _83.GenesisState;
                fromAmino(object: _83.GenesisStateAmino): _83.GenesisState;
                toAmino(message: _83.GenesisState): _83.GenesisStateAmino;
                fromAminoMsg(object: _83.GenesisStateAminoMsg): _83.GenesisState;
                toAminoMsg(message: _83.GenesisState): _83.GenesisStateAminoMsg;
                fromProtoMsg(message: _83.GenesisStateProtoMsg): _83.GenesisState;
                toProto(message: _83.GenesisState): Uint8Array;
                toProtoMsg(message: _83.GenesisState): _83.GenesisStateProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _277.MsgClientImpl;
            QueryClientImpl: typeof _262.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                signingInfo(request: _87.QuerySigningInfoRequest): Promise<_87.QuerySigningInfoResponse>;
                signingInfos(request?: _87.QuerySigningInfosRequest): Promise<_87.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _243.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _89.MsgUnjail): {
                        typeUrl: string;
                        value: _89.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _89.MsgUnjail) => _89.MsgUnjailAmino;
                    fromAmino: (object: _89.MsgUnjailAmino) => _89.MsgUnjail;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _89.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgUnjail;
                fromJSON(object: any): _89.MsgUnjail;
                toJSON(message: _89.MsgUnjail): unknown;
                fromPartial(object: Partial<_89.MsgUnjail>): _89.MsgUnjail;
                fromAmino(object: _89.MsgUnjailAmino): _89.MsgUnjail;
                toAmino(message: _89.MsgUnjail): _89.MsgUnjailAmino;
                fromAminoMsg(object: _89.MsgUnjailAminoMsg): _89.MsgUnjail;
                toAminoMsg(message: _89.MsgUnjail): _89.MsgUnjailAminoMsg;
                fromProtoMsg(message: _89.MsgUnjailProtoMsg): _89.MsgUnjail;
                toProto(message: _89.MsgUnjail): Uint8Array;
                toProtoMsg(message: _89.MsgUnjail): _89.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _89.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgUnjailResponse;
                fromJSON(_: any): _89.MsgUnjailResponse;
                toJSON(_: _89.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_89.MsgUnjailResponse>): _89.MsgUnjailResponse;
                fromAmino(_: _89.MsgUnjailResponseAmino): _89.MsgUnjailResponse;
                toAmino(_: _89.MsgUnjailResponse): _89.MsgUnjailResponseAmino;
                fromAminoMsg(object: _89.MsgUnjailResponseAminoMsg): _89.MsgUnjailResponse;
                toAminoMsg(message: _89.MsgUnjailResponse): _89.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _89.MsgUnjailResponseProtoMsg): _89.MsgUnjailResponse;
                toProto(message: _89.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _89.MsgUnjailResponse): _89.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfoLegacyMissedHeights: {
                typeUrl: string;
                encode(message: _88.ValidatorSigningInfoLegacyMissedHeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ValidatorSigningInfoLegacyMissedHeights;
                fromJSON(object: any): _88.ValidatorSigningInfoLegacyMissedHeights;
                toJSON(message: _88.ValidatorSigningInfoLegacyMissedHeights): unknown;
                fromPartial(object: Partial<_88.ValidatorSigningInfoLegacyMissedHeights>): _88.ValidatorSigningInfoLegacyMissedHeights;
                fromAmino(object: _88.ValidatorSigningInfoLegacyMissedHeightsAmino): _88.ValidatorSigningInfoLegacyMissedHeights;
                toAmino(message: _88.ValidatorSigningInfoLegacyMissedHeights): _88.ValidatorSigningInfoLegacyMissedHeightsAmino;
                fromAminoMsg(object: _88.ValidatorSigningInfoLegacyMissedHeightsAminoMsg): _88.ValidatorSigningInfoLegacyMissedHeights;
                toAminoMsg(message: _88.ValidatorSigningInfoLegacyMissedHeights): _88.ValidatorSigningInfoLegacyMissedHeightsAminoMsg;
                fromProtoMsg(message: _88.ValidatorSigningInfoLegacyMissedHeightsProtoMsg): _88.ValidatorSigningInfoLegacyMissedHeights;
                toProto(message: _88.ValidatorSigningInfoLegacyMissedHeights): Uint8Array;
                toProtoMsg(message: _88.ValidatorSigningInfoLegacyMissedHeights): _88.ValidatorSigningInfoLegacyMissedHeightsProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _88.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ValidatorSigningInfo;
                fromJSON(object: any): _88.ValidatorSigningInfo;
                toJSON(message: _88.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_88.ValidatorSigningInfo>): _88.ValidatorSigningInfo;
                fromAmino(object: _88.ValidatorSigningInfoAmino): _88.ValidatorSigningInfo;
                toAmino(message: _88.ValidatorSigningInfo): _88.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _88.ValidatorSigningInfoAminoMsg): _88.ValidatorSigningInfo;
                toAminoMsg(message: _88.ValidatorSigningInfo): _88.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _88.ValidatorSigningInfoProtoMsg): _88.ValidatorSigningInfo;
                toProto(message: _88.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _88.ValidatorSigningInfo): _88.ValidatorSigningInfoProtoMsg;
            };
            ValidatorMissedBlockArrayLegacyMissedHeights: {
                typeUrl: string;
                encode(message: _88.ValidatorMissedBlockArrayLegacyMissedHeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ValidatorMissedBlockArrayLegacyMissedHeights;
                fromJSON(object: any): _88.ValidatorMissedBlockArrayLegacyMissedHeights;
                toJSON(message: _88.ValidatorMissedBlockArrayLegacyMissedHeights): unknown;
                fromPartial(object: Partial<_88.ValidatorMissedBlockArrayLegacyMissedHeights>): _88.ValidatorMissedBlockArrayLegacyMissedHeights;
                fromAmino(object: _88.ValidatorMissedBlockArrayLegacyMissedHeightsAmino): _88.ValidatorMissedBlockArrayLegacyMissedHeights;
                toAmino(message: _88.ValidatorMissedBlockArrayLegacyMissedHeights): _88.ValidatorMissedBlockArrayLegacyMissedHeightsAmino;
                fromAminoMsg(object: _88.ValidatorMissedBlockArrayLegacyMissedHeightsAminoMsg): _88.ValidatorMissedBlockArrayLegacyMissedHeights;
                toAminoMsg(message: _88.ValidatorMissedBlockArrayLegacyMissedHeights): _88.ValidatorMissedBlockArrayLegacyMissedHeightsAminoMsg;
                fromProtoMsg(message: _88.ValidatorMissedBlockArrayLegacyMissedHeightsProtoMsg): _88.ValidatorMissedBlockArrayLegacyMissedHeights;
                toProto(message: _88.ValidatorMissedBlockArrayLegacyMissedHeights): Uint8Array;
                toProtoMsg(message: _88.ValidatorMissedBlockArrayLegacyMissedHeights): _88.ValidatorMissedBlockArrayLegacyMissedHeightsProtoMsg;
            };
            ValidatorMissedBlockArray: {
                typeUrl: string;
                encode(message: _88.ValidatorMissedBlockArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ValidatorMissedBlockArray;
                fromJSON(object: any): _88.ValidatorMissedBlockArray;
                toJSON(message: _88.ValidatorMissedBlockArray): unknown;
                fromPartial(object: Partial<_88.ValidatorMissedBlockArray>): _88.ValidatorMissedBlockArray;
                fromAmino(object: _88.ValidatorMissedBlockArrayAmino): _88.ValidatorMissedBlockArray;
                toAmino(message: _88.ValidatorMissedBlockArray): _88.ValidatorMissedBlockArrayAmino;
                fromAminoMsg(object: _88.ValidatorMissedBlockArrayAminoMsg): _88.ValidatorMissedBlockArray;
                toAminoMsg(message: _88.ValidatorMissedBlockArray): _88.ValidatorMissedBlockArrayAminoMsg;
                fromProtoMsg(message: _88.ValidatorMissedBlockArrayProtoMsg): _88.ValidatorMissedBlockArray;
                toProto(message: _88.ValidatorMissedBlockArray): Uint8Array;
                toProtoMsg(message: _88.ValidatorMissedBlockArray): _88.ValidatorMissedBlockArrayProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _88.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Params;
                fromJSON(object: any): _88.Params;
                toJSON(message: _88.Params): unknown;
                fromPartial(object: Partial<_88.Params>): _88.Params;
                fromAmino(object: _88.ParamsAmino): _88.Params;
                toAmino(message: _88.Params): _88.ParamsAmino;
                fromAminoMsg(object: _88.ParamsAminoMsg): _88.Params;
                toAminoMsg(message: _88.Params): _88.ParamsAminoMsg;
                fromProtoMsg(message: _88.ParamsProtoMsg): _88.Params;
                toProto(message: _88.Params): Uint8Array;
                toProtoMsg(message: _88.Params): _88.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _87.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryParamsRequest;
                fromJSON(_: any): _87.QueryParamsRequest;
                toJSON(_: _87.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_87.QueryParamsRequest>): _87.QueryParamsRequest;
                fromAmino(_: _87.QueryParamsRequestAmino): _87.QueryParamsRequest;
                toAmino(_: _87.QueryParamsRequest): _87.QueryParamsRequestAmino;
                fromAminoMsg(object: _87.QueryParamsRequestAminoMsg): _87.QueryParamsRequest;
                toAminoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryParamsRequestProtoMsg): _87.QueryParamsRequest;
                toProto(message: _87.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _87.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryParamsResponse;
                fromJSON(object: any): _87.QueryParamsResponse;
                toJSON(message: _87.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_87.QueryParamsResponse>): _87.QueryParamsResponse;
                fromAmino(object: _87.QueryParamsResponseAmino): _87.QueryParamsResponse;
                toAmino(message: _87.QueryParamsResponse): _87.QueryParamsResponseAmino;
                fromAminoMsg(object: _87.QueryParamsResponseAminoMsg): _87.QueryParamsResponse;
                toAminoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryParamsResponseProtoMsg): _87.QueryParamsResponse;
                toProto(message: _87.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _87.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QuerySigningInfoRequest;
                fromJSON(object: any): _87.QuerySigningInfoRequest;
                toJSON(message: _87.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_87.QuerySigningInfoRequest>): _87.QuerySigningInfoRequest;
                fromAmino(object: _87.QuerySigningInfoRequestAmino): _87.QuerySigningInfoRequest;
                toAmino(message: _87.QuerySigningInfoRequest): _87.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _87.QuerySigningInfoRequestAminoMsg): _87.QuerySigningInfoRequest;
                toAminoMsg(message: _87.QuerySigningInfoRequest): _87.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _87.QuerySigningInfoRequestProtoMsg): _87.QuerySigningInfoRequest;
                toProto(message: _87.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _87.QuerySigningInfoRequest): _87.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _87.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QuerySigningInfoResponse;
                fromJSON(object: any): _87.QuerySigningInfoResponse;
                toJSON(message: _87.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_87.QuerySigningInfoResponse>): _87.QuerySigningInfoResponse;
                fromAmino(object: _87.QuerySigningInfoResponseAmino): _87.QuerySigningInfoResponse;
                toAmino(message: _87.QuerySigningInfoResponse): _87.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _87.QuerySigningInfoResponseAminoMsg): _87.QuerySigningInfoResponse;
                toAminoMsg(message: _87.QuerySigningInfoResponse): _87.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _87.QuerySigningInfoResponseProtoMsg): _87.QuerySigningInfoResponse;
                toProto(message: _87.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _87.QuerySigningInfoResponse): _87.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _87.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QuerySigningInfosRequest;
                fromJSON(object: any): _87.QuerySigningInfosRequest;
                toJSON(message: _87.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_87.QuerySigningInfosRequest>): _87.QuerySigningInfosRequest;
                fromAmino(object: _87.QuerySigningInfosRequestAmino): _87.QuerySigningInfosRequest;
                toAmino(message: _87.QuerySigningInfosRequest): _87.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _87.QuerySigningInfosRequestAminoMsg): _87.QuerySigningInfosRequest;
                toAminoMsg(message: _87.QuerySigningInfosRequest): _87.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _87.QuerySigningInfosRequestProtoMsg): _87.QuerySigningInfosRequest;
                toProto(message: _87.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _87.QuerySigningInfosRequest): _87.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _87.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QuerySigningInfosResponse;
                fromJSON(object: any): _87.QuerySigningInfosResponse;
                toJSON(message: _87.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_87.QuerySigningInfosResponse>): _87.QuerySigningInfosResponse;
                fromAmino(object: _87.QuerySigningInfosResponseAmino): _87.QuerySigningInfosResponse;
                toAmino(message: _87.QuerySigningInfosResponse): _87.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _87.QuerySigningInfosResponseAminoMsg): _87.QuerySigningInfosResponse;
                toAminoMsg(message: _87.QuerySigningInfosResponse): _87.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _87.QuerySigningInfosResponseProtoMsg): _87.QuerySigningInfosResponse;
                toProto(message: _87.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _87.QuerySigningInfosResponse): _87.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _86.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GenesisState;
                fromJSON(object: any): _86.GenesisState;
                toJSON(message: _86.GenesisState): unknown;
                fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
                fromAmino(object: _86.GenesisStateAmino): _86.GenesisState;
                toAmino(message: _86.GenesisState): _86.GenesisStateAmino;
                fromAminoMsg(object: _86.GenesisStateAminoMsg): _86.GenesisState;
                toAminoMsg(message: _86.GenesisState): _86.GenesisStateAminoMsg;
                fromProtoMsg(message: _86.GenesisStateProtoMsg): _86.GenesisState;
                toProto(message: _86.GenesisState): Uint8Array;
                toProtoMsg(message: _86.GenesisState): _86.GenesisStateProtoMsg;
            };
            GenesisStateLegacyMissingHeights: {
                typeUrl: string;
                encode(message: _86.GenesisStateLegacyMissingHeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GenesisStateLegacyMissingHeights;
                fromJSON(object: any): _86.GenesisStateLegacyMissingHeights;
                toJSON(message: _86.GenesisStateLegacyMissingHeights): unknown;
                fromPartial(object: Partial<_86.GenesisStateLegacyMissingHeights>): _86.GenesisStateLegacyMissingHeights;
                fromAmino(object: _86.GenesisStateLegacyMissingHeightsAmino): _86.GenesisStateLegacyMissingHeights;
                toAmino(message: _86.GenesisStateLegacyMissingHeights): _86.GenesisStateLegacyMissingHeightsAmino;
                fromAminoMsg(object: _86.GenesisStateLegacyMissingHeightsAminoMsg): _86.GenesisStateLegacyMissingHeights;
                toAminoMsg(message: _86.GenesisStateLegacyMissingHeights): _86.GenesisStateLegacyMissingHeightsAminoMsg;
                fromProtoMsg(message: _86.GenesisStateLegacyMissingHeightsProtoMsg): _86.GenesisStateLegacyMissingHeights;
                toProto(message: _86.GenesisStateLegacyMissingHeights): Uint8Array;
                toProtoMsg(message: _86.GenesisStateLegacyMissingHeights): _86.GenesisStateLegacyMissingHeightsProtoMsg;
            };
            GenesisStateLegacyV43: {
                typeUrl: string;
                encode(message: _86.GenesisStateLegacyV43, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GenesisStateLegacyV43;
                fromJSON(object: any): _86.GenesisStateLegacyV43;
                toJSON(message: _86.GenesisStateLegacyV43): unknown;
                fromPartial(object: Partial<_86.GenesisStateLegacyV43>): _86.GenesisStateLegacyV43;
                fromAmino(object: _86.GenesisStateLegacyV43Amino): _86.GenesisStateLegacyV43;
                toAmino(message: _86.GenesisStateLegacyV43): _86.GenesisStateLegacyV43Amino;
                fromAminoMsg(object: _86.GenesisStateLegacyV43AminoMsg): _86.GenesisStateLegacyV43;
                toAminoMsg(message: _86.GenesisStateLegacyV43): _86.GenesisStateLegacyV43AminoMsg;
                fromProtoMsg(message: _86.GenesisStateLegacyV43ProtoMsg): _86.GenesisStateLegacyV43;
                toProto(message: _86.GenesisStateLegacyV43): Uint8Array;
                toProtoMsg(message: _86.GenesisStateLegacyV43): _86.GenesisStateLegacyV43ProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _86.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SigningInfo;
                fromJSON(object: any): _86.SigningInfo;
                toJSON(message: _86.SigningInfo): unknown;
                fromPartial(object: Partial<_86.SigningInfo>): _86.SigningInfo;
                fromAmino(object: _86.SigningInfoAmino): _86.SigningInfo;
                toAmino(message: _86.SigningInfo): _86.SigningInfoAmino;
                fromAminoMsg(object: _86.SigningInfoAminoMsg): _86.SigningInfo;
                toAminoMsg(message: _86.SigningInfo): _86.SigningInfoAminoMsg;
                fromProtoMsg(message: _86.SigningInfoProtoMsg): _86.SigningInfo;
                toProto(message: _86.SigningInfo): Uint8Array;
                toProtoMsg(message: _86.SigningInfo): _86.SigningInfoProtoMsg;
            };
            SigningInfoLegacyMissedHeights: {
                typeUrl: string;
                encode(message: _86.SigningInfoLegacyMissedHeights, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.SigningInfoLegacyMissedHeights;
                fromJSON(object: any): _86.SigningInfoLegacyMissedHeights;
                toJSON(message: _86.SigningInfoLegacyMissedHeights): unknown;
                fromPartial(object: Partial<_86.SigningInfoLegacyMissedHeights>): _86.SigningInfoLegacyMissedHeights;
                fromAmino(object: _86.SigningInfoLegacyMissedHeightsAmino): _86.SigningInfoLegacyMissedHeights;
                toAmino(message: _86.SigningInfoLegacyMissedHeights): _86.SigningInfoLegacyMissedHeightsAmino;
                fromAminoMsg(object: _86.SigningInfoLegacyMissedHeightsAminoMsg): _86.SigningInfoLegacyMissedHeights;
                toAminoMsg(message: _86.SigningInfoLegacyMissedHeights): _86.SigningInfoLegacyMissedHeightsAminoMsg;
                fromProtoMsg(message: _86.SigningInfoLegacyMissedHeightsProtoMsg): _86.SigningInfoLegacyMissedHeights;
                toProto(message: _86.SigningInfoLegacyMissedHeights): Uint8Array;
                toProtoMsg(message: _86.SigningInfoLegacyMissedHeights): _86.SigningInfoLegacyMissedHeightsProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _86.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ValidatorMissedBlocks;
                fromJSON(object: any): _86.ValidatorMissedBlocks;
                toJSON(message: _86.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_86.ValidatorMissedBlocks>): _86.ValidatorMissedBlocks;
                fromAmino(object: _86.ValidatorMissedBlocksAmino): _86.ValidatorMissedBlocks;
                toAmino(message: _86.ValidatorMissedBlocks): _86.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _86.ValidatorMissedBlocksAminoMsg): _86.ValidatorMissedBlocks;
                toAminoMsg(message: _86.ValidatorMissedBlocks): _86.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _86.ValidatorMissedBlocksProtoMsg): _86.ValidatorMissedBlocks;
                toProto(message: _86.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _86.ValidatorMissedBlocks): _86.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _86.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MissedBlock;
                fromJSON(object: any): _86.MissedBlock;
                toJSON(message: _86.MissedBlock): unknown;
                fromPartial(object: Partial<_86.MissedBlock>): _86.MissedBlock;
                fromAmino(object: _86.MissedBlockAmino): _86.MissedBlock;
                toAmino(message: _86.MissedBlock): _86.MissedBlockAmino;
                fromAminoMsg(object: _86.MissedBlockAminoMsg): _86.MissedBlock;
                toAminoMsg(message: _86.MissedBlock): _86.MissedBlockAminoMsg;
                fromProtoMsg(message: _86.MissedBlockProtoMsg): _86.MissedBlock;
                toProto(message: _86.MissedBlock): Uint8Array;
                toProtoMsg(message: _86.MissedBlock): _86.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _278.MsgClientImpl;
            QueryClientImpl: typeof _263.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _92.QueryValidatorsRequest): Promise<_92.QueryValidatorsResponse>;
                validator(request: _92.QueryValidatorRequest): Promise<_92.QueryValidatorResponse>;
                validatorDelegations(request: _92.QueryValidatorDelegationsRequest): Promise<_92.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _92.QueryValidatorUnbondingDelegationsRequest): Promise<_92.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _92.QueryDelegationRequest): Promise<_92.QueryDelegationResponse>;
                unbondingDelegation(request: _92.QueryUnbondingDelegationRequest): Promise<_92.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _92.QueryDelegatorDelegationsRequest): Promise<_92.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _92.QueryDelegatorUnbondingDelegationsRequest): Promise<_92.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _92.QueryRedelegationsRequest): Promise<_92.QueryRedelegationsResponse>;
                delegatorValidators(request: _92.QueryDelegatorValidatorsRequest): Promise<_92.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _92.QueryDelegatorValidatorRequest): Promise<_92.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _92.QueryHistoricalInfoRequest): Promise<_92.QueryHistoricalInfoResponse>;
                pool(request?: _92.QueryPoolRequest): Promise<_92.QueryPoolResponse>;
                params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _244.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _94.MsgCreateValidator): {
                        typeUrl: string;
                        value: _94.MsgCreateValidator;
                    };
                    editValidator(value: _94.MsgEditValidator): {
                        typeUrl: string;
                        value: _94.MsgEditValidator;
                    };
                    delegate(value: _94.MsgDelegate): {
                        typeUrl: string;
                        value: _94.MsgDelegate;
                    };
                    beginRedelegate(value: _94.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _94.MsgBeginRedelegate;
                    };
                    undelegate(value: _94.MsgUndelegate): {
                        typeUrl: string;
                        value: _94.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _94.MsgCreateValidator) => _94.MsgCreateValidatorAmino;
                    fromAmino: (object: _94.MsgCreateValidatorAmino) => _94.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _94.MsgEditValidator) => _94.MsgEditValidatorAmino;
                    fromAmino: (object: _94.MsgEditValidatorAmino) => _94.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _94.MsgDelegate) => _94.MsgDelegateAmino;
                    fromAmino: (object: _94.MsgDelegateAmino) => _94.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _94.MsgBeginRedelegate) => _94.MsgBeginRedelegateAmino;
                    fromAmino: (object: _94.MsgBeginRedelegateAmino) => _94.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _94.MsgUndelegate) => _94.MsgUndelegateAmino;
                    fromAmino: (object: _94.MsgUndelegateAmino) => _94.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _94.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgCreateValidator;
                fromJSON(object: any): _94.MsgCreateValidator;
                toJSON(message: _94.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_94.MsgCreateValidator>): _94.MsgCreateValidator;
                fromAmino(object: _94.MsgCreateValidatorAmino): _94.MsgCreateValidator;
                toAmino(message: _94.MsgCreateValidator): _94.MsgCreateValidatorAmino;
                fromAminoMsg(object: _94.MsgCreateValidatorAminoMsg): _94.MsgCreateValidator;
                toAminoMsg(message: _94.MsgCreateValidator): _94.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _94.MsgCreateValidatorProtoMsg): _94.MsgCreateValidator;
                toProto(message: _94.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _94.MsgCreateValidator): _94.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _94.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgCreateValidatorResponse;
                fromJSON(_: any): _94.MsgCreateValidatorResponse;
                toJSON(_: _94.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_94.MsgCreateValidatorResponse>): _94.MsgCreateValidatorResponse;
                fromAmino(_: _94.MsgCreateValidatorResponseAmino): _94.MsgCreateValidatorResponse;
                toAmino(_: _94.MsgCreateValidatorResponse): _94.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _94.MsgCreateValidatorResponseAminoMsg): _94.MsgCreateValidatorResponse;
                toAminoMsg(message: _94.MsgCreateValidatorResponse): _94.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _94.MsgCreateValidatorResponseProtoMsg): _94.MsgCreateValidatorResponse;
                toProto(message: _94.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _94.MsgCreateValidatorResponse): _94.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _94.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgEditValidator;
                fromJSON(object: any): _94.MsgEditValidator;
                toJSON(message: _94.MsgEditValidator): unknown;
                fromPartial(object: Partial<_94.MsgEditValidator>): _94.MsgEditValidator;
                fromAmino(object: _94.MsgEditValidatorAmino): _94.MsgEditValidator;
                toAmino(message: _94.MsgEditValidator): _94.MsgEditValidatorAmino;
                fromAminoMsg(object: _94.MsgEditValidatorAminoMsg): _94.MsgEditValidator;
                toAminoMsg(message: _94.MsgEditValidator): _94.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _94.MsgEditValidatorProtoMsg): _94.MsgEditValidator;
                toProto(message: _94.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _94.MsgEditValidator): _94.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _94.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgEditValidatorResponse;
                fromJSON(_: any): _94.MsgEditValidatorResponse;
                toJSON(_: _94.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_94.MsgEditValidatorResponse>): _94.MsgEditValidatorResponse;
                fromAmino(_: _94.MsgEditValidatorResponseAmino): _94.MsgEditValidatorResponse;
                toAmino(_: _94.MsgEditValidatorResponse): _94.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _94.MsgEditValidatorResponseAminoMsg): _94.MsgEditValidatorResponse;
                toAminoMsg(message: _94.MsgEditValidatorResponse): _94.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _94.MsgEditValidatorResponseProtoMsg): _94.MsgEditValidatorResponse;
                toProto(message: _94.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _94.MsgEditValidatorResponse): _94.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _94.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgDelegate;
                fromJSON(object: any): _94.MsgDelegate;
                toJSON(message: _94.MsgDelegate): unknown;
                fromPartial(object: Partial<_94.MsgDelegate>): _94.MsgDelegate;
                fromAmino(object: _94.MsgDelegateAmino): _94.MsgDelegate;
                toAmino(message: _94.MsgDelegate): _94.MsgDelegateAmino;
                fromAminoMsg(object: _94.MsgDelegateAminoMsg): _94.MsgDelegate;
                toAminoMsg(message: _94.MsgDelegate): _94.MsgDelegateAminoMsg;
                fromProtoMsg(message: _94.MsgDelegateProtoMsg): _94.MsgDelegate;
                toProto(message: _94.MsgDelegate): Uint8Array;
                toProtoMsg(message: _94.MsgDelegate): _94.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _94.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgDelegateResponse;
                fromJSON(_: any): _94.MsgDelegateResponse;
                toJSON(_: _94.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_94.MsgDelegateResponse>): _94.MsgDelegateResponse;
                fromAmino(_: _94.MsgDelegateResponseAmino): _94.MsgDelegateResponse;
                toAmino(_: _94.MsgDelegateResponse): _94.MsgDelegateResponseAmino;
                fromAminoMsg(object: _94.MsgDelegateResponseAminoMsg): _94.MsgDelegateResponse;
                toAminoMsg(message: _94.MsgDelegateResponse): _94.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _94.MsgDelegateResponseProtoMsg): _94.MsgDelegateResponse;
                toProto(message: _94.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _94.MsgDelegateResponse): _94.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _94.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgBeginRedelegate;
                fromJSON(object: any): _94.MsgBeginRedelegate;
                toJSON(message: _94.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_94.MsgBeginRedelegate>): _94.MsgBeginRedelegate;
                fromAmino(object: _94.MsgBeginRedelegateAmino): _94.MsgBeginRedelegate;
                toAmino(message: _94.MsgBeginRedelegate): _94.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _94.MsgBeginRedelegateAminoMsg): _94.MsgBeginRedelegate;
                toAminoMsg(message: _94.MsgBeginRedelegate): _94.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _94.MsgBeginRedelegateProtoMsg): _94.MsgBeginRedelegate;
                toProto(message: _94.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _94.MsgBeginRedelegate): _94.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _94.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgBeginRedelegateResponse;
                fromJSON(object: any): _94.MsgBeginRedelegateResponse;
                toJSON(message: _94.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_94.MsgBeginRedelegateResponse>): _94.MsgBeginRedelegateResponse;
                fromAmino(object: _94.MsgBeginRedelegateResponseAmino): _94.MsgBeginRedelegateResponse;
                toAmino(message: _94.MsgBeginRedelegateResponse): _94.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _94.MsgBeginRedelegateResponseAminoMsg): _94.MsgBeginRedelegateResponse;
                toAminoMsg(message: _94.MsgBeginRedelegateResponse): _94.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _94.MsgBeginRedelegateResponseProtoMsg): _94.MsgBeginRedelegateResponse;
                toProto(message: _94.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _94.MsgBeginRedelegateResponse): _94.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _94.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgUndelegate;
                fromJSON(object: any): _94.MsgUndelegate;
                toJSON(message: _94.MsgUndelegate): unknown;
                fromPartial(object: Partial<_94.MsgUndelegate>): _94.MsgUndelegate;
                fromAmino(object: _94.MsgUndelegateAmino): _94.MsgUndelegate;
                toAmino(message: _94.MsgUndelegate): _94.MsgUndelegateAmino;
                fromAminoMsg(object: _94.MsgUndelegateAminoMsg): _94.MsgUndelegate;
                toAminoMsg(message: _94.MsgUndelegate): _94.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _94.MsgUndelegateProtoMsg): _94.MsgUndelegate;
                toProto(message: _94.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _94.MsgUndelegate): _94.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _94.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgUndelegateResponse;
                fromJSON(object: any): _94.MsgUndelegateResponse;
                toJSON(message: _94.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_94.MsgUndelegateResponse>): _94.MsgUndelegateResponse;
                fromAmino(object: _94.MsgUndelegateResponseAmino): _94.MsgUndelegateResponse;
                toAmino(message: _94.MsgUndelegateResponse): _94.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _94.MsgUndelegateResponseAminoMsg): _94.MsgUndelegateResponse;
                toAminoMsg(message: _94.MsgUndelegateResponse): _94.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _94.MsgUndelegateResponseProtoMsg): _94.MsgUndelegateResponse;
                toProto(message: _94.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _94.MsgUndelegateResponse): _94.MsgUndelegateResponseProtoMsg;
            };
            bondStatusFromJSON(object: any): _93.BondStatus;
            bondStatusToJSON(object: _93.BondStatus): string;
            BondStatus: typeof _93.BondStatus;
            BondStatusSDKType: typeof _93.BondStatus;
            BondStatusAmino: typeof _93.BondStatus;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _93.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.HistoricalInfo;
                fromJSON(object: any): _93.HistoricalInfo;
                toJSON(message: _93.HistoricalInfo): unknown;
                fromPartial(object: Partial<_93.HistoricalInfo>): _93.HistoricalInfo;
                fromAmino(object: _93.HistoricalInfoAmino): _93.HistoricalInfo;
                toAmino(message: _93.HistoricalInfo): _93.HistoricalInfoAmino;
                fromAminoMsg(object: _93.HistoricalInfoAminoMsg): _93.HistoricalInfo;
                toAminoMsg(message: _93.HistoricalInfo): _93.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _93.HistoricalInfoProtoMsg): _93.HistoricalInfo;
                toProto(message: _93.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _93.HistoricalInfo): _93.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _93.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.CommissionRates;
                fromJSON(object: any): _93.CommissionRates;
                toJSON(message: _93.CommissionRates): unknown;
                fromPartial(object: Partial<_93.CommissionRates>): _93.CommissionRates;
                fromAmino(object: _93.CommissionRatesAmino): _93.CommissionRates;
                toAmino(message: _93.CommissionRates): _93.CommissionRatesAmino;
                fromAminoMsg(object: _93.CommissionRatesAminoMsg): _93.CommissionRates;
                toAminoMsg(message: _93.CommissionRates): _93.CommissionRatesAminoMsg;
                fromProtoMsg(message: _93.CommissionRatesProtoMsg): _93.CommissionRates;
                toProto(message: _93.CommissionRates): Uint8Array;
                toProtoMsg(message: _93.CommissionRates): _93.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _93.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Commission;
                fromJSON(object: any): _93.Commission;
                toJSON(message: _93.Commission): unknown;
                fromPartial(object: Partial<_93.Commission>): _93.Commission;
                fromAmino(object: _93.CommissionAmino): _93.Commission;
                toAmino(message: _93.Commission): _93.CommissionAmino;
                fromAminoMsg(object: _93.CommissionAminoMsg): _93.Commission;
                toAminoMsg(message: _93.Commission): _93.CommissionAminoMsg;
                fromProtoMsg(message: _93.CommissionProtoMsg): _93.Commission;
                toProto(message: _93.Commission): Uint8Array;
                toProtoMsg(message: _93.Commission): _93.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _93.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Description;
                fromJSON(object: any): _93.Description;
                toJSON(message: _93.Description): unknown;
                fromPartial(object: Partial<_93.Description>): _93.Description;
                fromAmino(object: _93.DescriptionAmino): _93.Description;
                toAmino(message: _93.Description): _93.DescriptionAmino;
                fromAminoMsg(object: _93.DescriptionAminoMsg): _93.Description;
                toAminoMsg(message: _93.Description): _93.DescriptionAminoMsg;
                fromProtoMsg(message: _93.DescriptionProtoMsg): _93.Description;
                toProto(message: _93.Description): Uint8Array;
                toProtoMsg(message: _93.Description): _93.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _93.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Validator;
                fromJSON(object: any): _93.Validator;
                toJSON(message: _93.Validator): unknown;
                fromPartial(object: Partial<_93.Validator>): _93.Validator;
                fromAmino(object: _93.ValidatorAmino): _93.Validator;
                toAmino(message: _93.Validator): _93.ValidatorAmino;
                fromAminoMsg(object: _93.ValidatorAminoMsg): _93.Validator;
                toAminoMsg(message: _93.Validator): _93.ValidatorAminoMsg;
                fromProtoMsg(message: _93.ValidatorProtoMsg): _93.Validator;
                toProto(message: _93.Validator): Uint8Array;
                toProtoMsg(message: _93.Validator): _93.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _93.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ValAddresses;
                fromJSON(object: any): _93.ValAddresses;
                toJSON(message: _93.ValAddresses): unknown;
                fromPartial(object: Partial<_93.ValAddresses>): _93.ValAddresses;
                fromAmino(object: _93.ValAddressesAmino): _93.ValAddresses;
                toAmino(message: _93.ValAddresses): _93.ValAddressesAmino;
                fromAminoMsg(object: _93.ValAddressesAminoMsg): _93.ValAddresses;
                toAminoMsg(message: _93.ValAddresses): _93.ValAddressesAminoMsg;
                fromProtoMsg(message: _93.ValAddressesProtoMsg): _93.ValAddresses;
                toProto(message: _93.ValAddresses): Uint8Array;
                toProtoMsg(message: _93.ValAddresses): _93.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _93.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.DVPair;
                fromJSON(object: any): _93.DVPair;
                toJSON(message: _93.DVPair): unknown;
                fromPartial(object: Partial<_93.DVPair>): _93.DVPair;
                fromAmino(object: _93.DVPairAmino): _93.DVPair;
                toAmino(message: _93.DVPair): _93.DVPairAmino;
                fromAminoMsg(object: _93.DVPairAminoMsg): _93.DVPair;
                toAminoMsg(message: _93.DVPair): _93.DVPairAminoMsg;
                fromProtoMsg(message: _93.DVPairProtoMsg): _93.DVPair;
                toProto(message: _93.DVPair): Uint8Array;
                toProtoMsg(message: _93.DVPair): _93.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _93.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.DVPairs;
                fromJSON(object: any): _93.DVPairs;
                toJSON(message: _93.DVPairs): unknown;
                fromPartial(object: Partial<_93.DVPairs>): _93.DVPairs;
                fromAmino(object: _93.DVPairsAmino): _93.DVPairs;
                toAmino(message: _93.DVPairs): _93.DVPairsAmino;
                fromAminoMsg(object: _93.DVPairsAminoMsg): _93.DVPairs;
                toAminoMsg(message: _93.DVPairs): _93.DVPairsAminoMsg;
                fromProtoMsg(message: _93.DVPairsProtoMsg): _93.DVPairs;
                toProto(message: _93.DVPairs): Uint8Array;
                toProtoMsg(message: _93.DVPairs): _93.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _93.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.DVVTriplet;
                fromJSON(object: any): _93.DVVTriplet;
                toJSON(message: _93.DVVTriplet): unknown;
                fromPartial(object: Partial<_93.DVVTriplet>): _93.DVVTriplet;
                fromAmino(object: _93.DVVTripletAmino): _93.DVVTriplet;
                toAmino(message: _93.DVVTriplet): _93.DVVTripletAmino;
                fromAminoMsg(object: _93.DVVTripletAminoMsg): _93.DVVTriplet;
                toAminoMsg(message: _93.DVVTriplet): _93.DVVTripletAminoMsg;
                fromProtoMsg(message: _93.DVVTripletProtoMsg): _93.DVVTriplet;
                toProto(message: _93.DVVTriplet): Uint8Array;
                toProtoMsg(message: _93.DVVTriplet): _93.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _93.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.DVVTriplets;
                fromJSON(object: any): _93.DVVTriplets;
                toJSON(message: _93.DVVTriplets): unknown;
                fromPartial(object: Partial<_93.DVVTriplets>): _93.DVVTriplets;
                fromAmino(object: _93.DVVTripletsAmino): _93.DVVTriplets;
                toAmino(message: _93.DVVTriplets): _93.DVVTripletsAmino;
                fromAminoMsg(object: _93.DVVTripletsAminoMsg): _93.DVVTriplets;
                toAminoMsg(message: _93.DVVTriplets): _93.DVVTripletsAminoMsg;
                fromProtoMsg(message: _93.DVVTripletsProtoMsg): _93.DVVTriplets;
                toProto(message: _93.DVVTriplets): Uint8Array;
                toProtoMsg(message: _93.DVVTriplets): _93.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _93.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Delegation;
                fromJSON(object: any): _93.Delegation;
                toJSON(message: _93.Delegation): unknown;
                fromPartial(object: Partial<_93.Delegation>): _93.Delegation;
                fromAmino(object: _93.DelegationAmino): _93.Delegation;
                toAmino(message: _93.Delegation): _93.DelegationAmino;
                fromAminoMsg(object: _93.DelegationAminoMsg): _93.Delegation;
                toAminoMsg(message: _93.Delegation): _93.DelegationAminoMsg;
                fromProtoMsg(message: _93.DelegationProtoMsg): _93.Delegation;
                toProto(message: _93.Delegation): Uint8Array;
                toProtoMsg(message: _93.Delegation): _93.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _93.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.UnbondingDelegation;
                fromJSON(object: any): _93.UnbondingDelegation;
                toJSON(message: _93.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_93.UnbondingDelegation>): _93.UnbondingDelegation;
                fromAmino(object: _93.UnbondingDelegationAmino): _93.UnbondingDelegation;
                toAmino(message: _93.UnbondingDelegation): _93.UnbondingDelegationAmino;
                fromAminoMsg(object: _93.UnbondingDelegationAminoMsg): _93.UnbondingDelegation;
                toAminoMsg(message: _93.UnbondingDelegation): _93.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _93.UnbondingDelegationProtoMsg): _93.UnbondingDelegation;
                toProto(message: _93.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _93.UnbondingDelegation): _93.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _93.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.UnbondingDelegationEntry;
                fromJSON(object: any): _93.UnbondingDelegationEntry;
                toJSON(message: _93.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_93.UnbondingDelegationEntry>): _93.UnbondingDelegationEntry;
                fromAmino(object: _93.UnbondingDelegationEntryAmino): _93.UnbondingDelegationEntry;
                toAmino(message: _93.UnbondingDelegationEntry): _93.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _93.UnbondingDelegationEntryAminoMsg): _93.UnbondingDelegationEntry;
                toAminoMsg(message: _93.UnbondingDelegationEntry): _93.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _93.UnbondingDelegationEntryProtoMsg): _93.UnbondingDelegationEntry;
                toProto(message: _93.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _93.UnbondingDelegationEntry): _93.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _93.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RedelegationEntry;
                fromJSON(object: any): _93.RedelegationEntry;
                toJSON(message: _93.RedelegationEntry): unknown;
                fromPartial(object: Partial<_93.RedelegationEntry>): _93.RedelegationEntry;
                fromAmino(object: _93.RedelegationEntryAmino): _93.RedelegationEntry;
                toAmino(message: _93.RedelegationEntry): _93.RedelegationEntryAmino;
                fromAminoMsg(object: _93.RedelegationEntryAminoMsg): _93.RedelegationEntry;
                toAminoMsg(message: _93.RedelegationEntry): _93.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _93.RedelegationEntryProtoMsg): _93.RedelegationEntry;
                toProto(message: _93.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _93.RedelegationEntry): _93.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _93.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Redelegation;
                fromJSON(object: any): _93.Redelegation;
                toJSON(message: _93.Redelegation): unknown;
                fromPartial(object: Partial<_93.Redelegation>): _93.Redelegation;
                fromAmino(object: _93.RedelegationAmino): _93.Redelegation;
                toAmino(message: _93.Redelegation): _93.RedelegationAmino;
                fromAminoMsg(object: _93.RedelegationAminoMsg): _93.Redelegation;
                toAminoMsg(message: _93.Redelegation): _93.RedelegationAminoMsg;
                fromProtoMsg(message: _93.RedelegationProtoMsg): _93.Redelegation;
                toProto(message: _93.Redelegation): Uint8Array;
                toProtoMsg(message: _93.Redelegation): _93.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _93.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Params;
                fromJSON(object: any): _93.Params;
                toJSON(message: _93.Params): unknown;
                fromPartial(object: Partial<_93.Params>): _93.Params;
                fromAmino(object: _93.ParamsAmino): _93.Params;
                toAmino(message: _93.Params): _93.ParamsAmino;
                fromAminoMsg(object: _93.ParamsAminoMsg): _93.Params;
                toAminoMsg(message: _93.Params): _93.ParamsAminoMsg;
                fromProtoMsg(message: _93.ParamsProtoMsg): _93.Params;
                toProto(message: _93.Params): Uint8Array;
                toProtoMsg(message: _93.Params): _93.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _93.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.DelegationResponse;
                fromJSON(object: any): _93.DelegationResponse;
                toJSON(message: _93.DelegationResponse): unknown;
                fromPartial(object: Partial<_93.DelegationResponse>): _93.DelegationResponse;
                fromAmino(object: _93.DelegationResponseAmino): _93.DelegationResponse;
                toAmino(message: _93.DelegationResponse): _93.DelegationResponseAmino;
                fromAminoMsg(object: _93.DelegationResponseAminoMsg): _93.DelegationResponse;
                toAminoMsg(message: _93.DelegationResponse): _93.DelegationResponseAminoMsg;
                fromProtoMsg(message: _93.DelegationResponseProtoMsg): _93.DelegationResponse;
                toProto(message: _93.DelegationResponse): Uint8Array;
                toProtoMsg(message: _93.DelegationResponse): _93.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _93.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RedelegationEntryResponse;
                fromJSON(object: any): _93.RedelegationEntryResponse;
                toJSON(message: _93.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_93.RedelegationEntryResponse>): _93.RedelegationEntryResponse;
                fromAmino(object: _93.RedelegationEntryResponseAmino): _93.RedelegationEntryResponse;
                toAmino(message: _93.RedelegationEntryResponse): _93.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _93.RedelegationEntryResponseAminoMsg): _93.RedelegationEntryResponse;
                toAminoMsg(message: _93.RedelegationEntryResponse): _93.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _93.RedelegationEntryResponseProtoMsg): _93.RedelegationEntryResponse;
                toProto(message: _93.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _93.RedelegationEntryResponse): _93.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _93.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.RedelegationResponse;
                fromJSON(object: any): _93.RedelegationResponse;
                toJSON(message: _93.RedelegationResponse): unknown;
                fromPartial(object: Partial<_93.RedelegationResponse>): _93.RedelegationResponse;
                fromAmino(object: _93.RedelegationResponseAmino): _93.RedelegationResponse;
                toAmino(message: _93.RedelegationResponse): _93.RedelegationResponseAmino;
                fromAminoMsg(object: _93.RedelegationResponseAminoMsg): _93.RedelegationResponse;
                toAminoMsg(message: _93.RedelegationResponse): _93.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _93.RedelegationResponseProtoMsg): _93.RedelegationResponse;
                toProto(message: _93.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _93.RedelegationResponse): _93.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _93.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Pool;
                fromJSON(object: any): _93.Pool;
                toJSON(message: _93.Pool): unknown;
                fromPartial(object: Partial<_93.Pool>): _93.Pool;
                fromAmino(object: _93.PoolAmino): _93.Pool;
                toAmino(message: _93.Pool): _93.PoolAmino;
                fromAminoMsg(object: _93.PoolAminoMsg): _93.Pool;
                toAminoMsg(message: _93.Pool): _93.PoolAminoMsg;
                fromProtoMsg(message: _93.PoolProtoMsg): _93.Pool;
                toProto(message: _93.Pool): Uint8Array;
                toProtoMsg(message: _93.Pool): _93.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _92.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryValidatorsRequest;
                fromJSON(object: any): _92.QueryValidatorsRequest;
                toJSON(message: _92.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_92.QueryValidatorsRequest>): _92.QueryValidatorsRequest;
                fromAmino(object: _92.QueryValidatorsRequestAmino): _92.QueryValidatorsRequest;
                toAmino(message: _92.QueryValidatorsRequest): _92.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _92.QueryValidatorsRequestAminoMsg): _92.QueryValidatorsRequest;
                toAminoMsg(message: _92.QueryValidatorsRequest): _92.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorsRequestProtoMsg): _92.QueryValidatorsRequest;
                toProto(message: _92.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorsRequest): _92.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _92.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryValidatorsResponse;
                fromJSON(object: any): _92.QueryValidatorsResponse;
                toJSON(message: _92.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_92.QueryValidatorsResponse>): _92.QueryValidatorsResponse;
                fromAmino(object: _92.QueryValidatorsResponseAmino): _92.QueryValidatorsResponse;
                toAmino(message: _92.QueryValidatorsResponse): _92.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _92.QueryValidatorsResponseAminoMsg): _92.QueryValidatorsResponse;
                toAminoMsg(message: _92.QueryValidatorsResponse): _92.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorsResponseProtoMsg): _92.QueryValidatorsResponse;
                toProto(message: _92.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorsResponse): _92.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _92.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryValidatorRequest;
                fromJSON(object: any): _92.QueryValidatorRequest;
                toJSON(message: _92.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_92.QueryValidatorRequest>): _92.QueryValidatorRequest;
                fromAmino(object: _92.QueryValidatorRequestAmino): _92.QueryValidatorRequest;
                toAmino(message: _92.QueryValidatorRequest): _92.QueryValidatorRequestAmino;
                fromAminoMsg(object: _92.QueryValidatorRequestAminoMsg): _92.QueryValidatorRequest;
                toAminoMsg(message: _92.QueryValidatorRequest): _92.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorRequestProtoMsg): _92.QueryValidatorRequest;
                toProto(message: _92.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorRequest): _92.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _92.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryValidatorResponse;
                fromJSON(object: any): _92.QueryValidatorResponse;
                toJSON(message: _92.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_92.QueryValidatorResponse>): _92.QueryValidatorResponse;
                fromAmino(object: _92.QueryValidatorResponseAmino): _92.QueryValidatorResponse;
                toAmino(message: _92.QueryValidatorResponse): _92.QueryValidatorResponseAmino;
                fromAminoMsg(object: _92.QueryValidatorResponseAminoMsg): _92.QueryValidatorResponse;
                toAminoMsg(message: _92.QueryValidatorResponse): _92.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorResponseProtoMsg): _92.QueryValidatorResponse;
                toProto(message: _92.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorResponse): _92.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _92.QueryValidatorDelegationsRequest;
                toJSON(message: _92.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_92.QueryValidatorDelegationsRequest>): _92.QueryValidatorDelegationsRequest;
                fromAmino(object: _92.QueryValidatorDelegationsRequestAmino): _92.QueryValidatorDelegationsRequest;
                toAmino(message: _92.QueryValidatorDelegationsRequest): _92.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryValidatorDelegationsRequestAminoMsg): _92.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _92.QueryValidatorDelegationsRequest): _92.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorDelegationsRequestProtoMsg): _92.QueryValidatorDelegationsRequest;
                toProto(message: _92.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorDelegationsRequest): _92.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _92.QueryValidatorDelegationsResponse;
                toJSON(message: _92.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_92.QueryValidatorDelegationsResponse>): _92.QueryValidatorDelegationsResponse;
                fromAmino(object: _92.QueryValidatorDelegationsResponseAmino): _92.QueryValidatorDelegationsResponse;
                toAmino(message: _92.QueryValidatorDelegationsResponse): _92.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryValidatorDelegationsResponseAminoMsg): _92.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _92.QueryValidatorDelegationsResponse): _92.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorDelegationsResponseProtoMsg): _92.QueryValidatorDelegationsResponse;
                toProto(message: _92.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorDelegationsResponse): _92.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _92.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _92.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_92.QueryValidatorUnbondingDelegationsRequest>): _92.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _92.QueryValidatorUnbondingDelegationsRequestAmino): _92.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _92.QueryValidatorUnbondingDelegationsRequest): _92.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryValidatorUnbondingDelegationsRequestAminoMsg): _92.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _92.QueryValidatorUnbondingDelegationsRequest): _92.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorUnbondingDelegationsRequestProtoMsg): _92.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _92.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorUnbondingDelegationsRequest): _92.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _92.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _92.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_92.QueryValidatorUnbondingDelegationsResponse>): _92.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _92.QueryValidatorUnbondingDelegationsResponseAmino): _92.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _92.QueryValidatorUnbondingDelegationsResponse): _92.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryValidatorUnbondingDelegationsResponseAminoMsg): _92.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _92.QueryValidatorUnbondingDelegationsResponse): _92.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryValidatorUnbondingDelegationsResponseProtoMsg): _92.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _92.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryValidatorUnbondingDelegationsResponse): _92.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegationRequest;
                fromJSON(object: any): _92.QueryDelegationRequest;
                toJSON(message: _92.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_92.QueryDelegationRequest>): _92.QueryDelegationRequest;
                fromAmino(object: _92.QueryDelegationRequestAmino): _92.QueryDelegationRequest;
                toAmino(message: _92.QueryDelegationRequest): _92.QueryDelegationRequestAmino;
                fromAminoMsg(object: _92.QueryDelegationRequestAminoMsg): _92.QueryDelegationRequest;
                toAminoMsg(message: _92.QueryDelegationRequest): _92.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegationRequestProtoMsg): _92.QueryDelegationRequest;
                toProto(message: _92.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegationRequest): _92.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegationResponse;
                fromJSON(object: any): _92.QueryDelegationResponse;
                toJSON(message: _92.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_92.QueryDelegationResponse>): _92.QueryDelegationResponse;
                fromAmino(object: _92.QueryDelegationResponseAmino): _92.QueryDelegationResponse;
                toAmino(message: _92.QueryDelegationResponse): _92.QueryDelegationResponseAmino;
                fromAminoMsg(object: _92.QueryDelegationResponseAminoMsg): _92.QueryDelegationResponse;
                toAminoMsg(message: _92.QueryDelegationResponse): _92.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegationResponseProtoMsg): _92.QueryDelegationResponse;
                toProto(message: _92.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegationResponse): _92.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _92.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _92.QueryUnbondingDelegationRequest;
                toJSON(message: _92.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_92.QueryUnbondingDelegationRequest>): _92.QueryUnbondingDelegationRequest;
                fromAmino(object: _92.QueryUnbondingDelegationRequestAmino): _92.QueryUnbondingDelegationRequest;
                toAmino(message: _92.QueryUnbondingDelegationRequest): _92.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _92.QueryUnbondingDelegationRequestAminoMsg): _92.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _92.QueryUnbondingDelegationRequest): _92.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _92.QueryUnbondingDelegationRequestProtoMsg): _92.QueryUnbondingDelegationRequest;
                toProto(message: _92.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _92.QueryUnbondingDelegationRequest): _92.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _92.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _92.QueryUnbondingDelegationResponse;
                toJSON(message: _92.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_92.QueryUnbondingDelegationResponse>): _92.QueryUnbondingDelegationResponse;
                fromAmino(object: _92.QueryUnbondingDelegationResponseAmino): _92.QueryUnbondingDelegationResponse;
                toAmino(message: _92.QueryUnbondingDelegationResponse): _92.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _92.QueryUnbondingDelegationResponseAminoMsg): _92.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _92.QueryUnbondingDelegationResponse): _92.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _92.QueryUnbondingDelegationResponseProtoMsg): _92.QueryUnbondingDelegationResponse;
                toProto(message: _92.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _92.QueryUnbondingDelegationResponse): _92.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _92.QueryDelegatorDelegationsRequest;
                toJSON(message: _92.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_92.QueryDelegatorDelegationsRequest>): _92.QueryDelegatorDelegationsRequest;
                fromAmino(object: _92.QueryDelegatorDelegationsRequestAmino): _92.QueryDelegatorDelegationsRequest;
                toAmino(message: _92.QueryDelegatorDelegationsRequest): _92.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryDelegatorDelegationsRequestAminoMsg): _92.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _92.QueryDelegatorDelegationsRequest): _92.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorDelegationsRequestProtoMsg): _92.QueryDelegatorDelegationsRequest;
                toProto(message: _92.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorDelegationsRequest): _92.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _92.QueryDelegatorDelegationsResponse;
                toJSON(message: _92.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_92.QueryDelegatorDelegationsResponse>): _92.QueryDelegatorDelegationsResponse;
                fromAmino(object: _92.QueryDelegatorDelegationsResponseAmino): _92.QueryDelegatorDelegationsResponse;
                toAmino(message: _92.QueryDelegatorDelegationsResponse): _92.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryDelegatorDelegationsResponseAminoMsg): _92.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _92.QueryDelegatorDelegationsResponse): _92.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorDelegationsResponseProtoMsg): _92.QueryDelegatorDelegationsResponse;
                toProto(message: _92.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorDelegationsResponse): _92.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _92.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _92.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_92.QueryDelegatorUnbondingDelegationsRequest>): _92.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _92.QueryDelegatorUnbondingDelegationsRequestAmino): _92.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _92.QueryDelegatorUnbondingDelegationsRequest): _92.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _92.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _92.QueryDelegatorUnbondingDelegationsRequest): _92.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _92.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _92.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorUnbondingDelegationsRequest): _92.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _92.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _92.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_92.QueryDelegatorUnbondingDelegationsResponse>): _92.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _92.QueryDelegatorUnbondingDelegationsResponseAmino): _92.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _92.QueryDelegatorUnbondingDelegationsResponse): _92.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _92.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _92.QueryDelegatorUnbondingDelegationsResponse): _92.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _92.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _92.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorUnbondingDelegationsResponse): _92.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _92.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryRedelegationsRequest;
                fromJSON(object: any): _92.QueryRedelegationsRequest;
                toJSON(message: _92.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_92.QueryRedelegationsRequest>): _92.QueryRedelegationsRequest;
                fromAmino(object: _92.QueryRedelegationsRequestAmino): _92.QueryRedelegationsRequest;
                toAmino(message: _92.QueryRedelegationsRequest): _92.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _92.QueryRedelegationsRequestAminoMsg): _92.QueryRedelegationsRequest;
                toAminoMsg(message: _92.QueryRedelegationsRequest): _92.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryRedelegationsRequestProtoMsg): _92.QueryRedelegationsRequest;
                toProto(message: _92.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryRedelegationsRequest): _92.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _92.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryRedelegationsResponse;
                fromJSON(object: any): _92.QueryRedelegationsResponse;
                toJSON(message: _92.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_92.QueryRedelegationsResponse>): _92.QueryRedelegationsResponse;
                fromAmino(object: _92.QueryRedelegationsResponseAmino): _92.QueryRedelegationsResponse;
                toAmino(message: _92.QueryRedelegationsResponse): _92.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _92.QueryRedelegationsResponseAminoMsg): _92.QueryRedelegationsResponse;
                toAminoMsg(message: _92.QueryRedelegationsResponse): _92.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryRedelegationsResponseProtoMsg): _92.QueryRedelegationsResponse;
                toProto(message: _92.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryRedelegationsResponse): _92.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _92.QueryDelegatorValidatorsRequest;
                toJSON(message: _92.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorsRequest>): _92.QueryDelegatorValidatorsRequest;
                fromAmino(object: _92.QueryDelegatorValidatorsRequestAmino): _92.QueryDelegatorValidatorsRequest;
                toAmino(message: _92.QueryDelegatorValidatorsRequest): _92.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _92.QueryDelegatorValidatorsRequestAminoMsg): _92.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _92.QueryDelegatorValidatorsRequest): _92.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorValidatorsRequestProtoMsg): _92.QueryDelegatorValidatorsRequest;
                toProto(message: _92.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorValidatorsRequest): _92.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _92.QueryDelegatorValidatorsResponse;
                toJSON(message: _92.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorsResponse>): _92.QueryDelegatorValidatorsResponse;
                fromAmino(object: _92.QueryDelegatorValidatorsResponseAmino): _92.QueryDelegatorValidatorsResponse;
                toAmino(message: _92.QueryDelegatorValidatorsResponse): _92.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _92.QueryDelegatorValidatorsResponseAminoMsg): _92.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _92.QueryDelegatorValidatorsResponse): _92.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorValidatorsResponseProtoMsg): _92.QueryDelegatorValidatorsResponse;
                toProto(message: _92.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorValidatorsResponse): _92.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _92.QueryDelegatorValidatorRequest;
                toJSON(message: _92.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorRequest>): _92.QueryDelegatorValidatorRequest;
                fromAmino(object: _92.QueryDelegatorValidatorRequestAmino): _92.QueryDelegatorValidatorRequest;
                toAmino(message: _92.QueryDelegatorValidatorRequest): _92.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _92.QueryDelegatorValidatorRequestAminoMsg): _92.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _92.QueryDelegatorValidatorRequest): _92.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorValidatorRequestProtoMsg): _92.QueryDelegatorValidatorRequest;
                toProto(message: _92.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorValidatorRequest): _92.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _92.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _92.QueryDelegatorValidatorResponse;
                toJSON(message: _92.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_92.QueryDelegatorValidatorResponse>): _92.QueryDelegatorValidatorResponse;
                fromAmino(object: _92.QueryDelegatorValidatorResponseAmino): _92.QueryDelegatorValidatorResponse;
                toAmino(message: _92.QueryDelegatorValidatorResponse): _92.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _92.QueryDelegatorValidatorResponseAminoMsg): _92.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _92.QueryDelegatorValidatorResponse): _92.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _92.QueryDelegatorValidatorResponseProtoMsg): _92.QueryDelegatorValidatorResponse;
                toProto(message: _92.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _92.QueryDelegatorValidatorResponse): _92.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _92.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryHistoricalInfoRequest;
                fromJSON(object: any): _92.QueryHistoricalInfoRequest;
                toJSON(message: _92.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_92.QueryHistoricalInfoRequest>): _92.QueryHistoricalInfoRequest;
                fromAmino(object: _92.QueryHistoricalInfoRequestAmino): _92.QueryHistoricalInfoRequest;
                toAmino(message: _92.QueryHistoricalInfoRequest): _92.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _92.QueryHistoricalInfoRequestAminoMsg): _92.QueryHistoricalInfoRequest;
                toAminoMsg(message: _92.QueryHistoricalInfoRequest): _92.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _92.QueryHistoricalInfoRequestProtoMsg): _92.QueryHistoricalInfoRequest;
                toProto(message: _92.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _92.QueryHistoricalInfoRequest): _92.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _92.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryHistoricalInfoResponse;
                fromJSON(object: any): _92.QueryHistoricalInfoResponse;
                toJSON(message: _92.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_92.QueryHistoricalInfoResponse>): _92.QueryHistoricalInfoResponse;
                fromAmino(object: _92.QueryHistoricalInfoResponseAmino): _92.QueryHistoricalInfoResponse;
                toAmino(message: _92.QueryHistoricalInfoResponse): _92.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _92.QueryHistoricalInfoResponseAminoMsg): _92.QueryHistoricalInfoResponse;
                toAminoMsg(message: _92.QueryHistoricalInfoResponse): _92.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _92.QueryHistoricalInfoResponseProtoMsg): _92.QueryHistoricalInfoResponse;
                toProto(message: _92.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _92.QueryHistoricalInfoResponse): _92.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _92.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryPoolRequest;
                fromJSON(_: any): _92.QueryPoolRequest;
                toJSON(_: _92.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_92.QueryPoolRequest>): _92.QueryPoolRequest;
                fromAmino(_: _92.QueryPoolRequestAmino): _92.QueryPoolRequest;
                toAmino(_: _92.QueryPoolRequest): _92.QueryPoolRequestAmino;
                fromAminoMsg(object: _92.QueryPoolRequestAminoMsg): _92.QueryPoolRequest;
                toAminoMsg(message: _92.QueryPoolRequest): _92.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _92.QueryPoolRequestProtoMsg): _92.QueryPoolRequest;
                toProto(message: _92.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _92.QueryPoolRequest): _92.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _92.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryPoolResponse;
                fromJSON(object: any): _92.QueryPoolResponse;
                toJSON(message: _92.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_92.QueryPoolResponse>): _92.QueryPoolResponse;
                fromAmino(object: _92.QueryPoolResponseAmino): _92.QueryPoolResponse;
                toAmino(message: _92.QueryPoolResponse): _92.QueryPoolResponseAmino;
                fromAminoMsg(object: _92.QueryPoolResponseAminoMsg): _92.QueryPoolResponse;
                toAminoMsg(message: _92.QueryPoolResponse): _92.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _92.QueryPoolResponseProtoMsg): _92.QueryPoolResponse;
                toProto(message: _92.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _92.QueryPoolResponse): _92.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _92.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryParamsRequest;
                fromJSON(_: any): _92.QueryParamsRequest;
                toJSON(_: _92.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_92.QueryParamsRequest>): _92.QueryParamsRequest;
                fromAmino(_: _92.QueryParamsRequestAmino): _92.QueryParamsRequest;
                toAmino(_: _92.QueryParamsRequest): _92.QueryParamsRequestAmino;
                fromAminoMsg(object: _92.QueryParamsRequestAminoMsg): _92.QueryParamsRequest;
                toAminoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryParamsRequestProtoMsg): _92.QueryParamsRequest;
                toProto(message: _92.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _92.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryParamsResponse;
                fromJSON(object: any): _92.QueryParamsResponse;
                toJSON(message: _92.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_92.QueryParamsResponse>): _92.QueryParamsResponse;
                fromAmino(object: _92.QueryParamsResponseAmino): _92.QueryParamsResponse;
                toAmino(message: _92.QueryParamsResponse): _92.QueryParamsResponseAmino;
                fromAminoMsg(object: _92.QueryParamsResponseAminoMsg): _92.QueryParamsResponse;
                toAminoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryParamsResponseProtoMsg): _92.QueryParamsResponse;
                toProto(message: _92.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _91.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.GenesisState;
                fromJSON(object: any): _91.GenesisState;
                toJSON(message: _91.GenesisState): unknown;
                fromPartial(object: Partial<_91.GenesisState>): _91.GenesisState;
                fromAmino(object: _91.GenesisStateAmino): _91.GenesisState;
                toAmino(message: _91.GenesisState): _91.GenesisStateAmino;
                fromAminoMsg(object: _91.GenesisStateAminoMsg): _91.GenesisState;
                toAminoMsg(message: _91.GenesisState): _91.GenesisStateAminoMsg;
                fromProtoMsg(message: _91.GenesisStateProtoMsg): _91.GenesisState;
                toProto(message: _91.GenesisState): Uint8Array;
                toProtoMsg(message: _91.GenesisState): _91.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _91.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.LastValidatorPower;
                fromJSON(object: any): _91.LastValidatorPower;
                toJSON(message: _91.LastValidatorPower): unknown;
                fromPartial(object: Partial<_91.LastValidatorPower>): _91.LastValidatorPower;
                fromAmino(object: _91.LastValidatorPowerAmino): _91.LastValidatorPower;
                toAmino(message: _91.LastValidatorPower): _91.LastValidatorPowerAmino;
                fromAminoMsg(object: _91.LastValidatorPowerAminoMsg): _91.LastValidatorPower;
                toAminoMsg(message: _91.LastValidatorPower): _91.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _91.LastValidatorPowerProtoMsg): _91.LastValidatorPower;
                toProto(message: _91.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _91.LastValidatorPower): _91.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _90.AuthorizationType;
            authorizationTypeToJSON(object: _90.AuthorizationType): string;
            AuthorizationType: typeof _90.AuthorizationType;
            AuthorizationTypeSDKType: typeof _90.AuthorizationType;
            AuthorizationTypeAmino: typeof _90.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _90.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.StakeAuthorization;
                fromJSON(object: any): _90.StakeAuthorization;
                toJSON(message: _90.StakeAuthorization): unknown;
                fromPartial(object: Partial<_90.StakeAuthorization>): _90.StakeAuthorization;
                fromAmino(object: _90.StakeAuthorizationAmino): _90.StakeAuthorization;
                toAmino(message: _90.StakeAuthorization): _90.StakeAuthorizationAmino;
                fromAminoMsg(object: _90.StakeAuthorizationAminoMsg): _90.StakeAuthorization;
                toAminoMsg(message: _90.StakeAuthorization): _90.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _90.StakeAuthorizationProtoMsg): _90.StakeAuthorization;
                toProto(message: _90.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _90.StakeAuthorization): _90.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _90.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.StakeAuthorization_Validators;
                fromJSON(object: any): _90.StakeAuthorization_Validators;
                toJSON(message: _90.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_90.StakeAuthorization_Validators>): _90.StakeAuthorization_Validators;
                fromAmino(object: _90.StakeAuthorization_ValidatorsAmino): _90.StakeAuthorization_Validators;
                toAmino(message: _90.StakeAuthorization_Validators): _90.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _90.StakeAuthorization_ValidatorsAminoMsg): _90.StakeAuthorization_Validators;
                toAminoMsg(message: _90.StakeAuthorization_Validators): _90.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _90.StakeAuthorization_ValidatorsProtoMsg): _90.StakeAuthorization_Validators;
                toProto(message: _90.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _90.StakeAuthorization_Validators): _90.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _95.SignMode;
                signModeToJSON(object: _95.SignMode): string;
                SignMode: typeof _95.SignMode;
                SignModeSDKType: typeof _95.SignMode;
                SignModeAmino: typeof _95.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SignatureDescriptors;
                    fromJSON(object: any): _95.SignatureDescriptors;
                    toJSON(message: _95.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_95.SignatureDescriptors>): _95.SignatureDescriptors;
                    fromAmino(object: _95.SignatureDescriptorsAmino): _95.SignatureDescriptors;
                    toAmino(message: _95.SignatureDescriptors): _95.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _95.SignatureDescriptorsAminoMsg): _95.SignatureDescriptors;
                    toAminoMsg(message: _95.SignatureDescriptors): _95.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptorsProtoMsg): _95.SignatureDescriptors;
                    toProto(message: _95.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptors): _95.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SignatureDescriptor;
                    fromJSON(object: any): _95.SignatureDescriptor;
                    toJSON(message: _95.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_95.SignatureDescriptor>): _95.SignatureDescriptor;
                    fromAmino(object: _95.SignatureDescriptorAmino): _95.SignatureDescriptor;
                    toAmino(message: _95.SignatureDescriptor): _95.SignatureDescriptorAmino;
                    fromAminoMsg(object: _95.SignatureDescriptorAminoMsg): _95.SignatureDescriptor;
                    toAminoMsg(message: _95.SignatureDescriptor): _95.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptorProtoMsg): _95.SignatureDescriptor;
                    toProto(message: _95.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptor): _95.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SignatureDescriptor_Data;
                    fromJSON(object: any): _95.SignatureDescriptor_Data;
                    toJSON(message: _95.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data>): _95.SignatureDescriptor_Data;
                    fromAmino(object: _95.SignatureDescriptor_DataAmino): _95.SignatureDescriptor_Data;
                    toAmino(message: _95.SignatureDescriptor_Data): _95.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _95.SignatureDescriptor_DataAminoMsg): _95.SignatureDescriptor_Data;
                    toAminoMsg(message: _95.SignatureDescriptor_Data): _95.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptor_DataProtoMsg): _95.SignatureDescriptor_Data;
                    toProto(message: _95.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptor_Data): _95.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _95.SignatureDescriptor_Data_Single;
                    toJSON(message: _95.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data_Single>): _95.SignatureDescriptor_Data_Single;
                    fromAmino(object: _95.SignatureDescriptor_Data_SingleAmino): _95.SignatureDescriptor_Data_Single;
                    toAmino(message: _95.SignatureDescriptor_Data_Single): _95.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _95.SignatureDescriptor_Data_SingleAminoMsg): _95.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _95.SignatureDescriptor_Data_Single): _95.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptor_Data_SingleProtoMsg): _95.SignatureDescriptor_Data_Single;
                    toProto(message: _95.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptor_Data_Single): _95.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _95.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _95.SignatureDescriptor_Data_Multi;
                    toJSON(message: _95.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_95.SignatureDescriptor_Data_Multi>): _95.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _95.SignatureDescriptor_Data_MultiAmino): _95.SignatureDescriptor_Data_Multi;
                    toAmino(message: _95.SignatureDescriptor_Data_Multi): _95.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _95.SignatureDescriptor_Data_MultiAminoMsg): _95.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _95.SignatureDescriptor_Data_Multi): _95.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _95.SignatureDescriptor_Data_MultiProtoMsg): _95.SignatureDescriptor_Data_Multi;
                    toProto(message: _95.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _95.SignatureDescriptor_Data_Multi): _95.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _264.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _96.SimulateRequest): Promise<_96.SimulateResponse>;
                getTx(request: _96.GetTxRequest): Promise<_96.GetTxResponse>;
                broadcastTx(request: _96.BroadcastTxRequest): Promise<_96.BroadcastTxResponse>;
                getTxsEvent(request: _96.GetTxsEventRequest): Promise<_96.GetTxsEventResponse>;
                getBlockWithTxs(request: _96.GetBlockWithTxsRequest): Promise<_96.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _245.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _97.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Tx;
                fromJSON(object: any): _97.Tx;
                toJSON(message: _97.Tx): unknown;
                fromPartial(object: Partial<_97.Tx>): _97.Tx;
                fromAmino(object: _97.TxAmino): _97.Tx;
                toAmino(message: _97.Tx): _97.TxAmino;
                fromAminoMsg(object: _97.TxAminoMsg): _97.Tx;
                toAminoMsg(message: _97.Tx): _97.TxAminoMsg;
                fromProtoMsg(message: _97.TxProtoMsg): _97.Tx;
                toProto(message: _97.Tx): Uint8Array;
                toProtoMsg(message: _97.Tx): _97.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _97.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.TxRaw;
                fromJSON(object: any): _97.TxRaw;
                toJSON(message: _97.TxRaw): unknown;
                fromPartial(object: Partial<_97.TxRaw>): _97.TxRaw;
                fromAmino(object: _97.TxRawAmino): _97.TxRaw;
                toAmino(message: _97.TxRaw): _97.TxRawAmino;
                fromAminoMsg(object: _97.TxRawAminoMsg): _97.TxRaw;
                toAminoMsg(message: _97.TxRaw): _97.TxRawAminoMsg;
                fromProtoMsg(message: _97.TxRawProtoMsg): _97.TxRaw;
                toProto(message: _97.TxRaw): Uint8Array;
                toProtoMsg(message: _97.TxRaw): _97.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _97.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SignDoc;
                fromJSON(object: any): _97.SignDoc;
                toJSON(message: _97.SignDoc): unknown;
                fromPartial(object: Partial<_97.SignDoc>): _97.SignDoc;
                fromAmino(object: _97.SignDocAmino): _97.SignDoc;
                toAmino(message: _97.SignDoc): _97.SignDocAmino;
                fromAminoMsg(object: _97.SignDocAminoMsg): _97.SignDoc;
                toAminoMsg(message: _97.SignDoc): _97.SignDocAminoMsg;
                fromProtoMsg(message: _97.SignDocProtoMsg): _97.SignDoc;
                toProto(message: _97.SignDoc): Uint8Array;
                toProtoMsg(message: _97.SignDoc): _97.SignDocProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _97.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.TxBody;
                fromJSON(object: any): _97.TxBody;
                toJSON(message: _97.TxBody): unknown;
                fromPartial(object: Partial<_97.TxBody>): _97.TxBody;
                fromAmino(object: _97.TxBodyAmino): _97.TxBody;
                toAmino(message: _97.TxBody): _97.TxBodyAmino;
                fromAminoMsg(object: _97.TxBodyAminoMsg): _97.TxBody;
                toAminoMsg(message: _97.TxBody): _97.TxBodyAminoMsg;
                fromProtoMsg(message: _97.TxBodyProtoMsg): _97.TxBody;
                toProto(message: _97.TxBody): Uint8Array;
                toProtoMsg(message: _97.TxBody): _97.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _97.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.AuthInfo;
                fromJSON(object: any): _97.AuthInfo;
                toJSON(message: _97.AuthInfo): unknown;
                fromPartial(object: Partial<_97.AuthInfo>): _97.AuthInfo;
                fromAmino(object: _97.AuthInfoAmino): _97.AuthInfo;
                toAmino(message: _97.AuthInfo): _97.AuthInfoAmino;
                fromAminoMsg(object: _97.AuthInfoAminoMsg): _97.AuthInfo;
                toAminoMsg(message: _97.AuthInfo): _97.AuthInfoAminoMsg;
                fromProtoMsg(message: _97.AuthInfoProtoMsg): _97.AuthInfo;
                toProto(message: _97.AuthInfo): Uint8Array;
                toProtoMsg(message: _97.AuthInfo): _97.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _97.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SignerInfo;
                fromJSON(object: any): _97.SignerInfo;
                toJSON(message: _97.SignerInfo): unknown;
                fromPartial(object: Partial<_97.SignerInfo>): _97.SignerInfo;
                fromAmino(object: _97.SignerInfoAmino): _97.SignerInfo;
                toAmino(message: _97.SignerInfo): _97.SignerInfoAmino;
                fromAminoMsg(object: _97.SignerInfoAminoMsg): _97.SignerInfo;
                toAminoMsg(message: _97.SignerInfo): _97.SignerInfoAminoMsg;
                fromProtoMsg(message: _97.SignerInfoProtoMsg): _97.SignerInfo;
                toProto(message: _97.SignerInfo): Uint8Array;
                toProtoMsg(message: _97.SignerInfo): _97.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _97.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ModeInfo;
                fromJSON(object: any): _97.ModeInfo;
                toJSON(message: _97.ModeInfo): unknown;
                fromPartial(object: Partial<_97.ModeInfo>): _97.ModeInfo;
                fromAmino(object: _97.ModeInfoAmino): _97.ModeInfo;
                toAmino(message: _97.ModeInfo): _97.ModeInfoAmino;
                fromAminoMsg(object: _97.ModeInfoAminoMsg): _97.ModeInfo;
                toAminoMsg(message: _97.ModeInfo): _97.ModeInfoAminoMsg;
                fromProtoMsg(message: _97.ModeInfoProtoMsg): _97.ModeInfo;
                toProto(message: _97.ModeInfo): Uint8Array;
                toProtoMsg(message: _97.ModeInfo): _97.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _97.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ModeInfo_Single;
                fromJSON(object: any): _97.ModeInfo_Single;
                toJSON(message: _97.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_97.ModeInfo_Single>): _97.ModeInfo_Single;
                fromAmino(object: _97.ModeInfo_SingleAmino): _97.ModeInfo_Single;
                toAmino(message: _97.ModeInfo_Single): _97.ModeInfo_SingleAmino;
                fromAminoMsg(object: _97.ModeInfo_SingleAminoMsg): _97.ModeInfo_Single;
                toAminoMsg(message: _97.ModeInfo_Single): _97.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _97.ModeInfo_SingleProtoMsg): _97.ModeInfo_Single;
                toProto(message: _97.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _97.ModeInfo_Single): _97.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _97.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ModeInfo_Multi;
                fromJSON(object: any): _97.ModeInfo_Multi;
                toJSON(message: _97.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_97.ModeInfo_Multi>): _97.ModeInfo_Multi;
                fromAmino(object: _97.ModeInfo_MultiAmino): _97.ModeInfo_Multi;
                toAmino(message: _97.ModeInfo_Multi): _97.ModeInfo_MultiAmino;
                fromAminoMsg(object: _97.ModeInfo_MultiAminoMsg): _97.ModeInfo_Multi;
                toAminoMsg(message: _97.ModeInfo_Multi): _97.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _97.ModeInfo_MultiProtoMsg): _97.ModeInfo_Multi;
                toProto(message: _97.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _97.ModeInfo_Multi): _97.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _97.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Fee;
                fromJSON(object: any): _97.Fee;
                toJSON(message: _97.Fee): unknown;
                fromPartial(object: Partial<_97.Fee>): _97.Fee;
                fromAmino(object: _97.FeeAmino): _97.Fee;
                toAmino(message: _97.Fee): _97.FeeAmino;
                fromAminoMsg(object: _97.FeeAminoMsg): _97.Fee;
                toAminoMsg(message: _97.Fee): _97.FeeAminoMsg;
                fromProtoMsg(message: _97.FeeProtoMsg): _97.Fee;
                toProto(message: _97.Fee): Uint8Array;
                toProtoMsg(message: _97.Fee): _97.FeeProtoMsg;
            };
            orderByFromJSON(object: any): _96.OrderBy;
            orderByToJSON(object: _96.OrderBy): string;
            broadcastModeFromJSON(object: any): _96.BroadcastMode;
            broadcastModeToJSON(object: _96.BroadcastMode): string;
            OrderBy: typeof _96.OrderBy;
            OrderBySDKType: typeof _96.OrderBy;
            OrderByAmino: typeof _96.OrderBy;
            BroadcastMode: typeof _96.BroadcastMode;
            BroadcastModeSDKType: typeof _96.BroadcastMode;
            BroadcastModeAmino: typeof _96.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _96.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GetTxsEventRequest;
                fromJSON(object: any): _96.GetTxsEventRequest;
                toJSON(message: _96.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_96.GetTxsEventRequest>): _96.GetTxsEventRequest;
                fromAmino(object: _96.GetTxsEventRequestAmino): _96.GetTxsEventRequest;
                toAmino(message: _96.GetTxsEventRequest): _96.GetTxsEventRequestAmino;
                fromAminoMsg(object: _96.GetTxsEventRequestAminoMsg): _96.GetTxsEventRequest;
                toAminoMsg(message: _96.GetTxsEventRequest): _96.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _96.GetTxsEventRequestProtoMsg): _96.GetTxsEventRequest;
                toProto(message: _96.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _96.GetTxsEventRequest): _96.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _96.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GetTxsEventResponse;
                fromJSON(object: any): _96.GetTxsEventResponse;
                toJSON(message: _96.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_96.GetTxsEventResponse>): _96.GetTxsEventResponse;
                fromAmino(object: _96.GetTxsEventResponseAmino): _96.GetTxsEventResponse;
                toAmino(message: _96.GetTxsEventResponse): _96.GetTxsEventResponseAmino;
                fromAminoMsg(object: _96.GetTxsEventResponseAminoMsg): _96.GetTxsEventResponse;
                toAminoMsg(message: _96.GetTxsEventResponse): _96.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _96.GetTxsEventResponseProtoMsg): _96.GetTxsEventResponse;
                toProto(message: _96.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _96.GetTxsEventResponse): _96.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _96.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.BroadcastTxRequest;
                fromJSON(object: any): _96.BroadcastTxRequest;
                toJSON(message: _96.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_96.BroadcastTxRequest>): _96.BroadcastTxRequest;
                fromAmino(object: _96.BroadcastTxRequestAmino): _96.BroadcastTxRequest;
                toAmino(message: _96.BroadcastTxRequest): _96.BroadcastTxRequestAmino;
                fromAminoMsg(object: _96.BroadcastTxRequestAminoMsg): _96.BroadcastTxRequest;
                toAminoMsg(message: _96.BroadcastTxRequest): _96.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _96.BroadcastTxRequestProtoMsg): _96.BroadcastTxRequest;
                toProto(message: _96.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _96.BroadcastTxRequest): _96.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _96.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.BroadcastTxResponse;
                fromJSON(object: any): _96.BroadcastTxResponse;
                toJSON(message: _96.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_96.BroadcastTxResponse>): _96.BroadcastTxResponse;
                fromAmino(object: _96.BroadcastTxResponseAmino): _96.BroadcastTxResponse;
                toAmino(message: _96.BroadcastTxResponse): _96.BroadcastTxResponseAmino;
                fromAminoMsg(object: _96.BroadcastTxResponseAminoMsg): _96.BroadcastTxResponse;
                toAminoMsg(message: _96.BroadcastTxResponse): _96.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _96.BroadcastTxResponseProtoMsg): _96.BroadcastTxResponse;
                toProto(message: _96.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _96.BroadcastTxResponse): _96.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _96.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.SimulateRequest;
                fromJSON(object: any): _96.SimulateRequest;
                toJSON(message: _96.SimulateRequest): unknown;
                fromPartial(object: Partial<_96.SimulateRequest>): _96.SimulateRequest;
                fromAmino(object: _96.SimulateRequestAmino): _96.SimulateRequest;
                toAmino(message: _96.SimulateRequest): _96.SimulateRequestAmino;
                fromAminoMsg(object: _96.SimulateRequestAminoMsg): _96.SimulateRequest;
                toAminoMsg(message: _96.SimulateRequest): _96.SimulateRequestAminoMsg;
                fromProtoMsg(message: _96.SimulateRequestProtoMsg): _96.SimulateRequest;
                toProto(message: _96.SimulateRequest): Uint8Array;
                toProtoMsg(message: _96.SimulateRequest): _96.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _96.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.SimulateResponse;
                fromJSON(object: any): _96.SimulateResponse;
                toJSON(message: _96.SimulateResponse): unknown;
                fromPartial(object: Partial<_96.SimulateResponse>): _96.SimulateResponse;
                fromAmino(object: _96.SimulateResponseAmino): _96.SimulateResponse;
                toAmino(message: _96.SimulateResponse): _96.SimulateResponseAmino;
                fromAminoMsg(object: _96.SimulateResponseAminoMsg): _96.SimulateResponse;
                toAminoMsg(message: _96.SimulateResponse): _96.SimulateResponseAminoMsg;
                fromProtoMsg(message: _96.SimulateResponseProtoMsg): _96.SimulateResponse;
                toProto(message: _96.SimulateResponse): Uint8Array;
                toProtoMsg(message: _96.SimulateResponse): _96.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _96.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GetTxRequest;
                fromJSON(object: any): _96.GetTxRequest;
                toJSON(message: _96.GetTxRequest): unknown;
                fromPartial(object: Partial<_96.GetTxRequest>): _96.GetTxRequest;
                fromAmino(object: _96.GetTxRequestAmino): _96.GetTxRequest;
                toAmino(message: _96.GetTxRequest): _96.GetTxRequestAmino;
                fromAminoMsg(object: _96.GetTxRequestAminoMsg): _96.GetTxRequest;
                toAminoMsg(message: _96.GetTxRequest): _96.GetTxRequestAminoMsg;
                fromProtoMsg(message: _96.GetTxRequestProtoMsg): _96.GetTxRequest;
                toProto(message: _96.GetTxRequest): Uint8Array;
                toProtoMsg(message: _96.GetTxRequest): _96.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _96.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GetTxResponse;
                fromJSON(object: any): _96.GetTxResponse;
                toJSON(message: _96.GetTxResponse): unknown;
                fromPartial(object: Partial<_96.GetTxResponse>): _96.GetTxResponse;
                fromAmino(object: _96.GetTxResponseAmino): _96.GetTxResponse;
                toAmino(message: _96.GetTxResponse): _96.GetTxResponseAmino;
                fromAminoMsg(object: _96.GetTxResponseAminoMsg): _96.GetTxResponse;
                toAminoMsg(message: _96.GetTxResponse): _96.GetTxResponseAminoMsg;
                fromProtoMsg(message: _96.GetTxResponseProtoMsg): _96.GetTxResponse;
                toProto(message: _96.GetTxResponse): Uint8Array;
                toProtoMsg(message: _96.GetTxResponse): _96.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _96.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GetBlockWithTxsRequest;
                fromJSON(object: any): _96.GetBlockWithTxsRequest;
                toJSON(message: _96.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_96.GetBlockWithTxsRequest>): _96.GetBlockWithTxsRequest;
                fromAmino(object: _96.GetBlockWithTxsRequestAmino): _96.GetBlockWithTxsRequest;
                toAmino(message: _96.GetBlockWithTxsRequest): _96.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _96.GetBlockWithTxsRequestAminoMsg): _96.GetBlockWithTxsRequest;
                toAminoMsg(message: _96.GetBlockWithTxsRequest): _96.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _96.GetBlockWithTxsRequestProtoMsg): _96.GetBlockWithTxsRequest;
                toProto(message: _96.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _96.GetBlockWithTxsRequest): _96.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _96.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GetBlockWithTxsResponse;
                fromJSON(object: any): _96.GetBlockWithTxsResponse;
                toJSON(message: _96.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_96.GetBlockWithTxsResponse>): _96.GetBlockWithTxsResponse;
                fromAmino(object: _96.GetBlockWithTxsResponseAmino): _96.GetBlockWithTxsResponse;
                toAmino(message: _96.GetBlockWithTxsResponse): _96.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _96.GetBlockWithTxsResponseAminoMsg): _96.GetBlockWithTxsResponse;
                toAminoMsg(message: _96.GetBlockWithTxsResponse): _96.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _96.GetBlockWithTxsResponseProtoMsg): _96.GetBlockWithTxsResponse;
                toProto(message: _96.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _96.GetBlockWithTxsResponse): _96.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _279.MsgClientImpl;
            QueryClientImpl: typeof _265.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _98.QueryCurrentPlanRequest): Promise<_98.QueryCurrentPlanResponse>;
                appliedPlan(request: _98.QueryAppliedPlanRequest): Promise<_98.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _98.QueryModuleVersionsRequest): Promise<_98.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _246.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _99.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _99.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _99.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _99.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _99.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _99.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _99.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _99.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _99.MsgSoftwareUpgrade) => _99.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _99.MsgSoftwareUpgradeAmino) => _99.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _99.MsgCancelUpgrade) => _99.MsgCancelUpgradeAmino;
                    fromAmino: (object: _99.MsgCancelUpgradeAmino) => _99.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _100.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Plan;
                fromJSON(object: any): _100.Plan;
                toJSON(message: _100.Plan): unknown;
                fromPartial(object: Partial<_100.Plan>): _100.Plan;
                fromAmino(object: _100.PlanAmino): _100.Plan;
                toAmino(message: _100.Plan): _100.PlanAmino;
                fromAminoMsg(object: _100.PlanAminoMsg): _100.Plan;
                toAminoMsg(message: _100.Plan): _100.PlanAminoMsg;
                fromProtoMsg(message: _100.PlanProtoMsg): _100.Plan;
                toProto(message: _100.Plan): Uint8Array;
                toProtoMsg(message: _100.Plan): _100.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _100.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.SoftwareUpgradeProposal;
                fromJSON(object: any): _100.SoftwareUpgradeProposal;
                toJSON(message: _100.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_100.SoftwareUpgradeProposal>): _100.SoftwareUpgradeProposal;
                fromAmino(object: _100.SoftwareUpgradeProposalAmino): _100.SoftwareUpgradeProposal;
                toAmino(message: _100.SoftwareUpgradeProposal): _100.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _100.SoftwareUpgradeProposalAminoMsg): _100.SoftwareUpgradeProposal;
                toAminoMsg(message: _100.SoftwareUpgradeProposal): _100.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _100.SoftwareUpgradeProposalProtoMsg): _100.SoftwareUpgradeProposal;
                toProto(message: _100.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _100.SoftwareUpgradeProposal): _100.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _100.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _100.CancelSoftwareUpgradeProposal;
                toJSON(message: _100.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_100.CancelSoftwareUpgradeProposal>): _100.CancelSoftwareUpgradeProposal;
                fromAmino(object: _100.CancelSoftwareUpgradeProposalAmino): _100.CancelSoftwareUpgradeProposal;
                toAmino(message: _100.CancelSoftwareUpgradeProposal): _100.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _100.CancelSoftwareUpgradeProposalAminoMsg): _100.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _100.CancelSoftwareUpgradeProposal): _100.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _100.CancelSoftwareUpgradeProposalProtoMsg): _100.CancelSoftwareUpgradeProposal;
                toProto(message: _100.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _100.CancelSoftwareUpgradeProposal): _100.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _100.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.ModuleVersion;
                fromJSON(object: any): _100.ModuleVersion;
                toJSON(message: _100.ModuleVersion): unknown;
                fromPartial(object: Partial<_100.ModuleVersion>): _100.ModuleVersion;
                fromAmino(object: _100.ModuleVersionAmino): _100.ModuleVersion;
                toAmino(message: _100.ModuleVersion): _100.ModuleVersionAmino;
                fromAminoMsg(object: _100.ModuleVersionAminoMsg): _100.ModuleVersion;
                toAminoMsg(message: _100.ModuleVersion): _100.ModuleVersionAminoMsg;
                fromProtoMsg(message: _100.ModuleVersionProtoMsg): _100.ModuleVersion;
                toProto(message: _100.ModuleVersion): Uint8Array;
                toProtoMsg(message: _100.ModuleVersion): _100.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _99.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgSoftwareUpgrade;
                fromJSON(object: any): _99.MsgSoftwareUpgrade;
                toJSON(message: _99.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_99.MsgSoftwareUpgrade>): _99.MsgSoftwareUpgrade;
                fromAmino(object: _99.MsgSoftwareUpgradeAmino): _99.MsgSoftwareUpgrade;
                toAmino(message: _99.MsgSoftwareUpgrade): _99.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _99.MsgSoftwareUpgradeAminoMsg): _99.MsgSoftwareUpgrade;
                toAminoMsg(message: _99.MsgSoftwareUpgrade): _99.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _99.MsgSoftwareUpgradeProtoMsg): _99.MsgSoftwareUpgrade;
                toProto(message: _99.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _99.MsgSoftwareUpgrade): _99.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _99.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _99.MsgSoftwareUpgradeResponse;
                toJSON(_: _99.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_99.MsgSoftwareUpgradeResponse>): _99.MsgSoftwareUpgradeResponse;
                fromAmino(_: _99.MsgSoftwareUpgradeResponseAmino): _99.MsgSoftwareUpgradeResponse;
                toAmino(_: _99.MsgSoftwareUpgradeResponse): _99.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _99.MsgSoftwareUpgradeResponseAminoMsg): _99.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _99.MsgSoftwareUpgradeResponse): _99.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _99.MsgSoftwareUpgradeResponseProtoMsg): _99.MsgSoftwareUpgradeResponse;
                toProto(message: _99.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _99.MsgSoftwareUpgradeResponse): _99.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _99.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgCancelUpgrade;
                fromJSON(object: any): _99.MsgCancelUpgrade;
                toJSON(message: _99.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_99.MsgCancelUpgrade>): _99.MsgCancelUpgrade;
                fromAmino(object: _99.MsgCancelUpgradeAmino): _99.MsgCancelUpgrade;
                toAmino(message: _99.MsgCancelUpgrade): _99.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _99.MsgCancelUpgradeAminoMsg): _99.MsgCancelUpgrade;
                toAminoMsg(message: _99.MsgCancelUpgrade): _99.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _99.MsgCancelUpgradeProtoMsg): _99.MsgCancelUpgrade;
                toProto(message: _99.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _99.MsgCancelUpgrade): _99.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _99.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgCancelUpgradeResponse;
                fromJSON(_: any): _99.MsgCancelUpgradeResponse;
                toJSON(_: _99.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_99.MsgCancelUpgradeResponse>): _99.MsgCancelUpgradeResponse;
                fromAmino(_: _99.MsgCancelUpgradeResponseAmino): _99.MsgCancelUpgradeResponse;
                toAmino(_: _99.MsgCancelUpgradeResponse): _99.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _99.MsgCancelUpgradeResponseAminoMsg): _99.MsgCancelUpgradeResponse;
                toAminoMsg(message: _99.MsgCancelUpgradeResponse): _99.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _99.MsgCancelUpgradeResponseProtoMsg): _99.MsgCancelUpgradeResponse;
                toProto(message: _99.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _99.MsgCancelUpgradeResponse): _99.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _98.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryCurrentPlanRequest;
                fromJSON(_: any): _98.QueryCurrentPlanRequest;
                toJSON(_: _98.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_98.QueryCurrentPlanRequest>): _98.QueryCurrentPlanRequest;
                fromAmino(_: _98.QueryCurrentPlanRequestAmino): _98.QueryCurrentPlanRequest;
                toAmino(_: _98.QueryCurrentPlanRequest): _98.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _98.QueryCurrentPlanRequestAminoMsg): _98.QueryCurrentPlanRequest;
                toAminoMsg(message: _98.QueryCurrentPlanRequest): _98.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _98.QueryCurrentPlanRequestProtoMsg): _98.QueryCurrentPlanRequest;
                toProto(message: _98.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _98.QueryCurrentPlanRequest): _98.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _98.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryCurrentPlanResponse;
                fromJSON(object: any): _98.QueryCurrentPlanResponse;
                toJSON(message: _98.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_98.QueryCurrentPlanResponse>): _98.QueryCurrentPlanResponse;
                fromAmino(object: _98.QueryCurrentPlanResponseAmino): _98.QueryCurrentPlanResponse;
                toAmino(message: _98.QueryCurrentPlanResponse): _98.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _98.QueryCurrentPlanResponseAminoMsg): _98.QueryCurrentPlanResponse;
                toAminoMsg(message: _98.QueryCurrentPlanResponse): _98.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _98.QueryCurrentPlanResponseProtoMsg): _98.QueryCurrentPlanResponse;
                toProto(message: _98.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _98.QueryCurrentPlanResponse): _98.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _98.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryAppliedPlanRequest;
                fromJSON(object: any): _98.QueryAppliedPlanRequest;
                toJSON(message: _98.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_98.QueryAppliedPlanRequest>): _98.QueryAppliedPlanRequest;
                fromAmino(object: _98.QueryAppliedPlanRequestAmino): _98.QueryAppliedPlanRequest;
                toAmino(message: _98.QueryAppliedPlanRequest): _98.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _98.QueryAppliedPlanRequestAminoMsg): _98.QueryAppliedPlanRequest;
                toAminoMsg(message: _98.QueryAppliedPlanRequest): _98.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _98.QueryAppliedPlanRequestProtoMsg): _98.QueryAppliedPlanRequest;
                toProto(message: _98.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _98.QueryAppliedPlanRequest): _98.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _98.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryAppliedPlanResponse;
                fromJSON(object: any): _98.QueryAppliedPlanResponse;
                toJSON(message: _98.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_98.QueryAppliedPlanResponse>): _98.QueryAppliedPlanResponse;
                fromAmino(object: _98.QueryAppliedPlanResponseAmino): _98.QueryAppliedPlanResponse;
                toAmino(message: _98.QueryAppliedPlanResponse): _98.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _98.QueryAppliedPlanResponseAminoMsg): _98.QueryAppliedPlanResponse;
                toAminoMsg(message: _98.QueryAppliedPlanResponse): _98.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _98.QueryAppliedPlanResponseProtoMsg): _98.QueryAppliedPlanResponse;
                toProto(message: _98.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _98.QueryAppliedPlanResponse): _98.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _98.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _98.QueryUpgradedConsensusStateRequest;
                toJSON(message: _98.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_98.QueryUpgradedConsensusStateRequest>): _98.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _98.QueryUpgradedConsensusStateRequestAmino): _98.QueryUpgradedConsensusStateRequest;
                toAmino(message: _98.QueryUpgradedConsensusStateRequest): _98.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _98.QueryUpgradedConsensusStateRequestAminoMsg): _98.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _98.QueryUpgradedConsensusStateRequest): _98.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _98.QueryUpgradedConsensusStateRequestProtoMsg): _98.QueryUpgradedConsensusStateRequest;
                toProto(message: _98.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _98.QueryUpgradedConsensusStateRequest): _98.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _98.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _98.QueryUpgradedConsensusStateResponse;
                toJSON(message: _98.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_98.QueryUpgradedConsensusStateResponse>): _98.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _98.QueryUpgradedConsensusStateResponseAmino): _98.QueryUpgradedConsensusStateResponse;
                toAmino(message: _98.QueryUpgradedConsensusStateResponse): _98.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _98.QueryUpgradedConsensusStateResponseAminoMsg): _98.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _98.QueryUpgradedConsensusStateResponse): _98.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _98.QueryUpgradedConsensusStateResponseProtoMsg): _98.QueryUpgradedConsensusStateResponse;
                toProto(message: _98.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _98.QueryUpgradedConsensusStateResponse): _98.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _98.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryModuleVersionsRequest;
                fromJSON(object: any): _98.QueryModuleVersionsRequest;
                toJSON(message: _98.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_98.QueryModuleVersionsRequest>): _98.QueryModuleVersionsRequest;
                fromAmino(object: _98.QueryModuleVersionsRequestAmino): _98.QueryModuleVersionsRequest;
                toAmino(message: _98.QueryModuleVersionsRequest): _98.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _98.QueryModuleVersionsRequestAminoMsg): _98.QueryModuleVersionsRequest;
                toAminoMsg(message: _98.QueryModuleVersionsRequest): _98.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _98.QueryModuleVersionsRequestProtoMsg): _98.QueryModuleVersionsRequest;
                toProto(message: _98.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _98.QueryModuleVersionsRequest): _98.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _98.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.QueryModuleVersionsResponse;
                fromJSON(object: any): _98.QueryModuleVersionsResponse;
                toJSON(message: _98.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_98.QueryModuleVersionsResponse>): _98.QueryModuleVersionsResponse;
                fromAmino(object: _98.QueryModuleVersionsResponseAmino): _98.QueryModuleVersionsResponse;
                toAmino(message: _98.QueryModuleVersionsResponse): _98.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _98.QueryModuleVersionsResponseAminoMsg): _98.QueryModuleVersionsResponse;
                toAminoMsg(message: _98.QueryModuleVersionsResponse): _98.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _98.QueryModuleVersionsResponseProtoMsg): _98.QueryModuleVersionsResponse;
                toProto(message: _98.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _98.QueryModuleVersionsResponse): _98.QueryModuleVersionsResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _280.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _101.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _101.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _101.MsgCreateVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _101.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _101.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _101.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _101.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _101.MsgCreateVestingAccount) => _101.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _101.MsgCreateVestingAccountAmino) => _101.MsgCreateVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _102.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.BaseVestingAccount;
                fromJSON(object: any): _102.BaseVestingAccount;
                toJSON(message: _102.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_102.BaseVestingAccount>): _102.BaseVestingAccount;
                fromAmino(object: _102.BaseVestingAccountAmino): _102.BaseVestingAccount;
                toAmino(message: _102.BaseVestingAccount): _102.BaseVestingAccountAmino;
                fromAminoMsg(object: _102.BaseVestingAccountAminoMsg): _102.BaseVestingAccount;
                toAminoMsg(message: _102.BaseVestingAccount): _102.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _102.BaseVestingAccountProtoMsg): _102.BaseVestingAccount;
                toProto(message: _102.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _102.BaseVestingAccount): _102.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _102.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ContinuousVestingAccount;
                fromJSON(object: any): _102.ContinuousVestingAccount;
                toJSON(message: _102.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_102.ContinuousVestingAccount>): _102.ContinuousVestingAccount;
                fromAmino(object: _102.ContinuousVestingAccountAmino): _102.ContinuousVestingAccount;
                toAmino(message: _102.ContinuousVestingAccount): _102.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _102.ContinuousVestingAccountAminoMsg): _102.ContinuousVestingAccount;
                toAminoMsg(message: _102.ContinuousVestingAccount): _102.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _102.ContinuousVestingAccountProtoMsg): _102.ContinuousVestingAccount;
                toProto(message: _102.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _102.ContinuousVestingAccount): _102.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _102.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.DelayedVestingAccount;
                fromJSON(object: any): _102.DelayedVestingAccount;
                toJSON(message: _102.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_102.DelayedVestingAccount>): _102.DelayedVestingAccount;
                fromAmino(object: _102.DelayedVestingAccountAmino): _102.DelayedVestingAccount;
                toAmino(message: _102.DelayedVestingAccount): _102.DelayedVestingAccountAmino;
                fromAminoMsg(object: _102.DelayedVestingAccountAminoMsg): _102.DelayedVestingAccount;
                toAminoMsg(message: _102.DelayedVestingAccount): _102.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _102.DelayedVestingAccountProtoMsg): _102.DelayedVestingAccount;
                toProto(message: _102.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _102.DelayedVestingAccount): _102.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _102.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Period;
                fromJSON(object: any): _102.Period;
                toJSON(message: _102.Period): unknown;
                fromPartial(object: Partial<_102.Period>): _102.Period;
                fromAmino(object: _102.PeriodAmino): _102.Period;
                toAmino(message: _102.Period): _102.PeriodAmino;
                fromAminoMsg(object: _102.PeriodAminoMsg): _102.Period;
                toAminoMsg(message: _102.Period): _102.PeriodAminoMsg;
                fromProtoMsg(message: _102.PeriodProtoMsg): _102.Period;
                toProto(message: _102.Period): Uint8Array;
                toProtoMsg(message: _102.Period): _102.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _102.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.PeriodicVestingAccount;
                fromJSON(object: any): _102.PeriodicVestingAccount;
                toJSON(message: _102.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_102.PeriodicVestingAccount>): _102.PeriodicVestingAccount;
                fromAmino(object: _102.PeriodicVestingAccountAmino): _102.PeriodicVestingAccount;
                toAmino(message: _102.PeriodicVestingAccount): _102.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _102.PeriodicVestingAccountAminoMsg): _102.PeriodicVestingAccount;
                toAminoMsg(message: _102.PeriodicVestingAccount): _102.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _102.PeriodicVestingAccountProtoMsg): _102.PeriodicVestingAccount;
                toProto(message: _102.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _102.PeriodicVestingAccount): _102.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _102.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.PermanentLockedAccount;
                fromJSON(object: any): _102.PermanentLockedAccount;
                toJSON(message: _102.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_102.PermanentLockedAccount>): _102.PermanentLockedAccount;
                fromAmino(object: _102.PermanentLockedAccountAmino): _102.PermanentLockedAccount;
                toAmino(message: _102.PermanentLockedAccount): _102.PermanentLockedAccountAmino;
                fromAminoMsg(object: _102.PermanentLockedAccountAminoMsg): _102.PermanentLockedAccount;
                toAminoMsg(message: _102.PermanentLockedAccount): _102.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _102.PermanentLockedAccountProtoMsg): _102.PermanentLockedAccount;
                toProto(message: _102.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _102.PermanentLockedAccount): _102.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _101.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgCreateVestingAccount;
                fromJSON(object: any): _101.MsgCreateVestingAccount;
                toJSON(message: _101.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_101.MsgCreateVestingAccount>): _101.MsgCreateVestingAccount;
                fromAmino(object: _101.MsgCreateVestingAccountAmino): _101.MsgCreateVestingAccount;
                toAmino(message: _101.MsgCreateVestingAccount): _101.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _101.MsgCreateVestingAccountAminoMsg): _101.MsgCreateVestingAccount;
                toAminoMsg(message: _101.MsgCreateVestingAccount): _101.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _101.MsgCreateVestingAccountProtoMsg): _101.MsgCreateVestingAccount;
                toProto(message: _101.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _101.MsgCreateVestingAccount): _101.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _101.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _101.MsgCreateVestingAccountResponse;
                toJSON(_: _101.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_101.MsgCreateVestingAccountResponse>): _101.MsgCreateVestingAccountResponse;
                fromAmino(_: _101.MsgCreateVestingAccountResponseAmino): _101.MsgCreateVestingAccountResponse;
                toAmino(_: _101.MsgCreateVestingAccountResponse): _101.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _101.MsgCreateVestingAccountResponseAminoMsg): _101.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _101.MsgCreateVestingAccountResponse): _101.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _101.MsgCreateVestingAccountResponseProtoMsg): _101.MsgCreateVestingAccountResponse;
                toProto(message: _101.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _101.MsgCreateVestingAccountResponse): _101.MsgCreateVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                accesscontrol_x: {
                    v1beta1: _266.MsgClientImpl;
                };
                authz: {
                    v1beta1: _267.MsgClientImpl;
                };
                bank: {
                    v1beta1: _268.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _269.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _270.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _271.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _272.MsgClientImpl;
                };
                gov: {
                    v1: _273.MsgClientImpl;
                    v1beta1: _274.MsgClientImpl;
                };
                group: {
                    v1: _275.MsgClientImpl;
                };
                nft: {
                    v1beta1: _276.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _277.MsgClientImpl;
                };
                staking: {
                    v1beta1: _278.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _279.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _280.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                accesscontrol_x: {
                    v1beta1: {
                        params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                        resourceDependencyMappingFromMessageKey(request: _2.ResourceDependencyMappingFromMessageKeyRequest): Promise<_2.ResourceDependencyMappingFromMessageKeyResponse>;
                        listResourceDependencyMapping(request?: _2.ListResourceDependencyMappingRequest): Promise<_2.ListResourceDependencyMappingResponse>;
                        wasmDependencyMapping(request: _2.WasmDependencyMappingRequest): Promise<_2.WasmDependencyMappingResponse>;
                        listWasmDependencyMapping(request?: _2.ListWasmDependencyMappingRequest): Promise<_2.ListWasmDependencyMappingResponse>;
                    };
                };
                app: {
                    v1alpha1: {
                        config(request?: _10.QueryConfigRequest): Promise<_10.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _13.QueryAccountsRequest): Promise<_13.QueryAccountsResponse>;
                        account(request: _13.QueryAccountRequest): Promise<_13.QueryAccountResponse>;
                        params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                        nextAccountNumber(request?: _13.QueryNextAccountNumberRequest): Promise<_13.QueryNextAccountNumberResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _17.QueryGrantsRequest): Promise<_17.QueryGrantsResponse>;
                        granterGrants(request: _17.QueryGranterGrantsRequest): Promise<_17.QueryGranterGrantsResponse>;
                        granteeGrants(request: _17.QueryGranteeGrantsRequest): Promise<_17.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _22.QueryBalanceRequest): Promise<_22.QueryBalanceResponse>;
                        allBalances(request: _22.QueryAllBalancesRequest): Promise<_22.QueryAllBalancesResponse>;
                        spendableBalances(request: _22.QuerySpendableBalancesRequest): Promise<_22.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _22.QueryTotalSupplyRequest): Promise<_22.QueryTotalSupplyResponse>;
                        supplyOf(request: _22.QuerySupplyOfRequest): Promise<_22.QuerySupplyOfResponse>;
                        params(request?: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
                        denomMetadata(request: _22.QueryDenomMetadataRequest): Promise<_22.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _22.QueryDenomsMetadataRequest): Promise<_22.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _32.GetNodeInfoRequest): Promise<_32.GetNodeInfoResponse>;
                            getSyncing(request?: _32.GetSyncingRequest): Promise<_32.GetSyncingResponse>;
                            getLatestBlock(request?: _32.GetLatestBlockRequest): Promise<_32.GetLatestBlockResponse>;
                            getBlockByHeight(request: _32.GetBlockByHeightRequest): Promise<_32.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _32.GetLatestValidatorSetRequest): Promise<_32.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _32.GetValidatorSetByHeightRequest): Promise<_32.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _47.QueryParamsRequest): Promise<_47.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _47.QueryValidatorOutstandingRewardsRequest): Promise<_47.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _47.QueryValidatorCommissionRequest): Promise<_47.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _47.QueryValidatorSlashesRequest): Promise<_47.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _47.QueryDelegationRewardsRequest): Promise<_47.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _47.QueryDelegationTotalRewardsRequest): Promise<_47.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _47.QueryDelegatorValidatorsRequest): Promise<_47.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _47.QueryDelegatorWithdrawAddressRequest): Promise<_47.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _47.QueryCommunityPoolRequest): Promise<_47.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _51.QueryEvidenceRequest): Promise<_51.QueryEvidenceResponse>;
                        allEvidence(request?: _51.QueryAllEvidenceRequest): Promise<_51.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _55.QueryAllowanceRequest): Promise<_55.QueryAllowanceResponse>;
                        allowances(request: _55.QueryAllowancesRequest): Promise<_55.QueryAllowancesResponse>;
                        allowancesByGranter(request: _55.QueryAllowancesByGranterRequest): Promise<_55.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _60.QueryProposalRequest): Promise<_60.QueryProposalResponse>;
                        proposals(request: _60.QueryProposalsRequest): Promise<_60.QueryProposalsResponse>;
                        vote(request: _60.QueryVoteRequest): Promise<_60.QueryVoteResponse>;
                        votes(request: _60.QueryVotesRequest): Promise<_60.QueryVotesResponse>;
                        params(request: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                        deposit(request: _60.QueryDepositRequest): Promise<_60.QueryDepositResponse>;
                        deposits(request: _60.QueryDepositsRequest): Promise<_60.QueryDepositsResponse>;
                        tallyResult(request: _60.QueryTallyResultRequest): Promise<_60.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _64.QueryProposalRequest): Promise<_64.QueryProposalResponse>;
                        proposals(request: _64.QueryProposalsRequest): Promise<_64.QueryProposalsResponse>;
                        vote(request: _64.QueryVoteRequest): Promise<_64.QueryVoteResponse>;
                        votes(request: _64.QueryVotesRequest): Promise<_64.QueryVotesResponse>;
                        params(request: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        deposit(request: _64.QueryDepositRequest): Promise<_64.QueryDepositResponse>;
                        deposits(request: _64.QueryDepositsRequest): Promise<_64.QueryDepositsResponse>;
                        tallyResult(request: _64.QueryTallyResultRequest): Promise<_64.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _68.QueryGroupInfoRequest): Promise<_68.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _68.QueryGroupPolicyInfoRequest): Promise<_68.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _68.QueryGroupMembersRequest): Promise<_68.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _68.QueryGroupsByAdminRequest): Promise<_68.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _68.QueryGroupPoliciesByGroupRequest): Promise<_68.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _68.QueryGroupPoliciesByAdminRequest): Promise<_68.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _68.QueryProposalRequest): Promise<_68.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _68.QueryProposalsByGroupPolicyRequest): Promise<_68.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _68.QueryVoteByProposalVoterRequest): Promise<_68.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _68.QueryVotesByProposalRequest): Promise<_68.QueryVotesByProposalResponse>;
                        votesByVoter(request: _68.QueryVotesByVoterRequest): Promise<_68.QueryVotesByVoterResponse>;
                        groupsByMember(request: _68.QueryGroupsByMemberRequest): Promise<_68.QueryGroupsByMemberResponse>;
                        tallyResult(request: _68.QueryTallyResultRequest): Promise<_68.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _74.QueryParamsRequest): Promise<_74.QueryParamsResponse>;
                        inflation(request?: _74.QueryInflationRequest): Promise<_74.QueryInflationResponse>;
                        annualProvisions(request?: _74.QueryAnnualProvisionsRequest): Promise<_74.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _79.QueryBalanceRequest): Promise<_79.QueryBalanceResponse>;
                        owner(request: _79.QueryOwnerRequest): Promise<_79.QueryOwnerResponse>;
                        supply(request: _79.QuerySupplyRequest): Promise<_79.QuerySupplyResponse>;
                        nFTs(request: _79.QueryNFTsRequest): Promise<_79.QueryNFTsResponse>;
                        nFT(request: _79.QueryNFTRequest): Promise<_79.QueryNFTResponse>;
                        class(request: _79.QueryClassRequest): Promise<_79.QueryClassResponse>;
                        classes(request?: _79.QueryClassesRequest): Promise<_79.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _85.QueryParamsRequest): Promise<_85.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                        signingInfo(request: _87.QuerySigningInfoRequest): Promise<_87.QuerySigningInfoResponse>;
                        signingInfos(request?: _87.QuerySigningInfosRequest): Promise<_87.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _92.QueryValidatorsRequest): Promise<_92.QueryValidatorsResponse>;
                        validator(request: _92.QueryValidatorRequest): Promise<_92.QueryValidatorResponse>;
                        validatorDelegations(request: _92.QueryValidatorDelegationsRequest): Promise<_92.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _92.QueryValidatorUnbondingDelegationsRequest): Promise<_92.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _92.QueryDelegationRequest): Promise<_92.QueryDelegationResponse>;
                        unbondingDelegation(request: _92.QueryUnbondingDelegationRequest): Promise<_92.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _92.QueryDelegatorDelegationsRequest): Promise<_92.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _92.QueryDelegatorUnbondingDelegationsRequest): Promise<_92.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _92.QueryRedelegationsRequest): Promise<_92.QueryRedelegationsResponse>;
                        delegatorValidators(request: _92.QueryDelegatorValidatorsRequest): Promise<_92.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _92.QueryDelegatorValidatorRequest): Promise<_92.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _92.QueryHistoricalInfoRequest): Promise<_92.QueryHistoricalInfoResponse>;
                        pool(request?: _92.QueryPoolRequest): Promise<_92.QueryPoolResponse>;
                        params(request?: _92.QueryParamsRequest): Promise<_92.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _96.SimulateRequest): Promise<_96.SimulateResponse>;
                        getTx(request: _96.GetTxRequest): Promise<_96.GetTxResponse>;
                        broadcastTx(request: _96.BroadcastTxRequest): Promise<_96.BroadcastTxResponse>;
                        getTxsEvent(request: _96.GetTxsEventRequest): Promise<_96.GetTxsEventResponse>;
                        getBlockWithTxs(request: _96.GetBlockWithTxsRequest): Promise<_96.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _98.QueryCurrentPlanRequest): Promise<_98.QueryCurrentPlanResponse>;
                        appliedPlan(request: _98.QueryAppliedPlanRequest): Promise<_98.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _98.QueryUpgradedConsensusStateRequest): Promise<_98.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _98.QueryModuleVersionsRequest): Promise<_98.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                accesscontrol_x: {
                    v1beta1: _229.LCDQueryClient;
                };
                auth: {
                    v1beta1: _230.LCDQueryClient;
                };
                authz: {
                    v1beta1: _231.LCDQueryClient;
                };
                bank: {
                    v1beta1: _232.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: _233.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _234.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _235.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _236.LCDQueryClient;
                };
                gov: {
                    v1: _237.LCDQueryClient;
                    v1beta1: _238.LCDQueryClient;
                };
                group: {
                    v1: _239.LCDQueryClient;
                };
                mint: {
                    v1beta1: _240.LCDQueryClient;
                };
                nft: {
                    v1beta1: _241.LCDQueryClient;
                };
                params: {
                    v1beta1: _242.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _243.LCDQueryClient;
                };
                staking: {
                    v1beta1: _244.LCDQueryClient;
                };
                tx: {
                    v1beta1: _245.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _246.LCDQueryClient;
                };
            };
        }>;
    };
}
