
let cells = data.cells.float;
let viewRotation = data.viewRotation.float;
let viewScale = data.scale.float;

let elementRotation = data.elementRotation.float;
let backgroundColor = data.backgroundColor.rgb.string;
let textColor = data.elementColor.rgb.string;
let chars = data.text.string.split('');
let windowXPos = data.windowXPos.float;   
let windowYPos = data.windowYPos.float;
let stroke = accessInjectedProp("stroke").boolean;

let img;
let font;

function cellSize() {
    return width / cells;
}

function transformWindow() {
    // Translation of window
    translate(windowXPos, windowYPos)
    // Rotate from center
    fromCenter(width, height, () => {
        rotate(radians(viewRotation));
    })
    fromCenter(width, height, () => {
        let relativeScale = map(viewScale, -1000, 1000, -9, 11, true);
        scale(relativeScale, relativeScale);
    })
}

function preload() {
    img = loadImage("https://upload.wikimedia.org/wikipedia/commons/7/7c/Aspect_ratio_16_9_example.jpg");
}

function setup() {
    console.log(data)
    const size = data.windowSize.size
    const cWidth = size.w / size.w * windowWidth
    const cHeight = size.h / size.w * windowWidth
    createCanvas(cWidth, cHeight);
    img.resize(width, height)
    textFont('Helvetica');
    background(backgroundColor);
    fill(textColor)

    if (!stroke) {
        noStroke();
    }
}

function draw() {
    transformWindow();

    push();
    let counter = new Counter(0, chars.length);
    for(let y = 0; y < cells; y++) {
        for(let x = 0; x < cells; x++) {
            let half = (cellSize() / 2)
            let posX = x * cellSize();
            let posY = y * cellSize();

            let cellColor = img.get(posX + half, posY + half);
            let cellWeight = map(brightness(cellColor), 10, 50, 0, cellSize(), true);
            fill(20)
            fill(0)
            {
                let xHalf = cellWeight / 2;
                let yHalf = cellSize() / 2;
                rect(posX + half - xHalf, posY + half - yHalf, cellWeight, cellSize());
            }
        }
    }
    pop();
}



