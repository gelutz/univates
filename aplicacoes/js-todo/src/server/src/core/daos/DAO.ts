const TError = require("../../interface/errors/TError")

module.exports = class DAO {
    fields = {}
    id
    Entity

    _fields() {
        return Object.entries(this.fields).forEach
    }

    create({ ...data }) {
        let newObj = {}
        this._fields(([key, prop]) => {
            let value = data[key]
            if (typeof value == 'undefined' && prop.default) {
                value = prop.default()
            }

            newObj = {
                ...newObj,
                [key]: value
            }
        })

        return new this.Entity(newObj)
    }

    insert({ ...object }) {
        const inserted = {
            ...this._fields(([key, prop]) => {
                let value = object[key]

                if (typeof value == 'undefined' && prop.default) {
                    value = prop.default()
                }

                if (typeof value == 'undefined' && prop.required) {
                    throw new TError('required-field', { data, type: prop.type })
                }

                if (typeof value != 'undefined' && typeof value != prop.type) {
                    throw new TError('type-mismatch', { value, field: key, type: prop.type })
                }

                return key, value
            })
        }
        const entity = new this.Entity(insert)
        // return db.insert(entity)
    }
}