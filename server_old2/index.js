import path from 'path';
import fs from 'fs';
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import App from "..";

// const test = require('../pwa/src/app/index')

const express = require('express');

const app = express();
const PORT = 8089;

const router = express.Router();

const serverRenderer = (req, res, next) => {
    console.log('DIR', __dirname, ' BUIDL ', path.resolve(__dirname, '..', 'pwa/Magento_Theme/web'));
    // const test = express.static(path.resolve(__dirname, '..', 'pwa/Magento_Theme/web'), { maxAge: '30d' });
    // console.log('-->', test);
    fs.readdir(path.resolve('../pwa/Magento_Theme/web'), (err, files) => {
        files.forEach(file => {
          console.log(file);
        });
      });
    fs.readFile(path.resolve('../pwa/Magento_Theme/templates/root.phtml'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('An error occurred');
        }
        return res.send(
            data.replace(
                '<div id="root"></div>',
                '<div id="root"></div>'
                // `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
            )
        );
    });
};


router.use('^/$', serverRenderer);

router.use('/static/frontend/Scandiweb/pwa/en_US/Magento_Theme/',
    express.static(path.resolve('../pwa/Magento_Theme/web'), { maxAge: '30d' }));

// tell the app to use the above rules
app.use(router);

// app.use(express.static('./build'))
app.listen(PORT, () => {
    console.log(`SSR running on port ${PORT}`);
});
