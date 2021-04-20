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
        } else if (command === 'U') {
            return new Undo(this.rover);
        }

        throw new Error(`No command found for '${command}'`);
    }

}

interface Command {
    execute(): void;
}

export class Undo implements Command {
    private rover: Rover;

    constructor(rover: Rover) {
        this.rover = rover;
    }

    execute(): void {
        this.rover.rotateRight();
        this.rover.rotateRight();
        this.rover.move();
        this.rover.rotateLeft();
        this.rover.rotateLeft();
    }
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