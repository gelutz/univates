const TError = require("../errors/TError")

module.exports = class DAO {
    fields = {}
    create({ ...data }) {
        let newObj = {}
        Object.entries(this.fields).forEach(([key, prop]) => {
            let value = data[key]
            if (typeof value == 'undefined' && prop.default) {
                value = prop.default()
            }

            if (typeof value == 'undefined' && prop.required) {
                throw new TError('required-field', { data, type: prop.type })
            }

            if (typeof value != 'undefined' && typeof value != prop.type) {
                throw new TError('type-mismatch', { value, field: key, type: prop.type })
            }

            newObj = {
                ...newObj,
                [key]: value
            }
        })
        return newObj
    }
}