//os = operation system


const os = require('os')

//какая платформа
console.log(os.platform())


//Архитектура
console.log(os.arch())

//Информация о процессоре

console.log(os.cpus())


//Свободная память

console.log(os.freemem())

// Сколько всего памяти есть

console.log(os.totalmem())

//Корневая директория

console.log(os.homedir())

//Сколько система работает

console.log(os.uptime())
