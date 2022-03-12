const { writeFileSync, existsSync, appendFileSync } = require('fs')
const { join } = require('path')
module.exports = {
    save(filename, string) {
        path = join(__dirname, 'tmp', `${filename}.log`)
        if (existsSync(path)) {
            appendFileSync(path, string)
        } else {
            writeFileSync(path, string + '\n\r')
        }
    }
}