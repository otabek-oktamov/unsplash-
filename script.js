const input = document.getElementById("input");
const list = document.getElementsByClassName("grid")[0];



input.addEventListener("keydown", function(event) {
  if (event.key == "Enter")
    loadImg();
});

function loadImg(){

  removeImages();
  const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=21&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

  fetch(url)

  .then(response => {
      if(response.ok)
        return response.json();
      else
        console.log(response.status);
  })

  .then(data => { 
    createImagesArray(data);
  });    
}

function createImagesArray(data){
  const imageNodes = [];
  for(let i = 0;i < data.results.length;i++){
    imageNodes[i] = document.createElement("div");
    imageNodes[i].className='col-md-4';
    imageNodes[i].style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
    imageNodes[i].addEventListener("dblclick", function(){
      window.open(data.results[i].links.download, '_blank');
    })
    list.appendChild(imageNodes[i]);
  }
}

function removeImages(){
  list.innerHTML = '';
}


