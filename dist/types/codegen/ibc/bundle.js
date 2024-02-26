import * as _149 from "./applications/fee/v1/ack";
import * as _150 from "./applications/fee/v1/fee";
import * as _151 from "./applications/fee/v1/genesis";
import * as _152 from "./applications/fee/v1/metadata";
import * as _153 from "./applications/fee/v1/query";
import * as _154 from "./applications/fee/v1/tx";
import * as _155 from "./applications/interchain_accounts/controller/v1/controller";
import * as _156 from "./applications/interchain_accounts/controller/v1/query";
import * as _157 from "./applications/interchain_accounts/controller/v1/tx";
import * as _158 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _159 from "./applications/interchain_accounts/host/v1/host";
import * as _160 from "./applications/interchain_accounts/host/v1/query";
import * as _161 from "./applications/interchain_accounts/v1/account";
import * as _162 from "./applications/interchain_accounts/v1/metadata";
import * as _163 from "./applications/interchain_accounts/v1/packet";
import * as _164 from "./applications/transfer/v1/authz";
import * as _165 from "./applications/transfer/v1/genesis";
import * as _166 from "./applications/transfer/v1/query";
import * as _167 from "./applications/transfer/v1/transfer";
import * as _168 from "./applications/transfer/v1/tx";
import * as _169 from "./applications/transfer/v2/packet";
import * as _170 from "./core/channel/v1/channel";
import * as _171 from "./core/channel/v1/genesis";
import * as _172 from "./core/channel/v1/query";
import * as _173 from "./core/channel/v1/tx";
import * as _174 from "./core/client/v1/client";
import * as _175 from "./core/client/v1/genesis";
import * as _176 from "./core/client/v1/query";
import * as _177 from "./core/client/v1/tx";
import * as _178 from "./core/commitment/v1/commitment";
import * as _179 from "./core/connection/v1/connection";
import * as _180 from "./core/connection/v1/genesis";
import * as _181 from "./core/connection/v1/query";
import * as _182 from "./core/connection/v1/tx";
import * as _183 from "./core/types/v1/genesis";
import * as _184 from "./lightclients/localhost/v2/localhost";
import * as _185 from "./lightclients/solomachine/v2/solomachine";
import * as _186 from "./lightclients/solomachine/v3/solomachine";
import * as _187 from "./lightclients/tendermint/v1/tendermint";
import * as _313 from "./applications/fee/v1/tx.amino";
import * as _314 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _315 from "./applications/transfer/v1/tx.amino";
import * as _316 from "./core/channel/v1/tx.amino";
import * as _317 from "./core/client/v1/tx.amino";
import * as _318 from "./core/connection/v1/tx.amino";
import * as _319 from "./applications/fee/v1/tx.registry";
import * as _320 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _321 from "./applications/transfer/v1/tx.registry";
import * as _322 from "./core/channel/v1/tx.registry";
import * as _323 from "./core/client/v1/tx.registry";
import * as _324 from "./core/connection/v1/tx.registry";
import * as _325 from "./applications/fee/v1/query.lcd";
import * as _326 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _327 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _328 from "./applications/transfer/v1/query.lcd";
import * as _329 from "./core/channel/v1/query.lcd";
import * as _330 from "./core/client/v1/query.lcd";
import * as _331 from "./core/connection/v1/query.lcd";
import * as _332 from "./applications/fee/v1/query.rpc.Query";
import * as _333 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _334 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _335 from "./applications/transfer/v1/query.rpc.Query";
import * as _336 from "./core/channel/v1/query.rpc.Query";
import * as _337 from "./core/client/v1/query.rpc.Query";
import * as _338 from "./core/connection/v1/query.rpc.Query";
import * as _339 from "./applications/fee/v1/tx.rpc.msg";
import * as _340 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _341 from "./applications/transfer/v1/tx.rpc.msg";
import * as _342 from "./core/channel/v1/tx.rpc.msg";
import * as _343 from "./core/client/v1/tx.rpc.msg";
import * as _344 from "./core/connection/v1/tx.rpc.msg";
import * as _354 from "./lcd";
import * as _355 from "./rpc.query";
import * as _356 from "./rpc.tx";
export var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let fee;
        (function (fee) {
            fee.v1 = {
                ..._149,
                ..._150,
                ..._151,
                ..._152,
                ..._153,
                ..._154,
                ..._313,
                ..._319,
                ..._325,
                ..._332,
                ..._339
            };
        })(fee = applications.fee || (applications.fee = {}));
        let interchain_accounts;
        (function (interchain_accounts) {
            let controller;
            (function (controller) {
                controller.v1 = {
                    ..._155,
                    ..._156,
                    ..._157,
                    ..._314,
                    ..._320,
                    ..._326,
                    ..._333,
                    ..._340
                };
            })(controller = interchain_accounts.controller || (interchain_accounts.controller = {}));
            let genesis;
            (function (genesis) {
                genesis.v1 = {
                    ..._158
                };
            })(genesis = interchain_accounts.genesis || (interchain_accounts.genesis = {}));
            let host;
            (function (host) {
                host.v1 = {
                    ..._159,
                    ..._160,
                    ..._327,
                    ..._334
                };
            })(host = interchain_accounts.host || (interchain_accounts.host = {}));
            interchain_accounts.v1 = {
                ..._161,
                ..._162,
                ..._163
            };
        })(interchain_accounts = applications.interchain_accounts || (applications.interchain_accounts = {}));
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._164,
                ..._165,
                ..._166,
                ..._167,
                ..._168,
                ..._315,
                ..._321,
                ..._328,
                ..._335,
                ..._341
            };
            transfer.v2 = {
                ..._169
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._170,
                ..._171,
                ..._172,
                ..._173,
                ..._316,
                ..._322,
                ..._329,
                ..._336,
                ..._342
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._174,
                ..._175,
                ..._176,
                ..._177,
                ..._317,
                ..._323,
                ..._330,
                ..._337,
                ..._343
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._178
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._179,
                ..._180,
                ..._181,
                ..._182,
                ..._318,
                ..._324,
                ..._331,
                ..._338,
                ..._344
            };
        })(connection = core.connection || (core.connection = {}));
        let types;
        (function (types) {
            types.v1 = {
                ..._183
            };
        })(types = core.types || (core.types = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v2 = {
                ..._184
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v2 = {
                ..._185
            };
            solomachine.v3 = {
                ..._186
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._187
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._354,
        ..._355,
        ..._356
    };
})(ibc || (ibc = {}));
