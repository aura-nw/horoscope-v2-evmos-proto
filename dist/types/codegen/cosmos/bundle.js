import * as _1 from "./accesscontrol_x/genesis";
import * as _2 from "./accesscontrol_x/query";
import * as _3 from "./accesscontrol_x/tx";
import * as _4 from "./accesscontrol_x/gov";
import * as _5 from "./accesscontrol/accesscontrol";
import * as _6 from "./accesscontrol/constants";
import * as _7 from "./accesscontrol/legacy";
import * as _8 from "./app/v1alpha1/config";
import * as _9 from "./app/v1alpha1/module";
import * as _10 from "./app/v1alpha1/query";
import * as _11 from "./auth/v1beta1/auth";
import * as _12 from "./auth/v1beta1/genesis";
import * as _13 from "./auth/v1beta1/query";
import * as _14 from "./authz/v1beta1/authz";
import * as _15 from "./authz/v1beta1/event";
import * as _16 from "./authz/v1beta1/genesis";
import * as _17 from "./authz/v1beta1/query";
import * as _18 from "./authz/v1beta1/tx";
import * as _19 from "./bank/v1beta1/authz";
import * as _20 from "./bank/v1beta1/bank";
import * as _21 from "./bank/v1beta1/genesis";
import * as _22 from "./bank/v1beta1/query";
import * as _23 from "./bank/v1beta1/tx";
import * as _24 from "./base/abci/v1beta1/abci";
import * as _25 from "./base/kv/v1beta1/kv";
import * as _26 from "./base/query/v1beta1/pagination";
import * as _27 from "./base/reflection/v1beta1/reflection";
import * as _28 from "./base/reflection/v2alpha1/reflection";
import * as _29 from "./base/snapshots/v1beta1/snapshot";
import * as _30 from "./base/store/v1beta1/commit_info";
import * as _31 from "./base/store/v1beta1/listening";
import * as _32 from "./base/tendermint/v1beta1/query";
import * as _33 from "./base/v1beta1/coin";
import * as _34 from "./capability/v1beta1/capability";
import * as _35 from "./capability/v1beta1/genesis";
import * as _36 from "./crisis/v1beta1/genesis";
import * as _37 from "./crisis/v1beta1/tx";
import * as _38 from "./crypto/ed25519/keys";
import * as _39 from "./crypto/hd/v1/hd";
import * as _40 from "./crypto/keyring/v1/record";
import * as _41 from "./crypto/multisig/keys";
import * as _42 from "./crypto/secp256k1/keys";
import * as _43 from "./crypto/secp256r1/keys";
import * as _44 from "./crypto/sr25519/keys";
import * as _45 from "./distribution/v1beta1/distribution";
import * as _46 from "./distribution/v1beta1/genesis";
import * as _47 from "./distribution/v1beta1/query";
import * as _48 from "./distribution/v1beta1/tx";
import * as _49 from "./evidence/v1beta1/evidence";
import * as _50 from "./evidence/v1beta1/genesis";
import * as _51 from "./evidence/v1beta1/query";
import * as _52 from "./evidence/v1beta1/tx";
import * as _53 from "./feegrant/v1beta1/feegrant";
import * as _54 from "./feegrant/v1beta1/genesis";
import * as _55 from "./feegrant/v1beta1/query";
import * as _56 from "./feegrant/v1beta1/tx";
import * as _57 from "./genutil/v1beta1/genesis";
import * as _58 from "./gov/v1/genesis";
import * as _59 from "./gov/v1/gov";
import * as _60 from "./gov/v1/query";
import * as _61 from "./gov/v1/tx";
import * as _62 from "./gov/v1beta1/genesis";
import * as _63 from "./gov/v1beta1/gov";
import * as _64 from "./gov/v1beta1/query";
import * as _65 from "./gov/v1beta1/tx";
import * as _66 from "./group/v1/events";
import * as _67 from "./group/v1/genesis";
import * as _68 from "./group/v1/query";
import * as _69 from "./group/v1/tx";
import * as _70 from "./group/v1/types";
import * as _71 from "./mint/v1beta1/genesis";
import * as _72 from "./mint/v1beta1/mint";
import * as _73 from "./mint/v1beta1/query";
import * as _74 from "./msg/v1/msg";
import * as _75 from "./nft/v1beta1/event";
import * as _76 from "./nft/v1beta1/genesis";
import * as _77 from "./nft/v1beta1/nft";
import * as _78 from "./nft/v1beta1/query";
import * as _79 from "./nft/v1beta1/tx";
import * as _80 from "./orm/v1/orm";
import * as _81 from "./orm/v1alpha1/schema";
import * as _82 from "./params/types/types";
import * as _83 from "./params/v1beta1/params";
import * as _84 from "./params/v1beta1/query";
import * as _85 from "./slashing/v1beta1/genesis";
import * as _86 from "./slashing/v1beta1/query";
import * as _87 from "./slashing/v1beta1/slashing";
import * as _88 from "./slashing/v1beta1/tx";
import * as _89 from "./staking/v1beta1/authz";
import * as _90 from "./staking/v1beta1/genesis";
import * as _91 from "./staking/v1beta1/query";
import * as _92 from "./staking/v1beta1/staking";
import * as _93 from "./staking/v1beta1/tx";
import * as _94 from "./tx/signing/v1beta1/signing";
import * as _95 from "./tx/v1beta1/service";
import * as _96 from "./tx/v1beta1/tx";
import * as _97 from "./upgrade/v1beta1/query";
import * as _98 from "./upgrade/v1beta1/tx";
import * as _99 from "./upgrade/v1beta1/upgrade";
import * as _100 from "./vesting/v1beta1/tx";
import * as _101 from "./vesting/v1beta1/vesting";
import * as _159 from "./accesscontrol_x/tx.amino";
import * as _160 from "./authz/v1beta1/tx.amino";
import * as _161 from "./bank/v1beta1/tx.amino";
import * as _162 from "./crisis/v1beta1/tx.amino";
import * as _163 from "./distribution/v1beta1/tx.amino";
import * as _164 from "./evidence/v1beta1/tx.amino";
import * as _165 from "./feegrant/v1beta1/tx.amino";
import * as _166 from "./gov/v1/tx.amino";
import * as _167 from "./gov/v1beta1/tx.amino";
import * as _168 from "./group/v1/tx.amino";
import * as _169 from "./nft/v1beta1/tx.amino";
import * as _170 from "./slashing/v1beta1/tx.amino";
import * as _171 from "./staking/v1beta1/tx.amino";
import * as _172 from "./upgrade/v1beta1/tx.amino";
import * as _173 from "./vesting/v1beta1/tx.amino";
import * as _174 from "./accesscontrol_x/tx.registry";
import * as _175 from "./authz/v1beta1/tx.registry";
import * as _176 from "./bank/v1beta1/tx.registry";
import * as _177 from "./crisis/v1beta1/tx.registry";
import * as _178 from "./distribution/v1beta1/tx.registry";
import * as _179 from "./evidence/v1beta1/tx.registry";
import * as _180 from "./feegrant/v1beta1/tx.registry";
import * as _181 from "./gov/v1/tx.registry";
import * as _182 from "./gov/v1beta1/tx.registry";
import * as _183 from "./group/v1/tx.registry";
import * as _184 from "./nft/v1beta1/tx.registry";
import * as _185 from "./slashing/v1beta1/tx.registry";
import * as _186 from "./staking/v1beta1/tx.registry";
import * as _187 from "./upgrade/v1beta1/tx.registry";
import * as _188 from "./vesting/v1beta1/tx.registry";
import * as _189 from "./accesscontrol_x/query.lcd";
import * as _190 from "./auth/v1beta1/query.lcd";
import * as _191 from "./authz/v1beta1/query.lcd";
import * as _192 from "./bank/v1beta1/query.lcd";
import * as _193 from "./base/tendermint/v1beta1/query.lcd";
import * as _194 from "./distribution/v1beta1/query.lcd";
import * as _195 from "./evidence/v1beta1/query.lcd";
import * as _196 from "./feegrant/v1beta1/query.lcd";
import * as _197 from "./gov/v1/query.lcd";
import * as _198 from "./gov/v1beta1/query.lcd";
import * as _199 from "./group/v1/query.lcd";
import * as _200 from "./mint/v1beta1/query.lcd";
import * as _201 from "./nft/v1beta1/query.lcd";
import * as _202 from "./params/v1beta1/query.lcd";
import * as _203 from "./slashing/v1beta1/query.lcd";
import * as _204 from "./staking/v1beta1/query.lcd";
import * as _205 from "./tx/v1beta1/service.lcd";
import * as _206 from "./upgrade/v1beta1/query.lcd";
import * as _207 from "./accesscontrol_x/query.rpc.Query";
import * as _208 from "./app/v1alpha1/query.rpc.Query";
import * as _209 from "./auth/v1beta1/query.rpc.Query";
import * as _210 from "./authz/v1beta1/query.rpc.Query";
import * as _211 from "./bank/v1beta1/query.rpc.Query";
import * as _212 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _213 from "./distribution/v1beta1/query.rpc.Query";
import * as _214 from "./evidence/v1beta1/query.rpc.Query";
import * as _215 from "./feegrant/v1beta1/query.rpc.Query";
import * as _216 from "./gov/v1/query.rpc.Query";
import * as _217 from "./gov/v1beta1/query.rpc.Query";
import * as _218 from "./group/v1/query.rpc.Query";
import * as _219 from "./mint/v1beta1/query.rpc.Query";
import * as _220 from "./nft/v1beta1/query.rpc.Query";
import * as _221 from "./params/v1beta1/query.rpc.Query";
import * as _222 from "./slashing/v1beta1/query.rpc.Query";
import * as _223 from "./staking/v1beta1/query.rpc.Query";
import * as _224 from "./tx/v1beta1/service.rpc.Service";
import * as _225 from "./upgrade/v1beta1/query.rpc.Query";
import * as _226 from "./accesscontrol_x/tx.rpc.msg";
import * as _227 from "./authz/v1beta1/tx.rpc.msg";
import * as _228 from "./bank/v1beta1/tx.rpc.msg";
import * as _229 from "./crisis/v1beta1/tx.rpc.msg";
import * as _230 from "./distribution/v1beta1/tx.rpc.msg";
import * as _231 from "./evidence/v1beta1/tx.rpc.msg";
import * as _232 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _233 from "./gov/v1/tx.rpc.msg";
import * as _234 from "./gov/v1beta1/tx.rpc.msg";
import * as _235 from "./group/v1/tx.rpc.msg";
import * as _236 from "./nft/v1beta1/tx.rpc.msg";
import * as _237 from "./slashing/v1beta1/tx.rpc.msg";
import * as _238 from "./staking/v1beta1/tx.rpc.msg";
import * as _239 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _240 from "./vesting/v1beta1/tx.rpc.msg";
import * as _273 from "./lcd";
import * as _274 from "./rpc.query";
import * as _275 from "./rpc.tx";
export var cosmos;
(function (cosmos) {
    let accesscontrol_x;
    (function (accesscontrol_x) {
        accesscontrol_x.v1beta1 = {
            ..._1,
            ..._2,
            ..._3,
            ..._159,
            ..._174,
            ..._189,
            ..._207,
            ..._226
        };
    })(accesscontrol_x = cosmos.accesscontrol_x || (cosmos.accesscontrol_x = {}));
    let accesscontrol;
    (function (accesscontrol) {
        accesscontrol.v1beta1 = {
            ..._4,
            ..._5,
            ..._6,
            ..._7
        };
    })(accesscontrol = cosmos.accesscontrol || (cosmos.accesscontrol = {}));
    let app;
    (function (app) {
        app.v1alpha1 = {
            ..._8,
            ..._9,
            ..._10,
            ..._208
        };
    })(app = cosmos.app || (cosmos.app = {}));
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._11,
            ..._12,
            ..._13,
            ..._190,
            ..._209
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        authz.v1beta1 = {
            ..._14,
            ..._15,
            ..._16,
            ..._17,
            ..._18,
            ..._160,
            ..._175,
            ..._191,
            ..._210,
            ..._227
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
            ..._19,
            ..._20,
            ..._21,
            ..._22,
            ..._23,
            ..._161,
            ..._176,
            ..._192,
            ..._211,
            ..._228
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._24
            };
        })(abci = base.abci || (base.abci = {}));
        let kv;
        (function (kv) {
            kv.v1beta1 = {
                ..._25
            };
        })(kv = base.kv || (base.kv = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._26
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v1beta1 = {
                ..._27
            };
            reflection.v2alpha1 = {
                ..._28
            };
        })(reflection = base.reflection || (base.reflection = {}));
        let snapshots;
        (function (snapshots) {
            snapshots.v1beta1 = {
                ..._29
            };
        })(snapshots = base.snapshots || (base.snapshots = {}));
        let store;
        (function (store) {
            store.v1beta1 = {
                ..._30,
                ..._31
            };
        })(store = base.store || (base.store = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1beta1 = {
                ..._32,
                ..._193,
                ..._212
            };
        })(tendermint = base.tendermint || (base.tendermint = {}));
        base.v1beta1 = {
            ..._33
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let capability;
    (function (capability) {
        capability.v1beta1 = {
            ..._34,
            ..._35
        };
    })(capability = cosmos.capability || (cosmos.capability = {}));
    let crisis;
    (function (crisis) {
        crisis.v1beta1 = {
            ..._36,
            ..._37,
            ..._162,
            ..._177,
            ..._229
        };
    })(crisis = cosmos.crisis || (cosmos.crisis = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._38
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._39
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._40
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._41
        };
        crypto.secp256k1 = {
            ..._42
        };
        crypto.secp256r1 = {
            ..._43
        };
        crypto.sr25519 = {
            ..._44
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
            ..._45,
            ..._46,
            ..._47,
            ..._48,
            ..._163,
            ..._178,
            ..._194,
            ..._213,
            ..._230
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let evidence;
    (function (evidence) {
        evidence.v1beta1 = {
            ..._49,
            ..._50,
            ..._51,
            ..._52,
            ..._164,
            ..._179,
            ..._195,
            ..._214,
            ..._231
        };
    })(evidence = cosmos.evidence || (cosmos.evidence = {}));
    let feegrant;
    (function (feegrant) {
        feegrant.v1beta1 = {
            ..._53,
            ..._54,
            ..._55,
            ..._56,
            ..._165,
            ..._180,
            ..._196,
            ..._215,
            ..._232
        };
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let genutil;
    (function (genutil) {
        genutil.v1beta1 = {
            ..._57
        };
    })(genutil = cosmos.genutil || (cosmos.genutil = {}));
    let gov;
    (function (gov) {
        gov.v1 = {
            ..._58,
            ..._59,
            ..._60,
            ..._61,
            ..._166,
            ..._181,
            ..._197,
            ..._216,
            ..._233
        };
        gov.v1beta1 = {
            ..._62,
            ..._63,
            ..._64,
            ..._65,
            ..._167,
            ..._182,
            ..._198,
            ..._217,
            ..._234
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let group;
    (function (group) {
        group.v1 = {
            ..._66,
            ..._67,
            ..._68,
            ..._69,
            ..._70,
            ..._168,
            ..._183,
            ..._199,
            ..._218,
            ..._235
        };
    })(group = cosmos.group || (cosmos.group = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._71,
            ..._72,
            ..._73,
            ..._200,
            ..._219
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let msg;
    (function (msg) {
        msg.v1 = {
            ..._74
        };
    })(msg = cosmos.msg || (cosmos.msg = {}));
    let nft;
    (function (nft) {
        nft.v1beta1 = {
            ..._75,
            ..._76,
            ..._77,
            ..._78,
            ..._79,
            ..._169,
            ..._184,
            ..._201,
            ..._220,
            ..._236
        };
    })(nft = cosmos.nft || (cosmos.nft = {}));
    let orm;
    (function (orm) {
        orm.v1 = {
            ..._80
        };
        orm.v1alpha1 = {
            ..._81
        };
    })(orm = cosmos.orm || (cosmos.orm = {}));
    let params;
    (function (params) {
        params.v1beta1 = {
            ..._82,
            ..._83,
            ..._84,
            ..._202,
            ..._221
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let slashing;
    (function (slashing) {
        slashing.v1beta1 = {
            ..._85,
            ..._86,
            ..._87,
            ..._88,
            ..._170,
            ..._185,
            ..._203,
            ..._222,
            ..._237
        };
    })(slashing = cosmos.slashing || (cosmos.slashing = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._89,
            ..._90,
            ..._91,
            ..._92,
            ..._93,
            ..._171,
            ..._186,
            ..._204,
            ..._223,
            ..._238
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._94
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._95,
            ..._96,
            ..._205,
            ..._224
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._97,
            ..._98,
            ..._99,
            ..._172,
            ..._187,
            ..._206,
            ..._225,
            ..._239
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        vesting.v1beta1 = {
            ..._100,
            ..._101,
            ..._173,
            ..._188,
            ..._240
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._273,
        ..._274,
        ..._275
    };
})(cosmos || (cosmos = {}));
