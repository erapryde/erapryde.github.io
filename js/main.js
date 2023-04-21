// Definition of variables
// volume = volume of solution in animation
var f_volume = 20;
var f_color = 'aliceblue';


// Simulation control of colour and fluid level by tweaking CSS
var r = document.querySelector(':root');

// Size of flask
r.style.setProperty('--conical-width', '15vw');

// Flask simulation
r.style.setProperty('--colour', f_color);
r.style.setProperty('--amount', (f_volume*0.5381 - 0.32)+'%'); 

