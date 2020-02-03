const fs = require('fs')
const util = require('util')
const path = require('path')

const textFileName = 'keyboard.txt'
const textFilePath = path.join(__dirname, textFileName)
const readFile = util.promisify(fs.readFile)

const read = () => {
    readFile(textFilePath)
        .then(data => {
            console.log("path:", textFilePath)
            console.log(data.toString())
            process.exit()
        })

}

read()