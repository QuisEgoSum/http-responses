const fs = require('fs')
const path = require('path')
const httpResponses = require('./responses')


const createAbstractClass = (className) => `
    static ${className} = class ${className} extends HttpResponse {
        constructor(...args) {
            super(...args)
        }
    }`

const createClass = (className, status, message, inheriet) => `
    static ${className} = class ${className} extends ${inheriet} {
        constructor(playload, next) {
            super(${status}, playload || "${message}", next)
        }
    }`


function build() {

    let insert = []

    for (const [abstractСlass, responses] of Object.entries(httpResponses)) {
        insert.push(createAbstractClass(abstractСlass))
        for (const [status, message] of responses) {
            insert.push(createClass(message.split(' ').join('').replace('-', '').replace("'", ''), status, message, 'HttpResponse.' + abstractСlass))
        }
    }

    const file = fs.readFileSync(__dirname + '/pattern.js')

    const content = file.toString('utf-8').split('\n')

    for (let i = 0; i < content.length; i++) {
        if (content[i].trim() === '//insert') {
            content.splice(i, 1, insert.join('\n'))
            fs.writeFileSync(path.resolve(__dirname, '../http-response.js'), content.join('\n'), {encoding: 'utf-8'})
            break
        }
    }
}


build()
