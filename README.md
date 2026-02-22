## Answers to Questions :

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 1️⃣getElementById() 
getElementById() selects a single HTML element using its unique id.
It returns the element as an object.
We use it when:
The element has a unique id
We need to access or change one specific element
Since an id is unique on a page, this method always returns only one element.

Example:
<h1 id="title">Hello World</h1>  (HTML);
const heading = document.getElementById("title"); (JavaScript)

2️⃣ getElementsByClassName()
getElementsByClassName() selects elements using their class name.
It returns an HTMLCollection, which is like an array but not exactly an array.
We use it when:
Many elements have the same class
We want to access all of them
To get a specific element, we can use its index, like [0] for the first element.

Example:
<p class="text">One</p>(HTML)
<p class="text">Two</p>(HTML)
const items = document.getElementsByClassName("text"); (JavaScript)
items[0]; (access first element)

3️⃣ querySelector()
querySelector() selects the first HTML element that matches a CSS selector.
It returns the element as an object.
We use it when:
We need only one element
We want to select elements using CSS selectors, like an id (#id), a class (.class), or a tag name (div, p, etc.)
It always selects the first matching element

Example:
<p class="text">Two</p>(HTML)
const firstText = document.querySelector(".text"); (JavaScript)

4️⃣ querySelectorAll()
querySelectorAll() selects all HTML elements that match a CSS selector.
It gives a NodeList, which is similar to an array but not exactly an array.
We use it when:
Many elements match the same selector
We want to work with all of them
We can loop through them using forEach() or get a specific element using an index, like [0]

Example:
<p class="text">Two</p>(HTML)
const items = document.querySelectorAll(".text");(JavaScript)
items.forEach(item => console.log(item.innerText));(JavaScript)
✅ Summary:
==>All of these methods help JavaScript find and manipulate elements in the HTML.
==>They let us select specific elements or multiple elements so we can change content, style, or behavior.

### 2. How do you create and insert a new element into the DOM?

2️⃣ How We create and insert a new element into the DOM:

To create and insert a new element in the DOM, first of all we use document.createElement("tag") to create the element in memory. At this stage, it is not visible on the page. Next, we add some content to the element using innerText or set attributes like className. Once the element is ready, we can insert it into the page using different methods like: appendChild() to add it as the last child of a parent, prepend() to add it as the first child, insertBefore() to place it before a specific element, before() and after() to insert relative to another element, insertAdjacentElement() or insertAdjacentHTML() to insert at a specific position, and replaceChild() to swap an existing element with the new one. This process allows JavaScript to dynamically add, insert, or replace content and elements on a webpage.

Example:
const newDiv = document.createElement("div");
newDiv.innerText = "I replaced the old element";
document.body.replaceChild(newDiv, ref);

const p = document.createElement("p");
p.innerText = "Last child";
document.body.appendChild(p);

