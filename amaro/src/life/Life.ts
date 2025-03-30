import { NEXT_STATE_STATUS, NEXT_STATE_STATUS_ENUM } from "./NextStateStatus";

//['KILL'|'SPAWN', y, x]
type CellNextState = [NEXT_STATE_STATUS, number, number];  

export class Life {

    public numRows: number
    public numColumns: number
    public probability: number
    private state: number[][] = []; 
    private static GRID_OFFSETS = [ [-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1] ]; 

    constructor(numRows: number, numColumns: number, probability: number) {
        this.numRows = numRows
        this.numColumns = numColumns
        this.probability = probability
        this.initState();
    } 

    public initState(){
        this.state = this.getRandomState(this.numRows, this.numColumns, this.probability); 
    }

    public nextState(){
        const nextStateStatuses: CellNextState[] = this.getNextStates();

        for(let [cellStatus, y, x] of nextStateStatuses){
            this.state[y][x] = cellStatus; 
        }
    }

    public getState(){
        return this.state; 
    }

    private getNextStates(): CellNextState[]{

        const result: CellNextState[] = [];

        for(let i = 0; i < this.numRows; i++){
            for(let j = 0; j < this.numColumns; j++){
                let cellNeighbors = this.getNumberOfNeighbors(i, j); 
                /**
                 * (1) Each cell with one or no neighbors dies, as if by solitude.
                 * (2) Each cell with four or more neighbors dies, as if by overpopulation.
                 */
                if(this.state[i][j] && (cellNeighbors <= 1 || cellNeighbors >=4)){ //Each cell with one or no neighbors dies, as if by solitude.
                    result.push([NEXT_STATE_STATUS_ENUM.KILL, i, j])
                } else if (!this.state[i][j] && cellNeighbors === 3) { //Each cell with three neighbors becomes populated.
                    result.push([NEXT_STATE_STATUS_ENUM.SPAWN, i, j])
                }
            }
        }

        return result; 
    }

    private getCellWithWrapping(x: number, y: number){
        const wrappedY = y === -1 ? this.numRows - 1: y % this.numRows;
        const wrappedX = x === -1 ? this.numColumns - 1: x % this.numColumns; 
        const result = this.state[wrappedY][wrappedX];
        return result; 
    }

    private getNumberOfNeighbors(x: number, y: number){
        let numNeighbors = 0; 
        for(let [xOffset, yOffset] of Life.GRID_OFFSETS){
            numNeighbors += this.getCellWithWrapping(y + yOffset, x + xOffset)
        }
        return numNeighbors
    }

    private getRandomState(numRows: number, numColumns: number, probability: number){
        const randomState = Array.from({length: numRows}, 
            () => Array.from({length: numColumns}, () => Math.random() < probability ? 1 : 0))
        return randomState;
    }
}