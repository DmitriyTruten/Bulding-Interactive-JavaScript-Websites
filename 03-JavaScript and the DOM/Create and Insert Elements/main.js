// create new li element 
let newAttraction = document.createElement("li");

// set an id and inner text to li element
newAttraction.id = "vespa";
newAttraction.innerHTML = "Rent a Vespa!";

// append li element to body
document.getElementById('italy-attractions').appendChild(newAttraction)