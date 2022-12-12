let search = "";

const api_key = proccess.env.API_KEY;
let end_point = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${api_key}`;
const img_url = 'https://image.tmdb.org/t/p/w500/';

let results = [];

let inputS = document.getElementById('query');

inputS.addEventListener('keydown', () => {

    search = inputS.value;
    console.log(search)
    end_point = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${api_key}`;
    $.getJSON(end_point, function(data) {
        results = data;
        console.log(results);
        console.log(data);
        setResultToHand();
    })
})


function setResultToHand() {
    $('#drop-search').empty();
    let image_movie = document.getElementById('movie');
    image_movie.src = img_url + results['results'][0]['poster_path'];
    var ul = document.getElementById("drop-search");
    for (let i = 0; i < results['results'].length; i++) {
        var li = document.createElement("li");

        li.onclick = () => {
            console.log(results['results'][i])
            image_movie.src = img_url + results['results'][i]['poster_path'];
            $('#drop-search').empty();
        };
        let img = document.createElement('img');
        img.width = 30
        img.src = img_url + results['results'][i]['poster_path'];
        img.style.marginRight = "15px";
        li.appendChild(img);
        li.appendChild(document.createTextNode(results['results'][i]['original_title']));
        ul.appendChild(li);
    }
}

let canvas = document.getElementById('cnvs');
var element = $("#image-container")[0]; // global variable
var getCanvas; // global variable

function savePic() {
    html2canvas(element).then((canvas) => {
        var img = canvas.toDataURL("image/png", 0.9)
        window.open(img);
        console.log(img)
    });
}

function closeChose() {
    console.log(results['results'][id])
}
