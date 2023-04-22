// Definition of variables
// volume = volume of solution in animation
let f_volume = 20;
let f_color = '#D3D2E0';

// Simulation control of colour and fluid level by tweaking CSS
let r = document.querySelector(':root');

// Size of flask
r.style.setProperty('--conical-width', '15vw');

// Flask simulation
r.style.setProperty('--colour', f_color);
r.style.setProperty('--amount', (f_volume*0.5381 - 0.32)+'%'); 


// Inputs
let chkbox_graph = document.querySelector('input[name="chkbox_graph"]');
let chkbox_data = document.querySelector('input[name="chkbox_data"]');
let chkbox_values = document.querySelector('input[name="chkbox_values"]');

chkbox_graph.checked = true;
chkbox_data.checked = true;
chkbox_values.checked = true;

let text_conical = document.querySelector('input[name="text_conical"]');
let text_burette = document.querySelector('input[name="text_burette"]');


// Titre Slider controls
let slider_titre = document.getElementById('slider_titre');

var titre_volume = document.getElementById("titre_volume");
titre_volume.innerHTML = parseFloat(slider_titre.value).toFixed(2);


// Control animation pane
slider_titre.oninput = function() {
    titre_volume.innerHTML = parseFloat(this.value).toFixed(2);
    f_volume = parseFloat(titre_volume.innerHTML) + 20;
    r.style.setProperty('--amount', (f_volume*0.5381 - 0.32)+'%'); 
  }