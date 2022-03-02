const { writeFileSync } = require('fs')

module.exports = {
    saveToFile(filename, string) {
        writeFileSync(`${filename}.log`, string)
    }
}