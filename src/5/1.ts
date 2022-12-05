import * as fs from 'fs/promises';

export const run = async () => {

    const fileRead = await fs.readFile('./src/5/val.txt');
    const cargo = { 1: ['T', 'D', 'W', 'Z', 'V', 'P'], 2: ['L', 'S', 'W', 'V', 'F', 'J', 'D'], 3: ['Z', 'M', 'L', 'S', 'V', 'T', 'B','H'],
    4:['R','S','J'], 5: ['C','Z','B', 'G', 'F', 'M', 'L','W'], 6:['Q','W','V','H','Z','R','G','B'], 7:['B','J','P','C','B','D','N'],
    8:['P','T','B','Q'], 9:['H','G','Z','R','C'] }
    const move = fileRead.toString().split('\n');
    let formatedMove = move.map(m=> m.replace(/(move )|( from )|( to )/gm,' ').replace(' ','').split(' ').map(l=>parseInt(l,10)));
    formatedMove.forEach(m=> {
        for(let i=0; i!=m[0];i++){
            cargo[m[2]].push(cargo[m[1]].pop())
        }
    })
    return new Promise((resolve) => { resolve(cargo) })

}