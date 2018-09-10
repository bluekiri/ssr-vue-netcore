const express = require('express');
const RenderEngine = require('./renderEngine');

const app = express();


app.use(express.static('dist/public'));

app.get('/', getPage);
app.get('/:pageName', getPage);


const port = process.env.port || 3000;
app.listen(port, onServerReady);


function onServerReady(err) {
    if (err) {
        console.log('something bad happened', err);
    } else {
        console.log(`server is listening on ${port}`);
    }
}


function getPage(req, res) {
    const page = req.params.pageName || 'home';
    const data = {
        title: 'hola desde express Debbie',
        meta: '<meta number="1000">',
        page
    };
    const html = RenderEngine().Render(data);
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
}
