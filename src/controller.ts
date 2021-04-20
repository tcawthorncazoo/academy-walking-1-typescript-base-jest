import { Rover } from "./rover";

export class Controller {

    rover : Rover;
    prevCommand : Command;

    constructor(rover: Rover) {
        this.rover = rover;
        this.prevCommand = new Null ;
    }

    command(input: string): string {
        for (let movement of input) {
            const command = this.buildCommand(movement);
            command.execute();
            this.prevCommand = command;
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
            return new Undo(this.prevCommand);
        }

        throw new Error(`No command found for '${command}'`);
    }

}

interface Command {
    execute(): void;
    undo(): void;
}

export class Null implements Command {
    execute() {}
    undo() {}
}

export class Undo implements Command {
    private prevCommand: Command;

    constructor(prevCommand: Command) {
        this.prevCommand = prevCommand;
    }

    execute(): void {
        this.prevCommand.undo();
    }

    undo(): void {
        this.prevCommand.execute();
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

    undo(): void {
        this.rover.rotateLeft()
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

    undo(): void {
        this.rover.rotateRight()
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

    undo(): void {
        this.rover.rotateRight();
        this.rover.rotateRight();
        this.rover.move();
        this.rover.rotateLeft();
        this.rover.rotateLeft();
    }
}