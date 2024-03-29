import * as _m0 from "protobufjs/minimal";
/** ExtensionOptionDynamicFeeTx is an extension option that specifies the maxPrioPrice for cosmos tx */
export interface ExtensionOptionDynamicFeeTx {
    /** max_priority_price is the same as `max_priority_fee_per_gas` in eip-1559 spec */
    maxPriorityPrice: string;
}
export interface ExtensionOptionDynamicFeeTxProtoMsg {
    typeUrl: "/ethermint.types.v1.ExtensionOptionDynamicFeeTx";
    value: Uint8Array;
}
/** ExtensionOptionDynamicFeeTx is an extension option that specifies the maxPrioPrice for cosmos tx */
export interface ExtensionOptionDynamicFeeTxAmino {
    /** max_priority_price is the same as `max_priority_fee_per_gas` in eip-1559 spec */
    max_priority_price?: string;
}
export interface ExtensionOptionDynamicFeeTxAminoMsg {
    type: "/ethermint.types.v1.ExtensionOptionDynamicFeeTx";
    value: ExtensionOptionDynamicFeeTxAmino;
}
/** ExtensionOptionDynamicFeeTx is an extension option that specifies the maxPrioPrice for cosmos tx */
export interface ExtensionOptionDynamicFeeTxSDKType {
    max_priority_price: string;
}
export declare const ExtensionOptionDynamicFeeTx: {
    typeUrl: string;
    encode(message: ExtensionOptionDynamicFeeTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionOptionDynamicFeeTx;
    fromJSON(object: any): ExtensionOptionDynamicFeeTx;
    toJSON(message: ExtensionOptionDynamicFeeTx): unknown;
    fromPartial(object: Partial<ExtensionOptionDynamicFeeTx>): ExtensionOptionDynamicFeeTx;
    fromAmino(object: ExtensionOptionDynamicFeeTxAmino): ExtensionOptionDynamicFeeTx;
    toAmino(message: ExtensionOptionDynamicFeeTx): ExtensionOptionDynamicFeeTxAmino;
    fromAminoMsg(object: ExtensionOptionDynamicFeeTxAminoMsg): ExtensionOptionDynamicFeeTx;
    fromProtoMsg(message: ExtensionOptionDynamicFeeTxProtoMsg): ExtensionOptionDynamicFeeTx;
    toProto(message: ExtensionOptionDynamicFeeTx): Uint8Array;
    toProtoMsg(message: ExtensionOptionDynamicFeeTx): ExtensionOptionDynamicFeeTxProtoMsg;
};
