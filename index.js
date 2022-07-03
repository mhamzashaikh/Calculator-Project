var myInputText = "";
var myInput = document.getElementById("inputScreen");



var inputBtn = document.querySelectorAll(".myBtn");

Array.from(inputBtn).forEach((button) => {
    
    button.addEventListener("click", (e)=>{

        if(e.target.innerHTML == "="){
            myInputText = eval(myInputText);
            document.querySelector('#inputScreen').value = myInputText;
        }
        
        else if(e.target.innerHTML == "C"){
            myInputText = "";
            document.querySelector('#inputScreen').value = myInputText;
        }

        
        else{

            myInputText = myInputText + e.target.value;
            document.querySelector('#inputScreen').value = myInputText;

        }
  
    })
})



var myFunc = () =>{
    console.log();
}


