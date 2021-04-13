export class Rover {
    private direction: string;
    private yCoordinate: number;
    private xCoordinate: number;

    constructor() {
        this.direction = 'N';
        this.yCoordinate = 0;
        this.xCoordinate = 0;
    }

    command(input: string): string {
        for(let movement of input){
            if (movement === 'L') {
                this.rotateLeft();
            } else if (movement === 'R') {
                this.rotateRight();
            } else if (movement === 'M')  {
                if (this.direction === 'E') {
                    this.xCoordinate++;
                } else if(this.direction === 'S'){
                    this.yCoordinate--;
                }  else {
                    this.yCoordinate++;
                }                
            }
        }

        return `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`;
    }

    private rotateRight() {
        if (this.direction === 'N') {
            this.direction = 'E';
        } else if (this.direction === 'E') {
            this.direction = 'S';
        } else if (this.direction === 'S') {
            this.direction = 'W';
        } else {
            this.direction = 'N';
        }
    }

    private rotateLeft() {
        if (this.direction === 'N') {
            this.direction = 'W';
        } else if (this.direction === 'W') {
            this.direction = 'S';
        } else if (this.direction === 'S') {
            this.direction = 'E';
        } else {
            this.direction = 'N';
        }
    }
}