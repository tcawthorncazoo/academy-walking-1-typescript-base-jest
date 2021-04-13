import { Rover } from "../rover";

describe('Mars Rover', () => {
    it('should turn from North to East', () => {
        const rover = new Rover();

        const newPosition = rover.command("R");

        expect(newPosition).toEqual("0:0:E")
    });

    it('should turn from North to East to South', () => {
        const rover = new Rover();

        const newPosition = rover.command("RR");

        expect(newPosition).toEqual("0:0:S")
    });
});