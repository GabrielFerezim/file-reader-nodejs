const fs = require ("fs");

fs.readFile('danki.txt',function(err,data){
    let str = data.toString(); // toString deixa elegivel o comando caso saia em Buffer!

    let newstr = str.split('/'); // Formatação.
    let newstr = str.substring(1,6); // A leitura só funciona a partir dos indices definidos
    console.log(newstr);
});