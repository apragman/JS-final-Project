// Bring in that 'ol API info
// Set up the images, choose 2 at random, display basic info in box 2

// if i cant do a collage like i want, then just use blendMode

// information thanks to API at Cleveland Museum of Art https://openaccess-api.clevelandart.org/
let image1= document.querySelector(".image1")
let image2= document.querySelector(".image2")
let title= document.querySelector(".title")
let culture= document.querySelector(".culture")
let title2= document.querySelector(".title2")
let culture2= document.querySelector(".culture2")

document.addEventListener("DOMContentLoaded", (event) => {
console.log("ready")
//API base url
let endpoint = "./data.json";
let find1=true;
let find2= true;
let dataNew=[];
let data=
  // console.log(endpoint); 
  fetch(endpoint)
  .then(response => response.json())
  .then(data => { 
    
    for(i=0;i<data.length;i++){
      if(data[i].images){
        dataNew.push(data[i]);
      }
    }
    image1Index=Math.floor(Math.random()*(dataNew.length));
    image1url=dataNew[image1Index].images.web.url
    image1.src=image1url;

    title.innerHTML=dataNew[image1Index].title;
    culture.innerHTML=dataNew[image1Index].culture;

    image2Index=Math.floor(Math.random()*(dataNew.length));
    image2url=dataNew[image2Index].images.web.url
    image2.src=image2url;

    title2.innerHTML=dataNew[image2Index].title;
    culture2.innerHTML=dataNew[image2Index].culture;

  });
})

                          