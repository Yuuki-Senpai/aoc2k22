import { exit } from 'process';
import * as readline from 'readline/promises';

const args = process.argv.slice(2);
let daystorun: number = parseInt(args[0], 10);
let starlevel: number = parseInt(args[1], 10);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
if (!daystorun) {
    daystorun = parseInt(await rl.question('which day do you want to run ? '), 10)
}

if (!starlevel) {
    starlevel = parseInt(await rl.question('which number of star do you want to run ? '), 10)
}

const { run } = await import(`./src/${daystorun}/${starlevel}.ts`);
console.log(await run());
exit();
