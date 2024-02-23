import { MsgEthereumTxResponse } from "./tx";
import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAccountRequest, QueryAccountResponse, QueryCosmosAccountRequest, QueryCosmosAccountResponse, QueryValidatorAccountRequest, QueryValidatorAccountResponse, QueryBalanceRequest, QueryBalanceResponse, QueryStorageRequest, QueryStorageResponse, QueryCodeRequest, QueryCodeResponse, QueryParamsRequest, QueryParamsResponse, EthCallRequest, EstimateGasResponse, QueryTraceTxRequest, QueryTraceTxResponse, QueryTraceBlockRequest, QueryTraceBlockResponse, QueryBaseFeeRequest, QueryBaseFeeResponse } from "./query";
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.account = this.account.bind(this);
        this.cosmosAccount = this.cosmosAccount.bind(this);
        this.validatorAccount = this.validatorAccount.bind(this);
        this.balance = this.balance.bind(this);
        this.storage = this.storage.bind(this);
        this.code = this.code.bind(this);
        this.params = this.params.bind(this);
        this.ethCall = this.ethCall.bind(this);
        this.estimateGas = this.estimateGas.bind(this);
        this.traceTx = this.traceTx.bind(this);
        this.traceBlock = this.traceBlock.bind(this);
        this.baseFee = this.baseFee.bind(this);
    }
    account(request) {
        const data = QueryAccountRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Account", data);
        return promise.then(data => QueryAccountResponse.decode(new _m0.Reader(data)));
    }
    cosmosAccount(request) {
        const data = QueryCosmosAccountRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "CosmosAccount", data);
        return promise.then(data => QueryCosmosAccountResponse.decode(new _m0.Reader(data)));
    }
    validatorAccount(request) {
        const data = QueryValidatorAccountRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "ValidatorAccount", data);
        return promise.then(data => QueryValidatorAccountResponse.decode(new _m0.Reader(data)));
    }
    balance(request) {
        const data = QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Balance", data);
        return promise.then(data => QueryBalanceResponse.decode(new _m0.Reader(data)));
    }
    storage(request) {
        const data = QueryStorageRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Storage", data);
        return promise.then(data => QueryStorageResponse.decode(new _m0.Reader(data)));
    }
    code(request) {
        const data = QueryCodeRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Code", data);
        return promise.then(data => QueryCodeResponse.decode(new _m0.Reader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    ethCall(request) {
        const data = EthCallRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "EthCall", data);
        return promise.then(data => MsgEthereumTxResponse.decode(new _m0.Reader(data)));
    }
    estimateGas(request) {
        const data = EthCallRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "EstimateGas", data);
        return promise.then(data => EstimateGasResponse.decode(new _m0.Reader(data)));
    }
    traceTx(request) {
        const data = QueryTraceTxRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "TraceTx", data);
        return promise.then(data => QueryTraceTxResponse.decode(new _m0.Reader(data)));
    }
    traceBlock(request) {
        const data = QueryTraceBlockRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "TraceBlock", data);
        return promise.then(data => QueryTraceBlockResponse.decode(new _m0.Reader(data)));
    }
    baseFee(request = {}) {
        const data = QueryBaseFeeRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1.Query", "BaseFee", data);
        return promise.then(data => QueryBaseFeeResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        account(request) {
            return queryService.account(request);
        },
        cosmosAccount(request) {
            return queryService.cosmosAccount(request);
        },
        validatorAccount(request) {
            return queryService.validatorAccount(request);
        },
        balance(request) {
            return queryService.balance(request);
        },
        storage(request) {
            return queryService.storage(request);
        },
        code(request) {
            return queryService.code(request);
        },
        params(request) {
            return queryService.params(request);
        },
        ethCall(request) {
            return queryService.ethCall(request);
        },
        estimateGas(request) {
            return queryService.estimateGas(request);
        },
        traceTx(request) {
            return queryService.traceTx(request);
        },
        traceBlock(request) {
            return queryService.traceBlock(request);
        },
        baseFee(request) {
            return queryService.baseFee(request);
        }
    };
};
