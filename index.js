
function main(){
    if(regex()==true && marks()==true && str()==true){
        let a = document.createElement("li");
        let b = document.createElement("span");
        let chislo;
        let email = document.getElementById("mail").value;
        let comm = document.getElementById("comment").value;
        let i = 0;
        for(i = 0; i < 5; i++){
            let comms = document.getElementsByName("mark");
            if(comms[i].checked==true){
                chislo = i + 1;
            }
        }
        let d = new Date();
        a.innerText = "Your email: " + email+ "\n";
        b.innerText = "Your Comment:   " + comm + "\n" + "Your mark is - "+ chislo +"\n" + "Date: " + d;
        a.appendChild(b);
        document.getElementById("myDIV").appendChild(a);
        document.getElementById("comment").value = "";
        document.getElementById("mail").value = "";
        comms[chislo-1].checked=false;
    }
    else{   
        regex();
        marks();
        str();
    }
    
}
