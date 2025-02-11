const divConteiner = document.querySelector('.conteiner');
const btnSizePixel = document.querySelector('.sizePixel');
const btnRandomColor = document.querySelector('.randomColor');
const resetBtn = document.querySelector('.reset');

grid();

//заполнение контейнера сеткой 
function grid(size=45){
    for (let i=0; i<size*size; i++){
        const divGrid = document.createElement('div');
    
        divGrid.classList.add('.divGrid');
        divGrid.style.cssText = `
            width: ${529/size}px;
            height: ${529/size}px;
            border: 1px solid rgba(137, 81, 41, 0.02);
            box-sizing: border-box;
        `;
        divConteiner.appendChild(divGrid);
    };

    const hover = document.querySelector('div');
    hover.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = '#808080';
    });

};

// получение нового размера сетки от пользователя
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

// удаление текущего  сетки  
function deleteGrid() {
    let divLastGrid = document.querySelector('.conteiner');
    while (divLastGrid.firstChild) {
        divLastGrid.removeChild(divLastGrid.firstChild);
    };
};

// создание новой сетки для изменение масштаба сетки 
function newGrid(newSize){
    for (let i=0; i<newSize*newSize; i++){
        const divGrid = document.createElement('div');
    
        divGrid.classList.add('.divGrid');
        divGrid.style.cssText = `
            width: ${529/newSize}px;
            height: ${529/newSize}px;
            border: 1px solid rgba(137, 81, 41, 0.02);
            box-sizing: border-box;
        `;
        divConteiner.appendChild(divGrid);
    };

    const hover = document.querySelector('div');
    hover.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = '#808080';
    });
}

// изминение цвета крусора на случайный цвет
btnRandomColor.addEventListener('click', () => {
    const hoverRandom = document.querySelector('div');
    const randomRgbColor = () => {
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)
        return `rgb(${red}, ${green}, ${blue})`;
    }
    hoverRandom.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = randomRgbColor();
    });
});


// очистка сетки  
resetBtn.addEventListener('click', () => {
    const grid = divConteiner.querySelectorAll('div')
    console.log(grid);
    grid.forEach((grid) => {
        grid.style.backgroundColor = '#F0FFF0';
    })
});
