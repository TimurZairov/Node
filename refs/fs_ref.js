const fs = require('fs')
const path = require('path')

// File system
//создание папки

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if(err) {
//         throw new Error(err)
//     }
//     console.log("папка создана")
// })



//создание файла

// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello World',
//     (err) => {
//         if (err) {
//             throw new Error(err)
//         }
//         console.log("Файл был создан")
//
//         // изменение созданного файла без перетирания
//         fs.appendFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             " From append file",
//             (err) => {
//                 if (err) {
//                     throw new Error(err)
//                 }
//
//                 console.log('Файл был изменен')
//
//             }
//         )
//     }
// )
//
// //прочитать файл c BUFFER
//
// fs.readFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'utf-8',
//     //принимает data
//     (err, data) => {
//         if (err) throw new Error(err)
//         console.log(data)
//     }
// )


//переименовать файл


fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    (err) => {
        if (err) throw new Error(err)
        console.log('Имя файла бфло изменено')
    }
)
