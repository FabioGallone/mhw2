/* TODO: inserite il codice JavaScript necessario a completare il MHW! */



function ChooseImage(event) {

const selected = event.currentTarget;
const image = selected.querySelector(".checkbox"); 



const area_selezione = document.querySelectorAll(".choice-grid div");

for(const box of area_selezione){
    if(box.dataset.questionId === selected.dataset.questionId){
        const image = box.querySelector(".checkbox"); 
        image.src= "images/unchecked.png";  




         if(box.dataset.choiceId !== selected.dataset.choiceId){
            box.classList.remove("selected");
            box.classList.add("unselected");
            selected.classList.remove("unselected");
     
        }
        else{        
            selected.classList.add("selected");
            image.src= "images/checked.png";
              
        }

      
    }
    
}
risposteprese[selected.dataset.questionId]=selected.dataset.choiceId;





if(GameOver()){
    RimuoviScelta();
    DefinisciPersonalita();
    
   
}

}



function GameOver(){

    if(risposteprese["one"]!==undefined && risposteprese["two"]!==undefined && risposteprese["three"]!=undefined){
    return true;
    }

    else
    return false;
}



function RimuoviScelta(){

    if(GameOver()){
        for(const box of selected){
            box.removeEventListener("click", ChooseImage);
            
        }

    }
    results.classList.remove("hidden");
    
}

function RicominciaQuiz(){
    InizializzaVettore();
        
    
    const area_selezione = document.querySelectorAll(".choice-grid div");
    for(const box of area_selezione){
        const image = box.querySelector(".checkbox"); 
        image.src= "images/unchecked.png"; 
        box.classList.remove("selected");
        box.classList.remove("unselected");
    }
    results.classList.add("hidden");


    for(const box of selected){
        box.addEventListener("click", ChooseImage);
        
    }


    window.scrollTo(0, 0);

}

function InizializzaVettore(){
    risposteprese["one"]=undefined;
    risposteprese["two"]=undefined;
    risposteprese["three"]=undefined;
}

function DefinisciPersonalita(){
    
    if(risposteprese["one"]!==risposteprese["two"] && risposteprese["two"]!==risposteprese["three"]){
    stampaPersonalita("one");
    }

    else if(risposteprese["two"]===risposteprese["three"])
    stampaPersonalita("two");

    else if(risposteprese["one"]===risposteprese["two"])
    stampaPersonalita("one");
    
    else if(risposteprese["one"]===risposteprese["three"])
    stampaPersonalita("one");


}


function stampaPersonalita(numero){
 
    const titleContainer = document.querySelector("#results h1");
    const paragraphContainer = document.querySelector("#results p");

  

    titleContainer.textContent= RESULTS_MAP[risposteprese[numero]].title;
    paragraphContainer.textContent= RESULTS_MAP[risposteprese[numero]].contents;

}



   


const selected= document.querySelectorAll(".choice-grid div")
const risposteprese = {};



const reset = document.querySelector(".button");
reset.addEventListener("click", RicominciaQuiz);



for(const box of selected){
    box.addEventListener("click", ChooseImage);

}