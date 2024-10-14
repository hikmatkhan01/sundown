
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

/*var a = document.querySelector('#elem1');
let b = a.getAttribute('data-image1');
console.log(b);*/


/*var elemCon = document.querySelector('#elem_container');
var fixed = document.querySelector('#fixed_container');
elemCon.addEventListener('mouseenter',function(){
   fixed.style.display ="block"; 
});
elemCon.addEventListener('mouseleave',function(){
    fixed.style.display ="none"; 
 });

 var elem1 = document.querySelector("#elem1");
 elem1.addEventListener('mouseenter', function(){
    var imagee = elem1.getAttribute("data-image1");
    
   console.log(imagee);
    fixed.style.backgroundImage = `url(${imagee})`;
    fixed.style.display = 'block';
 });*/

 /*
var elemCon = document.querySelector('#elem_container');
var fixed = document.querySelector('#fixed_container');

// Show the fixed container on hover over elem_container
elemCon.addEventListener('mouseenter', function () {
   fixed.style.display = "block"; 
});

elemCon.addEventListener('mouseleave', function () {
   fixed.style.display = "none"; 
});

*/

/*
// Target the correct element and data attribute for elem1
var elem1 = document.querySelector("#elem1");
elem1.addEventListener('mouseenter', function () {
    var imagee = elem1.getAttribute("data-image1");  // Use data-image3 here
    console.log(imagee);  // Log the correct value to check if it's working

    fixed.style.backgroundImage = `url(${imagee})`;  // Set the background image
    fixed.style.display = 'block';  // Ensure the container is displayed
});

// Target the correct element and data attribute for elem1
var elem2 = document.querySelector("#elem2");
elem2.addEventListener('mouseenter', function () {
    var imagee = elem2.getAttribute("data-image2");  // Use data-image3 here
    console.log(imagee);  // Log the correct value to check if it's working

    fixed.style.backgroundImage = `url(${imagee})`;  // Set the background image
    fixed.style.display = 'block';  // Ensure the container is displayed
});

// Target the correct element and data attribute for elem1
var elem3 = document.querySelector("#elem3");
elem3.addEventListener('mouseenter', function () {
    var imagee = elem3.getAttribute("data-image3");  // Use data-image3 here
    console.log(imagee);  // Log the correct value to check if it's working

    fixed.style.backgroundImage = `url(${imagee})`;  // Set the background image
    fixed.style.display = 'block';  // Ensure the container is displayed
});

// Target the correct element and data attribute for elem1
var elem4 = document.querySelector("#elem4");
elem4.addEventListener('mouseenter', function () {
    var imagee = elem4.getAttribute("data-image4");  // Use data-image3 here
    console.log(imagee);  // Log the correct value to check if it's working

    fixed.style.backgroundImage = `url(${imagee})`;  // Set the background image
    fixed.style.display = 'block';  // Ensure the container is displayed
});

// Target the correct element and data attribute for elem1
var elem5 = document.querySelector("#elem5");
elem5.addEventListener('mouseenter', function () {
    var imagee = elem5.getAttribute("data-image5");  // Use data-image3 here
    console.log(imagee);  // Log the correct value to check if it's working

    fixed.style.backgroundImage = `url(${imagee})`;  // Set the background image
    fixed.style.display = 'block';  // Ensure the container is displayed
});

*/


var elemCon = document.querySelector('#elem_container');
var fixed = document.querySelector('#fixed_container');


// Show the fixed container on hover over elem_container
elemCon.addEventListener('mouseenter', function () {
   fixed.style.display = "block"; 
});

elemCon.addEventListener('mouseleave', function () {
   fixed.style.display = "none"; 
});

var elems = document.querySelectorAll('.elem');

elems.forEach(function(elem,index){
    elem.addEventListener('mouseenter', function(){
     var imaAttribute = elem.getAttribute(`data-image${index + 1}`);
     console.log(imaAttribute);  // Log the correct value to check if it's working

     fixed.style.backgroundImage = `url(${imaAttribute})`;  // Set the background image
     fixed.style.display = 'block';  // Ensure the container is displayed
   });
});





