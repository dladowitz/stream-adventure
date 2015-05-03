// var split = require('split');
// var through = require('through2');
// var stream = through(write);
//
// var = lineNum = 1
// process.stdin
//     .pipe(split())
//     .pipe(through2(function (line, _, next) {
//         if(lineNum % 2 == 0  ){
//           console.log(line.toString().toUpperCase());
//         } else {
//           console.log(line.toString().toLowerCase());
//         }
//         next();
//     }))
// ;
//
// function write (buffer, encoding, next){
//   this.push(buffer.toString().toUpperCase());
//   next();
// }
//
// process.stdin.pipe(stream).pipe(process.stdout);

// --
var through = require('through2'),
    split = require('split'),
    nlines = 1;

function write(buf) {
    this.push(
        buf.toString()[
            nlines++ % 2 === 0? 'toUpperCase' : 'toLowerCase']() + '\n');
}

process.stdin
    .pipe(split())
    .pipe(through(write))
    .pipe(process.stdout);
