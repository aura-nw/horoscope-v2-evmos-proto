import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.interchainAccount = this.interchainAccount.bind(this);
        this.params = this.params.bind(this);
    }
    interchainAccount(request) {
        const data = QueryInterchainAccountRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.interchain_accounts.controller.v1.Query", "InterchainAccount", data);
        return promise.then(data => QueryInterchainAccountResponse.decode(new _m0.Reader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.interchain_accounts.controller.v1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        interchainAccount(request) {
            return queryService.interchainAccount(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
