import { Life } from "./Life";
import { CanvasController } from "./CanvasController";


const high = 2560 * 1440; 

const totalPixels = window.innerHeight * window.innerWidth; 
const SQUARE_SIZE: number = totalPixels > high ? 15 : 12; 
const numRows = Math.ceil(window.innerHeight / SQUARE_SIZE);
const numColumns = Math.ceil(window.innerWidth / SQUARE_SIZE);


export class LifeController {
    life: Life;
    canvasController: CanvasController;

    constructor(life: Life, canvasController: CanvasController){
        this.life = life;
        this.canvasController = canvasController;
        this.life.initState(); 
    }

    public drawLife(){
        this.life.nextState();
        this.canvasController.drawBoard(this.life); 
    }
}

const life = new Life(numRows, numColumns, 0.4);
const canvasController = new CanvasController(SQUARE_SIZE);

export const lifeController = new LifeController(life, canvasController)