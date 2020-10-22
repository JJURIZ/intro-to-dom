// Touring the DOM zoo!
// Select the specified parts of the DOM and console.log them
// use document.getElementById, document.getElementsByClassName, document.getElementsByTagName

// the mammals section
// the birds section
// all divs with the class animal
// the first animal div
const firstAnimal = document.getElementsByClassName('animal');
console.log(firstAnimal[0]);
// the last animal div
const lastAnimal = document.getElementsByClassName('animal');
console.log(lastAnimal[lastAnimal.length-1]);
// all imgs
const images = document.getElementsByTagName('img');
console.log(images);
// the number of imgs on the page
console.log(images.length);
// all labels
const labels = document.getElementsByTagName('label');
console.log(labels);
// all the labels, one at a time
for (let i = 0; i < labels.length; i++) {
    console.log(labels[i]);
}
// Do the zoo tour one more time, this time with document.querySelector and document.querySelectorAll


// Changing parts of the zoo!

// The owl is the coolest animal. Give the owl img a gold border to show this
const owl = document.querySelector('owl')
console.log(owl);
document.querySelector('#owl').style=('border: 1px solid gold');
//owl.style.border = '1px dashed red';
// Change the label for the bunny to "Stylish Bunny"
const bunnyLabel = document.querySelector('#bunny + label');
// ALT method of grabbing the label ==> ('[label[for=bunny]')
console.log(bunnyLabel);
bunnyLabel.innerText = 'Stylish Bunny';
//innerHTML - lets you add HTML into the DOM.

// Once with innerText, then again with innerHTML. When using innerHTML, create a new div inside the label tag
// Give all images a border-radius of 3em
const allImages = document.querySelectorAll('img');
for (let i = 0; i < allImages.length; i++) {
    allImages[i].style.borderRadius = '3rem';
}
// The parrot is being rotated for a newer, flashier model: https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. Change the img's src to reflect this. Use a direct attribute assignment, not the setAttribute method
const parrot = document.querySelector('#parrot').setAttribute('src', 'https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

// Change our sheep image to: https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. Use setAttribute
document.querySelector('#sheep').src = 'https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

// Give all labels a text-decoration of underline, a font-size of 2em, and a color of darkgreen. Create a new class to handle this, and apply it to all the labels.
const labelChange = document.querySelectorAll('label');

for (let i = 0; i < labelChange.length; i++) {
    labelChange[i].classList.add('fancy-label');
}
// Remove the animal class from all divs that have it
const byeAnimals = document.querySelectorAll('animal');

for (let i = 0; i < byeAnimals.length; i++) {
    byeAnimals[i].classList.remove('animal');
}



// Zoo events!

// Put all of our existing js inside of a DOMContentLoaded event

// document.addEventListener('DOMContentLoaded', function() {
// not a user event
// })

// attach an event listener to the owl image that logs "You clicked the coolest animal!"
document.querySelector('#owl').addEventListener('click', function() {
    console.log("You clicked the coolest animal!!")
})
// attach an event listener to each animal that logs "You clicked an animal!"
    // const allAnimals = document.querySelectorAll('img');
    // for (let i = 0; i < allAnimals.length; i++) {
    //     allAnimals[i].addEventListener('click', function(){
    //         console.log('You clicked an animal!')
    //     })
    // }
// Change the event listener on each animal to log "You clicked on <the-animal's-name>!". First do this the long way w/ 6 different events, then use a loop and the event object
    // const allAnimals = document.querySelectorAll('img');
    // for (let i = 0; i < allAnimals.length; i++) {
    //     allAnimals[i].addEventListener('click', function(event){
    //         console.log(`You clicked the ${event.target.id}!`);
    //     })
    //    }
// Add an event listener to each animal picture that changes that picture's label to 'Hello!' when the image is clicked on
const allAnimals = document.querySelectorAll('img');
for (let i = 0; i < allAnimals.length; i++) {
    allAnimals[i].addEventListener('click', function(event){
        const id = event.target.id;
        const label = document.querySelector(`[for=${id}]`);
        label.innerText = 'Hello!'
    })
}