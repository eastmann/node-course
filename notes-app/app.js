const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

// Customize yargs
yargs.version('1.1.0')

// Create 'add' command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
            alias: 't'
        },
        body: {
            describe: 'Note text',
            demandOption: true,
            type: 'string',
            alias: 'b'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// Create 'remove' command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note!')
    }
})

// Create 'read' command
yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function() {
        console.log('Reading the note!')
    }
})

// Create 'list' command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log('Listing the notes!')
    }
})

// console.log(yargs.argv)

yargs.parse()
