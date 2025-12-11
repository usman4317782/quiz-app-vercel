// Sample question bank structure
// User should replace this with their 50 questions
// const questionBank = [


const questionBank = [
    // ============================================
    // SECTION 1: Introduction / WWW / Static & Dynamic Websites (30 questions)
    // ============================================

    // Easy (10 questions)
    {
        id: 1,
        category: "Introduction to WWW",
        question: "What does WWW stand for?",
        options: ["World Wide Web", "Wide World Web", "Web World Wide", "World Web Wide"],
        correctAnswer: "World Wide Web"
    },
    {
        id: 2,
        category: "Introduction to WWW",
        question: "Who is credited with inventing the World Wide Web?",
        options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"],
        correctAnswer: "Tim Berners-Lee"
    },
    {
        id: 3,
        category: "Introduction to WWW",
        question: "What is a static website?",
        options: ["A website that requires a database", "A website with fixed content that doesn't change unless manually updated", "A website with animations", "A website that uses JavaScript"],
        correctAnswer: "A website with fixed content that doesn't change unless manually updated"
    },
    {
        id: 4,
        category: "Introduction to WWW",
        question: "What protocol is primarily used for transferring web pages?",
        options: ["FTP", "SMTP", "HTTP", "TCP"],
        correctAnswer: "HTTP"
    },
    {
        id: 5,
        category: "Introduction to WWW",
        question: "What is a dynamic website?",
        options: ["A website with animations", "A website that displays content based on user interaction or database queries", "A website written in HTML only", "A website without CSS"],
        correctAnswer: "A website that displays content based on user interaction or database queries"
    },
    {
        id: 6,
        category: "Markup vs Programming",
        question: "What is the main difference between markup languages and programming languages?",
        options: ["Markup languages describe structure, programming languages provide logic", "They are the same", "Markup languages are faster", "Programming languages cannot create websites"],
        correctAnswer: "Markup languages describe structure, programming languages provide logic"
    },
    {
        id: 7,
        category: "Introduction to WWW",
        question: "Which of the following is a markup language?",
        options: ["Python", "HTML", "Java", "C++"],
        correctAnswer: "HTML"
    },
    {
        id: 8,
        category: "Static & Dynamic Websites",
        question: "Which type of website typically loads faster?",
        options: ["Dynamic websites", "Static websites", "Both load at the same speed", "It depends on the color scheme"],
        correctAnswer: "Static websites"
    },
    {
        id: 9,
        category: "Introduction to WWW",
        question: "What does URL stand for?",
        options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Retrieval Locator", "Universal Retrieval Link"],
        correctAnswer: "Uniform Resource Locator"
    },
    {
        id: 10,
        category: "Static & Dynamic Websites",
        question: "Which technology is commonly used to create dynamic websites?",
        options: ["Only HTML", "Server-side scripting languages like PHP", "Only CSS", "Paint"],
        correctAnswer: "Server-side scripting languages like PHP"
    },

    // Medium (10 questions)
    {
        id: 11,
        category: "Introduction to WWW",
        question: "What year was the World Wide Web invented?",
        options: ["1989", "1995", "1985", "2000"],
        correctAnswer: "1989"
    },
    {
        id: 12,
        category: "Static & Dynamic Websites",
        question: "Which of the following is an advantage of static websites?",
        options: ["Highly personalized content", "Real-time data updates", "Better security and faster loading", "Complex user interactions"],
        correctAnswer: "Better security and faster loading"
    },
    {
        id: 13,
        category: "Markup vs Programming",
        question: "Can markup languages perform calculations or logic operations?",
        options: ["Yes, all markup languages can", "No, they only describe content structure", "Only HTML5 can", "Only with plugins"],
        correctAnswer: "No, they only describe content structure"
    },
    {
        id: 14,
        category: "Introduction to WWW",
        question: "What is the purpose of a web browser?",
        options: ["To host websites", "To interpret and display web content", "To create websites", "To store databases"],
        correctAnswer: "To interpret and display web content"
    },
    {
        id: 15,
        category: "Static & Dynamic Websites",
        question: "Which type of website requires a Content Management System (CMS)?",
        options: ["Static websites only", "Dynamic websites typically", "Neither type", "Both equally"],
        correctAnswer: "Dynamic websites typically"
    },
    {
        id: 16,
        category: "Introduction to WWW",
        question: "What does HTTP stand for?",
        options: ["HyperText Transfer Protocol", "HyperText Translation Protocol", "HighText Transfer Protocol", "HyperText Transmission Process"],
        correctAnswer: "HyperText Transfer Protocol"
    },
    {
        id: 17,
        category: "Markup vs Programming",
        question: "Which of the following is NOT a characteristic of markup languages?",
        options: ["Uses tags to define elements", "Describes document structure", "Executes conditional logic", "Formats content presentation"],
        correctAnswer: "Executes conditional logic"
    },
    {
        id: 18,
        category: "Static & Dynamic Websites",
        question: "What is the main disadvantage of static websites?",
        options: ["They are too secure", "Content updates require manual changes to HTML files", "They load too quickly", "They are too interactive"],
        correctAnswer: "Content updates require manual changes to HTML files"
    },
    {
        id: 19,
        category: "Introduction to WWW",
        question: "Which organization maintains web standards?",
        options: ["Microsoft", "W3C (World Wide Web Consortium)", "Google", "Apple"],
        correctAnswer: "W3C (World Wide Web Consortium)"
    },
    {
        id: 20,
        category: "Static & Dynamic Websites",
        question: "Which scenario is best suited for a dynamic website?",
        options: ["A simple portfolio page", "An e-commerce store with user accounts", "A company's about page", "A digital business card"],
        correctAnswer: "An e-commerce store with user accounts"
    },

    // Hard (10 questions)
    {
        id: 21,
        category: "Introduction to WWW",
        question: "What is the difference between the Internet and the World Wide Web?",
        options: ["They are the same thing", "The Internet is the infrastructure; the Web is a service that runs on it", "The Web came before the Internet", "The Internet is only for email"],
        correctAnswer: "The Internet is the infrastructure; the Web is a service that runs on it"
    },
    {
        id: 22,
        category: "Static & Dynamic Websites",
        question: "What technology combination is commonly referred to as the LAMP stack for dynamic websites?",
        options: ["Linux, Apache, MySQL, PHP", "Linux, Angular, MongoDB, Python", "Linux, Apache, MSSQL, Perl", "Linux, AWS, MySQL, PHP"],
        correctAnswer: "Linux, Apache, MySQL, PHP"
    },
    {
        id: 23,
        category: "Markup vs Programming",
        question: "Why is XML considered a markup language rather than a programming language?",
        options: ["It is too old", "It describes data structure without executing logic or algorithms", "It cannot be used with databases", "It is only for styling"],
        correctAnswer: "It describes data structure without executing logic or algorithms"
    },
    {
        id: 24,
        category: "Introduction to WWW",
        question: "What is the purpose of the HTTPS protocol?",
        options: ["To make websites load faster", "To provide encrypted communication over HTTP", "To compress images", "To enable video streaming"],
        correctAnswer: "To provide encrypted communication over HTTP"
    },
    {
        id: 25,
        category: "Static & Dynamic Websites",
        question: "What is server-side rendering in the context of dynamic websites?",
        options: ["Rendering graphics on the client", "Generating HTML on the server before sending to the client", "Using only CSS for styling", "Compressing files on the server"],
        correctAnswer: "Generating HTML on the server before sending to the client"
    },
    {
        id: 26,
        category: "Introduction to WWW",
        question: "What is the primary function of DNS in the World Wide Web?",
        options: ["To encrypt data", "To translate domain names to IP addresses", "To store website content", "To compress images"],
        correctAnswer: "To translate domain names to IP addresses"
    },
    {
        id: 27,
        category: "Static & Dynamic Websites",
        question: "What is the JAMstack approach to building websites?",
        options: ["Java, Angular, MySQL stack", "JavaScript, APIs, Markup - a modern static site architecture", "Just Another Markup Stack", "Java Application Management stack"],
        correctAnswer: "JavaScript, APIs, Markup - a modern static site architecture"
    },
    {
        id: 28,
        category: "Markup vs Programming",
        question: "Which statement best describes declarative vs imperative paradigms in web development?",
        options: ["Both are the same", "Declarative (markup) describes what to display; imperative (programming) describes how to achieve it", "Imperative is always better", "Declarative cannot be used in web development"],
        correctAnswer: "Declarative (markup) describes what to display; imperative (programming) describes how to achieve it"
    },
    {
        id: 29,
        category: "Introduction to WWW",
        question: "What is the purpose of web caching?",
        options: ["To delete old files", "To store copies of web resources to reduce load times and server load", "To encrypt passwords", "To create backups"],
        correctAnswer: "To store copies of web resources to reduce load times and server load"
    },
    {
        id: 30,
        category: "Static & Dynamic Websites",
        question: "What is the concept of Single Page Applications (SPAs)?",
        options: ["Websites with only one HTML page", "Dynamic web apps that load a single HTML page and dynamically update content", "Static sites with one page", "Websites without navigation"],
        correctAnswer: "Dynamic web apps that load a single HTML page and dynamically update content"
    },

    // ============================================
    // SECTION 2: HTML Basics (50 questions)
    // ============================================

    // Easy (20 questions)
    {
        id: 31,
        category: "HTML Basics",
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Modern Language", "HyperText Modern Language", "HyperTool Markup Language"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        id: 32,
        category: "HTML Basics",
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>", "<hyperlink>"],
        correctAnswer: "<a>"
    },
    {
        id: 33,
        category: "HTML Basics",
        question: "What is the correct HTML tag for the largest heading?",
        options: ["<heading>", "<h6>", "<h1>", "<head>"],
        correctAnswer: "<h1>"
    },
    {
        id: 34,
        category: "HTML Basics",
        question: "Which HTML tag is used to insert an image?",
        options: ["<img>", "<image>", "<picture>", "<src>"],
        correctAnswer: "<img>"
    },
    {
        id: 35,
        category: "HTML Basics",
        question: "What is the correct file extension for HTML files?",
        options: [".txt", ".html", ".xml", ".web"],
        correctAnswer: ".html"
    },
    {
        id: 36,
        category: "HTML Basics",
        question: "Which tag defines a paragraph in HTML?",
        options: ["<para>", "<paragraph>", "<p>", "<pg>"],
        correctAnswer: "<p>"
    },
    {
        id: 37,
        category: "HTML Basics",
        question: "What is an HTML attribute?",
        options: ["A closing tag", "Additional information about an element", "A type of CSS", "A JavaScript function"],
        correctAnswer: "Additional information about an element"
    },
    {
        id: 38,
        category: "HTML Basics",
        question: "Which HTML tag is used to create a line break?",
        options: ["<break>", "<lb>", "<br>", "<newline>"],
        correctAnswer: "<br>"
    },
    {
        id: 39,
        category: "HTML Basics",
        question: "What does the <title> tag define?",
        options: ["The main heading", "The document title in the browser tab", "A subtitle", "The page footer"],
        correctAnswer: "The document title in the browser tab"
    },
    {
        id: 40,
        category: "HTML Basics",
        question: "Where is the <head> section located in an HTML document?",
        options: ["At the end", "Between <html> and <body>", "Inside <body>", "After <body>"],
        correctAnswer: "Between <html> and <body>"
    },
    {
        id: 41,
        category: "HTML Basics",
        question: "Which tag is used to define bold text?",
        options: ["<bold>", "<b>", "<strong>", "Both <b> and <strong>"],
        correctAnswer: "Both <b> and <strong>"
    },
    {
        id: 42,
        category: "HTML Basics",
        question: "What is the purpose of the <!DOCTYPE html> declaration?",
        options: ["To define the HTML version", "To create a comment", "To link CSS", "To import JavaScript"],
        correctAnswer: "To define the HTML version"
    },
    {
        id: 43,
        category: "HTML Basics",
        question: "Which HTML tag creates an unordered list?",
        options: ["<ol>", "<ul>", "<list>", "<li>"],
        correctAnswer: "<ul>"
    },
    {
        id: 44,
        category: "HTML Basics",
        question: "What is the correct HTML tag for inserting a horizontal line?",
        options: ["<line>", "<hl>", "<hr>", "<horizontal>"],
        correctAnswer: "<hr>"
    },
    {
        id: 45,
        category: "HTML Basics",
        question: "Which attribute specifies the destination URL of a link?",
        options: ["link", "href", "src", "url"],
        correctAnswer: "href"
    },
    {
        id: 46,
        category: "HTML Basics",
        question: "What is the purpose of HTML editors?",
        options: ["To browse websites", "To write and edit HTML code", "To compile programs", "To design graphics"],
        correctAnswer: "To write and edit HTML code"
    },
    {
        id: 47,
        category: "HTML Basics",
        question: "Which HTML element defines italic text?",
        options: ["<italic>", "<i>", "<it>", "<em>"],
        correctAnswer: "<i>"
    },
    {
        id: 48,
        category: "HTML Basics",
        question: "What is the correct HTML for creating a checkbox?",
        options: ["<input type='check'>", "<input type='checkbox'>", "<checkbox>", "<check>"],
        correctAnswer: "<input type='checkbox'>"
    },
    {
        id: 49,
        category: "HTML Basics",
        question: "Which tag is used to define a table in HTML?",
        options: ["<table>", "<tab>", "<tbl>", "<grid>"],
        correctAnswer: "<table>"
    },
    {
        id: 50,
        category: "HTML Basics",
        question: "What does the alt attribute in an <img> tag provide?",
        options: ["Alternative image source", "Image alignment", "Alternative text if image cannot be displayed", "Image size"],
        correctAnswer: "Alternative text if image cannot be displayed"
    },

    // Medium (15 questions)
    {
        id: 51,
        category: "HTML Basics",
        question: "What is the difference between HTML elements and HTML tags?",
        options: ["There is no difference", "Elements include opening tag, content, and closing tag; tags are just the markers", "Elements are newer", "Tags are deprecated"],
        correctAnswer: "Elements include opening tag, content, and closing tag; tags are just the markers"
    },
    {
        id: 52,
        category: "HTML Basics",
        question: "Which HTML5 semantic tag is used for navigation links?",
        options: ["<navigation>", "<nav>", "<menu>", "<links>"],
        correctAnswer: "<nav>"
    },
    {
        id: 53,
        category: "HTML Basics",
        question: "What is the purpose of the <meta> tag?",
        options: ["To create metadata", "To define metadata about the HTML document", "To insert images", "To create links"],
        correctAnswer: "To define metadata about the HTML document"
    },
    {
        id: 54,
        category: "HTML Basics",
        question: "Which attribute makes an input field required in HTML5?",
        options: ["required='true'", "required", "mandatory", "needed"],
        correctAnswer: "required"
    },
    {
        id: 55,
        category: "HTML Basics",
        question: "What is the correct HTML for creating a dropdown list?",
        options: ["<list>", "<select>", "<dropdown>", "<input type='dropdown'>"],
        correctAnswer: "<select>"
    },
    {
        id: 56,
        category: "HTML Basics",
        question: "Which HTML tag is used to define a table row?",
        options: ["<row>", "<tr>", "<td>", "<table-row>"],
        correctAnswer: "<tr>"
    },
    {
        id: 57,
        category: "HTML Basics",
        question: "What does the colspan attribute do in a table?",
        options: ["Sets column width", "Merges cells horizontally", "Colors the column", "Merges cells vertically"],
        correctAnswer: "Merges cells horizontally"
    },
    {
        id: 58,
        category: "HTML Basics",
        question: "Which HTML5 tag is used to embed video content?",
        options: ["<movie>", "<media>", "<video>", "<film>"],
        correctAnswer: "<video>"
    },
    {
        id: 59,
        category: "HTML Basics",
        question: "What is the difference between <strong> and <b> tags?",
        options: ["No difference", "<strong> indicates semantic importance, <b> is just visual", "<strong> is deprecated", "<b> is HTML5 only"],
        correctAnswer: "<strong> indicates semantic importance, <b> is just visual"
    },
    {
        id: 60,
        category: "HTML Basics",
        question: "Which attribute specifies where to open a linked document?",
        options: ["window", "target", "open", "location"],
        correctAnswer: "target"
    },
    {
        id: 61,
        category: "HTML Basics",
        question: "What is the purpose of the <form> tag in HTML?",
        options: ["To format text", "To collect user input", "To create tables", "To add images"],
        correctAnswer: "To collect user input"
    },
    {
        id: 62,
        category: "HTML Basics",
        question: "Which HTML tag defines table header cells?",
        options: ["<thead>", "<th>", "<header>", "<td>"],
        correctAnswer: "<th>"
    },
    {
        id: 63,
        category: "HTML Basics",
        question: "What is the correct HTML for creating a text input field?",
        options: ["<textfield>", "<input type='text'>", "<text>", "<textbox>"],
        correctAnswer: "<input type='text'>"
    },
    {
        id: 64,
        category: "HTML Basics",
        question: "Which HTML standard introduced semantic elements like <article> and <section>?",
        options: ["HTML 4", "XHTML", "HTML5", "HTML 3"],
        correctAnswer: "HTML5"
    },
    {
        id: 65,
        category: "HTML Basics",
        question: "What does the action attribute in a form specify?",
        options: ["The button text", "The URL where form data is sent", "The form method", "The form style"],
        correctAnswer: "The URL where form data is sent"
    },

    // Hard (15 questions)
    {
        id: 66,
        category: "HTML Basics",
        question: "What is the purpose of the data-* attributes in HTML5?",
        options: ["To store database information", "To store custom data private to the page or application", "To define datatypes", "To validate forms"],
        correctAnswer: "To store custom data private to the page or application"
    },
    {
        id: 67,
        category: "HTML Basics",
        question: "Which meta tag is used to make a website responsive?",
        options: ["<meta responsive='true'>", "<meta name='viewport' content='width=device-width, initial-scale=1.0'>", "<meta type='responsive'>", "<meta mobile='true'>"],
        correctAnswer: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
    },
    {
        id: 68,
        category: "HTML Basics",
        question: "What is the difference between block-level and inline elements?",
        options: ["No difference", "Block elements start on a new line and take full width; inline elements flow within text", "Inline elements are deprecated", "Block elements are faster"],
        correctAnswer: "Block elements start on a new line and take full width; inline elements flow within text"
    },
    {
        id: 69,
        category: "HTML Basics",
        question: "What is the purpose of the <template> tag in HTML5?",
        options: ["To create page templates", "To hold HTML content that is not rendered until activated by JavaScript", "To style pages", "To create forms"],
        correctAnswer: "To hold HTML content that is not rendered until activated by JavaScript"
    },
    {
        id: 70,
        category: "HTML Basics",
        question: "Which HTML5 input type provides a color picker?",
        options: ["<input type='picker'>", "<input type='color'>", "<input type='colorpicker'>", "<input type='rgb'>"],
        correctAnswer: "<input type='color'>"
    },
    {
        id: 71,
        category: "HTML Basics",
        question: "What is the purpose of the defer attribute in a <script> tag?",
        options: ["To delay script execution", "To execute script after HTML parsing is complete", "To cache the script", "To compress the script"],
        correctAnswer: "To execute script after HTML parsing is complete"
    },
    {
        id: 72,
        category: "HTML Basics",
        question: "What is semantic HTML and why is it important?",
        options: ["HTML with semantic versioning", "Using HTML elements that clearly describe their meaning for better accessibility and SEO", "A type of HTML editor", "HTML without CSS"],
        correctAnswer: "Using HTML elements that clearly describe their meaning for better accessibility and SEO"
    },
    {
        id: 73,
        category: "HTML Basics",
        question: "What is the difference between <section> and <div> elements?",
        options: ["No difference", "<section> is semantic and represents a thematic grouping; <div> is generic", "<div> is deprecated", "<section> cannot contain other elements"],
        correctAnswer: "<section> is semantic and represents a thematic grouping; <div> is generic"
    },
    {
        id: 74,
        category: "HTML Basics",
        question: "Which attribute prevents form resubmission on page refresh?",
        options: ["novalidate", "Using POST method with redirect pattern", "prevent", "nosubmit"],
        correctAnswer: "Using POST method with redirect pattern"
    },
    {
        id: 75,
        category: "HTML Basics",
        question: "What is the purpose of the <picture> element in HTML5?",
        options: ["To replace <img>", "To provide responsive images with multiple sources for different scenarios", "To create image galleries", "To compress images"],
        correctAnswer: "To provide responsive images with multiple sources for different scenarios"
    },
    {
        id: 76,
        category: "HTML Basics",
        question: "What does the contenteditable attribute do?",
        options: ["Makes content deletable", "Makes an element's content editable by the user", "Validates content", "Encrypts content"],
        correctAnswer: "Makes an element's content editable by the user"
    },
    {
        id: 77,
        category: "HTML Basics",
        question: "What is the purpose of the <fieldset> tag in forms?",
        options: ["To create input fields", "To group related form elements together", "To validate fields", "To style forms"],
        correctAnswer: "To group related form elements together"
    },
    {
        id: 78,
        category: "HTML Basics",
        question: "Which HTML5 API allows storing data in the browser?",
        options: ["Cookie API", "Web Storage API (localStorage/sessionStorage)", "Database API", "Cache API"],
        correctAnswer: "Web Storage API (localStorage/sessionStorage)"
    },
    {
        id: 79,
        category: "HTML Basics",
        question: "What is the difference between rowspan and colspan?",
        options: ["No difference", "rowspan merges cells vertically; colspan merges cells horizontally", "rowspan is deprecated", "colspan is CSS"],
        correctAnswer: "rowspan merges cells vertically; colspan merges cells horizontally"
    },
    {
        id: 80,
        category: "HTML Basics",
        question: "What is the purpose of the srcset attribute in the <img> tag?",
        options: ["To set image source", "To specify multiple image sources for responsive images", "To resize images", "To add alt text"],
        correctAnswer: "To specify multiple image sources for responsive images"
    },

    // ============================================
    // SECTION 3: CSS Basics & Properties (60 questions)
    // ============================================

    // Easy (20 questions)
    {
        id: 81,
        category: "CSS Basics",
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        id: 82,
        category: "CSS Basics",
        question: "Which HTML tag is used to define internal CSS?",
        options: ["<css>", "<style>", "<script>", "<link>"],
        correctAnswer: "<style>"
    },
    {
        id: 83,
        category: "CSS Basics",
        question: "How do you insert a comment in CSS?",
        options: ["// comment", "<!-- comment -->", "/* comment */", "' comment"],
        correctAnswer: "/* comment */"
    },
    {
        id: 84,
        category: "CSS Basics",
        question: "Which property is used to change the background color?",
        options: ["bgcolor", "color", "background-color", "bg-color"],
        correctAnswer: "background-color"
    },
    {
        id: 85,
        category: "CSS Basics",
        question: "How do you link an external CSS file?",
        options: ["<style src='style.css'>", "<link rel='stylesheet' href='style.css'>", "<css src='style.css'>", "<stylesheet>style.css</stylesheet>"],
        correctAnswer: "<link rel='stylesheet' href='style.css'>"
    },
    {
        id: 86,
        category: "CSS Basics",
        question: "Which property is used to change text color?",
        options: ["text-color", "font-color", "color", "text-style"],
        correctAnswer: "color"
    },
    {
        id: 87,
        category: "CSS Basics",
        question: "What is the correct CSS syntax to make text bold?",
        options: ["font-style: bold;", "text-weight: bold;", "font-weight: bold;", "text-style: bold;"],
        correctAnswer: "font-weight: bold;"
    },
    {
        id: 88,
        category: "CSS Basics",
        question: "Which CSS property controls the text size?",
        options: ["text-size", "font-size", "text-style", "font-style"],
        correctAnswer: "font-size"
    },
    {
        id: 89,
        category: "CSS Basics",
        question: "How do you select an element with id 'demo'?",
        options: ["#demo", ".demo", "demo", "*demo"],
        correctAnswer: "#demo"
    },
    {
        id: 90,
        category: "CSS Basics",
        question: "How do you select elements with class 'test'?",
        options: ["#test", ".test", "test", "*test"],
        correctAnswer: ".test"
    },
    {
        id: 91,
        category: "CSS Basics",
        question: "Which property is used to change the font of an element?",
        options: ["font-family", "font-style", "font-weight", "font-type"],
        correctAnswer: "font-family"
    },
    {
        id: 92,
        category: "CSS Basics",
        question: "How do you make text italic in CSS?",
        options: ["font-style: italic;", "text-style: italic;", "font-weight: italic;", "text-decoration: italic;"],
        correctAnswer: "font-style: italic;"
    },
    {
        id: 93,
        category: "CSS Basics",
        question: "Which property is used to add spacing between letters?",
        options: ["letter-spacing", "text-spacing", "character-spacing", "word-spacing"],
        correctAnswer: "letter-spacing"
    },
    {
        id: 94,
        category: "CSS Basics",
        question: "What is the default value of the position property?",
        options: ["relative", "absolute", "static", "fixed"],
        correctAnswer: "static"
    },
    {
        id: 95,
        category: "CSS Basics",
        question: "Which property is used to align text to the center?",
        options: ["text-align: center;", "align: center;", "text-center;", "align-text: center;"],
        correctAnswer: "text-align: center;"
    },
    {
        id: 96,
        category: "CSS Basics",
        question: "How do you add a border in CSS?",
        options: ["border: 1px solid black;", "border-style: black;", "border-color: 1px;", "border-width: solid;"],
        correctAnswer: "border: 1px solid black;"
    },
    {
        id: 97,
        category: "CSS Basics",
        question: "Which property is used to change the width of an element?",
        options: ["width", "size", "element-width", "box-width"],
        correctAnswer: "width"
    },
    {
        id: 98,
        category: "CSS Basics",
        question: "What does the margin property do?",
        options: ["Creates space inside an element", "Creates space outside an element", "Changes element color", "Changes element size"],
        correctAnswer: "Creates space outside an element"
    },
    {
        id: 99,
        category: "CSS Basics",
        question: "Which property adds space inside an element's border?",
        options: ["margin", "padding", "spacing", "border-spacing"],
        correctAnswer: "padding"
    },
    {
        id: 100,
        category: "CSS Basics",
        question: "How do you make a list not display bullet points?",
        options: ["list-style: none;", "list: none;", "bullet: none;", "list-type: none;"],
        correctAnswer: "list-style: none;"
    },

    // Medium (20 questions)
    {
        id: 101,
        category: "CSS Properties",
        question: "What is the difference between margin and padding?",
        options: ["No difference", "Margin is outside the border, padding is inside", "Padding is outside, margin is inside", "Margin is for text only"],
        correctAnswer: "Margin is outside the border, padding is inside"
    },
    {
        id: 102,
        category: "CSS Selectors",
        question: "What does the CSS selector 'div > p' select?",
        options: ["All p elements", "All p elements inside div at any level", "Only p elements that are direct children of div", "Only the first p in div"],
        correctAnswer: "Only p elements that are direct children of div"
    },
    {
        id: 103,
        category: "CSS Properties",
        question: "Which CSS property controls the stacking order of elements?",
        options: ["layer", "stack", "z-index", "order"],
        correctAnswer: "z-index"
    },
    {
        id: 104,
        category: "CSS Properties",
        question: "What does the 'display: none;' property do?",
        options: ["Makes element transparent", "Hides element and removes it from document flow", "Hides element but keeps its space", "Makes element invisible"],
        correctAnswer: "Hides element and removes it from document flow"
    },
    {
        id: 105,
        category: "CSS Properties",
        question: "What is the difference between 'display: none' and 'visibility: hidden'?",
        options: ["No difference", "display: none removes from flow; visibility: hidden keeps space", "visibility: hidden removes from flow", "display: none is faster"],
        correctAnswer: "display: none removes from flow; visibility: hidden keeps space"
    },
    {
        id: 106,
        category: "CSS Backgrounds",
        question: "Which property sets a background image in CSS?",
        options: ["background-img", "background-image", "bg-image", "image"],
        correctAnswer: "background-image"
    },
    {
        id: 107,
        category: "CSS Properties",
        question: "What does 'box-sizing: border-box' do?",
        options: ["Removes borders", "Includes padding and border in element's total width/height", "Only affects borders", "Makes box larger"],
        correctAnswer: "Includes padding and border in element's total width/height"
    },
    {
        id: 108,
        category: "CSS Selectors",
        question: "What does the ':hover' pseudo-class do?",
        options: ["Selects clicked elements", "Selects elements when mouse is over them", "Selects all elements", "Selects hidden elements"],
        correctAnswer: "Selects elements when mouse is over them"
    },
    {
        id: 109,
        category: "CSS Properties",
        question: "Which CSS property is used to make rounded corners?",
        options: ["corner-radius", "border-radius", "round-corner", "corner-style"],
        correctAnswer: "border-radius"
    },
    {
        id: 110,
        category: "CSS Text Formatting",
        question: "How do you add a text shadow in CSS?",
        options: ["shadow: 2px 2px black;", "text-shadow: 2px 2px black;", "font-shadow: 2px 2px;", "text-effect: shadow;"],
        correctAnswer: "text-shadow: 2px 2px black;"
    },
    {
        id: 111,
        category: "CSS Properties",
        question: "What does 'overflow: hidden' do?",
        options: ["Hides the element", "Clips content that overflows the element's box", "Makes content transparent", "Removes scrollbars"],
        correctAnswer: "Clips content that overflows the element's box"
    },
    {
        id: 112,
        category: "CSS Links",
        question: "Which pseudo-class selects visited links?",
        options: [":visited", ":link", ":active", ":seen"],
        correctAnswer: ":visited"
    },
    {
        id: 113,
        category: "CSS Properties",
        question: "What is the correct order for the margin shorthand property?",
        options: ["left right top bottom", "top right bottom left", "top bottom left right", "right left top bottom"],
        correctAnswer: "top right bottom left"
    },
    {
        id: 114,
        category: "CSS Fonts",
        question: "Which unit is relative to the font-size of the parent element?",
        options: ["px", "em", "pt", "cm"],
        correctAnswer: "em"
    },
    {
        id: 115,
        category: "CSS Lists",
        question: "How do you change the list item marker to square?",
        options: ["list-type: square;", "list-style-type: square;", "marker: square;", "list-marker: square;"],
        correctAnswer: "list-style-type: square;"
    },
    {
        id: 116,
        category: "CSS Tables",
        question: "Which property collapses table borders into a single border?",
        options: ["border-collapse: collapse;", "border-style: collapse;", "table-border: collapse;", "border-merge: true;"],
        correctAnswer: "border-collapse: collapse;"
    },
    {
        id: 117,
        category: "CSS Backgrounds",
        question: "How do you prevent a background image from repeating?",
        options: ["background-repeat: none;", "background-repeat: no-repeat;", "background: no-repeat;", "repeat: none;"],
        correctAnswer: "background-repeat: no-repeat;"
    },
    {
        id: 118,
        category: "CSS Properties",
        question: "What does 'position: relative' do?",
        options: ["Positions element relative to viewport", "Positions element relative to its normal position", "Removes element from flow", "Fixes element on scroll"],
        correctAnswer: "Positions element relative to its normal position"
    },
    {
        id: 119,
        category: "CSS Outlines",
        question: "What is the difference between border and outline?",
        options: ["No difference", "Outline doesn't take up space and is drawn outside border", "Border is thicker", "Outline is deprecated"],
        correctAnswer: "Outline doesn't take up space and is drawn outside border"
    },
    {
        id: 120,
        category: "CSS Properties",
        question: "Which property controls the transparency of an element?",
        options: ["transparency", "opacity", "visibility", "alpha"],
        correctAnswer: "opacity"
    },

    // Hard (20 questions)
    {
        id: 121,
        category: "CSS Selectors",
        question: "What does the CSS selector 'p:nth-child(2)' select?",
        options: ["Second p element", "All p elements that are 2nd child of their parent", "Second child of p", "First two p elements"],
        correctAnswer: "All p elements that are 2nd child of their parent"
    },
    {
        id: 122,
        category: "CSS Properties",
        question: "What is the CSS specificity order from lowest to highest?",
        options: ["inline > ID > class > element", "element > class > ID > inline", "class > element > ID > inline", "ID > inline > class > element"],
        correctAnswer: "element > class > ID > inline"
    },
    {
        id: 123,
        category: "CSS Layout",
        question: "What is the purpose of CSS Flexbox?",
        options: ["To create animations", "To create flexible, responsive layouts", "To style text", "To create tables"],
        correctAnswer: "To create flexible, responsive layouts"
    },
    {
        id: 124,
        category: "CSS Properties",
        question: "What does 'position: absolute' do to an element?",
        options: ["Keeps element in normal flow", "Removes from flow and positions relative to nearest positioned ancestor", "Makes element fixed", "Centers element"],
        correctAnswer: "Removes from flow and positions relative to nearest positioned ancestor"
    },
    {
        id: 125,
        category: "CSS Generated Content",
        question: "What do the ::before and ::after pseudo-elements do?",
        options: ["Select previous/next elements", "Insert generated content before/after element's content", "Create animations", "Style first/last elements"],
        correctAnswer: "Insert generated content before/after element's content"
    },
    {
        id: 126,
        category: "CSS Lengths",
        question: "What is the difference between 'em' and 'rem' units?",
        options: ["No difference", "em is relative to parent; rem is relative to root element", "rem is deprecated", "em is absolute"],
        correctAnswer: "em is relative to parent; rem is relative to root element"
    },
    {
        id: 127,
        category: "CSS Dimensions",
        question: "What does 'width: 100vw' mean?",
        options: ["100 pixels width", "100% of parent width", "100% of viewport width", "100 em width"],
        correctAnswer: "100% of viewport width"
    },
    {
        id: 128,
        category: "CSS Properties",
        question: "What is the CSS Box Model order from inside to outside?",
        options: ["padding, content, border, margin", "content, padding, border, margin", "content, border, padding, margin", "margin, border, padding, content"],
        correctAnswer: "content, padding, border, margin"
    },
    {
        id: 129,
        category: "CSS Overflow",
        question: "What does 'overflow: auto' do?",
        options: ["Always shows scrollbars", "Adds scrollbars only when content overflows", "Hides overflow", "Clips content"],
        correctAnswer: "Adds scrollbars only when content overflows"
    },
    {
        id: 130,
        category: "CSS Page Layout",
        question: "What is CSS Grid used for?",
        options: ["Creating tables", "Creating two-dimensional layouts with rows and columns", "Styling grids", "Creating graphs"],
        correctAnswer: "Creating two-dimensional layouts with rows and columns"
    },
    {
        id: 131,
        category: "CSS Selectors",
        question: "What does the '+' combinator select in CSS?",
        options: ["All siblings", "Adjacent sibling (immediately following)", "Child elements", "Parent element"],
        correctAnswer: "Adjacent sibling (immediately following)"
    },
    {
        id: 132,
        category: "CSS Properties",
        question: "What is the purpose of the 'calc()' function in CSS?",
        options: ["To calculate colors", "To perform mathematical calculations for CSS values", "To count elements", "To validate CSS"],
        correctAnswer: "To perform mathematical calculations for CSS values"
    },
    {
        id: 133,
        category: "CSS Backgrounds",
        question: "What does 'background-attachment: fixed' do?",
        options: ["Fixes background color", "Makes background image stay fixed during scrolling", "Prevents background changes", "Locks background position"],
        correctAnswer: "Makes background image stay fixed during scrolling"
    },
    {
        id: 134,
        category: "CSS Properties",
        question: "What is the difference between 'inline', 'inline-block', and 'block' display values?",
        options: ["No difference", "inline flows in text, inline-block allows width/height, block takes full width", "They are deprecated", "All are the same in HTML5"],
        correctAnswer: "inline flows in text, inline-block allows width/height, block takes full width"
    },
    {
        id: 135,
        category: "CSS Selectors",
        question: "What does the '~' general sibling combinator select?",
        options: ["Direct siblings only", "All siblings that follow", "Previous siblings", "Parent element"],
        correctAnswer: "All siblings that follow"
    },
    {
        id: 136,
        category: "CSS Properties",
        question: "What is CSS Custom Properties (CSS Variables)?",
        options: ["JavaScript variables", "Reusable values defined with -- prefix", "Browser settings", "CSS errors"],
        correctAnswer: "Reusable values defined with -- prefix"
    },
    {
        id: 137,
        category: "CSS Properties",
        question: "What does the 'transform' property do?",
        options: ["Changes colors", "Applies 2D or 3D transformations to elements", "Validates CSS", "Creates animations"],
        correctAnswer: "Applies 2D or 3D transformations to elements"
    },
    {
        id: 138,
        category: "CSS Properties",
        question: "What is the purpose of 'will-change' property?",
        options: ["To change colors", "To hint browser about upcoming changes for optimization", "To validate changes", "To prevent changes"],
        correctAnswer: "To hint browser about upcoming changes for optimization"
    },
    {
        id: 139,
        category: "CSS Page Layout",
        question: "What is the difference between Flexbox and Grid?",
        options: ["No difference", "Flexbox is one-dimensional (row or column); Grid is two-dimensional", "Grid is deprecated", "Flexbox is older"],
        correctAnswer: "Flexbox is one-dimensional (row or column); Grid is two-dimensional"
    },
    {
        id: 140,
        category: "CSS Properties",
        question: "What does the 'clamp()' function do in CSS?",
        options: ["Clips content", "Sets a value between a minimum and maximum range", "Validates values", "Compresses images"],
        correctAnswer: "Sets a value between a minimum and maximum range"
    },

    // ============================================
    // SECTION 4: JavaScript Basics (60 questions)
    // ============================================

    // Easy (20 questions)
    {
        id: 141,
        category: "JavaScript Basics",
        question: "What is JavaScript?",
        options: ["A styling language", "A programming language for web interactivity", "A markup language", "A database"],
        correctAnswer: "A programming language for web interactivity"
    },
    {
        id: 142,
        category: "JavaScript Basics",
        question: "How do you write 'Hello World' in an alert box?",
        options: ["msgBox('Hello World');", "alert('Hello World');", "msg('Hello World');", "alertBox('Hello World');"],
        correctAnswer: "alert('Hello World');"
    },
    {
        id: 143,
        category: "JavaScript Basics",
        question: "How do you create a variable in JavaScript?",
        options: ["variable x;", "var x;", "v x;", "create x;"],
        correctAnswer: "var x;"
    },
    {
        id: 144,
        category: "JavaScript Basics",
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/*", "#", "<!--"],
        correctAnswer: "//"
    },
    {
        id: 145,
        category: "JavaScript Basics",
        question: "How do you call a function named 'myFunction'?",
        options: ["call myFunction()", "myFunction()", "call function myFunction", "execute myFunction()"],
        correctAnswer: "myFunction()"
    },
    {
        id: 146,
        category: "JavaScript DOM",
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Document Orientation Model", "Display Object Model"],
        correctAnswer: "Document Object Model"
    },
    {
        id: 147,
        category: "JavaScript Basics",
        question: "How do you write an IF statement in JavaScript?",
        options: ["if i = 5", "if (i == 5)", "if i == 5 then", "if i = 5 then"],
        correctAnswer: "if (i == 5)"
    },
    {
        id: 148,
        category: "JavaScript Basics",
        question: "Which operator is used to assign a value to a variable?",
        options: ["*", "=", "-", "x"],
        correctAnswer: "="
    },
    {
        id: 149,
        category: "JavaScript DOM",
        question: "How do you select an element by its id in JavaScript?",
        options: ["document.getId('id')", "document.getElementById('id')", "document.selectId('id')", "getElement('id')"],
        correctAnswer: "document.getElementById('id')"
    },
    {
        id: 150,
        category: "JavaScript Basics",
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "function:myFunction()", "create myFunction()", "def myFunction()"],
        correctAnswer: "function myFunction()"
    }
];
export default questionBank;
