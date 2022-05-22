function check(form){
    if(form.fname.value=="" || form.fname.value==null){
        alert("Error: First name can't be empty");
        form.fname.focus();
        return false;
    } 

    if(form.lname.value==""||form.lname.value==null){
        alert("Error: Last name can't be empty");
        form.lname.focus();
        return false;
    }

    if(form.emaill.value=="" || form.emaill.value==null){
        alert("Error: E-mail can't be empty");
        form.emaill.focus();
        return false;
    }

    if(form.pass1.value=="" || form.pass1.value==null){
        alert("Error: The password can't be empty");
        form.pass1.focus();
        return false;
    }
    
    if(form.pass2.value!=form.pass1.value){
        alert("Error: Please check that you entered the same password");
        form.pass2.focus();
        return false;
    }
    
    if(form.x.value==""||form.x.value==null){
        alert("You Should Choose Which Kind Of User You Are.");
        return false;
    }

   
}
function check2(form){
    if(form.email.value=="" || form.email.value==null){
        alert("Error: E-mail can't be empty");
        form.email.focus();
        return false;
    }
    
    if(form.pass.value=="" || form.pass.value==null){
        alert("Error: The password can't be empty");
        form.pass.focus();
        return false;
    }
}

