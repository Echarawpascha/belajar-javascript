var x = prompt("Please Enter any Number :");
//alert("Hi, Nice To Meet You, " + nama);

if(x % 2 == 0) {
    alert(x + "Even Number");
}else if (x % 2 == 1 ) {
    alert(x + "Odd Number");
}else{
    alert("That's Not A Number")
}

if (confirm("Apakah anda manusia")){
    location = "http://google.com"
}else {
    alert("Anda Di Penjara")
}