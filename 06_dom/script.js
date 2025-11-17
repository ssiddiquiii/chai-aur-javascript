/* NOTE: getElementByClassName => HTMLCollection || querySelectorAll => NodeList */

/* =============== DOM Basics ============  */

// console.log(window);
// console.log(window.document);
// console.log(document);
// console.log(document.baseURI)
// console.log(document.links)
// console.log(document.links[0])
// document.getElementById("firstHeading")
// document.getElementById("firstHeading").innerHTML = "<h1>Chai Code</h1>"

/* =============== DOM Basics Part 1 ============  */

// document.getElementById('title')
// {/* <h1 id=​"title" class=​"heading">​DOM learning on Chai Code​</h1>​ */}

// document.getElementById('title').id
// 'title'

// document.getElementById('title').className
// 'heading'

// document.getElementById('title').getAttribute('id')
// 'title'

// document.getElementById('title').getAttribute('class')
// 'heading'

// document.getElementById("title").setAttribute("class", "test");

// document.getElementById("title").setAttribute("class", "test heading");



// const title = document.getElementById("title");
// title.style.backgroundColor = "green";
// title.style.padding = "15px";
// title.style.borderRadius = "10px";



// const title = document.getElementById("title");

// title.innerText
// 'DOM learning on Chai Code'

// title.textContent
// 'DOM learning on Chai Code Test Text'

// title.innerHTML
// 'DOM learning on Chai Code <span style="display: none;">Test Text</span>'


// document.querySelector('h2')
// <h2>​Lorem ipsum dolor sit.​</h2>

// document.querySelector('#title')
// <h1 id=​"title" class=​"heading">​…​</h1>

// document.querySelector('.heading')
// <h1 id=​"title" class=​"heading">​…​</h1>

// document.querySelector('input[type="password"]')
// {/* <input type=​"password" name id>​ */}



// document.querySelector('ul')
// <ul>​…​</ul>
//
// const myUl = document.querySelector('ul')
// undefined

// myUl.querySelector('li:last-child')
// <li>​…​</li>​::marker​"color"</li>

// const li = myUl.querySelector('li:last-child')
// undefined

// li.style.color = "green"
// 'green'

// li.innerText = "five"
// 'five'



// document.querySelectorAll('li')
// NodeList(3) [li, li, li]

// const liList = document.querySelectorAll('li')
// undefined

// liList[0].style.color = "pink"
// 'pink'




// const myH2 = document.querySelectorAll('h2')
// undefined

// myH2
// NodeList(3) [h2, h2, h2]

// myH2.style.color = "green"
// VM2514:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:18
// (anonymous) @ VM2514:1Understand this error

// myH2[1].style.color = "green"
// 'green'





// const myH2 = document.querySelectorAll("h2");
// undefined;

// myH2.forEach((li) => {
//   li.style.backgroundColor = "red";
// });




// document.getElementsByClassName('list-item')
// HTMLCollection(4)[li.list - item, li.list - item, li.list - item, li.list - item]

// const liList = document.getElementsByClassName('list-item')
// undefined

// Array.from(liList) // convert into array
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]




// const liList = document.getElementsByClassName('list-item')
// undefined

// Array.from(liList)
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]

// const myConvertedArray = Array.from(liList)
// undefined

// myConvertedArray.forEach((li) => {
//     li.style.color = "orange"
// })
// undefined