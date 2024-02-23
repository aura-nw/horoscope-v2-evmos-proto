import * as _117 from "./epochs/v1/genesis";
import * as _118 from "./epochs/v1/query";
import * as _119 from "./erc20/v1/erc20";
import * as _120 from "./erc20/v1/events";
import * as _121 from "./erc20/v1/genesis";
import * as _122 from "./erc20/v1/query";
import * as _123 from "./erc20/v1/tx";
import * as _124 from "./incentives/v1/genesis";
import * as _125 from "./incentives/v1/incentives";
import * as _126 from "./inflation/v1/genesis";
import * as _127 from "./inflation/v1/inflation";
import * as _128 from "./inflation/v1/query";
import * as _129 from "./inflation/v1/tx";
import * as _130 from "./revenue/v1/events";
import * as _131 from "./revenue/v1/genesis";
import * as _132 from "./revenue/v1/query";
import * as _133 from "./revenue/v1/revenue";
import * as _134 from "./revenue/v1/tx";
import * as _135 from "./vesting/v1/vesting";
import * as _136 from "./vesting/v2/events";
import * as _137 from "./vesting/v2/query";
import * as _138 from "./vesting/v2/tx";
import * as _139 from "./vesting/v2/vesting";
import * as _259 from "./epochs/v1/query.lcd";
import * as _260 from "./erc20/v1/query.lcd";
import * as _261 from "./inflation/v1/query.lcd";
import * as _262 from "./revenue/v1/query.lcd";
import * as _263 from "./vesting/v2/query.lcd";
import * as _264 from "./epochs/v1/query.rpc.Query";
import * as _265 from "./erc20/v1/query.rpc.Query";
import * as _266 from "./inflation/v1/query.rpc.Query";
import * as _267 from "./revenue/v1/query.rpc.Query";
import * as _268 from "./vesting/v2/query.rpc.Query";
import * as _269 from "./erc20/v1/tx.rpc.msg";
import * as _270 from "./inflation/v1/tx.rpc.msg";
import * as _271 from "./revenue/v1/tx.rpc.msg";
import * as _272 from "./vesting/v2/tx.rpc.msg";
export declare namespace evmos {
    namespace epochs {
        const v1: {
            QueryClientImpl: typeof _264.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _118.QueryEpochsInfoRequest): Promise<_118.QueryEpochsInfoResponse>;
                currentEpoch(request: _118.QueryCurrentEpochRequest): Promise<_118.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _259.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(message: _118.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryEpochsInfoRequest;
                fromJSON(object: any): _118.QueryEpochsInfoRequest;
                toJSON(message: _118.QueryEpochsInfoRequest): unknown;
                fromPartial(object: Partial<_118.QueryEpochsInfoRequest>): _118.QueryEpochsInfoRequest;
                fromAmino(object: _118.QueryEpochsInfoRequestAmino): _118.QueryEpochsInfoRequest;
                toAmino(message: _118.QueryEpochsInfoRequest): _118.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _118.QueryEpochsInfoRequestAminoMsg): _118.QueryEpochsInfoRequest;
                fromProtoMsg(message: _118.QueryEpochsInfoRequestProtoMsg): _118.QueryEpochsInfoRequest;
                toProto(message: _118.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _118.QueryEpochsInfoRequest): _118.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _118.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryEpochsInfoResponse;
                fromJSON(object: any): _118.QueryEpochsInfoResponse;
                toJSON(message: _118.QueryEpochsInfoResponse): unknown;
                fromPartial(object: Partial<_118.QueryEpochsInfoResponse>): _118.QueryEpochsInfoResponse;
                fromAmino(object: _118.QueryEpochsInfoResponseAmino): _118.QueryEpochsInfoResponse;
                toAmino(message: _118.QueryEpochsInfoResponse): _118.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _118.QueryEpochsInfoResponseAminoMsg): _118.QueryEpochsInfoResponse;
                fromProtoMsg(message: _118.QueryEpochsInfoResponseProtoMsg): _118.QueryEpochsInfoResponse;
                toProto(message: _118.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _118.QueryEpochsInfoResponse): _118.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _118.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryCurrentEpochRequest;
                fromJSON(object: any): _118.QueryCurrentEpochRequest;
                toJSON(message: _118.QueryCurrentEpochRequest): unknown;
                fromPartial(object: Partial<_118.QueryCurrentEpochRequest>): _118.QueryCurrentEpochRequest;
                fromAmino(object: _118.QueryCurrentEpochRequestAmino): _118.QueryCurrentEpochRequest;
                toAmino(message: _118.QueryCurrentEpochRequest): _118.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _118.QueryCurrentEpochRequestAminoMsg): _118.QueryCurrentEpochRequest;
                fromProtoMsg(message: _118.QueryCurrentEpochRequestProtoMsg): _118.QueryCurrentEpochRequest;
                toProto(message: _118.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _118.QueryCurrentEpochRequest): _118.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _118.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryCurrentEpochResponse;
                fromJSON(object: any): _118.QueryCurrentEpochResponse;
                toJSON(message: _118.QueryCurrentEpochResponse): unknown;
                fromPartial(object: Partial<_118.QueryCurrentEpochResponse>): _118.QueryCurrentEpochResponse;
                fromAmino(object: _118.QueryCurrentEpochResponseAmino): _118.QueryCurrentEpochResponse;
                toAmino(message: _118.QueryCurrentEpochResponse): _118.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _118.QueryCurrentEpochResponseAminoMsg): _118.QueryCurrentEpochResponse;
                fromProtoMsg(message: _118.QueryCurrentEpochResponseProtoMsg): _118.QueryCurrentEpochResponse;
                toProto(message: _118.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _118.QueryCurrentEpochResponse): _118.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _117.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.EpochInfo;
                fromJSON(object: any): _117.EpochInfo;
                toJSON(message: _117.EpochInfo): unknown;
                fromPartial(object: Partial<_117.EpochInfo>): _117.EpochInfo;
                fromAmino(object: _117.EpochInfoAmino): _117.EpochInfo;
                toAmino(message: _117.EpochInfo): _117.EpochInfoAmino;
                fromAminoMsg(object: _117.EpochInfoAminoMsg): _117.EpochInfo;
                fromProtoMsg(message: _117.EpochInfoProtoMsg): _117.EpochInfo;
                toProto(message: _117.EpochInfo): Uint8Array;
                toProtoMsg(message: _117.EpochInfo): _117.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GenesisState;
                fromJSON(object: any): _117.GenesisState;
                toJSON(message: _117.GenesisState): unknown;
                fromPartial(object: Partial<_117.GenesisState>): _117.GenesisState;
                fromAmino(object: _117.GenesisStateAmino): _117.GenesisState;
                toAmino(message: _117.GenesisState): _117.GenesisStateAmino;
                fromAminoMsg(object: _117.GenesisStateAminoMsg): _117.GenesisState;
                fromProtoMsg(message: _117.GenesisStateProtoMsg): _117.GenesisState;
                toProto(message: _117.GenesisState): Uint8Array;
                toProtoMsg(message: _117.GenesisState): _117.GenesisStateProtoMsg;
            };
        };
    }
    namespace erc20 {
        const v1: {
            MsgClientImpl: typeof _269.MsgClientImpl;
            QueryClientImpl: typeof _265.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                tokenPairs(request?: _122.QueryTokenPairsRequest): Promise<_122.QueryTokenPairsResponse>;
                tokenPair(request: _122.QueryTokenPairRequest): Promise<_122.QueryTokenPairResponse>;
                params(request?: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _260.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    convertCoin(value: _123.MsgConvertCoin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertERC20(value: _123.MsgConvertERC20): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _123.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    convertCoin(value: _123.MsgConvertCoin): {
                        typeUrl: string;
                        value: _123.MsgConvertCoin;
                    };
                    convertERC20(value: _123.MsgConvertERC20): {
                        typeUrl: string;
                        value: _123.MsgConvertERC20;
                    };
                    updateParams(value: _123.MsgUpdateParams): {
                        typeUrl: string;
                        value: _123.MsgUpdateParams;
                    };
                };
                toJSON: {
                    convertCoin(value: _123.MsgConvertCoin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    convertERC20(value: _123.MsgConvertERC20): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _123.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    convertCoin(value: any): {
                        typeUrl: string;
                        value: _123.MsgConvertCoin;
                    };
                    convertERC20(value: any): {
                        typeUrl: string;
                        value: _123.MsgConvertERC20;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _123.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    convertCoin(value: _123.MsgConvertCoin): {
                        typeUrl: string;
                        value: _123.MsgConvertCoin;
                    };
                    convertERC20(value: _123.MsgConvertERC20): {
                        typeUrl: string;
                        value: _123.MsgConvertERC20;
                    };
                    updateParams(value: _123.MsgUpdateParams): {
                        typeUrl: string;
                        value: _123.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.erc20.v1.MsgConvertCoin": {
                    aminoType: string;
                    toAmino: (message: _123.MsgConvertCoin) => _123.MsgConvertCoinAmino;
                    fromAmino: (object: _123.MsgConvertCoinAmino) => _123.MsgConvertCoin;
                };
                "/evmos.erc20.v1.MsgConvertERC20": {
                    aminoType: string;
                    toAmino: (message: _123.MsgConvertERC20) => _123.MsgConvertERC20Amino;
                    fromAmino: (object: _123.MsgConvertERC20Amino) => _123.MsgConvertERC20;
                };
                "/evmos.erc20.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _123.MsgUpdateParams) => _123.MsgUpdateParamsAmino;
                    fromAmino: (object: _123.MsgUpdateParamsAmino) => _123.MsgUpdateParams;
                };
            };
            MsgConvertCoin: {
                typeUrl: string;
                encode(message: _123.MsgConvertCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgConvertCoin;
                fromJSON(object: any): _123.MsgConvertCoin;
                toJSON(message: _123.MsgConvertCoin): unknown;
                fromPartial(object: Partial<_123.MsgConvertCoin>): _123.MsgConvertCoin;
                fromAmino(object: _123.MsgConvertCoinAmino): _123.MsgConvertCoin;
                toAmino(message: _123.MsgConvertCoin): _123.MsgConvertCoinAmino;
                fromAminoMsg(object: _123.MsgConvertCoinAminoMsg): _123.MsgConvertCoin;
                fromProtoMsg(message: _123.MsgConvertCoinProtoMsg): _123.MsgConvertCoin;
                toProto(message: _123.MsgConvertCoin): Uint8Array;
                toProtoMsg(message: _123.MsgConvertCoin): _123.MsgConvertCoinProtoMsg;
            };
            MsgConvertCoinResponse: {
                typeUrl: string;
                encode(_: _123.MsgConvertCoinResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgConvertCoinResponse;
                fromJSON(_: any): _123.MsgConvertCoinResponse;
                toJSON(_: _123.MsgConvertCoinResponse): unknown;
                fromPartial(_: Partial<_123.MsgConvertCoinResponse>): _123.MsgConvertCoinResponse;
                fromAmino(_: _123.MsgConvertCoinResponseAmino): _123.MsgConvertCoinResponse;
                toAmino(_: _123.MsgConvertCoinResponse): _123.MsgConvertCoinResponseAmino;
                fromAminoMsg(object: _123.MsgConvertCoinResponseAminoMsg): _123.MsgConvertCoinResponse;
                fromProtoMsg(message: _123.MsgConvertCoinResponseProtoMsg): _123.MsgConvertCoinResponse;
                toProto(message: _123.MsgConvertCoinResponse): Uint8Array;
                toProtoMsg(message: _123.MsgConvertCoinResponse): _123.MsgConvertCoinResponseProtoMsg;
            };
            MsgConvertERC20: {
                typeUrl: string;
                encode(message: _123.MsgConvertERC20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgConvertERC20;
                fromJSON(object: any): _123.MsgConvertERC20;
                toJSON(message: _123.MsgConvertERC20): unknown;
                fromPartial(object: Partial<_123.MsgConvertERC20>): _123.MsgConvertERC20;
                fromAmino(object: _123.MsgConvertERC20Amino): _123.MsgConvertERC20;
                toAmino(message: _123.MsgConvertERC20): _123.MsgConvertERC20Amino;
                fromAminoMsg(object: _123.MsgConvertERC20AminoMsg): _123.MsgConvertERC20;
                fromProtoMsg(message: _123.MsgConvertERC20ProtoMsg): _123.MsgConvertERC20;
                toProto(message: _123.MsgConvertERC20): Uint8Array;
                toProtoMsg(message: _123.MsgConvertERC20): _123.MsgConvertERC20ProtoMsg;
            };
            MsgConvertERC20Response: {
                typeUrl: string;
                encode(_: _123.MsgConvertERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgConvertERC20Response;
                fromJSON(_: any): _123.MsgConvertERC20Response;
                toJSON(_: _123.MsgConvertERC20Response): unknown;
                fromPartial(_: Partial<_123.MsgConvertERC20Response>): _123.MsgConvertERC20Response;
                fromAmino(_: _123.MsgConvertERC20ResponseAmino): _123.MsgConvertERC20Response;
                toAmino(_: _123.MsgConvertERC20Response): _123.MsgConvertERC20ResponseAmino;
                fromAminoMsg(object: _123.MsgConvertERC20ResponseAminoMsg): _123.MsgConvertERC20Response;
                fromProtoMsg(message: _123.MsgConvertERC20ResponseProtoMsg): _123.MsgConvertERC20Response;
                toProto(message: _123.MsgConvertERC20Response): Uint8Array;
                toProtoMsg(message: _123.MsgConvertERC20Response): _123.MsgConvertERC20ResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _123.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgUpdateParams;
                fromJSON(object: any): _123.MsgUpdateParams;
                toJSON(message: _123.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_123.MsgUpdateParams>): _123.MsgUpdateParams;
                fromAmino(object: _123.MsgUpdateParamsAmino): _123.MsgUpdateParams;
                toAmino(message: _123.MsgUpdateParams): _123.MsgUpdateParamsAmino;
                fromAminoMsg(object: _123.MsgUpdateParamsAminoMsg): _123.MsgUpdateParams;
                fromProtoMsg(message: _123.MsgUpdateParamsProtoMsg): _123.MsgUpdateParams;
                toProto(message: _123.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _123.MsgUpdateParams): _123.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _123.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.MsgUpdateParamsResponse;
                fromJSON(_: any): _123.MsgUpdateParamsResponse;
                toJSON(_: _123.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_123.MsgUpdateParamsResponse>): _123.MsgUpdateParamsResponse;
                fromAmino(_: _123.MsgUpdateParamsResponseAmino): _123.MsgUpdateParamsResponse;
                toAmino(_: _123.MsgUpdateParamsResponse): _123.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _123.MsgUpdateParamsResponseAminoMsg): _123.MsgUpdateParamsResponse;
                fromProtoMsg(message: _123.MsgUpdateParamsResponseProtoMsg): _123.MsgUpdateParamsResponse;
                toProto(message: _123.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _123.MsgUpdateParamsResponse): _123.MsgUpdateParamsResponseProtoMsg;
            };
            QueryTokenPairsRequest: {
                typeUrl: string;
                encode(message: _122.QueryTokenPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryTokenPairsRequest;
                fromJSON(object: any): _122.QueryTokenPairsRequest;
                toJSON(message: _122.QueryTokenPairsRequest): unknown;
                fromPartial(object: Partial<_122.QueryTokenPairsRequest>): _122.QueryTokenPairsRequest;
                fromAmino(object: _122.QueryTokenPairsRequestAmino): _122.QueryTokenPairsRequest;
                toAmino(message: _122.QueryTokenPairsRequest): _122.QueryTokenPairsRequestAmino;
                fromAminoMsg(object: _122.QueryTokenPairsRequestAminoMsg): _122.QueryTokenPairsRequest;
                fromProtoMsg(message: _122.QueryTokenPairsRequestProtoMsg): _122.QueryTokenPairsRequest;
                toProto(message: _122.QueryTokenPairsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryTokenPairsRequest): _122.QueryTokenPairsRequestProtoMsg;
            };
            QueryTokenPairsResponse: {
                typeUrl: string;
                encode(message: _122.QueryTokenPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryTokenPairsResponse;
                fromJSON(object: any): _122.QueryTokenPairsResponse;
                toJSON(message: _122.QueryTokenPairsResponse): unknown;
                fromPartial(object: Partial<_122.QueryTokenPairsResponse>): _122.QueryTokenPairsResponse;
                fromAmino(object: _122.QueryTokenPairsResponseAmino): _122.QueryTokenPairsResponse;
                toAmino(message: _122.QueryTokenPairsResponse): _122.QueryTokenPairsResponseAmino;
                fromAminoMsg(object: _122.QueryTokenPairsResponseAminoMsg): _122.QueryTokenPairsResponse;
                fromProtoMsg(message: _122.QueryTokenPairsResponseProtoMsg): _122.QueryTokenPairsResponse;
                toProto(message: _122.QueryTokenPairsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryTokenPairsResponse): _122.QueryTokenPairsResponseProtoMsg;
            };
            QueryTokenPairRequest: {
                typeUrl: string;
                encode(message: _122.QueryTokenPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryTokenPairRequest;
                fromJSON(object: any): _122.QueryTokenPairRequest;
                toJSON(message: _122.QueryTokenPairRequest): unknown;
                fromPartial(object: Partial<_122.QueryTokenPairRequest>): _122.QueryTokenPairRequest;
                fromAmino(object: _122.QueryTokenPairRequestAmino): _122.QueryTokenPairRequest;
                toAmino(message: _122.QueryTokenPairRequest): _122.QueryTokenPairRequestAmino;
                fromAminoMsg(object: _122.QueryTokenPairRequestAminoMsg): _122.QueryTokenPairRequest;
                fromProtoMsg(message: _122.QueryTokenPairRequestProtoMsg): _122.QueryTokenPairRequest;
                toProto(message: _122.QueryTokenPairRequest): Uint8Array;
                toProtoMsg(message: _122.QueryTokenPairRequest): _122.QueryTokenPairRequestProtoMsg;
            };
            QueryTokenPairResponse: {
                typeUrl: string;
                encode(message: _122.QueryTokenPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryTokenPairResponse;
                fromJSON(object: any): _122.QueryTokenPairResponse;
                toJSON(message: _122.QueryTokenPairResponse): unknown;
                fromPartial(object: Partial<_122.QueryTokenPairResponse>): _122.QueryTokenPairResponse;
                fromAmino(object: _122.QueryTokenPairResponseAmino): _122.QueryTokenPairResponse;
                toAmino(message: _122.QueryTokenPairResponse): _122.QueryTokenPairResponseAmino;
                fromAminoMsg(object: _122.QueryTokenPairResponseAminoMsg): _122.QueryTokenPairResponse;
                fromProtoMsg(message: _122.QueryTokenPairResponseProtoMsg): _122.QueryTokenPairResponse;
                toProto(message: _122.QueryTokenPairResponse): Uint8Array;
                toProtoMsg(message: _122.QueryTokenPairResponse): _122.QueryTokenPairResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _122.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryParamsRequest;
                fromJSON(_: any): _122.QueryParamsRequest;
                toJSON(_: _122.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_122.QueryParamsRequest>): _122.QueryParamsRequest;
                fromAmino(_: _122.QueryParamsRequestAmino): _122.QueryParamsRequest;
                toAmino(_: _122.QueryParamsRequest): _122.QueryParamsRequestAmino;
                fromAminoMsg(object: _122.QueryParamsRequestAminoMsg): _122.QueryParamsRequest;
                fromProtoMsg(message: _122.QueryParamsRequestProtoMsg): _122.QueryParamsRequest;
                toProto(message: _122.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _122.QueryParamsRequest): _122.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _122.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.QueryParamsResponse;
                fromJSON(object: any): _122.QueryParamsResponse;
                toJSON(message: _122.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_122.QueryParamsResponse>): _122.QueryParamsResponse;
                fromAmino(object: _122.QueryParamsResponseAmino): _122.QueryParamsResponse;
                toAmino(message: _122.QueryParamsResponse): _122.QueryParamsResponseAmino;
                fromAminoMsg(object: _122.QueryParamsResponseAminoMsg): _122.QueryParamsResponse;
                fromProtoMsg(message: _122.QueryParamsResponseProtoMsg): _122.QueryParamsResponse;
                toProto(message: _122.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _122.QueryParamsResponse): _122.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _121.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GenesisState;
                fromJSON(object: any): _121.GenesisState;
                toJSON(message: _121.GenesisState): unknown;
                fromPartial(object: Partial<_121.GenesisState>): _121.GenesisState;
                fromAmino(object: _121.GenesisStateAmino): _121.GenesisState;
                toAmino(message: _121.GenesisState): _121.GenesisStateAmino;
                fromAminoMsg(object: _121.GenesisStateAminoMsg): _121.GenesisState;
                fromProtoMsg(message: _121.GenesisStateProtoMsg): _121.GenesisState;
                toProto(message: _121.GenesisState): Uint8Array;
                toProtoMsg(message: _121.GenesisState): _121.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _121.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Params;
                fromJSON(object: any): _121.Params;
                toJSON(message: _121.Params): unknown;
                fromPartial(object: Partial<_121.Params>): _121.Params;
                fromAmino(object: _121.ParamsAmino): _121.Params;
                toAmino(message: _121.Params): _121.ParamsAmino;
                fromAminoMsg(object: _121.ParamsAminoMsg): _121.Params;
                fromProtoMsg(message: _121.ParamsProtoMsg): _121.Params;
                toProto(message: _121.Params): Uint8Array;
                toProtoMsg(message: _121.Params): _121.ParamsProtoMsg;
            };
            EventRegisterPair: {
                typeUrl: string;
                encode(message: _120.EventRegisterPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.EventRegisterPair;
                fromJSON(object: any): _120.EventRegisterPair;
                toJSON(message: _120.EventRegisterPair): unknown;
                fromPartial(object: Partial<_120.EventRegisterPair>): _120.EventRegisterPair;
                fromAmino(object: _120.EventRegisterPairAmino): _120.EventRegisterPair;
                toAmino(message: _120.EventRegisterPair): _120.EventRegisterPairAmino;
                fromAminoMsg(object: _120.EventRegisterPairAminoMsg): _120.EventRegisterPair;
                fromProtoMsg(message: _120.EventRegisterPairProtoMsg): _120.EventRegisterPair;
                toProto(message: _120.EventRegisterPair): Uint8Array;
                toProtoMsg(message: _120.EventRegisterPair): _120.EventRegisterPairProtoMsg;
            };
            EventToggleTokenConversion: {
                typeUrl: string;
                encode(message: _120.EventToggleTokenConversion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.EventToggleTokenConversion;
                fromJSON(object: any): _120.EventToggleTokenConversion;
                toJSON(message: _120.EventToggleTokenConversion): unknown;
                fromPartial(object: Partial<_120.EventToggleTokenConversion>): _120.EventToggleTokenConversion;
                fromAmino(object: _120.EventToggleTokenConversionAmino): _120.EventToggleTokenConversion;
                toAmino(message: _120.EventToggleTokenConversion): _120.EventToggleTokenConversionAmino;
                fromAminoMsg(object: _120.EventToggleTokenConversionAminoMsg): _120.EventToggleTokenConversion;
                fromProtoMsg(message: _120.EventToggleTokenConversionProtoMsg): _120.EventToggleTokenConversion;
                toProto(message: _120.EventToggleTokenConversion): Uint8Array;
                toProtoMsg(message: _120.EventToggleTokenConversion): _120.EventToggleTokenConversionProtoMsg;
            };
            EventConvertCoin: {
                typeUrl: string;
                encode(message: _120.EventConvertCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.EventConvertCoin;
                fromJSON(object: any): _120.EventConvertCoin;
                toJSON(message: _120.EventConvertCoin): unknown;
                fromPartial(object: Partial<_120.EventConvertCoin>): _120.EventConvertCoin;
                fromAmino(object: _120.EventConvertCoinAmino): _120.EventConvertCoin;
                toAmino(message: _120.EventConvertCoin): _120.EventConvertCoinAmino;
                fromAminoMsg(object: _120.EventConvertCoinAminoMsg): _120.EventConvertCoin;
                fromProtoMsg(message: _120.EventConvertCoinProtoMsg): _120.EventConvertCoin;
                toProto(message: _120.EventConvertCoin): Uint8Array;
                toProtoMsg(message: _120.EventConvertCoin): _120.EventConvertCoinProtoMsg;
            };
            EventConvertERC20: {
                typeUrl: string;
                encode(message: _120.EventConvertERC20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.EventConvertERC20;
                fromJSON(object: any): _120.EventConvertERC20;
                toJSON(message: _120.EventConvertERC20): unknown;
                fromPartial(object: Partial<_120.EventConvertERC20>): _120.EventConvertERC20;
                fromAmino(object: _120.EventConvertERC20Amino): _120.EventConvertERC20;
                toAmino(message: _120.EventConvertERC20): _120.EventConvertERC20Amino;
                fromAminoMsg(object: _120.EventConvertERC20AminoMsg): _120.EventConvertERC20;
                fromProtoMsg(message: _120.EventConvertERC20ProtoMsg): _120.EventConvertERC20;
                toProto(message: _120.EventConvertERC20): Uint8Array;
                toProtoMsg(message: _120.EventConvertERC20): _120.EventConvertERC20ProtoMsg;
            };
            ownerFromJSON(object: any): _119.Owner;
            ownerToJSON(object: _119.Owner): string;
            Owner: typeof _119.Owner;
            OwnerSDKType: typeof _119.Owner;
            OwnerAmino: typeof _119.Owner;
            TokenPair: {
                typeUrl: string;
                encode(message: _119.TokenPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.TokenPair;
                fromJSON(object: any): _119.TokenPair;
                toJSON(message: _119.TokenPair): unknown;
                fromPartial(object: Partial<_119.TokenPair>): _119.TokenPair;
                fromAmino(object: _119.TokenPairAmino): _119.TokenPair;
                toAmino(message: _119.TokenPair): _119.TokenPairAmino;
                fromAminoMsg(object: _119.TokenPairAminoMsg): _119.TokenPair;
                fromProtoMsg(message: _119.TokenPairProtoMsg): _119.TokenPair;
                toProto(message: _119.TokenPair): Uint8Array;
                toProtoMsg(message: _119.TokenPair): _119.TokenPairProtoMsg;
            };
            RegisterCoinProposal: {
                typeUrl: string;
                encode(message: _119.RegisterCoinProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RegisterCoinProposal;
                fromJSON(object: any): _119.RegisterCoinProposal;
                toJSON(message: _119.RegisterCoinProposal): unknown;
                fromPartial(object: Partial<_119.RegisterCoinProposal>): _119.RegisterCoinProposal;
                fromAmino(object: _119.RegisterCoinProposalAmino): _119.RegisterCoinProposal;
                toAmino(message: _119.RegisterCoinProposal): _119.RegisterCoinProposalAmino;
                fromAminoMsg(object: _119.RegisterCoinProposalAminoMsg): _119.RegisterCoinProposal;
                fromProtoMsg(message: _119.RegisterCoinProposalProtoMsg): _119.RegisterCoinProposal;
                toProto(message: _119.RegisterCoinProposal): Uint8Array;
                toProtoMsg(message: _119.RegisterCoinProposal): _119.RegisterCoinProposalProtoMsg;
            };
            RegisterERC20Proposal: {
                typeUrl: string;
                encode(message: _119.RegisterERC20Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.RegisterERC20Proposal;
                fromJSON(object: any): _119.RegisterERC20Proposal;
                toJSON(message: _119.RegisterERC20Proposal): unknown;
                fromPartial(object: Partial<_119.RegisterERC20Proposal>): _119.RegisterERC20Proposal;
                fromAmino(object: _119.RegisterERC20ProposalAmino): _119.RegisterERC20Proposal;
                toAmino(message: _119.RegisterERC20Proposal): _119.RegisterERC20ProposalAmino;
                fromAminoMsg(object: _119.RegisterERC20ProposalAminoMsg): _119.RegisterERC20Proposal;
                fromProtoMsg(message: _119.RegisterERC20ProposalProtoMsg): _119.RegisterERC20Proposal;
                toProto(message: _119.RegisterERC20Proposal): Uint8Array;
                toProtoMsg(message: _119.RegisterERC20Proposal): _119.RegisterERC20ProposalProtoMsg;
            };
            ToggleTokenConversionProposal: {
                typeUrl: string;
                encode(message: _119.ToggleTokenConversionProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ToggleTokenConversionProposal;
                fromJSON(object: any): _119.ToggleTokenConversionProposal;
                toJSON(message: _119.ToggleTokenConversionProposal): unknown;
                fromPartial(object: Partial<_119.ToggleTokenConversionProposal>): _119.ToggleTokenConversionProposal;
                fromAmino(object: _119.ToggleTokenConversionProposalAmino): _119.ToggleTokenConversionProposal;
                toAmino(message: _119.ToggleTokenConversionProposal): _119.ToggleTokenConversionProposalAmino;
                fromAminoMsg(object: _119.ToggleTokenConversionProposalAminoMsg): _119.ToggleTokenConversionProposal;
                fromProtoMsg(message: _119.ToggleTokenConversionProposalProtoMsg): _119.ToggleTokenConversionProposal;
                toProto(message: _119.ToggleTokenConversionProposal): Uint8Array;
                toProtoMsg(message: _119.ToggleTokenConversionProposal): _119.ToggleTokenConversionProposalProtoMsg;
            };
            ProposalMetadata: {
                typeUrl: string;
                encode(message: _119.ProposalMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.ProposalMetadata;
                fromJSON(object: any): _119.ProposalMetadata;
                toJSON(message: _119.ProposalMetadata): unknown;
                fromPartial(object: Partial<_119.ProposalMetadata>): _119.ProposalMetadata;
                fromAmino(object: _119.ProposalMetadataAmino): _119.ProposalMetadata;
                toAmino(message: _119.ProposalMetadata): _119.ProposalMetadataAmino;
                fromAminoMsg(object: _119.ProposalMetadataAminoMsg): _119.ProposalMetadata;
                fromProtoMsg(message: _119.ProposalMetadataProtoMsg): _119.ProposalMetadata;
                toProto(message: _119.ProposalMetadata): Uint8Array;
                toProtoMsg(message: _119.ProposalMetadata): _119.ProposalMetadataProtoMsg;
            };
        };
    }
    namespace incentives {
        const v1: {
            Incentive: {
                typeUrl: string;
                encode(message: _125.Incentive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Incentive;
                fromJSON(object: any): _125.Incentive;
                toJSON(message: _125.Incentive): unknown;
                fromPartial(object: Partial<_125.Incentive>): _125.Incentive;
                fromAmino(object: _125.IncentiveAmino): _125.Incentive;
                toAmino(message: _125.Incentive): _125.IncentiveAmino;
                fromAminoMsg(object: _125.IncentiveAminoMsg): _125.Incentive;
                fromProtoMsg(message: _125.IncentiveProtoMsg): _125.Incentive;
                toProto(message: _125.Incentive): Uint8Array;
                toProtoMsg(message: _125.Incentive): _125.IncentiveProtoMsg;
            };
            GasMeter: {
                typeUrl: string;
                encode(message: _125.GasMeter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GasMeter;
                fromJSON(object: any): _125.GasMeter;
                toJSON(message: _125.GasMeter): unknown;
                fromPartial(object: Partial<_125.GasMeter>): _125.GasMeter;
                fromAmino(object: _125.GasMeterAmino): _125.GasMeter;
                toAmino(message: _125.GasMeter): _125.GasMeterAmino;
                fromAminoMsg(object: _125.GasMeterAminoMsg): _125.GasMeter;
                fromProtoMsg(message: _125.GasMeterProtoMsg): _125.GasMeter;
                toProto(message: _125.GasMeter): Uint8Array;
                toProtoMsg(message: _125.GasMeter): _125.GasMeterProtoMsg;
            };
            RegisterIncentiveProposal: {
                typeUrl: string;
                encode(message: _125.RegisterIncentiveProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.RegisterIncentiveProposal;
                fromJSON(object: any): _125.RegisterIncentiveProposal;
                toJSON(message: _125.RegisterIncentiveProposal): unknown;
                fromPartial(object: Partial<_125.RegisterIncentiveProposal>): _125.RegisterIncentiveProposal;
                fromAmino(object: _125.RegisterIncentiveProposalAmino): _125.RegisterIncentiveProposal;
                toAmino(message: _125.RegisterIncentiveProposal): _125.RegisterIncentiveProposalAmino;
                fromAminoMsg(object: _125.RegisterIncentiveProposalAminoMsg): _125.RegisterIncentiveProposal;
                fromProtoMsg(message: _125.RegisterIncentiveProposalProtoMsg): _125.RegisterIncentiveProposal;
                toProto(message: _125.RegisterIncentiveProposal): Uint8Array;
                toProtoMsg(message: _125.RegisterIncentiveProposal): _125.RegisterIncentiveProposalProtoMsg;
            };
            CancelIncentiveProposal: {
                typeUrl: string;
                encode(message: _125.CancelIncentiveProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.CancelIncentiveProposal;
                fromJSON(object: any): _125.CancelIncentiveProposal;
                toJSON(message: _125.CancelIncentiveProposal): unknown;
                fromPartial(object: Partial<_125.CancelIncentiveProposal>): _125.CancelIncentiveProposal;
                fromAmino(object: _125.CancelIncentiveProposalAmino): _125.CancelIncentiveProposal;
                toAmino(message: _125.CancelIncentiveProposal): _125.CancelIncentiveProposalAmino;
                fromAminoMsg(object: _125.CancelIncentiveProposalAminoMsg): _125.CancelIncentiveProposal;
                fromProtoMsg(message: _125.CancelIncentiveProposalProtoMsg): _125.CancelIncentiveProposal;
                toProto(message: _125.CancelIncentiveProposal): Uint8Array;
                toProtoMsg(message: _125.CancelIncentiveProposal): _125.CancelIncentiveProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _124.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.GenesisState;
                fromJSON(object: any): _124.GenesisState;
                toJSON(message: _124.GenesisState): unknown;
                fromPartial(object: Partial<_124.GenesisState>): _124.GenesisState;
                fromAmino(object: _124.GenesisStateAmino): _124.GenesisState;
                toAmino(message: _124.GenesisState): _124.GenesisStateAmino;
                fromAminoMsg(object: _124.GenesisStateAminoMsg): _124.GenesisState;
                fromProtoMsg(message: _124.GenesisStateProtoMsg): _124.GenesisState;
                toProto(message: _124.GenesisState): Uint8Array;
                toProtoMsg(message: _124.GenesisState): _124.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _124.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Params;
                fromJSON(object: any): _124.Params;
                toJSON(message: _124.Params): unknown;
                fromPartial(object: Partial<_124.Params>): _124.Params;
                fromAmino(object: _124.ParamsAmino): _124.Params;
                toAmino(message: _124.Params): _124.ParamsAmino;
                fromAminoMsg(object: _124.ParamsAminoMsg): _124.Params;
                fromProtoMsg(message: _124.ParamsProtoMsg): _124.Params;
                toProto(message: _124.Params): Uint8Array;
                toProtoMsg(message: _124.Params): _124.ParamsProtoMsg;
            };
        };
    }
    namespace inflation {
        const v1: {
            MsgClientImpl: typeof _270.MsgClientImpl;
            QueryClientImpl: typeof _266.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                period(request?: _128.QueryPeriodRequest): Promise<_128.QueryPeriodResponse>;
                epochMintProvision(request?: _128.QueryEpochMintProvisionRequest): Promise<_128.QueryEpochMintProvisionResponse>;
                skippedEpochs(request?: _128.QuerySkippedEpochsRequest): Promise<_128.QuerySkippedEpochsResponse>;
                circulatingSupply(request?: _128.QueryCirculatingSupplyRequest): Promise<_128.QueryCirculatingSupplyResponse>;
                inflationRate(request?: _128.QueryInflationRateRequest): Promise<_128.QueryInflationRateResponse>;
                params(request?: _128.QueryParamsRequest): Promise<_128.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _261.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _129.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _129.MsgUpdateParams): {
                        typeUrl: string;
                        value: _129.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _129.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _129.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _129.MsgUpdateParams): {
                        typeUrl: string;
                        value: _129.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.inflation.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _129.MsgUpdateParams) => _129.MsgUpdateParamsAmino;
                    fromAmino: (object: _129.MsgUpdateParamsAmino) => _129.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _129.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateParams;
                fromJSON(object: any): _129.MsgUpdateParams;
                toJSON(message: _129.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_129.MsgUpdateParams>): _129.MsgUpdateParams;
                fromAmino(object: _129.MsgUpdateParamsAmino): _129.MsgUpdateParams;
                toAmino(message: _129.MsgUpdateParams): _129.MsgUpdateParamsAmino;
                fromAminoMsg(object: _129.MsgUpdateParamsAminoMsg): _129.MsgUpdateParams;
                fromProtoMsg(message: _129.MsgUpdateParamsProtoMsg): _129.MsgUpdateParams;
                toProto(message: _129.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _129.MsgUpdateParams): _129.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _129.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateParamsResponse;
                fromJSON(_: any): _129.MsgUpdateParamsResponse;
                toJSON(_: _129.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_129.MsgUpdateParamsResponse>): _129.MsgUpdateParamsResponse;
                fromAmino(_: _129.MsgUpdateParamsResponseAmino): _129.MsgUpdateParamsResponse;
                toAmino(_: _129.MsgUpdateParamsResponse): _129.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _129.MsgUpdateParamsResponseAminoMsg): _129.MsgUpdateParamsResponse;
                fromProtoMsg(message: _129.MsgUpdateParamsResponseProtoMsg): _129.MsgUpdateParamsResponse;
                toProto(message: _129.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _129.MsgUpdateParamsResponse): _129.MsgUpdateParamsResponseProtoMsg;
            };
            QueryPeriodRequest: {
                typeUrl: string;
                encode(_: _128.QueryPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryPeriodRequest;
                fromJSON(_: any): _128.QueryPeriodRequest;
                toJSON(_: _128.QueryPeriodRequest): unknown;
                fromPartial(_: Partial<_128.QueryPeriodRequest>): _128.QueryPeriodRequest;
                fromAmino(_: _128.QueryPeriodRequestAmino): _128.QueryPeriodRequest;
                toAmino(_: _128.QueryPeriodRequest): _128.QueryPeriodRequestAmino;
                fromAminoMsg(object: _128.QueryPeriodRequestAminoMsg): _128.QueryPeriodRequest;
                fromProtoMsg(message: _128.QueryPeriodRequestProtoMsg): _128.QueryPeriodRequest;
                toProto(message: _128.QueryPeriodRequest): Uint8Array;
                toProtoMsg(message: _128.QueryPeriodRequest): _128.QueryPeriodRequestProtoMsg;
            };
            QueryPeriodResponse: {
                typeUrl: string;
                encode(message: _128.QueryPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryPeriodResponse;
                fromJSON(object: any): _128.QueryPeriodResponse;
                toJSON(message: _128.QueryPeriodResponse): unknown;
                fromPartial(object: Partial<_128.QueryPeriodResponse>): _128.QueryPeriodResponse;
                fromAmino(object: _128.QueryPeriodResponseAmino): _128.QueryPeriodResponse;
                toAmino(message: _128.QueryPeriodResponse): _128.QueryPeriodResponseAmino;
                fromAminoMsg(object: _128.QueryPeriodResponseAminoMsg): _128.QueryPeriodResponse;
                fromProtoMsg(message: _128.QueryPeriodResponseProtoMsg): _128.QueryPeriodResponse;
                toProto(message: _128.QueryPeriodResponse): Uint8Array;
                toProtoMsg(message: _128.QueryPeriodResponse): _128.QueryPeriodResponseProtoMsg;
            };
            QueryEpochMintProvisionRequest: {
                typeUrl: string;
                encode(_: _128.QueryEpochMintProvisionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryEpochMintProvisionRequest;
                fromJSON(_: any): _128.QueryEpochMintProvisionRequest;
                toJSON(_: _128.QueryEpochMintProvisionRequest): unknown;
                fromPartial(_: Partial<_128.QueryEpochMintProvisionRequest>): _128.QueryEpochMintProvisionRequest;
                fromAmino(_: _128.QueryEpochMintProvisionRequestAmino): _128.QueryEpochMintProvisionRequest;
                toAmino(_: _128.QueryEpochMintProvisionRequest): _128.QueryEpochMintProvisionRequestAmino;
                fromAminoMsg(object: _128.QueryEpochMintProvisionRequestAminoMsg): _128.QueryEpochMintProvisionRequest;
                fromProtoMsg(message: _128.QueryEpochMintProvisionRequestProtoMsg): _128.QueryEpochMintProvisionRequest;
                toProto(message: _128.QueryEpochMintProvisionRequest): Uint8Array;
                toProtoMsg(message: _128.QueryEpochMintProvisionRequest): _128.QueryEpochMintProvisionRequestProtoMsg;
            };
            QueryEpochMintProvisionResponse: {
                typeUrl: string;
                encode(message: _128.QueryEpochMintProvisionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryEpochMintProvisionResponse;
                fromJSON(object: any): _128.QueryEpochMintProvisionResponse;
                toJSON(message: _128.QueryEpochMintProvisionResponse): unknown;
                fromPartial(object: Partial<_128.QueryEpochMintProvisionResponse>): _128.QueryEpochMintProvisionResponse;
                fromAmino(object: _128.QueryEpochMintProvisionResponseAmino): _128.QueryEpochMintProvisionResponse;
                toAmino(message: _128.QueryEpochMintProvisionResponse): _128.QueryEpochMintProvisionResponseAmino;
                fromAminoMsg(object: _128.QueryEpochMintProvisionResponseAminoMsg): _128.QueryEpochMintProvisionResponse;
                fromProtoMsg(message: _128.QueryEpochMintProvisionResponseProtoMsg): _128.QueryEpochMintProvisionResponse;
                toProto(message: _128.QueryEpochMintProvisionResponse): Uint8Array;
                toProtoMsg(message: _128.QueryEpochMintProvisionResponse): _128.QueryEpochMintProvisionResponseProtoMsg;
            };
            QuerySkippedEpochsRequest: {
                typeUrl: string;
                encode(_: _128.QuerySkippedEpochsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QuerySkippedEpochsRequest;
                fromJSON(_: any): _128.QuerySkippedEpochsRequest;
                toJSON(_: _128.QuerySkippedEpochsRequest): unknown;
                fromPartial(_: Partial<_128.QuerySkippedEpochsRequest>): _128.QuerySkippedEpochsRequest;
                fromAmino(_: _128.QuerySkippedEpochsRequestAmino): _128.QuerySkippedEpochsRequest;
                toAmino(_: _128.QuerySkippedEpochsRequest): _128.QuerySkippedEpochsRequestAmino;
                fromAminoMsg(object: _128.QuerySkippedEpochsRequestAminoMsg): _128.QuerySkippedEpochsRequest;
                fromProtoMsg(message: _128.QuerySkippedEpochsRequestProtoMsg): _128.QuerySkippedEpochsRequest;
                toProto(message: _128.QuerySkippedEpochsRequest): Uint8Array;
                toProtoMsg(message: _128.QuerySkippedEpochsRequest): _128.QuerySkippedEpochsRequestProtoMsg;
            };
            QuerySkippedEpochsResponse: {
                typeUrl: string;
                encode(message: _128.QuerySkippedEpochsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QuerySkippedEpochsResponse;
                fromJSON(object: any): _128.QuerySkippedEpochsResponse;
                toJSON(message: _128.QuerySkippedEpochsResponse): unknown;
                fromPartial(object: Partial<_128.QuerySkippedEpochsResponse>): _128.QuerySkippedEpochsResponse;
                fromAmino(object: _128.QuerySkippedEpochsResponseAmino): _128.QuerySkippedEpochsResponse;
                toAmino(message: _128.QuerySkippedEpochsResponse): _128.QuerySkippedEpochsResponseAmino;
                fromAminoMsg(object: _128.QuerySkippedEpochsResponseAminoMsg): _128.QuerySkippedEpochsResponse;
                fromProtoMsg(message: _128.QuerySkippedEpochsResponseProtoMsg): _128.QuerySkippedEpochsResponse;
                toProto(message: _128.QuerySkippedEpochsResponse): Uint8Array;
                toProtoMsg(message: _128.QuerySkippedEpochsResponse): _128.QuerySkippedEpochsResponseProtoMsg;
            };
            QueryCirculatingSupplyRequest: {
                typeUrl: string;
                encode(_: _128.QueryCirculatingSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryCirculatingSupplyRequest;
                fromJSON(_: any): _128.QueryCirculatingSupplyRequest;
                toJSON(_: _128.QueryCirculatingSupplyRequest): unknown;
                fromPartial(_: Partial<_128.QueryCirculatingSupplyRequest>): _128.QueryCirculatingSupplyRequest;
                fromAmino(_: _128.QueryCirculatingSupplyRequestAmino): _128.QueryCirculatingSupplyRequest;
                toAmino(_: _128.QueryCirculatingSupplyRequest): _128.QueryCirculatingSupplyRequestAmino;
                fromAminoMsg(object: _128.QueryCirculatingSupplyRequestAminoMsg): _128.QueryCirculatingSupplyRequest;
                fromProtoMsg(message: _128.QueryCirculatingSupplyRequestProtoMsg): _128.QueryCirculatingSupplyRequest;
                toProto(message: _128.QueryCirculatingSupplyRequest): Uint8Array;
                toProtoMsg(message: _128.QueryCirculatingSupplyRequest): _128.QueryCirculatingSupplyRequestProtoMsg;
            };
            QueryCirculatingSupplyResponse: {
                typeUrl: string;
                encode(message: _128.QueryCirculatingSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryCirculatingSupplyResponse;
                fromJSON(object: any): _128.QueryCirculatingSupplyResponse;
                toJSON(message: _128.QueryCirculatingSupplyResponse): unknown;
                fromPartial(object: Partial<_128.QueryCirculatingSupplyResponse>): _128.QueryCirculatingSupplyResponse;
                fromAmino(object: _128.QueryCirculatingSupplyResponseAmino): _128.QueryCirculatingSupplyResponse;
                toAmino(message: _128.QueryCirculatingSupplyResponse): _128.QueryCirculatingSupplyResponseAmino;
                fromAminoMsg(object: _128.QueryCirculatingSupplyResponseAminoMsg): _128.QueryCirculatingSupplyResponse;
                fromProtoMsg(message: _128.QueryCirculatingSupplyResponseProtoMsg): _128.QueryCirculatingSupplyResponse;
                toProto(message: _128.QueryCirculatingSupplyResponse): Uint8Array;
                toProtoMsg(message: _128.QueryCirculatingSupplyResponse): _128.QueryCirculatingSupplyResponseProtoMsg;
            };
            QueryInflationRateRequest: {
                typeUrl: string;
                encode(_: _128.QueryInflationRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryInflationRateRequest;
                fromJSON(_: any): _128.QueryInflationRateRequest;
                toJSON(_: _128.QueryInflationRateRequest): unknown;
                fromPartial(_: Partial<_128.QueryInflationRateRequest>): _128.QueryInflationRateRequest;
                fromAmino(_: _128.QueryInflationRateRequestAmino): _128.QueryInflationRateRequest;
                toAmino(_: _128.QueryInflationRateRequest): _128.QueryInflationRateRequestAmino;
                fromAminoMsg(object: _128.QueryInflationRateRequestAminoMsg): _128.QueryInflationRateRequest;
                fromProtoMsg(message: _128.QueryInflationRateRequestProtoMsg): _128.QueryInflationRateRequest;
                toProto(message: _128.QueryInflationRateRequest): Uint8Array;
                toProtoMsg(message: _128.QueryInflationRateRequest): _128.QueryInflationRateRequestProtoMsg;
            };
            QueryInflationRateResponse: {
                typeUrl: string;
                encode(message: _128.QueryInflationRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryInflationRateResponse;
                fromJSON(object: any): _128.QueryInflationRateResponse;
                toJSON(message: _128.QueryInflationRateResponse): unknown;
                fromPartial(object: Partial<_128.QueryInflationRateResponse>): _128.QueryInflationRateResponse;
                fromAmino(object: _128.QueryInflationRateResponseAmino): _128.QueryInflationRateResponse;
                toAmino(message: _128.QueryInflationRateResponse): _128.QueryInflationRateResponseAmino;
                fromAminoMsg(object: _128.QueryInflationRateResponseAminoMsg): _128.QueryInflationRateResponse;
                fromProtoMsg(message: _128.QueryInflationRateResponseProtoMsg): _128.QueryInflationRateResponse;
                toProto(message: _128.QueryInflationRateResponse): Uint8Array;
                toProtoMsg(message: _128.QueryInflationRateResponse): _128.QueryInflationRateResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _128.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryParamsRequest;
                fromJSON(_: any): _128.QueryParamsRequest;
                toJSON(_: _128.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_128.QueryParamsRequest>): _128.QueryParamsRequest;
                fromAmino(_: _128.QueryParamsRequestAmino): _128.QueryParamsRequest;
                toAmino(_: _128.QueryParamsRequest): _128.QueryParamsRequestAmino;
                fromAminoMsg(object: _128.QueryParamsRequestAminoMsg): _128.QueryParamsRequest;
                fromProtoMsg(message: _128.QueryParamsRequestProtoMsg): _128.QueryParamsRequest;
                toProto(message: _128.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _128.QueryParamsRequest): _128.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _128.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryParamsResponse;
                fromJSON(object: any): _128.QueryParamsResponse;
                toJSON(message: _128.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_128.QueryParamsResponse>): _128.QueryParamsResponse;
                fromAmino(object: _128.QueryParamsResponseAmino): _128.QueryParamsResponse;
                toAmino(message: _128.QueryParamsResponse): _128.QueryParamsResponseAmino;
                fromAminoMsg(object: _128.QueryParamsResponseAminoMsg): _128.QueryParamsResponse;
                fromProtoMsg(message: _128.QueryParamsResponseProtoMsg): _128.QueryParamsResponse;
                toProto(message: _128.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _128.QueryParamsResponse): _128.QueryParamsResponseProtoMsg;
            };
            InflationDistribution: {
                typeUrl: string;
                encode(message: _127.InflationDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.InflationDistribution;
                fromJSON(object: any): _127.InflationDistribution;
                toJSON(message: _127.InflationDistribution): unknown;
                fromPartial(object: Partial<_127.InflationDistribution>): _127.InflationDistribution;
                fromAmino(object: _127.InflationDistributionAmino): _127.InflationDistribution;
                toAmino(message: _127.InflationDistribution): _127.InflationDistributionAmino;
                fromAminoMsg(object: _127.InflationDistributionAminoMsg): _127.InflationDistribution;
                fromProtoMsg(message: _127.InflationDistributionProtoMsg): _127.InflationDistribution;
                toProto(message: _127.InflationDistribution): Uint8Array;
                toProtoMsg(message: _127.InflationDistribution): _127.InflationDistributionProtoMsg;
            };
            ExponentialCalculation: {
                typeUrl: string;
                encode(message: _127.ExponentialCalculation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ExponentialCalculation;
                fromJSON(object: any): _127.ExponentialCalculation;
                toJSON(message: _127.ExponentialCalculation): unknown;
                fromPartial(object: Partial<_127.ExponentialCalculation>): _127.ExponentialCalculation;
                fromAmino(object: _127.ExponentialCalculationAmino): _127.ExponentialCalculation;
                toAmino(message: _127.ExponentialCalculation): _127.ExponentialCalculationAmino;
                fromAminoMsg(object: _127.ExponentialCalculationAminoMsg): _127.ExponentialCalculation;
                fromProtoMsg(message: _127.ExponentialCalculationProtoMsg): _127.ExponentialCalculation;
                toProto(message: _127.ExponentialCalculation): Uint8Array;
                toProtoMsg(message: _127.ExponentialCalculation): _127.ExponentialCalculationProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _126.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.GenesisState;
                fromJSON(object: any): _126.GenesisState;
                toJSON(message: _126.GenesisState): unknown;
                fromPartial(object: Partial<_126.GenesisState>): _126.GenesisState;
                fromAmino(object: _126.GenesisStateAmino): _126.GenesisState;
                toAmino(message: _126.GenesisState): _126.GenesisStateAmino;
                fromAminoMsg(object: _126.GenesisStateAminoMsg): _126.GenesisState;
                fromProtoMsg(message: _126.GenesisStateProtoMsg): _126.GenesisState;
                toProto(message: _126.GenesisState): Uint8Array;
                toProtoMsg(message: _126.GenesisState): _126.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _126.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Params;
                fromJSON(object: any): _126.Params;
                toJSON(message: _126.Params): unknown;
                fromPartial(object: Partial<_126.Params>): _126.Params;
                fromAmino(object: _126.ParamsAmino): _126.Params;
                toAmino(message: _126.Params): _126.ParamsAmino;
                fromAminoMsg(object: _126.ParamsAminoMsg): _126.Params;
                fromProtoMsg(message: _126.ParamsProtoMsg): _126.Params;
                toProto(message: _126.Params): Uint8Array;
                toProtoMsg(message: _126.Params): _126.ParamsProtoMsg;
            };
        };
    }
    namespace revenue {
        const v1: {
            MsgClientImpl: typeof _271.MsgClientImpl;
            QueryClientImpl: typeof _267.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                revenues(request?: _132.QueryRevenuesRequest): Promise<_132.QueryRevenuesResponse>;
                revenue(request: _132.QueryRevenueRequest): Promise<_132.QueryRevenueResponse>;
                params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
                deployerRevenues(request: _132.QueryDeployerRevenuesRequest): Promise<_132.QueryDeployerRevenuesResponse>;
                withdrawerRevenues(request: _132.QueryWithdrawerRevenuesRequest): Promise<_132.QueryWithdrawerRevenuesResponse>;
            };
            LCDQueryClient: typeof _262.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerRevenue(value: _134.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRevenue(value: _134.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelRevenue(value: _134.MsgCancelRevenue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _134.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerRevenue(value: _134.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: _134.MsgRegisterRevenue;
                    };
                    updateRevenue(value: _134.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: _134.MsgUpdateRevenue;
                    };
                    cancelRevenue(value: _134.MsgCancelRevenue): {
                        typeUrl: string;
                        value: _134.MsgCancelRevenue;
                    };
                    updateParams(value: _134.MsgUpdateParams): {
                        typeUrl: string;
                        value: _134.MsgUpdateParams;
                    };
                };
                toJSON: {
                    registerRevenue(value: _134.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateRevenue(value: _134.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelRevenue(value: _134.MsgCancelRevenue): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _134.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerRevenue(value: any): {
                        typeUrl: string;
                        value: _134.MsgRegisterRevenue;
                    };
                    updateRevenue(value: any): {
                        typeUrl: string;
                        value: _134.MsgUpdateRevenue;
                    };
                    cancelRevenue(value: any): {
                        typeUrl: string;
                        value: _134.MsgCancelRevenue;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _134.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    registerRevenue(value: _134.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: _134.MsgRegisterRevenue;
                    };
                    updateRevenue(value: _134.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: _134.MsgUpdateRevenue;
                    };
                    cancelRevenue(value: _134.MsgCancelRevenue): {
                        typeUrl: string;
                        value: _134.MsgCancelRevenue;
                    };
                    updateParams(value: _134.MsgUpdateParams): {
                        typeUrl: string;
                        value: _134.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.revenue.v1.MsgRegisterRevenue": {
                    aminoType: string;
                    toAmino: (message: _134.MsgRegisterRevenue) => _134.MsgRegisterRevenueAmino;
                    fromAmino: (object: _134.MsgRegisterRevenueAmino) => _134.MsgRegisterRevenue;
                };
                "/evmos.revenue.v1.MsgUpdateRevenue": {
                    aminoType: string;
                    toAmino: (message: _134.MsgUpdateRevenue) => _134.MsgUpdateRevenueAmino;
                    fromAmino: (object: _134.MsgUpdateRevenueAmino) => _134.MsgUpdateRevenue;
                };
                "/evmos.revenue.v1.MsgCancelRevenue": {
                    aminoType: string;
                    toAmino: (message: _134.MsgCancelRevenue) => _134.MsgCancelRevenueAmino;
                    fromAmino: (object: _134.MsgCancelRevenueAmino) => _134.MsgCancelRevenue;
                };
                "/evmos.revenue.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _134.MsgUpdateParams) => _134.MsgUpdateParamsAmino;
                    fromAmino: (object: _134.MsgUpdateParamsAmino) => _134.MsgUpdateParams;
                };
            };
            MsgRegisterRevenue: {
                typeUrl: string;
                encode(message: _134.MsgRegisterRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgRegisterRevenue;
                fromJSON(object: any): _134.MsgRegisterRevenue;
                toJSON(message: _134.MsgRegisterRevenue): unknown;
                fromPartial(object: Partial<_134.MsgRegisterRevenue>): _134.MsgRegisterRevenue;
                fromAmino(object: _134.MsgRegisterRevenueAmino): _134.MsgRegisterRevenue;
                toAmino(message: _134.MsgRegisterRevenue): _134.MsgRegisterRevenueAmino;
                fromAminoMsg(object: _134.MsgRegisterRevenueAminoMsg): _134.MsgRegisterRevenue;
                fromProtoMsg(message: _134.MsgRegisterRevenueProtoMsg): _134.MsgRegisterRevenue;
                toProto(message: _134.MsgRegisterRevenue): Uint8Array;
                toProtoMsg(message: _134.MsgRegisterRevenue): _134.MsgRegisterRevenueProtoMsg;
            };
            MsgRegisterRevenueResponse: {
                typeUrl: string;
                encode(_: _134.MsgRegisterRevenueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgRegisterRevenueResponse;
                fromJSON(_: any): _134.MsgRegisterRevenueResponse;
                toJSON(_: _134.MsgRegisterRevenueResponse): unknown;
                fromPartial(_: Partial<_134.MsgRegisterRevenueResponse>): _134.MsgRegisterRevenueResponse;
                fromAmino(_: _134.MsgRegisterRevenueResponseAmino): _134.MsgRegisterRevenueResponse;
                toAmino(_: _134.MsgRegisterRevenueResponse): _134.MsgRegisterRevenueResponseAmino;
                fromAminoMsg(object: _134.MsgRegisterRevenueResponseAminoMsg): _134.MsgRegisterRevenueResponse;
                fromProtoMsg(message: _134.MsgRegisterRevenueResponseProtoMsg): _134.MsgRegisterRevenueResponse;
                toProto(message: _134.MsgRegisterRevenueResponse): Uint8Array;
                toProtoMsg(message: _134.MsgRegisterRevenueResponse): _134.MsgRegisterRevenueResponseProtoMsg;
            };
            MsgUpdateRevenue: {
                typeUrl: string;
                encode(message: _134.MsgUpdateRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgUpdateRevenue;
                fromJSON(object: any): _134.MsgUpdateRevenue;
                toJSON(message: _134.MsgUpdateRevenue): unknown;
                fromPartial(object: Partial<_134.MsgUpdateRevenue>): _134.MsgUpdateRevenue;
                fromAmino(object: _134.MsgUpdateRevenueAmino): _134.MsgUpdateRevenue;
                toAmino(message: _134.MsgUpdateRevenue): _134.MsgUpdateRevenueAmino;
                fromAminoMsg(object: _134.MsgUpdateRevenueAminoMsg): _134.MsgUpdateRevenue;
                fromProtoMsg(message: _134.MsgUpdateRevenueProtoMsg): _134.MsgUpdateRevenue;
                toProto(message: _134.MsgUpdateRevenue): Uint8Array;
                toProtoMsg(message: _134.MsgUpdateRevenue): _134.MsgUpdateRevenueProtoMsg;
            };
            MsgUpdateRevenueResponse: {
                typeUrl: string;
                encode(_: _134.MsgUpdateRevenueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgUpdateRevenueResponse;
                fromJSON(_: any): _134.MsgUpdateRevenueResponse;
                toJSON(_: _134.MsgUpdateRevenueResponse): unknown;
                fromPartial(_: Partial<_134.MsgUpdateRevenueResponse>): _134.MsgUpdateRevenueResponse;
                fromAmino(_: _134.MsgUpdateRevenueResponseAmino): _134.MsgUpdateRevenueResponse;
                toAmino(_: _134.MsgUpdateRevenueResponse): _134.MsgUpdateRevenueResponseAmino;
                fromAminoMsg(object: _134.MsgUpdateRevenueResponseAminoMsg): _134.MsgUpdateRevenueResponse;
                fromProtoMsg(message: _134.MsgUpdateRevenueResponseProtoMsg): _134.MsgUpdateRevenueResponse;
                toProto(message: _134.MsgUpdateRevenueResponse): Uint8Array;
                toProtoMsg(message: _134.MsgUpdateRevenueResponse): _134.MsgUpdateRevenueResponseProtoMsg;
            };
            MsgCancelRevenue: {
                typeUrl: string;
                encode(message: _134.MsgCancelRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgCancelRevenue;
                fromJSON(object: any): _134.MsgCancelRevenue;
                toJSON(message: _134.MsgCancelRevenue): unknown;
                fromPartial(object: Partial<_134.MsgCancelRevenue>): _134.MsgCancelRevenue;
                fromAmino(object: _134.MsgCancelRevenueAmino): _134.MsgCancelRevenue;
                toAmino(message: _134.MsgCancelRevenue): _134.MsgCancelRevenueAmino;
                fromAminoMsg(object: _134.MsgCancelRevenueAminoMsg): _134.MsgCancelRevenue;
                fromProtoMsg(message: _134.MsgCancelRevenueProtoMsg): _134.MsgCancelRevenue;
                toProto(message: _134.MsgCancelRevenue): Uint8Array;
                toProtoMsg(message: _134.MsgCancelRevenue): _134.MsgCancelRevenueProtoMsg;
            };
            MsgCancelRevenueResponse: {
                typeUrl: string;
                encode(_: _134.MsgCancelRevenueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgCancelRevenueResponse;
                fromJSON(_: any): _134.MsgCancelRevenueResponse;
                toJSON(_: _134.MsgCancelRevenueResponse): unknown;
                fromPartial(_: Partial<_134.MsgCancelRevenueResponse>): _134.MsgCancelRevenueResponse;
                fromAmino(_: _134.MsgCancelRevenueResponseAmino): _134.MsgCancelRevenueResponse;
                toAmino(_: _134.MsgCancelRevenueResponse): _134.MsgCancelRevenueResponseAmino;
                fromAminoMsg(object: _134.MsgCancelRevenueResponseAminoMsg): _134.MsgCancelRevenueResponse;
                fromProtoMsg(message: _134.MsgCancelRevenueResponseProtoMsg): _134.MsgCancelRevenueResponse;
                toProto(message: _134.MsgCancelRevenueResponse): Uint8Array;
                toProtoMsg(message: _134.MsgCancelRevenueResponse): _134.MsgCancelRevenueResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _134.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgUpdateParams;
                fromJSON(object: any): _134.MsgUpdateParams;
                toJSON(message: _134.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_134.MsgUpdateParams>): _134.MsgUpdateParams;
                fromAmino(object: _134.MsgUpdateParamsAmino): _134.MsgUpdateParams;
                toAmino(message: _134.MsgUpdateParams): _134.MsgUpdateParamsAmino;
                fromAminoMsg(object: _134.MsgUpdateParamsAminoMsg): _134.MsgUpdateParams;
                fromProtoMsg(message: _134.MsgUpdateParamsProtoMsg): _134.MsgUpdateParams;
                toProto(message: _134.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _134.MsgUpdateParams): _134.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _134.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgUpdateParamsResponse;
                fromJSON(_: any): _134.MsgUpdateParamsResponse;
                toJSON(_: _134.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_134.MsgUpdateParamsResponse>): _134.MsgUpdateParamsResponse;
                fromAmino(_: _134.MsgUpdateParamsResponseAmino): _134.MsgUpdateParamsResponse;
                toAmino(_: _134.MsgUpdateParamsResponse): _134.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _134.MsgUpdateParamsResponseAminoMsg): _134.MsgUpdateParamsResponse;
                fromProtoMsg(message: _134.MsgUpdateParamsResponseProtoMsg): _134.MsgUpdateParamsResponse;
                toProto(message: _134.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _134.MsgUpdateParamsResponse): _134.MsgUpdateParamsResponseProtoMsg;
            };
            Revenue: {
                typeUrl: string;
                encode(message: _133.Revenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Revenue;
                fromJSON(object: any): _133.Revenue;
                toJSON(message: _133.Revenue): unknown;
                fromPartial(object: Partial<_133.Revenue>): _133.Revenue;
                fromAmino(object: _133.RevenueAmino): _133.Revenue;
                toAmino(message: _133.Revenue): _133.RevenueAmino;
                fromAminoMsg(object: _133.RevenueAminoMsg): _133.Revenue;
                fromProtoMsg(message: _133.RevenueProtoMsg): _133.Revenue;
                toProto(message: _133.Revenue): Uint8Array;
                toProtoMsg(message: _133.Revenue): _133.RevenueProtoMsg;
            };
            QueryRevenuesRequest: {
                typeUrl: string;
                encode(message: _132.QueryRevenuesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryRevenuesRequest;
                fromJSON(object: any): _132.QueryRevenuesRequest;
                toJSON(message: _132.QueryRevenuesRequest): unknown;
                fromPartial(object: Partial<_132.QueryRevenuesRequest>): _132.QueryRevenuesRequest;
                fromAmino(object: _132.QueryRevenuesRequestAmino): _132.QueryRevenuesRequest;
                toAmino(message: _132.QueryRevenuesRequest): _132.QueryRevenuesRequestAmino;
                fromAminoMsg(object: _132.QueryRevenuesRequestAminoMsg): _132.QueryRevenuesRequest;
                fromProtoMsg(message: _132.QueryRevenuesRequestProtoMsg): _132.QueryRevenuesRequest;
                toProto(message: _132.QueryRevenuesRequest): Uint8Array;
                toProtoMsg(message: _132.QueryRevenuesRequest): _132.QueryRevenuesRequestProtoMsg;
            };
            QueryRevenuesResponse: {
                typeUrl: string;
                encode(message: _132.QueryRevenuesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryRevenuesResponse;
                fromJSON(object: any): _132.QueryRevenuesResponse;
                toJSON(message: _132.QueryRevenuesResponse): unknown;
                fromPartial(object: Partial<_132.QueryRevenuesResponse>): _132.QueryRevenuesResponse;
                fromAmino(object: _132.QueryRevenuesResponseAmino): _132.QueryRevenuesResponse;
                toAmino(message: _132.QueryRevenuesResponse): _132.QueryRevenuesResponseAmino;
                fromAminoMsg(object: _132.QueryRevenuesResponseAminoMsg): _132.QueryRevenuesResponse;
                fromProtoMsg(message: _132.QueryRevenuesResponseProtoMsg): _132.QueryRevenuesResponse;
                toProto(message: _132.QueryRevenuesResponse): Uint8Array;
                toProtoMsg(message: _132.QueryRevenuesResponse): _132.QueryRevenuesResponseProtoMsg;
            };
            QueryRevenueRequest: {
                typeUrl: string;
                encode(message: _132.QueryRevenueRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryRevenueRequest;
                fromJSON(object: any): _132.QueryRevenueRequest;
                toJSON(message: _132.QueryRevenueRequest): unknown;
                fromPartial(object: Partial<_132.QueryRevenueRequest>): _132.QueryRevenueRequest;
                fromAmino(object: _132.QueryRevenueRequestAmino): _132.QueryRevenueRequest;
                toAmino(message: _132.QueryRevenueRequest): _132.QueryRevenueRequestAmino;
                fromAminoMsg(object: _132.QueryRevenueRequestAminoMsg): _132.QueryRevenueRequest;
                fromProtoMsg(message: _132.QueryRevenueRequestProtoMsg): _132.QueryRevenueRequest;
                toProto(message: _132.QueryRevenueRequest): Uint8Array;
                toProtoMsg(message: _132.QueryRevenueRequest): _132.QueryRevenueRequestProtoMsg;
            };
            QueryRevenueResponse: {
                typeUrl: string;
                encode(message: _132.QueryRevenueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryRevenueResponse;
                fromJSON(object: any): _132.QueryRevenueResponse;
                toJSON(message: _132.QueryRevenueResponse): unknown;
                fromPartial(object: Partial<_132.QueryRevenueResponse>): _132.QueryRevenueResponse;
                fromAmino(object: _132.QueryRevenueResponseAmino): _132.QueryRevenueResponse;
                toAmino(message: _132.QueryRevenueResponse): _132.QueryRevenueResponseAmino;
                fromAminoMsg(object: _132.QueryRevenueResponseAminoMsg): _132.QueryRevenueResponse;
                fromProtoMsg(message: _132.QueryRevenueResponseProtoMsg): _132.QueryRevenueResponse;
                toProto(message: _132.QueryRevenueResponse): Uint8Array;
                toProtoMsg(message: _132.QueryRevenueResponse): _132.QueryRevenueResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _132.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryParamsRequest;
                fromJSON(_: any): _132.QueryParamsRequest;
                toJSON(_: _132.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_132.QueryParamsRequest>): _132.QueryParamsRequest;
                fromAmino(_: _132.QueryParamsRequestAmino): _132.QueryParamsRequest;
                toAmino(_: _132.QueryParamsRequest): _132.QueryParamsRequestAmino;
                fromAminoMsg(object: _132.QueryParamsRequestAminoMsg): _132.QueryParamsRequest;
                fromProtoMsg(message: _132.QueryParamsRequestProtoMsg): _132.QueryParamsRequest;
                toProto(message: _132.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _132.QueryParamsRequest): _132.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _132.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryParamsResponse;
                fromJSON(object: any): _132.QueryParamsResponse;
                toJSON(message: _132.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_132.QueryParamsResponse>): _132.QueryParamsResponse;
                fromAmino(object: _132.QueryParamsResponseAmino): _132.QueryParamsResponse;
                toAmino(message: _132.QueryParamsResponse): _132.QueryParamsResponseAmino;
                fromAminoMsg(object: _132.QueryParamsResponseAminoMsg): _132.QueryParamsResponse;
                fromProtoMsg(message: _132.QueryParamsResponseProtoMsg): _132.QueryParamsResponse;
                toProto(message: _132.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _132.QueryParamsResponse): _132.QueryParamsResponseProtoMsg;
            };
            QueryDeployerRevenuesRequest: {
                typeUrl: string;
                encode(message: _132.QueryDeployerRevenuesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryDeployerRevenuesRequest;
                fromJSON(object: any): _132.QueryDeployerRevenuesRequest;
                toJSON(message: _132.QueryDeployerRevenuesRequest): unknown;
                fromPartial(object: Partial<_132.QueryDeployerRevenuesRequest>): _132.QueryDeployerRevenuesRequest;
                fromAmino(object: _132.QueryDeployerRevenuesRequestAmino): _132.QueryDeployerRevenuesRequest;
                toAmino(message: _132.QueryDeployerRevenuesRequest): _132.QueryDeployerRevenuesRequestAmino;
                fromAminoMsg(object: _132.QueryDeployerRevenuesRequestAminoMsg): _132.QueryDeployerRevenuesRequest;
                fromProtoMsg(message: _132.QueryDeployerRevenuesRequestProtoMsg): _132.QueryDeployerRevenuesRequest;
                toProto(message: _132.QueryDeployerRevenuesRequest): Uint8Array;
                toProtoMsg(message: _132.QueryDeployerRevenuesRequest): _132.QueryDeployerRevenuesRequestProtoMsg;
            };
            QueryDeployerRevenuesResponse: {
                typeUrl: string;
                encode(message: _132.QueryDeployerRevenuesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryDeployerRevenuesResponse;
                fromJSON(object: any): _132.QueryDeployerRevenuesResponse;
                toJSON(message: _132.QueryDeployerRevenuesResponse): unknown;
                fromPartial(object: Partial<_132.QueryDeployerRevenuesResponse>): _132.QueryDeployerRevenuesResponse;
                fromAmino(object: _132.QueryDeployerRevenuesResponseAmino): _132.QueryDeployerRevenuesResponse;
                toAmino(message: _132.QueryDeployerRevenuesResponse): _132.QueryDeployerRevenuesResponseAmino;
                fromAminoMsg(object: _132.QueryDeployerRevenuesResponseAminoMsg): _132.QueryDeployerRevenuesResponse;
                fromProtoMsg(message: _132.QueryDeployerRevenuesResponseProtoMsg): _132.QueryDeployerRevenuesResponse;
                toProto(message: _132.QueryDeployerRevenuesResponse): Uint8Array;
                toProtoMsg(message: _132.QueryDeployerRevenuesResponse): _132.QueryDeployerRevenuesResponseProtoMsg;
            };
            QueryWithdrawerRevenuesRequest: {
                typeUrl: string;
                encode(message: _132.QueryWithdrawerRevenuesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryWithdrawerRevenuesRequest;
                fromJSON(object: any): _132.QueryWithdrawerRevenuesRequest;
                toJSON(message: _132.QueryWithdrawerRevenuesRequest): unknown;
                fromPartial(object: Partial<_132.QueryWithdrawerRevenuesRequest>): _132.QueryWithdrawerRevenuesRequest;
                fromAmino(object: _132.QueryWithdrawerRevenuesRequestAmino): _132.QueryWithdrawerRevenuesRequest;
                toAmino(message: _132.QueryWithdrawerRevenuesRequest): _132.QueryWithdrawerRevenuesRequestAmino;
                fromAminoMsg(object: _132.QueryWithdrawerRevenuesRequestAminoMsg): _132.QueryWithdrawerRevenuesRequest;
                fromProtoMsg(message: _132.QueryWithdrawerRevenuesRequestProtoMsg): _132.QueryWithdrawerRevenuesRequest;
                toProto(message: _132.QueryWithdrawerRevenuesRequest): Uint8Array;
                toProtoMsg(message: _132.QueryWithdrawerRevenuesRequest): _132.QueryWithdrawerRevenuesRequestProtoMsg;
            };
            QueryWithdrawerRevenuesResponse: {
                typeUrl: string;
                encode(message: _132.QueryWithdrawerRevenuesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.QueryWithdrawerRevenuesResponse;
                fromJSON(object: any): _132.QueryWithdrawerRevenuesResponse;
                toJSON(message: _132.QueryWithdrawerRevenuesResponse): unknown;
                fromPartial(object: Partial<_132.QueryWithdrawerRevenuesResponse>): _132.QueryWithdrawerRevenuesResponse;
                fromAmino(object: _132.QueryWithdrawerRevenuesResponseAmino): _132.QueryWithdrawerRevenuesResponse;
                toAmino(message: _132.QueryWithdrawerRevenuesResponse): _132.QueryWithdrawerRevenuesResponseAmino;
                fromAminoMsg(object: _132.QueryWithdrawerRevenuesResponseAminoMsg): _132.QueryWithdrawerRevenuesResponse;
                fromProtoMsg(message: _132.QueryWithdrawerRevenuesResponseProtoMsg): _132.QueryWithdrawerRevenuesResponse;
                toProto(message: _132.QueryWithdrawerRevenuesResponse): Uint8Array;
                toProtoMsg(message: _132.QueryWithdrawerRevenuesResponse): _132.QueryWithdrawerRevenuesResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _131.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.GenesisState;
                fromJSON(object: any): _131.GenesisState;
                toJSON(message: _131.GenesisState): unknown;
                fromPartial(object: Partial<_131.GenesisState>): _131.GenesisState;
                fromAmino(object: _131.GenesisStateAmino): _131.GenesisState;
                toAmino(message: _131.GenesisState): _131.GenesisStateAmino;
                fromAminoMsg(object: _131.GenesisStateAminoMsg): _131.GenesisState;
                fromProtoMsg(message: _131.GenesisStateProtoMsg): _131.GenesisState;
                toProto(message: _131.GenesisState): Uint8Array;
                toProtoMsg(message: _131.GenesisState): _131.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _131.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Params;
                fromJSON(object: any): _131.Params;
                toJSON(message: _131.Params): unknown;
                fromPartial(object: Partial<_131.Params>): _131.Params;
                fromAmino(object: _131.ParamsAmino): _131.Params;
                toAmino(message: _131.Params): _131.ParamsAmino;
                fromAminoMsg(object: _131.ParamsAminoMsg): _131.Params;
                fromProtoMsg(message: _131.ParamsProtoMsg): _131.Params;
                toProto(message: _131.Params): Uint8Array;
                toProtoMsg(message: _131.Params): _131.ParamsProtoMsg;
            };
            EventRegisterRevenue: {
                typeUrl: string;
                encode(message: _130.EventRegisterRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.EventRegisterRevenue;
                fromJSON(object: any): _130.EventRegisterRevenue;
                toJSON(message: _130.EventRegisterRevenue): unknown;
                fromPartial(object: Partial<_130.EventRegisterRevenue>): _130.EventRegisterRevenue;
                fromAmino(object: _130.EventRegisterRevenueAmino): _130.EventRegisterRevenue;
                toAmino(message: _130.EventRegisterRevenue): _130.EventRegisterRevenueAmino;
                fromAminoMsg(object: _130.EventRegisterRevenueAminoMsg): _130.EventRegisterRevenue;
                fromProtoMsg(message: _130.EventRegisterRevenueProtoMsg): _130.EventRegisterRevenue;
                toProto(message: _130.EventRegisterRevenue): Uint8Array;
                toProtoMsg(message: _130.EventRegisterRevenue): _130.EventRegisterRevenueProtoMsg;
            };
            EventUpdateRevenue: {
                typeUrl: string;
                encode(message: _130.EventUpdateRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.EventUpdateRevenue;
                fromJSON(object: any): _130.EventUpdateRevenue;
                toJSON(message: _130.EventUpdateRevenue): unknown;
                fromPartial(object: Partial<_130.EventUpdateRevenue>): _130.EventUpdateRevenue;
                fromAmino(object: _130.EventUpdateRevenueAmino): _130.EventUpdateRevenue;
                toAmino(message: _130.EventUpdateRevenue): _130.EventUpdateRevenueAmino;
                fromAminoMsg(object: _130.EventUpdateRevenueAminoMsg): _130.EventUpdateRevenue;
                fromProtoMsg(message: _130.EventUpdateRevenueProtoMsg): _130.EventUpdateRevenue;
                toProto(message: _130.EventUpdateRevenue): Uint8Array;
                toProtoMsg(message: _130.EventUpdateRevenue): _130.EventUpdateRevenueProtoMsg;
            };
            EventCancelRevenue: {
                typeUrl: string;
                encode(message: _130.EventCancelRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.EventCancelRevenue;
                fromJSON(object: any): _130.EventCancelRevenue;
                toJSON(message: _130.EventCancelRevenue): unknown;
                fromPartial(object: Partial<_130.EventCancelRevenue>): _130.EventCancelRevenue;
                fromAmino(object: _130.EventCancelRevenueAmino): _130.EventCancelRevenue;
                toAmino(message: _130.EventCancelRevenue): _130.EventCancelRevenueAmino;
                fromAminoMsg(object: _130.EventCancelRevenueAminoMsg): _130.EventCancelRevenue;
                fromProtoMsg(message: _130.EventCancelRevenueProtoMsg): _130.EventCancelRevenue;
                toProto(message: _130.EventCancelRevenue): Uint8Array;
                toProtoMsg(message: _130.EventCancelRevenue): _130.EventCancelRevenueProtoMsg;
            };
            EventDistributeRevenue: {
                typeUrl: string;
                encode(message: _130.EventDistributeRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.EventDistributeRevenue;
                fromJSON(object: any): _130.EventDistributeRevenue;
                toJSON(message: _130.EventDistributeRevenue): unknown;
                fromPartial(object: Partial<_130.EventDistributeRevenue>): _130.EventDistributeRevenue;
                fromAmino(object: _130.EventDistributeRevenueAmino): _130.EventDistributeRevenue;
                toAmino(message: _130.EventDistributeRevenue): _130.EventDistributeRevenueAmino;
                fromAminoMsg(object: _130.EventDistributeRevenueAminoMsg): _130.EventDistributeRevenue;
                fromProtoMsg(message: _130.EventDistributeRevenueProtoMsg): _130.EventDistributeRevenue;
                toProto(message: _130.EventDistributeRevenue): Uint8Array;
                toProtoMsg(message: _130.EventDistributeRevenue): _130.EventDistributeRevenueProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1: {
            ClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _135.ClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ClawbackVestingAccount;
                fromJSON(object: any): _135.ClawbackVestingAccount;
                toJSON(message: _135.ClawbackVestingAccount): unknown;
                fromPartial(object: Partial<_135.ClawbackVestingAccount>): _135.ClawbackVestingAccount;
                fromAmino(object: _135.ClawbackVestingAccountAmino): _135.ClawbackVestingAccount;
                toAmino(message: _135.ClawbackVestingAccount): _135.ClawbackVestingAccountAmino;
                fromAminoMsg(object: _135.ClawbackVestingAccountAminoMsg): _135.ClawbackVestingAccount;
                fromProtoMsg(message: _135.ClawbackVestingAccountProtoMsg): _135.ClawbackVestingAccount;
                toProto(message: _135.ClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _135.ClawbackVestingAccount): _135.ClawbackVestingAccountProtoMsg;
            };
        };
        const v2: {
            MsgClientImpl: typeof _272.MsgClientImpl;
            QueryClientImpl: typeof _268.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balances(request: _137.QueryBalancesRequest): Promise<_137.QueryBalancesResponse>;
            };
            LCDQueryClient: typeof _263.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClawbackVestingAccount(value: _138.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundVestingAccount(value: _138.MsgFundVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _138.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateVestingFunder(value: _138.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertVestingAccount(value: _138.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClawbackVestingAccount(value: _138.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _138.MsgCreateClawbackVestingAccount;
                    };
                    fundVestingAccount(value: _138.MsgFundVestingAccount): {
                        typeUrl: string;
                        value: _138.MsgFundVestingAccount;
                    };
                    clawback(value: _138.MsgClawback): {
                        typeUrl: string;
                        value: _138.MsgClawback;
                    };
                    updateVestingFunder(value: _138.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: _138.MsgUpdateVestingFunder;
                    };
                    convertVestingAccount(value: _138.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: _138.MsgConvertVestingAccount;
                    };
                };
                toJSON: {
                    createClawbackVestingAccount(value: _138.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundVestingAccount(value: _138.MsgFundVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clawback(value: _138.MsgClawback): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateVestingFunder(value: _138.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: unknown;
                    };
                    convertVestingAccount(value: _138.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClawbackVestingAccount(value: any): {
                        typeUrl: string;
                        value: _138.MsgCreateClawbackVestingAccount;
                    };
                    fundVestingAccount(value: any): {
                        typeUrl: string;
                        value: _138.MsgFundVestingAccount;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _138.MsgClawback;
                    };
                    updateVestingFunder(value: any): {
                        typeUrl: string;
                        value: _138.MsgUpdateVestingFunder;
                    };
                    convertVestingAccount(value: any): {
                        typeUrl: string;
                        value: _138.MsgConvertVestingAccount;
                    };
                };
                fromPartial: {
                    createClawbackVestingAccount(value: _138.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _138.MsgCreateClawbackVestingAccount;
                    };
                    fundVestingAccount(value: _138.MsgFundVestingAccount): {
                        typeUrl: string;
                        value: _138.MsgFundVestingAccount;
                    };
                    clawback(value: _138.MsgClawback): {
                        typeUrl: string;
                        value: _138.MsgClawback;
                    };
                    updateVestingFunder(value: _138.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: _138.MsgUpdateVestingFunder;
                    };
                    convertVestingAccount(value: _138.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: _138.MsgConvertVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/evmos.vesting.v2.MsgCreateClawbackVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _138.MsgCreateClawbackVestingAccount) => _138.MsgCreateClawbackVestingAccountAmino;
                    fromAmino: (object: _138.MsgCreateClawbackVestingAccountAmino) => _138.MsgCreateClawbackVestingAccount;
                };
                "/evmos.vesting.v2.MsgFundVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _138.MsgFundVestingAccount) => _138.MsgFundVestingAccountAmino;
                    fromAmino: (object: _138.MsgFundVestingAccountAmino) => _138.MsgFundVestingAccount;
                };
                "/evmos.vesting.v2.MsgClawback": {
                    aminoType: string;
                    toAmino: (message: _138.MsgClawback) => _138.MsgClawbackAmino;
                    fromAmino: (object: _138.MsgClawbackAmino) => _138.MsgClawback;
                };
                "/evmos.vesting.v2.MsgUpdateVestingFunder": {
                    aminoType: string;
                    toAmino: (message: _138.MsgUpdateVestingFunder) => _138.MsgUpdateVestingFunderAmino;
                    fromAmino: (object: _138.MsgUpdateVestingFunderAmino) => _138.MsgUpdateVestingFunder;
                };
                "/evmos.vesting.v2.MsgConvertVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _138.MsgConvertVestingAccount) => _138.MsgConvertVestingAccountAmino;
                    fromAmino: (object: _138.MsgConvertVestingAccountAmino) => _138.MsgConvertVestingAccount;
                };
            };
            ClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _139.ClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ClawbackVestingAccount;
                fromJSON(object: any): _139.ClawbackVestingAccount;
                toJSON(message: _139.ClawbackVestingAccount): unknown;
                fromPartial(object: Partial<_139.ClawbackVestingAccount>): _139.ClawbackVestingAccount;
                fromAmino(object: _139.ClawbackVestingAccountAmino): _139.ClawbackVestingAccount;
                toAmino(message: _139.ClawbackVestingAccount): _139.ClawbackVestingAccountAmino;
                fromAminoMsg(object: _139.ClawbackVestingAccountAminoMsg): _139.ClawbackVestingAccount;
                fromProtoMsg(message: _139.ClawbackVestingAccountProtoMsg): _139.ClawbackVestingAccount;
                toProto(message: _139.ClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _139.ClawbackVestingAccount): _139.ClawbackVestingAccountProtoMsg;
            };
            ClawbackProposal: {
                typeUrl: string;
                encode(message: _139.ClawbackProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ClawbackProposal;
                fromJSON(object: any): _139.ClawbackProposal;
                toJSON(message: _139.ClawbackProposal): unknown;
                fromPartial(object: Partial<_139.ClawbackProposal>): _139.ClawbackProposal;
                fromAmino(object: _139.ClawbackProposalAmino): _139.ClawbackProposal;
                toAmino(message: _139.ClawbackProposal): _139.ClawbackProposalAmino;
                fromAminoMsg(object: _139.ClawbackProposalAminoMsg): _139.ClawbackProposal;
                fromProtoMsg(message: _139.ClawbackProposalProtoMsg): _139.ClawbackProposal;
                toProto(message: _139.ClawbackProposal): Uint8Array;
                toProtoMsg(message: _139.ClawbackProposal): _139.ClawbackProposalProtoMsg;
            };
            MsgCreateClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _138.MsgCreateClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgCreateClawbackVestingAccount;
                fromJSON(object: any): _138.MsgCreateClawbackVestingAccount;
                toJSON(message: _138.MsgCreateClawbackVestingAccount): unknown;
                fromPartial(object: Partial<_138.MsgCreateClawbackVestingAccount>): _138.MsgCreateClawbackVestingAccount;
                fromAmino(object: _138.MsgCreateClawbackVestingAccountAmino): _138.MsgCreateClawbackVestingAccount;
                toAmino(message: _138.MsgCreateClawbackVestingAccount): _138.MsgCreateClawbackVestingAccountAmino;
                fromAminoMsg(object: _138.MsgCreateClawbackVestingAccountAminoMsg): _138.MsgCreateClawbackVestingAccount;
                fromProtoMsg(message: _138.MsgCreateClawbackVestingAccountProtoMsg): _138.MsgCreateClawbackVestingAccount;
                toProto(message: _138.MsgCreateClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _138.MsgCreateClawbackVestingAccount): _138.MsgCreateClawbackVestingAccountProtoMsg;
            };
            MsgCreateClawbackVestingAccountResponse: {
                typeUrl: string;
                encode(_: _138.MsgCreateClawbackVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgCreateClawbackVestingAccountResponse;
                fromJSON(_: any): _138.MsgCreateClawbackVestingAccountResponse;
                toJSON(_: _138.MsgCreateClawbackVestingAccountResponse): unknown;
                fromPartial(_: Partial<_138.MsgCreateClawbackVestingAccountResponse>): _138.MsgCreateClawbackVestingAccountResponse;
                fromAmino(_: _138.MsgCreateClawbackVestingAccountResponseAmino): _138.MsgCreateClawbackVestingAccountResponse;
                toAmino(_: _138.MsgCreateClawbackVestingAccountResponse): _138.MsgCreateClawbackVestingAccountResponseAmino;
                fromAminoMsg(object: _138.MsgCreateClawbackVestingAccountResponseAminoMsg): _138.MsgCreateClawbackVestingAccountResponse;
                fromProtoMsg(message: _138.MsgCreateClawbackVestingAccountResponseProtoMsg): _138.MsgCreateClawbackVestingAccountResponse;
                toProto(message: _138.MsgCreateClawbackVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _138.MsgCreateClawbackVestingAccountResponse): _138.MsgCreateClawbackVestingAccountResponseProtoMsg;
            };
            MsgFundVestingAccount: {
                typeUrl: string;
                encode(message: _138.MsgFundVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgFundVestingAccount;
                fromJSON(object: any): _138.MsgFundVestingAccount;
                toJSON(message: _138.MsgFundVestingAccount): unknown;
                fromPartial(object: Partial<_138.MsgFundVestingAccount>): _138.MsgFundVestingAccount;
                fromAmino(object: _138.MsgFundVestingAccountAmino): _138.MsgFundVestingAccount;
                toAmino(message: _138.MsgFundVestingAccount): _138.MsgFundVestingAccountAmino;
                fromAminoMsg(object: _138.MsgFundVestingAccountAminoMsg): _138.MsgFundVestingAccount;
                fromProtoMsg(message: _138.MsgFundVestingAccountProtoMsg): _138.MsgFundVestingAccount;
                toProto(message: _138.MsgFundVestingAccount): Uint8Array;
                toProtoMsg(message: _138.MsgFundVestingAccount): _138.MsgFundVestingAccountProtoMsg;
            };
            MsgFundVestingAccountResponse: {
                typeUrl: string;
                encode(_: _138.MsgFundVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgFundVestingAccountResponse;
                fromJSON(_: any): _138.MsgFundVestingAccountResponse;
                toJSON(_: _138.MsgFundVestingAccountResponse): unknown;
                fromPartial(_: Partial<_138.MsgFundVestingAccountResponse>): _138.MsgFundVestingAccountResponse;
                fromAmino(_: _138.MsgFundVestingAccountResponseAmino): _138.MsgFundVestingAccountResponse;
                toAmino(_: _138.MsgFundVestingAccountResponse): _138.MsgFundVestingAccountResponseAmino;
                fromAminoMsg(object: _138.MsgFundVestingAccountResponseAminoMsg): _138.MsgFundVestingAccountResponse;
                fromProtoMsg(message: _138.MsgFundVestingAccountResponseProtoMsg): _138.MsgFundVestingAccountResponse;
                toProto(message: _138.MsgFundVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _138.MsgFundVestingAccountResponse): _138.MsgFundVestingAccountResponseProtoMsg;
            };
            MsgClawback: {
                typeUrl: string;
                encode(message: _138.MsgClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgClawback;
                fromJSON(object: any): _138.MsgClawback;
                toJSON(message: _138.MsgClawback): unknown;
                fromPartial(object: Partial<_138.MsgClawback>): _138.MsgClawback;
                fromAmino(object: _138.MsgClawbackAmino): _138.MsgClawback;
                toAmino(message: _138.MsgClawback): _138.MsgClawbackAmino;
                fromAminoMsg(object: _138.MsgClawbackAminoMsg): _138.MsgClawback;
                fromProtoMsg(message: _138.MsgClawbackProtoMsg): _138.MsgClawback;
                toProto(message: _138.MsgClawback): Uint8Array;
                toProtoMsg(message: _138.MsgClawback): _138.MsgClawbackProtoMsg;
            };
            MsgClawbackResponse: {
                typeUrl: string;
                encode(message: _138.MsgClawbackResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgClawbackResponse;
                fromJSON(object: any): _138.MsgClawbackResponse;
                toJSON(message: _138.MsgClawbackResponse): unknown;
                fromPartial(object: Partial<_138.MsgClawbackResponse>): _138.MsgClawbackResponse;
                fromAmino(object: _138.MsgClawbackResponseAmino): _138.MsgClawbackResponse;
                toAmino(message: _138.MsgClawbackResponse): _138.MsgClawbackResponseAmino;
                fromAminoMsg(object: _138.MsgClawbackResponseAminoMsg): _138.MsgClawbackResponse;
                fromProtoMsg(message: _138.MsgClawbackResponseProtoMsg): _138.MsgClawbackResponse;
                toProto(message: _138.MsgClawbackResponse): Uint8Array;
                toProtoMsg(message: _138.MsgClawbackResponse): _138.MsgClawbackResponseProtoMsg;
            };
            MsgUpdateVestingFunder: {
                typeUrl: string;
                encode(message: _138.MsgUpdateVestingFunder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgUpdateVestingFunder;
                fromJSON(object: any): _138.MsgUpdateVestingFunder;
                toJSON(message: _138.MsgUpdateVestingFunder): unknown;
                fromPartial(object: Partial<_138.MsgUpdateVestingFunder>): _138.MsgUpdateVestingFunder;
                fromAmino(object: _138.MsgUpdateVestingFunderAmino): _138.MsgUpdateVestingFunder;
                toAmino(message: _138.MsgUpdateVestingFunder): _138.MsgUpdateVestingFunderAmino;
                fromAminoMsg(object: _138.MsgUpdateVestingFunderAminoMsg): _138.MsgUpdateVestingFunder;
                fromProtoMsg(message: _138.MsgUpdateVestingFunderProtoMsg): _138.MsgUpdateVestingFunder;
                toProto(message: _138.MsgUpdateVestingFunder): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateVestingFunder): _138.MsgUpdateVestingFunderProtoMsg;
            };
            MsgUpdateVestingFunderResponse: {
                typeUrl: string;
                encode(_: _138.MsgUpdateVestingFunderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgUpdateVestingFunderResponse;
                fromJSON(_: any): _138.MsgUpdateVestingFunderResponse;
                toJSON(_: _138.MsgUpdateVestingFunderResponse): unknown;
                fromPartial(_: Partial<_138.MsgUpdateVestingFunderResponse>): _138.MsgUpdateVestingFunderResponse;
                fromAmino(_: _138.MsgUpdateVestingFunderResponseAmino): _138.MsgUpdateVestingFunderResponse;
                toAmino(_: _138.MsgUpdateVestingFunderResponse): _138.MsgUpdateVestingFunderResponseAmino;
                fromAminoMsg(object: _138.MsgUpdateVestingFunderResponseAminoMsg): _138.MsgUpdateVestingFunderResponse;
                fromProtoMsg(message: _138.MsgUpdateVestingFunderResponseProtoMsg): _138.MsgUpdateVestingFunderResponse;
                toProto(message: _138.MsgUpdateVestingFunderResponse): Uint8Array;
                toProtoMsg(message: _138.MsgUpdateVestingFunderResponse): _138.MsgUpdateVestingFunderResponseProtoMsg;
            };
            MsgConvertVestingAccount: {
                typeUrl: string;
                encode(message: _138.MsgConvertVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgConvertVestingAccount;
                fromJSON(object: any): _138.MsgConvertVestingAccount;
                toJSON(message: _138.MsgConvertVestingAccount): unknown;
                fromPartial(object: Partial<_138.MsgConvertVestingAccount>): _138.MsgConvertVestingAccount;
                fromAmino(object: _138.MsgConvertVestingAccountAmino): _138.MsgConvertVestingAccount;
                toAmino(message: _138.MsgConvertVestingAccount): _138.MsgConvertVestingAccountAmino;
                fromAminoMsg(object: _138.MsgConvertVestingAccountAminoMsg): _138.MsgConvertVestingAccount;
                fromProtoMsg(message: _138.MsgConvertVestingAccountProtoMsg): _138.MsgConvertVestingAccount;
                toProto(message: _138.MsgConvertVestingAccount): Uint8Array;
                toProtoMsg(message: _138.MsgConvertVestingAccount): _138.MsgConvertVestingAccountProtoMsg;
            };
            MsgConvertVestingAccountResponse: {
                typeUrl: string;
                encode(_: _138.MsgConvertVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MsgConvertVestingAccountResponse;
                fromJSON(_: any): _138.MsgConvertVestingAccountResponse;
                toJSON(_: _138.MsgConvertVestingAccountResponse): unknown;
                fromPartial(_: Partial<_138.MsgConvertVestingAccountResponse>): _138.MsgConvertVestingAccountResponse;
                fromAmino(_: _138.MsgConvertVestingAccountResponseAmino): _138.MsgConvertVestingAccountResponse;
                toAmino(_: _138.MsgConvertVestingAccountResponse): _138.MsgConvertVestingAccountResponseAmino;
                fromAminoMsg(object: _138.MsgConvertVestingAccountResponseAminoMsg): _138.MsgConvertVestingAccountResponse;
                fromProtoMsg(message: _138.MsgConvertVestingAccountResponseProtoMsg): _138.MsgConvertVestingAccountResponse;
                toProto(message: _138.MsgConvertVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _138.MsgConvertVestingAccountResponse): _138.MsgConvertVestingAccountResponseProtoMsg;
            };
            QueryBalancesRequest: {
                typeUrl: string;
                encode(message: _137.QueryBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryBalancesRequest;
                fromJSON(object: any): _137.QueryBalancesRequest;
                toJSON(message: _137.QueryBalancesRequest): unknown;
                fromPartial(object: Partial<_137.QueryBalancesRequest>): _137.QueryBalancesRequest;
                fromAmino(object: _137.QueryBalancesRequestAmino): _137.QueryBalancesRequest;
                toAmino(message: _137.QueryBalancesRequest): _137.QueryBalancesRequestAmino;
                fromAminoMsg(object: _137.QueryBalancesRequestAminoMsg): _137.QueryBalancesRequest;
                fromProtoMsg(message: _137.QueryBalancesRequestProtoMsg): _137.QueryBalancesRequest;
                toProto(message: _137.QueryBalancesRequest): Uint8Array;
                toProtoMsg(message: _137.QueryBalancesRequest): _137.QueryBalancesRequestProtoMsg;
            };
            QueryBalancesResponse: {
                typeUrl: string;
                encode(message: _137.QueryBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryBalancesResponse;
                fromJSON(object: any): _137.QueryBalancesResponse;
                toJSON(message: _137.QueryBalancesResponse): unknown;
                fromPartial(object: Partial<_137.QueryBalancesResponse>): _137.QueryBalancesResponse;
                fromAmino(object: _137.QueryBalancesResponseAmino): _137.QueryBalancesResponse;
                toAmino(message: _137.QueryBalancesResponse): _137.QueryBalancesResponseAmino;
                fromAminoMsg(object: _137.QueryBalancesResponseAminoMsg): _137.QueryBalancesResponse;
                fromProtoMsg(message: _137.QueryBalancesResponseProtoMsg): _137.QueryBalancesResponse;
                toProto(message: _137.QueryBalancesResponse): Uint8Array;
                toProtoMsg(message: _137.QueryBalancesResponse): _137.QueryBalancesResponseProtoMsg;
            };
            EventCreateClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _136.EventCreateClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EventCreateClawbackVestingAccount;
                fromJSON(object: any): _136.EventCreateClawbackVestingAccount;
                toJSON(message: _136.EventCreateClawbackVestingAccount): unknown;
                fromPartial(object: Partial<_136.EventCreateClawbackVestingAccount>): _136.EventCreateClawbackVestingAccount;
                fromAmino(object: _136.EventCreateClawbackVestingAccountAmino): _136.EventCreateClawbackVestingAccount;
                toAmino(message: _136.EventCreateClawbackVestingAccount): _136.EventCreateClawbackVestingAccountAmino;
                fromAminoMsg(object: _136.EventCreateClawbackVestingAccountAminoMsg): _136.EventCreateClawbackVestingAccount;
                fromProtoMsg(message: _136.EventCreateClawbackVestingAccountProtoMsg): _136.EventCreateClawbackVestingAccount;
                toProto(message: _136.EventCreateClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _136.EventCreateClawbackVestingAccount): _136.EventCreateClawbackVestingAccountProtoMsg;
            };
            EventFundVestingAccount: {
                typeUrl: string;
                encode(message: _136.EventFundVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EventFundVestingAccount;
                fromJSON(object: any): _136.EventFundVestingAccount;
                toJSON(message: _136.EventFundVestingAccount): unknown;
                fromPartial(object: Partial<_136.EventFundVestingAccount>): _136.EventFundVestingAccount;
                fromAmino(object: _136.EventFundVestingAccountAmino): _136.EventFundVestingAccount;
                toAmino(message: _136.EventFundVestingAccount): _136.EventFundVestingAccountAmino;
                fromAminoMsg(object: _136.EventFundVestingAccountAminoMsg): _136.EventFundVestingAccount;
                fromProtoMsg(message: _136.EventFundVestingAccountProtoMsg): _136.EventFundVestingAccount;
                toProto(message: _136.EventFundVestingAccount): Uint8Array;
                toProtoMsg(message: _136.EventFundVestingAccount): _136.EventFundVestingAccountProtoMsg;
            };
            EventClawback: {
                typeUrl: string;
                encode(message: _136.EventClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EventClawback;
                fromJSON(object: any): _136.EventClawback;
                toJSON(message: _136.EventClawback): unknown;
                fromPartial(object: Partial<_136.EventClawback>): _136.EventClawback;
                fromAmino(object: _136.EventClawbackAmino): _136.EventClawback;
                toAmino(message: _136.EventClawback): _136.EventClawbackAmino;
                fromAminoMsg(object: _136.EventClawbackAminoMsg): _136.EventClawback;
                fromProtoMsg(message: _136.EventClawbackProtoMsg): _136.EventClawback;
                toProto(message: _136.EventClawback): Uint8Array;
                toProtoMsg(message: _136.EventClawback): _136.EventClawbackProtoMsg;
            };
            EventUpdateVestingFunder: {
                typeUrl: string;
                encode(message: _136.EventUpdateVestingFunder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.EventUpdateVestingFunder;
                fromJSON(object: any): _136.EventUpdateVestingFunder;
                toJSON(message: _136.EventUpdateVestingFunder): unknown;
                fromPartial(object: Partial<_136.EventUpdateVestingFunder>): _136.EventUpdateVestingFunder;
                fromAmino(object: _136.EventUpdateVestingFunderAmino): _136.EventUpdateVestingFunder;
                toAmino(message: _136.EventUpdateVestingFunder): _136.EventUpdateVestingFunderAmino;
                fromAminoMsg(object: _136.EventUpdateVestingFunderAminoMsg): _136.EventUpdateVestingFunder;
                fromProtoMsg(message: _136.EventUpdateVestingFunderProtoMsg): _136.EventUpdateVestingFunder;
                toProto(message: _136.EventUpdateVestingFunder): Uint8Array;
                toProtoMsg(message: _136.EventUpdateVestingFunder): _136.EventUpdateVestingFunderProtoMsg;
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
                    v1: _269.MsgClientImpl;
                };
                inflation: {
                    v1: _270.MsgClientImpl;
                };
                revenue: {
                    v1: _271.MsgClientImpl;
                };
                vesting: {
                    v2: _272.MsgClientImpl;
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
                        epochInfos(request?: _118.QueryEpochsInfoRequest): Promise<_118.QueryEpochsInfoResponse>;
                        currentEpoch(request: _118.QueryCurrentEpochRequest): Promise<_118.QueryCurrentEpochResponse>;
                    };
                };
                erc20: {
                    v1: {
                        tokenPairs(request?: _122.QueryTokenPairsRequest): Promise<_122.QueryTokenPairsResponse>;
                        tokenPair(request: _122.QueryTokenPairRequest): Promise<_122.QueryTokenPairResponse>;
                        params(request?: _122.QueryParamsRequest): Promise<_122.QueryParamsResponse>;
                    };
                };
                inflation: {
                    v1: {
                        period(request?: _128.QueryPeriodRequest): Promise<_128.QueryPeriodResponse>;
                        epochMintProvision(request?: _128.QueryEpochMintProvisionRequest): Promise<_128.QueryEpochMintProvisionResponse>;
                        skippedEpochs(request?: _128.QuerySkippedEpochsRequest): Promise<_128.QuerySkippedEpochsResponse>;
                        circulatingSupply(request?: _128.QueryCirculatingSupplyRequest): Promise<_128.QueryCirculatingSupplyResponse>;
                        inflationRate(request?: _128.QueryInflationRateRequest): Promise<_128.QueryInflationRateResponse>;
                        params(request?: _128.QueryParamsRequest): Promise<_128.QueryParamsResponse>;
                    };
                };
                revenue: {
                    v1: {
                        revenues(request?: _132.QueryRevenuesRequest): Promise<_132.QueryRevenuesResponse>;
                        revenue(request: _132.QueryRevenueRequest): Promise<_132.QueryRevenueResponse>;
                        params(request?: _132.QueryParamsRequest): Promise<_132.QueryParamsResponse>;
                        deployerRevenues(request: _132.QueryDeployerRevenuesRequest): Promise<_132.QueryDeployerRevenuesResponse>;
                        withdrawerRevenues(request: _132.QueryWithdrawerRevenuesRequest): Promise<_132.QueryWithdrawerRevenuesResponse>;
                    };
                };
                vesting: {
                    v2: {
                        balances(request: _137.QueryBalancesRequest): Promise<_137.QueryBalancesResponse>;
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
                    v1: _259.LCDQueryClient;
                };
                erc20: {
                    v1: _260.LCDQueryClient;
                };
                inflation: {
                    v1: _261.LCDQueryClient;
                };
                revenue: {
                    v1: _262.LCDQueryClient;
                };
                vesting: {
                    v2: _263.LCDQueryClient;
                };
            };
        }>;
    };
}
