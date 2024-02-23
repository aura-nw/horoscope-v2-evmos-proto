import * as _109 from "../dex/asset_list";
import * as _110 from "../dex/contract";
import * as _111 from "../dex/deposit";
import * as _112 from "../dex/enums";
import * as _113 from "../dex/genesis";
import * as _114 from "../dex/gov";
import * as _115 from "../dex/long_book";
import * as _116 from "../dex/match_result";
import * as _117 from "../dex/order_entry";
import * as _118 from "../dex/order";
import * as _119 from "../dex/pair";
import * as _120 from "../dex/params";
import * as _121 from "../dex/price";
import * as _122 from "../dex/query";
import * as _123 from "../dex/settlement";
import * as _124 from "../dex/short_book";
import * as _125 from "../dex/tick_size";
import * as _126 from "../dex/twap";
import * as _127 from "../dex/tx";
import * as _128 from "./seichain/dex/asset_list";
import * as _129 from "./seichain/dex/contract";
import * as _130 from "./seichain/dex/deposit";
import * as _131 from "./seichain/dex/enums";
import * as _132 from "./seichain/dex/genesis";
import * as _133 from "./seichain/dex/gov";
import * as _134 from "./seichain/dex/long_book";
import * as _135 from "./seichain/dex/match_result";
import * as _136 from "./seichain/dex/order_entry";
import * as _137 from "./seichain/dex/order";
import * as _138 from "./seichain/dex/pair";
import * as _139 from "./seichain/dex/params";
import * as _140 from "./seichain/dex/price";
import * as _141 from "./seichain/dex/query";
import * as _142 from "./seichain/dex/settlement";
import * as _143 from "./seichain/dex/short_book";
import * as _144 from "./seichain/dex/tick_size";
import * as _145 from "./seichain/dex/twap";
import * as _146 from "./seichain/dex/tx";
import * as _147 from "../epoch/epoch";
import * as _148 from "../epoch/genesis";
import * as _149 from "../epoch/params";
import * as _150 from "../epoch/query";
import * as _151 from "../epoch/tx";
import * as _152 from "./seichain/epoch/epoch";
import * as _153 from "./seichain/epoch/genesis";
import * as _154 from "./seichain/epoch/params";
import * as _155 from "./seichain/epoch/query";
import * as _156 from "./seichain/epoch/tx";
import * as _157 from "../mint/v1beta1/genesis";
import * as _158 from "../mint/v1beta1/gov";
import * as _159 from "../mint/v1beta1/mint";
import * as _160 from "../mint/v1beta1/query";
import * as _161 from "./seichain/mint/v1beta1/genesis";
import * as _162 from "./seichain/mint/v1beta1/gov";
import * as _163 from "./seichain/mint/v1beta1/mint";
import * as _164 from "./seichain/mint/v1beta1/query";
import * as _165 from "../oracle/genesis";
import * as _166 from "../oracle/oracle";
import * as _167 from "../oracle/query";
import * as _168 from "../oracle/tx";
import * as _169 from "./seichain/oracle/genesis";
import * as _170 from "./seichain/oracle/oracle";
import * as _171 from "./seichain/oracle/query";
import * as _172 from "./seichain/oracle/tx";
import * as _173 from "./seichain/tokenfactory/authorityMetadata";
import * as _174 from "./seichain/tokenfactory/genesis";
import * as _175 from "./seichain/tokenfactory/params";
import * as _176 from "./seichain/tokenfactory/query";
import * as _177 from "./seichain/tokenfactory/tx";
import * as _178 from "../tokenfactory/authorityMetadata";
import * as _179 from "../tokenfactory/genesis";
import * as _180 from "../tokenfactory/params";
import * as _181 from "../tokenfactory/query";
import * as _182 from "../tokenfactory/tx";
import * as _351 from "../dex/tx.amino";
import * as _352 from "../oracle/tx.amino";
import * as _353 from "./seichain/dex/tx.amino";
import * as _354 from "./seichain/oracle/tx.amino";
import * as _355 from "./seichain/tokenfactory/tx.amino";
import * as _356 from "../tokenfactory/tx.amino";
import * as _357 from "../dex/tx.registry";
import * as _358 from "../oracle/tx.registry";
import * as _359 from "./seichain/dex/tx.registry";
import * as _360 from "./seichain/oracle/tx.registry";
import * as _361 from "./seichain/tokenfactory/tx.registry";
import * as _362 from "../tokenfactory/tx.registry";
import * as _363 from "../dex/query.lcd";
import * as _364 from "../epoch/query.lcd";
import * as _365 from "../mint/v1beta1/query.lcd";
import * as _366 from "../oracle/query.lcd";
import * as _367 from "./seichain/dex/query.lcd";
import * as _368 from "./seichain/epoch/query.lcd";
import * as _369 from "./seichain/mint/v1beta1/query.lcd";
import * as _370 from "./seichain/oracle/query.lcd";
import * as _371 from "./seichain/tokenfactory/query.lcd";
import * as _372 from "../tokenfactory/query.lcd";
import * as _373 from "../dex/query.rpc.Query";
import * as _374 from "../epoch/query.rpc.Query";
import * as _375 from "../mint/v1beta1/query.rpc.Query";
import * as _376 from "../oracle/query.rpc.Query";
import * as _377 from "./seichain/dex/query.rpc.Query";
import * as _378 from "./seichain/epoch/query.rpc.Query";
import * as _379 from "./seichain/mint/v1beta1/query.rpc.Query";
import * as _380 from "./seichain/oracle/query.rpc.Query";
import * as _381 from "./seichain/tokenfactory/query.rpc.Query";
import * as _382 from "../tokenfactory/query.rpc.Query";
import * as _383 from "../dex/tx.rpc.msg";
import * as _384 from "../oracle/tx.rpc.msg";
import * as _385 from "./seichain/dex/tx.rpc.msg";
import * as _386 from "./seichain/oracle/tx.rpc.msg";
import * as _387 from "./seichain/tokenfactory/tx.rpc.msg";
import * as _388 from "../tokenfactory/tx.rpc.msg";
import * as _448 from "./lcd";
import * as _449 from "./rpc.query";
import * as _450 from "./rpc.tx";
export namespace seiprotocol {
  export namespace seichain {
    export const dex = {
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._351,
      ..._353,
      ..._357,
      ..._359,
      ..._363,
      ..._367,
      ..._373,
      ..._377,
      ..._383,
      ..._385
    };
    export const epoch = {
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._364,
      ..._368,
      ..._374,
      ..._378
    };
    export const mint = {
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._365,
      ..._369,
      ..._375,
      ..._379
    };
    export const oracle = {
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._352,
      ..._354,
      ..._358,
      ..._360,
      ..._366,
      ..._370,
      ..._376,
      ..._380,
      ..._384,
      ..._386
    };
    export const tokenfactory = {
      ..._173,
      ..._174,
      ..._175,
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._355,
      ..._356,
      ..._361,
      ..._362,
      ..._371,
      ..._372,
      ..._381,
      ..._382,
      ..._387,
      ..._388
    };
  }
  export const ClientFactory = {
    ..._448,
    ..._449,
    ..._450
  };
}