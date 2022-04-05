const Component = require("./presentation/components/Component");

const root = Component.parseHTML('index.html').then(html => {
    document.body = html
    const root = document.getElementById('#root')
    console.log(root);
})