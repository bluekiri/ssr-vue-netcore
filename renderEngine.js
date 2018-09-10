const fs = require('fs');
const renderer = require('vue-server-renderer').createRenderer({
    template: fs.readFileSync('./src/containers/index.html', 'utf-8')
});
const bundle = require('./dist/private/server.bundle.js');

module.exports = function RenderEngine() {
    function Render(context) {
        let result = '';
        const view = bundle.default(context);

        renderer.renderToString(view, context, (err, html) => {
            if (err) {
                console.log(err);
            }
            result = html;
        });

        return result;
    }
    return {
        Render
    };
};
