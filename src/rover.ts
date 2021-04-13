export class Rover {
    private direction: string;

    constructor() {
        this.direction = 'N';
    }

    command(input: string): string {
        for(let movement of input){
            if (movement === 'L') {
                this.rotateLeft();
            } else if (movement === 'R') {
                this.rotateRight();
            } else if (movement === 'M')  {
                return `0:1:${this.direction}`
            }
        }

        return `0:0:${this.direction}`;
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