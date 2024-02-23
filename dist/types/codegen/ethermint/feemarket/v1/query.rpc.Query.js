import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse } from "./query";
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.baseFee = this.baseFee.bind(this);
        this.blockGas = this.blockGas.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.feemarket.v1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    baseFee(request = {}) {
        const data = QueryBaseFeeRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.feemarket.v1.Query", "BaseFee", data);
        return promise.then(data => QueryBaseFeeResponse.decode(new _m0.Reader(data)));
    }
    blockGas(request = {}) {
        const data = QueryBlockGasRequest.encode(request).finish();
        const promise = this.rpc.request("ethermint.feemarket.v1.Query", "BlockGas", data);
        return promise.then(data => QueryBlockGasResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        baseFee(request) {
            return queryService.baseFee(request);
        },
        blockGas(request) {
            return queryService.blockGas(request);
        }
    };
};
