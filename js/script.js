//q1 
const cat = {
    complain: "Meow!",
    sayMeow: function() {
        console.log(this.complain);
    }
}

cat.sayMeow(); 

//q2 
const heading = document.querySelector("h3");
heading.innerHTML = ("updated heading");

//q3 
heading.style.fontSize = ("2em");

//q4 
heading.classList.add("subheading");


//q5 
const paragraphs = document.querySelectorAll("p");

for(let i= 0; i< paragraphs.length; i++){
    paragraphs[i].style.color = ("red");
} 


//q6 
const resultsContainer = document.querySelector(".results"); 
resultsContainer.innerHTML = resultsContainer.innerHTML + ("<p>New paragraph</p>");
resultsContainer.style.backgroundColor = ("yellow");


//q7 
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21 
    }
];

function listPrint(list) {
    for(let i=0; i < cats.length; i++) {
        let cat = cats[i].name;
        console.log(cat);
    }

}

listPrint();


//q8 

const container = document.querySelector(".cat-container");

let html = "";

function createCats(cats) {
    for(let i=0; i < cats.length; i++) {
        if(cats[i].age === undefined){
            cats[i].age = "Age unknown";
          
        }  
      
        html = html + `<div>
                            <h5>${cats[i].name}</h5>
                            <p>${cats[i].age}</p>
                        </div>`;
     
                                        
    
    }
    return html;
   
    
    
}createCats(cats);
container.innerHTML = html;

