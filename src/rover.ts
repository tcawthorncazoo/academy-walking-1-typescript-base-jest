export class Rover {
    command(input: string): string {

        if(input == 'R') {
            return "0:0:E";
        } else {
            return "0:0:S";
        }

    }
}