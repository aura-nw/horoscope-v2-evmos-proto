import * as _2 from "./accesscontrol_x/genesis";
import * as _3 from "./accesscontrol_x/query";
import * as _4 from "./accesscontrol_x/tx";
import * as _5 from "./accesscontrol_x/gov";
import * as _6 from "./accesscontrol/accesscontrol";
import * as _7 from "./accesscontrol/constants";
import * as _8 from "./accesscontrol/legacy";
import * as _9 from "./app/v1alpha1/config";
import * as _10 from "./app/v1alpha1/module";
import * as _11 from "./app/v1alpha1/query";
import * as _12 from "./auth/v1beta1/auth";
import * as _13 from "./auth/v1beta1/genesis";
import * as _14 from "./auth/v1beta1/query";
import * as _15 from "./authz/v1beta1/authz";
import * as _16 from "./authz/v1beta1/event";
import * as _17 from "./authz/v1beta1/genesis";
import * as _18 from "./authz/v1beta1/query";
import * as _19 from "./authz/v1beta1/tx";
import * as _20 from "./bank/v1beta1/authz";
import * as _21 from "./bank/v1beta1/bank";
import * as _22 from "./bank/v1beta1/genesis";
import * as _23 from "./bank/v1beta1/query";
import * as _24 from "./bank/v1beta1/tx";
import * as _25 from "./base/abci/v1beta1/abci";
import * as _26 from "./base/kv/v1beta1/kv";
import * as _27 from "./base/query/v1beta1/pagination";
import * as _28 from "./base/reflection/v1beta1/reflection";
import * as _29 from "./base/reflection/v2alpha1/reflection";
import * as _30 from "./base/snapshots/v1beta1/snapshot";
import * as _31 from "./base/store/v1beta1/commit_info";
import * as _32 from "./base/store/v1beta1/listening";
import * as _33 from "./base/tendermint/v1beta1/query";
import * as _34 from "./base/v1beta1/coin";
import * as _35 from "./capability/v1beta1/capability";
import * as _36 from "./capability/v1beta1/genesis";
import * as _37 from "./crisis/v1beta1/genesis";
import * as _38 from "./crisis/v1beta1/tx";
import * as _39 from "./crypto/ed25519/keys";
import * as _40 from "./crypto/hd/v1/hd";
import * as _41 from "./crypto/keyring/v1/record";
import * as _42 from "./crypto/multisig/keys";
import * as _43 from "./crypto/secp256k1/keys";
import * as _44 from "./crypto/secp256r1/keys";
import * as _45 from "./crypto/sr25519/keys";
import * as _46 from "./distribution/v1beta1/distribution";
import * as _47 from "./distribution/v1beta1/genesis";
import * as _48 from "./distribution/v1beta1/query";
import * as _49 from "./distribution/v1beta1/tx";
import * as _50 from "./evidence/v1beta1/evidence";
import * as _51 from "./evidence/v1beta1/genesis";
import * as _52 from "./evidence/v1beta1/query";
import * as _53 from "./evidence/v1beta1/tx";
import * as _54 from "./feegrant/v1beta1/feegrant";
import * as _55 from "./feegrant/v1beta1/genesis";
import * as _56 from "./feegrant/v1beta1/query";
import * as _57 from "./feegrant/v1beta1/tx";
import * as _58 from "./genutil/v1beta1/genesis";
import * as _59 from "./gov/v1/genesis";
import * as _60 from "./gov/v1/gov";
import * as _61 from "./gov/v1/query";
import * as _62 from "./gov/v1/tx";
import * as _63 from "./gov/v1beta1/genesis";
import * as _64 from "./gov/v1beta1/gov";
import * as _65 from "./gov/v1beta1/query";
import * as _66 from "./gov/v1beta1/tx";
import * as _67 from "./group/v1/events";
import * as _68 from "./group/v1/genesis";
import * as _69 from "./group/v1/query";
import * as _70 from "./group/v1/tx";
import * as _71 from "./group/v1/types";
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
import * as _264 from "./accesscontrol_x/tx.amino";
import * as _265 from "./authz/v1beta1/tx.amino";
import * as _266 from "./bank/v1beta1/tx.amino";
import * as _267 from "./crisis/v1beta1/tx.amino";
import * as _268 from "./distribution/v1beta1/tx.amino";
import * as _269 from "./evidence/v1beta1/tx.amino";
import * as _270 from "./feegrant/v1beta1/tx.amino";
import * as _271 from "./gov/v1/tx.amino";
import * as _272 from "./gov/v1beta1/tx.amino";
import * as _273 from "./group/v1/tx.amino";
import * as _274 from "./nft/v1beta1/tx.amino";
import * as _275 from "./slashing/v1beta1/tx.amino";
import * as _276 from "./staking/v1beta1/tx.amino";
import * as _277 from "./upgrade/v1beta1/tx.amino";
import * as _278 from "./vesting/v1beta1/tx.amino";
import * as _279 from "./accesscontrol_x/tx.registry";
import * as _280 from "./authz/v1beta1/tx.registry";
import * as _281 from "./bank/v1beta1/tx.registry";
import * as _282 from "./crisis/v1beta1/tx.registry";
import * as _283 from "./distribution/v1beta1/tx.registry";
import * as _284 from "./evidence/v1beta1/tx.registry";
import * as _285 from "./feegrant/v1beta1/tx.registry";
import * as _286 from "./gov/v1/tx.registry";
import * as _287 from "./gov/v1beta1/tx.registry";
import * as _288 from "./group/v1/tx.registry";
import * as _289 from "./nft/v1beta1/tx.registry";
import * as _290 from "./slashing/v1beta1/tx.registry";
import * as _291 from "./staking/v1beta1/tx.registry";
import * as _292 from "./upgrade/v1beta1/tx.registry";
import * as _293 from "./vesting/v1beta1/tx.registry";
import * as _294 from "./accesscontrol_x/query.lcd";
import * as _295 from "./auth/v1beta1/query.lcd";
import * as _296 from "./authz/v1beta1/query.lcd";
import * as _297 from "./bank/v1beta1/query.lcd";
import * as _298 from "./base/tendermint/v1beta1/query.lcd";
import * as _299 from "./distribution/v1beta1/query.lcd";
import * as _300 from "./evidence/v1beta1/query.lcd";
import * as _301 from "./feegrant/v1beta1/query.lcd";
import * as _302 from "./gov/v1/query.lcd";
import * as _303 from "./gov/v1beta1/query.lcd";
import * as _304 from "./group/v1/query.lcd";
import * as _305 from "./mint/v1beta1/query.lcd";
import * as _306 from "./nft/v1beta1/query.lcd";
import * as _307 from "./params/v1beta1/query.lcd";
import * as _308 from "./slashing/v1beta1/query.lcd";
import * as _309 from "./staking/v1beta1/query.lcd";
import * as _310 from "./tx/v1beta1/service.lcd";
import * as _311 from "./upgrade/v1beta1/query.lcd";
import * as _312 from "./accesscontrol_x/query.rpc.Query";
import * as _313 from "./app/v1alpha1/query.rpc.Query";
import * as _314 from "./auth/v1beta1/query.rpc.Query";
import * as _315 from "./authz/v1beta1/query.rpc.Query";
import * as _316 from "./bank/v1beta1/query.rpc.Query";
import * as _317 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _318 from "./distribution/v1beta1/query.rpc.Query";
import * as _319 from "./evidence/v1beta1/query.rpc.Query";
import * as _320 from "./feegrant/v1beta1/query.rpc.Query";
import * as _321 from "./gov/v1/query.rpc.Query";
import * as _322 from "./gov/v1beta1/query.rpc.Query";
import * as _323 from "./group/v1/query.rpc.Query";
import * as _324 from "./mint/v1beta1/query.rpc.Query";
import * as _325 from "./nft/v1beta1/query.rpc.Query";
import * as _326 from "./params/v1beta1/query.rpc.Query";
import * as _327 from "./slashing/v1beta1/query.rpc.Query";
import * as _328 from "./staking/v1beta1/query.rpc.Query";
import * as _329 from "./tx/v1beta1/service.rpc.Service";
import * as _330 from "./upgrade/v1beta1/query.rpc.Query";
import * as _331 from "./accesscontrol_x/tx.rpc.msg";
import * as _332 from "./authz/v1beta1/tx.rpc.msg";
import * as _333 from "./bank/v1beta1/tx.rpc.msg";
import * as _334 from "./crisis/v1beta1/tx.rpc.msg";
import * as _335 from "./distribution/v1beta1/tx.rpc.msg";
import * as _336 from "./evidence/v1beta1/tx.rpc.msg";
import * as _337 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _338 from "./gov/v1/tx.rpc.msg";
import * as _339 from "./gov/v1beta1/tx.rpc.msg";
import * as _340 from "./group/v1/tx.rpc.msg";
import * as _341 from "./nft/v1beta1/tx.rpc.msg";
import * as _342 from "./slashing/v1beta1/tx.rpc.msg";
import * as _343 from "./staking/v1beta1/tx.rpc.msg";
import * as _344 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _345 from "./vesting/v1beta1/tx.rpc.msg";
import * as _442 from "./lcd";
import * as _443 from "./rpc.query";
import * as _444 from "./rpc.tx";
export namespace cosmos {
  export namespace accesscontrol_x {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._264,
      ..._279,
      ..._294,
      ..._312,
      ..._331
    };
  }
  export namespace accesscontrol {
    export const v1beta1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._8
    };
  }
  export namespace app {
    export const v1alpha1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._313
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._295,
      ..._314
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._265,
      ..._280,
      ..._296,
      ..._315,
      ..._332
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._266,
      ..._281,
      ..._297,
      ..._316,
      ..._333
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._25
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._26
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._27
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._28
      };
      export const v2alpha1 = {
        ..._29
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._30
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._31,
        ..._32
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._33,
        ..._298,
        ..._317
      };
    }
    export const v1beta1 = {
      ..._34
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._35,
      ..._36
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._37,
      ..._38,
      ..._267,
      ..._282,
      ..._334
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._39
    };
    export namespace hd {
      export const v1 = {
        ..._40
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._41
      };
    }
    export const multisig = {
      ..._42
    };
    export const secp256k1 = {
      ..._43
    };
    export const secp256r1 = {
      ..._44
    };
    export const sr25519 = {
      ..._45
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._268,
      ..._283,
      ..._299,
      ..._318,
      ..._335
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._269,
      ..._284,
      ..._300,
      ..._319,
      ..._336
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._270,
      ..._285,
      ..._301,
      ..._320,
      ..._337
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._58
    };
  }
  export namespace gov {
    export const v1 = {
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._271,
      ..._286,
      ..._302,
      ..._321,
      ..._338
    };
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._272,
      ..._287,
      ..._303,
      ..._322,
      ..._339
    };
  }
  export namespace group {
    export const v1 = {
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._273,
      ..._288,
      ..._304,
      ..._323,
      ..._340
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._305,
      ..._324
    };
  }
  export namespace msg {
    export const v1 = {
      ..._75
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._274,
      ..._289,
      ..._306,
      ..._325,
      ..._341
    };
  }
  export namespace orm {
    export const v1 = {
      ..._81
    };
    export const v1alpha1 = {
      ..._82
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._85,
      ..._307,
      ..._326
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._275,
      ..._290,
      ..._308,
      ..._327,
      ..._342
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._276,
      ..._291,
      ..._309,
      ..._328,
      ..._343
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._95
      };
    }
    export const v1beta1 = {
      ..._96,
      ..._97,
      ..._310,
      ..._329
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._98,
      ..._99,
      ..._100,
      ..._277,
      ..._292,
      ..._311,
      ..._330,
      ..._344
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._101,
      ..._102,
      ..._278,
      ..._293,
      ..._345
    };
  }
  export const ClientFactory = {
    ..._442,
    ..._443,
    ..._444
  };
}