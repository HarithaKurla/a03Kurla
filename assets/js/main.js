function formRefresh(i)
{
    document.getElementById("costForm").reset();
    // setForm(i);
}

function submitForm(i)
{
	// setForm(i);
	var CT = document.getElementsByName("CourseType");
    var sd = document.getElementById("StudentDropdown")
    var In = document.getElementsByName("Inclass");
    var On = document.getElementsByName("Online");
    var Re = document.getElementsByName("Residency");
    var tb = document.getElementsByName("TextBooks");
    var me = document.getElementsByName("Meals");
	if(CT[0].checked == false && CT[1].checked == false)
	{	
		alert("Please select a course type." );
		CT[0].focus();
		return false;
	}

     else if(sd.value=="0")
	{	
	 	alert("Please select Type of Student" );
	 	sd.value.focus();
		return false;
	 }
     else if (In.value == "") {
        alert("Please enter the number of Inclass Credit hours");
        return false;
    }
     else if (On.value == "") {
        alert("Please enter the number of Online Credit hours");
        return false;
    }
    else if(Re[0].checked == false && Re[1].checked == false)
	{	
		alert("Please select a Residency Needed or not" );
		Re[0].focus();
		return false;
	}
    else if(tb[0].checked == false && tb[1].checked == false)
	{	
		alert("Please select a TextBooks required or not" );
		tb[0].focus();
		return false;
	}
     else if(me.value=="0")
	{	
	 	alert("Please select Meals type" );
	 	me.value.focus();
		return false;
	 }
      
    var k = calculateCost(i); 
    document.getElementById("result").innerHTML="Total tution fee cost is";
    $('#Totalcost').html(k);

    console.log(k)
   

    alert($("#Totalcost").html());
    return false;
// document.getElementById("Totalcost").innerHTML = calculateCost(i);

}

function calculateCost(i)
{
    var UGISInclass= 450.00;
    var UGISOnline=550.00;
    var UGOSInClass=500.00;
    var UGOSOnline=600.00;
    var UGIntInclass=550.00;
    var UGIntOnline=630.00;
    var GISInclass=636.00;
    var GISOnline=700.00;
    var GOSInClass=700.00;
    var GOSOnline=730.00;
    var GIntInclass=750.00;
    var GIntOnline=760.00;
    var parking=150.00;
    var GYM=300.00;
    var lib=200.00;
    var Residency=1000;
    var text=200;
    var meal1=75;
    var meal2=150;
    var meal3=250;
    var CT = document.getElementsByName("CourseType");
    var sd = document.getElementById("StudentDropdown")
    var In = document.getElementsByName("Inclass");
    var On = document.getElementsByName("Online");
    var Re = document.getElementsByName("Residency");
    var tb = document.getElementsByName("TextBooks");
    var me = document.getElementsByName("Meals");
    var cost = 0;
    if(CT[0].checked == true)
    {
        if(document.getElementById("StudentDropdown").value=="instate")
        {
            console.log("instate:",document.getElementById("StudentDropdown").value);
            cost += document.getElementsByName("Inclass")[0].value*UGISInclass+document.getElementsByName("Online")[0].value*UGISOnline;
              console.log("cost1",cost);
        }
        else if(document.getElementById("StudentDropdown").value=="outstate")
        {
             cost+=document.getElementsByName("Inclass")[0].value*UGOSInClass+document.getElementsByName("Online")[0].value*UGOSOnline;
             console.log("cost2",cost);
        }
        else if(document.getElementById("StudentDropdown").value=="international")
        {
             cost+=document.getElementsByName("Inclass")[0].value*UGIntInclass+document.getElementsByName("Online")[0].value*UGIntOnline;
             console.log("cost3",cost);
        }
    
        if(document.getElementsByName("Residency")[0].checked==true)
        {
            cost+=Residency;
            console.log("cost4",cost);
        }
        if(document.getElementsByName("TextBooks")[0].checked==true)
        {
            cost+=text;
            //cost+=75;
            
            console.log("cost5",cost);
        }
        if (document.getElementById("Meals").value=="75") {
            cost+=meal1;
        }
        if (document.getElementById("Meals").value=="150") {
            cost+=meal2;
        }
        if (document.getElementById("Meals").value=="250") {
            cost+=meal3;
        }
    }
     if(CT[1].checked == true)
    {
        if(document.getElementById("StudentDropdown").value=="instate")
        {
            console.log("instate:",document.getElementById("StudentDropdown").value);
            cost += document.getElementsByName("Inclass")[0].value*GISInclass+document.getElementsByName("Online")[0].value*GISOnline;
              console.log("cost1",cost);
        }
        else if(document.getElementById("StudentDropdown").value=="outstate")
        {
             cost+=document.getElementsByName("Inclass")[0].value*GOSInClass+document.getElementsByName("Online")[0].value*GOSOnline;
             console.log("cost2",cost);
        }
        else if(document.getElementById("StudentDropdown").value=="international")
        {
             cost+=document.getElementsByName("Inclass")[0].value*GIntInclass+document.getElementsByName("Online")[0].value*GIntOnline;
             console.log("cost3",cost);
        }
    
       if(document.getElementsByName("Residency")[0].checked==true)
        {
            cost+=Residency;
            console.log("cost4",cost);
        }
        if(document.getElementsByName("TextBooks")[0].checked==true)
        {
            cost+=text;
            //cost+=75;
            
            console.log("cost5",cost);
        }
        if (document.getElementById("Meals").value=="75") {
            cost+=meal1;
        }
        if (document.getElementById("Meals").value=="150") {
            cost+=meal2;
        }
        if (document.getElementById("Meals").value=="250") {
            cost+=meal3;
        }
    }

 return cost;
    }

