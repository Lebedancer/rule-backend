var express = require('express');
var fs = require('fs');
var path = require('path');

/* eslint-disable no-console */

const port = 3001;
const app = express();

app.get('/get', function(req, res) {
    setTimeout(function() {
        res.json({
            Id: 0,
            Name: 'Rule',
            OperationType: 0,
            Keywords: [],
            Kontragents: [
                { Id: 1, Name: 'Kontragent1' },
                { Id: 2, Name: 'Kontragent2' },
                { Id: 3, Name: 'Kontragent3' },
                { Id: 4, Name: 'Kontragent4' }
            ],
            KontragentUsageMode: 0,
            SettlementAccounts: [],
            SettlementAccountUsageMode: 0
        });
    }, 1000);
});

app.get('/rule', function(req, res) {
    setTimeout(function() {
        res.json(getFile());
    }, 1000);
});

app.post('/save', function(req, res) {
    setTimeout(function() {
        res.sendStatus(200);
    }, 1000);
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Start at ' + port);
    }
});

function getFile() {
    return JSON.parse(fs.readFileSync('db/file.json', 'utf8'));
}
