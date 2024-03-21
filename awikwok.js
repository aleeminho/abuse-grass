const json = require('./anjay.json')

const asu = []

for (each of json) {
    if (each.protocol === 'socks5' && each.geolocation.country.iso_code === "US") {
        asu.push(each)
    }
}

const template = []

for (each of asu) {
    let username = each.username === null ? '' : username
    let password = each.password === null ? '' : password
    template.push(`socks5://${each.host}:${each.port}`)
}

console.log(template)

