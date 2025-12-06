// Sample question bank structure
// User should replace this with their 50 questions

const questionBank = [
    {
        id: 1,
        question: "According to the segmenting principle, how should complex multimedia content be presented?",
        options: ["All at once for efficiency", "In learner-controlled segments", "Only through text", "With background music"],
        correctAnswer: "In learner-controlled segments"
    },
    {
        id: 2,
        question: "What is the primary benefit of applying the pre-training principle?",
        options: ["Reduces file size", "Familiarizes learners with key concepts before main lesson", "Increases animation speed", "Eliminates need for audio"],
        correctAnswer: "Familiarizes learners with key concepts before main lesson"
    },
    {
        id: 3,
        question: "The modality principle suggests combining:",
        options: ["Text with more text", "Graphics with narration rather than on-screen text", "Multiple videos simultaneously", "Audio with audio"],
        correctAnswer: "Graphics with narration rather than on-screen text"
    },
    {
        id: 4,
        question: "Which principle involves using conversational style rather than formal language?",
        options: ["Modality principle", "Segmenting principle", "Personalization principle", "Pre-training principle"],
        correctAnswer: "Personalization principle"
    },
    {
        id: 5,
        question: "The voice principle recommends using:",
        options: ["Computer-generated voice only", "Human voice rather than machine voice", "Multiple voices simultaneously", "No voice at all"],
        correctAnswer: "Human voice rather than machine voice"
    },
    {
        id: 6,
        question: "Breaking a 10-minute tutorial into five 2-minute segments applies which principle?",
        options: ["Voice principle", "Segmenting principle", "Personalization principle", "Modality principle"],
        correctAnswer: "Segmenting principle"
    },
    {
        id: 7,
        question: "Pre-training is most useful when learners:",
        options: ["Are already experts", "Need to learn component names and characteristics first", "Prefer reading only", "Dislike multimedia"],
        correctAnswer: "Need to learn component names and characteristics first"
    },
    {
        id: 8,
        question: "Which combination violates the modality principle?",
        options: ["Animation with narration", "Diagram with spoken explanation", "Animation with identical on-screen text", "Video with audio"],
        correctAnswer: "Animation with identical on-screen text"
    },
    {
        id: 9,
        question: "Using 'you' and 'your' in instructional content applies:",
        options: ["The segmenting principle", "The personalization principle", "The modality principle", "The voice principle"],
        correctAnswer: "The personalization principle"
    },
    {
        id: 10,
        question: "What does the voice principle specifically address?",
        options: ["Volume levels", "The quality and type of narration voice", "Number of speakers", "Background noise"],
        correctAnswer: "The quality and type of narration voice"
    },
    {
        id: 11,
        question: "Essential processing refers to:",
        options: ["Unnecessary decorative elements", "Cognitive processing required to understand the material", "File compression", "Audio editing"],
        correctAnswer: "Cognitive processing required to understand the material"
    },
    {
        id: 12,
        question: "Which is an example of applying the segmenting principle?",
        options: ["Adding background music", "Providing pause buttons between sections", "Using formal language", "Removing all images"],
        correctAnswer: "Providing pause buttons between sections"
    },
    {
        id: 13,
        question: "Pre-training should occur:",
        options: ["After the main lesson", "During the assessment", "Before presenting complex material", "Never in multimedia"],
        correctAnswer: "Before presenting complex material"
    },
    {
        id: 14,
        question: "The modality principle helps reduce:",
        options: ["Processing time", "Visual channel overload", "Audio quality", "Interactivity"],
        correctAnswer: "Visual channel overload"
    },
    {
        id: 15,
        question: "Personalization in multimedia production increases:",
        options: ["File size only", "Learner engagement and social presence", "Production costs exclusively", "Technical complexity only"],
        correctAnswer: "Learner engagement and social presence"
    },
    {
        id: 16,
        question: "A human voice is preferred over machine voice because it:",
        options: ["Is always louder", "Creates social presence and engagement", "Costs less", "Requires no editing"],
        correctAnswer: "Creates social presence and engagement"
    },
    {
        id: 17,
        question: "Which statement best describes generative processing?",
        options: ["Creating decorative graphics", "Cognitive effort to make sense of material", "Automatic file generation", "Random content creation"],
        correctAnswer: "Cognitive effort to make sense of material"
    },
    {
        id: 18,
        question: "Segmenting helps learners by:",
        options: ["Eliminating all breaks", "Allowing time to mentally process information", "Speeding up playback", "Removing audio"],
        correctAnswer: "Allowing time to mentally process information"
    },
    {
        id: 19,
        question: "Pre-training lessons should focus on:",
        options: ["Complex problem-solving immediately", "Key terms and basic concepts", "Final assessments", "Decorative elements"],
        correctAnswer: "Key terms and basic concepts"
    },
    {
        id: 20,
        question: "Presenting text on screen while identical narration plays violates:",
        options: ["The personalization principle", "The voice principle", "The modality principle", "The segmenting principle"],
        correctAnswer: "The modality principle"
    },
    {
        id: 21,
        question: "Using phrases like 'Let's explore together' exemplifies:",
        options: ["Formal academic writing", "The personalization principle", "Technical documentation", "The modality principle"],
        correctAnswer: "The personalization principle"
    },
    {
        id: 22,
        question: "The voice principle research shows learners perform better with:",
        options: ["Robotic monotone voices", "Native-accented human voices", "Multiple overlapping voices", "Silent presentations"],
        correctAnswer: "Native-accented human voices"
    },
    {
        id: 23,
        question: "Which technique manages essential processing effectively?",
        options: ["Adding more information simultaneously", "Chunking content into manageable segments", "Using only text", "Eliminating all multimedia"],
        correctAnswer: "Chunking content into manageable segments"
    },
    {
        id: 24,
        question: "Pre-training is part of managing:",
        options: ["Extraneous processing", "Essential processing", "Budget constraints", "Color schemes"],
        correctAnswer: "Essential processing"
    },
    {
        id: 25,
        question: "The modality principle is based on:",
        options: ["Aesthetic preferences", "Dual-channel processing theory", "File format compatibility", "Internet speed"],
        correctAnswer: "Dual-channel processing theory"
    },
    {
        id: 26,
        question: "Fostering generative processing means:",
        options: ["Preventing deep thinking", "Encouraging meaningful cognitive engagement", "Using automatic generation tools", "Avoiding interaction"],
        correctAnswer: "Encouraging meaningful cognitive engagement"
    },
    {
        id: 27,
        question: "Which is NOT a benefit of the segmenting principle?",
        options: ["Learner control over pacing", "Reduced cognitive overload", "Time for mental processing", "Faster completion time"],
        correctAnswer: "Faster completion time"
    },
    {
        id: 28,
        question: "In pre-training, you should introduce:",
        options: ["All content simultaneously", "Vocabulary and component relationships", "Only final conclusions", "Unrelated topics"],
        correctAnswer: "Vocabulary and component relationships"
    },
    {
        id: 29,
        question: "Narration is preferred over on-screen text because:",
        options: ["It's cheaper to produce", "It allows visual channel to process graphics", "It requires no script", "It's easier to update"],
        correctAnswer: "It allows visual channel to process graphics"
    },
    {
        id: 30,
        question: "The personalization principle suggests narration should sound:",
        options: ["Like a formal lecture", "Conversational and friendly", "Authoritative and distant", "Robotic and precise"],
        correctAnswer: "Conversational and friendly"
    },
    {
        id: 31,
        question: "Research on the voice principle indicates that learners prefer:",
        options: ["Any accent regardless of comprehension", "Voices they can easily understand", "Multiple voices speaking simultaneously", "Computer-synthesized speech"],
        correctAnswer: "Voices they can easily understand"
    },
    {
        id: 32,
        question: "Which scenario best applies the segmenting principle?",
        options: ["A 30-minute uninterrupted video lecture", "Short lessons with continue buttons", "Scrolling text without breaks", "Simultaneous multiple animations"],
        correctAnswer: "Short lessons with continue buttons"
    },
    {
        id: 33,
        question: "Pre-training helps manage essential processing by:",
        options: ["Eliminating the need for the main lesson", "Reducing cognitive load during complex instruction", "Replacing all multimedia elements", "Testing prior knowledge only"],
        correctAnswer: "Reducing cognitive load during complex instruction"
    },
    {
        id: 34,
        question: "Combining graphics with spoken text rather than printed text is called:",
        options: ["The redundancy effect", "The modality effect", "The coherence effect", "The signaling effect"],
        correctAnswer: "The modality effect"
    },
    {
        id: 35,
        question: "Personalization fosters generative processing by:",
        options: ["Making content more formal", "Creating social partnership with learner", "Reducing content depth", "Eliminating interaction"],
        correctAnswer: "Creating social partnership with learner"
    },
    {
        id: 36,
        question: "Using a friendly human voice instead of a computer voice applies:",
        options: ["Both voice and personalization principles", "Neither principle", "Only the modality principle", "Only the segmenting principle"],
        correctAnswer: "Both voice and personalization principles"
    },
    {
        id: 37,
        question: "The main goal of segmenting is to:",
        options: ["Make videos shorter", "Prevent cognitive overload from continuous information", "Reduce production time", "Eliminate narration"],
        correctAnswer: "Prevent cognitive overload from continuous information"
    },
    {
        id: 38,
        question: "A pre-training module should be presented:",
        options: ["After assessment", "Before the main learning content", "During breaks only", "As optional material"],
        correctAnswer: "Before the main learning content"
    },
    {
        id: 39,
        question: "The modality principle works because it:",
        options: ["Eliminates all text", "Distributes processing across visual and auditory channels", "Focuses only on audio", "Removes all graphics"],
        correctAnswer: "Distributes processing across visual and auditory channels"
    },
    {
        id: 40,
        question: "Which phrase demonstrates personalization?",
        options: ["The student will learn", "One should understand", "You will discover", "It is important to note"],
        correctAnswer: "You will discover"
    },
    {
        id: 41,
        question: "The voice principle is violated when:",
        options: ["Using expressive human narration", "Using high-quality machine-generated voice", "Using multiple human narrators", "Using clear professional voice"],
        correctAnswer: "Using high-quality machine-generated voice"
    },
    {
        id: 42,
        question: "Effective segmenting in a simulation includes:",
        options: ["No pauses between steps", "User-controlled progression through stages", "Automatic rapid advancement", "Single continuous playback"],
        correctAnswer: "User-controlled progression through stages"
    },
    {
        id: 43,
        question: "Pre-training is most effective for:",
        options: ["Novice learners facing complex material", "Experts needing quick review", "Simple, familiar content", "Entertainment purposes"],
        correctAnswer: "Novice learners facing complex material"
    },
    {
        id: 44,
        question: "According to the modality principle, complex diagrams should be explained:",
        options: ["Only with on-screen text", "With spoken narration", "Without any explanation", "With printed handouts only"],
        correctAnswer: "With spoken narration"
    },
    {
        id: 45,
        question: "Personalization affects learning by:",
        options: ["Decreasing engagement", "Activating social and motivational processes", "Increasing formal distance", "Removing all context"],
        correctAnswer: "Activating social and motivational processes"
    },
    {
        id: 46,
        question: "The voice principle suggests that learner performance improves with:",
        options: ["Text-to-speech synthesis", "Authentic human narration", "No audio at all", "Background music only"],
        correctAnswer: "Authentic human narration"
    },
    {
        id: 47,
        question: "When should you NOT segment content?",
        options: ["When content is highly complex", "When material is simple and brief", "When learners are novices", "When teaching procedures"],
        correctAnswer: "When material is simple and brief"
    },
    {
        id: 48,
        question: "What should pre-training NOT include?",
        options: ["Key terminology", "Definitions of components", "Complete problem solutions and complex applications", "Basic characteristics"],
        correctAnswer: "Complete problem solutions and complex applications"
    },
    {
        id: 49,
        question: "The modality principle primarily aims to:",
        options: ["Increase entertainment value", "Optimize working memory capacity", "Reduce production costs", "Eliminate printed materials"],
        correctAnswer: "Optimize working memory capacity"
    },
    {
        id: 50,
        question: "Which combination best fosters generative processing?",
        options: ["Formal voice with dense text", "Personalized conversational narration with human voice", "Machine voice with technical jargon", "Silent animations with no guidance"],
        correctAnswer: "Personalized conversational narration with human voice"
    }
];

export default questionBank;
