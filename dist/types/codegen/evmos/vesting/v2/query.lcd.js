export class LCDQueryClient {
    constructor({ requestClient }) {
        this.req = requestClient;
        this.balances = this.balances.bind(this);
    }
    /* Balances retrieves the unvested, vested and locked tokens for a vesting account */
    async balances(params) {
        const endpoint = `evmos/vesting/v2/balances/${params.address}`;
        return await this.req.get(endpoint);
    }
}
