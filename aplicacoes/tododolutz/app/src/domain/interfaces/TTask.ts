export type TTask = {
    title: string
    description: string
    created_at: Date
    deleted_at?: Date
    completed_at?: Date
    due_date?: Date
    done: boolean
}