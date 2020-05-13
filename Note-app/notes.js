const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(){
    return "Your notes.."
}
const addNotes = function(title,body){
    const notes = loadNotes()   
    const duplicateNotes = notes.filter( function(note){
        return note.title == title
    })  
    console.log("AddNotes func")
    if(duplicateNotes.length == 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New Note added")
    }else{
        console.log("Already Added")
    }
    
}

const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })
    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No note found'))
    }
    
    console.log("Note to remove title = "+title)
}

const saveNotes = function(notes){
    
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)    
}

const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)    
    } catch (err) {       
        return []
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote : removeNote
}