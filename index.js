const divConteiner = document.querySelector('div');

for (let i=0; i<256; i++){
    const div = document.createElement('div');
    divConteiner.append(div);
    div.style.cssText = `
        width: 23px;
        height: 23px;
        border: 1px solid rgba(137, 81, 41, 0.05);
    `;
    divConteiner.innerHTML.div;
    
    const hover = document.querySelector('div');
    console.log(hover);

    hover.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = 'pink';
});
};



 