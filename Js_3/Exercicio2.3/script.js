const form = document.getElementById("devForm");
const developers = [];
const addtch = document.getElementById("addtch")


function createLabel(text,htmlFor){
    const label = document.createElement("label");
    label.htmlFor = htmlFor;
    label.innerText = text;
    return label;
}