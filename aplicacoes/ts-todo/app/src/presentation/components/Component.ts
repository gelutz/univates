import { readFile } from "fs/promises"
import { join } from "path"

type Variable = {
    tag: string,
    value: string
}

export class Component {
    static create(tagName: string, options?: ElementCreationOptions): HTMLElement {
        return document.createElement(tagName, options)
    }
    
    static async parseHTML(path: string, variables: [{tag:string, value: string}] ): Promise<string> {
        const html = (await readFile(path)).toString()
        variables.forEach(v => {
            html.replace(v.tag, v.value)
        });

        return html.toString()
    }

}