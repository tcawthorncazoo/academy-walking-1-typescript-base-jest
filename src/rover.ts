type direction = 'N'|'E'|'S'|'W';

interface cardinalDirections{
    N: {
        left: direction,
        right: direction
    },
    E: {
        left: direction,
        right: direction
    },
    S: {
        left: direction,
        right: direction
    },
    W: {
        left: direction,
        right: direction
    }
}

export class Rover {
    private direction: direction;
    private yCoordinate: number;
    private xCoordinate: number;
    private cardinalDirections: cardinalDirections = {
        N: {
            left:'W',
            right:'E'
        },
        E: {
            left:'N',
            right:'S'
        },
        S: {
            left:'E',
            right:'W'
        },
        W: {
            left:'S',
            right:'N'
        }
    }

    constructor() {
        this.direction = 'N';
        this.yCoordinate = 0;
        this.xCoordinate = 0;
    }


    public rotateRight() {
        this.direction = this.cardinalDirections[this.direction].right;
    }


    public rotateLeft() {
        this.direction = this.cardinalDirections[this.direction].left;
    }

    public move() {
        if (this.direction === 'E') {
            this.xCoordinate++;
        } else if (this.direction === 'W') {
            this.xCoordinate--;
        } else if (this.direction === 'S') {
            this.yCoordinate--;
        } else {
            this.yCoordinate++;
        }

        if (this.yCoordinate > 9) {
            this.yCoordinate = 0;
        }

        if (this.yCoordinate < 0) {
            this.yCoordinate = 9;
        }

        if (this.xCoordinate > 9) {
            this.xCoordinate = 0;
        }

        if (this.xCoordinate < 0) {
            this.xCoordinate = 9;
        }
    }

    public currentLocation () {

        return `${this.xCoordinate}:${this.yCoordinate}:${this.direction}`

    }
}