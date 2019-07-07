const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
var fs =  require('fs');


app.prepare()
    .then(() => {
        const server = express()

        server.get('/', function (req, res) {
            res.end('This is Server');
        });

        server.get('/all', function (req, res) {
            console.log('My call /all');
            var readData = fs.readFileSync('landing.json');
            var words = JSON.parse(readData);
            console.log(words);
            res.json(words);
        });

        server.get('/favorite', function (req, res) {
            console.log('My call /favorite');
            var readData = fs.readFileSync('favorite.json');
            var words = JSON.parse(readData);
            console.log(words);
            res.json(words);
        });

        server.get('/add', function (req, res) {
            console.log('My call /add params' ,req.query.name );
            const data = req.query.name;
            const result = addFavoriteItem(data);            
            res.end("success")       
        });

        server.get('/delete', function (req, res) {
            console.log('My call /delete params' ,req.query.name );
            const data = req.query.name;
            const result = deleteFavoriteItem(data);
            res.end("success");
           
        });
    

        server.listen(8080, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:8080')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    });


    function addFavoriteItem(name) {
        var allData = fs.readFileSync('landing.json');
        var allJsonArray = JSON.parse(allData);
        var favData = fs.readFileSync('favorite.json');
        var favJsonArray = JSON.parse(favData);

        console.log("called function addFavoriteItem" ,name );   
        for (var key in allJsonArray) {
            if (allJsonArray.hasOwnProperty(key) && allJsonArray[key].username==name ) {
                  console.log(allJsonArray[key].username);
                  favJsonArray.push(allJsonArray[key]);
                  break;
            }
         }
         var data = JSON.stringify(favJsonArray , null ,2);
         fs.writeFile('favorite.json',data,(err)=>{
            console.log('all set.');
        });
        return "success";
    }

    function deleteFavoriteItem(name) {
        console.log("called function deleteFavoriteItem" ,name ); 
        var favData = fs.readFileSync('favorite.json');
        var favJsonArray = JSON.parse(favData);  
        for (var key in favJsonArray) {
            if (favJsonArray.hasOwnProperty(key) && favJsonArray[key].username==name ) {
                  console.log(favJsonArray[key].username)
                  favJsonArray.splice(key,1);
                  break;
            }
         }
         var data = JSON.stringify(favJsonArray , null ,2);
         fs.writeFile('favorite.json',data,(err)=>{
            console.log('deleted.');
        });
        return "success";
    }
   

















