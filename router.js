const { name, version } = require('./package.json');
const express = require('express');
const router = express.Router();

// Load global data managers for resources and users
const users = require('../auth');
const data = require('../data');

/**
 * Returns an absolute path to a view for Pug using process.cwd()
 * !! Only needed for rendering Pug.js files; you may remove this
 * !! function if you don't require it
 *
 * @param {String} view The view to build a path for
 * @returns {String} An absolute path
 */
function getRenderPath(view) {
    return path.join(process.cwd(), name, 'views/', `${view}.pug`);
}

// This path will be located at https://your-ass-domain/dashboard/
router.get('/', (req, res) => res.send(`${Object.keys(data).length} uploads`));

// https://your-ass-domain/dashboard/login
router.get('/login', (req, res) => res.send('Login coming soon!'));

// https://your-ass-domain/dashboard/gallery
// Remember to run `npm i pug` to use res.render
router.get('/gallery', (req, res) => res.render(getRenderPath('gallery'), { uploads: Object.entries(data) }));

// Exports for ass
module.exports = {
    router,
    enabled: true,
    brand: `${name} v${version}`,
    endpoint: '/dashboard'
};
