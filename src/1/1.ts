import * as fs from 'fs';
import * as readline from 'readline/promises';
export const run = async () => {
    return new Promise((resolve, reject)=>{
        const fileRead = readline.createInterface({
            input: fs.createReadStream('./src/1/val.txt'),
            crlfDelay: Infinity,
        });
    
        const calories: typeof calorie[] = [];
        const calorie: number[] = [];
    
        fileRead.on('line', line => {
            if (line === '') {
                calories.push(calorie.splice(0, calorie.length));
            }
            else {
                calorie.push(parseInt(line, 10));
            }
    
        });
        let highercalories = 0;
        fileRead.on('close', () => {
            let calorie = 0;
            calories.forEach((value) => {
                value.forEach((val) => {
                    calorie += val
                })
                if (calorie > highercalories) {
                    highercalories = calorie;
    
                }
                calorie = 0;
                
                
    
            })
            resolve(highercalories)
        })
    })
}