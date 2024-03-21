const json = require('./anjay.json')

const asu = []

for (each of json) {
    if (each.protocol === 'socks5') {
        asu.push(each)
    }
}

const template = []

for (each of asu) {
    let username = each.username === null ? '' : username
    let password = each.password === null ? '' : password
    template.push(`socks5://${username}:${password}@${each.host}:${each.port}`)
}

console.log(template)

