import { Life } from "./Life";

const canvas: HTMLCanvasElement = document.getElementById("lifecanvas") as HTMLCanvasElement;
const canvasContext = canvas.getContext("2d") as CanvasRenderingContext2D;
canvas.height = window.innerHeight
canvas.width = window.innerWidth;
canvasContext.imageSmoothingEnabled = false;

export class CanvasController {

    squareSize: number;

    constructor(squareSize: number) {{
        this.squareSize = squareSize
    }}

    private drawSquare(x: number, y: number, width: number) {
        canvasContext.strokeRect(x, y, width, width); 
    }

    public drawBoard (life: Life) {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        for(let xOffset = 0; xOffset < life.numColumns; xOffset += 1){
            for(let yOffset = 0; yOffset < life.numRows; yOffset += 1){
                life.getState()[yOffset][xOffset] &&
                this.drawSquare(
                    xOffset * this.squareSize,
                    yOffset * this.squareSize,
                    this.squareSize,
                )
            }
        }
    }
}