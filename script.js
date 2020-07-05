const grid = document.querySelector(".gridContainer");

const newButton = document.querySelector(".new");
let colour ='black'



initializeGrid= ()=>{

    
    for(i=1; i<=256; i++){
        const eachSquare = document.createElement("div");
        eachSquare.style.backgroundColor ='white';
        eachSquare.style.border = '1px solid black';
        //works on muouse over
        eachSquare.addEventListener("mouseover", ()=>{
            //console.log(random_bg_color());
            eachSquare.style.backgroundColor = colour;
          });
        //add each grid to the skecth box
        
        grid.appendChild(eachSquare);
        
        

    }

};


function createnew(){


    removeChildAll();
    let size = prompt("Enter the size of grid you wish to create: ");

    sactual = size*size;
    console.log(sactual);
   
    for(i=1; i<=sactual; i++){
        const eachSquare = document.createElement("div");
        eachSquare.style.backgroundColor ='white';
        eachSquare.style.border = '1px solid black';
        eachSquare.addEventListener("mouseover", ()=>{
            random_bg_color();
            eachSquare.style.backgroundColor = colour;
          });
       
        //add each grid to the skecth box
        grid.appendChild(eachSquare);
        

    }

    grid.style.cssText = `
    grid-template-columns: repeat(${size}, 1fr);
    grid-template-rows: repeat(${size}, 1fr);`;

}


//resetButton.addEventListener('click', reset);
newButton.addEventListener('click', createnew);

//remove child nodes 

function removeChildAll() {
    while (grid.lastElementChild) {
        grid.removeChild(grid.lastElementChild);
    }

   // initializeGrid();
}


//reset all childnode to default

function reset() {


    while (grid.lastElementChild) {
        grid.removeChild(grid.lastElementChild);
    }

   initializeGrid();
}


//random colour generator
function random_bg_color() {

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    colour = bgColor;

  
}



initializeGrid();