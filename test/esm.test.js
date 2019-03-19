import fs from 'fs'
import _ from 'lodash'
import _log from '../src/index'
import { log } from '../src/index'

console.log(_log)

const data = [
    {
        name: 'Ren',
        id: 1,
        preferences: {
            food: 'steak',
            drink: 'bourbon',
            ice_cream: 'soap bar',
            favorite_episode: 'Space Madness',
            hobbies: {
                sports: ['soccer', 'bad mitten'],
                dancing: ['salsa', 'bachata'],
                music: {
                    alternative: ['Pearl Jam', 'Nirvana'],
                    glam_rock: ['Mötley Crüe', 'Poison'],
                    country: ['Johnny Cash', 'George Strait']
                }
            }
        }
    }
]

_log.deep(data)

function do_stuff() {
    let res = []
    for (let i = 0; i < 100000; i++) {
        res.push(i)
    }
    return res
}

log.red('Timer ----------')
_log.timer(do_stuff, 'Do Stuff')
log.blue('Timer ----------')

log.cyan(data)

_log.info('Hello Info!')
_log.warn('Hello Warn!')

const _readFile = fileName => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            const keys = _.keys(err)
            const errorStr = _.toString(err)
            const errorObj = {
                success: false,
                info: errorStr
            }
            _.each(keys, key => {
                errorObj[key] = err[key]
            })
            _log.error(errorObj)
            return
        }
        // Otherwise handle the data
        _log.info(data)
    })
}

_readFile('balls.txt')
_readFile('flavor.txt')

const _timestamp = () => {
    return _.now()
}

log.blue(_timestamp())

log.green('a message')
for (let i = 0; i < 7; i++) {
    log.cyan(`a repeated message: Index is ${i}`)
}
log.green('end')
