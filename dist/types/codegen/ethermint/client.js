import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as ethermintEvmV1TxRegistry from "./evm/v1/tx.registry";
import * as ethermintFeemarketV1TxRegistry from "./feemarket/v1/tx.registry";
import * as ethermintEvmV1TxAmino from "./evm/v1/tx.amino";
import * as ethermintFeemarketV1TxAmino from "./feemarket/v1/tx.amino";
export const ethermintAminoConverters = {
    ...ethermintEvmV1TxAmino.AminoConverter,
    ...ethermintFeemarketV1TxAmino.AminoConverter
};
export const ethermintProtoRegistry = [...ethermintEvmV1TxRegistry.registry, ...ethermintFeemarketV1TxRegistry.registry];
export const getSigningEthermintClientOptions = ({ defaultTypes = defaultRegistryTypes } = {}) => {
    const registry = new Registry([...defaultTypes, ...ethermintProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...ethermintAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
export const getSigningEthermintClient = async ({ rpcEndpoint, signer, defaultTypes = defaultRegistryTypes }) => {
    const { registry, aminoTypes } = getSigningEthermintClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};