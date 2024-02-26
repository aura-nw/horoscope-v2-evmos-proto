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
import * as _71 from "./ics23/v1/proofs";
import * as _72 from "./mint/v1beta1/genesis";
import * as _73 from "./mint/v1beta1/mint";
import * as _74 from "./mint/v1beta1/query";
import * as _75 from "./msg/v1/msg";
import * as _76 from "./nft/v1beta1/event";
import * as _77 from "./nft/v1beta1/genesis";
import * as _78 from "./nft/v1beta1/nft";
import * as _79 from "./nft/v1beta1/query";
import * as _80 from "./nft/v1beta1/tx";
import * as _81 from "./orm/v1/orm";
import * as _82 from "./orm/v1alpha1/schema";
import * as _83 from "./params/types/types";
import * as _84 from "./params/v1beta1/params";
import * as _85 from "./params/v1beta1/query";
import * as _86 from "./slashing/v1beta1/genesis";
import * as _87 from "./slashing/v1beta1/query";
import * as _88 from "./slashing/v1beta1/slashing";
import * as _89 from "./slashing/v1beta1/tx";
import * as _90 from "./staking/v1beta1/authz";
import * as _91 from "./staking/v1beta1/genesis";
import * as _92 from "./staking/v1beta1/query";
import * as _93 from "./staking/v1beta1/staking";
import * as _94 from "./staking/v1beta1/tx";
import * as _95 from "./tx/signing/v1beta1/signing";
import * as _96 from "./tx/v1beta1/service";
import * as _97 from "./tx/v1beta1/tx";
import * as _98 from "./upgrade/v1beta1/query";
import * as _99 from "./upgrade/v1beta1/tx";
import * as _100 from "./upgrade/v1beta1/upgrade";
import * as _101 from "./vesting/v1beta1/tx";
import * as _102 from "./vesting/v1beta1/vesting";
import * as _199 from "./accesscontrol_x/tx.amino";
import * as _200 from "./authz/v1beta1/tx.amino";
import * as _201 from "./bank/v1beta1/tx.amino";
import * as _202 from "./crisis/v1beta1/tx.amino";
import * as _203 from "./distribution/v1beta1/tx.amino";
import * as _204 from "./evidence/v1beta1/tx.amino";
import * as _205 from "./feegrant/v1beta1/tx.amino";
import * as _206 from "./gov/v1/tx.amino";
import * as _207 from "./gov/v1beta1/tx.amino";
import * as _208 from "./group/v1/tx.amino";
import * as _209 from "./nft/v1beta1/tx.amino";
import * as _210 from "./slashing/v1beta1/tx.amino";
import * as _211 from "./staking/v1beta1/tx.amino";
import * as _212 from "./upgrade/v1beta1/tx.amino";
import * as _213 from "./vesting/v1beta1/tx.amino";
import * as _214 from "./accesscontrol_x/tx.registry";
import * as _215 from "./authz/v1beta1/tx.registry";
import * as _216 from "./bank/v1beta1/tx.registry";
import * as _217 from "./crisis/v1beta1/tx.registry";
import * as _218 from "./distribution/v1beta1/tx.registry";
import * as _219 from "./evidence/v1beta1/tx.registry";
import * as _220 from "./feegrant/v1beta1/tx.registry";
import * as _221 from "./gov/v1/tx.registry";
import * as _222 from "./gov/v1beta1/tx.registry";
import * as _223 from "./group/v1/tx.registry";
import * as _224 from "./nft/v1beta1/tx.registry";
import * as _225 from "./slashing/v1beta1/tx.registry";
import * as _226 from "./staking/v1beta1/tx.registry";
import * as _227 from "./upgrade/v1beta1/tx.registry";
import * as _228 from "./vesting/v1beta1/tx.registry";
import * as _229 from "./accesscontrol_x/query.lcd";
import * as _230 from "./auth/v1beta1/query.lcd";
import * as _231 from "./authz/v1beta1/query.lcd";
import * as _232 from "./bank/v1beta1/query.lcd";
import * as _233 from "./base/tendermint/v1beta1/query.lcd";
import * as _234 from "./distribution/v1beta1/query.lcd";
import * as _235 from "./evidence/v1beta1/query.lcd";
import * as _236 from "./feegrant/v1beta1/query.lcd";
import * as _237 from "./gov/v1/query.lcd";
import * as _238 from "./gov/v1beta1/query.lcd";
import * as _239 from "./group/v1/query.lcd";
import * as _240 from "./mint/v1beta1/query.lcd";
import * as _241 from "./nft/v1beta1/query.lcd";
import * as _242 from "./params/v1beta1/query.lcd";
import * as _243 from "./slashing/v1beta1/query.lcd";
import * as _244 from "./staking/v1beta1/query.lcd";
import * as _245 from "./tx/v1beta1/service.lcd";
import * as _246 from "./upgrade/v1beta1/query.lcd";
import * as _247 from "./accesscontrol_x/query.rpc.Query";
import * as _248 from "./app/v1alpha1/query.rpc.Query";
import * as _249 from "./auth/v1beta1/query.rpc.Query";
import * as _250 from "./authz/v1beta1/query.rpc.Query";
import * as _251 from "./bank/v1beta1/query.rpc.Query";
import * as _252 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _253 from "./distribution/v1beta1/query.rpc.Query";
import * as _254 from "./evidence/v1beta1/query.rpc.Query";
import * as _255 from "./feegrant/v1beta1/query.rpc.Query";
import * as _256 from "./gov/v1/query.rpc.Query";
import * as _257 from "./gov/v1beta1/query.rpc.Query";
import * as _258 from "./group/v1/query.rpc.Query";
import * as _259 from "./mint/v1beta1/query.rpc.Query";
import * as _260 from "./nft/v1beta1/query.rpc.Query";
import * as _261 from "./params/v1beta1/query.rpc.Query";
import * as _262 from "./slashing/v1beta1/query.rpc.Query";
import * as _263 from "./staking/v1beta1/query.rpc.Query";
import * as _264 from "./tx/v1beta1/service.rpc.Service";
import * as _265 from "./upgrade/v1beta1/query.rpc.Query";
import * as _266 from "./accesscontrol_x/tx.rpc.msg";
import * as _267 from "./authz/v1beta1/tx.rpc.msg";
import * as _268 from "./bank/v1beta1/tx.rpc.msg";
import * as _269 from "./crisis/v1beta1/tx.rpc.msg";
import * as _270 from "./distribution/v1beta1/tx.rpc.msg";
import * as _271 from "./evidence/v1beta1/tx.rpc.msg";
import * as _272 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _273 from "./gov/v1/tx.rpc.msg";
import * as _274 from "./gov/v1beta1/tx.rpc.msg";
import * as _275 from "./group/v1/tx.rpc.msg";
import * as _276 from "./nft/v1beta1/tx.rpc.msg";
import * as _277 from "./slashing/v1beta1/tx.rpc.msg";
import * as _278 from "./staking/v1beta1/tx.rpc.msg";
import * as _279 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _280 from "./vesting/v1beta1/tx.rpc.msg";
import * as _345 from "./lcd";
import * as _346 from "./rpc.query";
import * as _347 from "./rpc.tx";
export var cosmos;
(function (cosmos) {
    let accesscontrol_x;
    (function (accesscontrol_x) {
        accesscontrol_x.v1beta1 = {
            ..._1,
            ..._2,
            ..._3,
            ..._199,
            ..._214,
            ..._229,
            ..._247,
            ..._266
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
            ..._248
        };
    })(app = cosmos.app || (cosmos.app = {}));
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._11,
            ..._12,
            ..._13,
            ..._230,
            ..._249
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
            ..._200,
            ..._215,
            ..._231,
            ..._250,
            ..._267
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
            ..._201,
            ..._216,
            ..._232,
            ..._251,
            ..._268
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
                ..._233,
                ..._252
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
            ..._202,
            ..._217,
            ..._269
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
            ..._203,
            ..._218,
            ..._234,
            ..._253,
            ..._270
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let evidence;
    (function (evidence) {
        evidence.v1beta1 = {
            ..._49,
            ..._50,
            ..._51,
            ..._52,
            ..._204,
            ..._219,
            ..._235,
            ..._254,
            ..._271
        };
    })(evidence = cosmos.evidence || (cosmos.evidence = {}));
    let feegrant;
    (function (feegrant) {
        feegrant.v1beta1 = {
            ..._53,
            ..._54,
            ..._55,
            ..._56,
            ..._205,
            ..._220,
            ..._236,
            ..._255,
            ..._272
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
            ..._206,
            ..._221,
            ..._237,
            ..._256,
            ..._273
        };
        gov.v1beta1 = {
            ..._62,
            ..._63,
            ..._64,
            ..._65,
            ..._207,
            ..._222,
            ..._238,
            ..._257,
            ..._274
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
            ..._208,
            ..._223,
            ..._239,
            ..._258,
            ..._275
        };
    })(group = cosmos.group || (cosmos.group = {}));
    let ics23;
    (function (ics23) {
        ics23.v1 = {
            ..._71
        };
    })(ics23 = cosmos.ics23 || (cosmos.ics23 = {}));
    let mint;
    (function (mint) {
        mint.v1beta1 = {
            ..._72,
            ..._73,
            ..._74,
            ..._240,
            ..._259
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let msg;
    (function (msg) {
        msg.v1 = {
            ..._75
        };
    })(msg = cosmos.msg || (cosmos.msg = {}));
    let nft;
    (function (nft) {
        nft.v1beta1 = {
            ..._76,
            ..._77,
            ..._78,
            ..._79,
            ..._80,
            ..._209,
            ..._224,
            ..._241,
            ..._260,
            ..._276
        };
    })(nft = cosmos.nft || (cosmos.nft = {}));
    let orm;
    (function (orm) {
        orm.v1 = {
            ..._81
        };
        orm.v1alpha1 = {
            ..._82
        };
    })(orm = cosmos.orm || (cosmos.orm = {}));
    let params;
    (function (params) {
        params.v1beta1 = {
            ..._83,
            ..._84,
            ..._85,
            ..._242,
            ..._261
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let slashing;
    (function (slashing) {
        slashing.v1beta1 = {
            ..._86,
            ..._87,
            ..._88,
            ..._89,
            ..._210,
            ..._225,
            ..._243,
            ..._262,
            ..._277
        };
    })(slashing = cosmos.slashing || (cosmos.slashing = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._90,
            ..._91,
            ..._92,
            ..._93,
            ..._94,
            ..._211,
            ..._226,
            ..._244,
            ..._263,
            ..._278
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._95
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._96,
            ..._97,
            ..._245,
            ..._264
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._98,
            ..._99,
            ..._100,
            ..._212,
            ..._227,
            ..._246,
            ..._265,
            ..._279
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        vesting.v1beta1 = {
            ..._101,
            ..._102,
            ..._213,
            ..._228,
            ..._280
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._345,
        ..._346,
        ..._347
    };
})(cosmos || (cosmos = {}));
