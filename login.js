
function confirmpass(input)
{
    var pass = document.getElementById("password").value;
    var conf =document.getElementById("conf").value;
    if (pass.value=="") {
        alert("please enter password");
    
    }
    else {
    
    }
    if (pass.value.match(/[A-Z]/g))
    {
    
    
    }
    else {
        alert("Enter Upper case letters");
    }
    if (pass.value.match(/[a-z]/g))
    {
    
    }
    else {
        alert("Enter Lower case Letters");
    }
    if (pass.value.match(/^(?=.*\d).{8,2000}$/g))
    {
    
    }
    else {
        alert("enter 8 characters at least");
    }
if(pass!=""){
    if (conf!=pass)
    {
        alert("please confirm password correctly!!!!");
    }
    else {
        alert("correct!!")
        window.location.href="homeaftersignup.html";
    }

}
   
}
function verifyPassword(PPR){
if (PPR.value=="") {
    alert("please enter password");

}
else {

}
if (PPR.value.match(/[A-Z]/g))
{


}
else {
    alert("Enter Upper case letters");
}
if (PPR.value.match(/[a-z]/g))
{

}
else {
    alert("Enter Lower case Letters");
}
if (PPR.value.match(/^(?=.*\d).{8,2000}$/g))
{

}
else {
    alert("enter 8 characters at least");
}
if (PPR.value.match(/[A-Z].[a-z]/g))
{
   window.alert("login successfully!!");
    window.location.href="index.html";
}
}
