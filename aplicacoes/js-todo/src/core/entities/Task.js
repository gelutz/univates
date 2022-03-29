module.exports = {
    id: {
        required: true,
        type: 'number'
    },

    title: {
        required: true,
        type: 'string'
    },

    description: {
        required: false,
        type: 'string'
    },

    due_date: {
        required: false,
        type: 'object'
    },

    done: {
        required: true,
        default: () => false,
        type: 'boolean'
    },

    created_at: {
        required: true,
        default: () => new Date(),
        type: 'object'
    },

    deleted_at: {
        required: false,
        type: 'object'
    },

    completed_at: {
        required: false,
        type: 'object'
    },
}