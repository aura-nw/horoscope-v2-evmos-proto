import * as _118 from "./epochs/v1/genesis";
import * as _119 from "./epochs/v1/query";
import * as _120 from "./erc20/v1/erc20";
import * as _121 from "./erc20/v1/events";
import * as _122 from "./erc20/v1/genesis";
import * as _123 from "./erc20/v1/query";
import * as _124 from "./erc20/v1/tx";
import * as _125 from "./incentives/v1/genesis";
import * as _126 from "./incentives/v1/incentives";
import * as _127 from "./inflation/v1/genesis";
import * as _128 from "./inflation/v1/inflation";
import * as _129 from "./inflation/v1/query";
import * as _130 from "./inflation/v1/tx";
import * as _131 from "./revenue/v1/events";
import * as _132 from "./revenue/v1/genesis";
import * as _133 from "./revenue/v1/query";
import * as _134 from "./revenue/v1/revenue";
import * as _135 from "./revenue/v1/tx";
import * as _136 from "./vesting/v1/vesting";
import * as _137 from "./vesting/v2/events";
import * as _138 from "./vesting/v2/query";
import * as _139 from "./vesting/v2/tx";
import * as _140 from "./vesting/v2/vesting";
import * as _299 from "./epochs/v1/query.lcd";
import * as _300 from "./erc20/v1/query.lcd";
import * as _301 from "./inflation/v1/query.lcd";
import * as _302 from "./revenue/v1/query.lcd";
import * as _303 from "./vesting/v2/query.lcd";
import * as _304 from "./epochs/v1/query.rpc.Query";
import * as _305 from "./erc20/v1/query.rpc.Query";
import * as _306 from "./inflation/v1/query.rpc.Query";
import * as _307 from "./revenue/v1/query.rpc.Query";
import * as _308 from "./vesting/v2/query.rpc.Query";
import * as _309 from "./erc20/v1/tx.rpc.msg";
import * as _310 from "./inflation/v1/tx.rpc.msg";
import * as _311 from "./revenue/v1/tx.rpc.msg";
import * as _312 from "./vesting/v2/tx.rpc.msg";
export declare namespace evmos {
    namespace epochs {
        const v1: {
            QueryClientImpl: typeof _304.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _119.QueryEpochsInfoRequest): Promise<_119.QueryEpochsInfoResponse>;
                currentEpoch(request: _119.QueryCurrentEpochRequest): Promise<_119.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _299.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(message: _119.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryEpochsInfoRequest;
                fromJSON(object: any): _119.QueryEpochsInfoRequest;
                toJSON(message: _119.QueryEpochsInfoRequest): unknown;
                fromPartial(object: Partial<_119.QueryEpochsInfoRequest>): _119.QueryEpochsInfoRequest;
                fromAmino(object: _119.QueryEpochsInfoRequestAmino): _119.QueryEpochsInfoRequest;
                toAmino(message: _119.QueryEpochsInfoRequest): _119.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _119.QueryEpochsInfoRequestAminoMsg): _119.QueryEpochsInfoRequest;
                fromProtoMsg(message: _119.QueryEpochsInfoRequestProtoMsg): _119.QueryEpochsInfoRequest;
                toProto(message: _119.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _119.QueryEpochsInfoRequest): _119.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _119.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryEpochsInfoResponse;
                fromJSON(object: any): _119.QueryEpochsInfoResponse;
                toJSON(message: _119.QueryEpochsInfoResponse): unknown;
                fromPartial(object: Partial<_119.QueryEpochsInfoResponse>): _119.QueryEpochsInfoResponse;
                fromAmino(object: _119.QueryEpochsInfoResponseAmino): _119.QueryEpochsInfoResponse;
                toAmino(message: _119.QueryEpochsInfoResponse): _119.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _119.QueryEpochsInfoResponseAminoMsg): _119.QueryEpochsInfoResponse;
                fromProtoMsg(message: _119.QueryEpochsInfoResponseProtoMsg): _119.QueryEpochsInfoResponse;
                toProto(message: _119.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _119.QueryEpochsInfoResponse): _119.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _119.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryCurrentEpochRequest;
                fromJSON(object: any): _119.QueryCurrentEpochRequest;
                toJSON(message: _119.QueryCurrentEpochRequest): unknown;
                fromPartial(object: Partial<_119.QueryCurrentEpochRequest>): _119.QueryCurrentEpochRequest;
                fromAmino(object: _119.QueryCurrentEpochRequestAmino): _119.QueryCurrentEpochRequest;
                toAmino(message: _119.QueryCurrentEpochRequest): _119.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _119.QueryCurrentEpochRequestAminoMsg): _119.QueryCurrentEpochRequest;
                fromProtoMsg(message: _119.QueryCurrentEpochRequestProtoMsg): _119.QueryCurrentEpochRequest;
                toProto(message: _119.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _119.QueryCurrentEpochRequest): _119.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _119.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryCurrentEpochResponse;
                fromJSON(object: any): _119.QueryCurrentEpochResponse;
                toJSON(message: _119.QueryCurrentEpochResponse): unknown;
                fromPartial(object: Partial<_119.QueryCurrentEpochResponse>): _119.QueryCurrentEpochResponse;
                fromAmino(object: _119.QueryCurrentEpochResponseAmino): _119.QueryCurrentEpochResponse;
                toAmino(message: _119.QueryCurrentEpochResponse): _119.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _119.QueryCurrentEpochResponseAminoMsg): _119.QueryCurrentEpochResponse;
                fromProtoMsg(message: _119.QueryCurrentEpochResponseProtoMsg): _119.QueryCurrentEpochResponse;
                toProto(message: _119.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _119.QueryCurrentEpochResponse): _119.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _118.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.EpochInfo;
                fromJSON(object: any): _118.EpochInfo;
                toJSON(message: _118.EpochInfo): unknown;
                fromPartial(object: Partial<_118.EpochInfo>): _118.EpochInfo;
                fromAmino(object: _118.EpochInfoAmino): _118.EpochInfo;
                toAmino(message: _118.EpochInfo): _118.EpochInfoAmino;
                fromAminoMsg(object: _118.EpochInfoAminoMsg): _118.EpochInfo;
                fromProtoMsg(message: _118.EpochInfoProtoMsg): _118.EpochInfo;
                toProto(message: _118.EpochInfo): Uint8Array;
                toProtoMsg(message: _118.EpochInfo): _118.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _118.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.GenesisState;
                fromJSON(object: any): _118.GenesisState;
                toJSON(message: _118.GenesisState): unknown;
                fromPartial(object: Partial<_118.GenesisState>): _118.GenesisState;
                fromAmino(object: _118.GenesisStateAmino): _118.GenesisState;
                toAmino(message: _118.GenesisState): _118.GenesisStateAmino;
                fromAminoMsg(object: _118.GenesisStateAminoMsg): _118.GenesisState;
                fromProtoMsg(message: _118.GenesisStateProtoMsg): _118.GenesisState;
                toProto(message: _118.GenesisState): Uint8Array;
                toProtoMsg(message: _118.GenesisState): _118.GenesisStateProtoMsg;
            };
        };
    }
    namespace erc20 {
        const v1: {
            MsgClientImpl: typeof _309.MsgClientImpl;
            QueryClientImpl: typeof _305.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                tokenPairs(request?: _123.QueryTokenPairsRequest): Promise<_123.QueryTokenPairsResponse>;
                tokenPair(request: _123.QueryTokenPairRequest): Promise<_123.QueryTokenPairResponse>;
                params(request?: _123.QueryParamsRequest): Promise<_123.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _300.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    convertCoin(value: _124.MsgConvertCoin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertERC20(value: _124.MsgConvertERC20): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _124.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    convertCoin(value: _124.MsgConvertCoin): {
                        typeUrl: string;
                        value: _124.MsgConvertCoin;
                    };
                    convertERC20(value: _124.MsgConvertERC20): {
                        typeUrl: string;
                        value: _124.MsgConvertERC20;
                    };
                    updateParams(value: _124.MsgUpdateParams): {
                        typeUrl: string;
                        value: _124.MsgUpdateParams;
                    };
                };
                toJSON: {
                    convertCoin(value: _124.MsgConvertCoin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    convertERC20(value: _124.MsgConvertERC20): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _124.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    convertCoin(value: any): {
                        typeUrl: string;
                        value: _124.MsgConvertCoin;
                    };
                    convertERC20(value: any): {
                        typeUrl: string;
                        value: _124.MsgConvertERC20;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _124.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    convertCoin(value: _124.MsgConvertCoin): {
                        typeUrl: string;
                        value: _124.MsgConvertCoin;
                    };
                    convertERC20(value: _124.MsgConvertERC20): {
                        typeUrl: string;
                        value: _124.MsgConvertERC20;
                    };
                    updateParams(value: _124.MsgUpdateParams): {
                        typeUrl: string;
                        value: _124.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.erc20.v1.MsgConvertCoin": {
                    aminoType: string;
                    toAmino: (message: _124.MsgConvertCoin) => _124.MsgConvertCoinAmino;
                    fromAmino: (object: _124.MsgConvertCoinAmino) => _124.MsgConvertCoin;
                };
                "/evmos.erc20.v1.MsgConvertERC20": {
                    aminoType: string;
                    toAmino: (message: _124.MsgConvertERC20) => _124.MsgConvertERC20Amino;
                    fromAmino: (object: _124.MsgConvertERC20Amino) => _124.MsgConvertERC20;
                };
                "/evmos.erc20.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _124.MsgUpdateParams) => _124.MsgUpdateParamsAmino;
                    fromAmino: (object: _124.MsgUpdateParamsAmino) => _124.MsgUpdateParams;
                };
            };
            MsgConvertCoin: {
                typeUrl: string;
                encode(message: _124.MsgConvertCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgConvertCoin;
                fromJSON(object: any): _124.MsgConvertCoin;
                toJSON(message: _124.MsgConvertCoin): unknown;
                fromPartial(object: Partial<_124.MsgConvertCoin>): _124.MsgConvertCoin;
                fromAmino(object: _124.MsgConvertCoinAmino): _124.MsgConvertCoin;
                toAmino(message: _124.MsgConvertCoin): _124.MsgConvertCoinAmino;
                fromAminoMsg(object: _124.MsgConvertCoinAminoMsg): _124.MsgConvertCoin;
                fromProtoMsg(message: _124.MsgConvertCoinProtoMsg): _124.MsgConvertCoin;
                toProto(message: _124.MsgConvertCoin): Uint8Array;
                toProtoMsg(message: _124.MsgConvertCoin): _124.MsgConvertCoinProtoMsg;
            };
            MsgConvertCoinResponse: {
                typeUrl: string;
                encode(_: _124.MsgConvertCoinResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgConvertCoinResponse;
                fromJSON(_: any): _124.MsgConvertCoinResponse;
                toJSON(_: _124.MsgConvertCoinResponse): unknown;
                fromPartial(_: Partial<_124.MsgConvertCoinResponse>): _124.MsgConvertCoinResponse;
                fromAmino(_: _124.MsgConvertCoinResponseAmino): _124.MsgConvertCoinResponse;
                toAmino(_: _124.MsgConvertCoinResponse): _124.MsgConvertCoinResponseAmino;
                fromAminoMsg(object: _124.MsgConvertCoinResponseAminoMsg): _124.MsgConvertCoinResponse;
                fromProtoMsg(message: _124.MsgConvertCoinResponseProtoMsg): _124.MsgConvertCoinResponse;
                toProto(message: _124.MsgConvertCoinResponse): Uint8Array;
                toProtoMsg(message: _124.MsgConvertCoinResponse): _124.MsgConvertCoinResponseProtoMsg;
            };
            MsgConvertERC20: {
                typeUrl: string;
                encode(message: _124.MsgConvertERC20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgConvertERC20;
                fromJSON(object: any): _124.MsgConvertERC20;
                toJSON(message: _124.MsgConvertERC20): unknown;
                fromPartial(object: Partial<_124.MsgConvertERC20>): _124.MsgConvertERC20;
                fromAmino(object: _124.MsgConvertERC20Amino): _124.MsgConvertERC20;
                toAmino(message: _124.MsgConvertERC20): _124.MsgConvertERC20Amino;
                fromAminoMsg(object: _124.MsgConvertERC20AminoMsg): _124.MsgConvertERC20;
                fromProtoMsg(message: _124.MsgConvertERC20ProtoMsg): _124.MsgConvertERC20;
                toProto(message: _124.MsgConvertERC20): Uint8Array;
                toProtoMsg(message: _124.MsgConvertERC20): _124.MsgConvertERC20ProtoMsg;
            };
            MsgConvertERC20Response: {
                typeUrl: string;
                encode(_: _124.MsgConvertERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgConvertERC20Response;
                fromJSON(_: any): _124.MsgConvertERC20Response;
                toJSON(_: _124.MsgConvertERC20Response): unknown;
                fromPartial(_: Partial<_124.MsgConvertERC20Response>): _124.MsgConvertERC20Response;
                fromAmino(_: _124.MsgConvertERC20ResponseAmino): _124.MsgConvertERC20Response;
                toAmino(_: _124.MsgConvertERC20Response): _124.MsgConvertERC20ResponseAmino;
                fromAminoMsg(object: _124.MsgConvertERC20ResponseAminoMsg): _124.MsgConvertERC20Response;
                fromProtoMsg(message: _124.MsgConvertERC20ResponseProtoMsg): _124.MsgConvertERC20Response;
                toProto(message: _124.MsgConvertERC20Response): Uint8Array;
                toProtoMsg(message: _124.MsgConvertERC20Response): _124.MsgConvertERC20ResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _124.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgUpdateParams;
                fromJSON(object: any): _124.MsgUpdateParams;
                toJSON(message: _124.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_124.MsgUpdateParams>): _124.MsgUpdateParams;
                fromAmino(object: _124.MsgUpdateParamsAmino): _124.MsgUpdateParams;
                toAmino(message: _124.MsgUpdateParams): _124.MsgUpdateParamsAmino;
                fromAminoMsg(object: _124.MsgUpdateParamsAminoMsg): _124.MsgUpdateParams;
                fromProtoMsg(message: _124.MsgUpdateParamsProtoMsg): _124.MsgUpdateParams;
                toProto(message: _124.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _124.MsgUpdateParams): _124.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _124.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.MsgUpdateParamsResponse;
                fromJSON(_: any): _124.MsgUpdateParamsResponse;
                toJSON(_: _124.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_124.MsgUpdateParamsResponse>): _124.MsgUpdateParamsResponse;
                fromAmino(_: _124.MsgUpdateParamsResponseAmino): _124.MsgUpdateParamsResponse;
                toAmino(_: _124.MsgUpdateParamsResponse): _124.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _124.MsgUpdateParamsResponseAminoMsg): _124.MsgUpdateParamsResponse;
                fromProtoMsg(message: _124.MsgUpdateParamsResponseProtoMsg): _124.MsgUpdateParamsResponse;
                toProto(message: _124.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _124.MsgUpdateParamsResponse): _124.MsgUpdateParamsResponseProtoMsg;
            };
            QueryTokenPairsRequest: {
                typeUrl: string;
                encode(message: _123.QueryTokenPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryTokenPairsRequest;
                fromJSON(object: any): _123.QueryTokenPairsRequest;
                toJSON(message: _123.QueryTokenPairsRequest): unknown;
                fromPartial(object: Partial<_123.QueryTokenPairsRequest>): _123.QueryTokenPairsRequest;
                fromAmino(object: _123.QueryTokenPairsRequestAmino): _123.QueryTokenPairsRequest;
                toAmino(message: _123.QueryTokenPairsRequest): _123.QueryTokenPairsRequestAmino;
                fromAminoMsg(object: _123.QueryTokenPairsRequestAminoMsg): _123.QueryTokenPairsRequest;
                fromProtoMsg(message: _123.QueryTokenPairsRequestProtoMsg): _123.QueryTokenPairsRequest;
                toProto(message: _123.QueryTokenPairsRequest): Uint8Array;
                toProtoMsg(message: _123.QueryTokenPairsRequest): _123.QueryTokenPairsRequestProtoMsg;
            };
            QueryTokenPairsResponse: {
                typeUrl: string;
                encode(message: _123.QueryTokenPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryTokenPairsResponse;
                fromJSON(object: any): _123.QueryTokenPairsResponse;
                toJSON(message: _123.QueryTokenPairsResponse): unknown;
                fromPartial(object: Partial<_123.QueryTokenPairsResponse>): _123.QueryTokenPairsResponse;
                fromAmino(object: _123.QueryTokenPairsResponseAmino): _123.QueryTokenPairsResponse;
                toAmino(message: _123.QueryTokenPairsResponse): _123.QueryTokenPairsResponseAmino;
                fromAminoMsg(object: _123.QueryTokenPairsResponseAminoMsg): _123.QueryTokenPairsResponse;
                fromProtoMsg(message: _123.QueryTokenPairsResponseProtoMsg): _123.QueryTokenPairsResponse;
                toProto(message: _123.QueryTokenPairsResponse): Uint8Array;
                toProtoMsg(message: _123.QueryTokenPairsResponse): _123.QueryTokenPairsResponseProtoMsg;
            };
            QueryTokenPairRequest: {
                typeUrl: string;
                encode(message: _123.QueryTokenPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryTokenPairRequest;
                fromJSON(object: any): _123.QueryTokenPairRequest;
                toJSON(message: _123.QueryTokenPairRequest): unknown;
                fromPartial(object: Partial<_123.QueryTokenPairRequest>): _123.QueryTokenPairRequest;
                fromAmino(object: _123.QueryTokenPairRequestAmino): _123.QueryTokenPairRequest;
                toAmino(message: _123.QueryTokenPairRequest): _123.QueryTokenPairRequestAmino;
                fromAminoMsg(object: _123.QueryTokenPairRequestAminoMsg): _123.QueryTokenPairRequest;
                fromProtoMsg(message: _123.QueryTokenPairRequestProtoMsg): _123.QueryTokenPairRequest;
                toProto(message: _123.QueryTokenPairRequest): Uint8Array;
                toProtoMsg(message: _123.QueryTokenPairRequest): _123.QueryTokenPairRequestProtoMsg;
            };
            QueryTokenPairResponse: {
                typeUrl: string;
                encode(message: _123.QueryTokenPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryTokenPairResponse;
                fromJSON(object: any): _123.QueryTokenPairResponse;
                toJSON(message: _123.QueryTokenPairResponse): unknown;
                fromPartial(object: Partial<_123.QueryTokenPairResponse>): _123.QueryTokenPairResponse;
                fromAmino(object: _123.QueryTokenPairResponseAmino): _123.QueryTokenPairResponse;
                toAmino(message: _123.QueryTokenPairResponse): _123.QueryTokenPairResponseAmino;
                fromAminoMsg(object: _123.QueryTokenPairResponseAminoMsg): _123.QueryTokenPairResponse;
                fromProtoMsg(message: _123.QueryTokenPairResponseProtoMsg): _123.QueryTokenPairResponse;
                toProto(message: _123.QueryTokenPairResponse): Uint8Array;
                toProtoMsg(message: _123.QueryTokenPairResponse): _123.QueryTokenPairResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _123.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryParamsRequest;
                fromJSON(_: any): _123.QueryParamsRequest;
                toJSON(_: _123.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_123.QueryParamsRequest>): _123.QueryParamsRequest;
                fromAmino(_: _123.QueryParamsRequestAmino): _123.QueryParamsRequest;
                toAmino(_: _123.QueryParamsRequest): _123.QueryParamsRequestAmino;
                fromAminoMsg(object: _123.QueryParamsRequestAminoMsg): _123.QueryParamsRequest;
                fromProtoMsg(message: _123.QueryParamsRequestProtoMsg): _123.QueryParamsRequest;
                toProto(message: _123.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _123.QueryParamsRequest): _123.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _123.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryParamsResponse;
                fromJSON(object: any): _123.QueryParamsResponse;
                toJSON(message: _123.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_123.QueryParamsResponse>): _123.QueryParamsResponse;
                fromAmino(object: _123.QueryParamsResponseAmino): _123.QueryParamsResponse;
                toAmino(message: _123.QueryParamsResponse): _123.QueryParamsResponseAmino;
                fromAminoMsg(object: _123.QueryParamsResponseAminoMsg): _123.QueryParamsResponse;
                fromProtoMsg(message: _123.QueryParamsResponseProtoMsg): _123.QueryParamsResponse;
                toProto(message: _123.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _123.QueryParamsResponse): _123.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _122.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.GenesisState;
                fromJSON(object: any): _122.GenesisState;
                toJSON(message: _122.GenesisState): unknown;
                fromPartial(object: Partial<_122.GenesisState>): _122.GenesisState;
                fromAmino(object: _122.GenesisStateAmino): _122.GenesisState;
                toAmino(message: _122.GenesisState): _122.GenesisStateAmino;
                fromAminoMsg(object: _122.GenesisStateAminoMsg): _122.GenesisState;
                fromProtoMsg(message: _122.GenesisStateProtoMsg): _122.GenesisState;
                toProto(message: _122.GenesisState): Uint8Array;
                toProtoMsg(message: _122.GenesisState): _122.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _122.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Params;
                fromJSON(object: any): _122.Params;
                toJSON(message: _122.Params): unknown;
                fromPartial(object: Partial<_122.Params>): _122.Params;
                fromAmino(object: _122.ParamsAmino): _122.Params;
                toAmino(message: _122.Params): _122.ParamsAmino;
                fromAminoMsg(object: _122.ParamsAminoMsg): _122.Params;
                fromProtoMsg(message: _122.ParamsProtoMsg): _122.Params;
                toProto(message: _122.Params): Uint8Array;
                toProtoMsg(message: _122.Params): _122.ParamsProtoMsg;
            };
            EventRegisterPair: {
                typeUrl: string;
                encode(message: _121.EventRegisterPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.EventRegisterPair;
                fromJSON(object: any): _121.EventRegisterPair;
                toJSON(message: _121.EventRegisterPair): unknown;
                fromPartial(object: Partial<_121.EventRegisterPair>): _121.EventRegisterPair;
                fromAmino(object: _121.EventRegisterPairAmino): _121.EventRegisterPair;
                toAmino(message: _121.EventRegisterPair): _121.EventRegisterPairAmino;
                fromAminoMsg(object: _121.EventRegisterPairAminoMsg): _121.EventRegisterPair;
                fromProtoMsg(message: _121.EventRegisterPairProtoMsg): _121.EventRegisterPair;
                toProto(message: _121.EventRegisterPair): Uint8Array;
                toProtoMsg(message: _121.EventRegisterPair): _121.EventRegisterPairProtoMsg;
            };
            EventToggleTokenConversion: {
                typeUrl: string;
                encode(message: _121.EventToggleTokenConversion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.EventToggleTokenConversion;
                fromJSON(object: any): _121.EventToggleTokenConversion;
                toJSON(message: _121.EventToggleTokenConversion): unknown;
                fromPartial(object: Partial<_121.EventToggleTokenConversion>): _121.EventToggleTokenConversion;
                fromAmino(object: _121.EventToggleTokenConversionAmino): _121.EventToggleTokenConversion;
                toAmino(message: _121.EventToggleTokenConversion): _121.EventToggleTokenConversionAmino;
                fromAminoMsg(object: _121.EventToggleTokenConversionAminoMsg): _121.EventToggleTokenConversion;
                fromProtoMsg(message: _121.EventToggleTokenConversionProtoMsg): _121.EventToggleTokenConversion;
                toProto(message: _121.EventToggleTokenConversion): Uint8Array;
                toProtoMsg(message: _121.EventToggleTokenConversion): _121.EventToggleTokenConversionProtoMsg;
            };
            EventConvertCoin: {
                typeUrl: string;
                encode(message: _121.EventConvertCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.EventConvertCoin;
                fromJSON(object: any): _121.EventConvertCoin;
                toJSON(message: _121.EventConvertCoin): unknown;
                fromPartial(object: Partial<_121.EventConvertCoin>): _121.EventConvertCoin;
                fromAmino(object: _121.EventConvertCoinAmino): _121.EventConvertCoin;
                toAmino(message: _121.EventConvertCoin): _121.EventConvertCoinAmino;
                fromAminoMsg(object: _121.EventConvertCoinAminoMsg): _121.EventConvertCoin;
                fromProtoMsg(message: _121.EventConvertCoinProtoMsg): _121.EventConvertCoin;
                toProto(message: _121.EventConvertCoin): Uint8Array;
                toProtoMsg(message: _121.EventConvertCoin): _121.EventConvertCoinProtoMsg;
            };
            EventConvertERC20: {
                typeUrl: string;
                encode(message: _121.EventConvertERC20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.EventConvertERC20;
                fromJSON(object: any): _121.EventConvertERC20;
                toJSON(message: _121.EventConvertERC20): unknown;
                fromPartial(object: Partial<_121.EventConvertERC20>): _121.EventConvertERC20;
                fromAmino(object: _121.EventConvertERC20Amino): _121.EventConvertERC20;
                toAmino(message: _121.EventConvertERC20): _121.EventConvertERC20Amino;
                fromAminoMsg(object: _121.EventConvertERC20AminoMsg): _121.EventConvertERC20;
                fromProtoMsg(message: _121.EventConvertERC20ProtoMsg): _121.EventConvertERC20;
                toProto(message: _121.EventConvertERC20): Uint8Array;
                toProtoMsg(message: _121.EventConvertERC20): _121.EventConvertERC20ProtoMsg;
            };
            ownerFromJSON(object: any): _120.Owner;
            ownerToJSON(object: _120.Owner): string;
            Owner: typeof _120.Owner;
            OwnerSDKType: typeof _120.Owner;
            OwnerAmino: typeof _120.Owner;
            TokenPair: {
                typeUrl: string;
                encode(message: _120.TokenPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.TokenPair;
                fromJSON(object: any): _120.TokenPair;
                toJSON(message: _120.TokenPair): unknown;
                fromPartial(object: Partial<_120.TokenPair>): _120.TokenPair;
                fromAmino(object: _120.TokenPairAmino): _120.TokenPair;
                toAmino(message: _120.TokenPair): _120.TokenPairAmino;
                fromAminoMsg(object: _120.TokenPairAminoMsg): _120.TokenPair;
                fromProtoMsg(message: _120.TokenPairProtoMsg): _120.TokenPair;
                toProto(message: _120.TokenPair): Uint8Array;
                toProtoMsg(message: _120.TokenPair): _120.TokenPairProtoMsg;
            };
            RegisterCoinProposal: {
                typeUrl: string;
                encode(message: _120.RegisterCoinProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RegisterCoinProposal;
                fromJSON(object: any): _120.RegisterCoinProposal;
                toJSON(message: _120.RegisterCoinProposal): unknown;
                fromPartial(object: Partial<_120.RegisterCoinProposal>): _120.RegisterCoinProposal;
                fromAmino(object: _120.RegisterCoinProposalAmino): _120.RegisterCoinProposal;
                toAmino(message: _120.RegisterCoinProposal): _120.RegisterCoinProposalAmino;
                fromAminoMsg(object: _120.RegisterCoinProposalAminoMsg): _120.RegisterCoinProposal;
                fromProtoMsg(message: _120.RegisterCoinProposalProtoMsg): _120.RegisterCoinProposal;
                toProto(message: _120.RegisterCoinProposal): Uint8Array;
                toProtoMsg(message: _120.RegisterCoinProposal): _120.RegisterCoinProposalProtoMsg;
            };
            RegisterERC20Proposal: {
                typeUrl: string;
                encode(message: _120.RegisterERC20Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.RegisterERC20Proposal;
                fromJSON(object: any): _120.RegisterERC20Proposal;
                toJSON(message: _120.RegisterERC20Proposal): unknown;
                fromPartial(object: Partial<_120.RegisterERC20Proposal>): _120.RegisterERC20Proposal;
                fromAmino(object: _120.RegisterERC20ProposalAmino): _120.RegisterERC20Proposal;
                toAmino(message: _120.RegisterERC20Proposal): _120.RegisterERC20ProposalAmino;
                fromAminoMsg(object: _120.RegisterERC20ProposalAminoMsg): _120.RegisterERC20Proposal;
                fromProtoMsg(message: _120.RegisterERC20ProposalProtoMsg): _120.RegisterERC20Proposal;
                toProto(message: _120.RegisterERC20Proposal): Uint8Array;
                toProtoMsg(message: _120.RegisterERC20Proposal): _120.RegisterERC20ProposalProtoMsg;
            };
            ToggleTokenConversionProposal: {
                typeUrl: string;
                encode(message: _120.ToggleTokenConversionProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ToggleTokenConversionProposal;
                fromJSON(object: any): _120.ToggleTokenConversionProposal;
                toJSON(message: _120.ToggleTokenConversionProposal): unknown;
                fromPartial(object: Partial<_120.ToggleTokenConversionProposal>): _120.ToggleTokenConversionProposal;
                fromAmino(object: _120.ToggleTokenConversionProposalAmino): _120.ToggleTokenConversionProposal;
                toAmino(message: _120.ToggleTokenConversionProposal): _120.ToggleTokenConversionProposalAmino;
                fromAminoMsg(object: _120.ToggleTokenConversionProposalAminoMsg): _120.ToggleTokenConversionProposal;
                fromProtoMsg(message: _120.ToggleTokenConversionProposalProtoMsg): _120.ToggleTokenConversionProposal;
                toProto(message: _120.ToggleTokenConversionProposal): Uint8Array;
                toProtoMsg(message: _120.ToggleTokenConversionProposal): _120.ToggleTokenConversionProposalProtoMsg;
            };
            ProposalMetadata: {
                typeUrl: string;
                encode(message: _120.ProposalMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ProposalMetadata;
                fromJSON(object: any): _120.ProposalMetadata;
                toJSON(message: _120.ProposalMetadata): unknown;
                fromPartial(object: Partial<_120.ProposalMetadata>): _120.ProposalMetadata;
                fromAmino(object: _120.ProposalMetadataAmino): _120.ProposalMetadata;
                toAmino(message: _120.ProposalMetadata): _120.ProposalMetadataAmino;
                fromAminoMsg(object: _120.ProposalMetadataAminoMsg): _120.ProposalMetadata;
                fromProtoMsg(message: _120.ProposalMetadataProtoMsg): _120.ProposalMetadata;
                toProto(message: _120.ProposalMetadata): Uint8Array;
                toProtoMsg(message: _120.ProposalMetadata): _120.ProposalMetadataProtoMsg;
            };
        };
    }
    namespace incentives {
        const v1: {
            Incentive: {
                typeUrl: string;
                encode(message: _126.Incentive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Incentive;
                fromJSON(object: any): _126.Incentive;
                toJSON(message: _126.Incentive): unknown;
                fromPartial(object: Partial<_126.Incentive>): _126.Incentive;
                fromAmino(object: _126.IncentiveAmino): _126.Incentive;
                toAmino(message: _126.Incentive): _126.IncentiveAmino;
                fromAminoMsg(object: _126.IncentiveAminoMsg): _126.Incentive;
                fromProtoMsg(message: _126.IncentiveProtoMsg): _126.Incentive;
                toProto(message: _126.Incentive): Uint8Array;
                toProtoMsg(message: _126.Incentive): _126.IncentiveProtoMsg;
            };
            GasMeter: {
                typeUrl: string;
                encode(message: _126.GasMeter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.GasMeter;
                fromJSON(object: any): _126.GasMeter;
                toJSON(message: _126.GasMeter): unknown;
                fromPartial(object: Partial<_126.GasMeter>): _126.GasMeter;
                fromAmino(object: _126.GasMeterAmino): _126.GasMeter;
                toAmino(message: _126.GasMeter): _126.GasMeterAmino;
                fromAminoMsg(object: _126.GasMeterAminoMsg): _126.GasMeter;
                fromProtoMsg(message: _126.GasMeterProtoMsg): _126.GasMeter;
                toProto(message: _126.GasMeter): Uint8Array;
                toProtoMsg(message: _126.GasMeter): _126.GasMeterProtoMsg;
            };
            RegisterIncentiveProposal: {
                typeUrl: string;
                encode(message: _126.RegisterIncentiveProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RegisterIncentiveProposal;
                fromJSON(object: any): _126.RegisterIncentiveProposal;
                toJSON(message: _126.RegisterIncentiveProposal): unknown;
                fromPartial(object: Partial<_126.RegisterIncentiveProposal>): _126.RegisterIncentiveProposal;
                fromAmino(object: _126.RegisterIncentiveProposalAmino): _126.RegisterIncentiveProposal;
                toAmino(message: _126.RegisterIncentiveProposal): _126.RegisterIncentiveProposalAmino;
                fromAminoMsg(object: _126.RegisterIncentiveProposalAminoMsg): _126.RegisterIncentiveProposal;
                fromProtoMsg(message: _126.RegisterIncentiveProposalProtoMsg): _126.RegisterIncentiveProposal;
                toProto(message: _126.RegisterIncentiveProposal): Uint8Array;
                toProtoMsg(message: _126.RegisterIncentiveProposal): _126.RegisterIncentiveProposalProtoMsg;
            };
            CancelIncentiveProposal: {
                typeUrl: string;
                encode(message: _126.CancelIncentiveProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.CancelIncentiveProposal;
                fromJSON(object: any): _126.CancelIncentiveProposal;
                toJSON(message: _126.CancelIncentiveProposal): unknown;
                fromPartial(object: Partial<_126.CancelIncentiveProposal>): _126.CancelIncentiveProposal;
                fromAmino(object: _126.CancelIncentiveProposalAmino): _126.CancelIncentiveProposal;
                toAmino(message: _126.CancelIncentiveProposal): _126.CancelIncentiveProposalAmino;
                fromAminoMsg(object: _126.CancelIncentiveProposalAminoMsg): _126.CancelIncentiveProposal;
                fromProtoMsg(message: _126.CancelIncentiveProposalProtoMsg): _126.CancelIncentiveProposal;
                toProto(message: _126.CancelIncentiveProposal): Uint8Array;
                toProtoMsg(message: _126.CancelIncentiveProposal): _126.CancelIncentiveProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _125.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GenesisState;
                fromJSON(object: any): _125.GenesisState;
                toJSON(message: _125.GenesisState): unknown;
                fromPartial(object: Partial<_125.GenesisState>): _125.GenesisState;
                fromAmino(object: _125.GenesisStateAmino): _125.GenesisState;
                toAmino(message: _125.GenesisState): _125.GenesisStateAmino;
                fromAminoMsg(object: _125.GenesisStateAminoMsg): _125.GenesisState;
                fromProtoMsg(message: _125.GenesisStateProtoMsg): _125.GenesisState;
                toProto(message: _125.GenesisState): Uint8Array;
                toProtoMsg(message: _125.GenesisState): _125.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _125.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Params;
                fromJSON(object: any): _125.Params;
                toJSON(message: _125.Params): unknown;
                fromPartial(object: Partial<_125.Params>): _125.Params;
                fromAmino(object: _125.ParamsAmino): _125.Params;
                toAmino(message: _125.Params): _125.ParamsAmino;
                fromAminoMsg(object: _125.ParamsAminoMsg): _125.Params;
                fromProtoMsg(message: _125.ParamsProtoMsg): _125.Params;
                toProto(message: _125.Params): Uint8Array;
                toProtoMsg(message: _125.Params): _125.ParamsProtoMsg;
            };
        };
    }
    namespace inflation {
        const v1: {
            MsgClientImpl: typeof _310.MsgClientImpl;
            QueryClientImpl: typeof _306.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                period(request?: _129.QueryPeriodRequest): Promise<_129.QueryPeriodResponse>;
                epochMintProvision(request?: _129.QueryEpochMintProvisionRequest): Promise<_129.QueryEpochMintProvisionResponse>;
                skippedEpochs(request?: _129.QuerySkippedEpochsRequest): Promise<_129.QuerySkippedEpochsResponse>;
                circulatingSupply(request?: _129.QueryCirculatingSupplyRequest): Promise<_129.QueryCirculatingSupplyResponse>;
                inflationRate(request?: _129.QueryInflationRateRequest): Promise<_129.QueryInflationRateResponse>;
                params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _301.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _130.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _130.MsgUpdateParams): {
                        typeUrl: string;
                        value: _130.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _130.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _130.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _130.MsgUpdateParams): {
                        typeUrl: string;
                        value: _130.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.inflation.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _130.MsgUpdateParams) => _130.MsgUpdateParamsAmino;
                    fromAmino: (object: _130.MsgUpdateParamsAmino) => _130.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _130.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgUpdateParams;
                fromJSON(object: any): _130.MsgUpdateParams;
                toJSON(message: _130.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_130.MsgUpdateParams>): _130.MsgUpdateParams;
                fromAmino(object: _130.MsgUpdateParamsAmino): _130.MsgUpdateParams;
                toAmino(message: _130.MsgUpdateParams): _130.MsgUpdateParamsAmino;
                fromAminoMsg(object: _130.MsgUpdateParamsAminoMsg): _130.MsgUpdateParams;
                fromProtoMsg(message: _130.MsgUpdateParamsProtoMsg): _130.MsgUpdateParams;
                toProto(message: _130.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateParams): _130.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _130.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.MsgUpdateParamsResponse;
                fromJSON(_: any): _130.MsgUpdateParamsResponse;
                toJSON(_: _130.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_130.MsgUpdateParamsResponse>): _130.MsgUpdateParamsResponse;
                fromAmino(_: _130.MsgUpdateParamsResponseAmino): _130.MsgUpdateParamsResponse;
                toAmino(_: _130.MsgUpdateParamsResponse): _130.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _130.MsgUpdateParamsResponseAminoMsg): _130.MsgUpdateParamsResponse;
                fromProtoMsg(message: _130.MsgUpdateParamsResponseProtoMsg): _130.MsgUpdateParamsResponse;
                toProto(message: _130.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _130.MsgUpdateParamsResponse): _130.MsgUpdateParamsResponseProtoMsg;
            };
            QueryPeriodRequest: {
                typeUrl: string;
                encode(_: _129.QueryPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryPeriodRequest;
                fromJSON(_: any): _129.QueryPeriodRequest;
                toJSON(_: _129.QueryPeriodRequest): unknown;
                fromPartial(_: Partial<_129.QueryPeriodRequest>): _129.QueryPeriodRequest;
                fromAmino(_: _129.QueryPeriodRequestAmino): _129.QueryPeriodRequest;
                toAmino(_: _129.QueryPeriodRequest): _129.QueryPeriodRequestAmino;
                fromAminoMsg(object: _129.QueryPeriodRequestAminoMsg): _129.QueryPeriodRequest;
                fromProtoMsg(message: _129.QueryPeriodRequestProtoMsg): _129.QueryPeriodRequest;
                toProto(message: _129.QueryPeriodRequest): Uint8Array;
                toProtoMsg(message: _129.QueryPeriodRequest): _129.QueryPeriodRequestProtoMsg;
            };
            QueryPeriodResponse: {
                typeUrl: string;
                encode(message: _129.QueryPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryPeriodResponse;
                fromJSON(object: any): _129.QueryPeriodResponse;
                toJSON(message: _129.QueryPeriodResponse): unknown;
                fromPartial(object: Partial<_129.QueryPeriodResponse>): _129.QueryPeriodResponse;
                fromAmino(object: _129.QueryPeriodResponseAmino): _129.QueryPeriodResponse;
                toAmino(message: _129.QueryPeriodResponse): _129.QueryPeriodResponseAmino;
                fromAminoMsg(object: _129.QueryPeriodResponseAminoMsg): _129.QueryPeriodResponse;
                fromProtoMsg(message: _129.QueryPeriodResponseProtoMsg): _129.QueryPeriodResponse;
                toProto(message: _129.QueryPeriodResponse): Uint8Array;
                toProtoMsg(message: _129.QueryPeriodResponse): _129.QueryPeriodResponseProtoMsg;
            };
            QueryEpochMintProvisionRequest: {
                typeUrl: string;
                encode(_: _129.QueryEpochMintProvisionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryEpochMintProvisionRequest;
                fromJSON(_: any): _129.QueryEpochMintProvisionRequest;
                toJSON(_: _129.QueryEpochMintProvisionRequest): unknown;
                fromPartial(_: Partial<_129.QueryEpochMintProvisionRequest>): _129.QueryEpochMintProvisionRequest;
                fromAmino(_: _129.QueryEpochMintProvisionRequestAmino): _129.QueryEpochMintProvisionRequest;
                toAmino(_: _129.QueryEpochMintProvisionRequest): _129.QueryEpochMintProvisionRequestAmino;
                fromAminoMsg(object: _129.QueryEpochMintProvisionRequestAminoMsg): _129.QueryEpochMintProvisionRequest;
                fromProtoMsg(message: _129.QueryEpochMintProvisionRequestProtoMsg): _129.QueryEpochMintProvisionRequest;
                toProto(message: _129.QueryEpochMintProvisionRequest): Uint8Array;
                toProtoMsg(message: _129.QueryEpochMintProvisionRequest): _129.QueryEpochMintProvisionRequestProtoMsg;
            };
            QueryEpochMintProvisionResponse: {
                typeUrl: string;
                encode(message: _129.QueryEpochMintProvisionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryEpochMintProvisionResponse;
                fromJSON(object: any): _129.QueryEpochMintProvisionResponse;
                toJSON(message: _129.QueryEpochMintProvisionResponse): unknown;
                fromPartial(object: Partial<_129.QueryEpochMintProvisionResponse>): _129.QueryEpochMintProvisionResponse;
                fromAmino(object: _129.QueryEpochMintProvisionResponseAmino): _129.QueryEpochMintProvisionResponse;
                toAmino(message: _129.QueryEpochMintProvisionResponse): _129.QueryEpochMintProvisionResponseAmino;
                fromAminoMsg(object: _129.QueryEpochMintProvisionResponseAminoMsg): _129.QueryEpochMintProvisionResponse;
                fromProtoMsg(message: _129.QueryEpochMintProvisionResponseProtoMsg): _129.QueryEpochMintProvisionResponse;
                toProto(message: _129.QueryEpochMintProvisionResponse): Uint8Array;
                toProtoMsg(message: _129.QueryEpochMintProvisionResponse): _129.QueryEpochMintProvisionResponseProtoMsg;
            };
            QuerySkippedEpochsRequest: {
                typeUrl: string;
                encode(_: _129.QuerySkippedEpochsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QuerySkippedEpochsRequest;
                fromJSON(_: any): _129.QuerySkippedEpochsRequest;
                toJSON(_: _129.QuerySkippedEpochsRequest): unknown;
                fromPartial(_: Partial<_129.QuerySkippedEpochsRequest>): _129.QuerySkippedEpochsRequest;
                fromAmino(_: _129.QuerySkippedEpochsRequestAmino): _129.QuerySkippedEpochsRequest;
                toAmino(_: _129.QuerySkippedEpochsRequest): _129.QuerySkippedEpochsRequestAmino;
                fromAminoMsg(object: _129.QuerySkippedEpochsRequestAminoMsg): _129.QuerySkippedEpochsRequest;
                fromProtoMsg(message: _129.QuerySkippedEpochsRequestProtoMsg): _129.QuerySkippedEpochsRequest;
                toProto(message: _129.QuerySkippedEpochsRequest): Uint8Array;
                toProtoMsg(message: _129.QuerySkippedEpochsRequest): _129.QuerySkippedEpochsRequestProtoMsg;
            };
            QuerySkippedEpochsResponse: {
                typeUrl: string;
                encode(message: _129.QuerySkippedEpochsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QuerySkippedEpochsResponse;
                fromJSON(object: any): _129.QuerySkippedEpochsResponse;
                toJSON(message: _129.QuerySkippedEpochsResponse): unknown;
                fromPartial(object: Partial<_129.QuerySkippedEpochsResponse>): _129.QuerySkippedEpochsResponse;
                fromAmino(object: _129.QuerySkippedEpochsResponseAmino): _129.QuerySkippedEpochsResponse;
                toAmino(message: _129.QuerySkippedEpochsResponse): _129.QuerySkippedEpochsResponseAmino;
                fromAminoMsg(object: _129.QuerySkippedEpochsResponseAminoMsg): _129.QuerySkippedEpochsResponse;
                fromProtoMsg(message: _129.QuerySkippedEpochsResponseProtoMsg): _129.QuerySkippedEpochsResponse;
                toProto(message: _129.QuerySkippedEpochsResponse): Uint8Array;
                toProtoMsg(message: _129.QuerySkippedEpochsResponse): _129.QuerySkippedEpochsResponseProtoMsg;
            };
            QueryCirculatingSupplyRequest: {
                typeUrl: string;
                encode(_: _129.QueryCirculatingSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryCirculatingSupplyRequest;
                fromJSON(_: any): _129.QueryCirculatingSupplyRequest;
                toJSON(_: _129.QueryCirculatingSupplyRequest): unknown;
                fromPartial(_: Partial<_129.QueryCirculatingSupplyRequest>): _129.QueryCirculatingSupplyRequest;
                fromAmino(_: _129.QueryCirculatingSupplyRequestAmino): _129.QueryCirculatingSupplyRequest;
                toAmino(_: _129.QueryCirculatingSupplyRequest): _129.QueryCirculatingSupplyRequestAmino;
                fromAminoMsg(object: _129.QueryCirculatingSupplyRequestAminoMsg): _129.QueryCirculatingSupplyRequest;
                fromProtoMsg(message: _129.QueryCirculatingSupplyRequestProtoMsg): _129.QueryCirculatingSupplyRequest;
                toProto(message: _129.QueryCirculatingSupplyRequest): Uint8Array;
                toProtoMsg(message: _129.QueryCirculatingSupplyRequest): _129.QueryCirculatingSupplyRequestProtoMsg;
            };
            QueryCirculatingSupplyResponse: {
                typeUrl: string;
                encode(message: _129.QueryCirculatingSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryCirculatingSupplyResponse;
                fromJSON(object: any): _129.QueryCirculatingSupplyResponse;
                toJSON(message: _129.QueryCirculatingSupplyResponse): unknown;
                fromPartial(object: Partial<_129.QueryCirculatingSupplyResponse>): _129.QueryCirculatingSupplyResponse;
                fromAmino(object: _129.QueryCirculatingSupplyResponseAmino): _129.QueryCirculatingSupplyResponse;
                toAmino(message: _129.QueryCirculatingSupplyResponse): _129.QueryCirculatingSupplyResponseAmino;
                fromAminoMsg(object: _129.QueryCirculatingSupplyResponseAminoMsg): _129.QueryCirculatingSupplyResponse;
                fromProtoMsg(message: _129.QueryCirculatingSupplyResponseProtoMsg): _129.QueryCirculatingSupplyResponse;
                toProto(message: _129.QueryCirculatingSupplyResponse): Uint8Array;
                toProtoMsg(message: _129.QueryCirculatingSupplyResponse): _129.QueryCirculatingSupplyResponseProtoMsg;
            };
            QueryInflationRateRequest: {
                typeUrl: string;
                encode(_: _129.QueryInflationRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryInflationRateRequest;
                fromJSON(_: any): _129.QueryInflationRateRequest;
                toJSON(_: _129.QueryInflationRateRequest): unknown;
                fromPartial(_: Partial<_129.QueryInflationRateRequest>): _129.QueryInflationRateRequest;
                fromAmino(_: _129.QueryInflationRateRequestAmino): _129.QueryInflationRateRequest;
                toAmino(_: _129.QueryInflationRateRequest): _129.QueryInflationRateRequestAmino;
                fromAminoMsg(object: _129.QueryInflationRateRequestAminoMsg): _129.QueryInflationRateRequest;
                fromProtoMsg(message: _129.QueryInflationRateRequestProtoMsg): _129.QueryInflationRateRequest;
                toProto(message: _129.QueryInflationRateRequest): Uint8Array;
                toProtoMsg(message: _129.QueryInflationRateRequest): _129.QueryInflationRateRequestProtoMsg;
            };
            QueryInflationRateResponse: {
                typeUrl: string;
                encode(message: _129.QueryInflationRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryInflationRateResponse;
                fromJSON(object: any): _129.QueryInflationRateResponse;
                toJSON(message: _129.QueryInflationRateResponse): unknown;
                fromPartial(object: Partial<_129.QueryInflationRateResponse>): _129.QueryInflationRateResponse;
                fromAmino(object: _129.QueryInflationRateResponseAmino): _129.QueryInflationRateResponse;
                toAmino(message: _129.QueryInflationRateResponse): _129.QueryInflationRateResponseAmino;
                fromAminoMsg(object: _129.QueryInflationRateResponseAminoMsg): _129.QueryInflationRateResponse;
                fromProtoMsg(message: _129.QueryInflationRateResponseProtoMsg): _129.QueryInflationRateResponse;
                toProto(message: _129.QueryInflationRateResponse): Uint8Array;
                toProtoMsg(message: _129.QueryInflationRateResponse): _129.QueryInflationRateResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _129.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryParamsRequest;
                fromJSON(_: any): _129.QueryParamsRequest;
                toJSON(_: _129.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_129.QueryParamsRequest>): _129.QueryParamsRequest;
                fromAmino(_: _129.QueryParamsRequestAmino): _129.QueryParamsRequest;
                toAmino(_: _129.QueryParamsRequest): _129.QueryParamsRequestAmino;
                fromAminoMsg(object: _129.QueryParamsRequestAminoMsg): _129.QueryParamsRequest;
                fromProtoMsg(message: _129.QueryParamsRequestProtoMsg): _129.QueryParamsRequest;
                toProto(message: _129.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _129.QueryParamsRequest): _129.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _129.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.QueryParamsResponse;
                fromJSON(object: any): _129.QueryParamsResponse;
                toJSON(message: _129.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_129.QueryParamsResponse>): _129.QueryParamsResponse;
                fromAmino(object: _129.QueryParamsResponseAmino): _129.QueryParamsResponse;
                toAmino(message: _129.QueryParamsResponse): _129.QueryParamsResponseAmino;
                fromAminoMsg(object: _129.QueryParamsResponseAminoMsg): _129.QueryParamsResponse;
                fromProtoMsg(message: _129.QueryParamsResponseProtoMsg): _129.QueryParamsResponse;
                toProto(message: _129.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _129.QueryParamsResponse): _129.QueryParamsResponseProtoMsg;
            };
            InflationDistribution: {
                typeUrl: string;
                encode(message: _128.InflationDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.InflationDistribution;
                fromJSON(object: any): _128.InflationDistribution;
                toJSON(message: _128.InflationDistribution): unknown;
                fromPartial(object: Partial<_128.InflationDistribution>): _128.InflationDistribution;
                fromAmino(object: _128.InflationDistributionAmino): _128.InflationDistribution;
                toAmino(message: _128.InflationDistribution): _128.InflationDistributionAmino;
                fromAminoMsg(object: _128.InflationDistributionAminoMsg): _128.InflationDistribution;
                fromProtoMsg(message: _128.InflationDistributionProtoMsg): _128.InflationDistribution;
                toProto(message: _128.InflationDistribution): Uint8Array;
                toProtoMsg(message: _128.InflationDistribution): _128.InflationDistributionProtoMsg;
            };
            ExponentialCalculation: {
                typeUrl: string;
                encode(message: _128.ExponentialCalculation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ExponentialCalculation;
                fromJSON(object: any): _128.ExponentialCalculation;
                toJSON(message: _128.ExponentialCalculation): unknown;
                fromPartial(object: Partial<_128.ExponentialCalculation>): _128.ExponentialCalculation;
                fromAmino(object: _128.ExponentialCalculationAmino): _128.ExponentialCalculation;
                toAmino(message: _128.ExponentialCalculation): _128.ExponentialCalculationAmino;
                fromAminoMsg(object: _128.ExponentialCalculationAminoMsg): _128.ExponentialCalculation;
                fromProtoMsg(message: _128.ExponentialCalculationProtoMsg): _128.ExponentialCalculation;
                toProto(message: _128.ExponentialCalculation): Uint8Array;
                toProtoMsg(message: _128.ExponentialCalculation): _128.ExponentialCalculationProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _127.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.GenesisState;
                fromJSON(object: any): _127.GenesisState;
                toJSON(message: _127.GenesisState): unknown;
                fromPartial(object: Partial<_127.GenesisState>): _127.GenesisState;
                fromAmino(object: _127.GenesisStateAmino): _127.GenesisState;
                toAmino(message: _127.GenesisState): _127.GenesisStateAmino;
                fromAminoMsg(object: _127.GenesisStateAminoMsg): _127.GenesisState;
                fromProtoMsg(message: _127.GenesisStateProtoMsg): _127.GenesisState;
                toProto(message: _127.GenesisState): Uint8Array;
                toProtoMsg(message: _127.GenesisState): _127.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _127.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Params;
                fromJSON(object: any): _127.Params;
                toJSON(message: _127.Params): unknown;
                fromPartial(object: Partial<_127.Params>): _127.Params;
                fromAmino(object: _127.ParamsAmino): _127.Params;
                toAmino(message: _127.Params): _127.ParamsAmino;
                fromAminoMsg(object: _127.ParamsAminoMsg): _127.Params;
                fromProtoMsg(message: _127.ParamsProtoMsg): _127.Params;
                toProto(message: _127.Params): Uint8Array;
                toProtoMsg(message: _127.Params): _127.ParamsProtoMsg;
            };
        };
    }
    namespace revenue {
        const v1: {
            MsgClientImpl: typeof _311.MsgClientImpl;
            QueryClientImpl: typeof _307.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                revenues(request?: _133.QueryRevenuesRequest): Promise<_133.QueryRevenuesResponse>;
                revenue(request: _133.QueryRevenueRequest): Promise<_133.QueryRevenueResponse>;
                params(request?: _133.QueryParamsRequest): Promise<_133.QueryParamsResponse>;
                deployerRevenues(request: _133.QueryDeployerRevenuesRequest): Promise<_133.QueryDeployerRevenuesResponse>;
                withdrawerRevenues(request: _133.QueryWithdrawerRevenuesRequest): Promise<_133.QueryWithdrawerRevenuesResponse>;
            };
            LCDQueryClient: typeof _302.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerRevenue(value: _135.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRevenue(value: _135.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelRevenue(value: _135.MsgCancelRevenue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _135.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerRevenue(value: _135.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: _135.MsgRegisterRevenue;
                    };
                    updateRevenue(value: _135.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: _135.MsgUpdateRevenue;
                    };
                    cancelRevenue(value: _135.MsgCancelRevenue): {
                        typeUrl: string;
                        value: _135.MsgCancelRevenue;
                    };
                    updateParams(value: _135.MsgUpdateParams): {
                        typeUrl: string;
                        value: _135.MsgUpdateParams;
                    };
                };
                toJSON: {
                    registerRevenue(value: _135.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateRevenue(value: _135.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelRevenue(value: _135.MsgCancelRevenue): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _135.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerRevenue(value: any): {
                        typeUrl: string;
                        value: _135.MsgRegisterRevenue;
                    };
                    updateRevenue(value: any): {
                        typeUrl: string;
                        value: _135.MsgUpdateRevenue;
                    };
                    cancelRevenue(value: any): {
                        typeUrl: string;
                        value: _135.MsgCancelRevenue;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _135.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    registerRevenue(value: _135.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: _135.MsgRegisterRevenue;
                    };
                    updateRevenue(value: _135.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: _135.MsgUpdateRevenue;
                    };
                    cancelRevenue(value: _135.MsgCancelRevenue): {
                        typeUrl: string;
                        value: _135.MsgCancelRevenue;
                    };
                    updateParams(value: _135.MsgUpdateParams): {
                        typeUrl: string;
                        value: _135.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.revenue.v1.MsgRegisterRevenue": {
                    aminoType: string;
                    toAmino: (message: _135.MsgRegisterRevenue) => _135.MsgRegisterRevenueAmino;
                    fromAmino: (object: _135.MsgRegisterRevenueAmino) => _135.MsgRegisterRevenue;
                };
                "/evmos.revenue.v1.MsgUpdateRevenue": {
                    aminoType: string;
                    toAmino: (message: _135.MsgUpdateRevenue) => _135.MsgUpdateRevenueAmino;
                    fromAmino: (object: _135.MsgUpdateRevenueAmino) => _135.MsgUpdateRevenue;
                };
                "/evmos.revenue.v1.MsgCancelRevenue": {
                    aminoType: string;
                    toAmino: (message: _135.MsgCancelRevenue) => _135.MsgCancelRevenueAmino;
                    fromAmino: (object: _135.MsgCancelRevenueAmino) => _135.MsgCancelRevenue;
                };
                "/evmos.revenue.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _135.MsgUpdateParams) => _135.MsgUpdateParamsAmino;
                    fromAmino: (object: _135.MsgUpdateParamsAmino) => _135.MsgUpdateParams;
                };
            };
            MsgRegisterRevenue: {
                typeUrl: string;
                encode(message: _135.MsgRegisterRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgRegisterRevenue;
                fromJSON(object: any): _135.MsgRegisterRevenue;
                toJSON(message: _135.MsgRegisterRevenue): unknown;
                fromPartial(object: Partial<_135.MsgRegisterRevenue>): _135.MsgRegisterRevenue;
                fromAmino(object: _135.MsgRegisterRevenueAmino): _135.MsgRegisterRevenue;
                toAmino(message: _135.MsgRegisterRevenue): _135.MsgRegisterRevenueAmino;
                fromAminoMsg(object: _135.MsgRegisterRevenueAminoMsg): _135.MsgRegisterRevenue;
                fromProtoMsg(message: _135.MsgRegisterRevenueProtoMsg): _135.MsgRegisterRevenue;
                toProto(message: _135.MsgRegisterRevenue): Uint8Array;
                toProtoMsg(message: _135.MsgRegisterRevenue): _135.MsgRegisterRevenueProtoMsg;
            };
            MsgRegisterRevenueResponse: {
                typeUrl: string;
                encode(_: _135.MsgRegisterRevenueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgRegisterRevenueResponse;
                fromJSON(_: any): _135.MsgRegisterRevenueResponse;
                toJSON(_: _135.MsgRegisterRevenueResponse): unknown;
                fromPartial(_: Partial<_135.MsgRegisterRevenueResponse>): _135.MsgRegisterRevenueResponse;
                fromAmino(_: _135.MsgRegisterRevenueResponseAmino): _135.MsgRegisterRevenueResponse;
                toAmino(_: _135.MsgRegisterRevenueResponse): _135.MsgRegisterRevenueResponseAmino;
                fromAminoMsg(object: _135.MsgRegisterRevenueResponseAminoMsg): _135.MsgRegisterRevenueResponse;
                fromProtoMsg(message: _135.MsgRegisterRevenueResponseProtoMsg): _135.MsgRegisterRevenueResponse;
                toProto(message: _135.MsgRegisterRevenueResponse): Uint8Array;
                toProtoMsg(message: _135.MsgRegisterRevenueResponse): _135.MsgRegisterRevenueResponseProtoMsg;
            };
            MsgUpdateRevenue: {
                typeUrl: string;
                encode(message: _135.MsgUpdateRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgUpdateRevenue;
                fromJSON(object: any): _135.MsgUpdateRevenue;
                toJSON(message: _135.MsgUpdateRevenue): unknown;
                fromPartial(object: Partial<_135.MsgUpdateRevenue>): _135.MsgUpdateRevenue;
                fromAmino(object: _135.MsgUpdateRevenueAmino): _135.MsgUpdateRevenue;
                toAmino(message: _135.MsgUpdateRevenue): _135.MsgUpdateRevenueAmino;
                fromAminoMsg(object: _135.MsgUpdateRevenueAminoMsg): _135.MsgUpdateRevenue;
                fromProtoMsg(message: _135.MsgUpdateRevenueProtoMsg): _135.MsgUpdateRevenue;
                toProto(message: _135.MsgUpdateRevenue): Uint8Array;
                toProtoMsg(message: _135.MsgUpdateRevenue): _135.MsgUpdateRevenueProtoMsg;
            };
            MsgUpdateRevenueResponse: {
                typeUrl: string;
                encode(_: _135.MsgUpdateRevenueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgUpdateRevenueResponse;
                fromJSON(_: any): _135.MsgUpdateRevenueResponse;
                toJSON(_: _135.MsgUpdateRevenueResponse): unknown;
                fromPartial(_: Partial<_135.MsgUpdateRevenueResponse>): _135.MsgUpdateRevenueResponse;
                fromAmino(_: _135.MsgUpdateRevenueResponseAmino): _135.MsgUpdateRevenueResponse;
                toAmino(_: _135.MsgUpdateRevenueResponse): _135.MsgUpdateRevenueResponseAmino;
                fromAminoMsg(object: _135.MsgUpdateRevenueResponseAminoMsg): _135.MsgUpdateRevenueResponse;
                fromProtoMsg(message: _135.MsgUpdateRevenueResponseProtoMsg): _135.MsgUpdateRevenueResponse;
                toProto(message: _135.MsgUpdateRevenueResponse): Uint8Array;
                toProtoMsg(message: _135.MsgUpdateRevenueResponse): _135.MsgUpdateRevenueResponseProtoMsg;
            };
            MsgCancelRevenue: {
                typeUrl: string;
                encode(message: _135.MsgCancelRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgCancelRevenue;
                fromJSON(object: any): _135.MsgCancelRevenue;
                toJSON(message: _135.MsgCancelRevenue): unknown;
                fromPartial(object: Partial<_135.MsgCancelRevenue>): _135.MsgCancelRevenue;
                fromAmino(object: _135.MsgCancelRevenueAmino): _135.MsgCancelRevenue;
                toAmino(message: _135.MsgCancelRevenue): _135.MsgCancelRevenueAmino;
                fromAminoMsg(object: _135.MsgCancelRevenueAminoMsg): _135.MsgCancelRevenue;
                fromProtoMsg(message: _135.MsgCancelRevenueProtoMsg): _135.MsgCancelRevenue;
                toProto(message: _135.MsgCancelRevenue): Uint8Array;
                toProtoMsg(message: _135.MsgCancelRevenue): _135.MsgCancelRevenueProtoMsg;
            };
            MsgCancelRevenueResponse: {
                typeUrl: string;
                encode(_: _135.MsgCancelRevenueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgCancelRevenueResponse;
                fromJSON(_: any): _135.MsgCancelRevenueResponse;
                toJSON(_: _135.MsgCancelRevenueResponse): unknown;
                fromPartial(_: Partial<_135.MsgCancelRevenueResponse>): _135.MsgCancelRevenueResponse;
                fromAmino(_: _135.MsgCancelRevenueResponseAmino): _135.MsgCancelRevenueResponse;
                toAmino(_: _135.MsgCancelRevenueResponse): _135.MsgCancelRevenueResponseAmino;
                fromAminoMsg(object: _135.MsgCancelRevenueResponseAminoMsg): _135.MsgCancelRevenueResponse;
                fromProtoMsg(message: _135.MsgCancelRevenueResponseProtoMsg): _135.MsgCancelRevenueResponse;
                toProto(message: _135.MsgCancelRevenueResponse): Uint8Array;
                toProtoMsg(message: _135.MsgCancelRevenueResponse): _135.MsgCancelRevenueResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _135.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgUpdateParams;
                fromJSON(object: any): _135.MsgUpdateParams;
                toJSON(message: _135.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_135.MsgUpdateParams>): _135.MsgUpdateParams;
                fromAmino(object: _135.MsgUpdateParamsAmino): _135.MsgUpdateParams;
                toAmino(message: _135.MsgUpdateParams): _135.MsgUpdateParamsAmino;
                fromAminoMsg(object: _135.MsgUpdateParamsAminoMsg): _135.MsgUpdateParams;
                fromProtoMsg(message: _135.MsgUpdateParamsProtoMsg): _135.MsgUpdateParams;
                toProto(message: _135.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _135.MsgUpdateParams): _135.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _135.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.MsgUpdateParamsResponse;
                fromJSON(_: any): _135.MsgUpdateParamsResponse;
                toJSON(_: _135.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_135.MsgUpdateParamsResponse>): _135.MsgUpdateParamsResponse;
                fromAmino(_: _135.MsgUpdateParamsResponseAmino): _135.MsgUpdateParamsResponse;
                toAmino(_: _135.MsgUpdateParamsResponse): _135.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _135.MsgUpdateParamsResponseAminoMsg): _135.MsgUpdateParamsResponse;
                fromProtoMsg(message: _135.MsgUpdateParamsResponseProtoMsg): _135.MsgUpdateParamsResponse;
                toProto(message: _135.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _135.MsgUpdateParamsResponse): _135.MsgUpdateParamsResponseProtoMsg;
            };
            Revenue: {
                typeUrl: string;
                encode(message: _134.Revenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Revenue;
                fromJSON(object: any): _134.Revenue;
                toJSON(message: _134.Revenue): unknown;
                fromPartial(object: Partial<_134.Revenue>): _134.Revenue;
                fromAmino(object: _134.RevenueAmino): _134.Revenue;
                toAmino(message: _134.Revenue): _134.RevenueAmino;
                fromAminoMsg(object: _134.RevenueAminoMsg): _134.Revenue;
                fromProtoMsg(message: _134.RevenueProtoMsg): _134.Revenue;
                toProto(message: _134.Revenue): Uint8Array;
                toProtoMsg(message: _134.Revenue): _134.RevenueProtoMsg;
            };
            QueryRevenuesRequest: {
                typeUrl: string;
                encode(message: _133.QueryRevenuesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryRevenuesRequest;
                fromJSON(object: any): _133.QueryRevenuesRequest;
                toJSON(message: _133.QueryRevenuesRequest): unknown;
                fromPartial(object: Partial<_133.QueryRevenuesRequest>): _133.QueryRevenuesRequest;
                fromAmino(object: _133.QueryRevenuesRequestAmino): _133.QueryRevenuesRequest;
                toAmino(message: _133.QueryRevenuesRequest): _133.QueryRevenuesRequestAmino;
                fromAminoMsg(object: _133.QueryRevenuesRequestAminoMsg): _133.QueryRevenuesRequest;
                fromProtoMsg(message: _133.QueryRevenuesRequestProtoMsg): _133.QueryRevenuesRequest;
                toProto(message: _133.QueryRevenuesRequest): Uint8Array;
                toProtoMsg(message: _133.QueryRevenuesRequest): _133.QueryRevenuesRequestProtoMsg;
            };
            QueryRevenuesResponse: {
                typeUrl: string;
                encode(message: _133.QueryRevenuesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryRevenuesResponse;
                fromJSON(object: any): _133.QueryRevenuesResponse;
                toJSON(message: _133.QueryRevenuesResponse): unknown;
                fromPartial(object: Partial<_133.QueryRevenuesResponse>): _133.QueryRevenuesResponse;
                fromAmino(object: _133.QueryRevenuesResponseAmino): _133.QueryRevenuesResponse;
                toAmino(message: _133.QueryRevenuesResponse): _133.QueryRevenuesResponseAmino;
                fromAminoMsg(object: _133.QueryRevenuesResponseAminoMsg): _133.QueryRevenuesResponse;
                fromProtoMsg(message: _133.QueryRevenuesResponseProtoMsg): _133.QueryRevenuesResponse;
                toProto(message: _133.QueryRevenuesResponse): Uint8Array;
                toProtoMsg(message: _133.QueryRevenuesResponse): _133.QueryRevenuesResponseProtoMsg;
            };
            QueryRevenueRequest: {
                typeUrl: string;
                encode(message: _133.QueryRevenueRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryRevenueRequest;
                fromJSON(object: any): _133.QueryRevenueRequest;
                toJSON(message: _133.QueryRevenueRequest): unknown;
                fromPartial(object: Partial<_133.QueryRevenueRequest>): _133.QueryRevenueRequest;
                fromAmino(object: _133.QueryRevenueRequestAmino): _133.QueryRevenueRequest;
                toAmino(message: _133.QueryRevenueRequest): _133.QueryRevenueRequestAmino;
                fromAminoMsg(object: _133.QueryRevenueRequestAminoMsg): _133.QueryRevenueRequest;
                fromProtoMsg(message: _133.QueryRevenueRequestProtoMsg): _133.QueryRevenueRequest;
                toProto(message: _133.QueryRevenueRequest): Uint8Array;
                toProtoMsg(message: _133.QueryRevenueRequest): _133.QueryRevenueRequestProtoMsg;
            };
            QueryRevenueResponse: {
                typeUrl: string;
                encode(message: _133.QueryRevenueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryRevenueResponse;
                fromJSON(object: any): _133.QueryRevenueResponse;
                toJSON(message: _133.QueryRevenueResponse): unknown;
                fromPartial(object: Partial<_133.QueryRevenueResponse>): _133.QueryRevenueResponse;
                fromAmino(object: _133.QueryRevenueResponseAmino): _133.QueryRevenueResponse;
                toAmino(message: _133.QueryRevenueResponse): _133.QueryRevenueResponseAmino;
                fromAminoMsg(object: _133.QueryRevenueResponseAminoMsg): _133.QueryRevenueResponse;
                fromProtoMsg(message: _133.QueryRevenueResponseProtoMsg): _133.QueryRevenueResponse;
                toProto(message: _133.QueryRevenueResponse): Uint8Array;
                toProtoMsg(message: _133.QueryRevenueResponse): _133.QueryRevenueResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _133.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryParamsRequest;
                fromJSON(_: any): _133.QueryParamsRequest;
                toJSON(_: _133.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_133.QueryParamsRequest>): _133.QueryParamsRequest;
                fromAmino(_: _133.QueryParamsRequestAmino): _133.QueryParamsRequest;
                toAmino(_: _133.QueryParamsRequest): _133.QueryParamsRequestAmino;
                fromAminoMsg(object: _133.QueryParamsRequestAminoMsg): _133.QueryParamsRequest;
                fromProtoMsg(message: _133.QueryParamsRequestProtoMsg): _133.QueryParamsRequest;
                toProto(message: _133.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _133.QueryParamsRequest): _133.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _133.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryParamsResponse;
                fromJSON(object: any): _133.QueryParamsResponse;
                toJSON(message: _133.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_133.QueryParamsResponse>): _133.QueryParamsResponse;
                fromAmino(object: _133.QueryParamsResponseAmino): _133.QueryParamsResponse;
                toAmino(message: _133.QueryParamsResponse): _133.QueryParamsResponseAmino;
                fromAminoMsg(object: _133.QueryParamsResponseAminoMsg): _133.QueryParamsResponse;
                fromProtoMsg(message: _133.QueryParamsResponseProtoMsg): _133.QueryParamsResponse;
                toProto(message: _133.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _133.QueryParamsResponse): _133.QueryParamsResponseProtoMsg;
            };
            QueryDeployerRevenuesRequest: {
                typeUrl: string;
                encode(message: _133.QueryDeployerRevenuesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryDeployerRevenuesRequest;
                fromJSON(object: any): _133.QueryDeployerRevenuesRequest;
                toJSON(message: _133.QueryDeployerRevenuesRequest): unknown;
                fromPartial(object: Partial<_133.QueryDeployerRevenuesRequest>): _133.QueryDeployerRevenuesRequest;
                fromAmino(object: _133.QueryDeployerRevenuesRequestAmino): _133.QueryDeployerRevenuesRequest;
                toAmino(message: _133.QueryDeployerRevenuesRequest): _133.QueryDeployerRevenuesRequestAmino;
                fromAminoMsg(object: _133.QueryDeployerRevenuesRequestAminoMsg): _133.QueryDeployerRevenuesRequest;
                fromProtoMsg(message: _133.QueryDeployerRevenuesRequestProtoMsg): _133.QueryDeployerRevenuesRequest;
                toProto(message: _133.QueryDeployerRevenuesRequest): Uint8Array;
                toProtoMsg(message: _133.QueryDeployerRevenuesRequest): _133.QueryDeployerRevenuesRequestProtoMsg;
            };
            QueryDeployerRevenuesResponse: {
                typeUrl: string;
                encode(message: _133.QueryDeployerRevenuesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryDeployerRevenuesResponse;
                fromJSON(object: any): _133.QueryDeployerRevenuesResponse;
                toJSON(message: _133.QueryDeployerRevenuesResponse): unknown;
                fromPartial(object: Partial<_133.QueryDeployerRevenuesResponse>): _133.QueryDeployerRevenuesResponse;
                fromAmino(object: _133.QueryDeployerRevenuesResponseAmino): _133.QueryDeployerRevenuesResponse;
                toAmino(message: _133.QueryDeployerRevenuesResponse): _133.QueryDeployerRevenuesResponseAmino;
                fromAminoMsg(object: _133.QueryDeployerRevenuesResponseAminoMsg): _133.QueryDeployerRevenuesResponse;
                fromProtoMsg(message: _133.QueryDeployerRevenuesResponseProtoMsg): _133.QueryDeployerRevenuesResponse;
                toProto(message: _133.QueryDeployerRevenuesResponse): Uint8Array;
                toProtoMsg(message: _133.QueryDeployerRevenuesResponse): _133.QueryDeployerRevenuesResponseProtoMsg;
            };
            QueryWithdrawerRevenuesRequest: {
                typeUrl: string;
                encode(message: _133.QueryWithdrawerRevenuesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryWithdrawerRevenuesRequest;
                fromJSON(object: any): _133.QueryWithdrawerRevenuesRequest;
                toJSON(message: _133.QueryWithdrawerRevenuesRequest): unknown;
                fromPartial(object: Partial<_133.QueryWithdrawerRevenuesRequest>): _133.QueryWithdrawerRevenuesRequest;
                fromAmino(object: _133.QueryWithdrawerRevenuesRequestAmino): _133.QueryWithdrawerRevenuesRequest;
                toAmino(message: _133.QueryWithdrawerRevenuesRequest): _133.QueryWithdrawerRevenuesRequestAmino;
                fromAminoMsg(object: _133.QueryWithdrawerRevenuesRequestAminoMsg): _133.QueryWithdrawerRevenuesRequest;
                fromProtoMsg(message: _133.QueryWithdrawerRevenuesRequestProtoMsg): _133.QueryWithdrawerRevenuesRequest;
                toProto(message: _133.QueryWithdrawerRevenuesRequest): Uint8Array;
                toProtoMsg(message: _133.QueryWithdrawerRevenuesRequest): _133.QueryWithdrawerRevenuesRequestProtoMsg;
            };
            QueryWithdrawerRevenuesResponse: {
                typeUrl: string;
                encode(message: _133.QueryWithdrawerRevenuesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryWithdrawerRevenuesResponse;
                fromJSON(object: any): _133.QueryWithdrawerRevenuesResponse;
                toJSON(message: _133.QueryWithdrawerRevenuesResponse): unknown;
                fromPartial(object: Partial<_133.QueryWithdrawerRevenuesResponse>): _133.QueryWithdrawerRevenuesResponse;
                fromAmino(object: _133.QueryWithdrawerRevenuesResponseAmino): _133.QueryWithdrawerRevenuesResponse;
                toAmino(message: _133.QueryWithdrawerRevenuesResponse): _133.QueryWithdrawerRevenuesResponseAmino;
                fromAminoMsg(object: _133.QueryWithdrawerRevenuesResponseAminoMsg): _133.QueryWithdrawerRevenuesResponse;
                fromProtoMsg(message: _133.QueryWithdrawerRevenuesResponseProtoMsg): _133.QueryWithdrawerRevenuesResponse;
                toProto(message: _133.QueryWithdrawerRevenuesResponse): Uint8Array;
                toProtoMsg(message: _133.QueryWithdrawerRevenuesResponse): _133.QueryWithdrawerRevenuesResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _132.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.GenesisState;
                fromJSON(object: any): _132.GenesisState;
                toJSON(message: _132.GenesisState): unknown;
                fromPartial(object: Partial<_132.GenesisState>): _132.GenesisState;
                fromAmino(object: _132.GenesisStateAmino): _132.GenesisState;
                toAmino(message: _132.GenesisState): _132.GenesisStateAmino;
                fromAminoMsg(object: _132.GenesisStateAminoMsg): _132.GenesisState;
                fromProtoMsg(message: _132.GenesisStateProtoMsg): _132.GenesisState;
                toProto(message: _132.GenesisState): Uint8Array;
                toProtoMsg(message: _132.GenesisState): _132.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _132.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Params;
                fromJSON(object: any): _132.Params;
                toJSON(message: _132.Params): unknown;
                fromPartial(object: Partial<_132.Params>): _132.Params;
                fromAmino(object: _132.ParamsAmino): _132.Params;
                toAmino(message: _132.Params): _132.ParamsAmino;
                fromAminoMsg(object: _132.ParamsAminoMsg): _132.Params;
                fromProtoMsg(message: _132.ParamsProtoMsg): _132.Params;
                toProto(message: _132.Params): Uint8Array;
                toProtoMsg(message: _132.Params): _132.ParamsProtoMsg;
            };
            EventRegisterRevenue: {
                typeUrl: string;
                encode(message: _131.EventRegisterRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.EventRegisterRevenue;
                fromJSON(object: any): _131.EventRegisterRevenue;
                toJSON(message: _131.EventRegisterRevenue): unknown;
                fromPartial(object: Partial<_131.EventRegisterRevenue>): _131.EventRegisterRevenue;
                fromAmino(object: _131.EventRegisterRevenueAmino): _131.EventRegisterRevenue;
                toAmino(message: _131.EventRegisterRevenue): _131.EventRegisterRevenueAmino;
                fromAminoMsg(object: _131.EventRegisterRevenueAminoMsg): _131.EventRegisterRevenue;
                fromProtoMsg(message: _131.EventRegisterRevenueProtoMsg): _131.EventRegisterRevenue;
                toProto(message: _131.EventRegisterRevenue): Uint8Array;
                toProtoMsg(message: _131.EventRegisterRevenue): _131.EventRegisterRevenueProtoMsg;
            };
            EventUpdateRevenue: {
                typeUrl: string;
                encode(message: _131.EventUpdateRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.EventUpdateRevenue;
                fromJSON(object: any): _131.EventUpdateRevenue;
                toJSON(message: _131.EventUpdateRevenue): unknown;
                fromPartial(object: Partial<_131.EventUpdateRevenue>): _131.EventUpdateRevenue;
                fromAmino(object: _131.EventUpdateRevenueAmino): _131.EventUpdateRevenue;
                toAmino(message: _131.EventUpdateRevenue): _131.EventUpdateRevenueAmino;
                fromAminoMsg(object: _131.EventUpdateRevenueAminoMsg): _131.EventUpdateRevenue;
                fromProtoMsg(message: _131.EventUpdateRevenueProtoMsg): _131.EventUpdateRevenue;
                toProto(message: _131.EventUpdateRevenue): Uint8Array;
                toProtoMsg(message: _131.EventUpdateRevenue): _131.EventUpdateRevenueProtoMsg;
            };
            EventCancelRevenue: {
                typeUrl: string;
                encode(message: _131.EventCancelRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.EventCancelRevenue;
                fromJSON(object: any): _131.EventCancelRevenue;
                toJSON(message: _131.EventCancelRevenue): unknown;
                fromPartial(object: Partial<_131.EventCancelRevenue>): _131.EventCancelRevenue;
                fromAmino(object: _131.EventCancelRevenueAmino): _131.EventCancelRevenue;
                toAmino(message: _131.EventCancelRevenue): _131.EventCancelRevenueAmino;
                fromAminoMsg(object: _131.EventCancelRevenueAminoMsg): _131.EventCancelRevenue;
                fromProtoMsg(message: _131.EventCancelRevenueProtoMsg): _131.EventCancelRevenue;
                toProto(message: _131.EventCancelRevenue): Uint8Array;
                toProtoMsg(message: _131.EventCancelRevenue): _131.EventCancelRevenueProtoMsg;
            };
            EventDistributeRevenue: {
                typeUrl: string;
                encode(message: _131.EventDistributeRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.EventDistributeRevenue;
                fromJSON(object: any): _131.EventDistributeRevenue;
                toJSON(message: _131.EventDistributeRevenue): unknown;
                fromPartial(object: Partial<_131.EventDistributeRevenue>): _131.EventDistributeRevenue;
                fromAmino(object: _131.EventDistributeRevenueAmino): _131.EventDistributeRevenue;
                toAmino(message: _131.EventDistributeRevenue): _131.EventDistributeRevenueAmino;
                fromAminoMsg(object: _131.EventDistributeRevenueAminoMsg): _131.EventDistributeRevenue;
                fromProtoMsg(message: _131.EventDistributeRevenueProtoMsg): _131.EventDistributeRevenue;
                toProto(message: _131.EventDistributeRevenue): Uint8Array;
                toProtoMsg(message: _131.EventDistributeRevenue): _131.EventDistributeRevenueProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1: {
            ClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _136.ClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ClawbackVestingAccount;
                fromJSON(object: any): _136.ClawbackVestingAccount;
                toJSON(message: _136.ClawbackVestingAccount): unknown;
                fromPartial(object: Partial<_136.ClawbackVestingAccount>): _136.ClawbackVestingAccount;
                fromAmino(object: _136.ClawbackVestingAccountAmino): _136.ClawbackVestingAccount;
                toAmino(message: _136.ClawbackVestingAccount): _136.ClawbackVestingAccountAmino;
                fromAminoMsg(object: _136.ClawbackVestingAccountAminoMsg): _136.ClawbackVestingAccount;
                fromProtoMsg(message: _136.ClawbackVestingAccountProtoMsg): _136.ClawbackVestingAccount;
                toProto(message: _136.ClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _136.ClawbackVestingAccount): _136.ClawbackVestingAccountProtoMsg;
            };
        };
        const v2: {
            MsgClientImpl: typeof _312.MsgClientImpl;
            QueryClientImpl: typeof _308.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balances(request: _138.QueryBalancesRequest): Promise<_138.QueryBalancesResponse>;
            };
            LCDQueryClient: typeof _303.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClawbackVestingAccount(value: _139.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundVestingAccount(value: _139.MsgFundVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _139.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateVestingFunder(value: _139.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertVestingAccount(value: _139.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClawbackVestingAccount(value: _139.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _139.MsgCreateClawbackVestingAccount;
                    };
                    fundVestingAccount(value: _139.MsgFundVestingAccount): {
                        typeUrl: string;
                        value: _139.MsgFundVestingAccount;
                    };
                    clawback(value: _139.MsgClawback): {
                        typeUrl: string;
                        value: _139.MsgClawback;
                    };
                    updateVestingFunder(value: _139.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: _139.MsgUpdateVestingFunder;
                    };
                    convertVestingAccount(value: _139.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: _139.MsgConvertVestingAccount;
                    };
                };
                toJSON: {
                    createClawbackVestingAccount(value: _139.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundVestingAccount(value: _139.MsgFundVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clawback(value: _139.MsgClawback): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateVestingFunder(value: _139.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: unknown;
                    };
                    convertVestingAccount(value: _139.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClawbackVestingAccount(value: any): {
                        typeUrl: string;
                        value: _139.MsgCreateClawbackVestingAccount;
                    };
                    fundVestingAccount(value: any): {
                        typeUrl: string;
                        value: _139.MsgFundVestingAccount;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _139.MsgClawback;
                    };
                    updateVestingFunder(value: any): {
                        typeUrl: string;
                        value: _139.MsgUpdateVestingFunder;
                    };
                    convertVestingAccount(value: any): {
                        typeUrl: string;
                        value: _139.MsgConvertVestingAccount;
                    };
                };
                fromPartial: {
                    createClawbackVestingAccount(value: _139.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _139.MsgCreateClawbackVestingAccount;
                    };
                    fundVestingAccount(value: _139.MsgFundVestingAccount): {
                        typeUrl: string;
                        value: _139.MsgFundVestingAccount;
                    };
                    clawback(value: _139.MsgClawback): {
                        typeUrl: string;
                        value: _139.MsgClawback;
                    };
                    updateVestingFunder(value: _139.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: _139.MsgUpdateVestingFunder;
                    };
                    convertVestingAccount(value: _139.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: _139.MsgConvertVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/evmos.vesting.v2.MsgCreateClawbackVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _139.MsgCreateClawbackVestingAccount) => _139.MsgCreateClawbackVestingAccountAmino;
                    fromAmino: (object: _139.MsgCreateClawbackVestingAccountAmino) => _139.MsgCreateClawbackVestingAccount;
                };
                "/evmos.vesting.v2.MsgFundVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _139.MsgFundVestingAccount) => _139.MsgFundVestingAccountAmino;
                    fromAmino: (object: _139.MsgFundVestingAccountAmino) => _139.MsgFundVestingAccount;
                };
                "/evmos.vesting.v2.MsgClawback": {
                    aminoType: string;
                    toAmino: (message: _139.MsgClawback) => _139.MsgClawbackAmino;
                    fromAmino: (object: _139.MsgClawbackAmino) => _139.MsgClawback;
                };
                "/evmos.vesting.v2.MsgUpdateVestingFunder": {
                    aminoType: string;
                    toAmino: (message: _139.MsgUpdateVestingFunder) => _139.MsgUpdateVestingFunderAmino;
                    fromAmino: (object: _139.MsgUpdateVestingFunderAmino) => _139.MsgUpdateVestingFunder;
                };
                "/evmos.vesting.v2.MsgConvertVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _139.MsgConvertVestingAccount) => _139.MsgConvertVestingAccountAmino;
                    fromAmino: (object: _139.MsgConvertVestingAccountAmino) => _139.MsgConvertVestingAccount;
                };
            };
            ClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _140.ClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.ClawbackVestingAccount;
                fromJSON(object: any): _140.ClawbackVestingAccount;
                toJSON(message: _140.ClawbackVestingAccount): unknown;
                fromPartial(object: Partial<_140.ClawbackVestingAccount>): _140.ClawbackVestingAccount;
                fromAmino(object: _140.ClawbackVestingAccountAmino): _140.ClawbackVestingAccount;
                toAmino(message: _140.ClawbackVestingAccount): _140.ClawbackVestingAccountAmino;
                fromAminoMsg(object: _140.ClawbackVestingAccountAminoMsg): _140.ClawbackVestingAccount;
                fromProtoMsg(message: _140.ClawbackVestingAccountProtoMsg): _140.ClawbackVestingAccount;
                toProto(message: _140.ClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _140.ClawbackVestingAccount): _140.ClawbackVestingAccountProtoMsg;
            };
            ClawbackProposal: {
                typeUrl: string;
                encode(message: _140.ClawbackProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.ClawbackProposal;
                fromJSON(object: any): _140.ClawbackProposal;
                toJSON(message: _140.ClawbackProposal): unknown;
                fromPartial(object: Partial<_140.ClawbackProposal>): _140.ClawbackProposal;
                fromAmino(object: _140.ClawbackProposalAmino): _140.ClawbackProposal;
                toAmino(message: _140.ClawbackProposal): _140.ClawbackProposalAmino;
                fromAminoMsg(object: _140.ClawbackProposalAminoMsg): _140.ClawbackProposal;
                fromProtoMsg(message: _140.ClawbackProposalProtoMsg): _140.ClawbackProposal;
                toProto(message: _140.ClawbackProposal): Uint8Array;
                toProtoMsg(message: _140.ClawbackProposal): _140.ClawbackProposalProtoMsg;
            };
            MsgCreateClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _139.MsgCreateClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgCreateClawbackVestingAccount;
                fromJSON(object: any): _139.MsgCreateClawbackVestingAccount;
                toJSON(message: _139.MsgCreateClawbackVestingAccount): unknown;
                fromPartial(object: Partial<_139.MsgCreateClawbackVestingAccount>): _139.MsgCreateClawbackVestingAccount;
                fromAmino(object: _139.MsgCreateClawbackVestingAccountAmino): _139.MsgCreateClawbackVestingAccount;
                toAmino(message: _139.MsgCreateClawbackVestingAccount): _139.MsgCreateClawbackVestingAccountAmino;
                fromAminoMsg(object: _139.MsgCreateClawbackVestingAccountAminoMsg): _139.MsgCreateClawbackVestingAccount;
                fromProtoMsg(message: _139.MsgCreateClawbackVestingAccountProtoMsg): _139.MsgCreateClawbackVestingAccount;
                toProto(message: _139.MsgCreateClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _139.MsgCreateClawbackVestingAccount): _139.MsgCreateClawbackVestingAccountProtoMsg;
            };
            MsgCreateClawbackVestingAccountResponse: {
                typeUrl: string;
                encode(_: _139.MsgCreateClawbackVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgCreateClawbackVestingAccountResponse;
                fromJSON(_: any): _139.MsgCreateClawbackVestingAccountResponse;
                toJSON(_: _139.MsgCreateClawbackVestingAccountResponse): unknown;
                fromPartial(_: Partial<_139.MsgCreateClawbackVestingAccountResponse>): _139.MsgCreateClawbackVestingAccountResponse;
                fromAmino(_: _139.MsgCreateClawbackVestingAccountResponseAmino): _139.MsgCreateClawbackVestingAccountResponse;
                toAmino(_: _139.MsgCreateClawbackVestingAccountResponse): _139.MsgCreateClawbackVestingAccountResponseAmino;
                fromAminoMsg(object: _139.MsgCreateClawbackVestingAccountResponseAminoMsg): _139.MsgCreateClawbackVestingAccountResponse;
                fromProtoMsg(message: _139.MsgCreateClawbackVestingAccountResponseProtoMsg): _139.MsgCreateClawbackVestingAccountResponse;
                toProto(message: _139.MsgCreateClawbackVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _139.MsgCreateClawbackVestingAccountResponse): _139.MsgCreateClawbackVestingAccountResponseProtoMsg;
            };
            MsgFundVestingAccount: {
                typeUrl: string;
                encode(message: _139.MsgFundVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgFundVestingAccount;
                fromJSON(object: any): _139.MsgFundVestingAccount;
                toJSON(message: _139.MsgFundVestingAccount): unknown;
                fromPartial(object: Partial<_139.MsgFundVestingAccount>): _139.MsgFundVestingAccount;
                fromAmino(object: _139.MsgFundVestingAccountAmino): _139.MsgFundVestingAccount;
                toAmino(message: _139.MsgFundVestingAccount): _139.MsgFundVestingAccountAmino;
                fromAminoMsg(object: _139.MsgFundVestingAccountAminoMsg): _139.MsgFundVestingAccount;
                fromProtoMsg(message: _139.MsgFundVestingAccountProtoMsg): _139.MsgFundVestingAccount;
                toProto(message: _139.MsgFundVestingAccount): Uint8Array;
                toProtoMsg(message: _139.MsgFundVestingAccount): _139.MsgFundVestingAccountProtoMsg;
            };
            MsgFundVestingAccountResponse: {
                typeUrl: string;
                encode(_: _139.MsgFundVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgFundVestingAccountResponse;
                fromJSON(_: any): _139.MsgFundVestingAccountResponse;
                toJSON(_: _139.MsgFundVestingAccountResponse): unknown;
                fromPartial(_: Partial<_139.MsgFundVestingAccountResponse>): _139.MsgFundVestingAccountResponse;
                fromAmino(_: _139.MsgFundVestingAccountResponseAmino): _139.MsgFundVestingAccountResponse;
                toAmino(_: _139.MsgFundVestingAccountResponse): _139.MsgFundVestingAccountResponseAmino;
                fromAminoMsg(object: _139.MsgFundVestingAccountResponseAminoMsg): _139.MsgFundVestingAccountResponse;
                fromProtoMsg(message: _139.MsgFundVestingAccountResponseProtoMsg): _139.MsgFundVestingAccountResponse;
                toProto(message: _139.MsgFundVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _139.MsgFundVestingAccountResponse): _139.MsgFundVestingAccountResponseProtoMsg;
            };
            MsgClawback: {
                typeUrl: string;
                encode(message: _139.MsgClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgClawback;
                fromJSON(object: any): _139.MsgClawback;
                toJSON(message: _139.MsgClawback): unknown;
                fromPartial(object: Partial<_139.MsgClawback>): _139.MsgClawback;
                fromAmino(object: _139.MsgClawbackAmino): _139.MsgClawback;
                toAmino(message: _139.MsgClawback): _139.MsgClawbackAmino;
                fromAminoMsg(object: _139.MsgClawbackAminoMsg): _139.MsgClawback;
                fromProtoMsg(message: _139.MsgClawbackProtoMsg): _139.MsgClawback;
                toProto(message: _139.MsgClawback): Uint8Array;
                toProtoMsg(message: _139.MsgClawback): _139.MsgClawbackProtoMsg;
            };
            MsgClawbackResponse: {
                typeUrl: string;
                encode(message: _139.MsgClawbackResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgClawbackResponse;
                fromJSON(object: any): _139.MsgClawbackResponse;
                toJSON(message: _139.MsgClawbackResponse): unknown;
                fromPartial(object: Partial<_139.MsgClawbackResponse>): _139.MsgClawbackResponse;
                fromAmino(object: _139.MsgClawbackResponseAmino): _139.MsgClawbackResponse;
                toAmino(message: _139.MsgClawbackResponse): _139.MsgClawbackResponseAmino;
                fromAminoMsg(object: _139.MsgClawbackResponseAminoMsg): _139.MsgClawbackResponse;
                fromProtoMsg(message: _139.MsgClawbackResponseProtoMsg): _139.MsgClawbackResponse;
                toProto(message: _139.MsgClawbackResponse): Uint8Array;
                toProtoMsg(message: _139.MsgClawbackResponse): _139.MsgClawbackResponseProtoMsg;
            };
            MsgUpdateVestingFunder: {
                typeUrl: string;
                encode(message: _139.MsgUpdateVestingFunder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgUpdateVestingFunder;
                fromJSON(object: any): _139.MsgUpdateVestingFunder;
                toJSON(message: _139.MsgUpdateVestingFunder): unknown;
                fromPartial(object: Partial<_139.MsgUpdateVestingFunder>): _139.MsgUpdateVestingFunder;
                fromAmino(object: _139.MsgUpdateVestingFunderAmino): _139.MsgUpdateVestingFunder;
                toAmino(message: _139.MsgUpdateVestingFunder): _139.MsgUpdateVestingFunderAmino;
                fromAminoMsg(object: _139.MsgUpdateVestingFunderAminoMsg): _139.MsgUpdateVestingFunder;
                fromProtoMsg(message: _139.MsgUpdateVestingFunderProtoMsg): _139.MsgUpdateVestingFunder;
                toProto(message: _139.MsgUpdateVestingFunder): Uint8Array;
                toProtoMsg(message: _139.MsgUpdateVestingFunder): _139.MsgUpdateVestingFunderProtoMsg;
            };
            MsgUpdateVestingFunderResponse: {
                typeUrl: string;
                encode(_: _139.MsgUpdateVestingFunderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgUpdateVestingFunderResponse;
                fromJSON(_: any): _139.MsgUpdateVestingFunderResponse;
                toJSON(_: _139.MsgUpdateVestingFunderResponse): unknown;
                fromPartial(_: Partial<_139.MsgUpdateVestingFunderResponse>): _139.MsgUpdateVestingFunderResponse;
                fromAmino(_: _139.MsgUpdateVestingFunderResponseAmino): _139.MsgUpdateVestingFunderResponse;
                toAmino(_: _139.MsgUpdateVestingFunderResponse): _139.MsgUpdateVestingFunderResponseAmino;
                fromAminoMsg(object: _139.MsgUpdateVestingFunderResponseAminoMsg): _139.MsgUpdateVestingFunderResponse;
                fromProtoMsg(message: _139.MsgUpdateVestingFunderResponseProtoMsg): _139.MsgUpdateVestingFunderResponse;
                toProto(message: _139.MsgUpdateVestingFunderResponse): Uint8Array;
                toProtoMsg(message: _139.MsgUpdateVestingFunderResponse): _139.MsgUpdateVestingFunderResponseProtoMsg;
            };
            MsgConvertVestingAccount: {
                typeUrl: string;
                encode(message: _139.MsgConvertVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgConvertVestingAccount;
                fromJSON(object: any): _139.MsgConvertVestingAccount;
                toJSON(message: _139.MsgConvertVestingAccount): unknown;
                fromPartial(object: Partial<_139.MsgConvertVestingAccount>): _139.MsgConvertVestingAccount;
                fromAmino(object: _139.MsgConvertVestingAccountAmino): _139.MsgConvertVestingAccount;
                toAmino(message: _139.MsgConvertVestingAccount): _139.MsgConvertVestingAccountAmino;
                fromAminoMsg(object: _139.MsgConvertVestingAccountAminoMsg): _139.MsgConvertVestingAccount;
                fromProtoMsg(message: _139.MsgConvertVestingAccountProtoMsg): _139.MsgConvertVestingAccount;
                toProto(message: _139.MsgConvertVestingAccount): Uint8Array;
                toProtoMsg(message: _139.MsgConvertVestingAccount): _139.MsgConvertVestingAccountProtoMsg;
            };
            MsgConvertVestingAccountResponse: {
                typeUrl: string;
                encode(_: _139.MsgConvertVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MsgConvertVestingAccountResponse;
                fromJSON(_: any): _139.MsgConvertVestingAccountResponse;
                toJSON(_: _139.MsgConvertVestingAccountResponse): unknown;
                fromPartial(_: Partial<_139.MsgConvertVestingAccountResponse>): _139.MsgConvertVestingAccountResponse;
                fromAmino(_: _139.MsgConvertVestingAccountResponseAmino): _139.MsgConvertVestingAccountResponse;
                toAmino(_: _139.MsgConvertVestingAccountResponse): _139.MsgConvertVestingAccountResponseAmino;
                fromAminoMsg(object: _139.MsgConvertVestingAccountResponseAminoMsg): _139.MsgConvertVestingAccountResponse;
                fromProtoMsg(message: _139.MsgConvertVestingAccountResponseProtoMsg): _139.MsgConvertVestingAccountResponse;
                toProto(message: _139.MsgConvertVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _139.MsgConvertVestingAccountResponse): _139.MsgConvertVestingAccountResponseProtoMsg;
            };
            QueryBalancesRequest: {
                typeUrl: string;
                encode(message: _138.QueryBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryBalancesRequest;
                fromJSON(object: any): _138.QueryBalancesRequest;
                toJSON(message: _138.QueryBalancesRequest): unknown;
                fromPartial(object: Partial<_138.QueryBalancesRequest>): _138.QueryBalancesRequest;
                fromAmino(object: _138.QueryBalancesRequestAmino): _138.QueryBalancesRequest;
                toAmino(message: _138.QueryBalancesRequest): _138.QueryBalancesRequestAmino;
                fromAminoMsg(object: _138.QueryBalancesRequestAminoMsg): _138.QueryBalancesRequest;
                fromProtoMsg(message: _138.QueryBalancesRequestProtoMsg): _138.QueryBalancesRequest;
                toProto(message: _138.QueryBalancesRequest): Uint8Array;
                toProtoMsg(message: _138.QueryBalancesRequest): _138.QueryBalancesRequestProtoMsg;
            };
            QueryBalancesResponse: {
                typeUrl: string;
                encode(message: _138.QueryBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.QueryBalancesResponse;
                fromJSON(object: any): _138.QueryBalancesResponse;
                toJSON(message: _138.QueryBalancesResponse): unknown;
                fromPartial(object: Partial<_138.QueryBalancesResponse>): _138.QueryBalancesResponse;
                fromAmino(object: _138.QueryBalancesResponseAmino): _138.QueryBalancesResponse;
                toAmino(message: _138.QueryBalancesResponse): _138.QueryBalancesResponseAmino;
                fromAminoMsg(object: _138.QueryBalancesResponseAminoMsg): _138.QueryBalancesResponse;
                fromProtoMsg(message: _138.QueryBalancesResponseProtoMsg): _138.QueryBalancesResponse;
                toProto(message: _138.QueryBalancesResponse): Uint8Array;
                toProtoMsg(message: _138.QueryBalancesResponse): _138.QueryBalancesResponseProtoMsg;
            };
            EventCreateClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _137.EventCreateClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.EventCreateClawbackVestingAccount;
                fromJSON(object: any): _137.EventCreateClawbackVestingAccount;
                toJSON(message: _137.EventCreateClawbackVestingAccount): unknown;
                fromPartial(object: Partial<_137.EventCreateClawbackVestingAccount>): _137.EventCreateClawbackVestingAccount;
                fromAmino(object: _137.EventCreateClawbackVestingAccountAmino): _137.EventCreateClawbackVestingAccount;
                toAmino(message: _137.EventCreateClawbackVestingAccount): _137.EventCreateClawbackVestingAccountAmino;
                fromAminoMsg(object: _137.EventCreateClawbackVestingAccountAminoMsg): _137.EventCreateClawbackVestingAccount;
                fromProtoMsg(message: _137.EventCreateClawbackVestingAccountProtoMsg): _137.EventCreateClawbackVestingAccount;
                toProto(message: _137.EventCreateClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _137.EventCreateClawbackVestingAccount): _137.EventCreateClawbackVestingAccountProtoMsg;
            };
            EventFundVestingAccount: {
                typeUrl: string;
                encode(message: _137.EventFundVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.EventFundVestingAccount;
                fromJSON(object: any): _137.EventFundVestingAccount;
                toJSON(message: _137.EventFundVestingAccount): unknown;
                fromPartial(object: Partial<_137.EventFundVestingAccount>): _137.EventFundVestingAccount;
                fromAmino(object: _137.EventFundVestingAccountAmino): _137.EventFundVestingAccount;
                toAmino(message: _137.EventFundVestingAccount): _137.EventFundVestingAccountAmino;
                fromAminoMsg(object: _137.EventFundVestingAccountAminoMsg): _137.EventFundVestingAccount;
                fromProtoMsg(message: _137.EventFundVestingAccountProtoMsg): _137.EventFundVestingAccount;
                toProto(message: _137.EventFundVestingAccount): Uint8Array;
                toProtoMsg(message: _137.EventFundVestingAccount): _137.EventFundVestingAccountProtoMsg;
            };
            EventClawback: {
                typeUrl: string;
                encode(message: _137.EventClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.EventClawback;
                fromJSON(object: any): _137.EventClawback;
                toJSON(message: _137.EventClawback): unknown;
                fromPartial(object: Partial<_137.EventClawback>): _137.EventClawback;
                fromAmino(object: _137.EventClawbackAmino): _137.EventClawback;
                toAmino(message: _137.EventClawback): _137.EventClawbackAmino;
                fromAminoMsg(object: _137.EventClawbackAminoMsg): _137.EventClawback;
                fromProtoMsg(message: _137.EventClawbackProtoMsg): _137.EventClawback;
                toProto(message: _137.EventClawback): Uint8Array;
                toProtoMsg(message: _137.EventClawback): _137.EventClawbackProtoMsg;
            };
            EventUpdateVestingFunder: {
                typeUrl: string;
                encode(message: _137.EventUpdateVestingFunder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.EventUpdateVestingFunder;
                fromJSON(object: any): _137.EventUpdateVestingFunder;
                toJSON(message: _137.EventUpdateVestingFunder): unknown;
                fromPartial(object: Partial<_137.EventUpdateVestingFunder>): _137.EventUpdateVestingFunder;
                fromAmino(object: _137.EventUpdateVestingFunderAmino): _137.EventUpdateVestingFunder;
                toAmino(message: _137.EventUpdateVestingFunder): _137.EventUpdateVestingFunderAmino;
                fromAminoMsg(object: _137.EventUpdateVestingFunderAminoMsg): _137.EventUpdateVestingFunder;
                fromProtoMsg(message: _137.EventUpdateVestingFunderProtoMsg): _137.EventUpdateVestingFunder;
                toProto(message: _137.EventUpdateVestingFunder): Uint8Array;
                toProtoMsg(message: _137.EventUpdateVestingFunder): _137.EventUpdateVestingFunderProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                accesscontrol_x: {
                    v1beta1: import("../cosmos/accesscontrol_x/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            evmos: {
                erc20: {
                    v1: _309.MsgClientImpl;
                };
                inflation: {
                    v1: _310.MsgClientImpl;
                };
                revenue: {
                    v1: _311.MsgClientImpl;
                };
                vesting: {
                    v2: _312.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                accesscontrol_x: {
                    v1beta1: {
                        params(request?: import("../cosmos/accesscontrol_x/query").QueryParamsRequest): Promise<import("../cosmos/accesscontrol_x/query").QueryParamsResponse>;
                        resourceDependencyMappingFromMessageKey(request: import("../cosmos/accesscontrol_x/query").ResourceDependencyMappingFromMessageKeyRequest): Promise<import("../cosmos/accesscontrol_x/query").ResourceDependencyMappingFromMessageKeyResponse>;
                        listResourceDependencyMapping(request?: import("../cosmos/accesscontrol_x/query").ListResourceDependencyMappingRequest): Promise<import("../cosmos/accesscontrol_x/query").ListResourceDependencyMappingResponse>;
                        wasmDependencyMapping(request: import("../cosmos/accesscontrol_x/query").WasmDependencyMappingRequest): Promise<import("../cosmos/accesscontrol_x/query").WasmDependencyMappingResponse>;
                        listWasmDependencyMapping(request?: import("../cosmos/accesscontrol_x/query").ListWasmDependencyMappingRequest): Promise<import("../cosmos/accesscontrol_x/query").ListWasmDependencyMappingResponse>;
                    };
                };
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        nextAccountNumber(request?: import("../cosmos/auth/v1beta1/query").QueryNextAccountNumberRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryNextAccountNumberResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
            evmos: {
                epochs: {
                    v1: {
                        epochInfos(request?: _119.QueryEpochsInfoRequest): Promise<_119.QueryEpochsInfoResponse>;
                        currentEpoch(request: _119.QueryCurrentEpochRequest): Promise<_119.QueryCurrentEpochResponse>;
                    };
                };
                erc20: {
                    v1: {
                        tokenPairs(request?: _123.QueryTokenPairsRequest): Promise<_123.QueryTokenPairsResponse>;
                        tokenPair(request: _123.QueryTokenPairRequest): Promise<_123.QueryTokenPairResponse>;
                        params(request?: _123.QueryParamsRequest): Promise<_123.QueryParamsResponse>;
                    };
                };
                inflation: {
                    v1: {
                        period(request?: _129.QueryPeriodRequest): Promise<_129.QueryPeriodResponse>;
                        epochMintProvision(request?: _129.QueryEpochMintProvisionRequest): Promise<_129.QueryEpochMintProvisionResponse>;
                        skippedEpochs(request?: _129.QuerySkippedEpochsRequest): Promise<_129.QuerySkippedEpochsResponse>;
                        circulatingSupply(request?: _129.QueryCirculatingSupplyRequest): Promise<_129.QueryCirculatingSupplyResponse>;
                        inflationRate(request?: _129.QueryInflationRateRequest): Promise<_129.QueryInflationRateResponse>;
                        params(request?: _129.QueryParamsRequest): Promise<_129.QueryParamsResponse>;
                    };
                };
                revenue: {
                    v1: {
                        revenues(request?: _133.QueryRevenuesRequest): Promise<_133.QueryRevenuesResponse>;
                        revenue(request: _133.QueryRevenueRequest): Promise<_133.QueryRevenueResponse>;
                        params(request?: _133.QueryParamsRequest): Promise<_133.QueryParamsResponse>;
                        deployerRevenues(request: _133.QueryDeployerRevenuesRequest): Promise<_133.QueryDeployerRevenuesResponse>;
                        withdrawerRevenues(request: _133.QueryWithdrawerRevenuesRequest): Promise<_133.QueryWithdrawerRevenuesResponse>;
                    };
                };
                vesting: {
                    v2: {
                        balances(request: _138.QueryBalancesRequest): Promise<_138.QueryBalancesResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                accesscontrol_x: {
                    v1beta1: import("../cosmos/accesscontrol_x/query.lcd").LCDQueryClient;
                };
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            evmos: {
                epochs: {
                    v1: _299.LCDQueryClient;
                };
                erc20: {
                    v1: _300.LCDQueryClient;
                };
                inflation: {
                    v1: _301.LCDQueryClient;
                };
                revenue: {
                    v1: _302.LCDQueryClient;
                };
                vesting: {
                    v2: _303.LCDQueryClient;
                };
            };
        }>;
    };
}
