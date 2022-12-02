import * as fs from 'fs/promises';

export const run = async () => {

    const fileRead = await fs.readFile('./src/2/val.txt');
    let matches: string[] | string[][] = fileRead.toString().split('\n');
    let score = 0;
    matches.forEach((match) => {
        if (match.includes('X')){
            if (match.includes('A')){score+=3}//rock vs cissors  + 3
            if (match.includes('B')){score+=1}//Paper vs rock +1
            if (match.includes('C')){score+=2}//Cissors vs paper +2
        }
        if (match.includes('Y')){
            score+=3
            if (match.includes('A')){score+=1}//rock vs rock 1  
            if (match.includes('B')){score+=2}//paper vs paper 2
            if (match.includes('C')){score+=3}//cissors vs cissors 3
        }
        if (match.includes('Z')){
            score+=6
            if (match.includes('A')){score+=2}//rock vs feuille  +2
            if (match.includes('B')){score+=3}//paper vs cissors +3
            if (match.includes('C')){score+=1}//cissors vs rock +1
        }
    })
    
    

    return new Promise((resolve) => { resolve(score) })

}