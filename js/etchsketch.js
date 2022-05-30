let grid = document.getElementById("gridcontainer")
let generateButton = document.getElementById("dimensions")
let clearButton = document.getElementById("erase")
let colorpicker = document.getElementById("colorpicker")
let currentColor = 'blue'
let count = 0
let size = 0
let colors = ['red','green','blue']



function changeColor(){
    if(this.classList.contains(currentColor)){
        this.setAttribute('class','grid')
    }
    else{
        this.setAttribute('class', currentColor)
    }

}

function selectColor(color){
   currentColor = color
}

function clearCanvas(){
    //iterate through every row 
    //change class to grid
    for (let rows = 0; rows < size; rows++){
        let row = document.getElementById('row'+ rows);
        let cols = row.getElementsByTagName('div')
        for (let i = 0; i < cols.length; i++){
            cols[i].setAttribute('class', 'grid')
            cols[i].style.backgroundColor = 'white'
        }
      
    }
    
}
function generateTable(size){
    for (let rows = 0; rows < size; rows++){
        let row = document.createElement('div');
        row.id = 'row'+ rows
        row.setAttribute('class', 'row')
        grid.appendChild(row)
        for (let cols = 0; cols < size; cols++){
            let square = document.createElement('div');
            square.setAttribute('id',count)
            square.setAttribute('class', 'grid')
            square.addEventListener('click',changeColor);
            square.style.backgroundColor = 'white'
            square.addEventListener('mouseover', function mouseEnter(){

                square.style.backgroundColor = currentColor
          
            })
            square.addEventListener('mouseout', function mouseEnter(){
                if(square.classList.contains('grid')){
                square.style.backgroundColor = 'white'
                }
                else {
                    square.style.backgroundColor = square.classList
                }
            })
         
            row.appendChild(square)
            count++
        }
    }
    count = 0
    
}

function promptSize(){
    size  = prompt("Please enter dimensions","16")
    grid.textContent = ''
    generateTable(size)
}





generateButton.addEventListener('click', promptSize);
clearButton.addEventListener('click', clearCanvas);  
generateTable(16)
  
for (let i =0; i < colorpicker.children.length; i++){
    var child = colorpicker.children[i]
    child.addEventListener('click', ()=> {selectColor(colors[i])} )
}




