describe('Mars Rover', () => {
    it('should turn from North to East', () => {
        const rover = new Rover();

        const newPosition = rover.command("R");

        expect(newPosition).toEqual("0:0:E")
    });
});