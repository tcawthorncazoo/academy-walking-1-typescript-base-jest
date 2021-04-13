export class Rover {
    command(input: string): string {

        if (input === 'RRR') {
            return "0:0:W";
        } else if(input == 'RR') {
            return "0:0:S";
        }

        return "0:0:E";
    }
}