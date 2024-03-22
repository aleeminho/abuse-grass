const json = require('./proxies_pretty.json')

const asu = []

for (each of json) {
    if (each.username === null && each.password === null) {
        asu.push(`${each.protocol}://${each.host}:${each.port}`)
    }
}

console.dir(asu, {'maxArrayLength': null})