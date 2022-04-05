const { readFile } = require("fs/promises")

module.exports = {
    async parseHTML(path, fields, data) {
        let html = (await readFile(path)).toString()

        if (fields) {
            fields.forEach((field) => {
                let v = ''
                if (typeof data[field] != 'undefined') {
                    v = data[field]

                    if (field == 'id') {
                        v = `${field}-${data[field]}`
                    }
                }
                html = html.replace(new RegExp(`\\$\\$${key}`, 'g'), value)
            })
        }

        return html
    }
}