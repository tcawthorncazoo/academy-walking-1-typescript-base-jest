import { Controller } from "../controller";
import { Rover } from "../rover";

describe('Mars Rover', () => {
    let controller: Controller;

    beforeEach(() => {
        controller = new Controller(new Rover);
    })

    describe('rotating right', () => {
        it.each([
            ["", "0:0:N"],
            ["R", "0:0:E"],
            ["RR", "0:0:S"],
            ["RRR", "0:0:W"],
            ["RRRR", "0:0:N"],
        ])('with input %s should return %s', (input, expectedPosition) => {
            const newPosition = controller.command(input);
    
            expect(newPosition).toEqual(expectedPosition);
        });
    });

    describe('rotating left', () => {
        it.each([
            ["L", "0:0:W"],
            ["LL", "0:0:S"],
            ["LLL", "0:0:E"],
            ["LLLL", "0:0:N"],
        ])('with input %s should return %s', (input, expectedPosition) => {
            const newPosition = controller.command(input);

            expect(newPosition).toEqual(expectedPosition);
        });
    })

    describe('moving forwards North', () => {
        it.each([
            ["M", "0:1:N"],
            ["MM", "0:2:N"],
            ["MMM", "0:3:N"],
        ])('with input %s should return %s', (input, expectedPosition) => {
            const newPosition = controller.command(input);

            expect(newPosition).toEqual(expectedPosition);
        });
    });

    describe('moving forward East', () => {
        it.each([
            ["RM", "1:0:E"],
            ["RMM", "2:0:E"],
            ["RMMM", "3:0:E"],
        ])('with input %s should return %s', (input, expectedPosition) => {
            const newPosition = controller.command(input);

            expect(newPosition).toEqual(expectedPosition);
        });
    });

    describe('moving in many directions', () => {
        it.each([
            ["MRM", "1:1:E"],
            ["MRMRM", "1:0:S"],
            ["MRMRMRM", "0:0:W"],
        ])('with input %s should return %s', (input, expectedPosition) => {
            const newPosition = controller.command(input);

            expect(newPosition).toEqual(expectedPosition);
        });
    });

    describe('moving northward 10 times', () => {
        it.each([
            ["MMMMMMMMM", "0:9:N"],
            ["MMMMMMMMMM", "0:0:N"],
            ["MMMMMMMMMMM", "0:1:N"],
            ["RMMMMMMMMM", "9:0:E"],
            ["RMMMMMMMMMM", "0:0:E"],
        ])('should return the rover to starting position', (input, expectedPosition) => {
            const newPosition = controller.command(input);

            expect(newPosition).toEqual(expectedPosition);
        });
    });


    describe('moving westward, southward beyond grid bounds', () => {
        it.each([
            ["LM", "9:0:W"],
            ["LMM", "8:0:W"],
            ["LLM", "0:9:S"],
        ])('should wrap the rover to the far side', (input, expectedPosition) => {
            const newPosition = controller.command(input);

            expect(newPosition).toEqual(expectedPosition);
        });
    });

    describe('acceptance test from spec', () => {
        it.each([
            ["MMRMMLM", "2:3:N"],
        ])('should meet acceptance criteria', (input, expectedPosition) => {
            const newPosition = controller.command(input);

            expect(newPosition).toEqual(expectedPosition);
        });
    });

    describe('when the first move was undone', () => {
        it.each([['MU'], ['LU'], ['RU']])('should revert to the initial starting point', (command) => {
            const newPosition = controller.command(command);
    
            expect(newPosition).toEqual('0:0:N')
        });
    });

    describe('when the second move is undone', () => {
        it.each([
            ["MMU", "0:1:N"],
            ["RMU", "0:0:E"],
            ["LMU", "0:0:W"],
            ["MRU", "0:1:N"],
            ["MLU", "0:1:N"]
        ])('should revert to the initial starting point', (command, expectedPosition) => {
            const newPosition = controller.command(command);

            expect(newPosition).toEqual(expectedPosition)
        });
    });

    describe.skip ('when we undo two moves', () => {
        it.each([
            ["MMUU", "0:0:N"],
        ])('should revert to the initial starting point', (command, expectedPosition) => {
            const newPosition = controller.command(command);

            expect(newPosition).toEqual(expectedPosition)
        });
    });
});