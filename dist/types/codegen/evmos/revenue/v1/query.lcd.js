import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
    constructor({ requestClient }) {
        this.req = requestClient;
        this.revenues = this.revenues.bind(this);
        this.revenue = this.revenue.bind(this);
        this.params = this.params.bind(this);
        this.deployerRevenues = this.deployerRevenues.bind(this);
        this.withdrawerRevenues = this.withdrawerRevenues.bind(this);
    }
    /* Revenues retrieves all registered revenues */
    async revenues(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `evmos/revenue/v1/revenues`;
        return await this.req.get(endpoint, options);
    }
    /* Revenue retrieves a registered revenue for a given contract address */
    async revenue(params) {
        const endpoint = `evmos/revenue/v1/revenues/${params.contractAddress}`;
        return await this.req.get(endpoint);
    }
    /* Params retrieves the revenue module params */
    async params(_params = {}) {
        const endpoint = `evmos/revenue/v1/params`;
        return await this.req.get(endpoint);
    }
    /* DeployerRevenues retrieves all revenues that a given deployer has
     registered */
    async deployerRevenues(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `evmos/revenue/v1/revenues/${params.deployerAddress}`;
        return await this.req.get(endpoint, options);
    }
    /* WithdrawerRevenues retrieves all revenues with a given withdrawer
     address */
    async withdrawerRevenues(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `evmos/revenue/v1/revenues/${params.withdrawerAddress}`;
        return await this.req.get(endpoint, options);
    }
}
