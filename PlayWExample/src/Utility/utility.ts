import * as fs from 'fs'

export function getLocators(fileName: string){

    const dataString=fs.readFileSync(fileName, 'utf8');

    return JSON.parse(dataString);

}

