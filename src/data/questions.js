// Sample question bank structure
// User should replace this with their 50 questions

const questionBank = [
    // Week 1: Introduction to Game Programming
    {
        id: 1,
        question: "What is the primary purpose of the game development process?",
        options: ["To maximize profits quickly", "To systematically transform a concept into a playable experience", "To create the most complex graphics", "To hire the largest team possible"],
        correctAnswer: "To systematically transform a concept into a playable experience"
    },
    {
        id: 2,
        question: "Which phase comes first in the typical game development pipeline?",
        options: ["Production", "Pre-production", "Post-production", "Alpha testing"],
        correctAnswer: "Pre-production"
    },
    {
        id: 3,
        question: "What is the game designer's primary responsibility?",
        options: ["Writing all the code", "Creating the visual assets", "Defining game mechanics and player experience", "Managing the budget"],
        correctAnswer: "Defining game mechanics and player experience"
    },
    {
        id: 4,
        question: "In a game development team, who is typically responsible for implementing game logic?",
        options: ["Sound designer", "Programmer", "Producer", "Artist"],
        correctAnswer: "Programmer"
    },
    {
        id: 5,
        question: "What is a major cost limitation in game development?",
        options: ["Free software availability", "Unlimited team size", "Time, budget, and scope constraints", "Excessive hardware resources"],
        correctAnswer: "Time, budget, and scope constraints"
    },
    {
        id: 6,
        question: "Which role manages schedules and ensures the team meets deadlines?",
        options: ["Lead programmer", "Producer", "Quality assurance tester", "Level designer"],
        correctAnswer: "Producer"
    },
    {
        id: 7,
        question: "What does 'scope creep' refer to in game development?",
        options: ["Improving graphics quality", "Uncontrolled expansion of project features", "Reducing team size", "Optimizing code performance"],
        correctAnswer: "Uncontrolled expansion of project features"
    },
    {
        id: 8,
        question: "In a 2D shooter game, what is the core gameplay loop?",
        options: ["Story cutscenes", "Shoot enemies, avoid damage, progress", "Character customization", "Inventory management"],
        correctAnswer: "Shoot enemies, avoid damage, progress"
    },
    {
        id: 9,
        question: "What is the purpose of a game design document (GDD)?",
        options: ["To write the final code", "To provide a comprehensive blueprint of the game", "To test game performance", "To market the game"],
        correctAnswer: "To provide a comprehensive blueprint of the game"
    },
    {
        id: 10,
        question: "Which team member typically creates character models and textures?",
        options: ["3D/2D Artist", "Programmer", "Sound designer", "Writer"],
        correctAnswer: "3D/2D Artist"
    },

    // Week 2: Game Engine Overview & Unity Basics
    {
        id: 11,
        question: "What is the primary advantage of using a game engine?",
        options: ["It writes the game for you", "It provides pre-built systems and tools for development", "It eliminates the need for programmers", "It guarantees commercial success"],
        correctAnswer: "It provides pre-built systems and tools for development"
    },
    {
        id: 12,
        question: "In Unity, what file format is typically used for project assets?",
        options: [".unity", ".asset", "Various formats (PNG, FBX, WAV, etc.)", ".exe"],
        correctAnswer: "Various formats (PNG, FBX, WAV, etc.)"
    },
    {
        id: 13,
        question: "What does importing assets into Unity accomplish?",
        options: ["Converts them to Unity-compatible formats", "Deletes the original files", "Automatically creates game logic", "Publishes the game"],
        correctAnswer: "Converts them to Unity-compatible formats"
    },
    {
        id: 14,
        question: "Which Unity window displays the visual representation of your game scene?",
        options: ["Inspector", "Hierarchy", "Scene View", "Console"],
        correctAnswer: "Scene View"
    },
    {
        id: 15,
        question: "What is the purpose of the Unity Inspector window?",
        options: ["To write C# scripts", "To view and modify component properties of selected objects", "To play the game", "To import assets"],
        correctAnswer: "To view and modify component properties of selected objects"
    },
    {
        id: 16,
        question: "In Unity, what is a GameObject?",
        options: ["A C# script", "The fundamental object in Unity scenes", "A type of asset", "A rendering technique"],
        correctAnswer: "The fundamental object in Unity scenes"
    },
    {
        id: 17,
        question: "What is the Hierarchy window used for in Unity?",
        options: ["Displaying all GameObjects in the current scene", "Editing code", "Rendering graphics", "Playing audio"],
        correctAnswer: "Displaying all GameObjects in the current scene"
    },
    {
        id: 18,
        question: "When creating a new Unity project, what should you consider selecting?",
        options: ["Only the project name", "Template (2D/3D), project name, and location", "Just the Unity version", "Only the asset packages"],
        correctAnswer: "Template (2D/3D), project name, and location"
    },
    {
        id: 19,
        question: "What is the purpose of the Project window in Unity?",
        options: ["To display scene GameObjects", "To show all project assets and folders", "To debug code", "To configure build settings"],
        correctAnswer: "To show all project assets and folders"
    },
    {
        id: 20,
        question: "In a Solar System simulation project, what would control planetary orbits?",
        options: ["Materials only", "Scripts with rotation and transform logic", "Lights", "Audio clips"],
        correctAnswer: "Scripts with rotation and transform logic"
    },

    // Week 3: Materials, Lights, Behaviors, Cameras, Audio, Prefabs
    {
        id: 21,
        question: "What does a Material define in Unity?",
        options: ["Object behavior", "Surface appearance and properties", "Object position", "Audio settings"],
        correctAnswer: "Surface appearance and properties"
    },
    {
        id: 22,
        question: "Which light type in Unity simulates sunlight?",
        options: ["Point Light", "Spot Light", "Directional Light", "Area Light"],
        correctAnswer: "Directional Light"
    },
    {
        id: 23,
        question: "What is the purpose of a Prefab in Unity?",
        options: ["To store reusable GameObject templates", "To compile C# code", "To render shadows", "To play audio"],
        correctAnswer: "To store reusable GameObject templates"
    },
    {
        id: 24,
        question: "In Unity, what component is required for an object to emit sound?",
        options: ["Renderer", "Audio Source", "Collider", "Rigidbody"],
        correctAnswer: "Audio Source"
    },
    {
        id: 25,
        question: "What does the Camera component's 'Field of View' property control?",
        options: ["Camera position", "The width of the observable world", "Camera rotation speed", "Rendering quality"],
        correctAnswer: "The width of the observable world"
    },
    {
        id: 26,
        question: "How do you make changes to all instances of a Prefab?",
        options: ["Edit each instance individually", "Modify the original Prefab asset", "Rewrite the script", "Delete and recreate them"],
        correctAnswer: "Modify the original Prefab asset"
    },
    {
        id: 27,
        question: "What is the main advantage of using Prefabs?",
        options: ["Faster rendering", "Consistency and easy updates across multiple instances", "Better physics simulation", "Improved audio quality"],
        correctAnswer: "Consistency and easy updates across multiple instances"
    },
    {
        id: 28,
        question: "In Unity, what does 'baking' refer to in the context of lighting?",
        options: ["Cooking food in-game", "Pre-calculating lighting information for performance", "Real-time shadow calculation", "Audio mixing"],
        correctAnswer: "Pre-calculating lighting information for performance"
    },
    {
        id: 29,
        question: "Which camera projection mode is typically used for 2D games?",
        options: ["Perspective", "Orthographic", "Isometric", "Fisheye"],
        correctAnswer: "Orthographic"
    },
    {
        id: 30,
        question: "What is an Audio Listener component used for?",
        options: ["Playing sounds", "Recording audio", "Acting as the 'ear' that hears Audio Sources", "Editing audio files"],
        correctAnswer: "Acting as the 'ear' that hears Audio Sources"
    },

    // Week 4: Level Design & Game Systems
    {
        id: 31,
        question: "What is the primary goal of level design?",
        options: ["Creating beautiful graphics", "Crafting engaging player experiences through space and gameplay", "Writing complex code", "Recording voice acting"],
        correctAnswer: "Crafting engaging player experiences through space and gameplay"
    },
    {
        id: 32,
        question: "What is 'pacing' in level design?",
        options: ["The speed at which players run", "Controlling intensity and rhythm of gameplay", "Frame rate optimization", "Audio synchronization"],
        correctAnswer: "Controlling intensity and rhythm of gameplay"
    },
    {
        id: 33,
        question: "What does a game system refer to?",
        options: ["The computer hardware", "Interconnected rules and mechanics that create gameplay", "The operating system", "Unity's file system"],
        correctAnswer: "Interconnected rules and mechanics that create gameplay"
    },
    {
        id: 34,
        question: "In level design, what is 'flow'?",
        options: ["Water physics", "Smooth player progression through the level", "Animation transitions", "Audio volume changes"],
        correctAnswer: "Smooth player progression through the level"
    },
    {
        id: 35,
        question: "What is the purpose of taking screenshots during development?",
        options: ["Only for marketing", "Documentation, debugging, and progress tracking", "Slowing down the game", "Testing audio"],
        correctAnswer: "Documentation, debugging, and progress tracking"
    },
    {
        id: 36,
        question: "What is 'environmental storytelling'?",
        options: ["Dialogue between characters", "Conveying narrative through level design and props", "Written text only", "Audio narration"],
        correctAnswer: "Conveying narrative through level design and props"
    },
    {
        id: 37,
        question: "Which principle suggests players should be taught mechanics before facing challenges?",
        options: ["Randomization", "Progressive difficulty", "Instant expert mode", "Hidden mechanics"],
        correctAnswer: "Progressive difficulty"
    },
    {
        id: 38,
        question: "What is a 'choke point' in level design?",
        options: ["A bug in the code", "A narrow passage that controls player movement and encounters", "A performance bottleneck", "An audio glitch"],
        correctAnswer: "A narrow passage that controls player movement and encounters"
    },
    {
        id: 39,
        question: "What does 'blocking out' a level mean?",
        options: ["Preventing player access", "Creating a basic layout with simple shapes before detailing", "Deleting sections", "Adding final textures"],
        correctAnswer: "Creating a basic layout with simple shapes before detailing"
    },
    {
        id: 40,
        question: "In game systems, what is 'emergence'?",
        options: ["Starting the game", "Complex behaviors arising from simple rule interactions", "Loading screens", "Tutorial sequences"],
        correctAnswer: "Complex behaviors arising from simple rule interactions"
    },

    // Week 5: Player Setup (Visual, Control, Health, Damage, Fighting)
    {
        id: 41,
        question: "What component is essential for detecting player input in Unity?",
        options: ["Renderer", "Input System or Input class", "Audio Source", "Material"],
        correctAnswer: "Input System or Input class"
    },
    {
        id: 42,
        question: "In the new Unity Input System, what is an 'Input Action'?",
        options: ["A type of GameObject", "A defined player input that can be mapped to different controls", "A rendering technique", "An audio effect"],
        correctAnswer: "A defined player input that can be mapped to different controls"
    },
    {
        id: 43,
        question: "What is typically used to represent player health in code?",
        options: ["A string variable", "A float or integer variable", "A boolean", "A Material"],
        correctAnswer: "A float or integer variable"
    },
    {
        id: 44,
        question: "When implementing player damage, what should happen when health reaches zero?",
        options: ["Nothing", "Player death or game over state", "Health increases", "Game speeds up"],
        correctAnswer: "Player death or game over state"
    },
    {
        id: 45,
        question: "What is 'invincibility frames' (i-frames) in game design?",
        options: ["Frames with no graphics", "Brief period after damage where player can't be hurt", "Performance optimization", "Animation frames"],
        correctAnswer: "Brief period after damage where player can't be hurt"
    },
    {
        id: 46,
        question: "In a 2D game, which component typically handles player movement?",
        options: ["Camera", "Rigidbody2D with script control", "Light", "Audio Source"],
        correctAnswer: "Rigidbody2D with script control"
    },
    {
        id: 47,
        question: "What is the purpose of a SpriteRenderer component?",
        options: ["Playing audio", "Displaying 2D images on GameObjects", "Detecting collisions", "Controlling physics"],
        correctAnswer: "Displaying 2D images on GameObjects"
    },
    {
        id: 48,
        question: "How would you implement player shooting mechanics?",
        options: ["Only through animation", "Instantiating projectile prefabs with velocity", "Changing colors", "Playing audio only"],
        correctAnswer: "Instantiating projectile prefabs with velocity"
    },
    {
        id: 49,
        question: "What is 'input buffering'?",
        options: ["Delaying all inputs", "Storing recent inputs to execute slightly delayed commands", "Preventing any input", "Audio synchronization"],
        correctAnswer: "Storing recent inputs to execute slightly delayed commands"
    },
    {
        id: 50,
        question: "For player backup/support mechanics, what system might you implement?",
        options: ["AI companions or power-ups", "Only visual effects", "Menu screens", "Loading screens"],
        correctAnswer: "AI companions or power-ups"
    },

    // Week 6: Cameras, Level Environment, Game Loop, UI, Audio
    {
        id: 51,
        question: "What does 'framing the action' mean in camera design?",
        options: ["Drawing borders", "Positioning the camera to best show gameplay", "Freezing the game", "Rendering optimization"],
        correctAnswer: "Positioning the camera to best show gameplay"
    },
    {
        id: 52,
        question: "What is a 'follow camera'?",
        options: ["A camera that never moves", "A camera that tracks the player's position", "A stationary security camera", "A camera that follows enemies"],
        correctAnswer: "A camera that tracks the player's position"
    },
    {
        id: 53,
        question: "In Unity UI, what is a Canvas?",
        options: ["A painting tool", "The area where UI elements are placed and rendered", "A 3D model", "An audio mixer"],
        correctAnswer: "The area where UI elements are placed and rendered"
    },
    {
        id: 54,
        question: "What is the game loop's primary function?",
        options: ["Creating graphics", "Managing game state transitions and continuous updates", "Playing audio", "Saving files"],
        correctAnswer: "Managing game state transitions and continuous updates"
    },
    {
        id: 55,
        question: "Which Unity component is used for clickable buttons in UI?",
        options: ["Collider", "Button component", "Rigidbody", "Camera"],
        correctAnswer: "Button component"
    },
    {
        id: 56,
        question: "What is the purpose of a main menu in a game?",
        options: ["Starting gameplay immediately", "Providing navigation and game options before playing", "Ending the game", "Saving progress only"],
        correctAnswer: "Providing navigation and game options before playing"
    },
    {
        id: 57,
        question: "What is 'diegetic' UI?",
        options: ["UI that exists outside the game world", "UI that exists within the game world and characters can see", "Hidden UI", "Debug UI"],
        correctAnswer: "UI that exists within the game world and characters can see"
    },
    {
        id: 58,
        question: "How can you make a camera smoothly follow a player?",
        options: ["Directly copying position every frame", "Using interpolation (Lerp) for smooth transitions", "Teleporting randomly", "Not moving it at all"],
        correctAnswer: "Using interpolation (Lerp) for smooth transitions"
    },
    {
        id: 59,
        question: "What is background music's role in game design?",
        options: ["It has no purpose", "Setting mood and enhancing player immersion", "Only for credits", "Replacing sound effects"],
        correctAnswer: "Setting mood and enhancing player immersion"
    },
    {
        id: 60,
        question: "What does 'level streaming' accomplish?",
        options: ["Broadcasting gameplay", "Loading and unloading level sections to optimize performance", "Streaming music", "Online multiplayer"],
        correctAnswer: "Loading and unloading level sections to optimize performance"
    },

    // Week 7: C# Programming Basics - Introduction, OOP, Script Anatomy
    {
        id: 61,
        question: "What programming language is primarily used in Unity?",
        options: ["Python", "C#", "Java", "JavaScript"],
        correctAnswer: "C#"
    },
    {
        id: 62,
        question: "What is Object-Oriented Programming (OOP)?",
        options: ["Programming only with objects in scenes", "A paradigm organizing code into objects with properties and methods", "A rendering technique", "A type of game design"],
        correctAnswer: "A paradigm organizing code into objects with properties and methods"
    },
    {
        id: 63,
        question: "In C#, what is a class?",
        options: ["A function", "A blueprint for creating objects", "A variable type", "A game level"],
        correctAnswer: "A blueprint for creating objects"
    },
    {
        id: 64,
        question: "What are the main components of a C# script in Unity?",
        options: ["Only variables", "Using statements, class declaration, variables, and methods", "Only functions", "Only comments"],
        correctAnswer: "Using statements, class declaration, variables, and methods"
    },
    {
        id: 65,
        question: "What does 'MonoBehaviour' mean in Unity scripts?",
        options: ["A type of camera", "The base class for Unity scripts attached to GameObjects", "A rendering setting", "An audio component"],
        correctAnswer: "The base class for Unity scripts attached to GameObjects"
    },
    {
        id: 66,
        question: "What is the purpose of the 'using' statement at the top of C# scripts?",
        options: ["Starting the game", "Importing namespaces to access their classes", "Ending the script", "Creating variables"],
        correctAnswer: "Importing namespaces to access their classes"
    },
    {
        id: 67,
        question: "What is 'encapsulation' in OOP?",
        options: ["Wrapping objects in boxes", "Bundling data and methods while hiding internal details", "Creating multiple scripts", "Deleting code"],
        correctAnswer: "Bundling data and methods while hiding internal details"
    },
    {
        id: 68,
        question: "What is inheritance in object-oriented programming?",
        options: ["Receiving money from code", "A class acquiring properties and methods from a parent class", "Copying scripts", "Deleting classes"],
        correctAnswer: "A class acquiring properties and methods from a parent class"
    },
    {
        id: 69,
        question: "What does 'polymorphism' allow in OOP?",
        options: ["Creating many files", "Objects to be treated as instances of their parent class", "Deleting objects", "Only using one class"],
        correctAnswer: "Objects to be treated as instances of their parent class"
    },
    {
        id: 70,
        question: "In a Unity C# script, what makes a method execute when the script starts?",
        options: ["Naming it Main()", "Naming it Start() or Awake()", "Naming it Begin()", "Any name works"],
        correctAnswer: "Naming it Start() or Awake()"
    },

    // C# Variables, Conditionals, Loops, Functions, Classes
    {
        id: 71,
        question: "Which is the correct way to declare an integer variable in C#?",
        options: ["integer myNum = 5;", "int myNum = 5;", "num myNum = 5;", "var myNum = '5';"],
        correctAnswer: "int myNum = 5;"
    },
    {
        id: 72,
        question: "What data type would you use to store true/false values?",
        options: ["int", "string", "bool", "float"],
        correctAnswer: "bool"
    },
    {
        id: 73,
        question: "What is the difference between 'float' and 'int'?",
        options: ["No difference", "Float stores decimal numbers, int stores whole numbers", "Float is faster", "Int is more accurate"],
        correctAnswer: "Float stores decimal numbers, int stores whole numbers"
    },
    {
        id: 74,
        question: "What does the 'if' statement do?",
        options: ["Creates loops", "Executes code conditionally based on a boolean expression", "Declares variables", "Ends the program"],
        correctAnswer: "Executes code conditionally based on a boolean expression"
    },
    {
        id: 75,
        question: "Which loop continues while a condition is true?",
        options: ["for loop", "while loop", "do-while loop", "Both while and do-while loops"],
        correctAnswer: "Both while and do-while loops"
    },
    {
        id: 76,
        question: "What is the syntax for a 'for' loop in C#?",
        options: ["for (i = 0; i < 10; i++)", "for (int i = 0; i < 10; i++)", "loop (int i = 0; i < 10)", "repeat (i = 0; i < 10)"],
        correctAnswer: "for (int i = 0; i < 10; i++)"
    },
    {
        id: 77,
        question: "What is a function (method) in C#?",
        options: ["A variable", "A reusable block of code that performs a specific task", "A class", "A loop"],
        correctAnswer: "A reusable block of code that performs a specific task"
    },
    {
        id: 78,
        question: "What does the 'return' keyword do in a function?",
        options: ["Starts the function", "Sends a value back to the caller and exits the function", "Creates a loop", "Declares a variable"],
        correctAnswer: "Sends a value back to the caller and exits the function"
    },
    {
        id: 79,
        question: "What are function parameters?",
        options: ["Return values", "Variables passed into a function for it to use", "Function names", "Loop counters"],
        correctAnswer: "Variables passed into a function for it to use"
    },
    {
        id: 80,
        question: "What is the correct way to define a public variable in C#?",
        options: ["variable int myVar;", "public int myVar;", "int public myVar;", "open int myVar;"],
        correctAnswer: "public int myVar;"
    },

    // C# within Unity
    {
        id: 81,
        question: "What is the Update() method used for in Unity?",
        options: ["Running once at start", "Running code every frame", "Updating the Unity version", "Compiling scripts"],
        correctAnswer: "Running code every frame"
    },
    {
        id: 82,
        question: "When should you use FixedUpdate() instead of Update()?",
        options: ["For UI updates", "For physics calculations", "For audio", "For graphics rendering"],
        correctAnswer: "For physics calculations"
    },
    {
        id: 83,
        question: "How do you access a component attached to the same GameObject?",
        options: ["GameObject.component", "GetComponent<ComponentType>()", "FindComponent()", "Component.Get()"],
        correctAnswer: "GetComponent<ComponentType>()"
    },
    {
        id: 84,
        question: "What does 'Time.deltaTime' represent?",
        options: ["Current game time", "Time since last frame", "Total play time", "Frame rate"],
        correctAnswer: "Time since last frame"
    },
    {
        id: 85,
        question: "Why should you multiply movement by Time.deltaTime?",
        options: ["To make it slower", "To make movement frame-rate independent", "To create animations", "To improve graphics"],
        correctAnswer: "To make movement frame-rate independent"
    },
    {
        id: 86,
        question: "How do you instantiate (create) a GameObject in Unity using C#?",
        options: ["new GameObject()", "Instantiate(prefab)", "Create.GameObject()", "GameObject.Make()"],
        correctAnswer: "Instantiate(prefab)"
    },
    {
        id: 87,
        question: "What does 'Destroy()' do in Unity?",
        options: ["Closes Unity", "Removes a GameObject or component", "Deletes a script", "Stops the game"],
        correctAnswer: "Removes a GameObject or component"
    },
    {
        id: 88,
        question: "How do you find a GameObject by name in Unity?",
        options: ["GameObject.Search(name)", "GameObject.Find(name)", "FindObject(name)", "GetGameObject(name)"],
        correctAnswer: "GameObject.Find(name)"
    },
    {
        id: 89,
        question: "What is a Coroutine in Unity?",
        options: ["A type of loop", "A function that can pause execution and resume later", "A component", "A variable type"],
        correctAnswer: "A function that can pause execution and resume later"
    },
    {
        id: 90,
        question: "How do you start a Coroutine?",
        options: ["RunCoroutine()", "StartCoroutine()", "BeginCoroutine()", "Coroutine.Start()"],
        correctAnswer: "StartCoroutine()"
    },

    // Additional Advanced Concepts
    {
        id: 91,
        question: "What is the purpose of the Awake() method in Unity?",
        options: ["Waking the computer", "Initializing before Start(), useful for references", "Running every frame", "Ending the game"],
        correctAnswer: "Initializing before Start(), useful for references"
    },
    {
        id: 92,
        question: "What is a collision in Unity?",
        options: ["A programming error", "Physical contact between GameObjects with colliders", "A rendering technique", "A script error"],
        correctAnswer: "Physical contact between GameObjects with colliders"
    },
    {
        id: 93,
        question: "Which method detects collision in Unity?",
        options: ["OnHit()", "OnCollisionEnter()", "OnTouch()", "OnContact()"],
        correctAnswer: "OnCollisionEnter()"
    },
    {
        id: 94,
        question: "What is a trigger in Unity?",
        options: ["A button press", "A collider that detects overlap without physical collision", "A timer", "An animation event"],
        correctAnswer: "A collider that detects overlap without physical collision"
    },
    {
        id: 95,
        question: "What is serialization in Unity?",
        options: ["Creating series of objects", "Converting data to a format for storage or Inspector display", "Serial communication", "Animation sequencing"],
        correctAnswer: "Converting data to a format for storage or Inspector display"
    },
    {
        id: 96,
        question: "What does the [SerializeField] attribute do?",
        options: ["Makes a field public", "Makes a private field visible in Inspector", "Hides a field", "Deletes a field"],
        correctAnswer: "Makes a private field visible in Inspector"
    },
    {
        id: 97,
        question: "What is a Vector3 in Unity?",
        options: ["A 3D model", "A structure representing 3D coordinates (x, y, z)", "A camera type", "An audio format"],
        correctAnswer: "A structure representing 3D coordinates (x, y, z)"
    },
    {
        id: 98,
        question: "How do you move a GameObject using its Transform component?",
        options: ["transform.position = newPosition", "GameObject.Move()", "SetPosition()", "transform.MoveObject()"],
        correctAnswer: "transform.position = newPosition"
    },
    {
        id: 99,
        question: "What is the difference between 'public' and 'private' variables?",
        options: ["No difference", "Public can be accessed from other classes, private cannot", "Private is faster", "Public is more secure"],
        correctAnswer: "Public can be accessed from other classes, private cannot"
    },
    {
        id: 100,
        question: "What does the 'static' keyword mean in C#?",
        options: ["The variable never changes", "The member belongs to the class itself, not instances", "The variable is slow", "The variable is private"],
        correctAnswer: "The member belongs to the class itself, not instances"
    }
];

export default questionBank;
