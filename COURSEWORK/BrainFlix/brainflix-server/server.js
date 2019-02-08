const express = require('express');
const videoLinks = require('./videoLinks.json');
const videos = require('./videos');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    next();
});

//*** SETUP ENDPOINTS HERE ****

app.get('/videos', (req, res) => {
    res.json(videoLinks);
})

app.get('/videos/:id', (req, res) => {
    let vidId = Number(req.params.id);

    const vidObj = videos.find(data => data.id === vidId);
    res.json(vidObj);

})

app.post('/videos/:id/comments', (req, res) =>{
    let vidId = Number(req.params.id);
    const vidObj = videos.find(data => data.id === vidId);
    vidObj.comments.push(req.body);

    res.json({msg: 'you successfully posted'});
})

app.listen(8080, () =>{
    console.log('server has started successfully'); //keeping this console msg to show if server is running
})