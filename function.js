function regex(){
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById("mail");

    if (regexEmail.test(email.value)) {
        document.getElementById("mailError").innerHTML = "";
        return true;
        
    }  else {
        document.getElementById("mailError").innerHTML = "Почта не правильно введена";
        return false;
    }
}
function str(){
    let st = document.getElementById("comment").value;
    if(st.length < 3 || st.length > 100)
    {
        document.getElementById("commentError").innerHTML = "Cимволов слишком мало или много";
        return false;
    }else{
        document.getElementById("commentError").innerHTML = "";
        return true;
    }
}
function marks(){
    let k = true;
    let i = 0;
    document.getElementById("markError").innerHTML = "";
    for(i=0;i<5;i++){
        let comms = document.getElementsByName("mark");
            if(comms[i].checked==true){        
                return true;
            }     
    }
    document.getElementById("markError").innerHTML = "не выбарана";
        return false;
}
