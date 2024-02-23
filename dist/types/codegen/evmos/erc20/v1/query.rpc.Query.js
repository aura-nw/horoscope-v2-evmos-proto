import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryTokenPairsRequest, QueryTokenPairsResponse, QueryTokenPairRequest, QueryTokenPairResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.tokenPairs = this.tokenPairs.bind(this);
        this.tokenPair = this.tokenPair.bind(this);
        this.params = this.params.bind(this);
    }
    tokenPairs(request = {
        pagination: undefined
    }) {
        const data = QueryTokenPairsRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.erc20.v1.Query", "TokenPairs", data);
        return promise.then(data => QueryTokenPairsResponse.decode(new _m0.Reader(data)));
    }
    tokenPair(request) {
        const data = QueryTokenPairRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.erc20.v1.Query", "TokenPair", data);
        return promise.then(data => QueryTokenPairResponse.decode(new _m0.Reader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.erc20.v1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        tokenPairs(request) {
            return queryService.tokenPairs(request);
        },
        tokenPair(request) {
            return queryService.tokenPair(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
