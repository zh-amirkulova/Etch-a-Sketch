const divConteiner = document.querySelector('.conteiner');

grid();

function grid(size=23){
    for (let i=0; i<size*size; i++){
        const divGrid = document.createElement('div');
    
        divGrid.classList.add('.divGrid');
        divGrid.style.cssText = `
            width: ${529/size}px;
            height: ${529/size}px;
            border: 1px solid rgba(137, 81, 41, 0.05);
            box-sizing: border-box;
        `;
        divConteiner.appendChild(divGrid);
    };

    const hover = document.querySelector('div');
    hover.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = 'pink';
    });
};


const btnSizePixel = document.querySelector('.sizePixel');

btnSizePixel.addEventListener('click', () =>{
    size = prompt('Выводите новый размер:');
    if(size<=100){
        deleteGrid();
        newGrid(size)
        console.log(size);
    }
    else {
     alert("Размер не должен превышать цифры 100!");
    }    
});

function deleteGrid() {
  
    let divLastGrid = document.querySelector('.conteiner');
    while (divLastGrid.firstChild) {
        divLastGrid.removeChild(divLastGrid.firstChild);
};
    
};

function newGrid(newSize){
    for (let i=0; i<newSize*newSize; i++){
        const divGrid = document.createElement('div');
    
        divGrid.classList.add('.divGrid');
        divGrid.style.cssText = `
            width: ${529/newSize}px;
            height: ${529/newSize}px;
            border: 1px solid rgba(137, 81, 41, 0.05);
            box-sizing: border-box;
        `;
        divConteiner.appendChild(divGrid);
    };

    const hover = document.querySelector('div');
    hover.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = 'pink';
    });
}



 