function drawSquare(value)
{
    const container = document.querySelector(".container");
    const square = document.createElement("div");
    square.classList.add("square");

    for(let i = 0; i < (value * value); i++)
    {
        const tmp_square = square.cloneNode(true);
        tmp_square.addEventListener("mouseover", function(e) {
            e.target.style.background = "black";
        });
        container.appendChild(tmp_square);
    }
}

drawSquare(16)

