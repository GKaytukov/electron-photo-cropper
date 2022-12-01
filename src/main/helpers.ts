import fs from 'fs';

export function readFile(file:any){ //export to access it anywhere
    return new Promise((resolve)=> {
      const reader = new FileReader(); // This creates the reader
      // What to do when the is done reading 
      reader.addEventListener('load',() => resolve(reader.result), false);
      reader.readAsDataURL(file);
    })
  }
  