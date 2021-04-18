const fetch = require('node-fetch')
const fs = require('fs')

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(text => {
      let data = JSON.stringify(text)
      fs.writeFile('result/post.json', data, function(err){
        if (err) throw err;
        console.log("saved")
      });
    });
 