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
        ])('with input %s should return %s', (input, expectedPosition) => {
            const rover = new Rover();

            const newPosition = rover.command(input);

            expect(newPosition).toEqual(expectedPosition);
        });
    })
});