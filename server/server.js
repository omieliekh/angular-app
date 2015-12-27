var
    ROOT_DIR = __dirname+'/../client/',
    SERVER_ROOT_DIR = __dirname+'/../server/',
    fs = require('fs'),
    express = require('express'),
    app = express(),
    server = require('http').createServer(app);

app.use('/app', express.static(ROOT_DIR + '/app'));
app.use('/css', express.static(ROOT_DIR + '/css'));
app.use('/node_modules', express.static(ROOT_DIR + '/node_modules'));
app.use('/images', express.static(ROOT_DIR + '/images'));

var paths = {
    '/*': function(req, res){
        var
            files = JSON.parse( fs.readFileSync(ROOT_DIR + 'files.json', 'utf8') ),
            cont = fs.readFileSync(ROOT_DIR + 'index.html', 'utf8');

        files = files.map(function (item) {
            return '<script src="' + item + '"></script>';
        });

        cont = cont.replace('</body>', '    '+files.join('\n    ')+'\n</body>');

        res.send(cont);
    },
    '/slide-list': function (req, res) {
        var cont = fs.readFileSync(SERVER_ROOT_DIR + '/mocks/slide-list.json', 'utf8');
        res.send(cont);
    }
};

app.get('/*', function(req, res){
    (paths[req.path] || paths['/*'])(req, res);
});

server.listen(8333);
//app.use(express.static(ROOT_DIR));
console.log('Server is running under localhost:8333 ...');