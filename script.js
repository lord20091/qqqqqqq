let son = Math.round(Math.random()*100);

alert(son);

if (son % 3 === 0 && son % 5 === 0) {
    alert(`bu ` + son + `son fizzbuzz`)
} else if (son % 5 == 0) {
    alert(`bu ` + son + ` son buzz`) 
} else if (son % 3 == 0) {
    alert(`bu ` + son  + ` son fizz `)
} else {
    alert(`bu ` + son + ` son ham fizz, ham buzz emas`)
}