const json = require('./proxies (1).json')

const asu = []

for (each of json) {
    if (each.type === 'socks5' && each.country === "United States of America") {
        asu.push(`socks5://${each.ip}:${each.port}`)
    }
}

console.dir(asu, {'maxArrayLength': null})

