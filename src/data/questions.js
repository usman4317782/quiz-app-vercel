// Sample question bank structure
// User should replace this with their 50 questions

const questionBank = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        correctAnswer: "Hyper Text Markup Language",
    },
    {
        question: "Which of the following is the correct HTML file extension?",
        options: [".htm", ".html", "Both .htm and .html", ".txt"],
        correctAnswer: "Both .htm and .html",
    },
    {
        question: "What is the difference between static and dynamic websites?",
        options: ["Static websites use only HTML, dynamic websites use server-side programming", "Static websites are faster", "Dynamic websites can display different content based on user interaction", "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        question: "Which tag is used to create a paragraph in HTML?",
        options: ["<p>", "<para>", "<paragraph>", "<text>"],
        correctAnswer: "<p>",
    },
    {
        question: "What is the purpose of meta tags in HTML?",
        options: ["To style the webpage", "To provide metadata about the HTML document", "To create links", "To insert images"],
        correctAnswer: "To provide metadata about the HTML document",
    },
    {
        question: "Which attribute is used to provide alternative text for an image?",
        options: ["title", "alt", "src", "text"],
        correctAnswer: "alt",
    },
    {
        question: "What is the correct HTML tag for inserting a line break?",
        options: ["<break>", "<lb>", "<br>", "<newline>"],
        correctAnswer: "<br>",
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets",
    },
    {
        question: "Which CSS selector is used to select elements with a specific class?",
        options: ["#classname", ".classname", "classname", "*classname"],
        correctAnswer: ".classname",
    },
    {
        question: "Where should external CSS files be linked in an HTML document?",
        options: ["In the <body> section", "In the <head> section", "At the end of the document", "Anywhere in the document"],
        correctAnswer: "In the <head> section",
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: ["bgcolor", "background-color", "color", "bg-color"],
        correctAnswer: "background-color",
    },
    {
        question: "What is the correct CSS syntax to make all <p> elements bold?",
        options: ["p {text-weight: bold;}", "p {font-weight: bold;}", "p {text-style: bold;}", "p {font-style: bold;}"],
        correctAnswer: "p {font-weight: bold;}",
    },
    {
        question: "Which unit is NOT a valid CSS length unit?",
        options: ["px", "em", "pt", "ds"],
        correctAnswer: "ds",
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["text-size", "font-size", "text-style", "font-style"],
        correctAnswer: "font-size",
    },
    {
        question: "How do you make a list that lists items with bullets in CSS?",
        options: ["list-style-type: circle;", "list-type: bullets;", "list-style: bullets;", "bullet-style: disc;"],
        correctAnswer: "list-style-type: circle;",
    },
    {
        question: "Which property is used to control the overflow of content?",
        options: ["overflow", "flow", "content-flow", "text-overflow"],
        correctAnswer: "overflow",
    },
    {
        question: "What is the CSS property used to create space between the element's border and content?",
        options: ["margin", "padding", "spacing", "border-spacing"],
        correctAnswer: "padding",
    },
    {
        question: "Which CSS property is used to change the link color?",
        options: ["link-color", "a:color", "color", "text-color"],
        correctAnswer: "color",
    },
    {
        question: "What does the CSS outline property do?",
        options: ["Creates a line around elements, outside the border", "Creates a border", "Creates padding", "Creates margin"],
        correctAnswer: "Creates a line around elements, outside the border",
    },
    {
        question: "Which CSS property is used with the ::before and ::after pseudo-elements for generated content?",
        options: ["text", "content", "insert", "generate"],
        correctAnswer: "content",
    },
    {
        question: "Which of the following is the correct way to declare a JavaScript variable?",
        options: ["var myVar;", "variable myVar;", "v myVar;", "dim myVar;"],
        correctAnswer: "var myVar;",
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Digital Object Model"],
        correctAnswer: "Document Object Model",
    },
    {
        question: "Which method is used to access an HTML element by its ID in JavaScript?",
        options: ["getElementByName()", "getElementById()", "getElement()", "getElementsById()"],
        correctAnswer: "getElementById()",
    },
    {
        question: "What is the purpose of the window object in JavaScript?",
        options: ["It represents the browser window", "It represents the document", "It represents a form", "It represents an image"],
        correctAnswer: "It represents the browser window",
    },
    {
        question: "Which built-in JavaScript object is used to work with dates and times?",
        options: ["Calendar", "DateTime", "Date", "Time"],
        correctAnswer: "Date",
    },
    {
        question: "Which method is used to round a number to the nearest integer in JavaScript?",
        options: ["Math.round()", "Math.ceil()", "Math.floor()", "round()"],
        correctAnswer: "Math.round()",
    },
    {
        question: "What is the correct syntax for a JavaScript function?",
        options: ["function myFunction()", "function:myFunction()", "create myFunction()", "def myFunction()"],
        correctAnswer: "function myFunction()",
    },
    {
        question: "Which JavaScript method is used to add new elements to an array?",
        options: ["push()", "add()", "insert()", "append()"],
        correctAnswer: "push()",
    },
    {
        question: "What does the document.forms collection contain?",
        options: ["All form elements in the document", "All input elements", "All button elements", "All text elements"],
        correctAnswer: "All form elements in the document",
    },
    {
        question: "Which property returns the number of images in a document?",
        options: ["document.images.count", "document.images.length", "document.numberOfImages", "document.imageCount"],
        correctAnswer: "document.images.length",
    },
    {
        question: "What is the purpose of JavaScript events?",
        options: ["To style elements", "To respond to user interactions", "To create HTML elements", "To define CSS properties"],
        correctAnswer: "To respond to user interactions",
    },
    {
        question: "Which method is used to convert a string to uppercase in JavaScript?",
        options: ["toUpperCase()", "upperCase()", "toUpper()", "upper()"],
        correctAnswer: "toUpperCase()",
    },
    {
        question: "What does the length property return for a string in JavaScript?",
        options: ["The number of words", "The number of characters", "The size in bytes", "The number of lines"],
        correctAnswer: "The number of characters",
    },
    {
        question: "What is jQuery?",
        options: ["A JavaScript framework", "A JavaScript library", "A CSS framework", "A programming language"],
        correctAnswer: "A JavaScript library",
    },
    {
        question: "Which jQuery method is used to hide selected elements?",
        options: ["invisible()", "hide()", "display(none)", "hidden()"],
        correctAnswer: "hide()",
    },
    {
        question: "What is the jQuery selector syntax to select all <div> elements?",
        options: ["jQuery(div)", "$(\"div\")", "$(\"#div\")", "$(\".div\")"],
        correctAnswer: "$(\"div\")",
    },
    {
        question: "Which HTML element is commonly used to create a slider?",
        options: ["<slider>", "<div> with JavaScript/jQuery", "<slide>", "<carousel>"],
        correctAnswer: "<div> with JavaScript/jQuery",
    },
    {
        question: "What is Bootstrap?",
        options: ["A JavaScript library", "A CSS framework", "A programming language", "A database system"],
        correctAnswer: "A CSS framework",
    },
    {
        question: "What is the Bootstrap grid system based on?",
        options: ["10 columns", "12 columns", "16 columns", "8 columns"],
        correctAnswer: "12 columns",
    },
    {
        question: "Which Bootstrap class is used to create a basic container?",
        options: [".container", ".wrapper", ".box", ".main"],
        correctAnswer: ".container",
    },
    {
        question: "What is a Bootstrap Modal?",
        options: ["A type of button", "A dialog box/popup window", "A navigation menu", "A form element"],
        correctAnswer: "A dialog box/popup window",
    },
    {
        question: "Which Bootstrap class is used to create a button?",
        options: [".button", ".btn", ".click", ".submit"],
        correctAnswer: ".btn",
    },
    {
        question: "What is the purpose of Bootstrap Carousel component?",
        options: ["To create forms", "To create a slideshow/image slider", "To create navigation menus", "To create tables"],
        correctAnswer: "To create a slideshow/image slider",
    },
    {
        question: "Which Bootstrap component is used to create collapsible content?",
        options: [".dropdown", ".collapse", ".fold", ".hide"],
        correctAnswer: ".collapse",
    },
    {
        question: "What are floating labels in Bootstrap?",
        options: ["Labels that move when input is focused", "Labels that float on the page", "Labels with special colors", "Labels that are hidden"],
        correctAnswer: "Labels that move when input is focused",
    },
    {
        question: "Which HTML tag is used to define a table row?",
        options: ["<tr>", "<td>", "<table-row>", "<row>"],
        correctAnswer: "<tr>",
    },
    {
        question: "What is the correct HTML tag for creating a dropdown list?",
        options: ["<dropdown>", "<list>", "<select>", "<options>"],
        correctAnswer: "<select>",
    },
    {
        question: "Which input type is used to create a submit button in HTML forms?",
        options: ["type=\"button\"", "type=\"submit\"", "type=\"send\"", "type=\"form\""],
        correctAnswer: "type=\"submit\"",
    },
    {
        question: "What is the main difference between markup languages and programming languages?",
        options: ["Markup languages define structure, programming languages define logic", "Markup languages are faster", "Programming languages are newer", "There is no difference"],
        correctAnswer: "Markup languages define structure, programming languages define logic",
    },
    {
        question: "What is the importance of the World Wide Web?",
        options: ["Global information sharing and communication", "Entertainment only", "Gaming platform", "Email service"],
        correctAnswer: "Global information sharing and communication",
    },
];

export default questionBank;
