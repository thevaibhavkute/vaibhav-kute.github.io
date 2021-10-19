

function validateForm()
{
    var x=document.forms["myform"]["fname"].value; 

    if(x==null || x=="" )
    {
        alert("Please Enter the Name");
        return false;
    }

    var y=document.forms["myform"]["lname"].value;

    if(y==null || y=="")
    {
        alert("Please enter the last name");
        return false;
    }
    else
    {
        return true;
    }

}