export class Rover {
    private direction: string;

    constructor() {
        this.direction = 'N';
    }

    command(input: string): string {
        for(let movement of input){
            if (movement === 'L') {
                this.direction = 'W';
            } else if (movement === 'R') {
                this.rotateRight();
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
}