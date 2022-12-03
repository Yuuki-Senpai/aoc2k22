import * as fs from 'fs/promises';

export const run = async () => {

    const fileRead = await fs.readFile('./src/3/val.txt');
    const rucksacks = fileRead.toString().split('\n');
    const groupedRucksacks: string[][] = [];
    let t: string[] = [];
    rucksacks.forEach(s => {
        t.push(s)
        if (t.length === 3) {
            console.log(t);
            groupedRucksacks.push(t.splice(0));

        }
    })
    const alllettermin: any = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const alllettermax: any = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const priority = new Map<string, number>([alllettermin.map(l => [l, l.charCodeAt(0) - 96]), alllettermax.map(l => [l, l.charCodeAt(0) - 38])].flat(1));
    const array = groupedRucksacks.map((group => group.map(sac => sac.split(''))))
    let x = 0;
    array.forEach((groups) => {
            let matchA = new Set(groups[0].filter(val=>groups[1].indexOf(val)!=-1));
            let allMatch = new Set([...matchA].filter(val=>groups[2].indexOf(val)!=-1));
            allMatch.forEach(m => x+= priority.get(m)!)
            
    })

    return new Promise((resolve) => { resolve(x) })

}