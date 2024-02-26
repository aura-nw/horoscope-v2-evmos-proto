import * as _118 from "./epochs/v1/genesis";
import * as _119 from "./epochs/v1/query";
import * as _120 from "./erc20/v1/erc20";
import * as _121 from "./erc20/v1/events";
import * as _122 from "./erc20/v1/genesis";
import * as _123 from "./erc20/v1/query";
import * as _124 from "./erc20/v1/tx";
import * as _125 from "./incentives/v1/genesis";
import * as _126 from "./incentives/v1/incentives";
import * as _127 from "./inflation/v1/genesis";
import * as _128 from "./inflation/v1/inflation";
import * as _129 from "./inflation/v1/query";
import * as _130 from "./inflation/v1/tx";
import * as _131 from "./revenue/v1/events";
import * as _132 from "./revenue/v1/genesis";
import * as _133 from "./revenue/v1/query";
import * as _134 from "./revenue/v1/revenue";
import * as _135 from "./revenue/v1/tx";
import * as _136 from "./vesting/v1/vesting";
import * as _137 from "./vesting/v2/events";
import * as _138 from "./vesting/v2/query";
import * as _139 from "./vesting/v2/tx";
import * as _140 from "./vesting/v2/vesting";
import * as _291 from "./erc20/v1/tx.amino";
import * as _292 from "./inflation/v1/tx.amino";
import * as _293 from "./revenue/v1/tx.amino";
import * as _294 from "./vesting/v2/tx.amino";
import * as _295 from "./erc20/v1/tx.registry";
import * as _296 from "./inflation/v1/tx.registry";
import * as _297 from "./revenue/v1/tx.registry";
import * as _298 from "./vesting/v2/tx.registry";
import * as _299 from "./epochs/v1/query.lcd";
import * as _300 from "./erc20/v1/query.lcd";
import * as _301 from "./inflation/v1/query.lcd";
import * as _302 from "./revenue/v1/query.lcd";
import * as _303 from "./vesting/v2/query.lcd";
import * as _304 from "./epochs/v1/query.rpc.Query";
import * as _305 from "./erc20/v1/query.rpc.Query";
import * as _306 from "./inflation/v1/query.rpc.Query";
import * as _307 from "./revenue/v1/query.rpc.Query";
import * as _308 from "./vesting/v2/query.rpc.Query";
import * as _309 from "./erc20/v1/tx.rpc.msg";
import * as _310 from "./inflation/v1/tx.rpc.msg";
import * as _311 from "./revenue/v1/tx.rpc.msg";
import * as _312 from "./vesting/v2/tx.rpc.msg";
import * as _351 from "./lcd";
import * as _352 from "./rpc.query";
import * as _353 from "./rpc.tx";
export var evmos;
(function (evmos) {
    let epochs;
    (function (epochs) {
        epochs.v1 = {
            ..._118,
            ..._119,
            ..._299,
            ..._304
        };
    })(epochs = evmos.epochs || (evmos.epochs = {}));
    let erc20;
    (function (erc20) {
        erc20.v1 = {
            ..._120,
            ..._121,
            ..._122,
            ..._123,
            ..._124,
            ..._291,
            ..._295,
            ..._300,
            ..._305,
            ..._309
        };
    })(erc20 = evmos.erc20 || (evmos.erc20 = {}));
    let incentives;
    (function (incentives) {
        incentives.v1 = {
            ..._125,
            ..._126
        };
    })(incentives = evmos.incentives || (evmos.incentives = {}));
    let inflation;
    (function (inflation) {
        inflation.v1 = {
            ..._127,
            ..._128,
            ..._129,
            ..._130,
            ..._292,
            ..._296,
            ..._301,
            ..._306,
            ..._310
        };
    })(inflation = evmos.inflation || (evmos.inflation = {}));
    let revenue;
    (function (revenue) {
        revenue.v1 = {
            ..._131,
            ..._132,
            ..._133,
            ..._134,
            ..._135,
            ..._293,
            ..._297,
            ..._302,
            ..._307,
            ..._311
        };
    })(revenue = evmos.revenue || (evmos.revenue = {}));
    let vesting;
    (function (vesting) {
        vesting.v1 = {
            ..._136
        };
        vesting.v2 = {
            ..._137,
            ..._138,
            ..._139,
            ..._140,
            ..._294,
            ..._298,
            ..._303,
            ..._308,
            ..._312
        };
    })(vesting = evmos.vesting || (evmos.vesting = {}));
    evmos.ClientFactory = {
        ..._351,
        ..._352,
        ..._353
    };
})(evmos || (evmos = {}));
