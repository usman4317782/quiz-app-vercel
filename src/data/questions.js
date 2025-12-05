// Sample question bank structure
// User should replace this with their 50 questions

const questionBank = [
    {
        id: 1,
        question: "Who is considered the father of Artificial Intelligence?",
        options: ["Alan Turing", "John McCarthy", "Marvin Minsky", "Herbert Simon"],
        correctAnswer: "John McCarthy"
    },
    {
        id: 2,
        question: "In which year was the term 'Artificial Intelligence' first coined?",
        options: ["1950", "1956", "1960", "1965"],
        correctAnswer: "1956"
    },
    {
        id: 3,
        question: "What was the name of the conference where AI was established as a field?",
        options: ["MIT Conference", "Dartmouth Conference", "Stanford Summit", "Berkeley Meeting"],
        correctAnswer: "Dartmouth Conference"
    },
    {
        id: 4,
        question: "Which test was proposed by Alan Turing to measure machine intelligence?",
        options: ["Intelligence Test", "Turing Test", "Machine Test", "AI Test"],
        correctAnswer: "Turing Test"
    },
    {
        id: 5,
        question: "What is the main goal of Artificial Intelligence?",
        options: ["Replace humans", "Create intelligent machines", "Build robots", "Automate everything"],
        correctAnswer: "Create intelligent machines"
    },
    {
        id: 6,
        question: "Which AI winter occurred first?",
        options: ["1960s", "1970s", "1980s", "1990s"],
        correctAnswer: "1970s"
    },
    {
        id: 7,
        question: "What does 'Strong AI' refer to?",
        options: ["Powerful computers", "AI with human-like consciousness", "Fast algorithms", "Large datasets"],
        correctAnswer: "AI with human-like consciousness"
    },
    {
        id: 8,
        question: "What does 'Weak AI' refer to?",
        options: ["Slow computers", "AI designed for specific tasks", "Outdated AI", "Simple algorithms"],
        correctAnswer: "AI designed for specific tasks"
    },
    {
        id: 9,
        question: "Which of the following is an example of Narrow AI?",
        options: ["General problem solver", "Chess playing program", "Human-like robot", "Conscious machine"],
        correctAnswer: "Chess playing program"
    },
    {
        id: 10,
        question: "What is Machine Learning?",
        options: ["Programming computers manually", "Machines learning from data", "Building hardware", "Writing algorithms"],
        correctAnswer: "Machines learning from data"
    },
    {
        id: 11,
        question: "Who developed the first neural network?",
        options: ["Warren McCulloch and Walter Pitts", "John McCarthy", "Alan Turing", "Marvin Minsky"],
        correctAnswer: "Warren McCulloch and Walter Pitts"
    },
    {
        id: 12,
        question: "What is the Turing Test designed to evaluate?",
        options: ["Computer speed", "Machine's ability to exhibit intelligent behavior", "Programming skills", "Hardware quality"],
        correctAnswer: "Machine's ability to exhibit intelligent behavior"
    },
    {
        id: 13,
        question: "Which AI approach focuses on logical reasoning?",
        options: ["Neural Networks", "Symbolic AI", "Genetic Algorithms", "Fuzzy Logic"],
        correctAnswer: "Symbolic AI"
    },
    {
        id: 14,
        question: "What does AGI stand for?",
        options: ["Advanced General Intelligence", "Artificial General Intelligence", "Automated General Interface", "Applied General Implementation"],
        correctAnswer: "Artificial General Intelligence"
    },
    {
        id: 15,
        question: "Which decade saw the rise of expert systems?",
        options: ["1960s", "1970s", "1980s", "1990s"],
        correctAnswer: "1980s"
    },
    {
        id: 16,
        question: "What is the Chinese Room argument about?",
        options: ["Computer hardware", "Understanding vs simulation", "Language translation", "Room design"],
        correctAnswer: "Understanding vs simulation"
    },
    {
        id: 17,
        question: "Who proposed the Chinese Room argument?",
        options: ["Alan Turing", "John Searle", "John McCarthy", "Herbert Simon"],
        correctAnswer: "John Searle"
    },
    {
        id: 18,
        question: "What is Deep Learning?",
        options: ["Learning deeply about topics", "Subset of ML using neural networks", "Philosophy studies", "Database management"],
        correctAnswer: "Subset of ML using neural networks"
    },
    {
        id: 19,
        question: "Which company's AI defeated the world champion in Go?",
        options: ["IBM", "Google DeepMind", "Microsoft", "Facebook"],
        correctAnswer: "Google DeepMind"
    },
    {
        id: 20,
        question: "What was IBM's chess-playing computer called?",
        options: ["Deep Blue", "Watson", "AlphaGo", "Skynet"],
        correctAnswer: "Deep Blue"
    },

    // Python Basics (25 questions)
    {
        id: 21,
        question: "What is the correct file extension for Python files?",
        options: [".pt", ".py", ".python", ".pyt"],
        correctAnswer: ".py"
    },
    {
        id: 22,
        question: "Which command is used to install packages in Python?",
        options: ["install", "pip install", "python install", "get"],
        correctAnswer: "pip install"
    },
    {
        id: 23,
        question: "What is the output of print(2 ** 3)?",
        options: ["6", "8", "9", "5"],
        correctAnswer: "8"
    },
    {
        id: 24,
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "define", "func"],
        correctAnswer: "def"
    },
    {
        id: 25,
        question: "What does IDE stand for?",
        options: ["Integrated Development Environment", "Internal Development Engine", "Interactive Design Editor", "Intelligent Development Environment"],
        correctAnswer: "Integrated Development Environment"
    },
    {
        id: 26,
        question: "Which of the following is a valid variable name in Python?",
        options: ["2variable", "variable_2", "variable-2", "variable 2"],
        correctAnswer: "variable_2"
    },
    {
        id: 27,
        question: "What is the correct syntax for a single-line comment in Python?",
        options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
        correctAnswer: "# comment"
    },
    {
        id: 28,
        question: "Which data type is used to store True or False values?",
        options: ["int", "bool", "str", "float"],
        correctAnswer: "bool"
    },
    {
        id: 29,
        question: "What is the output of print(type(5.0))?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"],
        correctAnswer: "<class 'float'>"
    },
    {
        id: 30,
        question: "Which operator is used for floor division in Python?",
        options: ["/", "//", "%", "div"],
        correctAnswer: "//"
    },
    {
        id: 31,
        question: "What does the len() function do?",
        options: ["Calculates length", "Returns the number of items", "Measures size", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        id: 32,
        question: "Which method is used to add an element to a list?",
        options: ["add()", "append()", "insert()", "push()"],
        correctAnswer: "append()"
    },
    {
        id: 33,
        question: "What is the correct way to create a list in Python?",
        options: ["list = (1, 2, 3)", "list = [1, 2, 3]", "list = {1, 2, 3}", "list = <1, 2, 3>"],
        correctAnswer: "list = [1, 2, 3]"
    },
    {
        id: 34,
        question: "Which loop is used to iterate over a sequence?",
        options: ["while", "for", "loop", "iterate"],
        correctAnswer: "for"
    },
    {
        id: 35,
        question: "What is the output of print('Hello' + 'World')?",
        options: ["Hello World", "HelloWorld", "Hello+World", "Error"],
        correctAnswer: "HelloWorld"
    },
    {
        id: 36,
        question: "Which keyword is used to create a conditional statement?",
        options: ["if", "condition", "when", "check"],
        correctAnswer: "if"
    },
    {
        id: 37,
        question: "What does the range(5) function return?",
        options: ["Numbers 1 to 5", "Numbers 0 to 4", "Numbers 0 to 5", "Numbers 1 to 4"],
        correctAnswer: "Numbers 0 to 4"
    },
    {
        id: 38,
        question: "Which symbol is used for string formatting in Python 3.6+?",
        options: ["%", "f", "$", "@"],
        correctAnswer: "f"
    },
    {
        id: 39,
        question: "What is the purpose of the 'import' statement?",
        options: ["Export code", "Include external modules", "Create functions", "Define variables"],
        correctAnswer: "Include external modules"
    },
    {
        id: 40,
        question: "Which method converts a string to lowercase?",
        options: ["lowercase()", "lower()", "toLower()", "caseLower()"],
        correctAnswer: "lower()"
    },
    {
        id: 41,
        question: "What is the output of print(10 % 3)?",
        options: ["3", "1", "0", "3.33"],
        correctAnswer: "1"
    },
    {
        id: 42,
        question: "Which keyword is used to handle exceptions?",
        options: ["catch", "except", "error", "handle"],
        correctAnswer: "except"
    },
    {
        id: 43,
        question: "What is a tuple in Python?",
        options: ["Mutable sequence", "Immutable sequence", "Dictionary", "Set"],
        correctAnswer: "Immutable sequence"
    },
    {
        id: 44,
        question: "Which function reads input from the user?",
        options: ["read()", "input()", "scan()", "get()"],
        correctAnswer: "input()"
    },
    {
        id: 45,
        question: "What is the correct way to create a dictionary?",
        options: ["dict = [key:value]", "dict = {key:value}", "dict = (key:value)", "dict = <key:value>"],
        correctAnswer: "dict = {key:value}"
    },

    // NumPy (15 questions)
    {
        id: 46,
        question: "What does NumPy stand for?",
        options: ["Numerical Python", "Number Python", "New Python", "Numeric Processing"],
        correctAnswer: "Numerical Python"
    },
    {
        id: 47,
        question: "How do you import NumPy conventionally?",
        options: ["import numpy", "import numpy as np", "from numpy import *", "include numpy"],
        correctAnswer: "import numpy as np"
    },
    {
        id: 48,
        question: "What is the main data structure in NumPy?",
        options: ["List", "Array", "Matrix", "Vector"],
        correctAnswer: "Array"
    },
    {
        id: 49,
        question: "Which function creates a NumPy array?",
        options: ["np.create()", "np.array()", "np.make()", "np.new()"],
        correctAnswer: "np.array()"
    },
    {
        id: 50,
        question: "What does np.zeros(5) create?",
        options: ["Array of five 0s", "Empty array", "Array of five 1s", "None"],
        correctAnswer: "Array of five 0s"
    },
    {
        id: 51,
        question: "Which function creates an array of evenly spaced values?",
        options: ["np.space()", "np.range()", "np.linspace()", "np.even()"],
        correctAnswer: "np.linspace()"
    },
    {
        id: 52,
        question: "What is the attribute to get the shape of an array?",
        options: ["size", "shape", "dimensions", "length"],
        correctAnswer: "shape"
    },
    {
        id: 53,
        question: "Which function reshapes an array?",
        options: ["reshape()", "change()", "modify()", "alter()"],
        correctAnswer: "reshape()"
    },
    {
        id: 54,
        question: "What does np.ones((3,3)) create?",
        options: ["3x3 array of zeros", "3x3 array of ones", "Array with value 3", "Empty 3x3 array"],
        correctAnswer: "3x3 array of ones"
    },
    {
        id: 55,
        question: "Which function calculates the mean of an array?",
        options: ["np.average()", "np.mean()", "np.median()", "np.mid()"],
        correctAnswer: "np.mean()"
    },
    {
        id: 56,
        question: "What is array slicing used for?",
        options: ["Deleting arrays", "Accessing array elements", "Creating arrays", "Sorting arrays"],
        correctAnswer: "Accessing array elements"
    },
    {
        id: 57,
        question: "Which function returns the maximum value in an array?",
        options: ["np.maximum()", "np.max()", "np.largest()", "np.top()"],
        correctAnswer: "np.max()"
    },
    {
        id: 58,
        question: "What does the dtype attribute represent?",
        options: ["Data type", "Date type", "Dimension type", "Default type"],
        correctAnswer: "Data type"
    },
    {
        id: 59,
        question: "Which operation performs element-wise multiplication?",
        options: ["np.dot()", "np.matmul()", "* operator", "np.multiply()"],
        correctAnswer: "* operator"
    },
    {
        id: 60,
        question: "What does np.arange(10) create?",
        options: ["Array from 1 to 10", "Array from 0 to 9", "Array from 0 to 10", "Array of 10 zeros"],
        correctAnswer: "Array from 0 to 9"
    },

    // AI Lexical Terms (15 questions)
    {
        id: 61,
        question: "What is an 'Agent' in AI?",
        options: ["A program", "Entity that perceives and acts", "A robot", "A sensor"],
        correctAnswer: "Entity that perceives and acts"
    },
    {
        id: 62,
        question: "What is a 'Percept' in AI?",
        options: ["An action", "Sensory input at a given time", "A decision", "An algorithm"],
        correctAnswer: "Sensory input at a given time"
    },
    {
        id: 63,
        question: "What does 'Environment' mean in AI?",
        options: ["Room where AI works", "Surroundings agent operates in", "Computer hardware", "Software platform"],
        correctAnswer: "Surroundings agent operates in"
    },
    {
        id: 64,
        question: "What is an 'Actuator'?",
        options: ["Input device", "Device that performs actions", "Sensor", "Processor"],
        correctAnswer: "Device that performs actions"
    },
    {
        id: 65,
        question: "What is a 'Sensor'?",
        options: ["Output device", "Device that perceives environment", "Processor", "Memory"],
        correctAnswer: "Device that perceives environment"
    },
    {
        id: 66,
        question: "What is a 'State' in AI?",
        options: ["Location", "Configuration of environment", "Action result", "Sensor type"],
        correctAnswer: "Configuration of environment"
    },
    {
        id: 67,
        question: "What is a 'Goal' in AI?",
        options: ["Final destination", "Desired state to achieve", "Starting point", "Random state"],
        correctAnswer: "Desired state to achieve"
    },
    {
        id: 68,
        question: "What is 'Rationality' in AI?",
        options: ["Being logical", "Maximizing expected performance", "Following rules", "Being fast"],
        correctAnswer: "Maximizing expected performance"
    },
    {
        id: 69,
        question: "What is a 'Performance Measure'?",
        options: ["Speed test", "Criterion for agent success", "Memory usage", "Code efficiency"],
        correctAnswer: "Criterion for agent success"
    },
    {
        id: 70,
        question: "What is an 'Action' in AI?",
        options: ["Perception", "What agent does", "Input received", "State change"],
        correctAnswer: "What agent does"
    },
    {
        id: 71,
        question: "What is 'Autonomy' in AI?",
        options: ["Speed", "Independence from human intervention", "Power consumption", "Size"],
        correctAnswer: "Independence from human intervention"
    },
    {
        id: 72,
        question: "What is a 'Task Environment'?",
        options: ["Coding platform", "Problem specification for agent", "Computer system", "User interface"],
        correctAnswer: "Problem specification for agent"
    },
    {
        id: 73,
        question: "What does 'Observable' mean in environment types?",
        options: ["Visible", "Agent can sense complete state", "Transparent", "Clear"],
        correctAnswer: "Agent can sense complete state"
    },
    {
        id: 74,
        question: "What is a 'Deterministic' environment?",
        options: ["Random", "Next state fully determined by current state", "Unpredictable", "Chaotic"],
        correctAnswer: "Next state fully determined by current state"
    },
    {
        id: 75,
        question: "What is an 'Episodic' task?",
        options: ["Continuous", "Divided into episodes", "Long-running", "Infinite"],
        correctAnswer: "Divided into episodes"
    },

    // Simple Reflex Agent (25 questions)
    {
        id: 76,
        question: "What is a Simple Reflex Agent?",
        options: ["Complex AI", "Agent that acts based on current percept", "Learning agent", "Planning agent"],
        correctAnswer: "Agent that acts based on current percept"
    },
    {
        id: 77,
        question: "What does a Simple Reflex Agent use for decision making?",
        options: ["Memory", "Condition-action rules", "Planning", "Learning"],
        correctAnswer: "Condition-action rules"
    },
    {
        id: 78,
        question: "Does a Simple Reflex Agent maintain internal state?",
        options: ["Yes", "No", "Sometimes", "Depends on implementation"],
        correctAnswer: "No"
    },
    {
        id: 79,
        question: "What is the main limitation of Simple Reflex Agents?",
        options: ["Too complex", "Only works in fully observable environments", "Too slow", "Requires too much memory"],
        correctAnswer: "Only works in fully observable environments"
    },
    {
        id: 80,
        question: "What are condition-action rules also called?",
        options: ["Functions", "If-then rules", "Loops", "Classes"],
        correctAnswer: "If-then rules"
    },
    {
        id: 81,
        question: "In a Simple Reflex Agent, what determines the action?",
        options: ["History", "Current percept only", "Future prediction", "Random choice"],
        correctAnswer: "Current percept only"
    },
    {
        id: 82,
        question: "What is the first step in a Simple Reflex Agent's operation?",
        options: ["Act", "Perceive environment", "Plan", "Learn"],
        correctAnswer: "Perceive environment"
    },
    {
        id: 83,
        question: "Can a Simple Reflex Agent learn from experience?",
        options: ["Yes", "No", "Sometimes", "Only with modifications"],
        correctAnswer: "No"
    },
    {
        id: 84,
        question: "What type of environment is best for Simple Reflex Agents?",
        options: ["Partially observable", "Fully observable", "Unobservable", "Complex"],
        correctAnswer: "Fully observable"
    },
    {
        id: 85,
        question: "Which component maps percepts to actions in a Simple Reflex Agent?",
        options: ["Memory", "Rule base", "Learning module", "Planner"],
        correctAnswer: "Rule base"
    },
    {
        id: 86,
        question: "What happens when no rule matches in a Simple Reflex Agent?",
        options: ["Agent stops", "Default action or error", "Agent learns", "Random action"],
        correctAnswer: "Default action or error"
    },
    {
        id: 87,
        question: "Is a thermostat an example of a Simple Reflex Agent?",
        options: ["Yes", "No", "Partially", "Depends"],
        correctAnswer: "Yes"
    },
    {
        id: 88,
        question: "What is the computational complexity of a Simple Reflex Agent?",
        options: ["High", "Low", "Exponential", "Variable"],
        correctAnswer: "Low"
    },
    {
        id: 89,
        question: "Can a Simple Reflex Agent handle partially observable environments well?",
        options: ["Yes", "No", "Sometimes", "With modifications"],
        correctAnswer: "No"
    },
    {
        id: 90,
        question: "What does a Simple Reflex Agent lack compared to other agents?",
        options: ["Speed", "Memory and learning", "Rules", "Sensors"],
        correctAnswer: "Memory and learning"
    },
    {
        id: 91,
        question: "In Python, how would you implement a Simple Reflex Agent's rules?",
        options: ["Loops", "If-elif-else statements", "Classes", "Functions"],
        correctAnswer: "If-elif-else statements"
    },
    {
        id: 92,
        question: "What is the agent function in a Simple Reflex Agent?",
        options: ["Maps state to action", "Maps percept sequence to action", "Maps current percept to action", "Maps goal to action"],
        correctAnswer: "Maps current percept to action"
    },
    {
        id: 93,
        question: "Can Simple Reflex Agents work in stochastic environments?",
        options: ["Perfectly", "With limitations", "Not at all", "Better than others"],
        correctAnswer: "With limitations"
    },
    {
        id: 94,
        question: "What makes Simple Reflex Agents 'simple'?",
        options: ["Easy to build", "No memory or learning", "Fast execution", "Small code"],
        correctAnswer: "No memory or learning"
    },
    {
        id: 95,
        question: "Which is NOT a characteristic of Simple Reflex Agents?",
        options: ["Uses current percept", "No internal state", "Plans ahead", "Uses rules"],
        correctAnswer: "Plans ahead"
    },
    {
        id: 96,
        question: "How does a Simple Reflex Agent select actions?",
        options: ["Random selection", "Rule matching", "Optimization", "Prediction"],
        correctAnswer: "Rule matching"
    },
    {
        id: 97,
        question: "What is a vacuum cleaner robot an example of?",
        options: ["Complex agent", "Simple Reflex Agent", "Learning agent", "Planning agent"],
        correctAnswer: "Simple Reflex Agent"
    },
    {
        id: 98,
        question: "Do Simple Reflex Agents consider future consequences?",
        options: ["Yes", "No", "Sometimes", "Depends on rules"],
        correctAnswer: "No"
    },
    {
        id: 99,
        question: "What is the main advantage of Simple Reflex Agents?",
        options: ["Intelligence", "Speed and simplicity", "Learning ability", "Memory"],
        correctAnswer: "Speed and simplicity"
    },
    {
        id: 100,
        question: "In code, what data structure typically stores the rules for a Simple Reflex Agent?",
        options: ["Array", "Dictionary or if-else conditions", "Tree", "Graph"],
        correctAnswer: "Dictionary or if-else conditions"
    },
];

export default questionBank;
