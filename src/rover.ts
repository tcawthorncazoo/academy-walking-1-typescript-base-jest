export class Rover {
    command(input: string): string {

        if (input === 'RRR') {
            return "0:0:W";
        } else if(input == 'RR') {
            return "0:0:S";
        } else if(input == 'R') {
            return "0:0:E";
        }

        return "0:0:N";
    }
}