import * as fs from 'fs/promises';

export const run = async () => {

    const fileRead = await fs.readFile('./src/2/val.txt');
    let matches: string[] | string[][] = fileRead.toString().split('\n');
    let score = 0;
    matches = matches.map((match) => {
        if (match.includes('X')){score+=1}
        if (match.includes('Y')){score+=2}
        if (match.includes('Z')){score+=3}
        match = match.replace('A', '0');
        match = match.replace('B', '1');
        match = match.replace('C', '2');
        match = match.replace('X', '0');
        match = match.replace('Y', '1');
        match = match.replace('Z', '2');
        match = match.replace(' ', '');
        return match;
    })
    matches = matches.map(match => [...match])
    matches.forEach(match=>{
        let p1 = parseInt(match[0]);
        let p2 = parseInt(match[1]);
        if ((p1 + 1)%3 == p2){score +=6}
        else if (p1 == p2){score +=3}
    })

    return new Promise((resolve) => { resolve(score) })

}