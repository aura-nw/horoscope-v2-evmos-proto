import * as _103 from "./crypto/v1/ethsecp256k1/keys";
import * as _104 from "./evm/v1/events";
import * as _105 from "./evm/v1/evm";
import * as _106 from "./evm/v1/genesis";
import * as _107 from "./evm/v1/query";
import * as _108 from "./evm/v1/tx";
import * as _109 from "./feemarket/v1/events";
import * as _110 from "./feemarket/v1/feemarket";
import * as _111 from "./feemarket/v1/genesis";
import * as _112 from "./feemarket/v1/query";
import * as _113 from "./feemarket/v1/tx";
import * as _114 from "./types/v1/account";
import * as _115 from "./types/v1/dynamic_fee";
import * as _116 from "./types/v1/indexer";
import * as _117 from "./types/v1/web3";
import * as _285 from "./evm/v1/query.lcd";
import * as _286 from "./feemarket/v1/query.lcd";
import * as _287 from "./evm/v1/query.rpc.Query";
import * as _288 from "./feemarket/v1/query.rpc.Query";
import * as _289 from "./evm/v1/tx.rpc.msg";
import * as _290 from "./feemarket/v1/tx.rpc.msg";
export declare namespace ethermint {
    namespace crypto {
        namespace v1 {
            const ethsecp256k1: {
                PubKey: {
                    typeUrl: string;
                    encode(message: _103.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.PubKey;
                    fromJSON(object: any): _103.PubKey;
                    toJSON(message: _103.PubKey): unknown;
                    fromPartial(object: Partial<_103.PubKey>): _103.PubKey;
                    fromAmino(object: _103.PubKeyAmino): _103.PubKey;
                    toAmino(message: _103.PubKey): _103.PubKeyAmino;
                    fromAminoMsg(object: _103.PubKeyAminoMsg): _103.PubKey;
                    fromProtoMsg(message: _103.PubKeyProtoMsg): _103.PubKey;
                    toProto(message: _103.PubKey): Uint8Array;
                    toProtoMsg(message: _103.PubKey): _103.PubKeyProtoMsg;
                };
                PrivKey: {
                    typeUrl: string;
                    encode(message: _103.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.PrivKey;
                    fromJSON(object: any): _103.PrivKey;
                    toJSON(message: _103.PrivKey): unknown;
                    fromPartial(object: Partial<_103.PrivKey>): _103.PrivKey;
                    fromAmino(object: _103.PrivKeyAmino): _103.PrivKey;
                    toAmino(message: _103.PrivKey): _103.PrivKeyAmino;
                    fromAminoMsg(object: _103.PrivKeyAminoMsg): _103.PrivKey;
                    fromProtoMsg(message: _103.PrivKeyProtoMsg): _103.PrivKey;
                    toProto(message: _103.PrivKey): Uint8Array;
                    toProtoMsg(message: _103.PrivKey): _103.PrivKeyProtoMsg;
                };
            };
        }
    }
    namespace evm {
        const v1: {
            MsgClientImpl: typeof _289.MsgClientImpl;
            QueryClientImpl: typeof _287.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                account(request: _107.QueryAccountRequest): Promise<_107.QueryAccountResponse>;
                cosmosAccount(request: _107.QueryCosmosAccountRequest): Promise<_107.QueryCosmosAccountResponse>;
                validatorAccount(request: _107.QueryValidatorAccountRequest): Promise<_107.QueryValidatorAccountResponse>;
                balance(request: _107.QueryBalanceRequest): Promise<_107.QueryBalanceResponse>;
                storage(request: _107.QueryStorageRequest): Promise<_107.QueryStorageResponse>;
                code(request: _107.QueryCodeRequest): Promise<_107.QueryCodeResponse>;
                params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                ethCall(request: _107.EthCallRequest): Promise<_108.MsgEthereumTxResponse>;
                estimateGas(request: _107.EthCallRequest): Promise<_107.EstimateGasResponse>;
                traceTx(request: _107.QueryTraceTxRequest): Promise<_107.QueryTraceTxResponse>;
                traceBlock(request: _107.QueryTraceBlockRequest): Promise<_107.QueryTraceBlockResponse>;
                baseFee(request?: _107.QueryBaseFeeRequest): Promise<_107.QueryBaseFeeResponse>;
            };
            LCDQueryClient: typeof _285.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    ethereumTx(value: _108.MsgEthereumTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _108.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    ethereumTx(value: _108.MsgEthereumTx): {
                        typeUrl: string;
                        value: _108.MsgEthereumTx;
                    };
                    updateParams(value: _108.MsgUpdateParams): {
                        typeUrl: string;
                        value: _108.MsgUpdateParams;
                    };
                };
                toJSON: {
                    ethereumTx(value: _108.MsgEthereumTx): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _108.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    ethereumTx(value: any): {
                        typeUrl: string;
                        value: _108.MsgEthereumTx;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _108.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    ethereumTx(value: _108.MsgEthereumTx): {
                        typeUrl: string;
                        value: _108.MsgEthereumTx;
                    };
                    updateParams(value: _108.MsgUpdateParams): {
                        typeUrl: string;
                        value: _108.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/ethermint.evm.v1.MsgEthereumTx": {
                    aminoType: string;
                    toAmino: (message: _108.MsgEthereumTx) => _108.MsgEthereumTxAmino;
                    fromAmino: (object: _108.MsgEthereumTxAmino) => _108.MsgEthereumTx;
                };
                "/ethermint.evm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _108.MsgUpdateParams) => _108.MsgUpdateParamsAmino;
                    fromAmino: (object: _108.MsgUpdateParamsAmino) => _108.MsgUpdateParams;
                };
            };
            MsgEthereumTx: {
                typeUrl: string;
                encode(message: _108.MsgEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgEthereumTx;
                fromJSON(object: any): _108.MsgEthereumTx;
                toJSON(message: _108.MsgEthereumTx): unknown;
                fromPartial(object: Partial<_108.MsgEthereumTx>): _108.MsgEthereumTx;
                fromAmino(object: _108.MsgEthereumTxAmino): _108.MsgEthereumTx;
                toAmino(message: _108.MsgEthereumTx): _108.MsgEthereumTxAmino;
                fromAminoMsg(object: _108.MsgEthereumTxAminoMsg): _108.MsgEthereumTx;
                fromProtoMsg(message: _108.MsgEthereumTxProtoMsg): _108.MsgEthereumTx;
                toProto(message: _108.MsgEthereumTx): Uint8Array;
                toProtoMsg(message: _108.MsgEthereumTx): _108.MsgEthereumTxProtoMsg;
            };
            LegacyTx: {
                typeUrl: string;
                encode(message: _108.LegacyTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.LegacyTx;
                fromJSON(object: any): _108.LegacyTx;
                toJSON(message: _108.LegacyTx): unknown;
                fromPartial(object: Partial<_108.LegacyTx>): _108.LegacyTx;
                fromAmino(object: _108.LegacyTxAmino): _108.LegacyTx;
                toAmino(message: _108.LegacyTx): _108.LegacyTxAmino;
                fromAminoMsg(object: _108.LegacyTxAminoMsg): _108.LegacyTx;
                fromProtoMsg(message: _108.LegacyTxProtoMsg): _108.LegacyTx;
                toProto(message: _108.LegacyTx): Uint8Array;
                toProtoMsg(message: _108.LegacyTx): _108.LegacyTxProtoMsg;
            };
            AccessListTx: {
                typeUrl: string;
                encode(message: _108.AccessListTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.AccessListTx;
                fromJSON(object: any): _108.AccessListTx;
                toJSON(message: _108.AccessListTx): unknown;
                fromPartial(object: Partial<_108.AccessListTx>): _108.AccessListTx;
                fromAmino(object: _108.AccessListTxAmino): _108.AccessListTx;
                toAmino(message: _108.AccessListTx): _108.AccessListTxAmino;
                fromAminoMsg(object: _108.AccessListTxAminoMsg): _108.AccessListTx;
                fromProtoMsg(message: _108.AccessListTxProtoMsg): _108.AccessListTx;
                toProto(message: _108.AccessListTx): Uint8Array;
                toProtoMsg(message: _108.AccessListTx): _108.AccessListTxProtoMsg;
            };
            DynamicFeeTx: {
                typeUrl: string;
                encode(message: _108.DynamicFeeTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.DynamicFeeTx;
                fromJSON(object: any): _108.DynamicFeeTx;
                toJSON(message: _108.DynamicFeeTx): unknown;
                fromPartial(object: Partial<_108.DynamicFeeTx>): _108.DynamicFeeTx;
                fromAmino(object: _108.DynamicFeeTxAmino): _108.DynamicFeeTx;
                toAmino(message: _108.DynamicFeeTx): _108.DynamicFeeTxAmino;
                fromAminoMsg(object: _108.DynamicFeeTxAminoMsg): _108.DynamicFeeTx;
                fromProtoMsg(message: _108.DynamicFeeTxProtoMsg): _108.DynamicFeeTx;
                toProto(message: _108.DynamicFeeTx): Uint8Array;
                toProtoMsg(message: _108.DynamicFeeTx): _108.DynamicFeeTxProtoMsg;
            };
            ExtensionOptionsEthereumTx: {
                typeUrl: string;
                encode(_: _108.ExtensionOptionsEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.ExtensionOptionsEthereumTx;
                fromJSON(_: any): _108.ExtensionOptionsEthereumTx;
                toJSON(_: _108.ExtensionOptionsEthereumTx): unknown;
                fromPartial(_: Partial<_108.ExtensionOptionsEthereumTx>): _108.ExtensionOptionsEthereumTx;
                fromAmino(_: _108.ExtensionOptionsEthereumTxAmino): _108.ExtensionOptionsEthereumTx;
                toAmino(_: _108.ExtensionOptionsEthereumTx): _108.ExtensionOptionsEthereumTxAmino;
                fromAminoMsg(object: _108.ExtensionOptionsEthereumTxAminoMsg): _108.ExtensionOptionsEthereumTx;
                fromProtoMsg(message: _108.ExtensionOptionsEthereumTxProtoMsg): _108.ExtensionOptionsEthereumTx;
                toProto(message: _108.ExtensionOptionsEthereumTx): Uint8Array;
                toProtoMsg(message: _108.ExtensionOptionsEthereumTx): _108.ExtensionOptionsEthereumTxProtoMsg;
            };
            MsgEthereumTxResponse: {
                typeUrl: string;
                encode(message: _108.MsgEthereumTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgEthereumTxResponse;
                fromJSON(object: any): _108.MsgEthereumTxResponse;
                toJSON(message: _108.MsgEthereumTxResponse): unknown;
                fromPartial(object: Partial<_108.MsgEthereumTxResponse>): _108.MsgEthereumTxResponse;
                fromAmino(object: _108.MsgEthereumTxResponseAmino): _108.MsgEthereumTxResponse;
                toAmino(message: _108.MsgEthereumTxResponse): _108.MsgEthereumTxResponseAmino;
                fromAminoMsg(object: _108.MsgEthereumTxResponseAminoMsg): _108.MsgEthereumTxResponse;
                fromProtoMsg(message: _108.MsgEthereumTxResponseProtoMsg): _108.MsgEthereumTxResponse;
                toProto(message: _108.MsgEthereumTxResponse): Uint8Array;
                toProtoMsg(message: _108.MsgEthereumTxResponse): _108.MsgEthereumTxResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _108.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgUpdateParams;
                fromJSON(object: any): _108.MsgUpdateParams;
                toJSON(message: _108.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_108.MsgUpdateParams>): _108.MsgUpdateParams;
                fromAmino(object: _108.MsgUpdateParamsAmino): _108.MsgUpdateParams;
                toAmino(message: _108.MsgUpdateParams): _108.MsgUpdateParamsAmino;
                fromAminoMsg(object: _108.MsgUpdateParamsAminoMsg): _108.MsgUpdateParams;
                fromProtoMsg(message: _108.MsgUpdateParamsProtoMsg): _108.MsgUpdateParams;
                toProto(message: _108.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _108.MsgUpdateParams): _108.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _108.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.MsgUpdateParamsResponse;
                fromJSON(_: any): _108.MsgUpdateParamsResponse;
                toJSON(_: _108.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_108.MsgUpdateParamsResponse>): _108.MsgUpdateParamsResponse;
                fromAmino(_: _108.MsgUpdateParamsResponseAmino): _108.MsgUpdateParamsResponse;
                toAmino(_: _108.MsgUpdateParamsResponse): _108.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _108.MsgUpdateParamsResponseAminoMsg): _108.MsgUpdateParamsResponse;
                fromProtoMsg(message: _108.MsgUpdateParamsResponseProtoMsg): _108.MsgUpdateParamsResponse;
                toProto(message: _108.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _108.MsgUpdateParamsResponse): _108.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _107.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryAccountRequest;
                fromJSON(object: any): _107.QueryAccountRequest;
                toJSON(message: _107.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_107.QueryAccountRequest>): _107.QueryAccountRequest;
                fromAmino(object: _107.QueryAccountRequestAmino): _107.QueryAccountRequest;
                toAmino(message: _107.QueryAccountRequest): _107.QueryAccountRequestAmino;
                fromAminoMsg(object: _107.QueryAccountRequestAminoMsg): _107.QueryAccountRequest;
                fromProtoMsg(message: _107.QueryAccountRequestProtoMsg): _107.QueryAccountRequest;
                toProto(message: _107.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _107.QueryAccountRequest): _107.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _107.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryAccountResponse;
                fromJSON(object: any): _107.QueryAccountResponse;
                toJSON(message: _107.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_107.QueryAccountResponse>): _107.QueryAccountResponse;
                fromAmino(object: _107.QueryAccountResponseAmino): _107.QueryAccountResponse;
                toAmino(message: _107.QueryAccountResponse): _107.QueryAccountResponseAmino;
                fromAminoMsg(object: _107.QueryAccountResponseAminoMsg): _107.QueryAccountResponse;
                fromProtoMsg(message: _107.QueryAccountResponseProtoMsg): _107.QueryAccountResponse;
                toProto(message: _107.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _107.QueryAccountResponse): _107.QueryAccountResponseProtoMsg;
            };
            QueryCosmosAccountRequest: {
                typeUrl: string;
                encode(message: _107.QueryCosmosAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryCosmosAccountRequest;
                fromJSON(object: any): _107.QueryCosmosAccountRequest;
                toJSON(message: _107.QueryCosmosAccountRequest): unknown;
                fromPartial(object: Partial<_107.QueryCosmosAccountRequest>): _107.QueryCosmosAccountRequest;
                fromAmino(object: _107.QueryCosmosAccountRequestAmino): _107.QueryCosmosAccountRequest;
                toAmino(message: _107.QueryCosmosAccountRequest): _107.QueryCosmosAccountRequestAmino;
                fromAminoMsg(object: _107.QueryCosmosAccountRequestAminoMsg): _107.QueryCosmosAccountRequest;
                fromProtoMsg(message: _107.QueryCosmosAccountRequestProtoMsg): _107.QueryCosmosAccountRequest;
                toProto(message: _107.QueryCosmosAccountRequest): Uint8Array;
                toProtoMsg(message: _107.QueryCosmosAccountRequest): _107.QueryCosmosAccountRequestProtoMsg;
            };
            QueryCosmosAccountResponse: {
                typeUrl: string;
                encode(message: _107.QueryCosmosAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryCosmosAccountResponse;
                fromJSON(object: any): _107.QueryCosmosAccountResponse;
                toJSON(message: _107.QueryCosmosAccountResponse): unknown;
                fromPartial(object: Partial<_107.QueryCosmosAccountResponse>): _107.QueryCosmosAccountResponse;
                fromAmino(object: _107.QueryCosmosAccountResponseAmino): _107.QueryCosmosAccountResponse;
                toAmino(message: _107.QueryCosmosAccountResponse): _107.QueryCosmosAccountResponseAmino;
                fromAminoMsg(object: _107.QueryCosmosAccountResponseAminoMsg): _107.QueryCosmosAccountResponse;
                fromProtoMsg(message: _107.QueryCosmosAccountResponseProtoMsg): _107.QueryCosmosAccountResponse;
                toProto(message: _107.QueryCosmosAccountResponse): Uint8Array;
                toProtoMsg(message: _107.QueryCosmosAccountResponse): _107.QueryCosmosAccountResponseProtoMsg;
            };
            QueryValidatorAccountRequest: {
                typeUrl: string;
                encode(message: _107.QueryValidatorAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryValidatorAccountRequest;
                fromJSON(object: any): _107.QueryValidatorAccountRequest;
                toJSON(message: _107.QueryValidatorAccountRequest): unknown;
                fromPartial(object: Partial<_107.QueryValidatorAccountRequest>): _107.QueryValidatorAccountRequest;
                fromAmino(object: _107.QueryValidatorAccountRequestAmino): _107.QueryValidatorAccountRequest;
                toAmino(message: _107.QueryValidatorAccountRequest): _107.QueryValidatorAccountRequestAmino;
                fromAminoMsg(object: _107.QueryValidatorAccountRequestAminoMsg): _107.QueryValidatorAccountRequest;
                fromProtoMsg(message: _107.QueryValidatorAccountRequestProtoMsg): _107.QueryValidatorAccountRequest;
                toProto(message: _107.QueryValidatorAccountRequest): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorAccountRequest): _107.QueryValidatorAccountRequestProtoMsg;
            };
            QueryValidatorAccountResponse: {
                typeUrl: string;
                encode(message: _107.QueryValidatorAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryValidatorAccountResponse;
                fromJSON(object: any): _107.QueryValidatorAccountResponse;
                toJSON(message: _107.QueryValidatorAccountResponse): unknown;
                fromPartial(object: Partial<_107.QueryValidatorAccountResponse>): _107.QueryValidatorAccountResponse;
                fromAmino(object: _107.QueryValidatorAccountResponseAmino): _107.QueryValidatorAccountResponse;
                toAmino(message: _107.QueryValidatorAccountResponse): _107.QueryValidatorAccountResponseAmino;
                fromAminoMsg(object: _107.QueryValidatorAccountResponseAminoMsg): _107.QueryValidatorAccountResponse;
                fromProtoMsg(message: _107.QueryValidatorAccountResponseProtoMsg): _107.QueryValidatorAccountResponse;
                toProto(message: _107.QueryValidatorAccountResponse): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorAccountResponse): _107.QueryValidatorAccountResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _107.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryBalanceRequest;
                fromJSON(object: any): _107.QueryBalanceRequest;
                toJSON(message: _107.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_107.QueryBalanceRequest>): _107.QueryBalanceRequest;
                fromAmino(object: _107.QueryBalanceRequestAmino): _107.QueryBalanceRequest;
                toAmino(message: _107.QueryBalanceRequest): _107.QueryBalanceRequestAmino;
                fromAminoMsg(object: _107.QueryBalanceRequestAminoMsg): _107.QueryBalanceRequest;
                fromProtoMsg(message: _107.QueryBalanceRequestProtoMsg): _107.QueryBalanceRequest;
                toProto(message: _107.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _107.QueryBalanceRequest): _107.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _107.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryBalanceResponse;
                fromJSON(object: any): _107.QueryBalanceResponse;
                toJSON(message: _107.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_107.QueryBalanceResponse>): _107.QueryBalanceResponse;
                fromAmino(object: _107.QueryBalanceResponseAmino): _107.QueryBalanceResponse;
                toAmino(message: _107.QueryBalanceResponse): _107.QueryBalanceResponseAmino;
                fromAminoMsg(object: _107.QueryBalanceResponseAminoMsg): _107.QueryBalanceResponse;
                fromProtoMsg(message: _107.QueryBalanceResponseProtoMsg): _107.QueryBalanceResponse;
                toProto(message: _107.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _107.QueryBalanceResponse): _107.QueryBalanceResponseProtoMsg;
            };
            QueryStorageRequest: {
                typeUrl: string;
                encode(message: _107.QueryStorageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryStorageRequest;
                fromJSON(object: any): _107.QueryStorageRequest;
                toJSON(message: _107.QueryStorageRequest): unknown;
                fromPartial(object: Partial<_107.QueryStorageRequest>): _107.QueryStorageRequest;
                fromAmino(object: _107.QueryStorageRequestAmino): _107.QueryStorageRequest;
                toAmino(message: _107.QueryStorageRequest): _107.QueryStorageRequestAmino;
                fromAminoMsg(object: _107.QueryStorageRequestAminoMsg): _107.QueryStorageRequest;
                fromProtoMsg(message: _107.QueryStorageRequestProtoMsg): _107.QueryStorageRequest;
                toProto(message: _107.QueryStorageRequest): Uint8Array;
                toProtoMsg(message: _107.QueryStorageRequest): _107.QueryStorageRequestProtoMsg;
            };
            QueryStorageResponse: {
                typeUrl: string;
                encode(message: _107.QueryStorageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryStorageResponse;
                fromJSON(object: any): _107.QueryStorageResponse;
                toJSON(message: _107.QueryStorageResponse): unknown;
                fromPartial(object: Partial<_107.QueryStorageResponse>): _107.QueryStorageResponse;
                fromAmino(object: _107.QueryStorageResponseAmino): _107.QueryStorageResponse;
                toAmino(message: _107.QueryStorageResponse): _107.QueryStorageResponseAmino;
                fromAminoMsg(object: _107.QueryStorageResponseAminoMsg): _107.QueryStorageResponse;
                fromProtoMsg(message: _107.QueryStorageResponseProtoMsg): _107.QueryStorageResponse;
                toProto(message: _107.QueryStorageResponse): Uint8Array;
                toProtoMsg(message: _107.QueryStorageResponse): _107.QueryStorageResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _107.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryCodeRequest;
                fromJSON(object: any): _107.QueryCodeRequest;
                toJSON(message: _107.QueryCodeRequest): unknown;
                fromPartial(object: Partial<_107.QueryCodeRequest>): _107.QueryCodeRequest;
                fromAmino(object: _107.QueryCodeRequestAmino): _107.QueryCodeRequest;
                toAmino(message: _107.QueryCodeRequest): _107.QueryCodeRequestAmino;
                fromAminoMsg(object: _107.QueryCodeRequestAminoMsg): _107.QueryCodeRequest;
                fromProtoMsg(message: _107.QueryCodeRequestProtoMsg): _107.QueryCodeRequest;
                toProto(message: _107.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _107.QueryCodeRequest): _107.QueryCodeRequestProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _107.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryCodeResponse;
                fromJSON(object: any): _107.QueryCodeResponse;
                toJSON(message: _107.QueryCodeResponse): unknown;
                fromPartial(object: Partial<_107.QueryCodeResponse>): _107.QueryCodeResponse;
                fromAmino(object: _107.QueryCodeResponseAmino): _107.QueryCodeResponse;
                toAmino(message: _107.QueryCodeResponse): _107.QueryCodeResponseAmino;
                fromAminoMsg(object: _107.QueryCodeResponseAminoMsg): _107.QueryCodeResponse;
                fromProtoMsg(message: _107.QueryCodeResponseProtoMsg): _107.QueryCodeResponse;
                toProto(message: _107.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _107.QueryCodeResponse): _107.QueryCodeResponseProtoMsg;
            };
            QueryTxLogsRequest: {
                typeUrl: string;
                encode(message: _107.QueryTxLogsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryTxLogsRequest;
                fromJSON(object: any): _107.QueryTxLogsRequest;
                toJSON(message: _107.QueryTxLogsRequest): unknown;
                fromPartial(object: Partial<_107.QueryTxLogsRequest>): _107.QueryTxLogsRequest;
                fromAmino(object: _107.QueryTxLogsRequestAmino): _107.QueryTxLogsRequest;
                toAmino(message: _107.QueryTxLogsRequest): _107.QueryTxLogsRequestAmino;
                fromAminoMsg(object: _107.QueryTxLogsRequestAminoMsg): _107.QueryTxLogsRequest;
                fromProtoMsg(message: _107.QueryTxLogsRequestProtoMsg): _107.QueryTxLogsRequest;
                toProto(message: _107.QueryTxLogsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryTxLogsRequest): _107.QueryTxLogsRequestProtoMsg;
            };
            QueryTxLogsResponse: {
                typeUrl: string;
                encode(message: _107.QueryTxLogsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryTxLogsResponse;
                fromJSON(object: any): _107.QueryTxLogsResponse;
                toJSON(message: _107.QueryTxLogsResponse): unknown;
                fromPartial(object: Partial<_107.QueryTxLogsResponse>): _107.QueryTxLogsResponse;
                fromAmino(object: _107.QueryTxLogsResponseAmino): _107.QueryTxLogsResponse;
                toAmino(message: _107.QueryTxLogsResponse): _107.QueryTxLogsResponseAmino;
                fromAminoMsg(object: _107.QueryTxLogsResponseAminoMsg): _107.QueryTxLogsResponse;
                fromProtoMsg(message: _107.QueryTxLogsResponseProtoMsg): _107.QueryTxLogsResponse;
                toProto(message: _107.QueryTxLogsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryTxLogsResponse): _107.QueryTxLogsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _107.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryParamsRequest;
                fromJSON(_: any): _107.QueryParamsRequest;
                toJSON(_: _107.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_107.QueryParamsRequest>): _107.QueryParamsRequest;
                fromAmino(_: _107.QueryParamsRequestAmino): _107.QueryParamsRequest;
                toAmino(_: _107.QueryParamsRequest): _107.QueryParamsRequestAmino;
                fromAminoMsg(object: _107.QueryParamsRequestAminoMsg): _107.QueryParamsRequest;
                fromProtoMsg(message: _107.QueryParamsRequestProtoMsg): _107.QueryParamsRequest;
                toProto(message: _107.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryParamsRequest): _107.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _107.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryParamsResponse;
                fromJSON(object: any): _107.QueryParamsResponse;
                toJSON(message: _107.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_107.QueryParamsResponse>): _107.QueryParamsResponse;
                fromAmino(object: _107.QueryParamsResponseAmino): _107.QueryParamsResponse;
                toAmino(message: _107.QueryParamsResponse): _107.QueryParamsResponseAmino;
                fromAminoMsg(object: _107.QueryParamsResponseAminoMsg): _107.QueryParamsResponse;
                fromProtoMsg(message: _107.QueryParamsResponseProtoMsg): _107.QueryParamsResponse;
                toProto(message: _107.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryParamsResponse): _107.QueryParamsResponseProtoMsg;
            };
            EthCallRequest: {
                typeUrl: string;
                encode(message: _107.EthCallRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.EthCallRequest;
                fromJSON(object: any): _107.EthCallRequest;
                toJSON(message: _107.EthCallRequest): unknown;
                fromPartial(object: Partial<_107.EthCallRequest>): _107.EthCallRequest;
                fromAmino(object: _107.EthCallRequestAmino): _107.EthCallRequest;
                toAmino(message: _107.EthCallRequest): _107.EthCallRequestAmino;
                fromAminoMsg(object: _107.EthCallRequestAminoMsg): _107.EthCallRequest;
                fromProtoMsg(message: _107.EthCallRequestProtoMsg): _107.EthCallRequest;
                toProto(message: _107.EthCallRequest): Uint8Array;
                toProtoMsg(message: _107.EthCallRequest): _107.EthCallRequestProtoMsg;
            };
            EstimateGasResponse: {
                typeUrl: string;
                encode(message: _107.EstimateGasResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.EstimateGasResponse;
                fromJSON(object: any): _107.EstimateGasResponse;
                toJSON(message: _107.EstimateGasResponse): unknown;
                fromPartial(object: Partial<_107.EstimateGasResponse>): _107.EstimateGasResponse;
                fromAmino(object: _107.EstimateGasResponseAmino): _107.EstimateGasResponse;
                toAmino(message: _107.EstimateGasResponse): _107.EstimateGasResponseAmino;
                fromAminoMsg(object: _107.EstimateGasResponseAminoMsg): _107.EstimateGasResponse;
                fromProtoMsg(message: _107.EstimateGasResponseProtoMsg): _107.EstimateGasResponse;
                toProto(message: _107.EstimateGasResponse): Uint8Array;
                toProtoMsg(message: _107.EstimateGasResponse): _107.EstimateGasResponseProtoMsg;
            };
            QueryTraceTxRequest: {
                typeUrl: string;
                encode(message: _107.QueryTraceTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryTraceTxRequest;
                fromJSON(object: any): _107.QueryTraceTxRequest;
                toJSON(message: _107.QueryTraceTxRequest): unknown;
                fromPartial(object: Partial<_107.QueryTraceTxRequest>): _107.QueryTraceTxRequest;
                fromAmino(object: _107.QueryTraceTxRequestAmino): _107.QueryTraceTxRequest;
                toAmino(message: _107.QueryTraceTxRequest): _107.QueryTraceTxRequestAmino;
                fromAminoMsg(object: _107.QueryTraceTxRequestAminoMsg): _107.QueryTraceTxRequest;
                fromProtoMsg(message: _107.QueryTraceTxRequestProtoMsg): _107.QueryTraceTxRequest;
                toProto(message: _107.QueryTraceTxRequest): Uint8Array;
                toProtoMsg(message: _107.QueryTraceTxRequest): _107.QueryTraceTxRequestProtoMsg;
            };
            QueryTraceTxResponse: {
                typeUrl: string;
                encode(message: _107.QueryTraceTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryTraceTxResponse;
                fromJSON(object: any): _107.QueryTraceTxResponse;
                toJSON(message: _107.QueryTraceTxResponse): unknown;
                fromPartial(object: Partial<_107.QueryTraceTxResponse>): _107.QueryTraceTxResponse;
                fromAmino(object: _107.QueryTraceTxResponseAmino): _107.QueryTraceTxResponse;
                toAmino(message: _107.QueryTraceTxResponse): _107.QueryTraceTxResponseAmino;
                fromAminoMsg(object: _107.QueryTraceTxResponseAminoMsg): _107.QueryTraceTxResponse;
                fromProtoMsg(message: _107.QueryTraceTxResponseProtoMsg): _107.QueryTraceTxResponse;
                toProto(message: _107.QueryTraceTxResponse): Uint8Array;
                toProtoMsg(message: _107.QueryTraceTxResponse): _107.QueryTraceTxResponseProtoMsg;
            };
            QueryTraceBlockRequest: {
                typeUrl: string;
                encode(message: _107.QueryTraceBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryTraceBlockRequest;
                fromJSON(object: any): _107.QueryTraceBlockRequest;
                toJSON(message: _107.QueryTraceBlockRequest): unknown;
                fromPartial(object: Partial<_107.QueryTraceBlockRequest>): _107.QueryTraceBlockRequest;
                fromAmino(object: _107.QueryTraceBlockRequestAmino): _107.QueryTraceBlockRequest;
                toAmino(message: _107.QueryTraceBlockRequest): _107.QueryTraceBlockRequestAmino;
                fromAminoMsg(object: _107.QueryTraceBlockRequestAminoMsg): _107.QueryTraceBlockRequest;
                fromProtoMsg(message: _107.QueryTraceBlockRequestProtoMsg): _107.QueryTraceBlockRequest;
                toProto(message: _107.QueryTraceBlockRequest): Uint8Array;
                toProtoMsg(message: _107.QueryTraceBlockRequest): _107.QueryTraceBlockRequestProtoMsg;
            };
            QueryTraceBlockResponse: {
                typeUrl: string;
                encode(message: _107.QueryTraceBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryTraceBlockResponse;
                fromJSON(object: any): _107.QueryTraceBlockResponse;
                toJSON(message: _107.QueryTraceBlockResponse): unknown;
                fromPartial(object: Partial<_107.QueryTraceBlockResponse>): _107.QueryTraceBlockResponse;
                fromAmino(object: _107.QueryTraceBlockResponseAmino): _107.QueryTraceBlockResponse;
                toAmino(message: _107.QueryTraceBlockResponse): _107.QueryTraceBlockResponseAmino;
                fromAminoMsg(object: _107.QueryTraceBlockResponseAminoMsg): _107.QueryTraceBlockResponse;
                fromProtoMsg(message: _107.QueryTraceBlockResponseProtoMsg): _107.QueryTraceBlockResponse;
                toProto(message: _107.QueryTraceBlockResponse): Uint8Array;
                toProtoMsg(message: _107.QueryTraceBlockResponse): _107.QueryTraceBlockResponseProtoMsg;
            };
            QueryBaseFeeRequest: {
                typeUrl: string;
                encode(_: _107.QueryBaseFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryBaseFeeRequest;
                fromJSON(_: any): _107.QueryBaseFeeRequest;
                toJSON(_: _107.QueryBaseFeeRequest): unknown;
                fromPartial(_: Partial<_107.QueryBaseFeeRequest>): _107.QueryBaseFeeRequest;
                fromAmino(_: _107.QueryBaseFeeRequestAmino): _107.QueryBaseFeeRequest;
                toAmino(_: _107.QueryBaseFeeRequest): _107.QueryBaseFeeRequestAmino;
                fromAminoMsg(object: _107.QueryBaseFeeRequestAminoMsg): _107.QueryBaseFeeRequest;
                fromProtoMsg(message: _107.QueryBaseFeeRequestProtoMsg): _107.QueryBaseFeeRequest;
                toProto(message: _107.QueryBaseFeeRequest): Uint8Array;
                toProtoMsg(message: _107.QueryBaseFeeRequest): _107.QueryBaseFeeRequestProtoMsg;
            };
            QueryBaseFeeResponse: {
                typeUrl: string;
                encode(message: _107.QueryBaseFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryBaseFeeResponse;
                fromJSON(object: any): _107.QueryBaseFeeResponse;
                toJSON(message: _107.QueryBaseFeeResponse): unknown;
                fromPartial(object: Partial<_107.QueryBaseFeeResponse>): _107.QueryBaseFeeResponse;
                fromAmino(object: _107.QueryBaseFeeResponseAmino): _107.QueryBaseFeeResponse;
                toAmino(message: _107.QueryBaseFeeResponse): _107.QueryBaseFeeResponseAmino;
                fromAminoMsg(object: _107.QueryBaseFeeResponseAminoMsg): _107.QueryBaseFeeResponse;
                fromProtoMsg(message: _107.QueryBaseFeeResponseProtoMsg): _107.QueryBaseFeeResponse;
                toProto(message: _107.QueryBaseFeeResponse): Uint8Array;
                toProtoMsg(message: _107.QueryBaseFeeResponse): _107.QueryBaseFeeResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GenesisState;
                fromJSON(object: any): _106.GenesisState;
                toJSON(message: _106.GenesisState): unknown;
                fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
                fromAmino(object: _106.GenesisStateAmino): _106.GenesisState;
                toAmino(message: _106.GenesisState): _106.GenesisStateAmino;
                fromAminoMsg(object: _106.GenesisStateAminoMsg): _106.GenesisState;
                fromProtoMsg(message: _106.GenesisStateProtoMsg): _106.GenesisState;
                toProto(message: _106.GenesisState): Uint8Array;
                toProtoMsg(message: _106.GenesisState): _106.GenesisStateProtoMsg;
            };
            GenesisAccount: {
                typeUrl: string;
                encode(message: _106.GenesisAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GenesisAccount;
                fromJSON(object: any): _106.GenesisAccount;
                toJSON(message: _106.GenesisAccount): unknown;
                fromPartial(object: Partial<_106.GenesisAccount>): _106.GenesisAccount;
                fromAmino(object: _106.GenesisAccountAmino): _106.GenesisAccount;
                toAmino(message: _106.GenesisAccount): _106.GenesisAccountAmino;
                fromAminoMsg(object: _106.GenesisAccountAminoMsg): _106.GenesisAccount;
                fromProtoMsg(message: _106.GenesisAccountProtoMsg): _106.GenesisAccount;
                toProto(message: _106.GenesisAccount): Uint8Array;
                toProtoMsg(message: _106.GenesisAccount): _106.GenesisAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _105.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Params;
                fromJSON(object: any): _105.Params;
                toJSON(message: _105.Params): unknown;
                fromPartial(object: Partial<_105.Params>): _105.Params;
                fromAmino(object: _105.ParamsAmino): _105.Params;
                toAmino(message: _105.Params): _105.ParamsAmino;
                fromAminoMsg(object: _105.ParamsAminoMsg): _105.Params;
                fromProtoMsg(message: _105.ParamsProtoMsg): _105.Params;
                toProto(message: _105.Params): Uint8Array;
                toProtoMsg(message: _105.Params): _105.ParamsProtoMsg;
            };
            ChainConfig: {
                typeUrl: string;
                encode(message: _105.ChainConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.ChainConfig;
                fromJSON(object: any): _105.ChainConfig;
                toJSON(message: _105.ChainConfig): unknown;
                fromPartial(object: Partial<_105.ChainConfig>): _105.ChainConfig;
                fromAmino(object: _105.ChainConfigAmino): _105.ChainConfig;
                toAmino(message: _105.ChainConfig): _105.ChainConfigAmino;
                fromAminoMsg(object: _105.ChainConfigAminoMsg): _105.ChainConfig;
                fromProtoMsg(message: _105.ChainConfigProtoMsg): _105.ChainConfig;
                toProto(message: _105.ChainConfig): Uint8Array;
                toProtoMsg(message: _105.ChainConfig): _105.ChainConfigProtoMsg;
            };
            State: {
                typeUrl: string;
                encode(message: _105.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.State;
                fromJSON(object: any): _105.State;
                toJSON(message: _105.State): unknown;
                fromPartial(object: Partial<_105.State>): _105.State;
                fromAmino(object: _105.StateAmino): _105.State;
                toAmino(message: _105.State): _105.StateAmino;
                fromAminoMsg(object: _105.StateAminoMsg): _105.State;
                fromProtoMsg(message: _105.StateProtoMsg): _105.State;
                toProto(message: _105.State): Uint8Array;
                toProtoMsg(message: _105.State): _105.StateProtoMsg;
            };
            TransactionLogs: {
                typeUrl: string;
                encode(message: _105.TransactionLogs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.TransactionLogs;
                fromJSON(object: any): _105.TransactionLogs;
                toJSON(message: _105.TransactionLogs): unknown;
                fromPartial(object: Partial<_105.TransactionLogs>): _105.TransactionLogs;
                fromAmino(object: _105.TransactionLogsAmino): _105.TransactionLogs;
                toAmino(message: _105.TransactionLogs): _105.TransactionLogsAmino;
                fromAminoMsg(object: _105.TransactionLogsAminoMsg): _105.TransactionLogs;
                fromProtoMsg(message: _105.TransactionLogsProtoMsg): _105.TransactionLogs;
                toProto(message: _105.TransactionLogs): Uint8Array;
                toProtoMsg(message: _105.TransactionLogs): _105.TransactionLogsProtoMsg;
            };
            Log: {
                typeUrl: string;
                encode(message: _105.Log, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Log;
                fromJSON(object: any): _105.Log;
                toJSON(message: _105.Log): unknown;
                fromPartial(object: Partial<_105.Log>): _105.Log;
                fromAmino(object: _105.LogAmino): _105.Log;
                toAmino(message: _105.Log): _105.LogAmino;
                fromAminoMsg(object: _105.LogAminoMsg): _105.Log;
                fromProtoMsg(message: _105.LogProtoMsg): _105.Log;
                toProto(message: _105.Log): Uint8Array;
                toProtoMsg(message: _105.Log): _105.LogProtoMsg;
            };
            TxResult: {
                typeUrl: string;
                encode(message: _105.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.TxResult;
                fromJSON(object: any): _105.TxResult;
                toJSON(message: _105.TxResult): unknown;
                fromPartial(object: Partial<_105.TxResult>): _105.TxResult;
                fromAmino(object: _105.TxResultAmino): _105.TxResult;
                toAmino(message: _105.TxResult): _105.TxResultAmino;
                fromAminoMsg(object: _105.TxResultAminoMsg): _105.TxResult;
                fromProtoMsg(message: _105.TxResultProtoMsg): _105.TxResult;
                toProto(message: _105.TxResult): Uint8Array;
                toProtoMsg(message: _105.TxResult): _105.TxResultProtoMsg;
            };
            AccessTuple: {
                typeUrl: string;
                encode(message: _105.AccessTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.AccessTuple;
                fromJSON(object: any): _105.AccessTuple;
                toJSON(message: _105.AccessTuple): unknown;
                fromPartial(object: Partial<_105.AccessTuple>): _105.AccessTuple;
                fromAmino(object: _105.AccessTupleAmino): _105.AccessTuple;
                toAmino(message: _105.AccessTuple): _105.AccessTupleAmino;
                fromAminoMsg(object: _105.AccessTupleAminoMsg): _105.AccessTuple;
                fromProtoMsg(message: _105.AccessTupleProtoMsg): _105.AccessTuple;
                toProto(message: _105.AccessTuple): Uint8Array;
                toProtoMsg(message: _105.AccessTuple): _105.AccessTupleProtoMsg;
            };
            TraceConfig: {
                typeUrl: string;
                encode(message: _105.TraceConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.TraceConfig;
                fromJSON(object: any): _105.TraceConfig;
                toJSON(message: _105.TraceConfig): unknown;
                fromPartial(object: Partial<_105.TraceConfig>): _105.TraceConfig;
                fromAmino(object: _105.TraceConfigAmino): _105.TraceConfig;
                toAmino(message: _105.TraceConfig): _105.TraceConfigAmino;
                fromAminoMsg(object: _105.TraceConfigAminoMsg): _105.TraceConfig;
                fromProtoMsg(message: _105.TraceConfigProtoMsg): _105.TraceConfig;
                toProto(message: _105.TraceConfig): Uint8Array;
                toProtoMsg(message: _105.TraceConfig): _105.TraceConfigProtoMsg;
            };
            EventEthereumTx: {
                typeUrl: string;
                encode(message: _104.EventEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EventEthereumTx;
                fromJSON(object: any): _104.EventEthereumTx;
                toJSON(message: _104.EventEthereumTx): unknown;
                fromPartial(object: Partial<_104.EventEthereumTx>): _104.EventEthereumTx;
                fromAmino(object: _104.EventEthereumTxAmino): _104.EventEthereumTx;
                toAmino(message: _104.EventEthereumTx): _104.EventEthereumTxAmino;
                fromAminoMsg(object: _104.EventEthereumTxAminoMsg): _104.EventEthereumTx;
                fromProtoMsg(message: _104.EventEthereumTxProtoMsg): _104.EventEthereumTx;
                toProto(message: _104.EventEthereumTx): Uint8Array;
                toProtoMsg(message: _104.EventEthereumTx): _104.EventEthereumTxProtoMsg;
            };
            EventTxLog: {
                typeUrl: string;
                encode(message: _104.EventTxLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EventTxLog;
                fromJSON(object: any): _104.EventTxLog;
                toJSON(message: _104.EventTxLog): unknown;
                fromPartial(object: Partial<_104.EventTxLog>): _104.EventTxLog;
                fromAmino(object: _104.EventTxLogAmino): _104.EventTxLog;
                toAmino(message: _104.EventTxLog): _104.EventTxLogAmino;
                fromAminoMsg(object: _104.EventTxLogAminoMsg): _104.EventTxLog;
                fromProtoMsg(message: _104.EventTxLogProtoMsg): _104.EventTxLog;
                toProto(message: _104.EventTxLog): Uint8Array;
                toProtoMsg(message: _104.EventTxLog): _104.EventTxLogProtoMsg;
            };
            EventMessage: {
                typeUrl: string;
                encode(message: _104.EventMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EventMessage;
                fromJSON(object: any): _104.EventMessage;
                toJSON(message: _104.EventMessage): unknown;
                fromPartial(object: Partial<_104.EventMessage>): _104.EventMessage;
                fromAmino(object: _104.EventMessageAmino): _104.EventMessage;
                toAmino(message: _104.EventMessage): _104.EventMessageAmino;
                fromAminoMsg(object: _104.EventMessageAminoMsg): _104.EventMessage;
                fromProtoMsg(message: _104.EventMessageProtoMsg): _104.EventMessage;
                toProto(message: _104.EventMessage): Uint8Array;
                toProtoMsg(message: _104.EventMessage): _104.EventMessageProtoMsg;
            };
            EventBlockBloom: {
                typeUrl: string;
                encode(message: _104.EventBlockBloom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EventBlockBloom;
                fromJSON(object: any): _104.EventBlockBloom;
                toJSON(message: _104.EventBlockBloom): unknown;
                fromPartial(object: Partial<_104.EventBlockBloom>): _104.EventBlockBloom;
                fromAmino(object: _104.EventBlockBloomAmino): _104.EventBlockBloom;
                toAmino(message: _104.EventBlockBloom): _104.EventBlockBloomAmino;
                fromAminoMsg(object: _104.EventBlockBloomAminoMsg): _104.EventBlockBloom;
                fromProtoMsg(message: _104.EventBlockBloomProtoMsg): _104.EventBlockBloom;
                toProto(message: _104.EventBlockBloom): Uint8Array;
                toProtoMsg(message: _104.EventBlockBloom): _104.EventBlockBloomProtoMsg;
            };
        };
    }
    namespace feemarket {
        const v1: {
            MsgClientImpl: typeof _290.MsgClientImpl;
            QueryClientImpl: typeof _288.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
                baseFee(request?: _112.QueryBaseFeeRequest): Promise<_112.QueryBaseFeeResponse>;
                blockGas(request?: _112.QueryBlockGasRequest): Promise<_112.QueryBlockGasResponse>;
            };
            LCDQueryClient: typeof _286.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _113.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _113.MsgUpdateParams): {
                        typeUrl: string;
                        value: _113.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _113.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _113.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _113.MsgUpdateParams): {
                        typeUrl: string;
                        value: _113.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/ethermint.feemarket.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _113.MsgUpdateParams) => _113.MsgUpdateParamsAmino;
                    fromAmino: (object: _113.MsgUpdateParamsAmino) => _113.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _113.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgUpdateParams;
                fromJSON(object: any): _113.MsgUpdateParams;
                toJSON(message: _113.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_113.MsgUpdateParams>): _113.MsgUpdateParams;
                fromAmino(object: _113.MsgUpdateParamsAmino): _113.MsgUpdateParams;
                toAmino(message: _113.MsgUpdateParams): _113.MsgUpdateParamsAmino;
                fromAminoMsg(object: _113.MsgUpdateParamsAminoMsg): _113.MsgUpdateParams;
                fromProtoMsg(message: _113.MsgUpdateParamsProtoMsg): _113.MsgUpdateParams;
                toProto(message: _113.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _113.MsgUpdateParams): _113.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _113.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.MsgUpdateParamsResponse;
                fromJSON(_: any): _113.MsgUpdateParamsResponse;
                toJSON(_: _113.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_113.MsgUpdateParamsResponse>): _113.MsgUpdateParamsResponse;
                fromAmino(_: _113.MsgUpdateParamsResponseAmino): _113.MsgUpdateParamsResponse;
                toAmino(_: _113.MsgUpdateParamsResponse): _113.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _113.MsgUpdateParamsResponseAminoMsg): _113.MsgUpdateParamsResponse;
                fromProtoMsg(message: _113.MsgUpdateParamsResponseProtoMsg): _113.MsgUpdateParamsResponse;
                toProto(message: _113.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _113.MsgUpdateParamsResponse): _113.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _112.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryParamsRequest;
                fromJSON(_: any): _112.QueryParamsRequest;
                toJSON(_: _112.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_112.QueryParamsRequest>): _112.QueryParamsRequest;
                fromAmino(_: _112.QueryParamsRequestAmino): _112.QueryParamsRequest;
                toAmino(_: _112.QueryParamsRequest): _112.QueryParamsRequestAmino;
                fromAminoMsg(object: _112.QueryParamsRequestAminoMsg): _112.QueryParamsRequest;
                fromProtoMsg(message: _112.QueryParamsRequestProtoMsg): _112.QueryParamsRequest;
                toProto(message: _112.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryParamsRequest): _112.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _112.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryParamsResponse;
                fromJSON(object: any): _112.QueryParamsResponse;
                toJSON(message: _112.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_112.QueryParamsResponse>): _112.QueryParamsResponse;
                fromAmino(object: _112.QueryParamsResponseAmino): _112.QueryParamsResponse;
                toAmino(message: _112.QueryParamsResponse): _112.QueryParamsResponseAmino;
                fromAminoMsg(object: _112.QueryParamsResponseAminoMsg): _112.QueryParamsResponse;
                fromProtoMsg(message: _112.QueryParamsResponseProtoMsg): _112.QueryParamsResponse;
                toProto(message: _112.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryParamsResponse): _112.QueryParamsResponseProtoMsg;
            };
            QueryBaseFeeRequest: {
                typeUrl: string;
                encode(_: _112.QueryBaseFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryBaseFeeRequest;
                fromJSON(_: any): _112.QueryBaseFeeRequest;
                toJSON(_: _112.QueryBaseFeeRequest): unknown;
                fromPartial(_: Partial<_112.QueryBaseFeeRequest>): _112.QueryBaseFeeRequest;
                fromAmino(_: _112.QueryBaseFeeRequestAmino): _112.QueryBaseFeeRequest;
                toAmino(_: _112.QueryBaseFeeRequest): _112.QueryBaseFeeRequestAmino;
                fromAminoMsg(object: _112.QueryBaseFeeRequestAminoMsg): _112.QueryBaseFeeRequest;
                fromProtoMsg(message: _112.QueryBaseFeeRequestProtoMsg): _112.QueryBaseFeeRequest;
                toProto(message: _112.QueryBaseFeeRequest): Uint8Array;
                toProtoMsg(message: _112.QueryBaseFeeRequest): _112.QueryBaseFeeRequestProtoMsg;
            };
            QueryBaseFeeResponse: {
                typeUrl: string;
                encode(message: _112.QueryBaseFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryBaseFeeResponse;
                fromJSON(object: any): _112.QueryBaseFeeResponse;
                toJSON(message: _112.QueryBaseFeeResponse): unknown;
                fromPartial(object: Partial<_112.QueryBaseFeeResponse>): _112.QueryBaseFeeResponse;
                fromAmino(object: _112.QueryBaseFeeResponseAmino): _112.QueryBaseFeeResponse;
                toAmino(message: _112.QueryBaseFeeResponse): _112.QueryBaseFeeResponseAmino;
                fromAminoMsg(object: _112.QueryBaseFeeResponseAminoMsg): _112.QueryBaseFeeResponse;
                fromProtoMsg(message: _112.QueryBaseFeeResponseProtoMsg): _112.QueryBaseFeeResponse;
                toProto(message: _112.QueryBaseFeeResponse): Uint8Array;
                toProtoMsg(message: _112.QueryBaseFeeResponse): _112.QueryBaseFeeResponseProtoMsg;
            };
            QueryBlockGasRequest: {
                typeUrl: string;
                encode(_: _112.QueryBlockGasRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryBlockGasRequest;
                fromJSON(_: any): _112.QueryBlockGasRequest;
                toJSON(_: _112.QueryBlockGasRequest): unknown;
                fromPartial(_: Partial<_112.QueryBlockGasRequest>): _112.QueryBlockGasRequest;
                fromAmino(_: _112.QueryBlockGasRequestAmino): _112.QueryBlockGasRequest;
                toAmino(_: _112.QueryBlockGasRequest): _112.QueryBlockGasRequestAmino;
                fromAminoMsg(object: _112.QueryBlockGasRequestAminoMsg): _112.QueryBlockGasRequest;
                fromProtoMsg(message: _112.QueryBlockGasRequestProtoMsg): _112.QueryBlockGasRequest;
                toProto(message: _112.QueryBlockGasRequest): Uint8Array;
                toProtoMsg(message: _112.QueryBlockGasRequest): _112.QueryBlockGasRequestProtoMsg;
            };
            QueryBlockGasResponse: {
                typeUrl: string;
                encode(message: _112.QueryBlockGasResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.QueryBlockGasResponse;
                fromJSON(object: any): _112.QueryBlockGasResponse;
                toJSON(message: _112.QueryBlockGasResponse): unknown;
                fromPartial(object: Partial<_112.QueryBlockGasResponse>): _112.QueryBlockGasResponse;
                fromAmino(object: _112.QueryBlockGasResponseAmino): _112.QueryBlockGasResponse;
                toAmino(message: _112.QueryBlockGasResponse): _112.QueryBlockGasResponseAmino;
                fromAminoMsg(object: _112.QueryBlockGasResponseAminoMsg): _112.QueryBlockGasResponse;
                fromProtoMsg(message: _112.QueryBlockGasResponseProtoMsg): _112.QueryBlockGasResponse;
                toProto(message: _112.QueryBlockGasResponse): Uint8Array;
                toProtoMsg(message: _112.QueryBlockGasResponse): _112.QueryBlockGasResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _111.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GenesisState;
                fromJSON(object: any): _111.GenesisState;
                toJSON(message: _111.GenesisState): unknown;
                fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
                fromAmino(object: _111.GenesisStateAmino): _111.GenesisState;
                toAmino(message: _111.GenesisState): _111.GenesisStateAmino;
                fromAminoMsg(object: _111.GenesisStateAminoMsg): _111.GenesisState;
                fromProtoMsg(message: _111.GenesisStateProtoMsg): _111.GenesisState;
                toProto(message: _111.GenesisState): Uint8Array;
                toProtoMsg(message: _111.GenesisState): _111.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _110.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Params;
                fromJSON(object: any): _110.Params;
                toJSON(message: _110.Params): unknown;
                fromPartial(object: Partial<_110.Params>): _110.Params;
                fromAmino(object: _110.ParamsAmino): _110.Params;
                toAmino(message: _110.Params): _110.ParamsAmino;
                fromAminoMsg(object: _110.ParamsAminoMsg): _110.Params;
                fromProtoMsg(message: _110.ParamsProtoMsg): _110.Params;
                toProto(message: _110.Params): Uint8Array;
                toProtoMsg(message: _110.Params): _110.ParamsProtoMsg;
            };
            EventFeeMarket: {
                typeUrl: string;
                encode(message: _109.EventFeeMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.EventFeeMarket;
                fromJSON(object: any): _109.EventFeeMarket;
                toJSON(message: _109.EventFeeMarket): unknown;
                fromPartial(object: Partial<_109.EventFeeMarket>): _109.EventFeeMarket;
                fromAmino(object: _109.EventFeeMarketAmino): _109.EventFeeMarket;
                toAmino(message: _109.EventFeeMarket): _109.EventFeeMarketAmino;
                fromAminoMsg(object: _109.EventFeeMarketAminoMsg): _109.EventFeeMarket;
                fromProtoMsg(message: _109.EventFeeMarketProtoMsg): _109.EventFeeMarket;
                toProto(message: _109.EventFeeMarket): Uint8Array;
                toProtoMsg(message: _109.EventFeeMarket): _109.EventFeeMarketProtoMsg;
            };
            EventBlockGas: {
                typeUrl: string;
                encode(message: _109.EventBlockGas, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.EventBlockGas;
                fromJSON(object: any): _109.EventBlockGas;
                toJSON(message: _109.EventBlockGas): unknown;
                fromPartial(object: Partial<_109.EventBlockGas>): _109.EventBlockGas;
                fromAmino(object: _109.EventBlockGasAmino): _109.EventBlockGas;
                toAmino(message: _109.EventBlockGas): _109.EventBlockGasAmino;
                fromAminoMsg(object: _109.EventBlockGasAminoMsg): _109.EventBlockGas;
                fromProtoMsg(message: _109.EventBlockGasProtoMsg): _109.EventBlockGas;
                toProto(message: _109.EventBlockGas): Uint8Array;
                toProtoMsg(message: _109.EventBlockGas): _109.EventBlockGasProtoMsg;
            };
        };
    }
    namespace types {
        const v1: {
            ExtensionOptionsWeb3Tx: {
                typeUrl: string;
                encode(message: _117.ExtensionOptionsWeb3Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.ExtensionOptionsWeb3Tx;
                fromJSON(object: any): _117.ExtensionOptionsWeb3Tx;
                toJSON(message: _117.ExtensionOptionsWeb3Tx): unknown;
                fromPartial(object: Partial<_117.ExtensionOptionsWeb3Tx>): _117.ExtensionOptionsWeb3Tx;
                fromAmino(object: _117.ExtensionOptionsWeb3TxAmino): _117.ExtensionOptionsWeb3Tx;
                toAmino(message: _117.ExtensionOptionsWeb3Tx): _117.ExtensionOptionsWeb3TxAmino;
                fromAminoMsg(object: _117.ExtensionOptionsWeb3TxAminoMsg): _117.ExtensionOptionsWeb3Tx;
                fromProtoMsg(message: _117.ExtensionOptionsWeb3TxProtoMsg): _117.ExtensionOptionsWeb3Tx;
                toProto(message: _117.ExtensionOptionsWeb3Tx): Uint8Array;
                toProtoMsg(message: _117.ExtensionOptionsWeb3Tx): _117.ExtensionOptionsWeb3TxProtoMsg;
            };
            TxResult: {
                typeUrl: string;
                encode(message: _116.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.TxResult;
                fromJSON(object: any): _116.TxResult;
                toJSON(message: _116.TxResult): unknown;
                fromPartial(object: Partial<_116.TxResult>): _116.TxResult;
                fromAmino(object: _116.TxResultAmino): _116.TxResult;
                toAmino(message: _116.TxResult): _116.TxResultAmino;
                fromAminoMsg(object: _116.TxResultAminoMsg): _116.TxResult;
                fromProtoMsg(message: _116.TxResultProtoMsg): _116.TxResult;
                toProto(message: _116.TxResult): Uint8Array;
                toProtoMsg(message: _116.TxResult): _116.TxResultProtoMsg;
            };
            ExtensionOptionDynamicFeeTx: {
                typeUrl: string;
                encode(message: _115.ExtensionOptionDynamicFeeTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ExtensionOptionDynamicFeeTx;
                fromJSON(object: any): _115.ExtensionOptionDynamicFeeTx;
                toJSON(message: _115.ExtensionOptionDynamicFeeTx): unknown;
                fromPartial(object: Partial<_115.ExtensionOptionDynamicFeeTx>): _115.ExtensionOptionDynamicFeeTx;
                fromAmino(object: _115.ExtensionOptionDynamicFeeTxAmino): _115.ExtensionOptionDynamicFeeTx;
                toAmino(message: _115.ExtensionOptionDynamicFeeTx): _115.ExtensionOptionDynamicFeeTxAmino;
                fromAminoMsg(object: _115.ExtensionOptionDynamicFeeTxAminoMsg): _115.ExtensionOptionDynamicFeeTx;
                fromProtoMsg(message: _115.ExtensionOptionDynamicFeeTxProtoMsg): _115.ExtensionOptionDynamicFeeTx;
                toProto(message: _115.ExtensionOptionDynamicFeeTx): Uint8Array;
                toProtoMsg(message: _115.ExtensionOptionDynamicFeeTx): _115.ExtensionOptionDynamicFeeTxProtoMsg;
            };
            EthAccount: {
                typeUrl: string;
                encode(message: _114.EthAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.EthAccount;
                fromJSON(object: any): _114.EthAccount;
                toJSON(message: _114.EthAccount): unknown;
                fromPartial(object: Partial<_114.EthAccount>): _114.EthAccount;
                fromAmino(object: _114.EthAccountAmino): _114.EthAccount;
                toAmino(message: _114.EthAccount): _114.EthAccountAmino;
                fromAminoMsg(object: _114.EthAccountAminoMsg): _114.EthAccount;
                fromProtoMsg(message: _114.EthAccountProtoMsg): _114.EthAccount;
                toProto(message: _114.EthAccount): Uint8Array;
                toProtoMsg(message: _114.EthAccount): _114.EthAccountProtoMsg;
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
                    v1: _289.MsgClientImpl;
                };
                feemarket: {
                    v1: _290.MsgClientImpl;
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
                        account(request: _107.QueryAccountRequest): Promise<_107.QueryAccountResponse>;
                        cosmosAccount(request: _107.QueryCosmosAccountRequest): Promise<_107.QueryCosmosAccountResponse>;
                        validatorAccount(request: _107.QueryValidatorAccountRequest): Promise<_107.QueryValidatorAccountResponse>;
                        balance(request: _107.QueryBalanceRequest): Promise<_107.QueryBalanceResponse>;
                        storage(request: _107.QueryStorageRequest): Promise<_107.QueryStorageResponse>;
                        code(request: _107.QueryCodeRequest): Promise<_107.QueryCodeResponse>;
                        params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                        ethCall(request: _107.EthCallRequest): Promise<_108.MsgEthereumTxResponse>;
                        estimateGas(request: _107.EthCallRequest): Promise<_107.EstimateGasResponse>;
                        traceTx(request: _107.QueryTraceTxRequest): Promise<_107.QueryTraceTxResponse>;
                        traceBlock(request: _107.QueryTraceBlockRequest): Promise<_107.QueryTraceBlockResponse>;
                        baseFee(request?: _107.QueryBaseFeeRequest): Promise<_107.QueryBaseFeeResponse>;
                    };
                };
                feemarket: {
                    v1: {
                        params(request?: _112.QueryParamsRequest): Promise<_112.QueryParamsResponse>;
                        baseFee(request?: _112.QueryBaseFeeRequest): Promise<_112.QueryBaseFeeResponse>;
                        blockGas(request?: _112.QueryBlockGasRequest): Promise<_112.QueryBlockGasResponse>;
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
                    v1: _285.LCDQueryClient;
                };
                feemarket: {
                    v1: _286.LCDQueryClient;
                };
            };
        }>;
    };
}
