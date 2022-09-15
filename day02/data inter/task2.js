

var m =alert("please entering your user info ");
var m = prompt("name please : ");
document.write("welcome dear guest " +m);

document.write("<br>");

var h =prompt("enter your phone num");
document.write(`your phone number is  ${h}`);

document.write("<br>");

var b =prompt("enter you mobile num");
document.write("your mobile number is " +b);

document.write("<br>");

var e=prompt("enter your email ");
document.write("your email address is " + e);


document.write("<br><br><br><br><br><br>");

var date=new Date()

document.write("today is :" + date.toLocaleDateString('en-us', 
{weekday:"short", day :"numeric",month: "numeric", year:"numeric"}));

