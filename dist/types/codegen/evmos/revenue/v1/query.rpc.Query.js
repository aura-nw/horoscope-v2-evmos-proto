import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryRevenuesRequest, QueryRevenuesResponse, QueryRevenueRequest, QueryRevenueResponse, QueryParamsRequest, QueryParamsResponse, QueryDeployerRevenuesRequest, QueryDeployerRevenuesResponse, QueryWithdrawerRevenuesRequest, QueryWithdrawerRevenuesResponse } from "./query";
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.revenues = this.revenues.bind(this);
        this.revenue = this.revenue.bind(this);
        this.params = this.params.bind(this);
        this.deployerRevenues = this.deployerRevenues.bind(this);
        this.withdrawerRevenues = this.withdrawerRevenues.bind(this);
    }
    revenues(request = {
        pagination: undefined
    }) {
        const data = QueryRevenuesRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.revenue.v1.Query", "Revenues", data);
        return promise.then(data => QueryRevenuesResponse.decode(new _m0.Reader(data)));
    }
    revenue(request) {
        const data = QueryRevenueRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.revenue.v1.Query", "Revenue", data);
        return promise.then(data => QueryRevenueResponse.decode(new _m0.Reader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.revenue.v1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    deployerRevenues(request) {
        const data = QueryDeployerRevenuesRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.revenue.v1.Query", "DeployerRevenues", data);
        return promise.then(data => QueryDeployerRevenuesResponse.decode(new _m0.Reader(data)));
    }
    withdrawerRevenues(request) {
        const data = QueryWithdrawerRevenuesRequest.encode(request).finish();
        const promise = this.rpc.request("evmos.revenue.v1.Query", "WithdrawerRevenues", data);
        return promise.then(data => QueryWithdrawerRevenuesResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        revenues(request) {
            return queryService.revenues(request);
        },
        revenue(request) {
            return queryService.revenue(request);
        },
        params(request) {
            return queryService.params(request);
        },
        deployerRevenues(request) {
            return queryService.deployerRevenues(request);
        },
        withdrawerRevenues(request) {
            return queryService.withdrawerRevenues(request);
        }
    };
};
