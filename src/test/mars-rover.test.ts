import { Rover } from "../rover";

describe('Mars Rover', () => {
    describe('rotating right', () => {
        it.each([
            ["", "0:0:N"],
            ["R", "0:0:E"],
            ["RR", "0:0:S"],
            ["RRR", "0:0:W"],
            ["RRRR", "0:0:N"],
        ])('with input %s should return %s', (input, expectedPosition) => {
            const rover = new Rover();
    
            const newPosition = rover.command(input);
    
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
            const rover = new Rover();

            const newPosition = rover.command(input);

            expect(newPosition).toEqual(expectedPosition);
        });
    })

    describe('moving forwards North', () => {
        it.each([
            ["M", "0:1:N"],
            ["MM", "0:2:N"],
            ["MMM", "0:3:N"],
        ])('with input %s should return %s', (input, expectedPosition) => {
            const rover = new Rover();

            const newPosition = rover.command(input);

            expect(newPosition).toEqual(expectedPosition);
        });
    });

    describe('moving forward East', () => {
        it.each([
            ["RM", "1:0:E"],
            ["RMM", "2:0:E"],
            ["RMMM", "3:0:E"],
        ])('with input %s should return %s', (input, expectedPosition) => {
            const rover = new Rover();

            const newPosition = rover.command(input);

            expect(newPosition).toEqual(expectedPosition);
        });
    });

    describe('moving in many directions', () => {
        it.each([
            ["MRM", "1:1:E"],
            ["MRMRM", "1:0:S"],
        ])('with input %s should return %s', (input, expectedPosition) => {
            const rover = new Rover();

            const newPosition = rover.command(input);

            expect(newPosition).toEqual(expectedPosition);
        });
    });
});