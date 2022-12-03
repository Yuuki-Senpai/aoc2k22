import * as fs from 'fs/promises';

export const run = async () => {

    const fileRead = await fs.readFile('./src/3/val.txt');
    const rucksacks = fileRead.toString().split('\n');
    const alllettermin: any = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const alllettermax: any = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const priority = new Map<string,number>([alllettermin.map(l => [l, l.charCodeAt(0) - 96]), alllettermax.map(l => [l, l.charCodeAt(0) - 38])].flat(1));
    const array = rucksacks.map((sac => sac.split(''))).map(sac => [sac.slice(0, sac.length / 2), sac.slice(sac.length / 2)])
    let x=0;
    array.forEach((rupsack)=>{
        let allmatch = new Set(rupsack[0].filter(val=>rupsack[1].indexOf(val)!=-1));
        allmatch.forEach(m => x+= priority.get(m)!)
    })
    
    return new Promise((resolve) => { resolve(x) })

}