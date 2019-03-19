import _ from 'lodash';
import util from 'util';
import 'colors';
const log = {
    babyBlue: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.blue.dim);
    },
    blue: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.blue);
    },
    red: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.red);
    },
    green: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.green);
    },
    pink: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.red.dim);
    },
    yellow: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.yellow.bold);
    },
    violet: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.magenta.dim);
    },
    magenta: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.magenta.bold);
    },
    cyan: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.cyan);
    }
};
const _log = {
    deep: (data) => {
        const options = {
            showHidden: false,
            depth: null,
            colors: true
        };
        const inspect = util.inspect(data, options);
        console.log(inspect);
    },
    info: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(` Info: ${msg} `.bgBlue);
    },
    error: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(` ERROR: ${msg} `.yellow);
    },
    alert: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(` Alert: ${msg} `.bgYellow);
    },
    warn: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(` Warn: ${msg} `.bgMagenta);
    },
    blue: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.bgBlue);
    },
    red: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.bgRed);
    },
    green: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.bgGreen);
    },
    pink: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.bgRed);
    },
    yellow: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.bgYellow);
    },
    violet: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.bgMagenta);
    },
    cyan: (msg) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg);
        }
        console.log(`${msg} `.bgCyan);
    },
    assert: (item, item_name) => {
        if (item) {
            let msg = ` SUCCESS: ${item_name} = ${item} `;
            console.log(`ASSERT`, msg.bgCyan);
        }
        else {
            let msg = ` FAIL: ${item_name} = ${item} `;
            console.log(`ASSERT`, msg.bgRed);
        }
    },
    timer: (method, method_name) => {
        console.time(`Timer ${method_name}()`);
        method();
        console.timeEnd(`Timer ${method_name}()`);
    },
    log: log
};
export { log };
export default _log;
//# sourceMappingURL=index.js.map