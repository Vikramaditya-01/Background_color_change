const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const nav = document.querySelector("nav"); // Add this to target the nav
const contact = document.querySelector(".contact"); // Add this to target the contact

buttons.forEach(function (button) {
    button.addEventListener('click', function(change) {
        console.log(change.target.id);
        
        // Change the background color of the body
        if (change.target.id === 'grey') {
            body.style.backgroundColor = change.target.id;
        }
        if (change.target.id === 'white') {
            body.style.backgroundColor = change.target.id;
        }
        if (change.target.id === 'blue') {
            body.style.backgroundColor = change.target.id;
        }
        if (change.target.id === 'yellow') {
            body.style.backgroundColor = change.target.id;
        }

        
        nav.style.backgroundColor = 'transparent'; 
        contact.style.backgroundColor = 'transparent'; 
    });
});


////////////shorter version of these code////////////

// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body");
// const nav = document.querySelector("nav");
// const contact = document.querySelector(".contact");

// buttons.forEach(function (button) {
//     button.addEventListener('click', function(change) {
//         const newColor = change.target.id; // Get the selected color
//         body.style.backgroundColor = newColor; // Change the body background color
//     });
// });
