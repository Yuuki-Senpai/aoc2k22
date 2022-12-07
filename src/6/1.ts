import * as fs from 'fs/promises';

export const run = async () => {

    const fileRead = await fs.readFile('./src/6/val.txt');
    const arr = fileRead.toString().split('');
    for (let i = 3; i < arr.length; i++) {
        let str = new Set(arr.slice(i - 4, i))
        if (str.size === 4) {
            return new Promise((resolve) => { resolve(i) })
        }
    }
}