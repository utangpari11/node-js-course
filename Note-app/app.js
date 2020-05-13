const chalk = require("chalk");
const yargs = require('yargs');
const notes = require('./notes.js');

// console.log(process.argv)
yargs.version('1.1.0');
//Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
      title: {
          describe: 'Note title',
          demandOption: true, // It makes a title to mandatory input
          type: 'string'  // set string value for title in
      },
      body: {
          describe: 'Body Option',
          demandOption: true,
          type: 'string'
      }
    },
    handler: function(argv){
        console.log('Title: '+argv.title+ ', Body: ',argv.body)
        notes.addNotes(argv.title,argv.body)
    }
})
//Create remove command
yargs.command({
    command:'remove',
    describe:'remove a new note',
    builder:{
        title: {
            describe:'Note title',
            demandOption:true,            
            type:'string'
        }
    },
    handler: function(argv){    
        console.log('Removing a note')
        console.log('Title to remove: '+argv.title)
        notes.removeNote(argv.title)
    }
})
//Create list command
yargs.command({
    command: 'list',
    describe: 'list a new note',
    handler: function(){
        console.log('list a note')
    }
})
//Create read command
yargs.command({
    command:'read',
    describe:'read a new note',
    handler: function(){
        console.log('read a note')
    }
})

/*
//console.log("******************************* \n Final console for yargs.argv",yargs.argv);
If you don't write this line It will not command anything from whole code 
so insted of this write this - yargs.parse()
*/
yargs.parse()