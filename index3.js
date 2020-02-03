const fs = require('fs')
const util = require('util')
const path = require('path')

const textFileName = 'keyboard.txt'
const textFilePath = path.join(__dirname, textFileName)
const readFile = util.promisify(fs.readFile)

module.exports = async () => {
    try{
        const data = await readFile(textFilePath)
        console.log(data.toString())
    }catch (error){
        console.log(error)
    }
}

