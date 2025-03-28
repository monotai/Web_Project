export function read_file({ path }){
    const fs = require("node:fs");
    const fileContents = fs.readFileSync(path)
    console.log(fileContents);
}

export function write_file({path, newData}){
    const fs = require('fs');
    let data = newData;
    fs.writeFile(path, data, (err) => {
        if (err) throw err;
    })
}

export function rewrite_file_in_line({path, lineIndex, newData}){
    const fs = require('fs');
    let data = read_file(path);
    data = data.split('\n')
    data[lineIndex] = newData
    data = data.toString();
    data = data.replace(',', '\n');
    fs.writeFile(path, data, (err) => {
        if (err) throw err;
    })
}