import * as _102 from "./crypto/v1/ethsecp256k1/keys";
import * as _103 from "./evm/v1/events";
import * as _104 from "./evm/v1/evm";
import * as _105 from "./evm/v1/genesis";
import * as _106 from "./evm/v1/query";
import * as _107 from "./evm/v1/tx";
import * as _108 from "./feemarket/v1/events";
import * as _109 from "./feemarket/v1/feemarket";
import * as _110 from "./feemarket/v1/genesis";
import * as _111 from "./feemarket/v1/query";
import * as _112 from "./feemarket/v1/tx";
import * as _113 from "./types/v1/account";
import * as _114 from "./types/v1/dynamic_fee";
import * as _115 from "./types/v1/indexer";
import * as _116 from "./types/v1/web3";
import * as _245 from "./evm/v1/query.lcd";
import * as _246 from "./feemarket/v1/query.lcd";
import * as _247 from "./evm/v1/query.rpc.Query";
import * as _248 from "./feemarket/v1/query.rpc.Query";
import * as _249 from "./evm/v1/tx.rpc.msg";
import * as _250 from "./feemarket/v1/tx.rpc.msg";
export declare namespace ethermint {
    namespace crypto {
        namespace v1 {
            const ethsecp256k1: {
                PubKey: {
                    typeUrl: string;
                    encode(message: _102.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.PubKey;
                    fromJSON(object: any): _102.PubKey;
                    toJSON(message: _102.PubKey): unknown;
                    fromPartial(object: Partial<_102.PubKey>): _102.PubKey;
                    fromAmino(object: _102.PubKeyAmino): _102.PubKey;
                    toAmino(message: _102.PubKey): _102.PubKeyAmino;
                    fromAminoMsg(object: _102.PubKeyAminoMsg): _102.PubKey;
                    fromProtoMsg(message: _102.PubKeyProtoMsg): _102.PubKey;
                    toProto(message: _102.PubKey): Uint8Array;
                    toProtoMsg(message: _102.PubKey): _102.PubKeyProtoMsg;
                };
                PrivKey: {
                    typeUrl: string;
                    encode(message: _102.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.PrivKey;
                    fromJSON(object: any): _102.PrivKey;
                    toJSON(message: _102.PrivKey): unknown;
                    fromPartial(object: Partial<_102.PrivKey>): _102.PrivKey;
                    fromAmino(object: _102.PrivKeyAmino): _102.PrivKey;
                    toAmino(message: _102.PrivKey): _102.PrivKeyAmino;
                    fromAminoMsg(object: _102.PrivKeyAminoMsg): _102.PrivKey;
                    fromProtoMsg(message: _102.PrivKeyProtoMsg): _102.PrivKey;
                    toProto(message: _102.PrivKey): Uint8Array;
                    toProtoMsg(message: _102.PrivKey): _102.PrivKeyProtoMsg;
                };
            };
        }
    }
    namespace evm {
        const v1: {
            MsgClientImpl: typeof _249.MsgClientImpl;
            QueryClientImpl: typeof _247.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                account(request: _106.QueryAccountRequest): Promise<_106.QueryAccountResponse>;
                cosmosAccount(request: _106.QueryCosmosAccountRequest): Promise<_106.QueryCosmosAccountResponse>;
                validatorAccount(request: _106.QueryValidatorAccountRequest): Promise<_106.QueryValidatorAccountResponse>;
                balance(request: _106.QueryBalanceRequest): Promise<_106.QueryBalanceResponse>;
                storage(request: _106.QueryStorageRequest): Promise<_106.QueryStorageResponse>;
                code(request: _106.QueryCodeRequest): Promise<_106.QueryCodeResponse>;
                params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                ethCall(request: _106.EthCallRequest): Promise<_107.MsgEthereumTxResponse>;
                estimateGas(request: _106.EthCallRequest): Promise<_106.EstimateGasResponse>;
                traceTx(request: _106.QueryTraceTxRequest): Promise<_106.QueryTraceTxResponse>;
                traceBlock(request: _106.QueryTraceBlockRequest): Promise<_106.QueryTraceBlockResponse>;
                baseFee(request?: _106.QueryBaseFeeRequest): Promise<_106.QueryBaseFeeResponse>;
            };
            LCDQueryClient: typeof _245.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    ethereumTx(value: _107.MsgEthereumTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    ethereumTx(value: _107.MsgEthereumTx): {
                        typeUrl: string;
                        value: _107.MsgEthereumTx;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: _107.MsgUpdateParams;
                    };
                };
                toJSON: {
                    ethereumTx(value: _107.MsgEthereumTx): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    ethereumTx(value: any): {
                        typeUrl: string;
                        value: _107.MsgEthereumTx;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _107.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    ethereumTx(value: _107.MsgEthereumTx): {
                        typeUrl: string;
                        value: _107.MsgEthereumTx;
                    };
                    updateParams(value: _107.MsgUpdateParams): {
                        typeUrl: string;
                        value: _107.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/ethermint.evm.v1.MsgEthereumTx": {
                    aminoType: string;
                    toAmino: (message: _107.MsgEthereumTx) => _107.MsgEthereumTxAmino;
                    fromAmino: (object: _107.MsgEthereumTxAmino) => _107.MsgEthereumTx;
                };
                "/ethermint.evm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _107.MsgUpdateParams) => _107.MsgUpdateParamsAmino;
                    fromAmino: (object: _107.MsgUpdateParamsAmino) => _107.MsgUpdateParams;
                };
            };
            MsgEthereumTx: {
                typeUrl: string;
                encode(message: _107.MsgEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgEthereumTx;
                fromJSON(object: any): _107.MsgEthereumTx;
                toJSON(message: _107.MsgEthereumTx): unknown;
                fromPartial(object: Partial<_107.MsgEthereumTx>): _107.MsgEthereumTx;
                fromAmino(object: _107.MsgEthereumTxAmino): _107.MsgEthereumTx;
                toAmino(message: _107.MsgEthereumTx): _107.MsgEthereumTxAmino;
                fromAminoMsg(object: _107.MsgEthereumTxAminoMsg): _107.MsgEthereumTx;
                fromProtoMsg(message: _107.MsgEthereumTxProtoMsg): _107.MsgEthereumTx;
                toProto(message: _107.MsgEthereumTx): Uint8Array;
                toProtoMsg(message: _107.MsgEthereumTx): _107.MsgEthereumTxProtoMsg;
            };
            LegacyTx: {
                typeUrl: string;
                encode(message: _107.LegacyTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.LegacyTx;
                fromJSON(object: any): _107.LegacyTx;
                toJSON(message: _107.LegacyTx): unknown;
                fromPartial(object: Partial<_107.LegacyTx>): _107.LegacyTx;
                fromAmino(object: _107.LegacyTxAmino): _107.LegacyTx;
                toAmino(message: _107.LegacyTx): _107.LegacyTxAmino;
                fromAminoMsg(object: _107.LegacyTxAminoMsg): _107.LegacyTx;
                fromProtoMsg(message: _107.LegacyTxProtoMsg): _107.LegacyTx;
                toProto(message: _107.LegacyTx): Uint8Array;
                toProtoMsg(message: _107.LegacyTx): _107.LegacyTxProtoMsg;
            };
            AccessListTx: {
                typeUrl: string;
                encode(message: _107.AccessListTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.AccessListTx;
                fromJSON(object: any): _107.AccessListTx;
                toJSON(message: _107.AccessListTx): unknown;
                fromPartial(object: Partial<_107.AccessListTx>): _107.AccessListTx;
                fromAmino(object: _107.AccessListTxAmino): _107.AccessListTx;
                toAmino(message: _107.AccessListTx): _107.AccessListTxAmino;
                fromAminoMsg(object: _107.AccessListTxAminoMsg): _107.AccessListTx;
                fromProtoMsg(message: _107.AccessListTxProtoMsg): _107.AccessListTx;
                toProto(message: _107.AccessListTx): Uint8Array;
                toProtoMsg(message: _107.AccessListTx): _107.AccessListTxProtoMsg;
            };
            DynamicFeeTx: {
                typeUrl: string;
                encode(message: _107.DynamicFeeTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.DynamicFeeTx;
                fromJSON(object: any): _107.DynamicFeeTx;
                toJSON(message: _107.DynamicFeeTx): unknown;
                fromPartial(object: Partial<_107.DynamicFeeTx>): _107.DynamicFeeTx;
                fromAmino(object: _107.DynamicFeeTxAmino): _107.DynamicFeeTx;
                toAmino(message: _107.DynamicFeeTx): _107.DynamicFeeTxAmino;
                fromAminoMsg(object: _107.DynamicFeeTxAminoMsg): _107.DynamicFeeTx;
                fromProtoMsg(message: _107.DynamicFeeTxProtoMsg): _107.DynamicFeeTx;
                toProto(message: _107.DynamicFeeTx): Uint8Array;
                toProtoMsg(message: _107.DynamicFeeTx): _107.DynamicFeeTxProtoMsg;
            };
            ExtensionOptionsEthereumTx: {
                typeUrl: string;
                encode(_: _107.ExtensionOptionsEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ExtensionOptionsEthereumTx;
                fromJSON(_: any): _107.ExtensionOptionsEthereumTx;
                toJSON(_: _107.ExtensionOptionsEthereumTx): unknown;
                fromPartial(_: Partial<_107.ExtensionOptionsEthereumTx>): _107.ExtensionOptionsEthereumTx;
                fromAmino(_: _107.ExtensionOptionsEthereumTxAmino): _107.ExtensionOptionsEthereumTx;
                toAmino(_: _107.ExtensionOptionsEthereumTx): _107.ExtensionOptionsEthereumTxAmino;
                fromAminoMsg(object: _107.ExtensionOptionsEthereumTxAminoMsg): _107.ExtensionOptionsEthereumTx;
                fromProtoMsg(message: _107.ExtensionOptionsEthereumTxProtoMsg): _107.ExtensionOptionsEthereumTx;
                toProto(message: _107.ExtensionOptionsEthereumTx): Uint8Array;
                toProtoMsg(message: _107.ExtensionOptionsEthereumTx): _107.ExtensionOptionsEthereumTxProtoMsg;
            };
            MsgEthereumTxResponse: {
                typeUrl: string;
                encode(message: _107.MsgEthereumTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgEthereumTxResponse;
                fromJSON(object: any): _107.MsgEthereumTxResponse;
                toJSON(message: _107.MsgEthereumTxResponse): unknown;
                fromPartial(object: Partial<_107.MsgEthereumTxResponse>): _107.MsgEthereumTxResponse;
                fromAmino(object: _107.MsgEthereumTxResponseAmino): _107.MsgEthereumTxResponse;
                toAmino(message: _107.MsgEthereumTxResponse): _107.MsgEthereumTxResponseAmino;
                fromAminoMsg(object: _107.MsgEthereumTxResponseAminoMsg): _107.MsgEthereumTxResponse;
                fromProtoMsg(message: _107.MsgEthereumTxResponseProtoMsg): _107.MsgEthereumTxResponse;
                toProto(message: _107.MsgEthereumTxResponse): Uint8Array;
                toProtoMsg(message: _107.MsgEthereumTxResponse): _107.MsgEthereumTxResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _107.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgUpdateParams;
                fromJSON(object: any): _107.MsgUpdateParams;
                toJSON(message: _107.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_107.MsgUpdateParams>): _107.MsgUpdateParams;
                fromAmino(object: _107.MsgUpdateParamsAmino): _107.MsgUpdateParams;
                toAmino(message: _107.MsgUpdateParams): _107.MsgUpdateParamsAmino;
                fromAminoMsg(object: _107.MsgUpdateParamsAminoMsg): _107.MsgUpdateParams;
                fromProtoMsg(message: _107.MsgUpdateParamsProtoMsg): _107.MsgUpdateParams;
                toProto(message: _107.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _107.MsgUpdateParams): _107.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _107.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.MsgUpdateParamsResponse;
                fromJSON(_: any): _107.MsgUpdateParamsResponse;
                toJSON(_: _107.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_107.MsgUpdateParamsResponse>): _107.MsgUpdateParamsResponse;
                fromAmino(_: _107.MsgUpdateParamsResponseAmino): _107.MsgUpdateParamsResponse;
                toAmino(_: _107.MsgUpdateParamsResponse): _107.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _107.MsgUpdateParamsResponseAminoMsg): _107.MsgUpdateParamsResponse;
                fromProtoMsg(message: _107.MsgUpdateParamsResponseProtoMsg): _107.MsgUpdateParamsResponse;
                toProto(message: _107.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _107.MsgUpdateParamsResponse): _107.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _106.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryAccountRequest;
                fromJSON(object: any): _106.QueryAccountRequest;
                toJSON(message: _106.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_106.QueryAccountRequest>): _106.QueryAccountRequest;
                fromAmino(object: _106.QueryAccountRequestAmino): _106.QueryAccountRequest;
                toAmino(message: _106.QueryAccountRequest): _106.QueryAccountRequestAmino;
                fromAminoMsg(object: _106.QueryAccountRequestAminoMsg): _106.QueryAccountRequest;
                fromProtoMsg(message: _106.QueryAccountRequestProtoMsg): _106.QueryAccountRequest;
                toProto(message: _106.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _106.QueryAccountRequest): _106.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _106.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryAccountResponse;
                fromJSON(object: any): _106.QueryAccountResponse;
                toJSON(message: _106.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_106.QueryAccountResponse>): _106.QueryAccountResponse;
                fromAmino(object: _106.QueryAccountResponseAmino): _106.QueryAccountResponse;
                toAmino(message: _106.QueryAccountResponse): _106.QueryAccountResponseAmino;
                fromAminoMsg(object: _106.QueryAccountResponseAminoMsg): _106.QueryAccountResponse;
                fromProtoMsg(message: _106.QueryAccountResponseProtoMsg): _106.QueryAccountResponse;
                toProto(message: _106.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _106.QueryAccountResponse): _106.QueryAccountResponseProtoMsg;
            };
            QueryCosmosAccountRequest: {
                typeUrl: string;
                encode(message: _106.QueryCosmosAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryCosmosAccountRequest;
                fromJSON(object: any): _106.QueryCosmosAccountRequest;
                toJSON(message: _106.QueryCosmosAccountRequest): unknown;
                fromPartial(object: Partial<_106.QueryCosmosAccountRequest>): _106.QueryCosmosAccountRequest;
                fromAmino(object: _106.QueryCosmosAccountRequestAmino): _106.QueryCosmosAccountRequest;
                toAmino(message: _106.QueryCosmosAccountRequest): _106.QueryCosmosAccountRequestAmino;
                fromAminoMsg(object: _106.QueryCosmosAccountRequestAminoMsg): _106.QueryCosmosAccountRequest;
                fromProtoMsg(message: _106.QueryCosmosAccountRequestProtoMsg): _106.QueryCosmosAccountRequest;
                toProto(message: _106.QueryCosmosAccountRequest): Uint8Array;
                toProtoMsg(message: _106.QueryCosmosAccountRequest): _106.QueryCosmosAccountRequestProtoMsg;
            };
            QueryCosmosAccountResponse: {
                typeUrl: string;
                encode(message: _106.QueryCosmosAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryCosmosAccountResponse;
                fromJSON(object: any): _106.QueryCosmosAccountResponse;
                toJSON(message: _106.QueryCosmosAccountResponse): unknown;
                fromPartial(object: Partial<_106.QueryCosmosAccountResponse>): _106.QueryCosmosAccountResponse;
                fromAmino(object: _106.QueryCosmosAccountResponseAmino): _106.QueryCosmosAccountResponse;
                toAmino(message: _106.QueryCosmosAccountResponse): _106.QueryCosmosAccountResponseAmino;
                fromAminoMsg(object: _106.QueryCosmosAccountResponseAminoMsg): _106.QueryCosmosAccountResponse;
                fromProtoMsg(message: _106.QueryCosmosAccountResponseProtoMsg): _106.QueryCosmosAccountResponse;
                toProto(message: _106.QueryCosmosAccountResponse): Uint8Array;
                toProtoMsg(message: _106.QueryCosmosAccountResponse): _106.QueryCosmosAccountResponseProtoMsg;
            };
            QueryValidatorAccountRequest: {
                typeUrl: string;
                encode(message: _106.QueryValidatorAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryValidatorAccountRequest;
                fromJSON(object: any): _106.QueryValidatorAccountRequest;
                toJSON(message: _106.QueryValidatorAccountRequest): unknown;
                fromPartial(object: Partial<_106.QueryValidatorAccountRequest>): _106.QueryValidatorAccountRequest;
                fromAmino(object: _106.QueryValidatorAccountRequestAmino): _106.QueryValidatorAccountRequest;
                toAmino(message: _106.QueryValidatorAccountRequest): _106.QueryValidatorAccountRequestAmino;
                fromAminoMsg(object: _106.QueryValidatorAccountRequestAminoMsg): _106.QueryValidatorAccountRequest;
                fromProtoMsg(message: _106.QueryValidatorAccountRequestProtoMsg): _106.QueryValidatorAccountRequest;
                toProto(message: _106.QueryValidatorAccountRequest): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorAccountRequest): _106.QueryValidatorAccountRequestProtoMsg;
            };
            QueryValidatorAccountResponse: {
                typeUrl: string;
                encode(message: _106.QueryValidatorAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryValidatorAccountResponse;
                fromJSON(object: any): _106.QueryValidatorAccountResponse;
                toJSON(message: _106.QueryValidatorAccountResponse): unknown;
                fromPartial(object: Partial<_106.QueryValidatorAccountResponse>): _106.QueryValidatorAccountResponse;
                fromAmino(object: _106.QueryValidatorAccountResponseAmino): _106.QueryValidatorAccountResponse;
                toAmino(message: _106.QueryValidatorAccountResponse): _106.QueryValidatorAccountResponseAmino;
                fromAminoMsg(object: _106.QueryValidatorAccountResponseAminoMsg): _106.QueryValidatorAccountResponse;
                fromProtoMsg(message: _106.QueryValidatorAccountResponseProtoMsg): _106.QueryValidatorAccountResponse;
                toProto(message: _106.QueryValidatorAccountResponse): Uint8Array;
                toProtoMsg(message: _106.QueryValidatorAccountResponse): _106.QueryValidatorAccountResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _106.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryBalanceRequest;
                fromJSON(object: any): _106.QueryBalanceRequest;
                toJSON(message: _106.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_106.QueryBalanceRequest>): _106.QueryBalanceRequest;
                fromAmino(object: _106.QueryBalanceRequestAmino): _106.QueryBalanceRequest;
                toAmino(message: _106.QueryBalanceRequest): _106.QueryBalanceRequestAmino;
                fromAminoMsg(object: _106.QueryBalanceRequestAminoMsg): _106.QueryBalanceRequest;
                fromProtoMsg(message: _106.QueryBalanceRequestProtoMsg): _106.QueryBalanceRequest;
                toProto(message: _106.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _106.QueryBalanceRequest): _106.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _106.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryBalanceResponse;
                fromJSON(object: any): _106.QueryBalanceResponse;
                toJSON(message: _106.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_106.QueryBalanceResponse>): _106.QueryBalanceResponse;
                fromAmino(object: _106.QueryBalanceResponseAmino): _106.QueryBalanceResponse;
                toAmino(message: _106.QueryBalanceResponse): _106.QueryBalanceResponseAmino;
                fromAminoMsg(object: _106.QueryBalanceResponseAminoMsg): _106.QueryBalanceResponse;
                fromProtoMsg(message: _106.QueryBalanceResponseProtoMsg): _106.QueryBalanceResponse;
                toProto(message: _106.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _106.QueryBalanceResponse): _106.QueryBalanceResponseProtoMsg;
            };
            QueryStorageRequest: {
                typeUrl: string;
                encode(message: _106.QueryStorageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryStorageRequest;
                fromJSON(object: any): _106.QueryStorageRequest;
                toJSON(message: _106.QueryStorageRequest): unknown;
                fromPartial(object: Partial<_106.QueryStorageRequest>): _106.QueryStorageRequest;
                fromAmino(object: _106.QueryStorageRequestAmino): _106.QueryStorageRequest;
                toAmino(message: _106.QueryStorageRequest): _106.QueryStorageRequestAmino;
                fromAminoMsg(object: _106.QueryStorageRequestAminoMsg): _106.QueryStorageRequest;
                fromProtoMsg(message: _106.QueryStorageRequestProtoMsg): _106.QueryStorageRequest;
                toProto(message: _106.QueryStorageRequest): Uint8Array;
                toProtoMsg(message: _106.QueryStorageRequest): _106.QueryStorageRequestProtoMsg;
            };
            QueryStorageResponse: {
                typeUrl: string;
                encode(message: _106.QueryStorageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryStorageResponse;
                fromJSON(object: any): _106.QueryStorageResponse;
                toJSON(message: _106.QueryStorageResponse): unknown;
                fromPartial(object: Partial<_106.QueryStorageResponse>): _106.QueryStorageResponse;
                fromAmino(object: _106.QueryStorageResponseAmino): _106.QueryStorageResponse;
                toAmino(message: _106.QueryStorageResponse): _106.QueryStorageResponseAmino;
                fromAminoMsg(object: _106.QueryStorageResponseAminoMsg): _106.QueryStorageResponse;
                fromProtoMsg(message: _106.QueryStorageResponseProtoMsg): _106.QueryStorageResponse;
                toProto(message: _106.QueryStorageResponse): Uint8Array;
                toProtoMsg(message: _106.QueryStorageResponse): _106.QueryStorageResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _106.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryCodeRequest;
                fromJSON(object: any): _106.QueryCodeRequest;
                toJSON(message: _106.QueryCodeRequest): unknown;
                fromPartial(object: Partial<_106.QueryCodeRequest>): _106.QueryCodeRequest;
                fromAmino(object: _106.QueryCodeRequestAmino): _106.QueryCodeRequest;
                toAmino(message: _106.QueryCodeRequest): _106.QueryCodeRequestAmino;
                fromAminoMsg(object: _106.QueryCodeRequestAminoMsg): _106.QueryCodeRequest;
                fromProtoMsg(message: _106.QueryCodeRequestProtoMsg): _106.QueryCodeRequest;
                toProto(message: _106.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _106.QueryCodeRequest): _106.QueryCodeRequestProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _106.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryCodeResponse;
                fromJSON(object: any): _106.QueryCodeResponse;
                toJSON(message: _106.QueryCodeResponse): unknown;
                fromPartial(object: Partial<_106.QueryCodeResponse>): _106.QueryCodeResponse;
                fromAmino(object: _106.QueryCodeResponseAmino): _106.QueryCodeResponse;
                toAmino(message: _106.QueryCodeResponse): _106.QueryCodeResponseAmino;
                fromAminoMsg(object: _106.QueryCodeResponseAminoMsg): _106.QueryCodeResponse;
                fromProtoMsg(message: _106.QueryCodeResponseProtoMsg): _106.QueryCodeResponse;
                toProto(message: _106.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _106.QueryCodeResponse): _106.QueryCodeResponseProtoMsg;
            };
            QueryTxLogsRequest: {
                typeUrl: string;
                encode(message: _106.QueryTxLogsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryTxLogsRequest;
                fromJSON(object: any): _106.QueryTxLogsRequest;
                toJSON(message: _106.QueryTxLogsRequest): unknown;
                fromPartial(object: Partial<_106.QueryTxLogsRequest>): _106.QueryTxLogsRequest;
                fromAmino(object: _106.QueryTxLogsRequestAmino): _106.QueryTxLogsRequest;
                toAmino(message: _106.QueryTxLogsRequest): _106.QueryTxLogsRequestAmino;
                fromAminoMsg(object: _106.QueryTxLogsRequestAminoMsg): _106.QueryTxLogsRequest;
                fromProtoMsg(message: _106.QueryTxLogsRequestProtoMsg): _106.QueryTxLogsRequest;
                toProto(message: _106.QueryTxLogsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryTxLogsRequest): _106.QueryTxLogsRequestProtoMsg;
            };
            QueryTxLogsResponse: {
                typeUrl: string;
                encode(message: _106.QueryTxLogsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryTxLogsResponse;
                fromJSON(object: any): _106.QueryTxLogsResponse;
                toJSON(message: _106.QueryTxLogsResponse): unknown;
                fromPartial(object: Partial<_106.QueryTxLogsResponse>): _106.QueryTxLogsResponse;
                fromAmino(object: _106.QueryTxLogsResponseAmino): _106.QueryTxLogsResponse;
                toAmino(message: _106.QueryTxLogsResponse): _106.QueryTxLogsResponseAmino;
                fromAminoMsg(object: _106.QueryTxLogsResponseAminoMsg): _106.QueryTxLogsResponse;
                fromProtoMsg(message: _106.QueryTxLogsResponseProtoMsg): _106.QueryTxLogsResponse;
                toProto(message: _106.QueryTxLogsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryTxLogsResponse): _106.QueryTxLogsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _106.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryParamsRequest;
                fromJSON(_: any): _106.QueryParamsRequest;
                toJSON(_: _106.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_106.QueryParamsRequest>): _106.QueryParamsRequest;
                fromAmino(_: _106.QueryParamsRequestAmino): _106.QueryParamsRequest;
                toAmino(_: _106.QueryParamsRequest): _106.QueryParamsRequestAmino;
                fromAminoMsg(object: _106.QueryParamsRequestAminoMsg): _106.QueryParamsRequest;
                fromProtoMsg(message: _106.QueryParamsRequestProtoMsg): _106.QueryParamsRequest;
                toProto(message: _106.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _106.QueryParamsRequest): _106.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _106.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryParamsResponse;
                fromJSON(object: any): _106.QueryParamsResponse;
                toJSON(message: _106.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_106.QueryParamsResponse>): _106.QueryParamsResponse;
                fromAmino(object: _106.QueryParamsResponseAmino): _106.QueryParamsResponse;
                toAmino(message: _106.QueryParamsResponse): _106.QueryParamsResponseAmino;
                fromAminoMsg(object: _106.QueryParamsResponseAminoMsg): _106.QueryParamsResponse;
                fromProtoMsg(message: _106.QueryParamsResponseProtoMsg): _106.QueryParamsResponse;
                toProto(message: _106.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _106.QueryParamsResponse): _106.QueryParamsResponseProtoMsg;
            };
            EthCallRequest: {
                typeUrl: string;
                encode(message: _106.EthCallRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EthCallRequest;
                fromJSON(object: any): _106.EthCallRequest;
                toJSON(message: _106.EthCallRequest): unknown;
                fromPartial(object: Partial<_106.EthCallRequest>): _106.EthCallRequest;
                fromAmino(object: _106.EthCallRequestAmino): _106.EthCallRequest;
                toAmino(message: _106.EthCallRequest): _106.EthCallRequestAmino;
                fromAminoMsg(object: _106.EthCallRequestAminoMsg): _106.EthCallRequest;
                fromProtoMsg(message: _106.EthCallRequestProtoMsg): _106.EthCallRequest;
                toProto(message: _106.EthCallRequest): Uint8Array;
                toProtoMsg(message: _106.EthCallRequest): _106.EthCallRequestProtoMsg;
            };
            EstimateGasResponse: {
                typeUrl: string;
                encode(message: _106.EstimateGasResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EstimateGasResponse;
                fromJSON(object: any): _106.EstimateGasResponse;
                toJSON(message: _106.EstimateGasResponse): unknown;
                fromPartial(object: Partial<_106.EstimateGasResponse>): _106.EstimateGasResponse;
                fromAmino(object: _106.EstimateGasResponseAmino): _106.EstimateGasResponse;
                toAmino(message: _106.EstimateGasResponse): _106.EstimateGasResponseAmino;
                fromAminoMsg(object: _106.EstimateGasResponseAminoMsg): _106.EstimateGasResponse;
                fromProtoMsg(message: _106.EstimateGasResponseProtoMsg): _106.EstimateGasResponse;
                toProto(message: _106.EstimateGasResponse): Uint8Array;
                toProtoMsg(message: _106.EstimateGasResponse): _106.EstimateGasResponseProtoMsg;
            };
            QueryTraceTxRequest: {
                typeUrl: string;
                encode(message: _106.QueryTraceTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryTraceTxRequest;
                fromJSON(object: any): _106.QueryTraceTxRequest;
                toJSON(message: _106.QueryTraceTxRequest): unknown;
                fromPartial(object: Partial<_106.QueryTraceTxRequest>): _106.QueryTraceTxRequest;
                fromAmino(object: _106.QueryTraceTxRequestAmino): _106.QueryTraceTxRequest;
                toAmino(message: _106.QueryTraceTxRequest): _106.QueryTraceTxRequestAmino;
                fromAminoMsg(object: _106.QueryTraceTxRequestAminoMsg): _106.QueryTraceTxRequest;
                fromProtoMsg(message: _106.QueryTraceTxRequestProtoMsg): _106.QueryTraceTxRequest;
                toProto(message: _106.QueryTraceTxRequest): Uint8Array;
                toProtoMsg(message: _106.QueryTraceTxRequest): _106.QueryTraceTxRequestProtoMsg;
            };
            QueryTraceTxResponse: {
                typeUrl: string;
                encode(message: _106.QueryTraceTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryTraceTxResponse;
                fromJSON(object: any): _106.QueryTraceTxResponse;
                toJSON(message: _106.QueryTraceTxResponse): unknown;
                fromPartial(object: Partial<_106.QueryTraceTxResponse>): _106.QueryTraceTxResponse;
                fromAmino(object: _106.QueryTraceTxResponseAmino): _106.QueryTraceTxResponse;
                toAmino(message: _106.QueryTraceTxResponse): _106.QueryTraceTxResponseAmino;
                fromAminoMsg(object: _106.QueryTraceTxResponseAminoMsg): _106.QueryTraceTxResponse;
                fromProtoMsg(message: _106.QueryTraceTxResponseProtoMsg): _106.QueryTraceTxResponse;
                toProto(message: _106.QueryTraceTxResponse): Uint8Array;
                toProtoMsg(message: _106.QueryTraceTxResponse): _106.QueryTraceTxResponseProtoMsg;
            };
            QueryTraceBlockRequest: {
                typeUrl: string;
                encode(message: _106.QueryTraceBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryTraceBlockRequest;
                fromJSON(object: any): _106.QueryTraceBlockRequest;
                toJSON(message: _106.QueryTraceBlockRequest): unknown;
                fromPartial(object: Partial<_106.QueryTraceBlockRequest>): _106.QueryTraceBlockRequest;
                fromAmino(object: _106.QueryTraceBlockRequestAmino): _106.QueryTraceBlockRequest;
                toAmino(message: _106.QueryTraceBlockRequest): _106.QueryTraceBlockRequestAmino;
                fromAminoMsg(object: _106.QueryTraceBlockRequestAminoMsg): _106.QueryTraceBlockRequest;
                fromProtoMsg(message: _106.QueryTraceBlockRequestProtoMsg): _106.QueryTraceBlockRequest;
                toProto(message: _106.QueryTraceBlockRequest): Uint8Array;
                toProtoMsg(message: _106.QueryTraceBlockRequest): _106.QueryTraceBlockRequestProtoMsg;
            };
            QueryTraceBlockResponse: {
                typeUrl: string;
                encode(message: _106.QueryTraceBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryTraceBlockResponse;
                fromJSON(object: any): _106.QueryTraceBlockResponse;
                toJSON(message: _106.QueryTraceBlockResponse): unknown;
                fromPartial(object: Partial<_106.QueryTraceBlockResponse>): _106.QueryTraceBlockResponse;
                fromAmino(object: _106.QueryTraceBlockResponseAmino): _106.QueryTraceBlockResponse;
                toAmino(message: _106.QueryTraceBlockResponse): _106.QueryTraceBlockResponseAmino;
                fromAminoMsg(object: _106.QueryTraceBlockResponseAminoMsg): _106.QueryTraceBlockResponse;
                fromProtoMsg(message: _106.QueryTraceBlockResponseProtoMsg): _106.QueryTraceBlockResponse;
                toProto(message: _106.QueryTraceBlockResponse): Uint8Array;
                toProtoMsg(message: _106.QueryTraceBlockResponse): _106.QueryTraceBlockResponseProtoMsg;
            };
            QueryBaseFeeRequest: {
                typeUrl: string;
                encode(_: _106.QueryBaseFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryBaseFeeRequest;
                fromJSON(_: any): _106.QueryBaseFeeRequest;
                toJSON(_: _106.QueryBaseFeeRequest): unknown;
                fromPartial(_: Partial<_106.QueryBaseFeeRequest>): _106.QueryBaseFeeRequest;
                fromAmino(_: _106.QueryBaseFeeRequestAmino): _106.QueryBaseFeeRequest;
                toAmino(_: _106.QueryBaseFeeRequest): _106.QueryBaseFeeRequestAmino;
                fromAminoMsg(object: _106.QueryBaseFeeRequestAminoMsg): _106.QueryBaseFeeRequest;
                fromProtoMsg(message: _106.QueryBaseFeeRequestProtoMsg): _106.QueryBaseFeeRequest;
                toProto(message: _106.QueryBaseFeeRequest): Uint8Array;
                toProtoMsg(message: _106.QueryBaseFeeRequest): _106.QueryBaseFeeRequestProtoMsg;
            };
            QueryBaseFeeResponse: {
                typeUrl: string;
                encode(message: _106.QueryBaseFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryBaseFeeResponse;
                fromJSON(object: any): _106.QueryBaseFeeResponse;
                toJSON(message: _106.QueryBaseFeeResponse): unknown;
                fromPartial(object: Partial<_106.QueryBaseFeeResponse>): _106.QueryBaseFeeResponse;
                fromAmino(object: _106.QueryBaseFeeResponseAmino): _106.QueryBaseFeeResponse;
                toAmino(message: _106.QueryBaseFeeResponse): _106.QueryBaseFeeResponseAmino;
                fromAminoMsg(object: _106.QueryBaseFeeResponseAminoMsg): _106.QueryBaseFeeResponse;
                fromProtoMsg(message: _106.QueryBaseFeeResponseProtoMsg): _106.QueryBaseFeeResponse;
                toProto(message: _106.QueryBaseFeeResponse): Uint8Array;
                toProtoMsg(message: _106.QueryBaseFeeResponse): _106.QueryBaseFeeResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _105.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.GenesisState;
                fromJSON(object: any): _105.GenesisState;
                toJSON(message: _105.GenesisState): unknown;
                fromPartial(object: Partial<_105.GenesisState>): _105.GenesisState;
                fromAmino(object: _105.GenesisStateAmino): _105.GenesisState;
                toAmino(message: _105.GenesisState): _105.GenesisStateAmino;
                fromAminoMsg(object: _105.GenesisStateAminoMsg): _105.GenesisState;
                fromProtoMsg(message: _105.GenesisStateProtoMsg): _105.GenesisState;
                toProto(message: _105.GenesisState): Uint8Array;
                toProtoMsg(message: _105.GenesisState): _105.GenesisStateProtoMsg;
            };
            GenesisAccount: {
                typeUrl: string;
                encode(message: _105.GenesisAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.GenesisAccount;
                fromJSON(object: any): _105.GenesisAccount;
                toJSON(message: _105.GenesisAccount): unknown;
                fromPartial(object: Partial<_105.GenesisAccount>): _105.GenesisAccount;
                fromAmino(object: _105.GenesisAccountAmino): _105.GenesisAccount;
                toAmino(message: _105.GenesisAccount): _105.GenesisAccountAmino;
                fromAminoMsg(object: _105.GenesisAccountAminoMsg): _105.GenesisAccount;
                fromProtoMsg(message: _105.GenesisAccountProtoMsg): _105.GenesisAccount;
                toProto(message: _105.GenesisAccount): Uint8Array;
                toProtoMsg(message: _105.GenesisAccount): _105.GenesisAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Params;
                fromJSON(object: any): _104.Params;
                toJSON(message: _104.Params): unknown;
                fromPartial(object: Partial<_104.Params>): _104.Params;
                fromAmino(object: _104.ParamsAmino): _104.Params;
                toAmino(message: _104.Params): _104.ParamsAmino;
                fromAminoMsg(object: _104.ParamsAminoMsg): _104.Params;
                fromProtoMsg(message: _104.ParamsProtoMsg): _104.Params;
                toProto(message: _104.Params): Uint8Array;
                toProtoMsg(message: _104.Params): _104.ParamsProtoMsg;
            };
            ChainConfig: {
                typeUrl: string;
                encode(message: _104.ChainConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ChainConfig;
                fromJSON(object: any): _104.ChainConfig;
                toJSON(message: _104.ChainConfig): unknown;
                fromPartial(object: Partial<_104.ChainConfig>): _104.ChainConfig;
                fromAmino(object: _104.ChainConfigAmino): _104.ChainConfig;
                toAmino(message: _104.ChainConfig): _104.ChainConfigAmino;
                fromAminoMsg(object: _104.ChainConfigAminoMsg): _104.ChainConfig;
                fromProtoMsg(message: _104.ChainConfigProtoMsg): _104.ChainConfig;
                toProto(message: _104.ChainConfig): Uint8Array;
                toProtoMsg(message: _104.ChainConfig): _104.ChainConfigProtoMsg;
            };
            State: {
                typeUrl: string;
                encode(message: _104.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.State;
                fromJSON(object: any): _104.State;
                toJSON(message: _104.State): unknown;
                fromPartial(object: Partial<_104.State>): _104.State;
                fromAmino(object: _104.StateAmino): _104.State;
                toAmino(message: _104.State): _104.StateAmino;
                fromAminoMsg(object: _104.StateAminoMsg): _104.State;
                fromProtoMsg(message: _104.StateProtoMsg): _104.State;
                toProto(message: _104.State): Uint8Array;
                toProtoMsg(message: _104.State): _104.StateProtoMsg;
            };
            TransactionLogs: {
                typeUrl: string;
                encode(message: _104.TransactionLogs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.TransactionLogs;
                fromJSON(object: any): _104.TransactionLogs;
                toJSON(message: _104.TransactionLogs): unknown;
                fromPartial(object: Partial<_104.TransactionLogs>): _104.TransactionLogs;
                fromAmino(object: _104.TransactionLogsAmino): _104.TransactionLogs;
                toAmino(message: _104.TransactionLogs): _104.TransactionLogsAmino;
                fromAminoMsg(object: _104.TransactionLogsAminoMsg): _104.TransactionLogs;
                fromProtoMsg(message: _104.TransactionLogsProtoMsg): _104.TransactionLogs;
                toProto(message: _104.TransactionLogs): Uint8Array;
                toProtoMsg(message: _104.TransactionLogs): _104.TransactionLogsProtoMsg;
            };
            Log: {
                typeUrl: string;
                encode(message: _104.Log, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Log;
                fromJSON(object: any): _104.Log;
                toJSON(message: _104.Log): unknown;
                fromPartial(object: Partial<_104.Log>): _104.Log;
                fromAmino(object: _104.LogAmino): _104.Log;
                toAmino(message: _104.Log): _104.LogAmino;
                fromAminoMsg(object: _104.LogAminoMsg): _104.Log;
                fromProtoMsg(message: _104.LogProtoMsg): _104.Log;
                toProto(message: _104.Log): Uint8Array;
                toProtoMsg(message: _104.Log): _104.LogProtoMsg;
            };
            TxResult: {
                typeUrl: string;
                encode(message: _104.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.TxResult;
                fromJSON(object: any): _104.TxResult;
                toJSON(message: _104.TxResult): unknown;
                fromPartial(object: Partial<_104.TxResult>): _104.TxResult;
                fromAmino(object: _104.TxResultAmino): _104.TxResult;
                toAmino(message: _104.TxResult): _104.TxResultAmino;
                fromAminoMsg(object: _104.TxResultAminoMsg): _104.TxResult;
                fromProtoMsg(message: _104.TxResultProtoMsg): _104.TxResult;
                toProto(message: _104.TxResult): Uint8Array;
                toProtoMsg(message: _104.TxResult): _104.TxResultProtoMsg;
            };
            AccessTuple: {
                typeUrl: string;
                encode(message: _104.AccessTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.AccessTuple;
                fromJSON(object: any): _104.AccessTuple;
                toJSON(message: _104.AccessTuple): unknown;
                fromPartial(object: Partial<_104.AccessTuple>): _104.AccessTuple;
                fromAmino(object: _104.AccessTupleAmino): _104.AccessTuple;
                toAmino(message: _104.AccessTuple): _104.AccessTupleAmino;
                fromAminoMsg(object: _104.AccessTupleAminoMsg): _104.AccessTuple;
                fromProtoMsg(message: _104.AccessTupleProtoMsg): _104.AccessTuple;
                toProto(message: _104.AccessTuple): Uint8Array;
                toProtoMsg(message: _104.AccessTuple): _104.AccessTupleProtoMsg;
            };
            TraceConfig: {
                typeUrl: string;
                encode(message: _104.TraceConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.TraceConfig;
                fromJSON(object: any): _104.TraceConfig;
                toJSON(message: _104.TraceConfig): unknown;
                fromPartial(object: Partial<_104.TraceConfig>): _104.TraceConfig;
                fromAmino(object: _104.TraceConfigAmino): _104.TraceConfig;
                toAmino(message: _104.TraceConfig): _104.TraceConfigAmino;
                fromAminoMsg(object: _104.TraceConfigAminoMsg): _104.TraceConfig;
                fromProtoMsg(message: _104.TraceConfigProtoMsg): _104.TraceConfig;
                toProto(message: _104.TraceConfig): Uint8Array;
                toProtoMsg(message: _104.TraceConfig): _104.TraceConfigProtoMsg;
            };
            EventEthereumTx: {
                typeUrl: string;
                encode(message: _103.EventEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.EventEthereumTx;
                fromJSON(object: any): _103.EventEthereumTx;
                toJSON(message: _103.EventEthereumTx): unknown;
                fromPartial(object: Partial<_103.EventEthereumTx>): _103.EventEthereumTx;
                fromAmino(object: _103.EventEthereumTxAmino): _103.EventEthereumTx;
                toAmino(message: _103.EventEthereumTx): _103.EventEthereumTxAmino;
                fromAminoMsg(object: _103.EventEthereumTxAminoMsg): _103.EventEthereumTx;
                fromProtoMsg(message: _103.EventEthereumTxProtoMsg): _103.EventEthereumTx;
                toProto(message: _103.EventEthereumTx): Uint8Array;
                toProtoMsg(message: _103.EventEthereumTx): _103.EventEthereumTxProtoMsg;
            };
            EventTxLog: {
                typeUrl: string;
                encode(message: _103.EventTxLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.EventTxLog;
                fromJSON(object: any): _103.EventTxLog;
                toJSON(message: _103.EventTxLog): unknown;
                fromPartial(object: Partial<_103.EventTxLog>): _103.EventTxLog;
                fromAmino(object: _103.EventTxLogAmino): _103.EventTxLog;
                toAmino(message: _103.EventTxLog): _103.EventTxLogAmino;
                fromAminoMsg(object: _103.EventTxLogAminoMsg): _103.EventTxLog;
                fromProtoMsg(message: _103.EventTxLogProtoMsg): _103.EventTxLog;
                toProto(message: _103.EventTxLog): Uint8Array;
                toProtoMsg(message: _103.EventTxLog): _103.EventTxLogProtoMsg;
            };
            EventMessage: {
                typeUrl: string;
                encode(message: _103.EventMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.EventMessage;
                fromJSON(object: any): _103.EventMessage;
                toJSON(message: _103.EventMessage): unknown;
                fromPartial(object: Partial<_103.EventMessage>): _103.EventMessage;
                fromAmino(object: _103.EventMessageAmino): _103.EventMessage;
                toAmino(message: _103.EventMessage): _103.EventMessageAmino;
                fromAminoMsg(object: _103.EventMessageAminoMsg): _103.EventMessage;
                fromProtoMsg(message: _103.EventMessageProtoMsg): _103.EventMessage;
                toProto(message: _103.EventMessage): Uint8Array;
                toProtoMsg(message: _103.EventMessage): _103.EventMessageProtoMsg;
            };
            EventBlockBloom: {
                typeUrl: string;
                encode(message: _103.EventBlockBloom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.EventBlockBloom;
                fromJSON(object: any): _103.EventBlockBloom;
                toJSON(message: _103.EventBlockBloom): unknown;
                fromPartial(object: Partial<_103.EventBlockBloom>): _103.EventBlockBloom;
                fromAmino(object: _103.EventBlockBloomAmino): _103.EventBlockBloom;
                toAmino(message: _103.EventBlockBloom): _103.EventBlockBloomAmino;
                fromAminoMsg(object: _103.EventBlockBloomAminoMsg): _103.EventBlockBloom;
                fromProtoMsg(message: _103.EventBlockBloomProtoMsg): _103.EventBlockBloom;
                toProto(message: _103.EventBlockBloom): Uint8Array;
                toProtoMsg(message: _103.EventBlockBloom): _103.EventBlockBloomProtoMsg;
            };
        };
    }
    namespace feemarket {
        const v1: {
            MsgClientImpl: typeof _250.MsgClientImpl;
            QueryClientImpl: typeof _248.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
                baseFee(request?: _111.QueryBaseFeeRequest): Promise<_111.QueryBaseFeeResponse>;
                blockGas(request?: _111.QueryBlockGasRequest): Promise<_111.QueryBlockGasResponse>;
            };
            LCDQueryClient: typeof _246.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _112.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _112.MsgUpdateParams): {
                        typeUrl: string;
                        value: _112.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _112.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _112.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _112.MsgUpdateParams): {
                        typeUrl: string;
                        value: _112.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/ethermint.feemarket.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _112.MsgUpdateParams) => _112.MsgUpdateParamsAmino;
                    fromAmino: (object: _112.MsgUpdateParamsAmino) => _112.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _112.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgUpdateParams;
                fromJSON(object: any): _112.MsgUpdateParams;
                toJSON(message: _112.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_112.MsgUpdateParams>): _112.MsgUpdateParams;
                fromAmino(object: _112.MsgUpdateParamsAmino): _112.MsgUpdateParams;
                toAmino(message: _112.MsgUpdateParams): _112.MsgUpdateParamsAmino;
                fromAminoMsg(object: _112.MsgUpdateParamsAminoMsg): _112.MsgUpdateParams;
                fromProtoMsg(message: _112.MsgUpdateParamsProtoMsg): _112.MsgUpdateParams;
                toProto(message: _112.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _112.MsgUpdateParams): _112.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _112.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgUpdateParamsResponse;
                fromJSON(_: any): _112.MsgUpdateParamsResponse;
                toJSON(_: _112.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_112.MsgUpdateParamsResponse>): _112.MsgUpdateParamsResponse;
                fromAmino(_: _112.MsgUpdateParamsResponseAmino): _112.MsgUpdateParamsResponse;
                toAmino(_: _112.MsgUpdateParamsResponse): _112.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _112.MsgUpdateParamsResponseAminoMsg): _112.MsgUpdateParamsResponse;
                fromProtoMsg(message: _112.MsgUpdateParamsResponseProtoMsg): _112.MsgUpdateParamsResponse;
                toProto(message: _112.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _112.MsgUpdateParamsResponse): _112.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _111.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryParamsRequest;
                fromJSON(_: any): _111.QueryParamsRequest;
                toJSON(_: _111.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_111.QueryParamsRequest>): _111.QueryParamsRequest;
                fromAmino(_: _111.QueryParamsRequestAmino): _111.QueryParamsRequest;
                toAmino(_: _111.QueryParamsRequest): _111.QueryParamsRequestAmino;
                fromAminoMsg(object: _111.QueryParamsRequestAminoMsg): _111.QueryParamsRequest;
                fromProtoMsg(message: _111.QueryParamsRequestProtoMsg): _111.QueryParamsRequest;
                toProto(message: _111.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _111.QueryParamsRequest): _111.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _111.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryParamsResponse;
                fromJSON(object: any): _111.QueryParamsResponse;
                toJSON(message: _111.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_111.QueryParamsResponse>): _111.QueryParamsResponse;
                fromAmino(object: _111.QueryParamsResponseAmino): _111.QueryParamsResponse;
                toAmino(message: _111.QueryParamsResponse): _111.QueryParamsResponseAmino;
                fromAminoMsg(object: _111.QueryParamsResponseAminoMsg): _111.QueryParamsResponse;
                fromProtoMsg(message: _111.QueryParamsResponseProtoMsg): _111.QueryParamsResponse;
                toProto(message: _111.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _111.QueryParamsResponse): _111.QueryParamsResponseProtoMsg;
            };
            QueryBaseFeeRequest: {
                typeUrl: string;
                encode(_: _111.QueryBaseFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryBaseFeeRequest;
                fromJSON(_: any): _111.QueryBaseFeeRequest;
                toJSON(_: _111.QueryBaseFeeRequest): unknown;
                fromPartial(_: Partial<_111.QueryBaseFeeRequest>): _111.QueryBaseFeeRequest;
                fromAmino(_: _111.QueryBaseFeeRequestAmino): _111.QueryBaseFeeRequest;
                toAmino(_: _111.QueryBaseFeeRequest): _111.QueryBaseFeeRequestAmino;
                fromAminoMsg(object: _111.QueryBaseFeeRequestAminoMsg): _111.QueryBaseFeeRequest;
                fromProtoMsg(message: _111.QueryBaseFeeRequestProtoMsg): _111.QueryBaseFeeRequest;
                toProto(message: _111.QueryBaseFeeRequest): Uint8Array;
                toProtoMsg(message: _111.QueryBaseFeeRequest): _111.QueryBaseFeeRequestProtoMsg;
            };
            QueryBaseFeeResponse: {
                typeUrl: string;
                encode(message: _111.QueryBaseFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryBaseFeeResponse;
                fromJSON(object: any): _111.QueryBaseFeeResponse;
                toJSON(message: _111.QueryBaseFeeResponse): unknown;
                fromPartial(object: Partial<_111.QueryBaseFeeResponse>): _111.QueryBaseFeeResponse;
                fromAmino(object: _111.QueryBaseFeeResponseAmino): _111.QueryBaseFeeResponse;
                toAmino(message: _111.QueryBaseFeeResponse): _111.QueryBaseFeeResponseAmino;
                fromAminoMsg(object: _111.QueryBaseFeeResponseAminoMsg): _111.QueryBaseFeeResponse;
                fromProtoMsg(message: _111.QueryBaseFeeResponseProtoMsg): _111.QueryBaseFeeResponse;
                toProto(message: _111.QueryBaseFeeResponse): Uint8Array;
                toProtoMsg(message: _111.QueryBaseFeeResponse): _111.QueryBaseFeeResponseProtoMsg;
            };
            QueryBlockGasRequest: {
                typeUrl: string;
                encode(_: _111.QueryBlockGasRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryBlockGasRequest;
                fromJSON(_: any): _111.QueryBlockGasRequest;
                toJSON(_: _111.QueryBlockGasRequest): unknown;
                fromPartial(_: Partial<_111.QueryBlockGasRequest>): _111.QueryBlockGasRequest;
                fromAmino(_: _111.QueryBlockGasRequestAmino): _111.QueryBlockGasRequest;
                toAmino(_: _111.QueryBlockGasRequest): _111.QueryBlockGasRequestAmino;
                fromAminoMsg(object: _111.QueryBlockGasRequestAminoMsg): _111.QueryBlockGasRequest;
                fromProtoMsg(message: _111.QueryBlockGasRequestProtoMsg): _111.QueryBlockGasRequest;
                toProto(message: _111.QueryBlockGasRequest): Uint8Array;
                toProtoMsg(message: _111.QueryBlockGasRequest): _111.QueryBlockGasRequestProtoMsg;
            };
            QueryBlockGasResponse: {
                typeUrl: string;
                encode(message: _111.QueryBlockGasResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryBlockGasResponse;
                fromJSON(object: any): _111.QueryBlockGasResponse;
                toJSON(message: _111.QueryBlockGasResponse): unknown;
                fromPartial(object: Partial<_111.QueryBlockGasResponse>): _111.QueryBlockGasResponse;
                fromAmino(object: _111.QueryBlockGasResponseAmino): _111.QueryBlockGasResponse;
                toAmino(message: _111.QueryBlockGasResponse): _111.QueryBlockGasResponseAmino;
                fromAminoMsg(object: _111.QueryBlockGasResponseAminoMsg): _111.QueryBlockGasResponse;
                fromProtoMsg(message: _111.QueryBlockGasResponseProtoMsg): _111.QueryBlockGasResponse;
                toProto(message: _111.QueryBlockGasResponse): Uint8Array;
                toProtoMsg(message: _111.QueryBlockGasResponse): _111.QueryBlockGasResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _110.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.GenesisState;
                fromJSON(object: any): _110.GenesisState;
                toJSON(message: _110.GenesisState): unknown;
                fromPartial(object: Partial<_110.GenesisState>): _110.GenesisState;
                fromAmino(object: _110.GenesisStateAmino): _110.GenesisState;
                toAmino(message: _110.GenesisState): _110.GenesisStateAmino;
                fromAminoMsg(object: _110.GenesisStateAminoMsg): _110.GenesisState;
                fromProtoMsg(message: _110.GenesisStateProtoMsg): _110.GenesisState;
                toProto(message: _110.GenesisState): Uint8Array;
                toProtoMsg(message: _110.GenesisState): _110.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _109.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Params;
                fromJSON(object: any): _109.Params;
                toJSON(message: _109.Params): unknown;
                fromPartial(object: Partial<_109.Params>): _109.Params;
                fromAmino(object: _109.ParamsAmino): _109.Params;
                toAmino(message: _109.Params): _109.ParamsAmino;
                fromAminoMsg(object: _109.ParamsAminoMsg): _109.Params;
                fromProtoMsg(message: _109.ParamsProtoMsg): _109.Params;
                toProto(message: _109.Params): Uint8Array;
                toProtoMsg(message: _109.Params): _109.ParamsProtoMsg;
            };
            EventFeeMarket: {
                typeUrl: string;
                encode(message: _108.EventFeeMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.EventFeeMarket;
                fromJSON(object: any): _108.EventFeeMarket;
                toJSON(message: _108.EventFeeMarket): unknown;
                fromPartial(object: Partial<_108.EventFeeMarket>): _108.EventFeeMarket;
                fromAmino(object: _108.EventFeeMarketAmino): _108.EventFeeMarket;
                toAmino(message: _108.EventFeeMarket): _108.EventFeeMarketAmino;
                fromAminoMsg(object: _108.EventFeeMarketAminoMsg): _108.EventFeeMarket;
                fromProtoMsg(message: _108.EventFeeMarketProtoMsg): _108.EventFeeMarket;
                toProto(message: _108.EventFeeMarket): Uint8Array;
                toProtoMsg(message: _108.EventFeeMarket): _108.EventFeeMarketProtoMsg;
            };
            EventBlockGas: {
                typeUrl: string;
                encode(message: _108.EventBlockGas, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.EventBlockGas;
                fromJSON(object: any): _108.EventBlockGas;
                toJSON(message: _108.EventBlockGas): unknown;
                fromPartial(object: Partial<_108.EventBlockGas>): _108.EventBlockGas;
                fromAmino(object: _108.EventBlockGasAmino): _108.EventBlockGas;
                toAmino(message: _108.EventBlockGas): _108.EventBlockGasAmino;
                fromAminoMsg(object: _108.EventBlockGasAminoMsg): _108.EventBlockGas;
                fromProtoMsg(message: _108.EventBlockGasProtoMsg): _108.EventBlockGas;
                toProto(message: _108.EventBlockGas): Uint8Array;
                toProtoMsg(message: _108.EventBlockGas): _108.EventBlockGasProtoMsg;
            };
        };
    }
    namespace types {
        const v1: {
            ExtensionOptionsWeb3Tx: {
                typeUrl: string;
                encode(message: _116.ExtensionOptionsWeb3Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ExtensionOptionsWeb3Tx;
                fromJSON(object: any): _116.ExtensionOptionsWeb3Tx;
                toJSON(message: _116.ExtensionOptionsWeb3Tx): unknown;
                fromPartial(object: Partial<_116.ExtensionOptionsWeb3Tx>): _116.ExtensionOptionsWeb3Tx;
                fromAmino(object: _116.ExtensionOptionsWeb3TxAmino): _116.ExtensionOptionsWeb3Tx;
                toAmino(message: _116.ExtensionOptionsWeb3Tx): _116.ExtensionOptionsWeb3TxAmino;
                fromAminoMsg(object: _116.ExtensionOptionsWeb3TxAminoMsg): _116.ExtensionOptionsWeb3Tx;
                fromProtoMsg(message: _116.ExtensionOptionsWeb3TxProtoMsg): _116.ExtensionOptionsWeb3Tx;
                toProto(message: _116.ExtensionOptionsWeb3Tx): Uint8Array;
                toProtoMsg(message: _116.ExtensionOptionsWeb3Tx): _116.ExtensionOptionsWeb3TxProtoMsg;
            };
            TxResult: {
                typeUrl: string;
                encode(message: _115.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.TxResult;
                fromJSON(object: any): _115.TxResult;
                toJSON(message: _115.TxResult): unknown;
                fromPartial(object: Partial<_115.TxResult>): _115.TxResult;
                fromAmino(object: _115.TxResultAmino): _115.TxResult;
                toAmino(message: _115.TxResult): _115.TxResultAmino;
                fromAminoMsg(object: _115.TxResultAminoMsg): _115.TxResult;
                fromProtoMsg(message: _115.TxResultProtoMsg): _115.TxResult;
                toProto(message: _115.TxResult): Uint8Array;
                toProtoMsg(message: _115.TxResult): _115.TxResultProtoMsg;
            };
            ExtensionOptionDynamicFeeTx: {
                typeUrl: string;
                encode(message: _114.ExtensionOptionDynamicFeeTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.ExtensionOptionDynamicFeeTx;
                fromJSON(object: any): _114.ExtensionOptionDynamicFeeTx;
                toJSON(message: _114.ExtensionOptionDynamicFeeTx): unknown;
                fromPartial(object: Partial<_114.ExtensionOptionDynamicFeeTx>): _114.ExtensionOptionDynamicFeeTx;
                fromAmino(object: _114.ExtensionOptionDynamicFeeTxAmino): _114.ExtensionOptionDynamicFeeTx;
                toAmino(message: _114.ExtensionOptionDynamicFeeTx): _114.ExtensionOptionDynamicFeeTxAmino;
                fromAminoMsg(object: _114.ExtensionOptionDynamicFeeTxAminoMsg): _114.ExtensionOptionDynamicFeeTx;
                fromProtoMsg(message: _114.ExtensionOptionDynamicFeeTxProtoMsg): _114.ExtensionOptionDynamicFeeTx;
                toProto(message: _114.ExtensionOptionDynamicFeeTx): Uint8Array;
                toProtoMsg(message: _114.ExtensionOptionDynamicFeeTx): _114.ExtensionOptionDynamicFeeTxProtoMsg;
            };
            EthAccount: {
                typeUrl: string;
                encode(message: _113.EthAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.EthAccount;
                fromJSON(object: any): _113.EthAccount;
                toJSON(message: _113.EthAccount): unknown;
                fromPartial(object: Partial<_113.EthAccount>): _113.EthAccount;
                fromAmino(object: _113.EthAccountAmino): _113.EthAccount;
                toAmino(message: _113.EthAccount): _113.EthAccountAmino;
                fromAminoMsg(object: _113.EthAccountAminoMsg): _113.EthAccount;
                fromProtoMsg(message: _113.EthAccountProtoMsg): _113.EthAccount;
                toProto(message: _113.EthAccount): Uint8Array;
                toProtoMsg(message: _113.EthAccount): _113.EthAccountProtoMsg;
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
            ethermint: {
                evm: {
                    v1: _249.MsgClientImpl;
                };
                feemarket: {
                    v1: _250.MsgClientImpl;
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
            ethermint: {
                evm: {
                    v1: {
                        account(request: _106.QueryAccountRequest): Promise<_106.QueryAccountResponse>;
                        cosmosAccount(request: _106.QueryCosmosAccountRequest): Promise<_106.QueryCosmosAccountResponse>;
                        validatorAccount(request: _106.QueryValidatorAccountRequest): Promise<_106.QueryValidatorAccountResponse>;
                        balance(request: _106.QueryBalanceRequest): Promise<_106.QueryBalanceResponse>;
                        storage(request: _106.QueryStorageRequest): Promise<_106.QueryStorageResponse>;
                        code(request: _106.QueryCodeRequest): Promise<_106.QueryCodeResponse>;
                        params(request?: _106.QueryParamsRequest): Promise<_106.QueryParamsResponse>;
                        ethCall(request: _106.EthCallRequest): Promise<_107.MsgEthereumTxResponse>;
                        estimateGas(request: _106.EthCallRequest): Promise<_106.EstimateGasResponse>;
                        traceTx(request: _106.QueryTraceTxRequest): Promise<_106.QueryTraceTxResponse>;
                        traceBlock(request: _106.QueryTraceBlockRequest): Promise<_106.QueryTraceBlockResponse>;
                        baseFee(request?: _106.QueryBaseFeeRequest): Promise<_106.QueryBaseFeeResponse>;
                    };
                };
                feemarket: {
                    v1: {
                        params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
                        baseFee(request?: _111.QueryBaseFeeRequest): Promise<_111.QueryBaseFeeResponse>;
                        blockGas(request?: _111.QueryBlockGasRequest): Promise<_111.QueryBlockGasResponse>;
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
            ethermint: {
                evm: {
                    v1: _245.LCDQueryClient;
                };
                feemarket: {
                    v1: _246.LCDQueryClient;
                };
            };
        }>;
    };
}
