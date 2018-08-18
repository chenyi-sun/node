var index = require('./actions/index.js');
var routers = [
        {
            name: '/index',
            fun: index
        },
        {
            name: '/name',
            fun: 'name'
        }
]

module.exports = routers;

