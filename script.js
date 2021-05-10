function compute()
{
   var principal = document.getElementById("principal").value;
        if(principal == ""){
            alert("Insert a number");
            onfocus(principal);
            return false;
        }if(principal < 0){
            alert("Insert a positive number");
            onfocus(principal);
            return false;
        }
   var rate      = document.getElementById("rate").value;
   var years     = document.getElementById("years").value;
   var interest  = principal * (years * (rate / 100));
   var year      = new Date().getFullYear()+parseInt(years);
   var amount    = principal - (principal - interest);
   document.getElementById("result").innerHTML="\<br\>If you deposit "
   +principal+",\<br\>at a Rate of "+rate+"%\<br\>You receive an amount of $"+amount+",\<br\>In the year "+year+"\<br\>";
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";

}
        