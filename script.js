let lastSize = 16

function drawSquare(value)
{
    const container = document.querySelector(".container");
    container.innerHTML = '';
    const square = document.createElement("div");
    let size = 500/value;
    square.style.height = size + "px";
    square.style.width = size + "px";
    square.style.backgroundColor = "#000000";
    square.style.opacity = "0";


    for(let i = 0; i < (value * value); i++)
    {
        const tmp_square = square.cloneNode(true);
        tmp_square.addEventListener("mouseover", function(e) {
            let newOpacity = +e.target.style.opacity + .1
            e.target.style.opacity = newOpacity;
        });
        container.appendChild(tmp_square);
    }
}

function pickSize()
{
    var selection = "";
    do
    {
        selection = parseInt(window.prompt("Please enter a number from 1 to 100"), "");
    }
    while(isNaN(selection) || selection > 100 || selection < 1);

    lastSize = selection;
    drawSquare(selection);
}

function reDraw()
{
    drawSquare(lastSize);
}

drawSquare(lastSize)

