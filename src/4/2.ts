import * as fs from 'fs/promises';

export const run = async () => {

    const fileRead = await fs.readFile('./src/4/val.txt');
    const pairs = fileRead.toString().split('\n');
    let filteredPair = pairs.map(s => s.split(','))
        .map(s => s.map(s => s.split('-').map(v=> parseInt(v,10))))
    let result = 0;
    filteredPair.forEach(p=>{
        if (p[0][0] <= p[1][1] && p[0][1] >= p[1][0]){result+=1}
    } 
    )
    return new Promise((resolve) => { resolve(result) })

}