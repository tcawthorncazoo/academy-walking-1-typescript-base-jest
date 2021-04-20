import { Rover } from "./rover";

export class Controller {

    rover : Rover;

    constructor(rover: Rover) {
        this.rover = rover;
    }

    command(input: string): string {
        for (let movement of input) {
            const command = this.buildCommand(movement);
            command.execute();
        }

        return this.rover.currentLocation();
    }

    private buildCommand(command: String): Command {
        if (command === 'L') {
            return new RotateLeft(this.rover);
        } else if (command === 'R') {
            return new RotateRight(this.rover);
        } else if (command === 'M') {
            return new Move(this.rover);
        }

        throw new Error;
    }

}

interface Command {
    execute(): void;
}

export class RotateRight implements Command {
    private rover: Rover;

    constructor(rover: Rover) {
        this.rover = rover;
    }

    execute(): void {
        this.rover.rotateRight();
    }
}

export class RotateLeft implements Command {
    private rover: Rover;

    constructor(rover: Rover) {
        this.rover = rover;
    }
    
    execute(): void {
        this.rover.rotateLeft();
    }
}

export class Move implements Command {
    private rover: Rover;

    constructor(rover: Rover) {
        this.rover = rover;
    }
    
    execute(): void {
        this.rover.move();
    }
}