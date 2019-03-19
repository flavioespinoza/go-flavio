import _ from 'lodash'
import util from 'util'
import 'colors'

const log = {
    babyBlue: (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.blue.dim)
    },
    blue: (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.blue)
    },
    red: (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.red)
    },
    green:  (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.green)
    },
    pink:  (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.red.dim)
    },
    yellow:  (msg: any) => {
        if (typeof msg === 'object') {
			msg = _.toString(msg)
        }
        console.log(`${msg} `.yellow.bold)
    },
    violet:  (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.magenta.dim)
    },
    magenta:  (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.magenta.bold)
    },
    cyan:  (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.cyan)
    }
}

const _log = {
    deep: (data: any) => {
        const options = {
            showHidden: false,
            depth: null,
            colors: true
        }
        const inspect = util.inspect(data, options)
        console.log(inspect)
    },
    info: (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(` Info: ${msg} `.bgBlue)
    },
    error: (msg: any) => {
		if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(` ERROR: ${msg} `.yellow)
    },
    alert: (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(` Alert: ${msg} `.bgYellow)
    },
    warn: (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(` Warn: ${msg} `.bgMagenta)
    },
    blue: (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.bgBlue)
    },
    red: (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.bgRed)
    },
    green: (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.bgGreen)
    },
    pink: (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.bgRed)
    },
    yellow: (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.bgYellow)
    },
    violet: (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.bgMagenta)
    },
    cyan: (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(`${msg} `.bgCyan)
    },
    assert: (item: any, item_name: any) => {
        if (item) {
            let msg = ` SUCCESS: ${item_name} = ${item} `
            console.log(`ASSERT`, msg.bgCyan)
        } else {
            let msg = ` FAIL: ${item_name} = ${item} `
            console.log(`ASSERT`, msg.bgRed)
        }
    },
    timer: (method: any, method_name: any) => {
        console.time(`Timer ${method_name}()`)
        method()
        console.timeEnd(`Timer ${method_name}()`)
    },
    log: log
}

export { log }
export default _log