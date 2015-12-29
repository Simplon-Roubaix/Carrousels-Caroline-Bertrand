 /////////////////// JS MANUEL /////////////////////////

  var slide = document.getElementById("slide");
  var actualImg = 0;

  function next() {

    tabImg = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg"];

    actualImg++;

    if (actualImg === tabImg.length) {
      actualImg = 0;
    }

    document.getElementById("slide").src = tabImg[actualImg];

  }


 /////////////////// JS AUTOMATIQUE /////////////////////////
 var slideshow = document.getElementById("slideshow");
 var imgActual = 0;
 var myVar = setInterval(function(){ auto() }, 1000);

   imgTab = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg"];


 function auto() {
   imgActual ++;

   if (imgActual === imgTab.length) {
     imgActual = 0;
   }

   document.getElementById("slideshow").src = imgTab[imgActual];

 }
