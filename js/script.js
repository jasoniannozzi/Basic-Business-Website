var slideInterval = 4500;

function getFigures() {
    return document.getElementById('carousel').getElementsByTagName('figure');
}

function moveForward() {
    var pointer;
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == 'visible') {
            figures[i].className = '';
            pointer = i;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}

function startPlayback() {    
    setTimeout(moveForward, slideInterval);
}

const showResults = function(results) {
    let html = "";
    results.map(function(result) {
      console.log(result.images.original.url);
      html = html + `<img src=${result.images.original.url} />`
    });
    console.log(html);
    $('#results').append(html);
  
  };
  
  const fetchSearchResults = function(searchValue) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=KA4bCwoX66gmvt7ogoGShUai2L59BFaQq=${searchValue}`;
    console.log(url);
    fetch(url)
      .then(function(res) {
        return res.json();
      }).then(function(response) {
        // console.log(response.data);
        showResults(response.data);
      });
  
  }
  
  const bootUp = function() {
    
    $('#search').on('click', function(event){
      let searchValue = $('#search-box').val();
      console.log(searchValue);
      fetchSearchResults(searchValue);
  
    });
  
  
  }
  
  $(bootUp) 



