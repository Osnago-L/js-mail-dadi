let emailPrompt = prompt("Inserisci la tua email (test@test.it)");
let emailList = ["test@test.it","test2@test.it","test3@test.it"];
let emailCheck= false;

for (i=0; i< emailList.length; i++){
    if(emailList[i]==emailPrompt){
        emailCheck= true;
    }
};

if (emailCheck == true){
    alert("Accesso verificato")
}else{
    alert("Accesso negato")
}