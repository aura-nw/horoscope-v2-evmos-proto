import * as _148 from "./abci/types";
import * as _149 from "./crypto/keys";
import * as _150 from "./crypto/proof";
import * as _151 from "./libs/bits/types";
import * as _152 from "./p2p/types";
import * as _153 from "./types/block";
import * as _154 from "./types/evidence";
import * as _155 from "./types/params";
import * as _156 from "./types/types";
import * as _157 from "./types/validator";
import * as _158 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._148
    };
    tendermint.crypto = {
        ..._149,
        ..._150
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._151
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._152
    };
    tendermint.types = {
        ..._153,
        ..._154,
        ..._155,
        ..._156,
        ..._157
    };
    tendermint.version = {
        ..._158
    };
})(tendermint || (tendermint = {}));
