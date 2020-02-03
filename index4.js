const fs = require('fs')
const util = require('util')
const path = require('path')

const targetFileName = 'S.txt'
const targetPath = path.join(__dirname, targetFileName)
const writeFile = util.promisify(fs.writeFile)

async function creatFile (content) {
    try{
        await writeFile(targetPath, content)
    }catch (error){
        console.log(error)
    }
}

creatFile("SAMER")


