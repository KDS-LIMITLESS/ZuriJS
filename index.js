const fetch = require('node-fetch')
const fs = require('fs')

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(text => {
      let data = JSON.stringify(text, null, 2)
      fs.writeFile('result/posts.json', data, function(err){
        if (err) throw err;
        console.log("saved")
      });
    });
 