const div = document.querySelector('.container');
function createGrid(num) {
    const size = 960 / num;
    for (let i = 0; i < num * num; i++) {
        const divCreate = document.createElement('div');
        divCreate.style.height = `${size}px`;
        divCreate.style.width = `${size}px`;
        divCreate.classList.add('box');
        divCreate.addEventListener("mouseenter", () => {
            divCreate.style.backgroundColor = "black";
        })
     div.appendChild(divCreate);   
    }
    
}

createGrid(16);

