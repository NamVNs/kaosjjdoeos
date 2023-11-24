const express = require('express');
const rate_limit = require('express-rate-limit');
const fs = require('fs');

const app = express();
const ctrls = fs.readdirSync('ctrls');

for (const file of ctrls) {
    const ctrl = require('./ctrls/'+file);

    app[ctrl.method.toLowerCase()](ctrl.path, !ctrl.limit?((req, res, next)=>next()): rate_limit(ctrl.limit), ctrl.handler);
};

app.listen(3000);