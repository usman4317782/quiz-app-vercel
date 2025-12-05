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
        question: "Which approach focuses on how humans think?",
        options: ["Acting Humanly", "Thinking Humanly", "Acting Rationally", "Thinking Rationally"],
        correctAnswer: "Thinking Humanly"
    },
    {
        id: 3,
        question: "The Turing Test is associated with which approach to AI?",
        options: ["Acting Humanly", "Thinking Humanly", "Acting Rationally", "Thinking Rationally"],
        correctAnswer: "Acting Humanly"
    },
    {
        id: 4,
        question: "Which approach uses logic and reasoning to make decisions?",
        options: ["Acting Humanly", "Thinking Humanly", "Thinking Rationally", "Acting Irrationally"],
        correctAnswer: "Thinking Rationally"
    },
    {
        id: 5,
        question: "What does 'Acting Rationally' mean in AI?",
        options: ["Mimicking human behavior", "Making optimal decisions", "Thinking like humans", "Following emotions"],
        correctAnswer: "Making optimal decisions"
    },
    {
        id: 6,
        question: "Which field contributed logic and computation theory to AI?",
        options: ["Psychology", "Mathematics", "Philosophy", "Linguistics"],
        correctAnswer: "Mathematics"
    },
    {
        id: 7,
        question: "Who contributed to AI by studying human reasoning and the mind?",
        options: ["Philosophers", "Psychologists", "Engineers", "Economists"],
        correctAnswer: "Psychologists"
    },
    {
        id: 8,
        question: "Which foundation of AI deals with questions like 'Can machines think?'",
        options: ["Computer Engineering", "Mathematics", "Philosophy", "Economics"],
        correctAnswer: "Philosophy"
    },
    {
        id: 9,
        question: "Computer Engineering contributed to AI by providing:",
        options: ["Logical reasoning", "Hardware and software", "Cognitive models", "Language structure"],
        correctAnswer: "Hardware and software"
    },
    {
        id: 10,
        question: "What is the main difference between programming with AI and without AI?",
        options: ["AI uses loops", "AI learns from data", "AI is faster", "AI uses functions"],
        correctAnswer: "AI learns from data"
    },
    {
        id: 11,
        question: "Which AI application allows computers to understand human language?",
        options: ["Vision Systems", "Expert Systems", "Natural Language Processing", "Robotics"],
        correctAnswer: "Natural Language Processing"
    },
    {
        id: 12,
        question: "Expert Systems are used for:",
        options: ["Playing games", "Making decisions like human experts", "Understanding images", "Robot movement"],
        correctAnswer: "Making decisions like human experts"
    },
    {
        id: 13,
        question: "AI in gaming is primarily used for:",
        options: ["Graphics rendering", "Creating intelligent opponents", "Sound effects", "Network connectivity"],
        correctAnswer: "Creating intelligent opponents"
    },
    {
        id: 14,
        question: "Computer Vision in AI deals with:",
        options: ["Understanding and processing images", "Text analysis", "Speech recognition", "Game playing"],
        correctAnswer: "Understanding and processing images"
    },
    {
        id: 15,
        question: "Intelligent Robots use AI to:",
        options: ["Store data", "Make autonomous decisions", "Display graphics", "Connect to internet"],
        correctAnswer: "Make autonomous decisions"
    },
    {
        id: 16,
        question: "What is an agent in AI?",
        options: ["A programmer", "An entity that perceives and acts", "A database", "A neural network"],
        correctAnswer: "An entity that perceives and acts"
    },
    {
        id: 17,
        question: "The basic structure of an agent includes:",
        options: ["Sensors and actuators", "Only memory", "Only processors", "Network cards"],
        correctAnswer: "Sensors and actuators"
    },
    {
        id: 18,
        question: "Sensors in an agent are used to:",
        options: ["Perform actions", "Perceive the environment", "Store information", "Process data"],
        correctAnswer: "Perceive the environment"
    },
    {
        id: 19,
        question: "Actuators in an agent are used to:",
        options: ["Sense the environment", "Perform actions", "Think", "Learn"],
        correctAnswer: "Perform actions"
    },
    {
        id: 20,
        question: "What does rationality mean in the context of AI agents?",
        options: ["Acting emotionally", "Acting to maximize expected performance", "Acting randomly", "Acting slowly"],
        correctAnswer: "Acting to maximize expected performance"
    },
    {
        id: 21,
        question: "Omniscience means:",
        options: ["Knowing everything", "Acting perfectly", "Learning quickly", "Being rational"],
        correctAnswer: "Knowing everything"
    },
    {
        id: 22,
        question: "Can a rational agent be omniscient?",
        options: ["Yes, always", "No, rationality doesn't require omniscience", "Only sometimes", "Yes, but rarely"],
        correctAnswer: "No, rationality doesn't require omniscience"
    },
    {
        id: 23,
        question: "A Simple Reflex Agent acts based on:",
        options: ["Current percept only", "Past experiences", "Future goals", "Utility calculations"],
        correctAnswer: "Current percept only"
    },
    {
        id: 24,
        question: "What is the main limitation of Simple Reflex Agents?",
        options: ["They are too complex", "They cannot handle partially observable environments", "They are too slow", "They use too much memory"],
        correctAnswer: "They cannot handle partially observable environments"
    },
    {
        id: 25,
        question: "Model-based agents maintain:",
        options: ["Only current state", "Internal state of the world", "No memory", "Future predictions only"],
        correctAnswer: "Internal state of the world"
    },
    {
        id: 26,
        question: "What additional component do Model-based agents have compared to Simple Reflex agents?",
        options: ["Sensors", "Internal model of the world", "Actuators", "More rules"],
        correctAnswer: "Internal model of the world"
    },
    {
        id: 27,
        question: "Goal-based agents differ from reflex agents by:",
        options: ["Having sensors", "Considering future consequences", "Being faster", "Using less memory"],
        correctAnswer: "Considering future consequences"
    },
    {
        id: 28,
        question: "What do Goal-based agents use to make decisions?",
        options: ["Only current state", "Goal information and search", "Random selection", "Past actions only"],
        correctAnswer: "Goal information and search"
    },
    {
        id: 29,
        question: "Utility-based agents measure:",
        options: ["Speed of execution", "Degree of happiness or success", "Number of actions", "Memory usage"],
        correctAnswer: "Degree of happiness or success"
    },
    {
        id: 30,
        question: "What is a utility function?",
        options: ["A programming function", "A measure of desirability of states", "A sensor input", "An actuator output"],
        correctAnswer: "A measure of desirability of states"
    },
    {
        id: 31,
        question: "Utility-based agents are useful when:",
        options: ["There is only one goal", "There are conflicting goals", "No goals exist", "Goals are simple"],
        correctAnswer: "There are conflicting goals"
    },
    {
        id: 32,
        question: "An environment in AI is:",
        options: ["The agent itself", "Everything the agent interacts with", "The program code", "The hardware"],
        correctAnswer: "Everything the agent interacts with"
    },
    {
        id: 33,
        question: "In an accessible environment, the agent:",
        options: ["Cannot sense anything", "Can obtain complete information", "Has limited sensors", "Is blind"],
        correctAnswer: "Can obtain complete information"
    },
    {
        id: 34,
        question: "An inaccessible environment means:",
        options: ["Agent has full information", "Agent has partial or no information", "Environment is simple", "Environment is static"],
        correctAnswer: "Agent has partial or no information"
    },
    {
        id: 35,
        question: "Chess is an example of which type of environment?",
        options: ["Inaccessible", "Accessible", "Continuous", "Non-episodic"],
        correctAnswer: "Accessible"
    },
    {
        id: 36,
        question: "In a deterministic environment:",
        options: ["Next state is random", "Next state is determined by current state and action", "Nothing is predictable", "Actions have no effect"],
        correctAnswer: "Next state is determined by current state and action"
    },
    {
        id: 37,
        question: "A non-deterministic environment is one where:",
        options: ["Everything is predictable", "Outcomes are certain", "Multiple outcomes are possible for an action", "No actions can be taken"],
        correctAnswer: "Multiple outcomes are possible for an action"
    },
    {
        id: 38,
        question: "Rolling dice creates which type of environment?",
        options: ["Deterministic", "Non-deterministic", "Static", "Episodic"],
        correctAnswer: "Non-deterministic"
    },
    {
        id: 39,
        question: "In an episodic environment:",
        options: ["Actions depend on previous episodes", "Each episode is independent", "Episodes never end", "No episodes exist"],
        correctAnswer: "Each episode is independent"
    },
    {
        id: 40,
        question: "A non-episodic environment means:",
        options: ["No memory needed", "Current decision affects future decisions", "Episodes are separate", "No sequence exists"],
        correctAnswer: "Current decision affects future decisions"
    },
    {
        id: 41,
        question: "Image classification is an example of:",
        options: ["Non-episodic task", "Episodic task", "Dynamic task", "Continuous task"],
        correctAnswer: "Episodic task"
    },
    {
        id: 42,
        question: "A static environment:",
        options: ["Changes while agent is thinking", "Doesn't change while agent deliberates", "Is always moving", "Has no objects"],
        correctAnswer: "Doesn't change while agent deliberates"
    },
    {
        id: 43,
        question: "A dynamic environment:",
        options: ["Never changes", "Changes while agent is deciding", "Is always static", "Has no time pressure"],
        correctAnswer: "Changes while agent is deciding"
    },
    {
        id: 44,
        question: "Crossword puzzles represent which type of environment?",
        options: ["Dynamic", "Static", "Continuous", "Non-deterministic"],
        correctAnswer: "Static"
    },
    {
        id: 45,
        question: "Taxi driving is an example of:",
        options: ["Static environment", "Dynamic environment", "Episodic environment", "Discrete environment"],
        correctAnswer: "Dynamic environment"
    },
    {
        id: 46,
        question: "In a discrete environment:",
        options: ["Values are continuous", "Limited number of distinct states", "Infinite states exist", "No states exist"],
        correctAnswer: "Limited number of distinct states"
    },
    {
        id: 47,
        question: "A continuous environment has:",
        options: ["Distinct states only", "Infinite possible states", "No states", "Binary states"],
        correctAnswer: "Infinite possible states"
    },
    {
        id: 48,
        question: "Chess has a:",
        options: ["Continuous state space", "Discrete state space", "No state space", "Random state space"],
        correctAnswer: "Discrete state space"
    },
    {
        id: 49,
        question: "Robot navigation typically involves:",
        options: ["Discrete space", "Continuous space", "No space", "Binary space"],
        correctAnswer: "Continuous space"
    },
    {
        id: 50,
        question: "A Knowledge-based Agent uses:",
        options: ["Only sensors", "Knowledge base and reasoning", "Random actions", "No information"],
        correctAnswer: "Knowledge base and reasoning"
    },
    {
        id: 51,
        question: "The main component of a Knowledge-based Agent is:",
        options: ["Actuator only", "Knowledge Base", "Sensor only", "Memory chip"],
        correctAnswer: "Knowledge Base"
    },
    {
        id: 52,
        question: "TELL operation in KBA is used to:",
        options: ["Query information", "Add knowledge", "Delete knowledge", "Update sensors"],
        correctAnswer: "Add knowledge"
    },
    {
        id: 53,
        question: "ASK operation in KBA is used to:",
        options: ["Add new facts", "Query the knowledge base", "Delete facts", "Update environment"],
        correctAnswer: "Query the knowledge base"
    },
    {
        id: 54,
        question: "How many levels does a Knowledge-based Agent have?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: "Three"
    },
    {
        id: 55,
        question: "The Knowledge Level describes:",
        options: ["Implementation details", "What the agent knows", "Hardware specifications", "Programming language"],
        correctAnswer: "What the agent knows"
    },
    {
        id: 56,
        question: "The Logical Level deals with:",
        options: ["Hardware", "Encoding of knowledge", "Physical sensors", "Network connections"],
        correctAnswer: "Encoding of knowledge"
    },
    {
        id: 57,
        question: "The Implementation Level focuses on:",
        options: ["What agent knows", "Physical realization", "Goals only", "Abstract concepts"],
        correctAnswer: "Physical realization"
    },
    {
        id: 58,
        question: "Declarative approach in KBA means:",
        options: ["Writing procedures", "Stating facts explicitly", "Using loops", "Hardware design"],
        correctAnswer: "Stating facts explicitly"
    },
    {
        id: 59,
        question: "Procedural approach in KBA involves:",
        options: ["Listing facts", "Encoding behavior in procedures", "Using sensors", "Drawing diagrams"],
        correctAnswer: "Encoding behavior in procedures"
    },
    {
        id: 60,
        question: "Reasoning in AI is the process of:",
        options: ["Sensing environment", "Deriving new conclusions from knowledge", "Moving actuators", "Storing data"],
        correctAnswer: "Deriving new conclusions from knowledge"
    },
    {
        id: 61,
        question: "Logic in AI provides:",
        options: ["Hardware", "Formal framework for reasoning", "Sensors", "Actuators"],
        correctAnswer: "Formal framework for reasoning"
    },
    {
        id: 62,
        question: "A Knowledge Representation Language is used to:",
        options: ["Program robots", "Express knowledge formally", "Build hardware", "Create graphics"],
        correctAnswer: "Express knowledge formally"
    },
    {
        id: 63,
        question: "Syntax in logic refers to:",
        options: ["Meaning of sentences", "Structure of valid sentences", "Truth values", "Inference rules"],
        correctAnswer: "Structure of valid sentences"
    },
    {
        id: 64,
        question: "Semantics in logic defines:",
        options: ["Sentence structure", "Meaning and truth of sentences", "Grammar rules", "Symbols only"],
        correctAnswer: "Meaning and truth of sentences"
    },
    {
        id: 65,
        question: "Propositional Logic uses:",
        options: ["Complex predicates", "Simple true/false propositions", "Continuous values", "Images"],
        correctAnswer: "Simple true/false propositions"
    },
    {
        id: 66,
        question: "In Propositional Logic, a proposition can be:",
        options: ["Only true", "Only false", "True or false", "Neither true nor false"],
        correctAnswer: "True or false"
    },
    {
        id: 67,
        question: "The NOT operator in logic:",
        options: ["Combines propositions", "Negates a proposition", "Implies truth", "Creates equivalence"],
        correctAnswer: "Negates a proposition"
    },
    {
        id: 68,
        question: "The AND operator returns true when:",
        options: ["One operand is true", "Both operands are true", "No operands are true", "Either operand is false"],
        correctAnswer: "Both operands are true"
    },
    {
        id: 69,
        question: "The OR operator returns true when:",
        options: ["All operands are false", "At least one operand is true", "Exactly two operands are true", "No operands are true"],
        correctAnswer: "At least one operand is true"
    },
    {
        id: 70,
        question: "Implication (→) is false only when:",
        options: ["Both are true", "Both are false", "Antecedent is true and consequent is false", "Antecedent is false"],
        correctAnswer: "Antecedent is true and consequent is false"
    },
    {
        id: 71,
        question: "Rules of Inference allow us to:",
        options: ["Create new syntax", "Derive new sentences from existing ones", "Delete knowledge", "Change semantics"],
        correctAnswer: "Derive new sentences from existing ones"
    },
    {
        id: 72,
        question: "Modus Ponens is a rule that states if P→Q and P are true, then:",
        options: ["P is false", "Q is true", "Q is false", "Nothing follows"],
        correctAnswer: "Q is true"
    },
    {
        id: 73,
        question: "The converse of P→Q is:",
        options: ["Q→P", "NOT P→NOT Q", "P AND Q", "P OR Q"],
        correctAnswer: "Q→P"
    },
    {
        id: 74,
        question: "Which agent type requires the most computational resources?",
        options: ["Simple Reflex", "Model-based", "Utility-based", "All are equal"],
        correctAnswer: "Utility-based"
    },
    {
        id: 75,
        question: "Partial observability means:",
        options: ["Seeing everything", "Seeing some aspects of environment", "Seeing nothing", "Perfect vision"],
        correctAnswer: "Seeing some aspects of environment"
    },
    {
        id: 76,
        question: "A thermostat is an example of which agent type?",
        options: ["Goal-based", "Utility-based", "Simple Reflex", "Learning"],
        correctAnswer: "Simple Reflex"
    },
    {
        id: 77,
        question: "Poker is an example of what type of environment?",
        options: ["Accessible", "Inaccessible", "Fully observable", "Static"],
        correctAnswer: "Inaccessible"
    },
    {
        id: 78,
        question: "What makes an environment semi-dynamic?",
        options: ["Environment changes constantly", "Agent's performance changes with time", "Nothing changes", "Only agent moves"],
        correctAnswer: "Agent's performance changes with time"
    },
    {
        id: 79,
        question: "Multi-agent environments involve:",
        options: ["One agent only", "Multiple interacting agents", "No agents", "Static agents only"],
        correctAnswer: "Multiple interacting agents"
    },
    {
        id: 80,
        question: "Which is NOT a property of task environments?",
        options: ["Observable", "Deterministic", "Episodic", "Colorful"],
        correctAnswer: "Colorful"
    },
    {
        id: 81,
        question: "A vacuum cleaner robot operates in which type of environment?",
        options: ["Fully observable, deterministic", "Partially observable, stochastic", "Episodic, static", "Continuous, multi-agent"],
        correctAnswer: "Partially observable, stochastic"
    },
    {
        id: 82,
        question: "Self-driving cars require which agent architecture?",
        options: ["Simple reflex only", "Complex model-based with learning", "Goal-based only", "Utility-based only"],
        correctAnswer: "Complex model-based with learning"
    },
    {
        id: 83,
        question: "In AI, a percept is:",
        options: ["An action", "Agent's sensory input", "A goal", "A plan"],
        correctAnswer: "Agent's sensory input"
    },
    {
        id: 84,
        question: "Percept sequence is:",
        options: ["Single observation", "Complete history of percepts", "Future predictions", "Action history"],
        correctAnswer: "Complete history of percepts"
    },
    {
        id: 85,
        question: "Agent function maps:",
        options: ["Actions to percepts", "Percept sequences to actions", "Goals to plans", "States to rewards"],
        correctAnswer: "Percept sequences to actions"
    },
    {
        id: 86,
        question: "An ideal rational agent:",
        options: ["Is omniscient", "Maximizes expected performance", "Never makes mistakes", "Knows the future"],
        correctAnswer: "Maximizes expected performance"
    },
    {
        id: 87,
        question: "Performance measure defines:",
        options: ["Agent speed", "Degree of success", "Code efficiency", "Memory usage"],
        correctAnswer: "Degree of success"
    },
    {
        id: 88,
        question: "PEAS stands for:",
        options: ["Performance, Environment, Actuators, Sensors", "Plans, Execution, Actions, States", "Percepts, Events, Actions, Systems", "Programs, Environments, Agents, States"],
        correctAnswer: "Performance, Environment, Actuators, Sensors"
    },
    {
        id: 89,
        question: "In PEAS, Performance measure is:",
        options: ["How to act", "What to achieve", "Where to act", "When to act"],
        correctAnswer: "What to achieve"
    },
    {
        id: 90,
        question: "Condition-Action rules are used in:",
        options: ["Utility agents", "Simple Reflex agents", "Learning agents", "All agents equally"],
        correctAnswer: "Simple Reflex agents"
    },
    {
        id: 91,
        question: "State space in AI refers to:",
        options: ["Physical space", "Set of all possible states", "Memory space", "Disk space"],
        correctAnswer: "Set of all possible states"
    },
    {
        id: 92,
        question: "Atomic representation treats states as:",
        options: ["Divisible units", "Indivisible wholes", "Variables", "Functions"],
        correctAnswer: "Indivisible wholes"
    },
    {
        id: 93,
        question: "Medical diagnosis systems are examples of:",
        options: ["Gaming AI", "Expert Systems", "Robotics", "Vision systems"],
        correctAnswer: "Expert Systems"
    },
    {
        id: 94,
        question: "Natural Language Processing includes:",
        options: ["Image recognition", "Text and speech understanding", "Robot movement", "Game playing"],
        correctAnswer: "Text and speech understanding"
    },
    {
        id: 95,
        question: "Machine translation is an application of:",
        options: ["Computer Vision", "NLP", "Robotics", "Expert Systems"],
        correctAnswer: "NLP"
    },
    {
        id: 96,
        question: "Facial recognition is part of:",
        options: ["NLP", "Expert Systems", "Computer Vision", "Gaming"],
        correctAnswer: "Computer Vision"
    },
    {
        id: 97,
        question: "AlphaGo is an example of AI in:",
        options: ["Medicine", "Gaming", "Translation", "Robotics"],
        correctAnswer: "Gaming"
    },
    {
        id: 98,
        question: "Inference engine in expert systems:",
        options: ["Stores facts", "Applies rules to derive conclusions", "Collects data", "Displays results"],
        correctAnswer: "Applies rules to derive conclusions"
    },
    {
        id: 99,
        question: "Autonomous vehicles use AI primarily for:",
        options: ["Entertainment", "Decision making and navigation", "Communication", "Data storage"],
        correctAnswer: "Decision making and navigation"
    },
    {
        id: 100,
        question: "Speech recognition is an application of:",
        options: ["Computer Vision", "NLP", "Robotics", "Gaming"],
        correctAnswer: "NLP"
    },
    {
        id: 101,
        question: "The main advantage of declarative approach is:",
        options: ["Faster execution", "Easier to modify knowledge", "Less memory", "Better graphics"],
        correctAnswer: "Easier to modify knowledge"
    },
    {
        id: 102,
        question: "Procedural approach is more efficient when:",
        options: ["Knowledge changes frequently", "Knowledge is static and procedures are optimized", "Learning is required", "Multiple agents exist"],
        correctAnswer: "Knowledge is static and procedures are optimized"
    },
    {
        id: 103,
        question: "Sound inference means:",
        options: ["Fast reasoning", "Derived conclusions are true if premises are true", "Loud processing", "Random results"],
        correctAnswer: "Derived conclusions are true if premises are true"
    },
    {
        id: 104,
        question: "Complete inference means:",
        options: ["Fast processing", "Can derive any entailed sentence", "Uses all memory", "Never stops"],
        correctAnswer: "Can derive any entailed sentence"
    },
    {
        id: 105,
        question: "Entailment in logic means:",
        options: ["Two sentences are identical", "One sentence logically follows from others", "Sentences are unrelated", "Sentences are false"],
        correctAnswer: "One sentence logically follows from others"
    },
    {
        id: 106,
        question: "A knowledge base is:",
        options: ["A database", "Set of sentences in formal language", "A programming tool", "A hardware component"],
        correctAnswer: "Set of sentences in formal language"
    },
    {
        id: 107,
        question: "Model in logic refers to:",
        options: ["Mathematical equation", "Assignment of truth values", "Program structure", "Agent design"],
        correctAnswer: "Assignment of truth values"
    },
    {
        id: 108,
        question: "Satisfiability means:",
        options: ["Sentence is false", "Sentence is true in at least one model", "Sentence is always true", "Sentence is invalid"],
        correctAnswer: "Sentence is true in at least one model"
    },
    {
        id: 109,
        question: "Validity in logic means a sentence is:",
        options: ["Sometimes true", "True in all models", "False in all models", "Unprovable"],
        correctAnswer: "True in all models"
    },
    {
        id: 110,
        question: "Propositional symbols represent:",
        options: ["Numbers", "Boolean propositions", "Functions", "Objects"],
        correctAnswer: "Boolean propositions"
    },
    {
        id: 111,
        question: "Complex sentences are formed using:",
        options: ["Only symbols", "Logical connectives", "Numbers", "Images"],
        correctAnswer: "Logical connectives"
    },
    {
        id: 112,
        question: "The symbol ∧ represents:",
        options: ["OR", "AND", "NOT", "IMPLIES"],
        correctAnswer: "AND"
    },
    {
        id: 113,
        question: "The symbol ∨ represents:",
        options: ["AND", "OR", "NOT", "EQUIVALENT"],
        correctAnswer: "OR"
    },
    {
        id: 114,
        question: "The symbol ¬ represents:",
        options: ["AND", "OR", "NOT", "IMPLIES"],
        correctAnswer: "NOT"
    },
    {
        id: 115,
        question: "The symbol → represents:",
        options: ["AND", "OR", "IMPLIES", "EQUIVALENT"],
        correctAnswer: "IMPLIES"
    },
    {
        id: 116,
        question: "The symbol ↔ represents:",
        options: ["AND", "IMPLIES", "NOT", "BICONDITIONAL"],
        correctAnswer: "BICONDITIONAL"
    },
    {
        id: 117,
        question: "Truth table is used to:",
        options: ["Write code", "Determine truth values of complex sentences", "Store data", "Create agents"],
        correctAnswer: "Determine truth values of complex sentences"
    },
    {
        id: 118,
        question: "A tautology is a sentence that is:",
        options: ["Always false", "Always true", "Sometimes true", "Undefined"],
        correctAnswer: "Always true"
    },
    {
        id: 119,
        question: "A contradiction is a sentence that is:",
        options: ["Always true", "Always false", "Sometimes true", "Valid"],
        correctAnswer: "Always false"
    },
    {
        id: 120,
        question: "Logical equivalence means two sentences:",
        options: ["Look similar", "Have same truth value in all models", "Are both false", "Are unrelated"],
        correctAnswer: "Have same truth value in all models"
    },
    {
        id: 121,
        question: "De Morgan's Law states ¬(P∧Q) is equivalent to:",
        options: ["¬P ∧ ¬Q", "¬P ∨ ¬Q", "P ∨ Q", "P ∧ Q"],
        correctAnswer: "¬P ∨ ¬Q"
    },
    {
        id: 122,
        question: "Modus Tollens states if P→Q and ¬Q, then:",
        options: ["P", "¬P", "Q", "¬Q"],
        correctAnswer: "¬P"
    },
    {
        id: 123,
        question: "Resolution is a:",
        options: ["Programming technique", "Inference rule", "Agent type", "Environment property"],
        correctAnswer: "Inference rule"
    },
    {
        id: 124,
        question: "Forward chaining is a:",
        options: ["Data-driven reasoning", "Goal-driven reasoning", "Random reasoning", "No reasoning"],
        correctAnswer: "Data-driven reasoning"
    },
    {
        id: 125,
        question: "Backward chaining is a:",
        options: ["Data-driven reasoning", "Goal-driven reasoning", "Random reasoning", "Visual reasoning"],
        correctAnswer: "Goal-driven reasoning"
    },
    {
        id: 126,
        question: "Conjunctive Normal Form (CNF) consists of:",
        options: ["ORs of ANDs", "ANDs of ORs", "Only NOTs", "Only implications"],
        correctAnswer: "ANDs of ORs"
    },
    {
        id: 127,
        question: "Horn clause has:",
        options: ["Multiple positive literals", "At most one positive literal", "No literals", "Only negative literals"],
        correctAnswer: "At most one positive literal"
    },
    {
        id: 128,
        question: "Propositional logic is decidable, meaning:",
        options: ["It cannot solve anything", "There's an algorithm to determine entailment", "It's too complex", "It's incomplete"],
        correctAnswer: "There's an algorithm to determine entailment"
    },
    {
        id: 129,
        question: "Main limitation of propositional logic is:",
        options: ["Too powerful", "Cannot express relationships between objects", "Too slow", "Too much memory"],
        correctAnswer: "Cannot express relationships between objects"
    },
    {
        id: 130,
        question: "In 'If P then Q', P is called:",
        options: ["Consequent", "Antecedent", "Conclusion", "Result"],
        correctAnswer: "Antecedent"
    },
    {
        id: 131,
        question: "In 'If P then Q', Q is called:",
        options: ["Antecedent", "Premise", "Consequent", "Hypothesis"],
        correctAnswer: "Consequent"
    },
    {
        id: 132,
        question: "The contrapositive of P→Q is:",
        options: ["Q→P", "¬Q→¬P", "¬P→¬Q", "P∧Q"],
        correctAnswer: "¬Q→¬P"
    },
    {
        id: 133,
        question: "Which is logically equivalent to P→Q?",
        options: ["Q→P", "¬P∨Q", "P∧Q", "¬Q→P"],
        correctAnswer: "¬P∨Q"
    },
    {
        id: 134,
        question: "A literal in logic is:",
        options: ["Complex sentence", "Atomic sentence or its negation", "Conjunction", "Disjunction"],
        correctAnswer: "Atomic sentence or its negation"
    },
    {
        id: 135,
        question: "Clause in logic is:",
        options: ["Single literal", "Disjunction of literals", "Conjunction of literals", "Implication"],
        correctAnswer: "Disjunction of literals"
    },
    {
        id: 136,
        question: "Unit resolution combines:",
        options: ["Two complex clauses", "Unit clause with other clause", "Three clauses", "No clauses"],
        correctAnswer: "Unit clause with other clause"
    },
    {
        id: 137,
        question: "Empty clause in resolution indicates:",
        options: ["Success", "Contradiction found", "Need more data", "Invalid input"],
        correctAnswer: "Contradiction found"
    },
    {
        id: 138,
        question: "Proof by refutation means:",
        options: ["Direct proof", "Assume negation and find contradiction", "Give examples", "Random testing"],
        correctAnswer: "Assume negation and find contradiction"
    },
    {
        id: 139,
        question: "Completeness of resolution means:",
        options: ["Fast execution", "Can prove all entailments", "Uses less memory", "Never fails"],
        correctAnswer: "Can prove all entailments"
    },
    {
        id: 140,
        question: "Which is NOT a logical connective in propositional logic?",
        options: ["AND", "OR", "PLUS", "NOT"],
        correctAnswer: "PLUS"
    },
    {
        id: 141,
        question: "Sentences in a knowledge base are called:",
        options: ["Programs", "Axioms", "Variables", "Functions"],
        correctAnswer: "Axioms"
    },
    {
        id: 142,
        question: "Inference by enumeration:",
        options: ["Is always efficient", "Checks all possible models", "Never works", "Is approximate"],
        correctAnswer: "Checks all possible models"
    },
    {
        id: 143,
        question: "Model checking is used to:",
        options: ["Write programs", "Verify if KB entails a sentence", "Create agents", "Design hardware"],
        correctAnswer: "Verify if KB entails a sentence"
    },
    {
        id: 144,
        question: "Theorem proving uses:",
        options: ["Random search", "Inference rules to derive conclusions", "Brute force", "Neural networks"],
        correctAnswer: "Inference rules to derive conclusions"
    },
    {
        id: 145,
        question: "Which reasoning is more efficient for propositional logic?",
        options: ["Random reasoning", "Depends on the problem", "Always forward chaining", "Always backward chaining"],
        correctAnswer: "Depends on the problem"
    },
    {
        id: 146,
        question: "Wumpus World is an example used to illustrate:",
        options: ["Gaming only", "Knowledge-based agent reasoning", "Graphics", "Networking"],
        correctAnswer: "Knowledge-based agent reasoning"
    },
    {
        id: 147,
        question: "In knowledge representation, expressiveness refers to:",
        options: ["Speed", "Range of concepts that can be represented", "Memory usage", "Code length"],
        correctAnswer: "Range of concepts that can be represented"
    },
    {
        id: 148,
        question: "A well-formed formula (WFF) is:",
        options: ["Any string", "Syntactically correct sentence", "True sentence", "False sentence"],
        correctAnswer: "Syntactically correct sentence"
    },
    {
        id: 149,
        question: "The main goal of knowledge representation is to:",
        options: ["Use more memory", "Enable effective reasoning", "Slow down processing", "Complicate systems"],
        correctAnswer: "Enable effective reasoning"
    },
    {
        id: 150,
        question: "Logical agents make decisions based on:",
        options: ["Emotions", "Logical inference from knowledge", "Random choice", "User input only"],
        correctAnswer: "Logical inference from knowledge"
    },
];

export default questionBank;
