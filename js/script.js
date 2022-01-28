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


// Question 1
const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

cat.complain();


// Question 2
const heading = document.querySelector("h3");

heading.innerHTML ="Updated heading";


// Question 3
heading.style.fontSize = "2em";


// Question 4
heading.classList.add("subheading");


// Question 5
const paragraphs = document.querySelectorAll("p");

for(let i=0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}


// Question 6
const resultsContainer = document.querySelector("div.results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


// Question 7
function printList(list) {
    
    for(let i=0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

printList(cats);


// Question 8
function createCats(cats) {
    
    let html = "";

    for(let i=0; i < cats.length; i++) {

        let ageUnknown = "Age unknown";

        if(cats[i].age) {
            ageUnknown = cats[i].age;
        }

        html += `<div class="cat">
                    <h5>${cats[i].name}</h5>
                    <p>${ageUnknown}</p>
                </div>`;
    }

    return html;
}

const newHTML = createCats(cats);

const catContainer = document.querySelector("div.cat-container");
catContainer.innerHTML = newHTML;