import * as _149 from "./applications/fee/v1/ack";
import * as _150 from "./applications/fee/v1/fee";
import * as _151 from "./applications/fee/v1/genesis";
import * as _152 from "./applications/fee/v1/metadata";
import * as _153 from "./applications/fee/v1/query";
import * as _154 from "./applications/fee/v1/tx";
import * as _155 from "./applications/interchain_accounts/controller/v1/controller";
import * as _156 from "./applications/interchain_accounts/controller/v1/query";
import * as _157 from "./applications/interchain_accounts/controller/v1/tx";
import * as _158 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _159 from "./applications/interchain_accounts/host/v1/host";
import * as _160 from "./applications/interchain_accounts/host/v1/query";
import * as _161 from "./applications/interchain_accounts/v1/account";
import * as _162 from "./applications/interchain_accounts/v1/metadata";
import * as _163 from "./applications/interchain_accounts/v1/packet";
import * as _164 from "./applications/transfer/v1/authz";
import * as _165 from "./applications/transfer/v1/genesis";
import * as _166 from "./applications/transfer/v1/query";
import * as _167 from "./applications/transfer/v1/transfer";
import * as _168 from "./applications/transfer/v1/tx";
import * as _169 from "./applications/transfer/v2/packet";
import * as _170 from "./core/channel/v1/channel";
import * as _171 from "./core/channel/v1/genesis";
import * as _172 from "./core/channel/v1/query";
import * as _173 from "./core/channel/v1/tx";
import * as _174 from "./core/client/v1/client";
import * as _175 from "./core/client/v1/genesis";
import * as _176 from "./core/client/v1/query";
import * as _177 from "./core/client/v1/tx";
import * as _178 from "./core/commitment/v1/commitment";
import * as _179 from "./core/connection/v1/connection";
import * as _180 from "./core/connection/v1/genesis";
import * as _181 from "./core/connection/v1/query";
import * as _182 from "./core/connection/v1/tx";
import * as _183 from "./core/types/v1/genesis";
import * as _184 from "./lightclients/localhost/v2/localhost";
import * as _185 from "./lightclients/solomachine/v2/solomachine";
import * as _186 from "./lightclients/solomachine/v3/solomachine";
import * as _187 from "./lightclients/tendermint/v1/tendermint";
import * as _325 from "./applications/fee/v1/query.lcd";
import * as _326 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _327 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _328 from "./applications/transfer/v1/query.lcd";
import * as _329 from "./core/channel/v1/query.lcd";
import * as _330 from "./core/client/v1/query.lcd";
import * as _331 from "./core/connection/v1/query.lcd";
import * as _332 from "./applications/fee/v1/query.rpc.Query";
import * as _333 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _334 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _335 from "./applications/transfer/v1/query.rpc.Query";
import * as _336 from "./core/channel/v1/query.rpc.Query";
import * as _337 from "./core/client/v1/query.rpc.Query";
import * as _338 from "./core/connection/v1/query.rpc.Query";
import * as _339 from "./applications/fee/v1/tx.rpc.msg";
import * as _340 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _341 from "./applications/transfer/v1/tx.rpc.msg";
import * as _342 from "./core/channel/v1/tx.rpc.msg";
import * as _343 from "./core/client/v1/tx.rpc.msg";
import * as _344 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _339.MsgClientImpl;
                QueryClientImpl: typeof _332.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _153.QueryIncentivizedPacketsRequest): Promise<_153.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _153.QueryIncentivizedPacketRequest): Promise<_153.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _153.QueryIncentivizedPacketsForChannelRequest): Promise<_153.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _153.QueryTotalRecvFeesRequest): Promise<_153.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _153.QueryTotalAckFeesRequest): Promise<_153.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _153.QueryTotalTimeoutFeesRequest): Promise<_153.QueryTotalTimeoutFeesResponse>;
                    payee(request: _153.QueryPayeeRequest): Promise<_153.QueryPayeeResponse>;
                    counterpartyPayee(request: _153.QueryCounterpartyPayeeRequest): Promise<_153.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _153.QueryFeeEnabledChannelsRequest): Promise<_153.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _153.QueryFeeEnabledChannelRequest): Promise<_153.QueryFeeEnabledChannelResponse>;
                };
                LCDQueryClient: typeof _325.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _154.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _154.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _154.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _154.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _154.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _154.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _154.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _154.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _154.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _154.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _154.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _154.MsgPayPacketFeeAsync;
                        };
                    };
                    toJSON: {
                        registerPayee(value: _154.MsgRegisterPayee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        registerCounterpartyPayee(value: _154.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        payPacketFee(value: _154.MsgPayPacketFee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        payPacketFeeAsync(value: _154.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        registerPayee(value: any): {
                            typeUrl: string;
                            value: _154.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: any): {
                            typeUrl: string;
                            value: _154.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: any): {
                            typeUrl: string;
                            value: _154.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: any): {
                            typeUrl: string;
                            value: _154.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _154.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _154.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _154.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _154.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _154.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _154.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _154.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _154.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _154.MsgRegisterPayee) => _154.MsgRegisterPayeeAmino;
                        fromAmino: (object: _154.MsgRegisterPayeeAmino) => _154.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _154.MsgRegisterCounterpartyPayee) => _154.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _154.MsgRegisterCounterpartyPayeeAmino) => _154.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _154.MsgPayPacketFee) => _154.MsgPayPacketFeeAmino;
                        fromAmino: (object: _154.MsgPayPacketFeeAmino) => _154.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _154.MsgPayPacketFeeAsync) => _154.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _154.MsgPayPacketFeeAsyncAmino) => _154.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _154.MsgRegisterPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgRegisterPayee;
                    fromJSON(object: any): _154.MsgRegisterPayee;
                    toJSON(message: _154.MsgRegisterPayee): unknown;
                    fromPartial(object: Partial<_154.MsgRegisterPayee>): _154.MsgRegisterPayee;
                    fromAmino(object: _154.MsgRegisterPayeeAmino): _154.MsgRegisterPayee;
                    toAmino(message: _154.MsgRegisterPayee): _154.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _154.MsgRegisterPayeeAminoMsg): _154.MsgRegisterPayee;
                    toAminoMsg(message: _154.MsgRegisterPayee): _154.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _154.MsgRegisterPayeeProtoMsg): _154.MsgRegisterPayee;
                    toProto(message: _154.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _154.MsgRegisterPayee): _154.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _154.MsgRegisterPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgRegisterPayeeResponse;
                    fromJSON(_: any): _154.MsgRegisterPayeeResponse;
                    toJSON(_: _154.MsgRegisterPayeeResponse): unknown;
                    fromPartial(_: Partial<_154.MsgRegisterPayeeResponse>): _154.MsgRegisterPayeeResponse;
                    fromAmino(_: _154.MsgRegisterPayeeResponseAmino): _154.MsgRegisterPayeeResponse;
                    toAmino(_: _154.MsgRegisterPayeeResponse): _154.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _154.MsgRegisterPayeeResponseAminoMsg): _154.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _154.MsgRegisterPayeeResponse): _154.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgRegisterPayeeResponseProtoMsg): _154.MsgRegisterPayeeResponse;
                    toProto(message: _154.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgRegisterPayeeResponse): _154.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _154.MsgRegisterCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgRegisterCounterpartyPayee;
                    fromJSON(object: any): _154.MsgRegisterCounterpartyPayee;
                    toJSON(message: _154.MsgRegisterCounterpartyPayee): unknown;
                    fromPartial(object: Partial<_154.MsgRegisterCounterpartyPayee>): _154.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _154.MsgRegisterCounterpartyPayeeAmino): _154.MsgRegisterCounterpartyPayee;
                    toAmino(message: _154.MsgRegisterCounterpartyPayee): _154.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _154.MsgRegisterCounterpartyPayeeAminoMsg): _154.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _154.MsgRegisterCounterpartyPayee): _154.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _154.MsgRegisterCounterpartyPayeeProtoMsg): _154.MsgRegisterCounterpartyPayee;
                    toProto(message: _154.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _154.MsgRegisterCounterpartyPayee): _154.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _154.MsgRegisterCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgRegisterCounterpartyPayeeResponse;
                    fromJSON(_: any): _154.MsgRegisterCounterpartyPayeeResponse;
                    toJSON(_: _154.MsgRegisterCounterpartyPayeeResponse): unknown;
                    fromPartial(_: Partial<_154.MsgRegisterCounterpartyPayeeResponse>): _154.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _154.MsgRegisterCounterpartyPayeeResponseAmino): _154.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _154.MsgRegisterCounterpartyPayeeResponse): _154.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _154.MsgRegisterCounterpartyPayeeResponseAminoMsg): _154.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _154.MsgRegisterCounterpartyPayeeResponse): _154.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgRegisterCounterpartyPayeeResponseProtoMsg): _154.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _154.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgRegisterCounterpartyPayeeResponse): _154.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _154.MsgPayPacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgPayPacketFee;
                    fromJSON(object: any): _154.MsgPayPacketFee;
                    toJSON(message: _154.MsgPayPacketFee): unknown;
                    fromPartial(object: Partial<_154.MsgPayPacketFee>): _154.MsgPayPacketFee;
                    fromAmino(object: _154.MsgPayPacketFeeAmino): _154.MsgPayPacketFee;
                    toAmino(message: _154.MsgPayPacketFee): _154.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _154.MsgPayPacketFeeAminoMsg): _154.MsgPayPacketFee;
                    toAminoMsg(message: _154.MsgPayPacketFee): _154.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _154.MsgPayPacketFeeProtoMsg): _154.MsgPayPacketFee;
                    toProto(message: _154.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _154.MsgPayPacketFee): _154.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _154.MsgPayPacketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgPayPacketFeeResponse;
                    fromJSON(_: any): _154.MsgPayPacketFeeResponse;
                    toJSON(_: _154.MsgPayPacketFeeResponse): unknown;
                    fromPartial(_: Partial<_154.MsgPayPacketFeeResponse>): _154.MsgPayPacketFeeResponse;
                    fromAmino(_: _154.MsgPayPacketFeeResponseAmino): _154.MsgPayPacketFeeResponse;
                    toAmino(_: _154.MsgPayPacketFeeResponse): _154.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _154.MsgPayPacketFeeResponseAminoMsg): _154.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _154.MsgPayPacketFeeResponse): _154.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgPayPacketFeeResponseProtoMsg): _154.MsgPayPacketFeeResponse;
                    toProto(message: _154.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgPayPacketFeeResponse): _154.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _154.MsgPayPacketFeeAsync, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgPayPacketFeeAsync;
                    fromJSON(object: any): _154.MsgPayPacketFeeAsync;
                    toJSON(message: _154.MsgPayPacketFeeAsync): unknown;
                    fromPartial(object: Partial<_154.MsgPayPacketFeeAsync>): _154.MsgPayPacketFeeAsync;
                    fromAmino(object: _154.MsgPayPacketFeeAsyncAmino): _154.MsgPayPacketFeeAsync;
                    toAmino(message: _154.MsgPayPacketFeeAsync): _154.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _154.MsgPayPacketFeeAsyncAminoMsg): _154.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _154.MsgPayPacketFeeAsync): _154.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _154.MsgPayPacketFeeAsyncProtoMsg): _154.MsgPayPacketFeeAsync;
                    toProto(message: _154.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _154.MsgPayPacketFeeAsync): _154.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _154.MsgPayPacketFeeAsyncResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgPayPacketFeeAsyncResponse;
                    fromJSON(_: any): _154.MsgPayPacketFeeAsyncResponse;
                    toJSON(_: _154.MsgPayPacketFeeAsyncResponse): unknown;
                    fromPartial(_: Partial<_154.MsgPayPacketFeeAsyncResponse>): _154.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _154.MsgPayPacketFeeAsyncResponseAmino): _154.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _154.MsgPayPacketFeeAsyncResponse): _154.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _154.MsgPayPacketFeeAsyncResponseAminoMsg): _154.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _154.MsgPayPacketFeeAsyncResponse): _154.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _154.MsgPayPacketFeeAsyncResponseProtoMsg): _154.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _154.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _154.MsgPayPacketFeeAsyncResponse): _154.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryIncentivizedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryIncentivizedPacketsRequest;
                    fromJSON(object: any): _153.QueryIncentivizedPacketsRequest;
                    toJSON(message: _153.QueryIncentivizedPacketsRequest): unknown;
                    fromPartial(object: Partial<_153.QueryIncentivizedPacketsRequest>): _153.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _153.QueryIncentivizedPacketsRequestAmino): _153.QueryIncentivizedPacketsRequest;
                    toAmino(message: _153.QueryIncentivizedPacketsRequest): _153.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _153.QueryIncentivizedPacketsRequestAminoMsg): _153.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _153.QueryIncentivizedPacketsRequest): _153.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryIncentivizedPacketsRequestProtoMsg): _153.QueryIncentivizedPacketsRequest;
                    toProto(message: _153.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryIncentivizedPacketsRequest): _153.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryIncentivizedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryIncentivizedPacketsResponse;
                    fromJSON(object: any): _153.QueryIncentivizedPacketsResponse;
                    toJSON(message: _153.QueryIncentivizedPacketsResponse): unknown;
                    fromPartial(object: Partial<_153.QueryIncentivizedPacketsResponse>): _153.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _153.QueryIncentivizedPacketsResponseAmino): _153.QueryIncentivizedPacketsResponse;
                    toAmino(message: _153.QueryIncentivizedPacketsResponse): _153.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _153.QueryIncentivizedPacketsResponseAminoMsg): _153.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _153.QueryIncentivizedPacketsResponse): _153.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryIncentivizedPacketsResponseProtoMsg): _153.QueryIncentivizedPacketsResponse;
                    toProto(message: _153.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryIncentivizedPacketsResponse): _153.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryIncentivizedPacketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryIncentivizedPacketRequest;
                    fromJSON(object: any): _153.QueryIncentivizedPacketRequest;
                    toJSON(message: _153.QueryIncentivizedPacketRequest): unknown;
                    fromPartial(object: Partial<_153.QueryIncentivizedPacketRequest>): _153.QueryIncentivizedPacketRequest;
                    fromAmino(object: _153.QueryIncentivizedPacketRequestAmino): _153.QueryIncentivizedPacketRequest;
                    toAmino(message: _153.QueryIncentivizedPacketRequest): _153.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _153.QueryIncentivizedPacketRequestAminoMsg): _153.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _153.QueryIncentivizedPacketRequest): _153.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryIncentivizedPacketRequestProtoMsg): _153.QueryIncentivizedPacketRequest;
                    toProto(message: _153.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryIncentivizedPacketRequest): _153.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryIncentivizedPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryIncentivizedPacketResponse;
                    fromJSON(object: any): _153.QueryIncentivizedPacketResponse;
                    toJSON(message: _153.QueryIncentivizedPacketResponse): unknown;
                    fromPartial(object: Partial<_153.QueryIncentivizedPacketResponse>): _153.QueryIncentivizedPacketResponse;
                    fromAmino(object: _153.QueryIncentivizedPacketResponseAmino): _153.QueryIncentivizedPacketResponse;
                    toAmino(message: _153.QueryIncentivizedPacketResponse): _153.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _153.QueryIncentivizedPacketResponseAminoMsg): _153.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _153.QueryIncentivizedPacketResponse): _153.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryIncentivizedPacketResponseProtoMsg): _153.QueryIncentivizedPacketResponse;
                    toProto(message: _153.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryIncentivizedPacketResponse): _153.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryIncentivizedPacketsForChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryIncentivizedPacketsForChannelRequest;
                    fromJSON(object: any): _153.QueryIncentivizedPacketsForChannelRequest;
                    toJSON(message: _153.QueryIncentivizedPacketsForChannelRequest): unknown;
                    fromPartial(object: Partial<_153.QueryIncentivizedPacketsForChannelRequest>): _153.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _153.QueryIncentivizedPacketsForChannelRequestAmino): _153.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _153.QueryIncentivizedPacketsForChannelRequest): _153.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _153.QueryIncentivizedPacketsForChannelRequestAminoMsg): _153.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _153.QueryIncentivizedPacketsForChannelRequest): _153.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryIncentivizedPacketsForChannelRequestProtoMsg): _153.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _153.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryIncentivizedPacketsForChannelRequest): _153.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryIncentivizedPacketsForChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryIncentivizedPacketsForChannelResponse;
                    fromJSON(object: any): _153.QueryIncentivizedPacketsForChannelResponse;
                    toJSON(message: _153.QueryIncentivizedPacketsForChannelResponse): unknown;
                    fromPartial(object: Partial<_153.QueryIncentivizedPacketsForChannelResponse>): _153.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _153.QueryIncentivizedPacketsForChannelResponseAmino): _153.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _153.QueryIncentivizedPacketsForChannelResponse): _153.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _153.QueryIncentivizedPacketsForChannelResponseAminoMsg): _153.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _153.QueryIncentivizedPacketsForChannelResponse): _153.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryIncentivizedPacketsForChannelResponseProtoMsg): _153.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _153.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryIncentivizedPacketsForChannelResponse): _153.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryTotalRecvFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryTotalRecvFeesRequest;
                    fromJSON(object: any): _153.QueryTotalRecvFeesRequest;
                    toJSON(message: _153.QueryTotalRecvFeesRequest): unknown;
                    fromPartial(object: Partial<_153.QueryTotalRecvFeesRequest>): _153.QueryTotalRecvFeesRequest;
                    fromAmino(object: _153.QueryTotalRecvFeesRequestAmino): _153.QueryTotalRecvFeesRequest;
                    toAmino(message: _153.QueryTotalRecvFeesRequest): _153.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _153.QueryTotalRecvFeesRequestAminoMsg): _153.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _153.QueryTotalRecvFeesRequest): _153.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryTotalRecvFeesRequestProtoMsg): _153.QueryTotalRecvFeesRequest;
                    toProto(message: _153.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryTotalRecvFeesRequest): _153.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryTotalRecvFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryTotalRecvFeesResponse;
                    fromJSON(object: any): _153.QueryTotalRecvFeesResponse;
                    toJSON(message: _153.QueryTotalRecvFeesResponse): unknown;
                    fromPartial(object: Partial<_153.QueryTotalRecvFeesResponse>): _153.QueryTotalRecvFeesResponse;
                    fromAmino(object: _153.QueryTotalRecvFeesResponseAmino): _153.QueryTotalRecvFeesResponse;
                    toAmino(message: _153.QueryTotalRecvFeesResponse): _153.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _153.QueryTotalRecvFeesResponseAminoMsg): _153.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _153.QueryTotalRecvFeesResponse): _153.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryTotalRecvFeesResponseProtoMsg): _153.QueryTotalRecvFeesResponse;
                    toProto(message: _153.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryTotalRecvFeesResponse): _153.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryTotalAckFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryTotalAckFeesRequest;
                    fromJSON(object: any): _153.QueryTotalAckFeesRequest;
                    toJSON(message: _153.QueryTotalAckFeesRequest): unknown;
                    fromPartial(object: Partial<_153.QueryTotalAckFeesRequest>): _153.QueryTotalAckFeesRequest;
                    fromAmino(object: _153.QueryTotalAckFeesRequestAmino): _153.QueryTotalAckFeesRequest;
                    toAmino(message: _153.QueryTotalAckFeesRequest): _153.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _153.QueryTotalAckFeesRequestAminoMsg): _153.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _153.QueryTotalAckFeesRequest): _153.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryTotalAckFeesRequestProtoMsg): _153.QueryTotalAckFeesRequest;
                    toProto(message: _153.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryTotalAckFeesRequest): _153.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryTotalAckFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryTotalAckFeesResponse;
                    fromJSON(object: any): _153.QueryTotalAckFeesResponse;
                    toJSON(message: _153.QueryTotalAckFeesResponse): unknown;
                    fromPartial(object: Partial<_153.QueryTotalAckFeesResponse>): _153.QueryTotalAckFeesResponse;
                    fromAmino(object: _153.QueryTotalAckFeesResponseAmino): _153.QueryTotalAckFeesResponse;
                    toAmino(message: _153.QueryTotalAckFeesResponse): _153.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _153.QueryTotalAckFeesResponseAminoMsg): _153.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _153.QueryTotalAckFeesResponse): _153.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryTotalAckFeesResponseProtoMsg): _153.QueryTotalAckFeesResponse;
                    toProto(message: _153.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryTotalAckFeesResponse): _153.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryTotalTimeoutFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryTotalTimeoutFeesRequest;
                    fromJSON(object: any): _153.QueryTotalTimeoutFeesRequest;
                    toJSON(message: _153.QueryTotalTimeoutFeesRequest): unknown;
                    fromPartial(object: Partial<_153.QueryTotalTimeoutFeesRequest>): _153.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _153.QueryTotalTimeoutFeesRequestAmino): _153.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _153.QueryTotalTimeoutFeesRequest): _153.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _153.QueryTotalTimeoutFeesRequestAminoMsg): _153.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _153.QueryTotalTimeoutFeesRequest): _153.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryTotalTimeoutFeesRequestProtoMsg): _153.QueryTotalTimeoutFeesRequest;
                    toProto(message: _153.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryTotalTimeoutFeesRequest): _153.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryTotalTimeoutFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryTotalTimeoutFeesResponse;
                    fromJSON(object: any): _153.QueryTotalTimeoutFeesResponse;
                    toJSON(message: _153.QueryTotalTimeoutFeesResponse): unknown;
                    fromPartial(object: Partial<_153.QueryTotalTimeoutFeesResponse>): _153.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _153.QueryTotalTimeoutFeesResponseAmino): _153.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _153.QueryTotalTimeoutFeesResponse): _153.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _153.QueryTotalTimeoutFeesResponseAminoMsg): _153.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _153.QueryTotalTimeoutFeesResponse): _153.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryTotalTimeoutFeesResponseProtoMsg): _153.QueryTotalTimeoutFeesResponse;
                    toProto(message: _153.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryTotalTimeoutFeesResponse): _153.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryPayeeRequest;
                    fromJSON(object: any): _153.QueryPayeeRequest;
                    toJSON(message: _153.QueryPayeeRequest): unknown;
                    fromPartial(object: Partial<_153.QueryPayeeRequest>): _153.QueryPayeeRequest;
                    fromAmino(object: _153.QueryPayeeRequestAmino): _153.QueryPayeeRequest;
                    toAmino(message: _153.QueryPayeeRequest): _153.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _153.QueryPayeeRequestAminoMsg): _153.QueryPayeeRequest;
                    toAminoMsg(message: _153.QueryPayeeRequest): _153.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryPayeeRequestProtoMsg): _153.QueryPayeeRequest;
                    toProto(message: _153.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryPayeeRequest): _153.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryPayeeResponse;
                    fromJSON(object: any): _153.QueryPayeeResponse;
                    toJSON(message: _153.QueryPayeeResponse): unknown;
                    fromPartial(object: Partial<_153.QueryPayeeResponse>): _153.QueryPayeeResponse;
                    fromAmino(object: _153.QueryPayeeResponseAmino): _153.QueryPayeeResponse;
                    toAmino(message: _153.QueryPayeeResponse): _153.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _153.QueryPayeeResponseAminoMsg): _153.QueryPayeeResponse;
                    toAminoMsg(message: _153.QueryPayeeResponse): _153.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryPayeeResponseProtoMsg): _153.QueryPayeeResponse;
                    toProto(message: _153.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryPayeeResponse): _153.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryCounterpartyPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryCounterpartyPayeeRequest;
                    fromJSON(object: any): _153.QueryCounterpartyPayeeRequest;
                    toJSON(message: _153.QueryCounterpartyPayeeRequest): unknown;
                    fromPartial(object: Partial<_153.QueryCounterpartyPayeeRequest>): _153.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _153.QueryCounterpartyPayeeRequestAmino): _153.QueryCounterpartyPayeeRequest;
                    toAmino(message: _153.QueryCounterpartyPayeeRequest): _153.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _153.QueryCounterpartyPayeeRequestAminoMsg): _153.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _153.QueryCounterpartyPayeeRequest): _153.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryCounterpartyPayeeRequestProtoMsg): _153.QueryCounterpartyPayeeRequest;
                    toProto(message: _153.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryCounterpartyPayeeRequest): _153.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryCounterpartyPayeeResponse;
                    fromJSON(object: any): _153.QueryCounterpartyPayeeResponse;
                    toJSON(message: _153.QueryCounterpartyPayeeResponse): unknown;
                    fromPartial(object: Partial<_153.QueryCounterpartyPayeeResponse>): _153.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _153.QueryCounterpartyPayeeResponseAmino): _153.QueryCounterpartyPayeeResponse;
                    toAmino(message: _153.QueryCounterpartyPayeeResponse): _153.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _153.QueryCounterpartyPayeeResponseAminoMsg): _153.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _153.QueryCounterpartyPayeeResponse): _153.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryCounterpartyPayeeResponseProtoMsg): _153.QueryCounterpartyPayeeResponse;
                    toProto(message: _153.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryCounterpartyPayeeResponse): _153.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryFeeEnabledChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryFeeEnabledChannelsRequest;
                    fromJSON(object: any): _153.QueryFeeEnabledChannelsRequest;
                    toJSON(message: _153.QueryFeeEnabledChannelsRequest): unknown;
                    fromPartial(object: Partial<_153.QueryFeeEnabledChannelsRequest>): _153.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _153.QueryFeeEnabledChannelsRequestAmino): _153.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _153.QueryFeeEnabledChannelsRequest): _153.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _153.QueryFeeEnabledChannelsRequestAminoMsg): _153.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _153.QueryFeeEnabledChannelsRequest): _153.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryFeeEnabledChannelsRequestProtoMsg): _153.QueryFeeEnabledChannelsRequest;
                    toProto(message: _153.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryFeeEnabledChannelsRequest): _153.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryFeeEnabledChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryFeeEnabledChannelsResponse;
                    fromJSON(object: any): _153.QueryFeeEnabledChannelsResponse;
                    toJSON(message: _153.QueryFeeEnabledChannelsResponse): unknown;
                    fromPartial(object: Partial<_153.QueryFeeEnabledChannelsResponse>): _153.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _153.QueryFeeEnabledChannelsResponseAmino): _153.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _153.QueryFeeEnabledChannelsResponse): _153.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _153.QueryFeeEnabledChannelsResponseAminoMsg): _153.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _153.QueryFeeEnabledChannelsResponse): _153.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryFeeEnabledChannelsResponseProtoMsg): _153.QueryFeeEnabledChannelsResponse;
                    toProto(message: _153.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryFeeEnabledChannelsResponse): _153.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _153.QueryFeeEnabledChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryFeeEnabledChannelRequest;
                    fromJSON(object: any): _153.QueryFeeEnabledChannelRequest;
                    toJSON(message: _153.QueryFeeEnabledChannelRequest): unknown;
                    fromPartial(object: Partial<_153.QueryFeeEnabledChannelRequest>): _153.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _153.QueryFeeEnabledChannelRequestAmino): _153.QueryFeeEnabledChannelRequest;
                    toAmino(message: _153.QueryFeeEnabledChannelRequest): _153.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _153.QueryFeeEnabledChannelRequestAminoMsg): _153.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _153.QueryFeeEnabledChannelRequest): _153.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _153.QueryFeeEnabledChannelRequestProtoMsg): _153.QueryFeeEnabledChannelRequest;
                    toProto(message: _153.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _153.QueryFeeEnabledChannelRequest): _153.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _153.QueryFeeEnabledChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryFeeEnabledChannelResponse;
                    fromJSON(object: any): _153.QueryFeeEnabledChannelResponse;
                    toJSON(message: _153.QueryFeeEnabledChannelResponse): unknown;
                    fromPartial(object: Partial<_153.QueryFeeEnabledChannelResponse>): _153.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _153.QueryFeeEnabledChannelResponseAmino): _153.QueryFeeEnabledChannelResponse;
                    toAmino(message: _153.QueryFeeEnabledChannelResponse): _153.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _153.QueryFeeEnabledChannelResponseAminoMsg): _153.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _153.QueryFeeEnabledChannelResponse): _153.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _153.QueryFeeEnabledChannelResponseProtoMsg): _153.QueryFeeEnabledChannelResponse;
                    toProto(message: _153.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _153.QueryFeeEnabledChannelResponse): _153.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _152.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Metadata;
                    fromJSON(object: any): _152.Metadata;
                    toJSON(message: _152.Metadata): unknown;
                    fromPartial(object: Partial<_152.Metadata>): _152.Metadata;
                    fromAmino(object: _152.MetadataAmino): _152.Metadata;
                    toAmino(message: _152.Metadata): _152.MetadataAmino;
                    fromAminoMsg(object: _152.MetadataAminoMsg): _152.Metadata;
                    toAminoMsg(message: _152.Metadata): _152.MetadataAminoMsg;
                    fromProtoMsg(message: _152.MetadataProtoMsg): _152.Metadata;
                    toProto(message: _152.Metadata): Uint8Array;
                    toProtoMsg(message: _152.Metadata): _152.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _151.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.GenesisState;
                    fromJSON(object: any): _151.GenesisState;
                    toJSON(message: _151.GenesisState): unknown;
                    fromPartial(object: Partial<_151.GenesisState>): _151.GenesisState;
                    fromAmino(object: _151.GenesisStateAmino): _151.GenesisState;
                    toAmino(message: _151.GenesisState): _151.GenesisStateAmino;
                    fromAminoMsg(object: _151.GenesisStateAminoMsg): _151.GenesisState;
                    toAminoMsg(message: _151.GenesisState): _151.GenesisStateAminoMsg;
                    fromProtoMsg(message: _151.GenesisStateProtoMsg): _151.GenesisState;
                    toProto(message: _151.GenesisState): Uint8Array;
                    toProtoMsg(message: _151.GenesisState): _151.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _151.FeeEnabledChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.FeeEnabledChannel;
                    fromJSON(object: any): _151.FeeEnabledChannel;
                    toJSON(message: _151.FeeEnabledChannel): unknown;
                    fromPartial(object: Partial<_151.FeeEnabledChannel>): _151.FeeEnabledChannel;
                    fromAmino(object: _151.FeeEnabledChannelAmino): _151.FeeEnabledChannel;
                    toAmino(message: _151.FeeEnabledChannel): _151.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _151.FeeEnabledChannelAminoMsg): _151.FeeEnabledChannel;
                    toAminoMsg(message: _151.FeeEnabledChannel): _151.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _151.FeeEnabledChannelProtoMsg): _151.FeeEnabledChannel;
                    toProto(message: _151.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _151.FeeEnabledChannel): _151.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _151.RegisteredPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.RegisteredPayee;
                    fromJSON(object: any): _151.RegisteredPayee;
                    toJSON(message: _151.RegisteredPayee): unknown;
                    fromPartial(object: Partial<_151.RegisteredPayee>): _151.RegisteredPayee;
                    fromAmino(object: _151.RegisteredPayeeAmino): _151.RegisteredPayee;
                    toAmino(message: _151.RegisteredPayee): _151.RegisteredPayeeAmino;
                    fromAminoMsg(object: _151.RegisteredPayeeAminoMsg): _151.RegisteredPayee;
                    toAminoMsg(message: _151.RegisteredPayee): _151.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _151.RegisteredPayeeProtoMsg): _151.RegisteredPayee;
                    toProto(message: _151.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _151.RegisteredPayee): _151.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _151.RegisteredCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.RegisteredCounterpartyPayee;
                    fromJSON(object: any): _151.RegisteredCounterpartyPayee;
                    toJSON(message: _151.RegisteredCounterpartyPayee): unknown;
                    fromPartial(object: Partial<_151.RegisteredCounterpartyPayee>): _151.RegisteredCounterpartyPayee;
                    fromAmino(object: _151.RegisteredCounterpartyPayeeAmino): _151.RegisteredCounterpartyPayee;
                    toAmino(message: _151.RegisteredCounterpartyPayee): _151.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _151.RegisteredCounterpartyPayeeAminoMsg): _151.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _151.RegisteredCounterpartyPayee): _151.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _151.RegisteredCounterpartyPayeeProtoMsg): _151.RegisteredCounterpartyPayee;
                    toProto(message: _151.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _151.RegisteredCounterpartyPayee): _151.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _151.ForwardRelayerAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ForwardRelayerAddress;
                    fromJSON(object: any): _151.ForwardRelayerAddress;
                    toJSON(message: _151.ForwardRelayerAddress): unknown;
                    fromPartial(object: Partial<_151.ForwardRelayerAddress>): _151.ForwardRelayerAddress;
                    fromAmino(object: _151.ForwardRelayerAddressAmino): _151.ForwardRelayerAddress;
                    toAmino(message: _151.ForwardRelayerAddress): _151.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _151.ForwardRelayerAddressAminoMsg): _151.ForwardRelayerAddress;
                    toAminoMsg(message: _151.ForwardRelayerAddress): _151.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _151.ForwardRelayerAddressProtoMsg): _151.ForwardRelayerAddress;
                    toProto(message: _151.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _151.ForwardRelayerAddress): _151.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _150.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Fee;
                    fromJSON(object: any): _150.Fee;
                    toJSON(message: _150.Fee): unknown;
                    fromPartial(object: Partial<_150.Fee>): _150.Fee;
                    fromAmino(object: _150.FeeAmino): _150.Fee;
                    toAmino(message: _150.Fee): _150.FeeAmino;
                    fromAminoMsg(object: _150.FeeAminoMsg): _150.Fee;
                    toAminoMsg(message: _150.Fee): _150.FeeAminoMsg;
                    fromProtoMsg(message: _150.FeeProtoMsg): _150.Fee;
                    toProto(message: _150.Fee): Uint8Array;
                    toProtoMsg(message: _150.Fee): _150.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _150.PacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.PacketFee;
                    fromJSON(object: any): _150.PacketFee;
                    toJSON(message: _150.PacketFee): unknown;
                    fromPartial(object: Partial<_150.PacketFee>): _150.PacketFee;
                    fromAmino(object: _150.PacketFeeAmino): _150.PacketFee;
                    toAmino(message: _150.PacketFee): _150.PacketFeeAmino;
                    fromAminoMsg(object: _150.PacketFeeAminoMsg): _150.PacketFee;
                    toAminoMsg(message: _150.PacketFee): _150.PacketFeeAminoMsg;
                    fromProtoMsg(message: _150.PacketFeeProtoMsg): _150.PacketFee;
                    toProto(message: _150.PacketFee): Uint8Array;
                    toProtoMsg(message: _150.PacketFee): _150.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _150.PacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.PacketFees;
                    fromJSON(object: any): _150.PacketFees;
                    toJSON(message: _150.PacketFees): unknown;
                    fromPartial(object: Partial<_150.PacketFees>): _150.PacketFees;
                    fromAmino(object: _150.PacketFeesAmino): _150.PacketFees;
                    toAmino(message: _150.PacketFees): _150.PacketFeesAmino;
                    fromAminoMsg(object: _150.PacketFeesAminoMsg): _150.PacketFees;
                    toAminoMsg(message: _150.PacketFees): _150.PacketFeesAminoMsg;
                    fromProtoMsg(message: _150.PacketFeesProtoMsg): _150.PacketFees;
                    toProto(message: _150.PacketFees): Uint8Array;
                    toProtoMsg(message: _150.PacketFees): _150.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _150.IdentifiedPacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.IdentifiedPacketFees;
                    fromJSON(object: any): _150.IdentifiedPacketFees;
                    toJSON(message: _150.IdentifiedPacketFees): unknown;
                    fromPartial(object: Partial<_150.IdentifiedPacketFees>): _150.IdentifiedPacketFees;
                    fromAmino(object: _150.IdentifiedPacketFeesAmino): _150.IdentifiedPacketFees;
                    toAmino(message: _150.IdentifiedPacketFees): _150.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _150.IdentifiedPacketFeesAminoMsg): _150.IdentifiedPacketFees;
                    toAminoMsg(message: _150.IdentifiedPacketFees): _150.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _150.IdentifiedPacketFeesProtoMsg): _150.IdentifiedPacketFees;
                    toProto(message: _150.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _150.IdentifiedPacketFees): _150.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _149.IncentivizedAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.IncentivizedAcknowledgement;
                    fromJSON(object: any): _149.IncentivizedAcknowledgement;
                    toJSON(message: _149.IncentivizedAcknowledgement): unknown;
                    fromPartial(object: Partial<_149.IncentivizedAcknowledgement>): _149.IncentivizedAcknowledgement;
                    fromAmino(object: _149.IncentivizedAcknowledgementAmino): _149.IncentivizedAcknowledgement;
                    toAmino(message: _149.IncentivizedAcknowledgement): _149.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _149.IncentivizedAcknowledgementAminoMsg): _149.IncentivizedAcknowledgement;
                    toAminoMsg(message: _149.IncentivizedAcknowledgement): _149.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _149.IncentivizedAcknowledgementProtoMsg): _149.IncentivizedAcknowledgement;
                    toProto(message: _149.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _149.IncentivizedAcknowledgement): _149.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _340.MsgClientImpl;
                    QueryClientImpl: typeof _333.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _156.QueryInterchainAccountRequest): Promise<_156.QueryInterchainAccountResponse>;
                        params(request?: _156.QueryParamsRequest): Promise<_156.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _326.LCDQueryClient;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _157.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _157.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _157.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _157.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _157.MsgSendTx): {
                                typeUrl: string;
                                value: _157.MsgSendTx;
                            };
                        };
                        toJSON: {
                            registerInterchainAccount(value: _157.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: unknown;
                            };
                            sendTx(value: _157.MsgSendTx): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            registerInterchainAccount(value: any): {
                                typeUrl: string;
                                value: _157.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: any): {
                                typeUrl: string;
                                value: _157.MsgSendTx;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _157.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _157.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _157.MsgSendTx): {
                                typeUrl: string;
                                value: _157.MsgSendTx;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _157.MsgRegisterInterchainAccount) => _157.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _157.MsgRegisterInterchainAccountAmino) => _157.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _157.MsgSendTx) => _157.MsgSendTxAmino;
                            fromAmino: (object: _157.MsgSendTxAmino) => _157.MsgSendTx;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _157.MsgRegisterInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgRegisterInterchainAccount;
                        fromJSON(object: any): _157.MsgRegisterInterchainAccount;
                        toJSON(message: _157.MsgRegisterInterchainAccount): unknown;
                        fromPartial(object: Partial<_157.MsgRegisterInterchainAccount>): _157.MsgRegisterInterchainAccount;
                        fromAmino(object: _157.MsgRegisterInterchainAccountAmino): _157.MsgRegisterInterchainAccount;
                        toAmino(message: _157.MsgRegisterInterchainAccount): _157.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _157.MsgRegisterInterchainAccountAminoMsg): _157.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _157.MsgRegisterInterchainAccount): _157.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _157.MsgRegisterInterchainAccountProtoMsg): _157.MsgRegisterInterchainAccount;
                        toProto(message: _157.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _157.MsgRegisterInterchainAccount): _157.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _157.MsgRegisterInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgRegisterInterchainAccountResponse;
                        fromJSON(object: any): _157.MsgRegisterInterchainAccountResponse;
                        toJSON(message: _157.MsgRegisterInterchainAccountResponse): unknown;
                        fromPartial(object: Partial<_157.MsgRegisterInterchainAccountResponse>): _157.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _157.MsgRegisterInterchainAccountResponseAmino): _157.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _157.MsgRegisterInterchainAccountResponse): _157.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _157.MsgRegisterInterchainAccountResponseAminoMsg): _157.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _157.MsgRegisterInterchainAccountResponse): _157.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _157.MsgRegisterInterchainAccountResponseProtoMsg): _157.MsgRegisterInterchainAccountResponse;
                        toProto(message: _157.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _157.MsgRegisterInterchainAccountResponse): _157.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _157.MsgSendTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgSendTx;
                        fromJSON(object: any): _157.MsgSendTx;
                        toJSON(message: _157.MsgSendTx): unknown;
                        fromPartial(object: Partial<_157.MsgSendTx>): _157.MsgSendTx;
                        fromAmino(object: _157.MsgSendTxAmino): _157.MsgSendTx;
                        toAmino(message: _157.MsgSendTx): _157.MsgSendTxAmino;
                        fromAminoMsg(object: _157.MsgSendTxAminoMsg): _157.MsgSendTx;
                        toAminoMsg(message: _157.MsgSendTx): _157.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _157.MsgSendTxProtoMsg): _157.MsgSendTx;
                        toProto(message: _157.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _157.MsgSendTx): _157.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _157.MsgSendTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgSendTxResponse;
                        fromJSON(object: any): _157.MsgSendTxResponse;
                        toJSON(message: _157.MsgSendTxResponse): unknown;
                        fromPartial(object: Partial<_157.MsgSendTxResponse>): _157.MsgSendTxResponse;
                        fromAmino(object: _157.MsgSendTxResponseAmino): _157.MsgSendTxResponse;
                        toAmino(message: _157.MsgSendTxResponse): _157.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _157.MsgSendTxResponseAminoMsg): _157.MsgSendTxResponse;
                        toAminoMsg(message: _157.MsgSendTxResponse): _157.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _157.MsgSendTxResponseProtoMsg): _157.MsgSendTxResponse;
                        toProto(message: _157.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _157.MsgSendTxResponse): _157.MsgSendTxResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _156.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryInterchainAccountRequest;
                        fromJSON(object: any): _156.QueryInterchainAccountRequest;
                        toJSON(message: _156.QueryInterchainAccountRequest): unknown;
                        fromPartial(object: Partial<_156.QueryInterchainAccountRequest>): _156.QueryInterchainAccountRequest;
                        fromAmino(object: _156.QueryInterchainAccountRequestAmino): _156.QueryInterchainAccountRequest;
                        toAmino(message: _156.QueryInterchainAccountRequest): _156.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _156.QueryInterchainAccountRequestAminoMsg): _156.QueryInterchainAccountRequest;
                        toAminoMsg(message: _156.QueryInterchainAccountRequest): _156.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _156.QueryInterchainAccountRequestProtoMsg): _156.QueryInterchainAccountRequest;
                        toProto(message: _156.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _156.QueryInterchainAccountRequest): _156.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _156.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryInterchainAccountResponse;
                        fromJSON(object: any): _156.QueryInterchainAccountResponse;
                        toJSON(message: _156.QueryInterchainAccountResponse): unknown;
                        fromPartial(object: Partial<_156.QueryInterchainAccountResponse>): _156.QueryInterchainAccountResponse;
                        fromAmino(object: _156.QueryInterchainAccountResponseAmino): _156.QueryInterchainAccountResponse;
                        toAmino(message: _156.QueryInterchainAccountResponse): _156.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _156.QueryInterchainAccountResponseAminoMsg): _156.QueryInterchainAccountResponse;
                        toAminoMsg(message: _156.QueryInterchainAccountResponse): _156.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _156.QueryInterchainAccountResponseProtoMsg): _156.QueryInterchainAccountResponse;
                        toProto(message: _156.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _156.QueryInterchainAccountResponse): _156.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _156.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryParamsRequest;
                        fromJSON(_: any): _156.QueryParamsRequest;
                        toJSON(_: _156.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_156.QueryParamsRequest>): _156.QueryParamsRequest;
                        fromAmino(_: _156.QueryParamsRequestAmino): _156.QueryParamsRequest;
                        toAmino(_: _156.QueryParamsRequest): _156.QueryParamsRequestAmino;
                        fromAminoMsg(object: _156.QueryParamsRequestAminoMsg): _156.QueryParamsRequest;
                        toAminoMsg(message: _156.QueryParamsRequest): _156.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _156.QueryParamsRequestProtoMsg): _156.QueryParamsRequest;
                        toProto(message: _156.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _156.QueryParamsRequest): _156.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _156.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryParamsResponse;
                        fromJSON(object: any): _156.QueryParamsResponse;
                        toJSON(message: _156.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_156.QueryParamsResponse>): _156.QueryParamsResponse;
                        fromAmino(object: _156.QueryParamsResponseAmino): _156.QueryParamsResponse;
                        toAmino(message: _156.QueryParamsResponse): _156.QueryParamsResponseAmino;
                        fromAminoMsg(object: _156.QueryParamsResponseAminoMsg): _156.QueryParamsResponse;
                        toAminoMsg(message: _156.QueryParamsResponse): _156.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _156.QueryParamsResponseProtoMsg): _156.QueryParamsResponse;
                        toProto(message: _156.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _156.QueryParamsResponse): _156.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _155.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Params;
                        fromJSON(object: any): _155.Params;
                        toJSON(message: _155.Params): unknown;
                        fromPartial(object: Partial<_155.Params>): _155.Params;
                        fromAmino(object: _155.ParamsAmino): _155.Params;
                        toAmino(message: _155.Params): _155.ParamsAmino;
                        fromAminoMsg(object: _155.ParamsAminoMsg): _155.Params;
                        toAminoMsg(message: _155.Params): _155.ParamsAminoMsg;
                        fromProtoMsg(message: _155.ParamsProtoMsg): _155.Params;
                        toProto(message: _155.Params): Uint8Array;
                        toProtoMsg(message: _155.Params): _155.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        typeUrl: string;
                        encode(message: _158.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.GenesisState;
                        fromJSON(object: any): _158.GenesisState;
                        toJSON(message: _158.GenesisState): unknown;
                        fromPartial(object: Partial<_158.GenesisState>): _158.GenesisState;
                        fromAmino(object: _158.GenesisStateAmino): _158.GenesisState;
                        toAmino(message: _158.GenesisState): _158.GenesisStateAmino;
                        fromAminoMsg(object: _158.GenesisStateAminoMsg): _158.GenesisState;
                        toAminoMsg(message: _158.GenesisState): _158.GenesisStateAminoMsg;
                        fromProtoMsg(message: _158.GenesisStateProtoMsg): _158.GenesisState;
                        toProto(message: _158.GenesisState): Uint8Array;
                        toProtoMsg(message: _158.GenesisState): _158.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _158.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.ControllerGenesisState;
                        fromJSON(object: any): _158.ControllerGenesisState;
                        toJSON(message: _158.ControllerGenesisState): unknown;
                        fromPartial(object: Partial<_158.ControllerGenesisState>): _158.ControllerGenesisState;
                        fromAmino(object: _158.ControllerGenesisStateAmino): _158.ControllerGenesisState;
                        toAmino(message: _158.ControllerGenesisState): _158.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _158.ControllerGenesisStateAminoMsg): _158.ControllerGenesisState;
                        toAminoMsg(message: _158.ControllerGenesisState): _158.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _158.ControllerGenesisStateProtoMsg): _158.ControllerGenesisState;
                        toProto(message: _158.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _158.ControllerGenesisState): _158.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _158.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.HostGenesisState;
                        fromJSON(object: any): _158.HostGenesisState;
                        toJSON(message: _158.HostGenesisState): unknown;
                        fromPartial(object: Partial<_158.HostGenesisState>): _158.HostGenesisState;
                        fromAmino(object: _158.HostGenesisStateAmino): _158.HostGenesisState;
                        toAmino(message: _158.HostGenesisState): _158.HostGenesisStateAmino;
                        fromAminoMsg(object: _158.HostGenesisStateAminoMsg): _158.HostGenesisState;
                        toAminoMsg(message: _158.HostGenesisState): _158.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _158.HostGenesisStateProtoMsg): _158.HostGenesisState;
                        toProto(message: _158.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _158.HostGenesisState): _158.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _158.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.ActiveChannel;
                        fromJSON(object: any): _158.ActiveChannel;
                        toJSON(message: _158.ActiveChannel): unknown;
                        fromPartial(object: Partial<_158.ActiveChannel>): _158.ActiveChannel;
                        fromAmino(object: _158.ActiveChannelAmino): _158.ActiveChannel;
                        toAmino(message: _158.ActiveChannel): _158.ActiveChannelAmino;
                        fromAminoMsg(object: _158.ActiveChannelAminoMsg): _158.ActiveChannel;
                        toAminoMsg(message: _158.ActiveChannel): _158.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _158.ActiveChannelProtoMsg): _158.ActiveChannel;
                        toProto(message: _158.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _158.ActiveChannel): _158.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _158.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.RegisteredInterchainAccount;
                        fromJSON(object: any): _158.RegisteredInterchainAccount;
                        toJSON(message: _158.RegisteredInterchainAccount): unknown;
                        fromPartial(object: Partial<_158.RegisteredInterchainAccount>): _158.RegisteredInterchainAccount;
                        fromAmino(object: _158.RegisteredInterchainAccountAmino): _158.RegisteredInterchainAccount;
                        toAmino(message: _158.RegisteredInterchainAccount): _158.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _158.RegisteredInterchainAccountAminoMsg): _158.RegisteredInterchainAccount;
                        toAminoMsg(message: _158.RegisteredInterchainAccount): _158.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _158.RegisteredInterchainAccountProtoMsg): _158.RegisteredInterchainAccount;
                        toProto(message: _158.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _158.RegisteredInterchainAccount): _158.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _334.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _160.QueryParamsRequest): Promise<_160.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _327.LCDQueryClient;
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _160.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryParamsRequest;
                        fromJSON(_: any): _160.QueryParamsRequest;
                        toJSON(_: _160.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_160.QueryParamsRequest>): _160.QueryParamsRequest;
                        fromAmino(_: _160.QueryParamsRequestAmino): _160.QueryParamsRequest;
                        toAmino(_: _160.QueryParamsRequest): _160.QueryParamsRequestAmino;
                        fromAminoMsg(object: _160.QueryParamsRequestAminoMsg): _160.QueryParamsRequest;
                        toAminoMsg(message: _160.QueryParamsRequest): _160.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _160.QueryParamsRequestProtoMsg): _160.QueryParamsRequest;
                        toProto(message: _160.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _160.QueryParamsRequest): _160.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _160.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryParamsResponse;
                        fromJSON(object: any): _160.QueryParamsResponse;
                        toJSON(message: _160.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_160.QueryParamsResponse>): _160.QueryParamsResponse;
                        fromAmino(object: _160.QueryParamsResponseAmino): _160.QueryParamsResponse;
                        toAmino(message: _160.QueryParamsResponse): _160.QueryParamsResponseAmino;
                        fromAminoMsg(object: _160.QueryParamsResponseAminoMsg): _160.QueryParamsResponse;
                        toAminoMsg(message: _160.QueryParamsResponse): _160.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _160.QueryParamsResponseProtoMsg): _160.QueryParamsResponse;
                        toProto(message: _160.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _160.QueryParamsResponse): _160.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _159.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Params;
                        fromJSON(object: any): _159.Params;
                        toJSON(message: _159.Params): unknown;
                        fromPartial(object: Partial<_159.Params>): _159.Params;
                        fromAmino(object: _159.ParamsAmino): _159.Params;
                        toAmino(message: _159.Params): _159.ParamsAmino;
                        fromAminoMsg(object: _159.ParamsAminoMsg): _159.Params;
                        toAminoMsg(message: _159.Params): _159.ParamsAminoMsg;
                        fromProtoMsg(message: _159.ParamsProtoMsg): _159.Params;
                        toProto(message: _159.Params): Uint8Array;
                        toProtoMsg(message: _159.Params): _159.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _163.Type;
                typeToJSON(object: _163.Type): string;
                Type: typeof _163.Type;
                TypeSDKType: typeof _163.Type;
                TypeAmino: typeof _163.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _163.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.InterchainAccountPacketData;
                    fromJSON(object: any): _163.InterchainAccountPacketData;
                    toJSON(message: _163.InterchainAccountPacketData): unknown;
                    fromPartial(object: Partial<_163.InterchainAccountPacketData>): _163.InterchainAccountPacketData;
                    fromAmino(object: _163.InterchainAccountPacketDataAmino): _163.InterchainAccountPacketData;
                    toAmino(message: _163.InterchainAccountPacketData): _163.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _163.InterchainAccountPacketDataAminoMsg): _163.InterchainAccountPacketData;
                    toAminoMsg(message: _163.InterchainAccountPacketData): _163.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _163.InterchainAccountPacketDataProtoMsg): _163.InterchainAccountPacketData;
                    toProto(message: _163.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _163.InterchainAccountPacketData): _163.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _163.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.CosmosTx;
                    fromJSON(object: any): _163.CosmosTx;
                    toJSON(message: _163.CosmosTx): unknown;
                    fromPartial(object: Partial<_163.CosmosTx>): _163.CosmosTx;
                    fromAmino(object: _163.CosmosTxAmino): _163.CosmosTx;
                    toAmino(message: _163.CosmosTx): _163.CosmosTxAmino;
                    fromAminoMsg(object: _163.CosmosTxAminoMsg): _163.CosmosTx;
                    toAminoMsg(message: _163.CosmosTx): _163.CosmosTxAminoMsg;
                    fromProtoMsg(message: _163.CosmosTxProtoMsg): _163.CosmosTx;
                    toProto(message: _163.CosmosTx): Uint8Array;
                    toProtoMsg(message: _163.CosmosTx): _163.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _162.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Metadata;
                    fromJSON(object: any): _162.Metadata;
                    toJSON(message: _162.Metadata): unknown;
                    fromPartial(object: Partial<_162.Metadata>): _162.Metadata;
                    fromAmino(object: _162.MetadataAmino): _162.Metadata;
                    toAmino(message: _162.Metadata): _162.MetadataAmino;
                    fromAminoMsg(object: _162.MetadataAminoMsg): _162.Metadata;
                    toAminoMsg(message: _162.Metadata): _162.MetadataAminoMsg;
                    fromProtoMsg(message: _162.MetadataProtoMsg): _162.Metadata;
                    toProto(message: _162.Metadata): Uint8Array;
                    toProtoMsg(message: _162.Metadata): _162.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _161.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.InterchainAccount;
                    fromJSON(object: any): _161.InterchainAccount;
                    toJSON(message: _161.InterchainAccount): unknown;
                    fromPartial(object: Partial<_161.InterchainAccount>): _161.InterchainAccount;
                    fromAmino(object: _161.InterchainAccountAmino): _161.InterchainAccount;
                    toAmino(message: _161.InterchainAccount): _161.InterchainAccountAmino;
                    fromAminoMsg(object: _161.InterchainAccountAminoMsg): _161.InterchainAccount;
                    toAminoMsg(message: _161.InterchainAccount): _161.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _161.InterchainAccountProtoMsg): _161.InterchainAccount;
                    toProto(message: _161.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _161.InterchainAccount): _161.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _341.MsgClientImpl;
                QueryClientImpl: typeof _335.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTraces(request?: _166.QueryDenomTracesRequest): Promise<_166.QueryDenomTracesResponse>;
                    denomTrace(request: _166.QueryDenomTraceRequest): Promise<_166.QueryDenomTraceResponse>;
                    params(request?: _166.QueryParamsRequest): Promise<_166.QueryParamsResponse>;
                    denomHash(request: _166.QueryDenomHashRequest): Promise<_166.QueryDenomHashResponse>;
                    escrowAddress(request: _166.QueryEscrowAddressRequest): Promise<_166.QueryEscrowAddressResponse>;
                    totalEscrowForDenom(request: _166.QueryTotalEscrowForDenomRequest): Promise<_166.QueryTotalEscrowForDenomResponse>;
                };
                LCDQueryClient: typeof _328.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _168.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _168.MsgTransfer): {
                            typeUrl: string;
                            value: _168.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _168.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _168.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _168.MsgTransfer): {
                            typeUrl: string;
                            value: _168.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _168.MsgTransfer) => _168.MsgTransferAmino;
                        fromAmino: (object: _168.MsgTransferAmino) => _168.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _168.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgTransfer;
                    fromJSON(object: any): _168.MsgTransfer;
                    toJSON(message: _168.MsgTransfer): unknown;
                    fromPartial(object: Partial<_168.MsgTransfer>): _168.MsgTransfer;
                    fromAmino(object: _168.MsgTransferAmino): _168.MsgTransfer;
                    toAmino(message: _168.MsgTransfer): _168.MsgTransferAmino;
                    fromAminoMsg(object: _168.MsgTransferAminoMsg): _168.MsgTransfer;
                    toAminoMsg(message: _168.MsgTransfer): _168.MsgTransferAminoMsg;
                    fromProtoMsg(message: _168.MsgTransferProtoMsg): _168.MsgTransfer;
                    toProto(message: _168.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _168.MsgTransfer): _168.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _168.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgTransferResponse;
                    fromJSON(object: any): _168.MsgTransferResponse;
                    toJSON(message: _168.MsgTransferResponse): unknown;
                    fromPartial(object: Partial<_168.MsgTransferResponse>): _168.MsgTransferResponse;
                    fromAmino(object: _168.MsgTransferResponseAmino): _168.MsgTransferResponse;
                    toAmino(message: _168.MsgTransferResponse): _168.MsgTransferResponseAmino;
                    fromAminoMsg(object: _168.MsgTransferResponseAminoMsg): _168.MsgTransferResponse;
                    toAminoMsg(message: _168.MsgTransferResponse): _168.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgTransferResponseProtoMsg): _168.MsgTransferResponse;
                    toProto(message: _168.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgTransferResponse): _168.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _167.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.DenomTrace;
                    fromJSON(object: any): _167.DenomTrace;
                    toJSON(message: _167.DenomTrace): unknown;
                    fromPartial(object: Partial<_167.DenomTrace>): _167.DenomTrace;
                    fromAmino(object: _167.DenomTraceAmino): _167.DenomTrace;
                    toAmino(message: _167.DenomTrace): _167.DenomTraceAmino;
                    fromAminoMsg(object: _167.DenomTraceAminoMsg): _167.DenomTrace;
                    toAminoMsg(message: _167.DenomTrace): _167.DenomTraceAminoMsg;
                    fromProtoMsg(message: _167.DenomTraceProtoMsg): _167.DenomTrace;
                    toProto(message: _167.DenomTrace): Uint8Array;
                    toProtoMsg(message: _167.DenomTrace): _167.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _167.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.Params;
                    fromJSON(object: any): _167.Params;
                    toJSON(message: _167.Params): unknown;
                    fromPartial(object: Partial<_167.Params>): _167.Params;
                    fromAmino(object: _167.ParamsAmino): _167.Params;
                    toAmino(message: _167.Params): _167.ParamsAmino;
                    fromAminoMsg(object: _167.ParamsAminoMsg): _167.Params;
                    toAminoMsg(message: _167.Params): _167.ParamsAminoMsg;
                    fromProtoMsg(message: _167.ParamsProtoMsg): _167.Params;
                    toProto(message: _167.Params): Uint8Array;
                    toProtoMsg(message: _167.Params): _167.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryDenomTraceRequest;
                    fromJSON(object: any): _166.QueryDenomTraceRequest;
                    toJSON(message: _166.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_166.QueryDenomTraceRequest>): _166.QueryDenomTraceRequest;
                    fromAmino(object: _166.QueryDenomTraceRequestAmino): _166.QueryDenomTraceRequest;
                    toAmino(message: _166.QueryDenomTraceRequest): _166.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _166.QueryDenomTraceRequestAminoMsg): _166.QueryDenomTraceRequest;
                    toAminoMsg(message: _166.QueryDenomTraceRequest): _166.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryDenomTraceRequestProtoMsg): _166.QueryDenomTraceRequest;
                    toProto(message: _166.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryDenomTraceRequest): _166.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryDenomTraceResponse;
                    fromJSON(object: any): _166.QueryDenomTraceResponse;
                    toJSON(message: _166.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_166.QueryDenomTraceResponse>): _166.QueryDenomTraceResponse;
                    fromAmino(object: _166.QueryDenomTraceResponseAmino): _166.QueryDenomTraceResponse;
                    toAmino(message: _166.QueryDenomTraceResponse): _166.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _166.QueryDenomTraceResponseAminoMsg): _166.QueryDenomTraceResponse;
                    toAminoMsg(message: _166.QueryDenomTraceResponse): _166.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryDenomTraceResponseProtoMsg): _166.QueryDenomTraceResponse;
                    toProto(message: _166.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryDenomTraceResponse): _166.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryDenomTracesRequest;
                    fromJSON(object: any): _166.QueryDenomTracesRequest;
                    toJSON(message: _166.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_166.QueryDenomTracesRequest>): _166.QueryDenomTracesRequest;
                    fromAmino(object: _166.QueryDenomTracesRequestAmino): _166.QueryDenomTracesRequest;
                    toAmino(message: _166.QueryDenomTracesRequest): _166.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _166.QueryDenomTracesRequestAminoMsg): _166.QueryDenomTracesRequest;
                    toAminoMsg(message: _166.QueryDenomTracesRequest): _166.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryDenomTracesRequestProtoMsg): _166.QueryDenomTracesRequest;
                    toProto(message: _166.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryDenomTracesRequest): _166.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryDenomTracesResponse;
                    fromJSON(object: any): _166.QueryDenomTracesResponse;
                    toJSON(message: _166.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_166.QueryDenomTracesResponse>): _166.QueryDenomTracesResponse;
                    fromAmino(object: _166.QueryDenomTracesResponseAmino): _166.QueryDenomTracesResponse;
                    toAmino(message: _166.QueryDenomTracesResponse): _166.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _166.QueryDenomTracesResponseAminoMsg): _166.QueryDenomTracesResponse;
                    toAminoMsg(message: _166.QueryDenomTracesResponse): _166.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryDenomTracesResponseProtoMsg): _166.QueryDenomTracesResponse;
                    toProto(message: _166.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryDenomTracesResponse): _166.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _166.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryParamsRequest;
                    fromJSON(_: any): _166.QueryParamsRequest;
                    toJSON(_: _166.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_166.QueryParamsRequest>): _166.QueryParamsRequest;
                    fromAmino(_: _166.QueryParamsRequestAmino): _166.QueryParamsRequest;
                    toAmino(_: _166.QueryParamsRequest): _166.QueryParamsRequestAmino;
                    fromAminoMsg(object: _166.QueryParamsRequestAminoMsg): _166.QueryParamsRequest;
                    toAminoMsg(message: _166.QueryParamsRequest): _166.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryParamsRequestProtoMsg): _166.QueryParamsRequest;
                    toProto(message: _166.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryParamsRequest): _166.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryParamsResponse;
                    fromJSON(object: any): _166.QueryParamsResponse;
                    toJSON(message: _166.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_166.QueryParamsResponse>): _166.QueryParamsResponse;
                    fromAmino(object: _166.QueryParamsResponseAmino): _166.QueryParamsResponse;
                    toAmino(message: _166.QueryParamsResponse): _166.QueryParamsResponseAmino;
                    fromAminoMsg(object: _166.QueryParamsResponseAminoMsg): _166.QueryParamsResponse;
                    toAminoMsg(message: _166.QueryParamsResponse): _166.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryParamsResponseProtoMsg): _166.QueryParamsResponse;
                    toProto(message: _166.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryParamsResponse): _166.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryDenomHashRequest;
                    fromJSON(object: any): _166.QueryDenomHashRequest;
                    toJSON(message: _166.QueryDenomHashRequest): unknown;
                    fromPartial(object: Partial<_166.QueryDenomHashRequest>): _166.QueryDenomHashRequest;
                    fromAmino(object: _166.QueryDenomHashRequestAmino): _166.QueryDenomHashRequest;
                    toAmino(message: _166.QueryDenomHashRequest): _166.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _166.QueryDenomHashRequestAminoMsg): _166.QueryDenomHashRequest;
                    toAminoMsg(message: _166.QueryDenomHashRequest): _166.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryDenomHashRequestProtoMsg): _166.QueryDenomHashRequest;
                    toProto(message: _166.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryDenomHashRequest): _166.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryDenomHashResponse;
                    fromJSON(object: any): _166.QueryDenomHashResponse;
                    toJSON(message: _166.QueryDenomHashResponse): unknown;
                    fromPartial(object: Partial<_166.QueryDenomHashResponse>): _166.QueryDenomHashResponse;
                    fromAmino(object: _166.QueryDenomHashResponseAmino): _166.QueryDenomHashResponse;
                    toAmino(message: _166.QueryDenomHashResponse): _166.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _166.QueryDenomHashResponseAminoMsg): _166.QueryDenomHashResponse;
                    toAminoMsg(message: _166.QueryDenomHashResponse): _166.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryDenomHashResponseProtoMsg): _166.QueryDenomHashResponse;
                    toProto(message: _166.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryDenomHashResponse): _166.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryEscrowAddressRequest;
                    fromJSON(object: any): _166.QueryEscrowAddressRequest;
                    toJSON(message: _166.QueryEscrowAddressRequest): unknown;
                    fromPartial(object: Partial<_166.QueryEscrowAddressRequest>): _166.QueryEscrowAddressRequest;
                    fromAmino(object: _166.QueryEscrowAddressRequestAmino): _166.QueryEscrowAddressRequest;
                    toAmino(message: _166.QueryEscrowAddressRequest): _166.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _166.QueryEscrowAddressRequestAminoMsg): _166.QueryEscrowAddressRequest;
                    toAminoMsg(message: _166.QueryEscrowAddressRequest): _166.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryEscrowAddressRequestProtoMsg): _166.QueryEscrowAddressRequest;
                    toProto(message: _166.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryEscrowAddressRequest): _166.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryEscrowAddressResponse;
                    fromJSON(object: any): _166.QueryEscrowAddressResponse;
                    toJSON(message: _166.QueryEscrowAddressResponse): unknown;
                    fromPartial(object: Partial<_166.QueryEscrowAddressResponse>): _166.QueryEscrowAddressResponse;
                    fromAmino(object: _166.QueryEscrowAddressResponseAmino): _166.QueryEscrowAddressResponse;
                    toAmino(message: _166.QueryEscrowAddressResponse): _166.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _166.QueryEscrowAddressResponseAminoMsg): _166.QueryEscrowAddressResponse;
                    toAminoMsg(message: _166.QueryEscrowAddressResponse): _166.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryEscrowAddressResponseProtoMsg): _166.QueryEscrowAddressResponse;
                    toProto(message: _166.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryEscrowAddressResponse): _166.QueryEscrowAddressResponseProtoMsg;
                };
                QueryTotalEscrowForDenomRequest: {
                    typeUrl: string;
                    encode(message: _166.QueryTotalEscrowForDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryTotalEscrowForDenomRequest;
                    fromJSON(object: any): _166.QueryTotalEscrowForDenomRequest;
                    toJSON(message: _166.QueryTotalEscrowForDenomRequest): unknown;
                    fromPartial(object: Partial<_166.QueryTotalEscrowForDenomRequest>): _166.QueryTotalEscrowForDenomRequest;
                    fromAmino(object: _166.QueryTotalEscrowForDenomRequestAmino): _166.QueryTotalEscrowForDenomRequest;
                    toAmino(message: _166.QueryTotalEscrowForDenomRequest): _166.QueryTotalEscrowForDenomRequestAmino;
                    fromAminoMsg(object: _166.QueryTotalEscrowForDenomRequestAminoMsg): _166.QueryTotalEscrowForDenomRequest;
                    toAminoMsg(message: _166.QueryTotalEscrowForDenomRequest): _166.QueryTotalEscrowForDenomRequestAminoMsg;
                    fromProtoMsg(message: _166.QueryTotalEscrowForDenomRequestProtoMsg): _166.QueryTotalEscrowForDenomRequest;
                    toProto(message: _166.QueryTotalEscrowForDenomRequest): Uint8Array;
                    toProtoMsg(message: _166.QueryTotalEscrowForDenomRequest): _166.QueryTotalEscrowForDenomRequestProtoMsg;
                };
                QueryTotalEscrowForDenomResponse: {
                    typeUrl: string;
                    encode(message: _166.QueryTotalEscrowForDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryTotalEscrowForDenomResponse;
                    fromJSON(object: any): _166.QueryTotalEscrowForDenomResponse;
                    toJSON(message: _166.QueryTotalEscrowForDenomResponse): unknown;
                    fromPartial(object: Partial<_166.QueryTotalEscrowForDenomResponse>): _166.QueryTotalEscrowForDenomResponse;
                    fromAmino(object: _166.QueryTotalEscrowForDenomResponseAmino): _166.QueryTotalEscrowForDenomResponse;
                    toAmino(message: _166.QueryTotalEscrowForDenomResponse): _166.QueryTotalEscrowForDenomResponseAmino;
                    fromAminoMsg(object: _166.QueryTotalEscrowForDenomResponseAminoMsg): _166.QueryTotalEscrowForDenomResponse;
                    toAminoMsg(message: _166.QueryTotalEscrowForDenomResponse): _166.QueryTotalEscrowForDenomResponseAminoMsg;
                    fromProtoMsg(message: _166.QueryTotalEscrowForDenomResponseProtoMsg): _166.QueryTotalEscrowForDenomResponse;
                    toProto(message: _166.QueryTotalEscrowForDenomResponse): Uint8Array;
                    toProtoMsg(message: _166.QueryTotalEscrowForDenomResponse): _166.QueryTotalEscrowForDenomResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _165.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.GenesisState;
                    fromJSON(object: any): _165.GenesisState;
                    toJSON(message: _165.GenesisState): unknown;
                    fromPartial(object: Partial<_165.GenesisState>): _165.GenesisState;
                    fromAmino(object: _165.GenesisStateAmino): _165.GenesisState;
                    toAmino(message: _165.GenesisState): _165.GenesisStateAmino;
                    fromAminoMsg(object: _165.GenesisStateAminoMsg): _165.GenesisState;
                    toAminoMsg(message: _165.GenesisState): _165.GenesisStateAminoMsg;
                    fromProtoMsg(message: _165.GenesisStateProtoMsg): _165.GenesisState;
                    toProto(message: _165.GenesisState): Uint8Array;
                    toProtoMsg(message: _165.GenesisState): _165.GenesisStateProtoMsg;
                };
                Allocation: {
                    typeUrl: string;
                    encode(message: _164.Allocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Allocation;
                    fromJSON(object: any): _164.Allocation;
                    toJSON(message: _164.Allocation): unknown;
                    fromPartial(object: Partial<_164.Allocation>): _164.Allocation;
                    fromAmino(object: _164.AllocationAmino): _164.Allocation;
                    toAmino(message: _164.Allocation): _164.AllocationAmino;
                    fromAminoMsg(object: _164.AllocationAminoMsg): _164.Allocation;
                    toAminoMsg(message: _164.Allocation): _164.AllocationAminoMsg;
                    fromProtoMsg(message: _164.AllocationProtoMsg): _164.Allocation;
                    toProto(message: _164.Allocation): Uint8Array;
                    toProtoMsg(message: _164.Allocation): _164.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _164.TransferAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.TransferAuthorization;
                    fromJSON(object: any): _164.TransferAuthorization;
                    toJSON(message: _164.TransferAuthorization): unknown;
                    fromPartial(object: Partial<_164.TransferAuthorization>): _164.TransferAuthorization;
                    fromAmino(object: _164.TransferAuthorizationAmino): _164.TransferAuthorization;
                    toAmino(message: _164.TransferAuthorization): _164.TransferAuthorizationAmino;
                    fromAminoMsg(object: _164.TransferAuthorizationAminoMsg): _164.TransferAuthorization;
                    toAminoMsg(message: _164.TransferAuthorization): _164.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _164.TransferAuthorizationProtoMsg): _164.TransferAuthorization;
                    toProto(message: _164.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _164.TransferAuthorization): _164.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _169.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.FungibleTokenPacketData;
                    fromJSON(object: any): _169.FungibleTokenPacketData;
                    toJSON(message: _169.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_169.FungibleTokenPacketData>): _169.FungibleTokenPacketData;
                    fromAmino(object: _169.FungibleTokenPacketDataAmino): _169.FungibleTokenPacketData;
                    toAmino(message: _169.FungibleTokenPacketData): _169.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _169.FungibleTokenPacketDataAminoMsg): _169.FungibleTokenPacketData;
                    toAminoMsg(message: _169.FungibleTokenPacketData): _169.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _169.FungibleTokenPacketDataProtoMsg): _169.FungibleTokenPacketData;
                    toProto(message: _169.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _169.FungibleTokenPacketData): _169.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _342.MsgClientImpl;
                QueryClientImpl: typeof _336.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _172.QueryChannelRequest): Promise<_172.QueryChannelResponse>;
                    channels(request?: _172.QueryChannelsRequest): Promise<_172.QueryChannelsResponse>;
                    connectionChannels(request: _172.QueryConnectionChannelsRequest): Promise<_172.QueryConnectionChannelsResponse>;
                    channelClientState(request: _172.QueryChannelClientStateRequest): Promise<_172.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _172.QueryChannelConsensusStateRequest): Promise<_172.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _172.QueryPacketCommitmentRequest): Promise<_172.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _172.QueryPacketCommitmentsRequest): Promise<_172.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _172.QueryPacketReceiptRequest): Promise<_172.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _172.QueryPacketAcknowledgementRequest): Promise<_172.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _172.QueryPacketAcknowledgementsRequest): Promise<_172.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _172.QueryUnreceivedPacketsRequest): Promise<_172.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _172.QueryUnreceivedAcksRequest): Promise<_172.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _172.QueryNextSequenceReceiveRequest): Promise<_172.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _329.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _173.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _173.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _173.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _173.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _173.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _173.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _173.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _173.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _173.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _173.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _173.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _173.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _173.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _173.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _173.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _173.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _173.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _173.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _173.MsgRecvPacket): {
                            typeUrl: string;
                            value: _173.MsgRecvPacket;
                        };
                        timeout(value: _173.MsgTimeout): {
                            typeUrl: string;
                            value: _173.MsgTimeout;
                        };
                        timeoutOnClose(value: _173.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _173.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _173.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _173.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _173.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _173.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _173.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _173.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _173.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _173.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _173.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _173.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _173.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _173.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _173.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _173.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _173.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _173.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _173.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _173.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _173.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _173.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _173.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _173.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _173.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _173.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _173.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _173.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _173.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _173.MsgRecvPacket): {
                            typeUrl: string;
                            value: _173.MsgRecvPacket;
                        };
                        timeout(value: _173.MsgTimeout): {
                            typeUrl: string;
                            value: _173.MsgTimeout;
                        };
                        timeoutOnClose(value: _173.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _173.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _173.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _173.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelOpenInit) => _173.MsgChannelOpenInitAmino;
                        fromAmino: (object: _173.MsgChannelOpenInitAmino) => _173.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelOpenTry) => _173.MsgChannelOpenTryAmino;
                        fromAmino: (object: _173.MsgChannelOpenTryAmino) => _173.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelOpenAck) => _173.MsgChannelOpenAckAmino;
                        fromAmino: (object: _173.MsgChannelOpenAckAmino) => _173.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelOpenConfirm) => _173.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _173.MsgChannelOpenConfirmAmino) => _173.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelCloseInit) => _173.MsgChannelCloseInitAmino;
                        fromAmino: (object: _173.MsgChannelCloseInitAmino) => _173.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _173.MsgChannelCloseConfirm) => _173.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _173.MsgChannelCloseConfirmAmino) => _173.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _173.MsgRecvPacket) => _173.MsgRecvPacketAmino;
                        fromAmino: (object: _173.MsgRecvPacketAmino) => _173.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _173.MsgTimeout) => _173.MsgTimeoutAmino;
                        fromAmino: (object: _173.MsgTimeoutAmino) => _173.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _173.MsgTimeoutOnClose) => _173.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _173.MsgTimeoutOnCloseAmino) => _173.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _173.MsgAcknowledgement) => _173.MsgAcknowledgementAmino;
                        fromAmino: (object: _173.MsgAcknowledgementAmino) => _173.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _173.ResponseResultType;
                responseResultTypeToJSON(object: _173.ResponseResultType): string;
                ResponseResultType: typeof _173.ResponseResultType;
                ResponseResultTypeSDKType: typeof _173.ResponseResultType;
                ResponseResultTypeAmino: typeof _173.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgChannelOpenInit;
                    fromJSON(object: any): _173.MsgChannelOpenInit;
                    toJSON(message: _173.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_173.MsgChannelOpenInit>): _173.MsgChannelOpenInit;
                    fromAmino(object: _173.MsgChannelOpenInitAmino): _173.MsgChannelOpenInit;
                    toAmino(message: _173.MsgChannelOpenInit): _173.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _173.MsgChannelOpenInitAminoMsg): _173.MsgChannelOpenInit;
                    toAminoMsg(message: _173.MsgChannelOpenInit): _173.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelOpenInitProtoMsg): _173.MsgChannelOpenInit;
                    toProto(message: _173.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelOpenInit): _173.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgChannelOpenInitResponse;
                    fromJSON(object: any): _173.MsgChannelOpenInitResponse;
                    toJSON(message: _173.MsgChannelOpenInitResponse): unknown;
                    fromPartial(object: Partial<_173.MsgChannelOpenInitResponse>): _173.MsgChannelOpenInitResponse;
                    fromAmino(object: _173.MsgChannelOpenInitResponseAmino): _173.MsgChannelOpenInitResponse;
                    toAmino(message: _173.MsgChannelOpenInitResponse): _173.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelOpenInitResponseAminoMsg): _173.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _173.MsgChannelOpenInitResponse): _173.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelOpenInitResponseProtoMsg): _173.MsgChannelOpenInitResponse;
                    toProto(message: _173.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelOpenInitResponse): _173.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgChannelOpenTry;
                    fromJSON(object: any): _173.MsgChannelOpenTry;
                    toJSON(message: _173.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_173.MsgChannelOpenTry>): _173.MsgChannelOpenTry;
                    fromAmino(object: _173.MsgChannelOpenTryAmino): _173.MsgChannelOpenTry;
                    toAmino(message: _173.MsgChannelOpenTry): _173.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _173.MsgChannelOpenTryAminoMsg): _173.MsgChannelOpenTry;
                    toAminoMsg(message: _173.MsgChannelOpenTry): _173.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelOpenTryProtoMsg): _173.MsgChannelOpenTry;
                    toProto(message: _173.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelOpenTry): _173.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgChannelOpenTryResponse;
                    fromJSON(object: any): _173.MsgChannelOpenTryResponse;
                    toJSON(message: _173.MsgChannelOpenTryResponse): unknown;
                    fromPartial(object: Partial<_173.MsgChannelOpenTryResponse>): _173.MsgChannelOpenTryResponse;
                    fromAmino(object: _173.MsgChannelOpenTryResponseAmino): _173.MsgChannelOpenTryResponse;
                    toAmino(message: _173.MsgChannelOpenTryResponse): _173.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelOpenTryResponseAminoMsg): _173.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _173.MsgChannelOpenTryResponse): _173.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelOpenTryResponseProtoMsg): _173.MsgChannelOpenTryResponse;
                    toProto(message: _173.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelOpenTryResponse): _173.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgChannelOpenAck;
                    fromJSON(object: any): _173.MsgChannelOpenAck;
                    toJSON(message: _173.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_173.MsgChannelOpenAck>): _173.MsgChannelOpenAck;
                    fromAmino(object: _173.MsgChannelOpenAckAmino): _173.MsgChannelOpenAck;
                    toAmino(message: _173.MsgChannelOpenAck): _173.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _173.MsgChannelOpenAckAminoMsg): _173.MsgChannelOpenAck;
                    toAminoMsg(message: _173.MsgChannelOpenAck): _173.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelOpenAckProtoMsg): _173.MsgChannelOpenAck;
                    toProto(message: _173.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelOpenAck): _173.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _173.MsgChannelOpenAckResponse;
                    toJSON(_: _173.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_173.MsgChannelOpenAckResponse>): _173.MsgChannelOpenAckResponse;
                    fromAmino(_: _173.MsgChannelOpenAckResponseAmino): _173.MsgChannelOpenAckResponse;
                    toAmino(_: _173.MsgChannelOpenAckResponse): _173.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelOpenAckResponseAminoMsg): _173.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _173.MsgChannelOpenAckResponse): _173.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelOpenAckResponseProtoMsg): _173.MsgChannelOpenAckResponse;
                    toProto(message: _173.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelOpenAckResponse): _173.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgChannelOpenConfirm;
                    fromJSON(object: any): _173.MsgChannelOpenConfirm;
                    toJSON(message: _173.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_173.MsgChannelOpenConfirm>): _173.MsgChannelOpenConfirm;
                    fromAmino(object: _173.MsgChannelOpenConfirmAmino): _173.MsgChannelOpenConfirm;
                    toAmino(message: _173.MsgChannelOpenConfirm): _173.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _173.MsgChannelOpenConfirmAminoMsg): _173.MsgChannelOpenConfirm;
                    toAminoMsg(message: _173.MsgChannelOpenConfirm): _173.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelOpenConfirmProtoMsg): _173.MsgChannelOpenConfirm;
                    toProto(message: _173.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelOpenConfirm): _173.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _173.MsgChannelOpenConfirmResponse;
                    toJSON(_: _173.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_173.MsgChannelOpenConfirmResponse>): _173.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _173.MsgChannelOpenConfirmResponseAmino): _173.MsgChannelOpenConfirmResponse;
                    toAmino(_: _173.MsgChannelOpenConfirmResponse): _173.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelOpenConfirmResponseAminoMsg): _173.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _173.MsgChannelOpenConfirmResponse): _173.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelOpenConfirmResponseProtoMsg): _173.MsgChannelOpenConfirmResponse;
                    toProto(message: _173.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelOpenConfirmResponse): _173.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgChannelCloseInit;
                    fromJSON(object: any): _173.MsgChannelCloseInit;
                    toJSON(message: _173.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_173.MsgChannelCloseInit>): _173.MsgChannelCloseInit;
                    fromAmino(object: _173.MsgChannelCloseInitAmino): _173.MsgChannelCloseInit;
                    toAmino(message: _173.MsgChannelCloseInit): _173.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _173.MsgChannelCloseInitAminoMsg): _173.MsgChannelCloseInit;
                    toAminoMsg(message: _173.MsgChannelCloseInit): _173.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelCloseInitProtoMsg): _173.MsgChannelCloseInit;
                    toProto(message: _173.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelCloseInit): _173.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _173.MsgChannelCloseInitResponse;
                    toJSON(_: _173.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_173.MsgChannelCloseInitResponse>): _173.MsgChannelCloseInitResponse;
                    fromAmino(_: _173.MsgChannelCloseInitResponseAmino): _173.MsgChannelCloseInitResponse;
                    toAmino(_: _173.MsgChannelCloseInitResponse): _173.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelCloseInitResponseAminoMsg): _173.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _173.MsgChannelCloseInitResponse): _173.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelCloseInitResponseProtoMsg): _173.MsgChannelCloseInitResponse;
                    toProto(message: _173.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelCloseInitResponse): _173.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _173.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgChannelCloseConfirm;
                    fromJSON(object: any): _173.MsgChannelCloseConfirm;
                    toJSON(message: _173.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_173.MsgChannelCloseConfirm>): _173.MsgChannelCloseConfirm;
                    fromAmino(object: _173.MsgChannelCloseConfirmAmino): _173.MsgChannelCloseConfirm;
                    toAmino(message: _173.MsgChannelCloseConfirm): _173.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _173.MsgChannelCloseConfirmAminoMsg): _173.MsgChannelCloseConfirm;
                    toAminoMsg(message: _173.MsgChannelCloseConfirm): _173.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelCloseConfirmProtoMsg): _173.MsgChannelCloseConfirm;
                    toProto(message: _173.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelCloseConfirm): _173.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _173.MsgChannelCloseConfirmResponse;
                    toJSON(_: _173.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_173.MsgChannelCloseConfirmResponse>): _173.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _173.MsgChannelCloseConfirmResponseAmino): _173.MsgChannelCloseConfirmResponse;
                    toAmino(_: _173.MsgChannelCloseConfirmResponse): _173.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _173.MsgChannelCloseConfirmResponseAminoMsg): _173.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _173.MsgChannelCloseConfirmResponse): _173.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgChannelCloseConfirmResponseProtoMsg): _173.MsgChannelCloseConfirmResponse;
                    toProto(message: _173.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgChannelCloseConfirmResponse): _173.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _173.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgRecvPacket;
                    fromJSON(object: any): _173.MsgRecvPacket;
                    toJSON(message: _173.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_173.MsgRecvPacket>): _173.MsgRecvPacket;
                    fromAmino(object: _173.MsgRecvPacketAmino): _173.MsgRecvPacket;
                    toAmino(message: _173.MsgRecvPacket): _173.MsgRecvPacketAmino;
                    fromAminoMsg(object: _173.MsgRecvPacketAminoMsg): _173.MsgRecvPacket;
                    toAminoMsg(message: _173.MsgRecvPacket): _173.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _173.MsgRecvPacketProtoMsg): _173.MsgRecvPacket;
                    toProto(message: _173.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _173.MsgRecvPacket): _173.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgRecvPacketResponse;
                    fromJSON(object: any): _173.MsgRecvPacketResponse;
                    toJSON(message: _173.MsgRecvPacketResponse): unknown;
                    fromPartial(object: Partial<_173.MsgRecvPacketResponse>): _173.MsgRecvPacketResponse;
                    fromAmino(object: _173.MsgRecvPacketResponseAmino): _173.MsgRecvPacketResponse;
                    toAmino(message: _173.MsgRecvPacketResponse): _173.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _173.MsgRecvPacketResponseAminoMsg): _173.MsgRecvPacketResponse;
                    toAminoMsg(message: _173.MsgRecvPacketResponse): _173.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgRecvPacketResponseProtoMsg): _173.MsgRecvPacketResponse;
                    toProto(message: _173.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgRecvPacketResponse): _173.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _173.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgTimeout;
                    fromJSON(object: any): _173.MsgTimeout;
                    toJSON(message: _173.MsgTimeout): unknown;
                    fromPartial(object: Partial<_173.MsgTimeout>): _173.MsgTimeout;
                    fromAmino(object: _173.MsgTimeoutAmino): _173.MsgTimeout;
                    toAmino(message: _173.MsgTimeout): _173.MsgTimeoutAmino;
                    fromAminoMsg(object: _173.MsgTimeoutAminoMsg): _173.MsgTimeout;
                    toAminoMsg(message: _173.MsgTimeout): _173.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _173.MsgTimeoutProtoMsg): _173.MsgTimeout;
                    toProto(message: _173.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _173.MsgTimeout): _173.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgTimeoutResponse;
                    fromJSON(object: any): _173.MsgTimeoutResponse;
                    toJSON(message: _173.MsgTimeoutResponse): unknown;
                    fromPartial(object: Partial<_173.MsgTimeoutResponse>): _173.MsgTimeoutResponse;
                    fromAmino(object: _173.MsgTimeoutResponseAmino): _173.MsgTimeoutResponse;
                    toAmino(message: _173.MsgTimeoutResponse): _173.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _173.MsgTimeoutResponseAminoMsg): _173.MsgTimeoutResponse;
                    toAminoMsg(message: _173.MsgTimeoutResponse): _173.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgTimeoutResponseProtoMsg): _173.MsgTimeoutResponse;
                    toProto(message: _173.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgTimeoutResponse): _173.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _173.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgTimeoutOnClose;
                    fromJSON(object: any): _173.MsgTimeoutOnClose;
                    toJSON(message: _173.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_173.MsgTimeoutOnClose>): _173.MsgTimeoutOnClose;
                    fromAmino(object: _173.MsgTimeoutOnCloseAmino): _173.MsgTimeoutOnClose;
                    toAmino(message: _173.MsgTimeoutOnClose): _173.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _173.MsgTimeoutOnCloseAminoMsg): _173.MsgTimeoutOnClose;
                    toAminoMsg(message: _173.MsgTimeoutOnClose): _173.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _173.MsgTimeoutOnCloseProtoMsg): _173.MsgTimeoutOnClose;
                    toProto(message: _173.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _173.MsgTimeoutOnClose): _173.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgTimeoutOnCloseResponse;
                    fromJSON(object: any): _173.MsgTimeoutOnCloseResponse;
                    toJSON(message: _173.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(object: Partial<_173.MsgTimeoutOnCloseResponse>): _173.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _173.MsgTimeoutOnCloseResponseAmino): _173.MsgTimeoutOnCloseResponse;
                    toAmino(message: _173.MsgTimeoutOnCloseResponse): _173.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _173.MsgTimeoutOnCloseResponseAminoMsg): _173.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _173.MsgTimeoutOnCloseResponse): _173.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgTimeoutOnCloseResponseProtoMsg): _173.MsgTimeoutOnCloseResponse;
                    toProto(message: _173.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgTimeoutOnCloseResponse): _173.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _173.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgAcknowledgement;
                    fromJSON(object: any): _173.MsgAcknowledgement;
                    toJSON(message: _173.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_173.MsgAcknowledgement>): _173.MsgAcknowledgement;
                    fromAmino(object: _173.MsgAcknowledgementAmino): _173.MsgAcknowledgement;
                    toAmino(message: _173.MsgAcknowledgement): _173.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _173.MsgAcknowledgementAminoMsg): _173.MsgAcknowledgement;
                    toAminoMsg(message: _173.MsgAcknowledgement): _173.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _173.MsgAcknowledgementProtoMsg): _173.MsgAcknowledgement;
                    toProto(message: _173.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _173.MsgAcknowledgement): _173.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _173.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgAcknowledgementResponse;
                    fromJSON(object: any): _173.MsgAcknowledgementResponse;
                    toJSON(message: _173.MsgAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_173.MsgAcknowledgementResponse>): _173.MsgAcknowledgementResponse;
                    fromAmino(object: _173.MsgAcknowledgementResponseAmino): _173.MsgAcknowledgementResponse;
                    toAmino(message: _173.MsgAcknowledgementResponse): _173.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _173.MsgAcknowledgementResponseAminoMsg): _173.MsgAcknowledgementResponse;
                    toAminoMsg(message: _173.MsgAcknowledgementResponse): _173.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgAcknowledgementResponseProtoMsg): _173.MsgAcknowledgementResponse;
                    toProto(message: _173.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgAcknowledgementResponse): _173.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryChannelRequest;
                    fromJSON(object: any): _172.QueryChannelRequest;
                    toJSON(message: _172.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_172.QueryChannelRequest>): _172.QueryChannelRequest;
                    fromAmino(object: _172.QueryChannelRequestAmino): _172.QueryChannelRequest;
                    toAmino(message: _172.QueryChannelRequest): _172.QueryChannelRequestAmino;
                    fromAminoMsg(object: _172.QueryChannelRequestAminoMsg): _172.QueryChannelRequest;
                    toAminoMsg(message: _172.QueryChannelRequest): _172.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelRequestProtoMsg): _172.QueryChannelRequest;
                    toProto(message: _172.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelRequest): _172.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryChannelResponse;
                    fromJSON(object: any): _172.QueryChannelResponse;
                    toJSON(message: _172.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_172.QueryChannelResponse>): _172.QueryChannelResponse;
                    fromAmino(object: _172.QueryChannelResponseAmino): _172.QueryChannelResponse;
                    toAmino(message: _172.QueryChannelResponse): _172.QueryChannelResponseAmino;
                    fromAminoMsg(object: _172.QueryChannelResponseAminoMsg): _172.QueryChannelResponse;
                    toAminoMsg(message: _172.QueryChannelResponse): _172.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelResponseProtoMsg): _172.QueryChannelResponse;
                    toProto(message: _172.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelResponse): _172.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryChannelsRequest;
                    fromJSON(object: any): _172.QueryChannelsRequest;
                    toJSON(message: _172.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_172.QueryChannelsRequest>): _172.QueryChannelsRequest;
                    fromAmino(object: _172.QueryChannelsRequestAmino): _172.QueryChannelsRequest;
                    toAmino(message: _172.QueryChannelsRequest): _172.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _172.QueryChannelsRequestAminoMsg): _172.QueryChannelsRequest;
                    toAminoMsg(message: _172.QueryChannelsRequest): _172.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelsRequestProtoMsg): _172.QueryChannelsRequest;
                    toProto(message: _172.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelsRequest): _172.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryChannelsResponse;
                    fromJSON(object: any): _172.QueryChannelsResponse;
                    toJSON(message: _172.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_172.QueryChannelsResponse>): _172.QueryChannelsResponse;
                    fromAmino(object: _172.QueryChannelsResponseAmino): _172.QueryChannelsResponse;
                    toAmino(message: _172.QueryChannelsResponse): _172.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _172.QueryChannelsResponseAminoMsg): _172.QueryChannelsResponse;
                    toAminoMsg(message: _172.QueryChannelsResponse): _172.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelsResponseProtoMsg): _172.QueryChannelsResponse;
                    toProto(message: _172.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelsResponse): _172.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _172.QueryConnectionChannelsRequest;
                    toJSON(message: _172.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_172.QueryConnectionChannelsRequest>): _172.QueryConnectionChannelsRequest;
                    fromAmino(object: _172.QueryConnectionChannelsRequestAmino): _172.QueryConnectionChannelsRequest;
                    toAmino(message: _172.QueryConnectionChannelsRequest): _172.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _172.QueryConnectionChannelsRequestAminoMsg): _172.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _172.QueryConnectionChannelsRequest): _172.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryConnectionChannelsRequestProtoMsg): _172.QueryConnectionChannelsRequest;
                    toProto(message: _172.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryConnectionChannelsRequest): _172.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _172.QueryConnectionChannelsResponse;
                    toJSON(message: _172.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_172.QueryConnectionChannelsResponse>): _172.QueryConnectionChannelsResponse;
                    fromAmino(object: _172.QueryConnectionChannelsResponseAmino): _172.QueryConnectionChannelsResponse;
                    toAmino(message: _172.QueryConnectionChannelsResponse): _172.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _172.QueryConnectionChannelsResponseAminoMsg): _172.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _172.QueryConnectionChannelsResponse): _172.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryConnectionChannelsResponseProtoMsg): _172.QueryConnectionChannelsResponse;
                    toProto(message: _172.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryConnectionChannelsResponse): _172.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryChannelClientStateRequest;
                    fromJSON(object: any): _172.QueryChannelClientStateRequest;
                    toJSON(message: _172.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_172.QueryChannelClientStateRequest>): _172.QueryChannelClientStateRequest;
                    fromAmino(object: _172.QueryChannelClientStateRequestAmino): _172.QueryChannelClientStateRequest;
                    toAmino(message: _172.QueryChannelClientStateRequest): _172.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _172.QueryChannelClientStateRequestAminoMsg): _172.QueryChannelClientStateRequest;
                    toAminoMsg(message: _172.QueryChannelClientStateRequest): _172.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelClientStateRequestProtoMsg): _172.QueryChannelClientStateRequest;
                    toProto(message: _172.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelClientStateRequest): _172.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryChannelClientStateResponse;
                    fromJSON(object: any): _172.QueryChannelClientStateResponse;
                    toJSON(message: _172.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_172.QueryChannelClientStateResponse>): _172.QueryChannelClientStateResponse;
                    fromAmino(object: _172.QueryChannelClientStateResponseAmino): _172.QueryChannelClientStateResponse;
                    toAmino(message: _172.QueryChannelClientStateResponse): _172.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _172.QueryChannelClientStateResponseAminoMsg): _172.QueryChannelClientStateResponse;
                    toAminoMsg(message: _172.QueryChannelClientStateResponse): _172.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelClientStateResponseProtoMsg): _172.QueryChannelClientStateResponse;
                    toProto(message: _172.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelClientStateResponse): _172.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _172.QueryChannelConsensusStateRequest;
                    toJSON(message: _172.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_172.QueryChannelConsensusStateRequest>): _172.QueryChannelConsensusStateRequest;
                    fromAmino(object: _172.QueryChannelConsensusStateRequestAmino): _172.QueryChannelConsensusStateRequest;
                    toAmino(message: _172.QueryChannelConsensusStateRequest): _172.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _172.QueryChannelConsensusStateRequestAminoMsg): _172.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _172.QueryChannelConsensusStateRequest): _172.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelConsensusStateRequestProtoMsg): _172.QueryChannelConsensusStateRequest;
                    toProto(message: _172.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelConsensusStateRequest): _172.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _172.QueryChannelConsensusStateResponse;
                    toJSON(message: _172.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_172.QueryChannelConsensusStateResponse>): _172.QueryChannelConsensusStateResponse;
                    fromAmino(object: _172.QueryChannelConsensusStateResponseAmino): _172.QueryChannelConsensusStateResponse;
                    toAmino(message: _172.QueryChannelConsensusStateResponse): _172.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _172.QueryChannelConsensusStateResponseAminoMsg): _172.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _172.QueryChannelConsensusStateResponse): _172.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryChannelConsensusStateResponseProtoMsg): _172.QueryChannelConsensusStateResponse;
                    toProto(message: _172.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryChannelConsensusStateResponse): _172.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _172.QueryPacketCommitmentRequest;
                    toJSON(message: _172.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_172.QueryPacketCommitmentRequest>): _172.QueryPacketCommitmentRequest;
                    fromAmino(object: _172.QueryPacketCommitmentRequestAmino): _172.QueryPacketCommitmentRequest;
                    toAmino(message: _172.QueryPacketCommitmentRequest): _172.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _172.QueryPacketCommitmentRequestAminoMsg): _172.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _172.QueryPacketCommitmentRequest): _172.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketCommitmentRequestProtoMsg): _172.QueryPacketCommitmentRequest;
                    toProto(message: _172.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketCommitmentRequest): _172.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _172.QueryPacketCommitmentResponse;
                    toJSON(message: _172.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_172.QueryPacketCommitmentResponse>): _172.QueryPacketCommitmentResponse;
                    fromAmino(object: _172.QueryPacketCommitmentResponseAmino): _172.QueryPacketCommitmentResponse;
                    toAmino(message: _172.QueryPacketCommitmentResponse): _172.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _172.QueryPacketCommitmentResponseAminoMsg): _172.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _172.QueryPacketCommitmentResponse): _172.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketCommitmentResponseProtoMsg): _172.QueryPacketCommitmentResponse;
                    toProto(message: _172.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketCommitmentResponse): _172.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _172.QueryPacketCommitmentsRequest;
                    toJSON(message: _172.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_172.QueryPacketCommitmentsRequest>): _172.QueryPacketCommitmentsRequest;
                    fromAmino(object: _172.QueryPacketCommitmentsRequestAmino): _172.QueryPacketCommitmentsRequest;
                    toAmino(message: _172.QueryPacketCommitmentsRequest): _172.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _172.QueryPacketCommitmentsRequestAminoMsg): _172.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _172.QueryPacketCommitmentsRequest): _172.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketCommitmentsRequestProtoMsg): _172.QueryPacketCommitmentsRequest;
                    toProto(message: _172.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketCommitmentsRequest): _172.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _172.QueryPacketCommitmentsResponse;
                    toJSON(message: _172.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_172.QueryPacketCommitmentsResponse>): _172.QueryPacketCommitmentsResponse;
                    fromAmino(object: _172.QueryPacketCommitmentsResponseAmino): _172.QueryPacketCommitmentsResponse;
                    toAmino(message: _172.QueryPacketCommitmentsResponse): _172.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _172.QueryPacketCommitmentsResponseAminoMsg): _172.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _172.QueryPacketCommitmentsResponse): _172.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketCommitmentsResponseProtoMsg): _172.QueryPacketCommitmentsResponse;
                    toProto(message: _172.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketCommitmentsResponse): _172.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPacketReceiptRequest;
                    fromJSON(object: any): _172.QueryPacketReceiptRequest;
                    toJSON(message: _172.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_172.QueryPacketReceiptRequest>): _172.QueryPacketReceiptRequest;
                    fromAmino(object: _172.QueryPacketReceiptRequestAmino): _172.QueryPacketReceiptRequest;
                    toAmino(message: _172.QueryPacketReceiptRequest): _172.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _172.QueryPacketReceiptRequestAminoMsg): _172.QueryPacketReceiptRequest;
                    toAminoMsg(message: _172.QueryPacketReceiptRequest): _172.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketReceiptRequestProtoMsg): _172.QueryPacketReceiptRequest;
                    toProto(message: _172.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketReceiptRequest): _172.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPacketReceiptResponse;
                    fromJSON(object: any): _172.QueryPacketReceiptResponse;
                    toJSON(message: _172.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_172.QueryPacketReceiptResponse>): _172.QueryPacketReceiptResponse;
                    fromAmino(object: _172.QueryPacketReceiptResponseAmino): _172.QueryPacketReceiptResponse;
                    toAmino(message: _172.QueryPacketReceiptResponse): _172.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _172.QueryPacketReceiptResponseAminoMsg): _172.QueryPacketReceiptResponse;
                    toAminoMsg(message: _172.QueryPacketReceiptResponse): _172.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketReceiptResponseProtoMsg): _172.QueryPacketReceiptResponse;
                    toProto(message: _172.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketReceiptResponse): _172.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _172.QueryPacketAcknowledgementRequest;
                    toJSON(message: _172.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_172.QueryPacketAcknowledgementRequest>): _172.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _172.QueryPacketAcknowledgementRequestAmino): _172.QueryPacketAcknowledgementRequest;
                    toAmino(message: _172.QueryPacketAcknowledgementRequest): _172.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _172.QueryPacketAcknowledgementRequestAminoMsg): _172.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _172.QueryPacketAcknowledgementRequest): _172.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketAcknowledgementRequestProtoMsg): _172.QueryPacketAcknowledgementRequest;
                    toProto(message: _172.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketAcknowledgementRequest): _172.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _172.QueryPacketAcknowledgementResponse;
                    toJSON(message: _172.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_172.QueryPacketAcknowledgementResponse>): _172.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _172.QueryPacketAcknowledgementResponseAmino): _172.QueryPacketAcknowledgementResponse;
                    toAmino(message: _172.QueryPacketAcknowledgementResponse): _172.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _172.QueryPacketAcknowledgementResponseAminoMsg): _172.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _172.QueryPacketAcknowledgementResponse): _172.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketAcknowledgementResponseProtoMsg): _172.QueryPacketAcknowledgementResponse;
                    toProto(message: _172.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketAcknowledgementResponse): _172.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _172.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _172.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_172.QueryPacketAcknowledgementsRequest>): _172.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _172.QueryPacketAcknowledgementsRequestAmino): _172.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _172.QueryPacketAcknowledgementsRequest): _172.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _172.QueryPacketAcknowledgementsRequestAminoMsg): _172.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _172.QueryPacketAcknowledgementsRequest): _172.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketAcknowledgementsRequestProtoMsg): _172.QueryPacketAcknowledgementsRequest;
                    toProto(message: _172.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketAcknowledgementsRequest): _172.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _172.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _172.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_172.QueryPacketAcknowledgementsResponse>): _172.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _172.QueryPacketAcknowledgementsResponseAmino): _172.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _172.QueryPacketAcknowledgementsResponse): _172.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _172.QueryPacketAcknowledgementsResponseAminoMsg): _172.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _172.QueryPacketAcknowledgementsResponse): _172.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryPacketAcknowledgementsResponseProtoMsg): _172.QueryPacketAcknowledgementsResponse;
                    toProto(message: _172.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryPacketAcknowledgementsResponse): _172.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _172.QueryUnreceivedPacketsRequest;
                    toJSON(message: _172.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_172.QueryUnreceivedPacketsRequest>): _172.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _172.QueryUnreceivedPacketsRequestAmino): _172.QueryUnreceivedPacketsRequest;
                    toAmino(message: _172.QueryUnreceivedPacketsRequest): _172.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _172.QueryUnreceivedPacketsRequestAminoMsg): _172.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _172.QueryUnreceivedPacketsRequest): _172.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryUnreceivedPacketsRequestProtoMsg): _172.QueryUnreceivedPacketsRequest;
                    toProto(message: _172.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryUnreceivedPacketsRequest): _172.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _172.QueryUnreceivedPacketsResponse;
                    toJSON(message: _172.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_172.QueryUnreceivedPacketsResponse>): _172.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _172.QueryUnreceivedPacketsResponseAmino): _172.QueryUnreceivedPacketsResponse;
                    toAmino(message: _172.QueryUnreceivedPacketsResponse): _172.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _172.QueryUnreceivedPacketsResponseAminoMsg): _172.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _172.QueryUnreceivedPacketsResponse): _172.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryUnreceivedPacketsResponseProtoMsg): _172.QueryUnreceivedPacketsResponse;
                    toProto(message: _172.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryUnreceivedPacketsResponse): _172.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _172.QueryUnreceivedAcksRequest;
                    toJSON(message: _172.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_172.QueryUnreceivedAcksRequest>): _172.QueryUnreceivedAcksRequest;
                    fromAmino(object: _172.QueryUnreceivedAcksRequestAmino): _172.QueryUnreceivedAcksRequest;
                    toAmino(message: _172.QueryUnreceivedAcksRequest): _172.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _172.QueryUnreceivedAcksRequestAminoMsg): _172.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _172.QueryUnreceivedAcksRequest): _172.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryUnreceivedAcksRequestProtoMsg): _172.QueryUnreceivedAcksRequest;
                    toProto(message: _172.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryUnreceivedAcksRequest): _172.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _172.QueryUnreceivedAcksResponse;
                    toJSON(message: _172.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_172.QueryUnreceivedAcksResponse>): _172.QueryUnreceivedAcksResponse;
                    fromAmino(object: _172.QueryUnreceivedAcksResponseAmino): _172.QueryUnreceivedAcksResponse;
                    toAmino(message: _172.QueryUnreceivedAcksResponse): _172.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _172.QueryUnreceivedAcksResponseAminoMsg): _172.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _172.QueryUnreceivedAcksResponse): _172.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryUnreceivedAcksResponseProtoMsg): _172.QueryUnreceivedAcksResponse;
                    toProto(message: _172.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryUnreceivedAcksResponse): _172.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _172.QueryNextSequenceReceiveRequest;
                    toJSON(message: _172.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_172.QueryNextSequenceReceiveRequest>): _172.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _172.QueryNextSequenceReceiveRequestAmino): _172.QueryNextSequenceReceiveRequest;
                    toAmino(message: _172.QueryNextSequenceReceiveRequest): _172.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _172.QueryNextSequenceReceiveRequestAminoMsg): _172.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _172.QueryNextSequenceReceiveRequest): _172.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryNextSequenceReceiveRequestProtoMsg): _172.QueryNextSequenceReceiveRequest;
                    toProto(message: _172.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryNextSequenceReceiveRequest): _172.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _172.QueryNextSequenceReceiveResponse;
                    toJSON(message: _172.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_172.QueryNextSequenceReceiveResponse>): _172.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _172.QueryNextSequenceReceiveResponseAmino): _172.QueryNextSequenceReceiveResponse;
                    toAmino(message: _172.QueryNextSequenceReceiveResponse): _172.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _172.QueryNextSequenceReceiveResponseAminoMsg): _172.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _172.QueryNextSequenceReceiveResponse): _172.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryNextSequenceReceiveResponseProtoMsg): _172.QueryNextSequenceReceiveResponse;
                    toProto(message: _172.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryNextSequenceReceiveResponse): _172.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _171.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.GenesisState;
                    fromJSON(object: any): _171.GenesisState;
                    toJSON(message: _171.GenesisState): unknown;
                    fromPartial(object: Partial<_171.GenesisState>): _171.GenesisState;
                    fromAmino(object: _171.GenesisStateAmino): _171.GenesisState;
                    toAmino(message: _171.GenesisState): _171.GenesisStateAmino;
                    fromAminoMsg(object: _171.GenesisStateAminoMsg): _171.GenesisState;
                    toAminoMsg(message: _171.GenesisState): _171.GenesisStateAminoMsg;
                    fromProtoMsg(message: _171.GenesisStateProtoMsg): _171.GenesisState;
                    toProto(message: _171.GenesisState): Uint8Array;
                    toProtoMsg(message: _171.GenesisState): _171.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _171.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.PacketSequence;
                    fromJSON(object: any): _171.PacketSequence;
                    toJSON(message: _171.PacketSequence): unknown;
                    fromPartial(object: Partial<_171.PacketSequence>): _171.PacketSequence;
                    fromAmino(object: _171.PacketSequenceAmino): _171.PacketSequence;
                    toAmino(message: _171.PacketSequence): _171.PacketSequenceAmino;
                    fromAminoMsg(object: _171.PacketSequenceAminoMsg): _171.PacketSequence;
                    toAminoMsg(message: _171.PacketSequence): _171.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _171.PacketSequenceProtoMsg): _171.PacketSequence;
                    toProto(message: _171.PacketSequence): Uint8Array;
                    toProtoMsg(message: _171.PacketSequence): _171.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _170.State;
                stateToJSON(object: _170.State): string;
                orderFromJSON(object: any): _170.Order;
                orderToJSON(object: _170.Order): string;
                State: typeof _170.State;
                StateSDKType: typeof _170.State;
                StateAmino: typeof _170.State;
                Order: typeof _170.Order;
                OrderSDKType: typeof _170.Order;
                OrderAmino: typeof _170.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _170.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Channel;
                    fromJSON(object: any): _170.Channel;
                    toJSON(message: _170.Channel): unknown;
                    fromPartial(object: Partial<_170.Channel>): _170.Channel;
                    fromAmino(object: _170.ChannelAmino): _170.Channel;
                    toAmino(message: _170.Channel): _170.ChannelAmino;
                    fromAminoMsg(object: _170.ChannelAminoMsg): _170.Channel;
                    toAminoMsg(message: _170.Channel): _170.ChannelAminoMsg;
                    fromProtoMsg(message: _170.ChannelProtoMsg): _170.Channel;
                    toProto(message: _170.Channel): Uint8Array;
                    toProtoMsg(message: _170.Channel): _170.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _170.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.IdentifiedChannel;
                    fromJSON(object: any): _170.IdentifiedChannel;
                    toJSON(message: _170.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_170.IdentifiedChannel>): _170.IdentifiedChannel;
                    fromAmino(object: _170.IdentifiedChannelAmino): _170.IdentifiedChannel;
                    toAmino(message: _170.IdentifiedChannel): _170.IdentifiedChannelAmino;
                    fromAminoMsg(object: _170.IdentifiedChannelAminoMsg): _170.IdentifiedChannel;
                    toAminoMsg(message: _170.IdentifiedChannel): _170.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _170.IdentifiedChannelProtoMsg): _170.IdentifiedChannel;
                    toProto(message: _170.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _170.IdentifiedChannel): _170.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _170.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Counterparty;
                    fromJSON(object: any): _170.Counterparty;
                    toJSON(message: _170.Counterparty): unknown;
                    fromPartial(object: Partial<_170.Counterparty>): _170.Counterparty;
                    fromAmino(object: _170.CounterpartyAmino): _170.Counterparty;
                    toAmino(message: _170.Counterparty): _170.CounterpartyAmino;
                    fromAminoMsg(object: _170.CounterpartyAminoMsg): _170.Counterparty;
                    toAminoMsg(message: _170.Counterparty): _170.CounterpartyAminoMsg;
                    fromProtoMsg(message: _170.CounterpartyProtoMsg): _170.Counterparty;
                    toProto(message: _170.Counterparty): Uint8Array;
                    toProtoMsg(message: _170.Counterparty): _170.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _170.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Packet;
                    fromJSON(object: any): _170.Packet;
                    toJSON(message: _170.Packet): unknown;
                    fromPartial(object: Partial<_170.Packet>): _170.Packet;
                    fromAmino(object: _170.PacketAmino): _170.Packet;
                    toAmino(message: _170.Packet): _170.PacketAmino;
                    fromAminoMsg(object: _170.PacketAminoMsg): _170.Packet;
                    toAminoMsg(message: _170.Packet): _170.PacketAminoMsg;
                    fromProtoMsg(message: _170.PacketProtoMsg): _170.Packet;
                    toProto(message: _170.Packet): Uint8Array;
                    toProtoMsg(message: _170.Packet): _170.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _170.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.PacketState;
                    fromJSON(object: any): _170.PacketState;
                    toJSON(message: _170.PacketState): unknown;
                    fromPartial(object: Partial<_170.PacketState>): _170.PacketState;
                    fromAmino(object: _170.PacketStateAmino): _170.PacketState;
                    toAmino(message: _170.PacketState): _170.PacketStateAmino;
                    fromAminoMsg(object: _170.PacketStateAminoMsg): _170.PacketState;
                    toAminoMsg(message: _170.PacketState): _170.PacketStateAminoMsg;
                    fromProtoMsg(message: _170.PacketStateProtoMsg): _170.PacketState;
                    toProto(message: _170.PacketState): Uint8Array;
                    toProtoMsg(message: _170.PacketState): _170.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _170.PacketId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.PacketId;
                    fromJSON(object: any): _170.PacketId;
                    toJSON(message: _170.PacketId): unknown;
                    fromPartial(object: Partial<_170.PacketId>): _170.PacketId;
                    fromAmino(object: _170.PacketIdAmino): _170.PacketId;
                    toAmino(message: _170.PacketId): _170.PacketIdAmino;
                    fromAminoMsg(object: _170.PacketIdAminoMsg): _170.PacketId;
                    toAminoMsg(message: _170.PacketId): _170.PacketIdAminoMsg;
                    fromProtoMsg(message: _170.PacketIdProtoMsg): _170.PacketId;
                    toProto(message: _170.PacketId): Uint8Array;
                    toProtoMsg(message: _170.PacketId): _170.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _170.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Acknowledgement;
                    fromJSON(object: any): _170.Acknowledgement;
                    toJSON(message: _170.Acknowledgement): unknown;
                    fromPartial(object: Partial<_170.Acknowledgement>): _170.Acknowledgement;
                    fromAmino(object: _170.AcknowledgementAmino): _170.Acknowledgement;
                    toAmino(message: _170.Acknowledgement): _170.AcknowledgementAmino;
                    fromAminoMsg(object: _170.AcknowledgementAminoMsg): _170.Acknowledgement;
                    toAminoMsg(message: _170.Acknowledgement): _170.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _170.AcknowledgementProtoMsg): _170.Acknowledgement;
                    toProto(message: _170.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _170.Acknowledgement): _170.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _343.MsgClientImpl;
                QueryClientImpl: typeof _337.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _176.QueryClientStateRequest): Promise<_176.QueryClientStateResponse>;
                    clientStates(request?: _176.QueryClientStatesRequest): Promise<_176.QueryClientStatesResponse>;
                    consensusState(request: _176.QueryConsensusStateRequest): Promise<_176.QueryConsensusStateResponse>;
                    consensusStates(request: _176.QueryConsensusStatesRequest): Promise<_176.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _176.QueryConsensusStateHeightsRequest): Promise<_176.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _176.QueryClientStatusRequest): Promise<_176.QueryClientStatusResponse>;
                    clientParams(request?: _176.QueryClientParamsRequest): Promise<_176.QueryClientParamsResponse>;
                    upgradedClientState(request?: _176.QueryUpgradedClientStateRequest): Promise<_176.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _176.QueryUpgradedConsensusStateRequest): Promise<_176.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _330.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _177.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _177.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _177.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _177.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _177.MsgCreateClient): {
                            typeUrl: string;
                            value: _177.MsgCreateClient;
                        };
                        updateClient(value: _177.MsgUpdateClient): {
                            typeUrl: string;
                            value: _177.MsgUpdateClient;
                        };
                        upgradeClient(value: _177.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _177.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _177.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _177.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _177.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _177.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _177.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _177.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _177.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _177.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _177.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _177.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _177.MsgCreateClient): {
                            typeUrl: string;
                            value: _177.MsgCreateClient;
                        };
                        updateClient(value: _177.MsgUpdateClient): {
                            typeUrl: string;
                            value: _177.MsgUpdateClient;
                        };
                        upgradeClient(value: _177.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _177.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _177.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _177.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _177.MsgCreateClient) => _177.MsgCreateClientAmino;
                        fromAmino: (object: _177.MsgCreateClientAmino) => _177.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _177.MsgUpdateClient) => _177.MsgUpdateClientAmino;
                        fromAmino: (object: _177.MsgUpdateClientAmino) => _177.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _177.MsgUpgradeClient) => _177.MsgUpgradeClientAmino;
                        fromAmino: (object: _177.MsgUpgradeClientAmino) => _177.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _177.MsgSubmitMisbehaviour) => _177.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _177.MsgSubmitMisbehaviourAmino) => _177.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _177.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgCreateClient;
                    fromJSON(object: any): _177.MsgCreateClient;
                    toJSON(message: _177.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_177.MsgCreateClient>): _177.MsgCreateClient;
                    fromAmino(object: _177.MsgCreateClientAmino): _177.MsgCreateClient;
                    toAmino(message: _177.MsgCreateClient): _177.MsgCreateClientAmino;
                    fromAminoMsg(object: _177.MsgCreateClientAminoMsg): _177.MsgCreateClient;
                    toAminoMsg(message: _177.MsgCreateClient): _177.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _177.MsgCreateClientProtoMsg): _177.MsgCreateClient;
                    toProto(message: _177.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _177.MsgCreateClient): _177.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _177.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgCreateClientResponse;
                    fromJSON(_: any): _177.MsgCreateClientResponse;
                    toJSON(_: _177.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_177.MsgCreateClientResponse>): _177.MsgCreateClientResponse;
                    fromAmino(_: _177.MsgCreateClientResponseAmino): _177.MsgCreateClientResponse;
                    toAmino(_: _177.MsgCreateClientResponse): _177.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _177.MsgCreateClientResponseAminoMsg): _177.MsgCreateClientResponse;
                    toAminoMsg(message: _177.MsgCreateClientResponse): _177.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _177.MsgCreateClientResponseProtoMsg): _177.MsgCreateClientResponse;
                    toProto(message: _177.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _177.MsgCreateClientResponse): _177.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _177.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgUpdateClient;
                    fromJSON(object: any): _177.MsgUpdateClient;
                    toJSON(message: _177.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_177.MsgUpdateClient>): _177.MsgUpdateClient;
                    fromAmino(object: _177.MsgUpdateClientAmino): _177.MsgUpdateClient;
                    toAmino(message: _177.MsgUpdateClient): _177.MsgUpdateClientAmino;
                    fromAminoMsg(object: _177.MsgUpdateClientAminoMsg): _177.MsgUpdateClient;
                    toAminoMsg(message: _177.MsgUpdateClient): _177.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _177.MsgUpdateClientProtoMsg): _177.MsgUpdateClient;
                    toProto(message: _177.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _177.MsgUpdateClient): _177.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _177.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgUpdateClientResponse;
                    fromJSON(_: any): _177.MsgUpdateClientResponse;
                    toJSON(_: _177.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_177.MsgUpdateClientResponse>): _177.MsgUpdateClientResponse;
                    fromAmino(_: _177.MsgUpdateClientResponseAmino): _177.MsgUpdateClientResponse;
                    toAmino(_: _177.MsgUpdateClientResponse): _177.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _177.MsgUpdateClientResponseAminoMsg): _177.MsgUpdateClientResponse;
                    toAminoMsg(message: _177.MsgUpdateClientResponse): _177.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _177.MsgUpdateClientResponseProtoMsg): _177.MsgUpdateClientResponse;
                    toProto(message: _177.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _177.MsgUpdateClientResponse): _177.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _177.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgUpgradeClient;
                    fromJSON(object: any): _177.MsgUpgradeClient;
                    toJSON(message: _177.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_177.MsgUpgradeClient>): _177.MsgUpgradeClient;
                    fromAmino(object: _177.MsgUpgradeClientAmino): _177.MsgUpgradeClient;
                    toAmino(message: _177.MsgUpgradeClient): _177.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _177.MsgUpgradeClientAminoMsg): _177.MsgUpgradeClient;
                    toAminoMsg(message: _177.MsgUpgradeClient): _177.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _177.MsgUpgradeClientProtoMsg): _177.MsgUpgradeClient;
                    toProto(message: _177.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _177.MsgUpgradeClient): _177.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _177.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgUpgradeClientResponse;
                    fromJSON(_: any): _177.MsgUpgradeClientResponse;
                    toJSON(_: _177.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_177.MsgUpgradeClientResponse>): _177.MsgUpgradeClientResponse;
                    fromAmino(_: _177.MsgUpgradeClientResponseAmino): _177.MsgUpgradeClientResponse;
                    toAmino(_: _177.MsgUpgradeClientResponse): _177.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _177.MsgUpgradeClientResponseAminoMsg): _177.MsgUpgradeClientResponse;
                    toAminoMsg(message: _177.MsgUpgradeClientResponse): _177.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _177.MsgUpgradeClientResponseProtoMsg): _177.MsgUpgradeClientResponse;
                    toProto(message: _177.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _177.MsgUpgradeClientResponse): _177.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _177.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _177.MsgSubmitMisbehaviour;
                    toJSON(message: _177.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_177.MsgSubmitMisbehaviour>): _177.MsgSubmitMisbehaviour;
                    fromAmino(object: _177.MsgSubmitMisbehaviourAmino): _177.MsgSubmitMisbehaviour;
                    toAmino(message: _177.MsgSubmitMisbehaviour): _177.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _177.MsgSubmitMisbehaviourAminoMsg): _177.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _177.MsgSubmitMisbehaviour): _177.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _177.MsgSubmitMisbehaviourProtoMsg): _177.MsgSubmitMisbehaviour;
                    toProto(message: _177.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _177.MsgSubmitMisbehaviour): _177.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _177.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _177.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _177.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_177.MsgSubmitMisbehaviourResponse>): _177.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _177.MsgSubmitMisbehaviourResponseAmino): _177.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _177.MsgSubmitMisbehaviourResponse): _177.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _177.MsgSubmitMisbehaviourResponseAminoMsg): _177.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _177.MsgSubmitMisbehaviourResponse): _177.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _177.MsgSubmitMisbehaviourResponseProtoMsg): _177.MsgSubmitMisbehaviourResponse;
                    toProto(message: _177.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _177.MsgSubmitMisbehaviourResponse): _177.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _176.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryClientStateRequest;
                    fromJSON(object: any): _176.QueryClientStateRequest;
                    toJSON(message: _176.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_176.QueryClientStateRequest>): _176.QueryClientStateRequest;
                    fromAmino(object: _176.QueryClientStateRequestAmino): _176.QueryClientStateRequest;
                    toAmino(message: _176.QueryClientStateRequest): _176.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _176.QueryClientStateRequestAminoMsg): _176.QueryClientStateRequest;
                    toAminoMsg(message: _176.QueryClientStateRequest): _176.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryClientStateRequestProtoMsg): _176.QueryClientStateRequest;
                    toProto(message: _176.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryClientStateRequest): _176.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryClientStateResponse;
                    fromJSON(object: any): _176.QueryClientStateResponse;
                    toJSON(message: _176.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_176.QueryClientStateResponse>): _176.QueryClientStateResponse;
                    fromAmino(object: _176.QueryClientStateResponseAmino): _176.QueryClientStateResponse;
                    toAmino(message: _176.QueryClientStateResponse): _176.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _176.QueryClientStateResponseAminoMsg): _176.QueryClientStateResponse;
                    toAminoMsg(message: _176.QueryClientStateResponse): _176.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryClientStateResponseProtoMsg): _176.QueryClientStateResponse;
                    toProto(message: _176.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryClientStateResponse): _176.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _176.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryClientStatesRequest;
                    fromJSON(object: any): _176.QueryClientStatesRequest;
                    toJSON(message: _176.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_176.QueryClientStatesRequest>): _176.QueryClientStatesRequest;
                    fromAmino(object: _176.QueryClientStatesRequestAmino): _176.QueryClientStatesRequest;
                    toAmino(message: _176.QueryClientStatesRequest): _176.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _176.QueryClientStatesRequestAminoMsg): _176.QueryClientStatesRequest;
                    toAminoMsg(message: _176.QueryClientStatesRequest): _176.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryClientStatesRequestProtoMsg): _176.QueryClientStatesRequest;
                    toProto(message: _176.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryClientStatesRequest): _176.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryClientStatesResponse;
                    fromJSON(object: any): _176.QueryClientStatesResponse;
                    toJSON(message: _176.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_176.QueryClientStatesResponse>): _176.QueryClientStatesResponse;
                    fromAmino(object: _176.QueryClientStatesResponseAmino): _176.QueryClientStatesResponse;
                    toAmino(message: _176.QueryClientStatesResponse): _176.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _176.QueryClientStatesResponseAminoMsg): _176.QueryClientStatesResponse;
                    toAminoMsg(message: _176.QueryClientStatesResponse): _176.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryClientStatesResponseProtoMsg): _176.QueryClientStatesResponse;
                    toProto(message: _176.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryClientStatesResponse): _176.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _176.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryConsensusStateRequest;
                    fromJSON(object: any): _176.QueryConsensusStateRequest;
                    toJSON(message: _176.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_176.QueryConsensusStateRequest>): _176.QueryConsensusStateRequest;
                    fromAmino(object: _176.QueryConsensusStateRequestAmino): _176.QueryConsensusStateRequest;
                    toAmino(message: _176.QueryConsensusStateRequest): _176.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _176.QueryConsensusStateRequestAminoMsg): _176.QueryConsensusStateRequest;
                    toAminoMsg(message: _176.QueryConsensusStateRequest): _176.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryConsensusStateRequestProtoMsg): _176.QueryConsensusStateRequest;
                    toProto(message: _176.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryConsensusStateRequest): _176.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryConsensusStateResponse;
                    fromJSON(object: any): _176.QueryConsensusStateResponse;
                    toJSON(message: _176.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_176.QueryConsensusStateResponse>): _176.QueryConsensusStateResponse;
                    fromAmino(object: _176.QueryConsensusStateResponseAmino): _176.QueryConsensusStateResponse;
                    toAmino(message: _176.QueryConsensusStateResponse): _176.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _176.QueryConsensusStateResponseAminoMsg): _176.QueryConsensusStateResponse;
                    toAminoMsg(message: _176.QueryConsensusStateResponse): _176.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryConsensusStateResponseProtoMsg): _176.QueryConsensusStateResponse;
                    toProto(message: _176.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryConsensusStateResponse): _176.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _176.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryConsensusStatesRequest;
                    fromJSON(object: any): _176.QueryConsensusStatesRequest;
                    toJSON(message: _176.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_176.QueryConsensusStatesRequest>): _176.QueryConsensusStatesRequest;
                    fromAmino(object: _176.QueryConsensusStatesRequestAmino): _176.QueryConsensusStatesRequest;
                    toAmino(message: _176.QueryConsensusStatesRequest): _176.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _176.QueryConsensusStatesRequestAminoMsg): _176.QueryConsensusStatesRequest;
                    toAminoMsg(message: _176.QueryConsensusStatesRequest): _176.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryConsensusStatesRequestProtoMsg): _176.QueryConsensusStatesRequest;
                    toProto(message: _176.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryConsensusStatesRequest): _176.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryConsensusStatesResponse;
                    fromJSON(object: any): _176.QueryConsensusStatesResponse;
                    toJSON(message: _176.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_176.QueryConsensusStatesResponse>): _176.QueryConsensusStatesResponse;
                    fromAmino(object: _176.QueryConsensusStatesResponseAmino): _176.QueryConsensusStatesResponse;
                    toAmino(message: _176.QueryConsensusStatesResponse): _176.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _176.QueryConsensusStatesResponseAminoMsg): _176.QueryConsensusStatesResponse;
                    toAminoMsg(message: _176.QueryConsensusStatesResponse): _176.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryConsensusStatesResponseProtoMsg): _176.QueryConsensusStatesResponse;
                    toProto(message: _176.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryConsensusStatesResponse): _176.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _176.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryConsensusStateHeightsRequest;
                    fromJSON(object: any): _176.QueryConsensusStateHeightsRequest;
                    toJSON(message: _176.QueryConsensusStateHeightsRequest): unknown;
                    fromPartial(object: Partial<_176.QueryConsensusStateHeightsRequest>): _176.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _176.QueryConsensusStateHeightsRequestAmino): _176.QueryConsensusStateHeightsRequest;
                    toAmino(message: _176.QueryConsensusStateHeightsRequest): _176.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _176.QueryConsensusStateHeightsRequestAminoMsg): _176.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _176.QueryConsensusStateHeightsRequest): _176.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryConsensusStateHeightsRequestProtoMsg): _176.QueryConsensusStateHeightsRequest;
                    toProto(message: _176.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryConsensusStateHeightsRequest): _176.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryConsensusStateHeightsResponse;
                    fromJSON(object: any): _176.QueryConsensusStateHeightsResponse;
                    toJSON(message: _176.QueryConsensusStateHeightsResponse): unknown;
                    fromPartial(object: Partial<_176.QueryConsensusStateHeightsResponse>): _176.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _176.QueryConsensusStateHeightsResponseAmino): _176.QueryConsensusStateHeightsResponse;
                    toAmino(message: _176.QueryConsensusStateHeightsResponse): _176.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _176.QueryConsensusStateHeightsResponseAminoMsg): _176.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _176.QueryConsensusStateHeightsResponse): _176.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryConsensusStateHeightsResponseProtoMsg): _176.QueryConsensusStateHeightsResponse;
                    toProto(message: _176.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryConsensusStateHeightsResponse): _176.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _176.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryClientStatusRequest;
                    fromJSON(object: any): _176.QueryClientStatusRequest;
                    toJSON(message: _176.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_176.QueryClientStatusRequest>): _176.QueryClientStatusRequest;
                    fromAmino(object: _176.QueryClientStatusRequestAmino): _176.QueryClientStatusRequest;
                    toAmino(message: _176.QueryClientStatusRequest): _176.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _176.QueryClientStatusRequestAminoMsg): _176.QueryClientStatusRequest;
                    toAminoMsg(message: _176.QueryClientStatusRequest): _176.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryClientStatusRequestProtoMsg): _176.QueryClientStatusRequest;
                    toProto(message: _176.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryClientStatusRequest): _176.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryClientStatusResponse;
                    fromJSON(object: any): _176.QueryClientStatusResponse;
                    toJSON(message: _176.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_176.QueryClientStatusResponse>): _176.QueryClientStatusResponse;
                    fromAmino(object: _176.QueryClientStatusResponseAmino): _176.QueryClientStatusResponse;
                    toAmino(message: _176.QueryClientStatusResponse): _176.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _176.QueryClientStatusResponseAminoMsg): _176.QueryClientStatusResponse;
                    toAminoMsg(message: _176.QueryClientStatusResponse): _176.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryClientStatusResponseProtoMsg): _176.QueryClientStatusResponse;
                    toProto(message: _176.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryClientStatusResponse): _176.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _176.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryClientParamsRequest;
                    fromJSON(_: any): _176.QueryClientParamsRequest;
                    toJSON(_: _176.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_176.QueryClientParamsRequest>): _176.QueryClientParamsRequest;
                    fromAmino(_: _176.QueryClientParamsRequestAmino): _176.QueryClientParamsRequest;
                    toAmino(_: _176.QueryClientParamsRequest): _176.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _176.QueryClientParamsRequestAminoMsg): _176.QueryClientParamsRequest;
                    toAminoMsg(message: _176.QueryClientParamsRequest): _176.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryClientParamsRequestProtoMsg): _176.QueryClientParamsRequest;
                    toProto(message: _176.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryClientParamsRequest): _176.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryClientParamsResponse;
                    fromJSON(object: any): _176.QueryClientParamsResponse;
                    toJSON(message: _176.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_176.QueryClientParamsResponse>): _176.QueryClientParamsResponse;
                    fromAmino(object: _176.QueryClientParamsResponseAmino): _176.QueryClientParamsResponse;
                    toAmino(message: _176.QueryClientParamsResponse): _176.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _176.QueryClientParamsResponseAminoMsg): _176.QueryClientParamsResponse;
                    toAminoMsg(message: _176.QueryClientParamsResponse): _176.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryClientParamsResponseProtoMsg): _176.QueryClientParamsResponse;
                    toProto(message: _176.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryClientParamsResponse): _176.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _176.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _176.QueryUpgradedClientStateRequest;
                    toJSON(_: _176.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_176.QueryUpgradedClientStateRequest>): _176.QueryUpgradedClientStateRequest;
                    fromAmino(_: _176.QueryUpgradedClientStateRequestAmino): _176.QueryUpgradedClientStateRequest;
                    toAmino(_: _176.QueryUpgradedClientStateRequest): _176.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _176.QueryUpgradedClientStateRequestAminoMsg): _176.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _176.QueryUpgradedClientStateRequest): _176.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryUpgradedClientStateRequestProtoMsg): _176.QueryUpgradedClientStateRequest;
                    toProto(message: _176.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryUpgradedClientStateRequest): _176.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _176.QueryUpgradedClientStateResponse;
                    toJSON(message: _176.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_176.QueryUpgradedClientStateResponse>): _176.QueryUpgradedClientStateResponse;
                    fromAmino(object: _176.QueryUpgradedClientStateResponseAmino): _176.QueryUpgradedClientStateResponse;
                    toAmino(message: _176.QueryUpgradedClientStateResponse): _176.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _176.QueryUpgradedClientStateResponseAminoMsg): _176.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _176.QueryUpgradedClientStateResponse): _176.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryUpgradedClientStateResponseProtoMsg): _176.QueryUpgradedClientStateResponse;
                    toProto(message: _176.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryUpgradedClientStateResponse): _176.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _176.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _176.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _176.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_176.QueryUpgradedConsensusStateRequest>): _176.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _176.QueryUpgradedConsensusStateRequestAmino): _176.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _176.QueryUpgradedConsensusStateRequest): _176.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _176.QueryUpgradedConsensusStateRequestAminoMsg): _176.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _176.QueryUpgradedConsensusStateRequest): _176.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _176.QueryUpgradedConsensusStateRequestProtoMsg): _176.QueryUpgradedConsensusStateRequest;
                    toProto(message: _176.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _176.QueryUpgradedConsensusStateRequest): _176.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _176.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _176.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _176.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_176.QueryUpgradedConsensusStateResponse>): _176.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _176.QueryUpgradedConsensusStateResponseAmino): _176.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _176.QueryUpgradedConsensusStateResponse): _176.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _176.QueryUpgradedConsensusStateResponseAminoMsg): _176.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _176.QueryUpgradedConsensusStateResponse): _176.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _176.QueryUpgradedConsensusStateResponseProtoMsg): _176.QueryUpgradedConsensusStateResponse;
                    toProto(message: _176.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _176.QueryUpgradedConsensusStateResponse): _176.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _175.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.GenesisState;
                    fromJSON(object: any): _175.GenesisState;
                    toJSON(message: _175.GenesisState): unknown;
                    fromPartial(object: Partial<_175.GenesisState>): _175.GenesisState;
                    fromAmino(object: _175.GenesisStateAmino): _175.GenesisState;
                    toAmino(message: _175.GenesisState): _175.GenesisStateAmino;
                    fromAminoMsg(object: _175.GenesisStateAminoMsg): _175.GenesisState;
                    toAminoMsg(message: _175.GenesisState): _175.GenesisStateAminoMsg;
                    fromProtoMsg(message: _175.GenesisStateProtoMsg): _175.GenesisState;
                    toProto(message: _175.GenesisState): Uint8Array;
                    toProtoMsg(message: _175.GenesisState): _175.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _175.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.GenesisMetadata;
                    fromJSON(object: any): _175.GenesisMetadata;
                    toJSON(message: _175.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_175.GenesisMetadata>): _175.GenesisMetadata;
                    fromAmino(object: _175.GenesisMetadataAmino): _175.GenesisMetadata;
                    toAmino(message: _175.GenesisMetadata): _175.GenesisMetadataAmino;
                    fromAminoMsg(object: _175.GenesisMetadataAminoMsg): _175.GenesisMetadata;
                    toAminoMsg(message: _175.GenesisMetadata): _175.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _175.GenesisMetadataProtoMsg): _175.GenesisMetadata;
                    toProto(message: _175.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _175.GenesisMetadata): _175.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _175.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _175.IdentifiedGenesisMetadata;
                    toJSON(message: _175.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_175.IdentifiedGenesisMetadata>): _175.IdentifiedGenesisMetadata;
                    fromAmino(object: _175.IdentifiedGenesisMetadataAmino): _175.IdentifiedGenesisMetadata;
                    toAmino(message: _175.IdentifiedGenesisMetadata): _175.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _175.IdentifiedGenesisMetadataAminoMsg): _175.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _175.IdentifiedGenesisMetadata): _175.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _175.IdentifiedGenesisMetadataProtoMsg): _175.IdentifiedGenesisMetadata;
                    toProto(message: _175.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _175.IdentifiedGenesisMetadata): _175.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _174.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.IdentifiedClientState;
                    fromJSON(object: any): _174.IdentifiedClientState;
                    toJSON(message: _174.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_174.IdentifiedClientState>): _174.IdentifiedClientState;
                    fromAmino(object: _174.IdentifiedClientStateAmino): _174.IdentifiedClientState;
                    toAmino(message: _174.IdentifiedClientState): _174.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _174.IdentifiedClientStateAminoMsg): _174.IdentifiedClientState;
                    toAminoMsg(message: _174.IdentifiedClientState): _174.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _174.IdentifiedClientStateProtoMsg): _174.IdentifiedClientState;
                    toProto(message: _174.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _174.IdentifiedClientState): _174.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _174.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ConsensusStateWithHeight;
                    fromJSON(object: any): _174.ConsensusStateWithHeight;
                    toJSON(message: _174.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_174.ConsensusStateWithHeight>): _174.ConsensusStateWithHeight;
                    fromAmino(object: _174.ConsensusStateWithHeightAmino): _174.ConsensusStateWithHeight;
                    toAmino(message: _174.ConsensusStateWithHeight): _174.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _174.ConsensusStateWithHeightAminoMsg): _174.ConsensusStateWithHeight;
                    toAminoMsg(message: _174.ConsensusStateWithHeight): _174.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _174.ConsensusStateWithHeightProtoMsg): _174.ConsensusStateWithHeight;
                    toProto(message: _174.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _174.ConsensusStateWithHeight): _174.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _174.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ClientConsensusStates;
                    fromJSON(object: any): _174.ClientConsensusStates;
                    toJSON(message: _174.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_174.ClientConsensusStates>): _174.ClientConsensusStates;
                    fromAmino(object: _174.ClientConsensusStatesAmino): _174.ClientConsensusStates;
                    toAmino(message: _174.ClientConsensusStates): _174.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _174.ClientConsensusStatesAminoMsg): _174.ClientConsensusStates;
                    toAminoMsg(message: _174.ClientConsensusStates): _174.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _174.ClientConsensusStatesProtoMsg): _174.ClientConsensusStates;
                    toProto(message: _174.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _174.ClientConsensusStates): _174.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _174.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.ClientUpdateProposal;
                    fromJSON(object: any): _174.ClientUpdateProposal;
                    toJSON(message: _174.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_174.ClientUpdateProposal>): _174.ClientUpdateProposal;
                    fromAmino(object: _174.ClientUpdateProposalAmino): _174.ClientUpdateProposal;
                    toAmino(message: _174.ClientUpdateProposal): _174.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _174.ClientUpdateProposalAminoMsg): _174.ClientUpdateProposal;
                    toAminoMsg(message: _174.ClientUpdateProposal): _174.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _174.ClientUpdateProposalProtoMsg): _174.ClientUpdateProposal;
                    toProto(message: _174.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _174.ClientUpdateProposal): _174.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _174.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.UpgradeProposal;
                    fromJSON(object: any): _174.UpgradeProposal;
                    toJSON(message: _174.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_174.UpgradeProposal>): _174.UpgradeProposal;
                    fromAmino(object: _174.UpgradeProposalAmino): _174.UpgradeProposal;
                    toAmino(message: _174.UpgradeProposal): _174.UpgradeProposalAmino;
                    fromAminoMsg(object: _174.UpgradeProposalAminoMsg): _174.UpgradeProposal;
                    toAminoMsg(message: _174.UpgradeProposal): _174.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _174.UpgradeProposalProtoMsg): _174.UpgradeProposal;
                    toProto(message: _174.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _174.UpgradeProposal): _174.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _174.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Height;
                    fromJSON(object: any): _174.Height;
                    toJSON(message: _174.Height): unknown;
                    fromPartial(object: Partial<_174.Height>): _174.Height;
                    fromAmino(object: _174.HeightAmino): _174.Height;
                    toAmino(message: _174.Height): _174.HeightAmino;
                    fromAminoMsg(object: _174.HeightAminoMsg): _174.Height;
                    toAminoMsg(message: _174.Height): _174.HeightAminoMsg;
                    fromProtoMsg(message: _174.HeightProtoMsg): _174.Height;
                    toProto(message: _174.Height): Uint8Array;
                    toProtoMsg(message: _174.Height): _174.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _174.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Params;
                    fromJSON(object: any): _174.Params;
                    toJSON(message: _174.Params): unknown;
                    fromPartial(object: Partial<_174.Params>): _174.Params;
                    fromAmino(object: _174.ParamsAmino): _174.Params;
                    toAmino(message: _174.Params): _174.ParamsAmino;
                    fromAminoMsg(object: _174.ParamsAminoMsg): _174.Params;
                    toAminoMsg(message: _174.Params): _174.ParamsAminoMsg;
                    fromProtoMsg(message: _174.ParamsProtoMsg): _174.Params;
                    toProto(message: _174.Params): Uint8Array;
                    toProtoMsg(message: _174.Params): _174.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _178.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MerkleRoot;
                    fromJSON(object: any): _178.MerkleRoot;
                    toJSON(message: _178.MerkleRoot): unknown;
                    fromPartial(object: Partial<_178.MerkleRoot>): _178.MerkleRoot;
                    fromAmino(object: _178.MerkleRootAmino): _178.MerkleRoot;
                    toAmino(message: _178.MerkleRoot): _178.MerkleRootAmino;
                    fromAminoMsg(object: _178.MerkleRootAminoMsg): _178.MerkleRoot;
                    toAminoMsg(message: _178.MerkleRoot): _178.MerkleRootAminoMsg;
                    fromProtoMsg(message: _178.MerkleRootProtoMsg): _178.MerkleRoot;
                    toProto(message: _178.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _178.MerkleRoot): _178.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _178.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MerklePrefix;
                    fromJSON(object: any): _178.MerklePrefix;
                    toJSON(message: _178.MerklePrefix): unknown;
                    fromPartial(object: Partial<_178.MerklePrefix>): _178.MerklePrefix;
                    fromAmino(object: _178.MerklePrefixAmino): _178.MerklePrefix;
                    toAmino(message: _178.MerklePrefix): _178.MerklePrefixAmino;
                    fromAminoMsg(object: _178.MerklePrefixAminoMsg): _178.MerklePrefix;
                    toAminoMsg(message: _178.MerklePrefix): _178.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _178.MerklePrefixProtoMsg): _178.MerklePrefix;
                    toProto(message: _178.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _178.MerklePrefix): _178.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _178.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MerklePath;
                    fromJSON(object: any): _178.MerklePath;
                    toJSON(message: _178.MerklePath): unknown;
                    fromPartial(object: Partial<_178.MerklePath>): _178.MerklePath;
                    fromAmino(object: _178.MerklePathAmino): _178.MerklePath;
                    toAmino(message: _178.MerklePath): _178.MerklePathAmino;
                    fromAminoMsg(object: _178.MerklePathAminoMsg): _178.MerklePath;
                    toAminoMsg(message: _178.MerklePath): _178.MerklePathAminoMsg;
                    fromProtoMsg(message: _178.MerklePathProtoMsg): _178.MerklePath;
                    toProto(message: _178.MerklePath): Uint8Array;
                    toProtoMsg(message: _178.MerklePath): _178.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _178.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MerkleProof;
                    fromJSON(object: any): _178.MerkleProof;
                    toJSON(message: _178.MerkleProof): unknown;
                    fromPartial(object: Partial<_178.MerkleProof>): _178.MerkleProof;
                    fromAmino(object: _178.MerkleProofAmino): _178.MerkleProof;
                    toAmino(message: _178.MerkleProof): _178.MerkleProofAmino;
                    fromAminoMsg(object: _178.MerkleProofAminoMsg): _178.MerkleProof;
                    toAminoMsg(message: _178.MerkleProof): _178.MerkleProofAminoMsg;
                    fromProtoMsg(message: _178.MerkleProofProtoMsg): _178.MerkleProof;
                    toProto(message: _178.MerkleProof): Uint8Array;
                    toProtoMsg(message: _178.MerkleProof): _178.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _344.MsgClientImpl;
                QueryClientImpl: typeof _338.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _181.QueryConnectionRequest): Promise<_181.QueryConnectionResponse>;
                    connections(request?: _181.QueryConnectionsRequest): Promise<_181.QueryConnectionsResponse>;
                    clientConnections(request: _181.QueryClientConnectionsRequest): Promise<_181.QueryClientConnectionsResponse>;
                    connectionClientState(request: _181.QueryConnectionClientStateRequest): Promise<_181.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _181.QueryConnectionConsensusStateRequest): Promise<_181.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _181.QueryConnectionParamsRequest): Promise<_181.QueryConnectionParamsResponse>;
                };
                LCDQueryClient: typeof _331.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _182.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _182.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _182.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _182.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _182.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _182.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _182.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _182.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _182.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _182.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _182.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _182.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _182.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _182.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _182.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _182.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _182.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _182.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _182.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _182.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _182.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _182.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _182.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _182.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _182.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _182.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _182.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _182.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _182.MsgConnectionOpenInit) => _182.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _182.MsgConnectionOpenInitAmino) => _182.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _182.MsgConnectionOpenTry) => _182.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _182.MsgConnectionOpenTryAmino) => _182.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _182.MsgConnectionOpenAck) => _182.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _182.MsgConnectionOpenAckAmino) => _182.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _182.MsgConnectionOpenConfirm) => _182.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _182.MsgConnectionOpenConfirmAmino) => _182.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _182.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgConnectionOpenInit;
                    fromJSON(object: any): _182.MsgConnectionOpenInit;
                    toJSON(message: _182.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_182.MsgConnectionOpenInit>): _182.MsgConnectionOpenInit;
                    fromAmino(object: _182.MsgConnectionOpenInitAmino): _182.MsgConnectionOpenInit;
                    toAmino(message: _182.MsgConnectionOpenInit): _182.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _182.MsgConnectionOpenInitAminoMsg): _182.MsgConnectionOpenInit;
                    toAminoMsg(message: _182.MsgConnectionOpenInit): _182.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _182.MsgConnectionOpenInitProtoMsg): _182.MsgConnectionOpenInit;
                    toProto(message: _182.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _182.MsgConnectionOpenInit): _182.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _182.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _182.MsgConnectionOpenInitResponse;
                    toJSON(_: _182.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_182.MsgConnectionOpenInitResponse>): _182.MsgConnectionOpenInitResponse;
                    fromAmino(_: _182.MsgConnectionOpenInitResponseAmino): _182.MsgConnectionOpenInitResponse;
                    toAmino(_: _182.MsgConnectionOpenInitResponse): _182.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _182.MsgConnectionOpenInitResponseAminoMsg): _182.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _182.MsgConnectionOpenInitResponse): _182.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _182.MsgConnectionOpenInitResponseProtoMsg): _182.MsgConnectionOpenInitResponse;
                    toProto(message: _182.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _182.MsgConnectionOpenInitResponse): _182.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _182.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgConnectionOpenTry;
                    fromJSON(object: any): _182.MsgConnectionOpenTry;
                    toJSON(message: _182.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_182.MsgConnectionOpenTry>): _182.MsgConnectionOpenTry;
                    fromAmino(object: _182.MsgConnectionOpenTryAmino): _182.MsgConnectionOpenTry;
                    toAmino(message: _182.MsgConnectionOpenTry): _182.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _182.MsgConnectionOpenTryAminoMsg): _182.MsgConnectionOpenTry;
                    toAminoMsg(message: _182.MsgConnectionOpenTry): _182.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _182.MsgConnectionOpenTryProtoMsg): _182.MsgConnectionOpenTry;
                    toProto(message: _182.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _182.MsgConnectionOpenTry): _182.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _182.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _182.MsgConnectionOpenTryResponse;
                    toJSON(_: _182.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_182.MsgConnectionOpenTryResponse>): _182.MsgConnectionOpenTryResponse;
                    fromAmino(_: _182.MsgConnectionOpenTryResponseAmino): _182.MsgConnectionOpenTryResponse;
                    toAmino(_: _182.MsgConnectionOpenTryResponse): _182.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _182.MsgConnectionOpenTryResponseAminoMsg): _182.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _182.MsgConnectionOpenTryResponse): _182.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _182.MsgConnectionOpenTryResponseProtoMsg): _182.MsgConnectionOpenTryResponse;
                    toProto(message: _182.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _182.MsgConnectionOpenTryResponse): _182.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _182.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgConnectionOpenAck;
                    fromJSON(object: any): _182.MsgConnectionOpenAck;
                    toJSON(message: _182.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_182.MsgConnectionOpenAck>): _182.MsgConnectionOpenAck;
                    fromAmino(object: _182.MsgConnectionOpenAckAmino): _182.MsgConnectionOpenAck;
                    toAmino(message: _182.MsgConnectionOpenAck): _182.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _182.MsgConnectionOpenAckAminoMsg): _182.MsgConnectionOpenAck;
                    toAminoMsg(message: _182.MsgConnectionOpenAck): _182.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _182.MsgConnectionOpenAckProtoMsg): _182.MsgConnectionOpenAck;
                    toProto(message: _182.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _182.MsgConnectionOpenAck): _182.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _182.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _182.MsgConnectionOpenAckResponse;
                    toJSON(_: _182.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_182.MsgConnectionOpenAckResponse>): _182.MsgConnectionOpenAckResponse;
                    fromAmino(_: _182.MsgConnectionOpenAckResponseAmino): _182.MsgConnectionOpenAckResponse;
                    toAmino(_: _182.MsgConnectionOpenAckResponse): _182.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _182.MsgConnectionOpenAckResponseAminoMsg): _182.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _182.MsgConnectionOpenAckResponse): _182.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _182.MsgConnectionOpenAckResponseProtoMsg): _182.MsgConnectionOpenAckResponse;
                    toProto(message: _182.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _182.MsgConnectionOpenAckResponse): _182.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _182.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _182.MsgConnectionOpenConfirm;
                    toJSON(message: _182.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_182.MsgConnectionOpenConfirm>): _182.MsgConnectionOpenConfirm;
                    fromAmino(object: _182.MsgConnectionOpenConfirmAmino): _182.MsgConnectionOpenConfirm;
                    toAmino(message: _182.MsgConnectionOpenConfirm): _182.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _182.MsgConnectionOpenConfirmAminoMsg): _182.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _182.MsgConnectionOpenConfirm): _182.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _182.MsgConnectionOpenConfirmProtoMsg): _182.MsgConnectionOpenConfirm;
                    toProto(message: _182.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _182.MsgConnectionOpenConfirm): _182.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _182.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _182.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _182.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_182.MsgConnectionOpenConfirmResponse>): _182.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _182.MsgConnectionOpenConfirmResponseAmino): _182.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _182.MsgConnectionOpenConfirmResponse): _182.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _182.MsgConnectionOpenConfirmResponseAminoMsg): _182.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _182.MsgConnectionOpenConfirmResponse): _182.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _182.MsgConnectionOpenConfirmResponseProtoMsg): _182.MsgConnectionOpenConfirmResponse;
                    toProto(message: _182.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _182.MsgConnectionOpenConfirmResponse): _182.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _181.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionRequest;
                    fromJSON(object: any): _181.QueryConnectionRequest;
                    toJSON(message: _181.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionRequest>): _181.QueryConnectionRequest;
                    fromAmino(object: _181.QueryConnectionRequestAmino): _181.QueryConnectionRequest;
                    toAmino(message: _181.QueryConnectionRequest): _181.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _181.QueryConnectionRequestAminoMsg): _181.QueryConnectionRequest;
                    toAminoMsg(message: _181.QueryConnectionRequest): _181.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _181.QueryConnectionRequestProtoMsg): _181.QueryConnectionRequest;
                    toProto(message: _181.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _181.QueryConnectionRequest): _181.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _181.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionResponse;
                    fromJSON(object: any): _181.QueryConnectionResponse;
                    toJSON(message: _181.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionResponse>): _181.QueryConnectionResponse;
                    fromAmino(object: _181.QueryConnectionResponseAmino): _181.QueryConnectionResponse;
                    toAmino(message: _181.QueryConnectionResponse): _181.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _181.QueryConnectionResponseAminoMsg): _181.QueryConnectionResponse;
                    toAminoMsg(message: _181.QueryConnectionResponse): _181.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _181.QueryConnectionResponseProtoMsg): _181.QueryConnectionResponse;
                    toProto(message: _181.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _181.QueryConnectionResponse): _181.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _181.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionsRequest;
                    fromJSON(object: any): _181.QueryConnectionsRequest;
                    toJSON(message: _181.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionsRequest>): _181.QueryConnectionsRequest;
                    fromAmino(object: _181.QueryConnectionsRequestAmino): _181.QueryConnectionsRequest;
                    toAmino(message: _181.QueryConnectionsRequest): _181.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _181.QueryConnectionsRequestAminoMsg): _181.QueryConnectionsRequest;
                    toAminoMsg(message: _181.QueryConnectionsRequest): _181.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _181.QueryConnectionsRequestProtoMsg): _181.QueryConnectionsRequest;
                    toProto(message: _181.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _181.QueryConnectionsRequest): _181.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _181.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionsResponse;
                    fromJSON(object: any): _181.QueryConnectionsResponse;
                    toJSON(message: _181.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionsResponse>): _181.QueryConnectionsResponse;
                    fromAmino(object: _181.QueryConnectionsResponseAmino): _181.QueryConnectionsResponse;
                    toAmino(message: _181.QueryConnectionsResponse): _181.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _181.QueryConnectionsResponseAminoMsg): _181.QueryConnectionsResponse;
                    toAminoMsg(message: _181.QueryConnectionsResponse): _181.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _181.QueryConnectionsResponseProtoMsg): _181.QueryConnectionsResponse;
                    toProto(message: _181.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _181.QueryConnectionsResponse): _181.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _181.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryClientConnectionsRequest;
                    fromJSON(object: any): _181.QueryClientConnectionsRequest;
                    toJSON(message: _181.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_181.QueryClientConnectionsRequest>): _181.QueryClientConnectionsRequest;
                    fromAmino(object: _181.QueryClientConnectionsRequestAmino): _181.QueryClientConnectionsRequest;
                    toAmino(message: _181.QueryClientConnectionsRequest): _181.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _181.QueryClientConnectionsRequestAminoMsg): _181.QueryClientConnectionsRequest;
                    toAminoMsg(message: _181.QueryClientConnectionsRequest): _181.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _181.QueryClientConnectionsRequestProtoMsg): _181.QueryClientConnectionsRequest;
                    toProto(message: _181.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _181.QueryClientConnectionsRequest): _181.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _181.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryClientConnectionsResponse;
                    fromJSON(object: any): _181.QueryClientConnectionsResponse;
                    toJSON(message: _181.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_181.QueryClientConnectionsResponse>): _181.QueryClientConnectionsResponse;
                    fromAmino(object: _181.QueryClientConnectionsResponseAmino): _181.QueryClientConnectionsResponse;
                    toAmino(message: _181.QueryClientConnectionsResponse): _181.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _181.QueryClientConnectionsResponseAminoMsg): _181.QueryClientConnectionsResponse;
                    toAminoMsg(message: _181.QueryClientConnectionsResponse): _181.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _181.QueryClientConnectionsResponseProtoMsg): _181.QueryClientConnectionsResponse;
                    toProto(message: _181.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _181.QueryClientConnectionsResponse): _181.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _181.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _181.QueryConnectionClientStateRequest;
                    toJSON(message: _181.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionClientStateRequest>): _181.QueryConnectionClientStateRequest;
                    fromAmino(object: _181.QueryConnectionClientStateRequestAmino): _181.QueryConnectionClientStateRequest;
                    toAmino(message: _181.QueryConnectionClientStateRequest): _181.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _181.QueryConnectionClientStateRequestAminoMsg): _181.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _181.QueryConnectionClientStateRequest): _181.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _181.QueryConnectionClientStateRequestProtoMsg): _181.QueryConnectionClientStateRequest;
                    toProto(message: _181.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _181.QueryConnectionClientStateRequest): _181.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _181.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _181.QueryConnectionClientStateResponse;
                    toJSON(message: _181.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionClientStateResponse>): _181.QueryConnectionClientStateResponse;
                    fromAmino(object: _181.QueryConnectionClientStateResponseAmino): _181.QueryConnectionClientStateResponse;
                    toAmino(message: _181.QueryConnectionClientStateResponse): _181.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _181.QueryConnectionClientStateResponseAminoMsg): _181.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _181.QueryConnectionClientStateResponse): _181.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _181.QueryConnectionClientStateResponseProtoMsg): _181.QueryConnectionClientStateResponse;
                    toProto(message: _181.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _181.QueryConnectionClientStateResponse): _181.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _181.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _181.QueryConnectionConsensusStateRequest;
                    toJSON(message: _181.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionConsensusStateRequest>): _181.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _181.QueryConnectionConsensusStateRequestAmino): _181.QueryConnectionConsensusStateRequest;
                    toAmino(message: _181.QueryConnectionConsensusStateRequest): _181.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _181.QueryConnectionConsensusStateRequestAminoMsg): _181.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _181.QueryConnectionConsensusStateRequest): _181.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _181.QueryConnectionConsensusStateRequestProtoMsg): _181.QueryConnectionConsensusStateRequest;
                    toProto(message: _181.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _181.QueryConnectionConsensusStateRequest): _181.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _181.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _181.QueryConnectionConsensusStateResponse;
                    toJSON(message: _181.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionConsensusStateResponse>): _181.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _181.QueryConnectionConsensusStateResponseAmino): _181.QueryConnectionConsensusStateResponse;
                    toAmino(message: _181.QueryConnectionConsensusStateResponse): _181.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _181.QueryConnectionConsensusStateResponseAminoMsg): _181.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _181.QueryConnectionConsensusStateResponse): _181.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _181.QueryConnectionConsensusStateResponseProtoMsg): _181.QueryConnectionConsensusStateResponse;
                    toProto(message: _181.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _181.QueryConnectionConsensusStateResponse): _181.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _181.QueryConnectionParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionParamsRequest;
                    fromJSON(_: any): _181.QueryConnectionParamsRequest;
                    toJSON(_: _181.QueryConnectionParamsRequest): unknown;
                    fromPartial(_: Partial<_181.QueryConnectionParamsRequest>): _181.QueryConnectionParamsRequest;
                    fromAmino(_: _181.QueryConnectionParamsRequestAmino): _181.QueryConnectionParamsRequest;
                    toAmino(_: _181.QueryConnectionParamsRequest): _181.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _181.QueryConnectionParamsRequestAminoMsg): _181.QueryConnectionParamsRequest;
                    toAminoMsg(message: _181.QueryConnectionParamsRequest): _181.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _181.QueryConnectionParamsRequestProtoMsg): _181.QueryConnectionParamsRequest;
                    toProto(message: _181.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _181.QueryConnectionParamsRequest): _181.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _181.QueryConnectionParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.QueryConnectionParamsResponse;
                    fromJSON(object: any): _181.QueryConnectionParamsResponse;
                    toJSON(message: _181.QueryConnectionParamsResponse): unknown;
                    fromPartial(object: Partial<_181.QueryConnectionParamsResponse>): _181.QueryConnectionParamsResponse;
                    fromAmino(object: _181.QueryConnectionParamsResponseAmino): _181.QueryConnectionParamsResponse;
                    toAmino(message: _181.QueryConnectionParamsResponse): _181.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _181.QueryConnectionParamsResponseAminoMsg): _181.QueryConnectionParamsResponse;
                    toAminoMsg(message: _181.QueryConnectionParamsResponse): _181.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _181.QueryConnectionParamsResponseProtoMsg): _181.QueryConnectionParamsResponse;
                    toProto(message: _181.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _181.QueryConnectionParamsResponse): _181.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _180.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.GenesisState;
                    fromJSON(object: any): _180.GenesisState;
                    toJSON(message: _180.GenesisState): unknown;
                    fromPartial(object: Partial<_180.GenesisState>): _180.GenesisState;
                    fromAmino(object: _180.GenesisStateAmino): _180.GenesisState;
                    toAmino(message: _180.GenesisState): _180.GenesisStateAmino;
                    fromAminoMsg(object: _180.GenesisStateAminoMsg): _180.GenesisState;
                    toAminoMsg(message: _180.GenesisState): _180.GenesisStateAminoMsg;
                    fromProtoMsg(message: _180.GenesisStateProtoMsg): _180.GenesisState;
                    toProto(message: _180.GenesisState): Uint8Array;
                    toProtoMsg(message: _180.GenesisState): _180.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _179.State;
                stateToJSON(object: _179.State): string;
                State: typeof _179.State;
                StateSDKType: typeof _179.State;
                StateAmino: typeof _179.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _179.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ConnectionEnd;
                    fromJSON(object: any): _179.ConnectionEnd;
                    toJSON(message: _179.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_179.ConnectionEnd>): _179.ConnectionEnd;
                    fromAmino(object: _179.ConnectionEndAmino): _179.ConnectionEnd;
                    toAmino(message: _179.ConnectionEnd): _179.ConnectionEndAmino;
                    fromAminoMsg(object: _179.ConnectionEndAminoMsg): _179.ConnectionEnd;
                    toAminoMsg(message: _179.ConnectionEnd): _179.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _179.ConnectionEndProtoMsg): _179.ConnectionEnd;
                    toProto(message: _179.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _179.ConnectionEnd): _179.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _179.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.IdentifiedConnection;
                    fromJSON(object: any): _179.IdentifiedConnection;
                    toJSON(message: _179.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_179.IdentifiedConnection>): _179.IdentifiedConnection;
                    fromAmino(object: _179.IdentifiedConnectionAmino): _179.IdentifiedConnection;
                    toAmino(message: _179.IdentifiedConnection): _179.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _179.IdentifiedConnectionAminoMsg): _179.IdentifiedConnection;
                    toAminoMsg(message: _179.IdentifiedConnection): _179.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _179.IdentifiedConnectionProtoMsg): _179.IdentifiedConnection;
                    toProto(message: _179.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _179.IdentifiedConnection): _179.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _179.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Counterparty;
                    fromJSON(object: any): _179.Counterparty;
                    toJSON(message: _179.Counterparty): unknown;
                    fromPartial(object: Partial<_179.Counterparty>): _179.Counterparty;
                    fromAmino(object: _179.CounterpartyAmino): _179.Counterparty;
                    toAmino(message: _179.Counterparty): _179.CounterpartyAmino;
                    fromAminoMsg(object: _179.CounterpartyAminoMsg): _179.Counterparty;
                    toAminoMsg(message: _179.Counterparty): _179.CounterpartyAminoMsg;
                    fromProtoMsg(message: _179.CounterpartyProtoMsg): _179.Counterparty;
                    toProto(message: _179.Counterparty): Uint8Array;
                    toProtoMsg(message: _179.Counterparty): _179.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _179.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ClientPaths;
                    fromJSON(object: any): _179.ClientPaths;
                    toJSON(message: _179.ClientPaths): unknown;
                    fromPartial(object: Partial<_179.ClientPaths>): _179.ClientPaths;
                    fromAmino(object: _179.ClientPathsAmino): _179.ClientPaths;
                    toAmino(message: _179.ClientPaths): _179.ClientPathsAmino;
                    fromAminoMsg(object: _179.ClientPathsAminoMsg): _179.ClientPaths;
                    toAminoMsg(message: _179.ClientPaths): _179.ClientPathsAminoMsg;
                    fromProtoMsg(message: _179.ClientPathsProtoMsg): _179.ClientPaths;
                    toProto(message: _179.ClientPaths): Uint8Array;
                    toProtoMsg(message: _179.ClientPaths): _179.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _179.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.ConnectionPaths;
                    fromJSON(object: any): _179.ConnectionPaths;
                    toJSON(message: _179.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_179.ConnectionPaths>): _179.ConnectionPaths;
                    fromAmino(object: _179.ConnectionPathsAmino): _179.ConnectionPaths;
                    toAmino(message: _179.ConnectionPaths): _179.ConnectionPathsAmino;
                    fromAminoMsg(object: _179.ConnectionPathsAminoMsg): _179.ConnectionPaths;
                    toAminoMsg(message: _179.ConnectionPaths): _179.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _179.ConnectionPathsProtoMsg): _179.ConnectionPaths;
                    toProto(message: _179.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _179.ConnectionPaths): _179.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _179.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Version;
                    fromJSON(object: any): _179.Version;
                    toJSON(message: _179.Version): unknown;
                    fromPartial(object: Partial<_179.Version>): _179.Version;
                    fromAmino(object: _179.VersionAmino): _179.Version;
                    toAmino(message: _179.Version): _179.VersionAmino;
                    fromAminoMsg(object: _179.VersionAminoMsg): _179.Version;
                    toAminoMsg(message: _179.Version): _179.VersionAminoMsg;
                    fromProtoMsg(message: _179.VersionProtoMsg): _179.Version;
                    toProto(message: _179.Version): Uint8Array;
                    toProtoMsg(message: _179.Version): _179.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _179.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.Params;
                    fromJSON(object: any): _179.Params;
                    toJSON(message: _179.Params): unknown;
                    fromPartial(object: Partial<_179.Params>): _179.Params;
                    fromAmino(object: _179.ParamsAmino): _179.Params;
                    toAmino(message: _179.Params): _179.ParamsAmino;
                    fromAminoMsg(object: _179.ParamsAminoMsg): _179.Params;
                    toAminoMsg(message: _179.Params): _179.ParamsAminoMsg;
                    fromProtoMsg(message: _179.ParamsProtoMsg): _179.Params;
                    toProto(message: _179.Params): Uint8Array;
                    toProtoMsg(message: _179.Params): _179.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _183.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.GenesisState;
                    fromJSON(object: any): _183.GenesisState;
                    toJSON(message: _183.GenesisState): unknown;
                    fromPartial(object: Partial<_183.GenesisState>): _183.GenesisState;
                    fromAmino(object: _183.GenesisStateAmino): _183.GenesisState;
                    toAmino(message: _183.GenesisState): _183.GenesisStateAmino;
                    fromAminoMsg(object: _183.GenesisStateAminoMsg): _183.GenesisState;
                    toAminoMsg(message: _183.GenesisState): _183.GenesisStateAminoMsg;
                    fromProtoMsg(message: _183.GenesisStateProtoMsg): _183.GenesisState;
                    toProto(message: _183.GenesisState): Uint8Array;
                    toProtoMsg(message: _183.GenesisState): _183.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _184.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.ClientState;
                    fromJSON(object: any): _184.ClientState;
                    toJSON(message: _184.ClientState): unknown;
                    fromPartial(object: Partial<_184.ClientState>): _184.ClientState;
                    fromAmino(object: _184.ClientStateAmino): _184.ClientState;
                    toAmino(message: _184.ClientState): _184.ClientStateAmino;
                    fromAminoMsg(object: _184.ClientStateAminoMsg): _184.ClientState;
                    toAminoMsg(message: _184.ClientState): _184.ClientStateAminoMsg;
                    fromProtoMsg(message: _184.ClientStateProtoMsg): _184.ClientState;
                    toProto(message: _184.ClientState): Uint8Array;
                    toProtoMsg(message: _184.ClientState): _184.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _185.DataType;
                dataTypeToJSON(object: _185.DataType): string;
                DataType: typeof _185.DataType;
                DataTypeSDKType: typeof _185.DataType;
                DataTypeAmino: typeof _185.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _185.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ClientState;
                    fromJSON(object: any): _185.ClientState;
                    toJSON(message: _185.ClientState): unknown;
                    fromPartial(object: Partial<_185.ClientState>): _185.ClientState;
                    fromAmino(object: _185.ClientStateAmino): _185.ClientState;
                    toAmino(message: _185.ClientState): _185.ClientStateAmino;
                    fromAminoMsg(object: _185.ClientStateAminoMsg): _185.ClientState;
                    toAminoMsg(message: _185.ClientState): _185.ClientStateAminoMsg;
                    fromProtoMsg(message: _185.ClientStateProtoMsg): _185.ClientState;
                    toProto(message: _185.ClientState): Uint8Array;
                    toProtoMsg(message: _185.ClientState): _185.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _185.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ConsensusState;
                    fromJSON(object: any): _185.ConsensusState;
                    toJSON(message: _185.ConsensusState): unknown;
                    fromPartial(object: Partial<_185.ConsensusState>): _185.ConsensusState;
                    fromAmino(object: _185.ConsensusStateAmino): _185.ConsensusState;
                    toAmino(message: _185.ConsensusState): _185.ConsensusStateAmino;
                    fromAminoMsg(object: _185.ConsensusStateAminoMsg): _185.ConsensusState;
                    toAminoMsg(message: _185.ConsensusState): _185.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _185.ConsensusStateProtoMsg): _185.ConsensusState;
                    toProto(message: _185.ConsensusState): Uint8Array;
                    toProtoMsg(message: _185.ConsensusState): _185.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _185.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Header;
                    fromJSON(object: any): _185.Header;
                    toJSON(message: _185.Header): unknown;
                    fromPartial(object: Partial<_185.Header>): _185.Header;
                    fromAmino(object: _185.HeaderAmino): _185.Header;
                    toAmino(message: _185.Header): _185.HeaderAmino;
                    fromAminoMsg(object: _185.HeaderAminoMsg): _185.Header;
                    toAminoMsg(message: _185.Header): _185.HeaderAminoMsg;
                    fromProtoMsg(message: _185.HeaderProtoMsg): _185.Header;
                    toProto(message: _185.Header): Uint8Array;
                    toProtoMsg(message: _185.Header): _185.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _185.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Misbehaviour;
                    fromJSON(object: any): _185.Misbehaviour;
                    toJSON(message: _185.Misbehaviour): unknown;
                    fromPartial(object: Partial<_185.Misbehaviour>): _185.Misbehaviour;
                    fromAmino(object: _185.MisbehaviourAmino): _185.Misbehaviour;
                    toAmino(message: _185.Misbehaviour): _185.MisbehaviourAmino;
                    fromAminoMsg(object: _185.MisbehaviourAminoMsg): _185.Misbehaviour;
                    toAminoMsg(message: _185.Misbehaviour): _185.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _185.MisbehaviourProtoMsg): _185.Misbehaviour;
                    toProto(message: _185.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _185.Misbehaviour): _185.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _185.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.SignatureAndData;
                    fromJSON(object: any): _185.SignatureAndData;
                    toJSON(message: _185.SignatureAndData): unknown;
                    fromPartial(object: Partial<_185.SignatureAndData>): _185.SignatureAndData;
                    fromAmino(object: _185.SignatureAndDataAmino): _185.SignatureAndData;
                    toAmino(message: _185.SignatureAndData): _185.SignatureAndDataAmino;
                    fromAminoMsg(object: _185.SignatureAndDataAminoMsg): _185.SignatureAndData;
                    toAminoMsg(message: _185.SignatureAndData): _185.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _185.SignatureAndDataProtoMsg): _185.SignatureAndData;
                    toProto(message: _185.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _185.SignatureAndData): _185.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _185.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.TimestampedSignatureData;
                    fromJSON(object: any): _185.TimestampedSignatureData;
                    toJSON(message: _185.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_185.TimestampedSignatureData>): _185.TimestampedSignatureData;
                    fromAmino(object: _185.TimestampedSignatureDataAmino): _185.TimestampedSignatureData;
                    toAmino(message: _185.TimestampedSignatureData): _185.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _185.TimestampedSignatureDataAminoMsg): _185.TimestampedSignatureData;
                    toAminoMsg(message: _185.TimestampedSignatureData): _185.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _185.TimestampedSignatureDataProtoMsg): _185.TimestampedSignatureData;
                    toProto(message: _185.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _185.TimestampedSignatureData): _185.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _185.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.SignBytes;
                    fromJSON(object: any): _185.SignBytes;
                    toJSON(message: _185.SignBytes): unknown;
                    fromPartial(object: Partial<_185.SignBytes>): _185.SignBytes;
                    fromAmino(object: _185.SignBytesAmino): _185.SignBytes;
                    toAmino(message: _185.SignBytes): _185.SignBytesAmino;
                    fromAminoMsg(object: _185.SignBytesAminoMsg): _185.SignBytes;
                    toAminoMsg(message: _185.SignBytes): _185.SignBytesAminoMsg;
                    fromProtoMsg(message: _185.SignBytesProtoMsg): _185.SignBytes;
                    toProto(message: _185.SignBytes): Uint8Array;
                    toProtoMsg(message: _185.SignBytes): _185.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _185.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.HeaderData;
                    fromJSON(object: any): _185.HeaderData;
                    toJSON(message: _185.HeaderData): unknown;
                    fromPartial(object: Partial<_185.HeaderData>): _185.HeaderData;
                    fromAmino(object: _185.HeaderDataAmino): _185.HeaderData;
                    toAmino(message: _185.HeaderData): _185.HeaderDataAmino;
                    fromAminoMsg(object: _185.HeaderDataAminoMsg): _185.HeaderData;
                    toAminoMsg(message: _185.HeaderData): _185.HeaderDataAminoMsg;
                    fromProtoMsg(message: _185.HeaderDataProtoMsg): _185.HeaderData;
                    toProto(message: _185.HeaderData): Uint8Array;
                    toProtoMsg(message: _185.HeaderData): _185.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _185.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ClientStateData;
                    fromJSON(object: any): _185.ClientStateData;
                    toJSON(message: _185.ClientStateData): unknown;
                    fromPartial(object: Partial<_185.ClientStateData>): _185.ClientStateData;
                    fromAmino(object: _185.ClientStateDataAmino): _185.ClientStateData;
                    toAmino(message: _185.ClientStateData): _185.ClientStateDataAmino;
                    fromAminoMsg(object: _185.ClientStateDataAminoMsg): _185.ClientStateData;
                    toAminoMsg(message: _185.ClientStateData): _185.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _185.ClientStateDataProtoMsg): _185.ClientStateData;
                    toProto(message: _185.ClientStateData): Uint8Array;
                    toProtoMsg(message: _185.ClientStateData): _185.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _185.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ConsensusStateData;
                    fromJSON(object: any): _185.ConsensusStateData;
                    toJSON(message: _185.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_185.ConsensusStateData>): _185.ConsensusStateData;
                    fromAmino(object: _185.ConsensusStateDataAmino): _185.ConsensusStateData;
                    toAmino(message: _185.ConsensusStateData): _185.ConsensusStateDataAmino;
                    fromAminoMsg(object: _185.ConsensusStateDataAminoMsg): _185.ConsensusStateData;
                    toAminoMsg(message: _185.ConsensusStateData): _185.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _185.ConsensusStateDataProtoMsg): _185.ConsensusStateData;
                    toProto(message: _185.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _185.ConsensusStateData): _185.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _185.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ConnectionStateData;
                    fromJSON(object: any): _185.ConnectionStateData;
                    toJSON(message: _185.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_185.ConnectionStateData>): _185.ConnectionStateData;
                    fromAmino(object: _185.ConnectionStateDataAmino): _185.ConnectionStateData;
                    toAmino(message: _185.ConnectionStateData): _185.ConnectionStateDataAmino;
                    fromAminoMsg(object: _185.ConnectionStateDataAminoMsg): _185.ConnectionStateData;
                    toAminoMsg(message: _185.ConnectionStateData): _185.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _185.ConnectionStateDataProtoMsg): _185.ConnectionStateData;
                    toProto(message: _185.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _185.ConnectionStateData): _185.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _185.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ChannelStateData;
                    fromJSON(object: any): _185.ChannelStateData;
                    toJSON(message: _185.ChannelStateData): unknown;
                    fromPartial(object: Partial<_185.ChannelStateData>): _185.ChannelStateData;
                    fromAmino(object: _185.ChannelStateDataAmino): _185.ChannelStateData;
                    toAmino(message: _185.ChannelStateData): _185.ChannelStateDataAmino;
                    fromAminoMsg(object: _185.ChannelStateDataAminoMsg): _185.ChannelStateData;
                    toAminoMsg(message: _185.ChannelStateData): _185.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _185.ChannelStateDataProtoMsg): _185.ChannelStateData;
                    toProto(message: _185.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _185.ChannelStateData): _185.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _185.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.PacketCommitmentData;
                    fromJSON(object: any): _185.PacketCommitmentData;
                    toJSON(message: _185.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_185.PacketCommitmentData>): _185.PacketCommitmentData;
                    fromAmino(object: _185.PacketCommitmentDataAmino): _185.PacketCommitmentData;
                    toAmino(message: _185.PacketCommitmentData): _185.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _185.PacketCommitmentDataAminoMsg): _185.PacketCommitmentData;
                    toAminoMsg(message: _185.PacketCommitmentData): _185.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _185.PacketCommitmentDataProtoMsg): _185.PacketCommitmentData;
                    toProto(message: _185.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _185.PacketCommitmentData): _185.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _185.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.PacketAcknowledgementData;
                    fromJSON(object: any): _185.PacketAcknowledgementData;
                    toJSON(message: _185.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_185.PacketAcknowledgementData>): _185.PacketAcknowledgementData;
                    fromAmino(object: _185.PacketAcknowledgementDataAmino): _185.PacketAcknowledgementData;
                    toAmino(message: _185.PacketAcknowledgementData): _185.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _185.PacketAcknowledgementDataAminoMsg): _185.PacketAcknowledgementData;
                    toAminoMsg(message: _185.PacketAcknowledgementData): _185.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _185.PacketAcknowledgementDataProtoMsg): _185.PacketAcknowledgementData;
                    toProto(message: _185.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _185.PacketAcknowledgementData): _185.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _185.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.PacketReceiptAbsenceData;
                    fromJSON(object: any): _185.PacketReceiptAbsenceData;
                    toJSON(message: _185.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_185.PacketReceiptAbsenceData>): _185.PacketReceiptAbsenceData;
                    fromAmino(object: _185.PacketReceiptAbsenceDataAmino): _185.PacketReceiptAbsenceData;
                    toAmino(message: _185.PacketReceiptAbsenceData): _185.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _185.PacketReceiptAbsenceDataAminoMsg): _185.PacketReceiptAbsenceData;
                    toAminoMsg(message: _185.PacketReceiptAbsenceData): _185.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _185.PacketReceiptAbsenceDataProtoMsg): _185.PacketReceiptAbsenceData;
                    toProto(message: _185.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _185.PacketReceiptAbsenceData): _185.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _185.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.NextSequenceRecvData;
                    fromJSON(object: any): _185.NextSequenceRecvData;
                    toJSON(message: _185.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_185.NextSequenceRecvData>): _185.NextSequenceRecvData;
                    fromAmino(object: _185.NextSequenceRecvDataAmino): _185.NextSequenceRecvData;
                    toAmino(message: _185.NextSequenceRecvData): _185.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _185.NextSequenceRecvDataAminoMsg): _185.NextSequenceRecvData;
                    toAminoMsg(message: _185.NextSequenceRecvData): _185.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _185.NextSequenceRecvDataProtoMsg): _185.NextSequenceRecvData;
                    toProto(message: _185.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _185.NextSequenceRecvData): _185.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _186.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.ClientState;
                    fromJSON(object: any): _186.ClientState;
                    toJSON(message: _186.ClientState): unknown;
                    fromPartial(object: Partial<_186.ClientState>): _186.ClientState;
                    fromAmino(object: _186.ClientStateAmino): _186.ClientState;
                    toAmino(message: _186.ClientState): _186.ClientStateAmino;
                    fromAminoMsg(object: _186.ClientStateAminoMsg): _186.ClientState;
                    toAminoMsg(message: _186.ClientState): _186.ClientStateAminoMsg;
                    fromProtoMsg(message: _186.ClientStateProtoMsg): _186.ClientState;
                    toProto(message: _186.ClientState): Uint8Array;
                    toProtoMsg(message: _186.ClientState): _186.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _186.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.ConsensusState;
                    fromJSON(object: any): _186.ConsensusState;
                    toJSON(message: _186.ConsensusState): unknown;
                    fromPartial(object: Partial<_186.ConsensusState>): _186.ConsensusState;
                    fromAmino(object: _186.ConsensusStateAmino): _186.ConsensusState;
                    toAmino(message: _186.ConsensusState): _186.ConsensusStateAmino;
                    fromAminoMsg(object: _186.ConsensusStateAminoMsg): _186.ConsensusState;
                    toAminoMsg(message: _186.ConsensusState): _186.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _186.ConsensusStateProtoMsg): _186.ConsensusState;
                    toProto(message: _186.ConsensusState): Uint8Array;
                    toProtoMsg(message: _186.ConsensusState): _186.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _186.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.Header;
                    fromJSON(object: any): _186.Header;
                    toJSON(message: _186.Header): unknown;
                    fromPartial(object: Partial<_186.Header>): _186.Header;
                    fromAmino(object: _186.HeaderAmino): _186.Header;
                    toAmino(message: _186.Header): _186.HeaderAmino;
                    fromAminoMsg(object: _186.HeaderAminoMsg): _186.Header;
                    toAminoMsg(message: _186.Header): _186.HeaderAminoMsg;
                    fromProtoMsg(message: _186.HeaderProtoMsg): _186.Header;
                    toProto(message: _186.Header): Uint8Array;
                    toProtoMsg(message: _186.Header): _186.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _186.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.Misbehaviour;
                    fromJSON(object: any): _186.Misbehaviour;
                    toJSON(message: _186.Misbehaviour): unknown;
                    fromPartial(object: Partial<_186.Misbehaviour>): _186.Misbehaviour;
                    fromAmino(object: _186.MisbehaviourAmino): _186.Misbehaviour;
                    toAmino(message: _186.Misbehaviour): _186.MisbehaviourAmino;
                    fromAminoMsg(object: _186.MisbehaviourAminoMsg): _186.Misbehaviour;
                    toAminoMsg(message: _186.Misbehaviour): _186.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _186.MisbehaviourProtoMsg): _186.Misbehaviour;
                    toProto(message: _186.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _186.Misbehaviour): _186.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _186.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.SignatureAndData;
                    fromJSON(object: any): _186.SignatureAndData;
                    toJSON(message: _186.SignatureAndData): unknown;
                    fromPartial(object: Partial<_186.SignatureAndData>): _186.SignatureAndData;
                    fromAmino(object: _186.SignatureAndDataAmino): _186.SignatureAndData;
                    toAmino(message: _186.SignatureAndData): _186.SignatureAndDataAmino;
                    fromAminoMsg(object: _186.SignatureAndDataAminoMsg): _186.SignatureAndData;
                    toAminoMsg(message: _186.SignatureAndData): _186.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _186.SignatureAndDataProtoMsg): _186.SignatureAndData;
                    toProto(message: _186.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _186.SignatureAndData): _186.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _186.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.TimestampedSignatureData;
                    fromJSON(object: any): _186.TimestampedSignatureData;
                    toJSON(message: _186.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_186.TimestampedSignatureData>): _186.TimestampedSignatureData;
                    fromAmino(object: _186.TimestampedSignatureDataAmino): _186.TimestampedSignatureData;
                    toAmino(message: _186.TimestampedSignatureData): _186.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _186.TimestampedSignatureDataAminoMsg): _186.TimestampedSignatureData;
                    toAminoMsg(message: _186.TimestampedSignatureData): _186.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _186.TimestampedSignatureDataProtoMsg): _186.TimestampedSignatureData;
                    toProto(message: _186.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _186.TimestampedSignatureData): _186.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _186.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.SignBytes;
                    fromJSON(object: any): _186.SignBytes;
                    toJSON(message: _186.SignBytes): unknown;
                    fromPartial(object: Partial<_186.SignBytes>): _186.SignBytes;
                    fromAmino(object: _186.SignBytesAmino): _186.SignBytes;
                    toAmino(message: _186.SignBytes): _186.SignBytesAmino;
                    fromAminoMsg(object: _186.SignBytesAminoMsg): _186.SignBytes;
                    toAminoMsg(message: _186.SignBytes): _186.SignBytesAminoMsg;
                    fromProtoMsg(message: _186.SignBytesProtoMsg): _186.SignBytes;
                    toProto(message: _186.SignBytes): Uint8Array;
                    toProtoMsg(message: _186.SignBytes): _186.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _186.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.HeaderData;
                    fromJSON(object: any): _186.HeaderData;
                    toJSON(message: _186.HeaderData): unknown;
                    fromPartial(object: Partial<_186.HeaderData>): _186.HeaderData;
                    fromAmino(object: _186.HeaderDataAmino): _186.HeaderData;
                    toAmino(message: _186.HeaderData): _186.HeaderDataAmino;
                    fromAminoMsg(object: _186.HeaderDataAminoMsg): _186.HeaderData;
                    toAminoMsg(message: _186.HeaderData): _186.HeaderDataAminoMsg;
                    fromProtoMsg(message: _186.HeaderDataProtoMsg): _186.HeaderData;
                    toProto(message: _186.HeaderData): Uint8Array;
                    toProtoMsg(message: _186.HeaderData): _186.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _187.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ClientState;
                    fromJSON(object: any): _187.ClientState;
                    toJSON(message: _187.ClientState): unknown;
                    fromPartial(object: Partial<_187.ClientState>): _187.ClientState;
                    fromAmino(object: _187.ClientStateAmino): _187.ClientState;
                    toAmino(message: _187.ClientState): _187.ClientStateAmino;
                    fromAminoMsg(object: _187.ClientStateAminoMsg): _187.ClientState;
                    toAminoMsg(message: _187.ClientState): _187.ClientStateAminoMsg;
                    fromProtoMsg(message: _187.ClientStateProtoMsg): _187.ClientState;
                    toProto(message: _187.ClientState): Uint8Array;
                    toProtoMsg(message: _187.ClientState): _187.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _187.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ConsensusState;
                    fromJSON(object: any): _187.ConsensusState;
                    toJSON(message: _187.ConsensusState): unknown;
                    fromPartial(object: Partial<_187.ConsensusState>): _187.ConsensusState;
                    fromAmino(object: _187.ConsensusStateAmino): _187.ConsensusState;
                    toAmino(message: _187.ConsensusState): _187.ConsensusStateAmino;
                    fromAminoMsg(object: _187.ConsensusStateAminoMsg): _187.ConsensusState;
                    toAminoMsg(message: _187.ConsensusState): _187.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _187.ConsensusStateProtoMsg): _187.ConsensusState;
                    toProto(message: _187.ConsensusState): Uint8Array;
                    toProtoMsg(message: _187.ConsensusState): _187.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _187.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Misbehaviour;
                    fromJSON(object: any): _187.Misbehaviour;
                    toJSON(message: _187.Misbehaviour): unknown;
                    fromPartial(object: Partial<_187.Misbehaviour>): _187.Misbehaviour;
                    fromAmino(object: _187.MisbehaviourAmino): _187.Misbehaviour;
                    toAmino(message: _187.Misbehaviour): _187.MisbehaviourAmino;
                    fromAminoMsg(object: _187.MisbehaviourAminoMsg): _187.Misbehaviour;
                    toAminoMsg(message: _187.Misbehaviour): _187.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _187.MisbehaviourProtoMsg): _187.Misbehaviour;
                    toProto(message: _187.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _187.Misbehaviour): _187.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _187.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Header;
                    fromJSON(object: any): _187.Header;
                    toJSON(message: _187.Header): unknown;
                    fromPartial(object: Partial<_187.Header>): _187.Header;
                    fromAmino(object: _187.HeaderAmino): _187.Header;
                    toAmino(message: _187.Header): _187.HeaderAmino;
                    fromAminoMsg(object: _187.HeaderAminoMsg): _187.Header;
                    toAminoMsg(message: _187.Header): _187.HeaderAminoMsg;
                    fromProtoMsg(message: _187.HeaderProtoMsg): _187.Header;
                    toProto(message: _187.Header): Uint8Array;
                    toProtoMsg(message: _187.Header): _187.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _187.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Fraction;
                    fromJSON(object: any): _187.Fraction;
                    toJSON(message: _187.Fraction): unknown;
                    fromPartial(object: Partial<_187.Fraction>): _187.Fraction;
                    fromAmino(object: _187.FractionAmino): _187.Fraction;
                    toAmino(message: _187.Fraction): _187.FractionAmino;
                    fromAminoMsg(object: _187.FractionAminoMsg): _187.Fraction;
                    toAminoMsg(message: _187.Fraction): _187.FractionAminoMsg;
                    fromProtoMsg(message: _187.FractionProtoMsg): _187.Fraction;
                    toProto(message: _187.Fraction): Uint8Array;
                    toProtoMsg(message: _187.Fraction): _187.FractionProtoMsg;
                };
            };
        }
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
            ibc: {
                applications: {
                    fee: {
                        v1: _339.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _340.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _341.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _342.MsgClientImpl;
                    };
                    client: {
                        v1: _343.MsgClientImpl;
                    };
                    connection: {
                        v1: _344.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    fee: {
                        v1: {
                            incentivizedPackets(request: _153.QueryIncentivizedPacketsRequest): Promise<_153.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _153.QueryIncentivizedPacketRequest): Promise<_153.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _153.QueryIncentivizedPacketsForChannelRequest): Promise<_153.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _153.QueryTotalRecvFeesRequest): Promise<_153.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _153.QueryTotalAckFeesRequest): Promise<_153.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _153.QueryTotalTimeoutFeesRequest): Promise<_153.QueryTotalTimeoutFeesResponse>;
                            payee(request: _153.QueryPayeeRequest): Promise<_153.QueryPayeeResponse>;
                            counterpartyPayee(request: _153.QueryCounterpartyPayeeRequest): Promise<_153.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _153.QueryFeeEnabledChannelsRequest): Promise<_153.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _153.QueryFeeEnabledChannelRequest): Promise<_153.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _156.QueryInterchainAccountRequest): Promise<_156.QueryInterchainAccountResponse>;
                                params(request?: _156.QueryParamsRequest): Promise<_156.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _160.QueryParamsRequest): Promise<_160.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTraces(request?: _166.QueryDenomTracesRequest): Promise<_166.QueryDenomTracesResponse>;
                            denomTrace(request: _166.QueryDenomTraceRequest): Promise<_166.QueryDenomTraceResponse>;
                            params(request?: _166.QueryParamsRequest): Promise<_166.QueryParamsResponse>;
                            denomHash(request: _166.QueryDenomHashRequest): Promise<_166.QueryDenomHashResponse>;
                            escrowAddress(request: _166.QueryEscrowAddressRequest): Promise<_166.QueryEscrowAddressResponse>;
                            totalEscrowForDenom(request: _166.QueryTotalEscrowForDenomRequest): Promise<_166.QueryTotalEscrowForDenomResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _172.QueryChannelRequest): Promise<_172.QueryChannelResponse>;
                            channels(request?: _172.QueryChannelsRequest): Promise<_172.QueryChannelsResponse>;
                            connectionChannels(request: _172.QueryConnectionChannelsRequest): Promise<_172.QueryConnectionChannelsResponse>;
                            channelClientState(request: _172.QueryChannelClientStateRequest): Promise<_172.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _172.QueryChannelConsensusStateRequest): Promise<_172.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _172.QueryPacketCommitmentRequest): Promise<_172.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _172.QueryPacketCommitmentsRequest): Promise<_172.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _172.QueryPacketReceiptRequest): Promise<_172.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _172.QueryPacketAcknowledgementRequest): Promise<_172.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _172.QueryPacketAcknowledgementsRequest): Promise<_172.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _172.QueryUnreceivedPacketsRequest): Promise<_172.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _172.QueryUnreceivedAcksRequest): Promise<_172.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _172.QueryNextSequenceReceiveRequest): Promise<_172.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _176.QueryClientStateRequest): Promise<_176.QueryClientStateResponse>;
                            clientStates(request?: _176.QueryClientStatesRequest): Promise<_176.QueryClientStatesResponse>;
                            consensusState(request: _176.QueryConsensusStateRequest): Promise<_176.QueryConsensusStateResponse>;
                            consensusStates(request: _176.QueryConsensusStatesRequest): Promise<_176.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _176.QueryConsensusStateHeightsRequest): Promise<_176.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _176.QueryClientStatusRequest): Promise<_176.QueryClientStatusResponse>;
                            clientParams(request?: _176.QueryClientParamsRequest): Promise<_176.QueryClientParamsResponse>;
                            upgradedClientState(request?: _176.QueryUpgradedClientStateRequest): Promise<_176.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _176.QueryUpgradedConsensusStateRequest): Promise<_176.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _181.QueryConnectionRequest): Promise<_181.QueryConnectionResponse>;
                            connections(request?: _181.QueryConnectionsRequest): Promise<_181.QueryConnectionsResponse>;
                            clientConnections(request: _181.QueryClientConnectionsRequest): Promise<_181.QueryClientConnectionsResponse>;
                            connectionClientState(request: _181.QueryConnectionClientStateRequest): Promise<_181.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _181.QueryConnectionConsensusStateRequest): Promise<_181.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _181.QueryConnectionParamsRequest): Promise<_181.QueryConnectionParamsResponse>;
                        };
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
            ibc: {
                applications: {
                    fee: {
                        v1: _325.LCDQueryClient;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _326.LCDQueryClient;
                        };
                        host: {
                            v1: _327.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _328.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _329.LCDQueryClient;
                    };
                    client: {
                        v1: _330.LCDQueryClient;
                    };
                    connection: {
                        v1: _331.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
