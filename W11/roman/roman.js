console.log('Numbers to Numerals');

function romanize (num) {
    if (!+num)
        return false;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

console.log( romanize( "1" ) );
console.log( romanize( 2 ) );
console.log( romanize( 3 ) );
console.log( romanize( 4 ) );
console.log( romanize( 5 ) );
console.log( romanize( 6 ) );
console.log( romanize( 9 ) );
console.log( romanize( 27 ) );
console.log( romanize( 48 ) );
console.log( romanize( 59 ) );
console.log( romanize( 93 ) );
console.log( romanize( 141 ) );
console.log( romanize( 163 ) );
console.log( romanize( 402 ) );
console.log( romanize( 575 ) );
console.log( romanize( 911 ) );
console.log( romanize( 1024 ) );
console.log( romanize( 3000 ) );