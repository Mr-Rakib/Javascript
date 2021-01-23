/*
    meta-character regular expression
    ^rakib --> anythings start with
    rakib$ --> anythings ends with
    ra.ib  --> one character between ra_ib, rakib, raakib
    ra*ib  --> zero or more character between ra and ib, rakib, raakkib, raaaaakib
    ra*ib  --> zero or more character between ra and ib, rakib, raakkib, raaaaakib
    ra?kib --> optional : rakib, rkib (both matches)
    
    -------------------------Character Set-----------------------------
    ra\*kib     --> optional : should matches wih ra*kib
    r[a-z]kib   --> character set : should matches with: rakib, rbkib, rckib, rdkib ..
    r[akl]kib   --> character set : should matches with: rakib, rkkib, rlkib.
    r[^akl]kib  --> not matches : should not matches with: rakib, rkkib, rlkib.
    r[a-kA-K]ki[bB]  --> matches : should matches with: rakib, rAkib, rAkiB.

    ra{2}kib --> a: exactly 2 times. 
    ra{0,2}kib --> a: exactly 0 or 2 times. 
    \w  --> Word character
    \w+ --> One or more word character
    \W  --> Non word character
    \W+ --> One or non more word character
    \d  --> digit
    \d+ --> more than 1 digit
    \D  --> non digit
    \D+ --> more than 1 non digit
    \s  --> whitespace character
    \s+ --> one or more whitespace character
    \S  --> non whitespace character
    \S+ --> one or more non whitespace character
    \b  --> word boundery
*/


//email validation
let regex = /^[a-z]{1}([\w0-9\.]){0,30}@([a-zA-Z0-9]){3,20}\.[a-z]{2,10}$/;
// let str = 'hello i am md Rakib, working as a software developer at match wheel limited. rakib is a good boy '
let str = 'mrhasa.334@gmail.com';
console.log(regex);
console.log(regex.exec(str));