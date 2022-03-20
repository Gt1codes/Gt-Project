let score = prompt("Please enter your score");

if (score>=0 && score<=20) {
    alert ("Your grade is: F9");
    document.write ("Is: " + score + " even a score?")
}

else if (score>=21 && score<=40) {
    alert ("Your grade is: E8");
    document.write ("There's room for improvement")
}

else if (score>=41 && score<=60) {
    alert ("Your grade is: D7");
    document.write ("There's room for improvement")
}

else if (score>=61 && score<=80) {
    alert ("Your grade is: C");
    document.write ("Nice!")
}

else if (score>=81 && score<=90) {
    alert ("Your grade is: B");
    document.write ("Nice! Keep it up.")
}

else if (score>=91 && score<=100) {
    alert ("Your grade is: A");
    document.write ("Great!")
}