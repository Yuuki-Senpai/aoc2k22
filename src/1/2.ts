import * as fs from 'fs';
import * as readline from 'readline/promises';
export const run = async () => {
    return new Promise((resolve)=>{
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
        let total: number = 0;
        let highestcal: number = 0;
        let iOfHighest: number;
        fileRead.on('close', () => {
            let calorie = 0;
            for(let i = 0; i < 3;i++){
                calories.forEach((valuePerPerson,i) => {
                    valuePerPerson.forEach((val) => {
                        calorie += val
                    })
                    if(calorie > highestcal){highestcal = calorie; iOfHighest = i}
                    calorie = 0;
                })

                calories.splice(iOfHighest,1);
                total+= highestcal;
                highestcal = 0;
                iOfHighest = 0;
                
            }
            resolve(total)
        })
    })
}