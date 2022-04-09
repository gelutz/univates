type Field = {
    required: boolean
    type: 'string' | 'string' | 'object' | 'boolean' | 'number'
    default?: () => Date | boolean
}

export class Task {
    id: Field = {
        required: true,
        type: 'number'
    }

    title: Field = {
        required: true,
        type: 'string'
    }

    description: Field = {
        required: false,
        type: 'string'
    }

    due_date: Field = {
        required: false,
        type: 'object'
    }

    done: Field = {
        required: true,
        default: () => false,
        type: 'boolean'
    }

    created_at: Field = {
        required: true,
        default: () => new Date(),
        type: 'object'
    }

    deleted_at: Field = {
        required: false,
        type: 'object'
    }

    completed_at = {
        required: false,
        type: 'object'
    }
}