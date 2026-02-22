import { promises as fs } from 'fs';
export async function PrintJson(){


const data =  await fs.readFile('./user.json', 'utf-8');

const jsonData = JSON.parse(data);

console.log(jsonData);
}


export async function getLocatorJson(fileName: string){


const datastring =  await fs.readFile('./locators/'+ fileName, 'utf-8');

const jsonData = JSON.parse(datastring);

return jsonData;
}