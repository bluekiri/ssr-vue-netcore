const RenderEngine = require('./renderEngine');

module.exports = (callback, data) => {
    const re = RenderEngine().Render(data);
    callback(null, re);
};
