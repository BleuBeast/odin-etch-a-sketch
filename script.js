function drawSquare(value)
{
    const container = document.querySelector(".container");
    container.innerHTML = '';
    const square = document.createElement("div");
    let size = 500/value;
    square.style.height = size + "px";
    square.style.width = size + "px";

    for(let i = 0; i < (value * value); i++)
    {
        const tmp_square = square.cloneNode(true);
        tmp_square.addEventListener("mouseover", function(e) {
            e.target.style.background = "black";
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

    drawSquare(selection);
}

drawSquare(16)

