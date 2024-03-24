const apiUrl = require('./proxies (1).json')

const ip = []

const ipEarnings = apiUrl.data.earnings['2024-03-22']

for (each in ipEarnings) {
    if (ipEarnings[each] !== 0) {
        ip.push(each)
        console.log(ipEarnings[each])
    }
}

console.log(ip)