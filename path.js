const path = require('path');
const notes = 'C:\Users\charumathi.hariharan\escape-seq-colors.txt';

path.dirname(notes) // /charumathi.hariharan
path.basename(notes) // notes.txt
path.extname(notes) // .txt
path.basename(notes, path.extname(notes)) //notes
const name = 'charumathi.hariharan'
path.join('/','users', name, 'notes.txt') //'/users/charumathi.hariharan/notes.txt'
path.resolve('escape-seq-colors.txt') //'\Users\charumathi.hariharan\escape-seq-colors.txt' if run from my home folder
path.normalize('\Users\charumathi.hariharan\..\\escape-seq-colors.txt') //'/users/escape-seq-colors.txt'
