
export class Component {
    static create(tagName: string, options?: ElementCreationOptions): HTMLElement {
        return document.createElement(tagName, options)
    }
}