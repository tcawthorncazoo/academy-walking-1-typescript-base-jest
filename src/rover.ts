export class Rover {
    command(input: string): string {

        var direction = 'N';

        for(let movement of input){
            if(direction === 'N'){
                direction = 'E';    
            } else if(direction === 'E'){
                direction = 'S';    
            } else if(direction === 'S'){
                direction = 'W';    
            }
        }

        return `0:0:${direction}`;
    }
}