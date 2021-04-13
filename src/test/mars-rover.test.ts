import { Rover } from "../rover";

describe('Mars Rover', () => {
    it.each([
        ["", "0:0:N"],
        ["R", "0:0:E"],
        ["RR", "0:0:S"],
        ["RRR", "0:0:W"],
    ])('should not move or rotate without commands', (input, expectedPosition) => {
        const rover = new Rover();

        const newPosition = rover.command(input);

        expect(newPosition).toEqual(expectedPosition);
    });
});