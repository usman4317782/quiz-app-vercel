// Sample question bank structure
// User should replace this with their 50 questions
// const questionBank = [


const questionBank = [
    {
        id: 1,
        category: "Introduction to Course",
        question: "C++ is which type of programming language?",
        options: ["Low-level language", "High-level language", "Assembly language", "Machine language"],
        correctAnswer: "High-level language"
    },
    {
        id: 2,
        category: "Problem-Solving Methodology",
        question: "What is the first step in problem-solving methodology?",
        options: ["Write code", "Understand the problem", "Test the solution", "Debug errors"],
        correctAnswer: "Understand the problem"
    },
    {
        id: 3,
        category: "Algorithms",
        question: "An algorithm is?",
        options: ["A programming language", "Step-by-step procedure to solve a problem", "A compiler", "A syntax error"],
        correctAnswer: "Step-by-step procedure to solve a problem"
    },
    {
        id: 4,
        category: "Pseudocode",
        question: "Pseudocode is written in?",
        options: ["Machine language", "Natural language-like format", "Binary code", "Assembly language"],
        correctAnswer: "Natural language-like format"
    },
    {
        id: 5,
        category: "Flow Charts",
        question: "Which symbol is used to represent decision-making in a flowchart?",
        options: ["Rectangle", "Diamond", "Oval", "Circle"],
        correctAnswer: "Diamond"
    },
    {
        id: 6,
        category: "Flow Charts",
        question: "The start and end of a flowchart are represented by?",
        options: ["Rectangle", "Diamond", "Oval", "Parallelogram"],
        correctAnswer: "Oval"
    },
    {
        id: 7,
        category: "History of C++",
        question: "Who developed C++?",
        options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Ken Thompson"],
        correctAnswer: "Bjarne Stroustrup"
    },
    {
        id: 8,
        category: "History of C++",
        question: "C++ was developed in which year?",
        options: ["1972", "1979", "1983", "1991"],
        correctAnswer: "1983"
    },
    {
        id: 9,
        category: "Translators",
        question: "A compiler translates the entire program?",
        options: ["Line by line", "All at once", "Character by character", "Word by word"],
        correctAnswer: "All at once"
    },
    {
        id: 10,
        category: "Translators",
        question: "Which translator converts high-level language to machine language line by line?",
        options: ["Compiler", "Interpreter", "Assembler", "Linker"],
        correctAnswer: "Interpreter"
    },
    {
        id: 11,
        category: "Basic Program Structure",
        question: "Which is the entry point of a C++ program?",
        options: ["start()", "main()", "begin()", "execute()"],
        correctAnswer: "main()"
    },
    {
        id: 12,
        category: "Directives",
        question: "Which directive is used to include header files in C++?",
        options: ["#include", "#define", "#import", "#using"],
        correctAnswer: "#include"
    },
    {
        id: 13,
        category: "Comments",
        question: "Which symbol is used for single-line comments in C++?",
        options: ["/* */", "//", "#", "<!-- -->"],
        correctAnswer: "//"
    },
    {
        id: 14,
        category: "Comments",
        question: "Multi-line comments in C++ are enclosed in?",
        options: ["// //", "/* */", "# #", "{ }"],
        correctAnswer: "/* */"
    },
    {
        id: 15,
        category: "Output using cout",
        question: "Which header file is required for cout?",
        options: ["stdio.h", "iostream", "conio.h", "stdlib.h"],
        correctAnswer: "iostream"
    },
    {
        id: 16,
        category: "Output using cout",
        question: "What is the output of: cout << 5 + 3;",
        options: ["5 + 3", "8", "53", "Error"],
        correctAnswer: "8"
    },
    {
        id: 17,
        category: "Escape Sequences",
        question: "Which escape sequence is used for a new line?",
        options: ["\\t", "\\n", "\\r", "\\b"],
        correctAnswer: "\\n"
    },
    {
        id: 18,
        category: "Escape Sequences",
        question: "What does \\t represent?",
        options: ["New line", "Tab space", "Backspace", "Carriage return"],
        correctAnswer: "Tab space"
    },
    {
        id: 19,
        category: "setw Manipulator",
        question: "The setw manipulator is used to?",
        options: ["Set precision", "Set width of output", "Set color", "Set font"],
        correctAnswer: "Set width of output"
    },
    {
        id: 20,
        category: "endl Manipulator",
        question: "What does endl do?",
        options: ["Ends program", "Inserts new line and flushes buffer", "Ends loop", "Ends function"],
        correctAnswer: "Inserts new line and flushes buffer"
    },
    {
        id: 21,
        category: "Variable Declaration",
        question: "Which is a valid variable name in C++?",
        options: ["2variable", "variable_2", "variable-2", "variable 2"],
        correctAnswer: "variable_2"
    },
    {
        id: 22,
        category: "Integer Variables",
        question: "Which keyword is used to declare an integer variable?",
        options: ["integer", "int", "num", "number"],
        correctAnswer: "int"
    },
    {
        id: 23,
        category: "Floating Point Variables",
        question: "Which data type is used for decimal numbers?",
        options: ["int", "float", "char", "bool"],
        correctAnswer: "float"
    },
    {
        id: 24,
        category: "Variable Initialization",
        question: "What is the output of: int x = 10; cout << x;",
        options: ["x", "10", "0", "Error"],
        correctAnswer: "10"
    },
    {
        id: 25,
        category: "Memory Concepts",
        question: "Variables are stored in?",
        options: ["Hard disk", "Memory (RAM)", "CPU", "Monitor"],
        correctAnswer: "Memory (RAM)"
    },
    {
        id: 26,
        category: "Taking Input using cin",
        question: "Which operator is used with cin to take input?",
        options: ["<<", ">>", "->", "::"],
        correctAnswer: ">>"
    },
    {
        id: 27,
        category: "Taking Input",
        question: "What is the output? int x; cin >> x; (user enters 5) cout << x * 2;",
        options: ["5", "10", "x * 2", "Error"],
        correctAnswer: "10"
    },
    {
        id: 28,
        category: "Arithmetic Operators",
        question: "What is the result of 10 / 3 in integer division?",
        options: ["3.33", "3", "4", "3.0"],
        correctAnswer: "3"
    },
    {
        id: 29,
        category: "Arithmetic Operators",
        question: "What is the output of: cout << 7 * 2 + 3;",
        options: ["17", "20", "13", "Error"],
        correctAnswer: "17"
    },
    {
        id: 30,
        category: "Modulus Operator",
        question: "What does the modulus operator (%) return?",
        options: ["Quotient", "Remainder", "Product", "Sum"],
        correctAnswer: "Remainder"
    },
    {
        id: 31,
        category: "Modulus Operator",
        question: "What is the output of: cout << 17 % 5;",
        options: ["3", "2", "5", "0"],
        correctAnswer: "2"
    },
    {
        id: 32,
        category: "Arithmetic Expression",
        question: "What is the output of: cout << 10 + 5 * 2;",
        options: ["30", "20", "15", "25"],
        correctAnswer: "20"
    },
    {
        id: 33,
        category: "Precedence of Evaluation",
        question: "Which operator has the highest precedence?",
        options: ["+ and -", "* and /", "=", "%"],
        correctAnswer: "* and /"
    },
    {
        id: 34,
        category: "Increment Operator",
        question: "What is the output? int x = 5; cout << ++x;",
        options: ["5", "6", "4", "Error"],
        correctAnswer: "6"
    },
    {
        id: 35,
        category: "Increment Operator",
        question: "What is the output? int x = 5; cout << x++;",
        options: ["5", "6", "4", "Error"],
        correctAnswer: "5"
    },
    {
        id: 36,
        category: "Decrement Operator",
        question: "What is the output? int x = 5; cout << --x;",
        options: ["5", "6", "4", "Error"],
        correctAnswer: "4"
    },
    {
        id: 37,
        category: "Prefix vs Postfix",
        question: "What is the value of x after: int x = 5; int y = x++;",
        options: ["x = 5, y = 5", "x = 6, y = 5", "x = 5, y = 6", "x = 6, y = 6"],
        correctAnswer: "x = 6, y = 5"
    },
    {
        id: 38,
        category: "Relational Operators",
        question: "Which operator checks for equality?",
        options: ["=", "==", "!=", "==="],
        correctAnswer: "=="
    },
    {
        id: 39,
        category: "Relational Operators",
        question: "What is the output? cout << (5 > 3);",
        options: ["true", "false", "1", "0"],
        correctAnswer: "1"
    },
    {
        id: 40,
        category: "Relational Operators",
        question: "What is the result of: 10 != 10",
        options: ["true", "false", "1", "Error"],
        correctAnswer: "false"
    },
    {
        id: 41,
        category: "Logical Operators",
        question: "Which logical operator represents AND?",
        options: ["&", "&&", "||", "!"],
        correctAnswer: "&&"
    },
    {
        id: 42,
        category: "Logical Operators",
        question: "What is the output? cout << (5 > 3 && 2 < 4);",
        options: ["0", "1", "true", "false"],
        correctAnswer: "1"
    },
    {
        id: 43,
        category: "Logical Operators",
        question: "What does the ! operator do?",
        options: ["AND", "OR", "NOT", "XOR"],
        correctAnswer: "NOT"
    },
    {
        id: 44,
        category: "Compound Conditions",
        question: "What is the output? cout << (10 > 5 || 3 > 7);",
        options: ["0", "1", "false", "Error"],
        correctAnswer: "1"
    },
    {
        id: 45,
        category: "Character Variables",
        question: "Which keyword is used to declare a character variable?",
        options: ["character", "char", "chr", "string"],
        correctAnswer: "char"
    },
    {
        id: 46,
        category: "Character Variables",
        question: "What is the output? char ch = 'A'; cout << ch;",
        options: ["A", "'A'", "65", "Error"],
        correctAnswer: "A"
    },
    {
        id: 47,
        category: "Character Input",
        question: "How do you take a character input including spaces?",
        options: ["cin >> ch;", "cin.get(ch);", "scanf(ch);", "input(ch);"],
        correctAnswer: "cin.get(ch);"
    },
    {
        id: 48,
        category: "Switch Statement",
        question: "Which keyword is used with switch to handle unmatched cases?",
        options: ["else", "default", "otherwise", "catch"],
        correctAnswer: "default"
    },
    {
        id: 49,
        category: "Switch Statement",
        question: "What statement is used to exit a case in switch?",
        options: ["exit", "break", "stop", "end"],
        correctAnswer: "break"
    },
    {
        id: 50,
        category: "Switch Statement Code",
        question: "What is the output? int x = 2; switch(x) { case 1: cout << 'A'; break; case 2: cout << 'B'; break; default: cout << 'C'; }",
        options: ["A", "B", "C", "AB"],
        correctAnswer: "B"
    },
    {
        id: 51,
        category: "if Statement",
        question: "What is the syntax of if statement?",
        options: ["if condition { }", "if (condition) { }", "if [condition] { }", "if <condition> { }"],
        correctAnswer: "if (condition) { }"
    },
    {
        id: 52,
        category: "if Statement Code",
        question: "What is the output? int x = 10; if(x > 5) cout << 'Yes';",
        options: ["Yes", "No", "Nothing", "Error"],
        correctAnswer: "Yes"
    },
    {
        id: 53,
        category: "if-else Statement",
        question: "The else block executes when?",
        options: ["Condition is true", "Condition is false", "Always", "Never"],
        correctAnswer: "Condition is false"
    },
    {
        id: 54,
        category: "if-else Code",
        question: "What is the output? int x = 3; if(x > 5) cout << 'A'; else cout << 'B';",
        options: ["A", "B", "AB", "Nothing"],
        correctAnswer: "B"
    },
    {
        id: 55,
        category: "else-if Statement",
        question: "else-if is used for?",
        options: ["Single condition", "Multiple conditions", "Loops", "Functions"],
        correctAnswer: "Multiple conditions"
    },
    {
        id: 56,
        category: "else-if Code",
        question: "What is the output? int x = 5; if(x < 5) cout << 'A'; else if(x == 5) cout << 'B'; else cout << 'C';",
        options: ["A", "B", "C", "AB"],
        correctAnswer: "B"
    },
    {
        id: 57,
        category: "Repetitive Control Structure",
        question: "Loops are used for?",
        options: ["Decision making", "Repetitive execution", "Input/Output", "Variable declaration"],
        correctAnswer: "Repetitive execution"
    },
    {
        id: 58,
        category: "Counter Control Loops",
        question: "Which loop is best for counter-controlled repetition?",
        options: ["while", "do-while", "for", "if"],
        correctAnswer: "for"
    },
    {
        id: 59,
        category: "For Loop",
        question: "How many parts does a for loop have?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3"
    },
    {
        id: 60,
        category: "For Loop Code",
        question: "What is the output? for(int i = 0; i < 3; i++) cout << i;",
        options: ["0 1 2", "1 2 3", "012", "123"],
        correctAnswer: "012"
    },
    {
        id: 61,
        category: "For Loop Code",
        question: "How many times will this loop execute? for(int i = 1; i <= 5; i++)",
        options: ["4", "5", "6", "Infinite"],
        correctAnswer: "5"
    },
    {
        id: 62,
        category: "Sentinel Control Loops",
        question: "Which loop is best for sentinel-controlled repetition?",
        options: ["for", "while", "switch", "if-else"],
        correctAnswer: "while"
    },
    {
        id: 63,
        category: "While Loop",
        question: "In a while loop, when is the condition checked?",
        options: ["After execution", "Before execution", "During execution", "Never"],
        correctAnswer: "Before execution"
    },
    {
        id: 64,
        category: "While Loop Code",
        question: "What is the output? int i = 0; while(i < 3) { cout << i; i++; }",
        options: ["0 1 2", "1 2 3", "012", "123"],
        correctAnswer: "012"
    },
    {
        id: 65,
        category: "Do-While Loop",
        question: "A do-while loop executes at least?",
        options: ["Never", "Once", "Twice", "Three times"],
        correctAnswer: "Once"
    },
    {
        id: 66,
        category: "Do-While Loop",
        question: "In do-while loop, when is the condition checked?",
        options: ["Before execution", "After execution", "During execution", "Never"],
        correctAnswer: "After execution"
    },
    {
        id: 67,
        category: "Do-While Code",
        question: "What is the output? int i = 0; do { cout << i; i++; } while(i < 3);",
        options: ["Nothing", "0", "012", "0123"],
        correctAnswer: "012"
    },
    {
        id: 68,
        category: "Nested ifs",
        question: "An if statement inside another if is called?",
        options: ["Multiple if", "Nested if", "Compound if", "Double if"],
        correctAnswer: "Nested if"
    },
    {
        id: 69,
        category: "Nested Loops",
        question: "A loop inside another loop is called?",
        options: ["Double loop", "Nested loop", "Multiple loop", "Inner loop"],
        correctAnswer: "Nested loop"
    },
    {
        id: 70,
        category: "Nested Loop Code",
        question: "How many times will 'X' print? for(int i=0; i<2; i++) for(int j=0; j<3; j++) cout << 'X';",
        options: ["2", "3", "5", "6"],
        correctAnswer: "6"
    },
    {
        id: 71,
        category: "Build-in Functions",
        question: "Which header file contains mathematical functions?",
        options: ["iostream", "cmath", "stdio.h", "stdlib.h"],
        correctAnswer: "cmath"
    },
    {
        id: 72,
        category: "Build-in Functions",
        question: "Which function is used to find the square root?",
        options: ["sqrt()", "sqr()", "root()", "square()"],
        correctAnswer: "sqrt()"
    },
    {
        id: 73,
        category: "Build-in Functions",
        question: "Which function returns the absolute value?",
        options: ["abs()", "absolute()", "fabs()", "Both A and C"],
        correctAnswer: "Both A and C"
    },
    {
        id: 74,
        category: "User Defined Functions",
        question: "A function that returns no value has return type?",
        options: ["int", "void", "null", "empty"],
        correctAnswer: "void"
    },
    {
        id: 75,
        category: "User Defined Functions",
        question: "What are the values passed to a function called?",
        options: ["Parameters", "Arguments", "Variables", "Constants"],
        correctAnswer: "Arguments"
    },
    {
        id: 76,
        category: "Function Code",
        question: "What is the output? int add(int a, int b) { return a + b; } cout << add(3, 4);",
        options: ["3", "4", "7", "34"],
        correctAnswer: "7"
    },
    {
        id: 77,
        category: "Function Declaration",
        question: "Function declaration is also called?",
        options: ["Function definition", "Function prototype", "Function call", "Function body"],
        correctAnswer: "Function prototype"
    },
    {
        id: 78,
        category: "Function Code",
        question: "What is the output? void display() { cout << 'Hello'; } display();",
        options: ["Hello", "display", "Nothing", "Error"],
        correctAnswer: "Hello"
    },
    {
        id: 79,
        category: "Loop Code",
        question: "What is the output? for(int i = 5; i > 2; i--) cout << i;",
        options: ["543", "5 4 3", "345", "3 4 5"],
        correctAnswer: "543"
    },
    {
        id: 80,
        category: "Conditional Code",
        question: "What is the output? int x = 10, y = 20; if(x > y) cout << x; else cout << y;",
        options: ["10", "20", "1020", "Nothing"],
        correctAnswer: "20"
    },
    {
        id: 81,
        category: "Operator Code",
        question: "What is the output? int x = 5; cout << x++ + ++x;",
        options: ["10", "11", "12", "13"],
        correctAnswer: "12"
    },
    {
        id: 82,
        category: "Loop Code",
        question: "What is the output? int i = 1; while(i <= 3) { cout << i * 2 << ' '; i++; }",
        options: ["1 2 3", "2 4 6", "2 3 4", "246"],
        correctAnswer: "2 4 6"
    },
    {
        id: 83,
        category: "Switch Code",
        question: "What happens if break is missing in a switch case?",
        options: ["Error", "Fall through to next case", "Exit program", "Nothing"],
        correctAnswer: "Fall through to next case"
    },
    {
        id: 84,
        category: "Expression Code",
        question: "What is the output? int a = 10, b = 5; cout << a / b + a % b;",
        options: ["2", "3", "5", "0"],
        correctAnswer: "2"
    },
    {
        id: 85,
        category: "Function Code",
        question: "What is the output? int multiply(int x, int y = 2) { return x * y; } cout << multiply(5);",
        options: ["5", "10", "7", "Error"],
        correctAnswer: "10"
    },
    {
        id: 86,
        category: "Logical Code",
        question: "What is the output? cout << (5 < 3 || 8 > 6 && 4 == 4);",
        options: ["0", "1", "false", "true"],
        correctAnswer: "1"
    },
    {
        id: 87,
        category: "Loop Code",
        question: "What is the output? for(int i = 0; i < 5; i += 2) cout << i;",
        options: ["024", "0 2 4", "01234", "135"],
        correctAnswer: "024"
    },
    {
        id: 88,
        category: "Nested Loop Code",
        question: "What is the output? for(int i=1; i<=2; i++) { for(int j=1; j<=2; j++) cout << i*j << ' '; }",
        options: ["1 2 2 4", "1 1 2 2", "1 2 3 4", "2 4 6 8"],
        correctAnswer: "1 2 2 4"
    },
    {
        id: 89,
        category: "Conditional Code",
        question: "What is the output? int x = 15; if(x % 2 == 0) cout << 'Even'; else cout << 'Odd';",
        options: ["Even", "Odd", "15", "Nothing"],
        correctAnswer: "Odd"
    },
    {
        id: 90,
        category: "Function Code",
        question: "What is the output? int max(int a, int b) { return (a > b) ? a : b; } cout << max(8, 12);",
        options: ["8", "12", "20", "Error"],
        correctAnswer: "12"
    },
    {
        id: 91,
        category: "Loop Code",
        question: "What is the output? int sum = 0; for(int i=1; i<=4; i++) sum += i; cout << sum;",
        options: ["4", "10", "15", "0"],
        correctAnswer: "10"
    },
    {
        id: 92,
        category: "Character Code",
        question: "What is the output? char ch = 'A'; cout << ch + 1;",
        options: ["A", "B", "66", "A1"],
        correctAnswer: "66"
    },
    {
        id: 93,
        category: "Operator Code",
        question: "What is the output? int x = 10; x += 5; x *= 2; cout << x;",
        options: ["20", "25", "30", "40"],
        correctAnswer: "30"
    },
    {
        id: 94,
        category: "Loop Code",
        question: "How many times does this loop execute? int i = 10; while(i > 10) { cout << i; i--; }",
        options: ["0", "1", "10", "Infinite"],
        correctAnswer: "0"
    },
    {
        id: 95,
        category: "Function Code",
        question: "What is the output? void swap(int a, int b) { int temp = a; a = b; b = temp; } int x=5, y=10; swap(x,y); cout << x;",
        options: ["5", "10", "15", "0"],
        correctAnswer: "5"
    },
    {
        id: 96,
        category: "Expression Code",
        question: "What is the output? int x = 5; cout << (x > 3 ? x * 2 : x / 2);",
        options: ["2", "5", "10", "Error"],
        correctAnswer: "10"
    },
    {
        id: 97,
        category: "Loop Code",
        question: "What is the output? for(int i=0; i<10; i++) { if(i == 5) break; cout << i; }",
        options: ["012345", "0123456789", "01234", "Nothing"],
        correctAnswer: "01234"
    },
    {
        id: 98,
        category: "Nested If Code",
        question: "What is the output? int x=10, y=20; if(x<y) { if(x>5) cout << 'A'; else cout << 'B'; } else cout << 'C';",
        options: ["A", "B", "C", "AB"],
        correctAnswer: "A"
    },
    {
        id: 99,
        category: "Loop Code",
        question: "What is the output? for(int i=1; i<=5; i++) { if(i % 2 == 0) continue; cout << i; }",
        options: ["12345", "135", "24", "1 3 5"],
        correctAnswer: "135"
    },
    {
        id: 100,
        category: "Function Code",
        question: "What is the output? int factorial(int n) { return (n <= 1) ? 1 : n * factorial(n-1); } cout << factorial(4);",
        options: ["10", "24", "20", "Error"],
        correctAnswer: "24"
    }
];
export default questionBank;
