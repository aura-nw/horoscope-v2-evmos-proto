import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBalancesRequest, QueryBalancesResponse } from "./query";
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.balances = this.balances.bind(this);
    }
    balances(request) {
        const data = QueryBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.vesting.v2.Query", "Balances", data);
        return promise.then(data => QueryBalancesResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        balances(request) {
            return queryService.balances(request);
        }
    };
};
