const ERRORS = {
    'type-mismatch': 'Property type does not match entity\'s type',
    'required-field': 'Field is missing from object',
    'fuck-up': 'You fucked up somewhere'
}

module.exports = class TError extends Error {
    data = {}
    constructor(name, data) {
        super()
        if (!Object.keys(ERRORS).includes(name)) return
        this.message = ERRORS[name]
        this.name = name
        this.data = data
    }
}