const tvshows = [
    { 
        name: "The Traitors",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/499/1248534.jpg",
    },
    {
        name: "Bodies",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/482/1205619.jpg",
    },
    {
        name: "The English",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/444/1112100.jpg",
    }
];

const express = require("express");
const app = express();

app.get("/", (req, res)=>{

    let html = "<h2>My TV Shows</h2>";

    tvshows.forEach((tv)=>{ 
        html += `<div>
                    <p>${tv.name}</p>
                    <img src="${tv.image}" alt="${tv.name}" style="max-width: 200px;">
                 </div>`;
    });

    res.send(`${html}`);

});

app.listen(process.env.PORT || 3005);

console.log(`Server is listening at http://localhost:3005/`);
