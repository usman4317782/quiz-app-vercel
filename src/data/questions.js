// Sample question bank structure
// User should replace this with their 50 questions

const questionBank = [
    {
        id: 1,
        question: "What is the primary goal of Artificial Intelligence?",
        options: ["To replace human workers", "To simulate human intelligence in machines", "To create faster computers", "To develop new programming languages"],
        correctAnswer: "To simulate human intelligence in machines"
    },
    {
        id: 2,
        question: "Who is considered the father of Artificial Intelligence?",
        options: ["Alan Turing", "John McCarthy", "Marvin Minsky", "Herbert Simon"],
        correctAnswer: "John McCarthy"
    },
    {
        id: 3,
        question: "The Turing Test was proposed in which year?",
        options: ["1956", "1950", "1943", "1965"],
        correctAnswer: "1950"
    },
    {
        id: 4,
        question: "Which component of AI deals with understanding and generating human language?",
        options: ["Computer Vision", "Natural Language Processing", "Robotics", "Expert Systems"],
        correctAnswer: "Natural Language Processing"
    },
    {
        id: 5,
        question: "An agent that can perceive its environment through sensors and act upon it through actuators is called:",
        options: ["Intelligent Agent", "Passive Agent", "Static Agent", "Observer Agent"],
        correctAnswer: "Intelligent Agent"
    },
    {
        id: 6,
        question: "Which of the following is NOT a component of AI?",
        options: ["Learning", "Manual Programming", "Reasoning", "Problem Solving"],
        correctAnswer: "Manual Programming"
    },
    {
        id: 7,
        question: "The Dartmouth Conference, which marked the birth of AI as a field, was held in:",
        options: ["1950", "1943", "1956", "1960"],
        correctAnswer: "1956"
    },
    {
        id: 8,
        question: "What type of agent can operate successfully in a wide variety of environments?",
        options: ["Simple reflex agent", "Goal-based agent", "Universal agent", "Model-based reflex agent"],
        correctAnswer: "Universal agent"
    },
    {
        id: 9,
        question: "Which AI application is used to identify objects in images?",
        options: ["Speech Recognition", "Computer Vision", "Expert Systems", "Machine Translation"],
        correctAnswer: "Computer Vision"
    },
    {
        id: 10,
        question: "The measure of an agent's success in achieving its goals is called:",
        options: ["Utility function", "Performance measure", "Goal state", "Heuristic value"],
        correctAnswer: "Performance measure"
    },
    {
        id: 11,
        question: "Which search strategy expands the shallowest unexpanded node first?",
        options: ["Depth-first search", "Breadth-first search", "Uniform cost search", "Greedy search"],
        correctAnswer: "Breadth-first search"
    },
    {
        id: 12,
        question: "What is the main advantage of breadth-first search?",
        options: ["Uses less memory", "Finds optimal solution if all actions have same cost", "Faster execution time", "Works only on trees"],
        correctAnswer: "Finds optimal solution if all actions have same cost"
    },
    {
        id: 13,
        question: "Depth-first search uses which data structure?",
        options: ["Queue", "Priority Queue", "Stack", "Hash Table"],
        correctAnswer: "Stack"
    },
    {
        id: 14,
        question: "Which search algorithm is NOT an uninformed search strategy?",
        options: ["Breadth-first search", "Depth-first search", "A* search", "Uniform cost search"],
        correctAnswer: "A* search"
    },
    {
        id: 15,
        question: "The time complexity of breadth-first search is:",
        options: ["O(b^d)", "O(d)", "O(b*d)", "O(log d)"],
        correctAnswer: "O(b^d)"
    },
    {
        id: 16,
        question: "What is a major disadvantage of depth-first search?",
        options: ["High memory requirement", "May not find a solution even if one exists", "Too slow", "Cannot handle graphs"],
        correctAnswer: "May not find a solution even if one exists"
    },
    {
        id: 17,
        question: "Informed search strategies use which additional information?",
        options: ["Problem-specific knowledge", "Random values", "User preferences", "Historical data only"],
        correctAnswer: "Problem-specific knowledge"
    },
    {
        id: 18,
        question: "The evaluation function in A* search is:",
        options: ["f(n) = h(n)", "f(n) = g(n)", "f(n) = g(n) + h(n)", "f(n) = g(n) - h(n)"],
        correctAnswer: "f(n) = g(n) + h(n)"
    },
    {
        id: 19,
        question: "Greedy best-first search expands nodes based on:",
        options: ["Path cost from start", "Estimated cost to goal", "Total cost", "Random selection"],
        correctAnswer: "Estimated cost to goal"
    },
    {
        id: 20,
        question: "For A* to be optimal, the heuristic function must be:",
        options: ["Consistent", "Admissible", "Both admissible and consistent", "Neither admissible nor consistent"],
        correctAnswer: "Admissible"
    },
    {
        id: 21,
        question: "An admissible heuristic is one that:",
        options: ["Never overestimates the cost to reach the goal", "Always overestimates the cost", "Gives exact cost", "Is always zero"],
        correctAnswer: "Never overestimates the cost to reach the goal"
    },
    {
        id: 22,
        question: "Which search algorithm is complete and optimal?",
        options: ["Depth-first search", "Greedy best-first search", "A* search with admissible heuristic", "Hill climbing"],
        correctAnswer: "A* search with admissible heuristic"
    },
    {
        id: 23,
        question: "Machine Learning is a subset of:",
        options: ["Data Mining", "Statistics", "Artificial Intelligence", "Deep Learning"],
        correctAnswer: "Artificial Intelligence"
    },
    {
        id: 24,
        question: "In supervised learning, the algorithm learns from:",
        options: ["Unlabeled data", "Labeled training data", "Reinforcement signals", "Random inputs"],
        correctAnswer: "Labeled training data"
    },
    {
        id: 25,
        question: "Which of the following is an example of supervised learning?",
        options: ["K-means clustering", "Email spam classification", "Market basket analysis", "Dimensionality reduction"],
        correctAnswer: "Email spam classification"
    },
    {
        id: 26,
        question: "Unsupervised learning deals with:",
        options: ["Labeled data with known outputs", "Data without predefined labels", "Reward-based learning", "Regression problems only"],
        correctAnswer: "Data without predefined labels"
    },
    {
        id: 27,
        question: "Reinforcement learning is characterized by:",
        options: ["Learning from labeled examples", "Learning from reward and punishment", "Clustering similar items", "Finding patterns in unlabeled data"],
        correctAnswer: "Learning from reward and punishment"
    },
    {
        id: 28,
        question: "The training phase in machine learning involves:",
        options: ["Deploying the model", "Building the model using training data", "Testing the model", "Collecting new data"],
        correctAnswer: "Building the model using training data"
    },
    {
        id: 29,
        question: "Overfitting occurs when a model:",
        options: ["Performs well on training data but poorly on test data", "Performs poorly on all data", "Is too simple", "Has too few parameters"],
        correctAnswer: "Performs well on training data but poorly on test data"
    },
    {
        id: 30,
        question: "Which metric measures the proportion of correct predictions?",
        options: ["Precision", "F1-score", "Accuracy", "Recall"],
        correctAnswer: "Accuracy"
    },
    {
        id: 31,
        question: "Naïve Bayes classifier is based on:",
        options: ["Decision trees", "Bayes' theorem", "Neural networks", "Linear algebra"],
        correctAnswer: "Bayes' theorem"
    },
    {
        id: 32,
        question: "The 'naïve' assumption in Naïve Bayes refers to:",
        options: ["Simple implementation", "Independence of features", "No training required", "Binary classification only"],
        correctAnswer: "Independence of features"
    },
    {
        id: 33,
        question: "Precision is defined as:",
        options: ["True Positives / (True Positives + False Positives)", "True Positives / Total Predictions", "True Positives / (True Positives + False Negatives)", "False Positives / Total Predictions"],
        correctAnswer: "True Positives / (True Positives + False Positives)"
    },
    {
        id: 34,
        question: "Recall is also known as:",
        options: ["Specificity", "Precision", "Sensitivity", "Accuracy"],
        correctAnswer: "Sensitivity"
    },
    {
        id: 35,
        question: "The F1-score is the harmonic mean of:",
        options: ["Accuracy and Precision", "Precision and Recall", "Recall and Specificity", "Accuracy and Recall"],
        correctAnswer: "Precision and Recall"
    },
    {
        id: 36,
        question: "In a confusion matrix, false positives are also called:",
        options: ["Type I error", "Type II error", "Correct rejection", "Hit"],
        correctAnswer: "Type I error"
    },
    {
        id: 37,
        question: "Linear regression is used for:",
        options: ["Classification tasks", "Predicting continuous values", "Clustering", "Dimensionality reduction"],
        correctAnswer: "Predicting continuous values"
    },
    {
        id: 38,
        question: "The goal of linear regression is to find:",
        options: ["The best clustering", "The line of best fit", "Decision boundaries", "Maximum likelihood"],
        correctAnswer: "The line of best fit"
    },
    {
        id: 39,
        question: "Mean Squared Error (MSE) is commonly used in:",
        options: ["Classification", "Clustering", "Linear Regression", "K-means"],
        correctAnswer: "Linear Regression"
    },
    {
        id: 40,
        question: "Logistic regression is used for:",
        options: ["Predicting continuous outcomes", "Binary classification", "Clustering data", "Feature extraction"],
        correctAnswer: "Binary classification"
    },
    {
        id: 41,
        question: "The output of logistic regression is:",
        options: ["A continuous value", "A probability between 0 and 1", "A cluster label", "A discrete class"],
        correctAnswer: "A probability between 0 and 1"
    },
    {
        id: 42,
        question: "The sigmoid function is used in:",
        options: ["K-means clustering", "Linear regression", "Logistic regression", "PCA"],
        correctAnswer: "Logistic regression"
    },
    {
        id: 43,
        question: "K-means clustering is an example of:",
        options: ["Supervised learning", "Reinforcement learning", "Unsupervised learning", "Semi-supervised learning"],
        correctAnswer: "Unsupervised learning"
    },
    {
        id: 44,
        question: "In K-means clustering, 'K' represents:",
        options: ["Number of features", "Number of clusters", "Number of iterations", "Number of data points"],
        correctAnswer: "Number of clusters"
    },
    {
        id: 45,
        question: "The K-means algorithm aims to minimize:",
        options: ["Between-cluster variance", "Within-cluster variance", "Total variance", "Cross-entropy"],
        correctAnswer: "Within-cluster variance"
    },
    {
        id: 46,
        question: "Which method is used to determine the optimal number of clusters in K-means?",
        options: ["Confusion matrix", "Elbow method", "F1-score", "ROC curve"],
        correctAnswer: "Elbow method"
    },
    {
        id: 47,
        question: "What is the first step in the K-means algorithm?",
        options: ["Assign points to clusters", "Calculate distances", "Initialize K centroids randomly", "Optimize centroids"],
        correctAnswer: "Initialize K centroids randomly"
    },
    {
        id: 48,
        question: "Which AI winter occurred in the 1970s?",
        options: ["First AI winter", "Second AI winter", "Third AI winter", "No AI winter in 1970s"],
        correctAnswer: "First AI winter"
    },
    {
        id: 49,
        question: "Expert systems were popular during which AI era?",
        options: ["1950s", "1960s", "1980s", "2000s"],
        correctAnswer: "1980s"
    },
    {
        id: 50,
        question: "Which of the following is a rational agent?",
        options: ["An agent that acts randomly", "An agent that always does the right thing", "An agent that maximizes expected performance", "An agent that learns slowly"],
        correctAnswer: "An agent that maximizes expected performance"
    },
    {
        id: 51,
        question: "PEAS stands for:",
        options: ["Performance, Environment, Actuators, Sensors", "Process, Evaluation, Action, State", "Planning, Execution, Analysis, Solution", "Perception, Environment, Action, Search"],
        correctAnswer: "Performance, Environment, Actuators, Sensors"
    },
    {
        id: 52,
        question: "A fully observable environment is one where:",
        options: ["The agent can see the entire state at any time", "The agent has partial information", "The environment changes randomly", "Multiple agents exist"],
        correctAnswer: "The agent can see the entire state at any time"
    },
    {
        id: 53,
        question: "Chess is an example of which type of environment?",
        options: ["Fully observable, deterministic", "Partially observable, stochastic", "Fully observable, stochastic", "Unobservable, deterministic"],
        correctAnswer: "Fully observable, deterministic"
    },
    {
        id: 54,
        question: "Multi-agent systems involve:",
        options: ["Single agent in complex environment", "Multiple agents interacting", "No agents", "Only human agents"],
        correctAnswer: "Multiple agents interacting"
    },
    {
        id: 55,
        question: "What future challenge does AI face regarding ethics?",
        options: ["Faster processors", "Bias and fairness in algorithms", "More data storage", "Better programming languages"],
        correctAnswer: "Bias and fairness in algorithms"
    },
    {
        id: 56,
        question: "Strong AI refers to:",
        options: ["AI with high processing power", "AI with human-level consciousness", "AI for specific tasks", "AI with large datasets"],
        correctAnswer: "AI with human-level consciousness"
    },
    {
        id: 57,
        question: "Weak AI is also known as:",
        options: ["General AI", "Narrow AI", "Super AI", "Conscious AI"],
        correctAnswer: "Narrow AI"
    },
    {
        id: 58,
        question: "Which application uses AI for autonomous navigation?",
        options: ["Email filtering", "Self-driving cars", "Spam detection", "Text completion"],
        correctAnswer: "Self-driving cars"
    },
    {
        id: 59,
        question: "In problem-solving, the initial state is:",
        options: ["Where we want to reach", "Where we start", "A transition between states", "The solution path"],
        correctAnswer: "Where we start"
    },
    {
        id: 60,
        question: "A goal test determines:",
        options: ["The path to solution", "Whether a state is the goal state", "The cost of actions", "Available actions"],
        correctAnswer: "Whether a state is the goal state"
    },
    {
        id: 61,
        question: "The branching factor 'b' in search trees represents:",
        options: ["Depth of tree", "Number of successor nodes", "Number of goal states", "Path cost"],
        correctAnswer: "Number of successor nodes"
    },
    {
        id: 62,
        question: "Completeness of a search algorithm means:",
        options: ["It finds the optimal solution", "It finds a solution if one exists", "It is fast", "It uses less memory"],
        correctAnswer: "It finds a solution if one exists"
    },
    {
        id: 63,
        question: "Optimality in search algorithms refers to:",
        options: ["Speed of execution", "Finding the lowest-cost solution", "Memory efficiency", "Simplicity of implementation"],
        correctAnswer: "Finding the lowest-cost solution"
    },
    {
        id: 64,
        question: "Which search algorithm guarantees optimality?",
        options: ["Depth-first search", "Greedy best-first search", "Uniform cost search", "Depth-limited search"],
        correctAnswer: "Uniform cost search"
    },
    {
        id: 65,
        question: "The space complexity of depth-first search is:",
        options: ["O(b^d)", "O(bd)", "O(bm)", "O(d)"],
        correctAnswer: "O(bm)"
    },
    {
        id: 66,
        question: "Iterative deepening search combines benefits of:",
        options: ["BFS and greedy search", "DFS and BFS", "A* and greedy", "UCS and DFS"],
        correctAnswer: "DFS and BFS"
    },
    {
        id: 67,
        question: "Heuristic functions are used to:",
        options: ["Store data", "Estimate cost to goal", "Execute actions", "Generate random values"],
        correctAnswer: "Estimate cost to goal"
    },
    {
        id: 68,
        question: "Manhattan distance is an example of:",
        options: ["Search algorithm", "Heuristic function", "Cost function", "Goal test"],
        correctAnswer: "Heuristic function"
    },
    {
        id: 69,
        question: "In A* search, g(n) represents:",
        options: ["Heuristic estimate", "Actual cost from start to n", "Total estimated cost", "Cost to goal"],
        correctAnswer: "Actual cost from start to n"
    },
    {
        id: 70,
        question: "In A* search, h(n) represents:",
        options: ["Cost from start", "Estimated cost from n to goal", "Total path cost", "Branching factor"],
        correctAnswer: "Estimated cost from n to goal"
    },
    {
        id: 71,
        question: "Consistency in heuristics means:",
        options: ["h(n) is always zero", "h(n) ≤ c(n,a,n') + h(n')", "h(n) is always maximum", "h(n) equals g(n)"],
        correctAnswer: "h(n) ≤ c(n,a,n') + h(n')"
    },
    {
        id: 72,
        question: "Which learning type requires a teacher or supervisor?",
        options: ["Unsupervised learning", "Supervised learning", "Reinforcement learning", "Transfer learning"],
        correctAnswer: "Supervised learning"
    },
    {
        id: 73,
        question: "Classification is different from regression because:",
        options: ["Classification predicts categories", "Classification uses more data", "Classification is faster", "Classification needs no training"],
        correctAnswer: "Classification predicts categories"
    },
    {
        id: 74,
        question: "A decision tree is an example of:",
        options: ["Unsupervised algorithm", "Supervised algorithm", "Clustering algorithm", "Dimensionality reduction"],
        correctAnswer: "Supervised algorithm"
    },
    {
        id: 75,
        question: "The bias-variance tradeoff refers to:",
        options: ["Speed vs accuracy", "Simplicity vs complexity", "Error from wrong assumptions vs sensitivity to data", "Training vs testing"],
        correctAnswer: "Error from wrong assumptions vs sensitivity to data"
    },
    {
        id: 76,
        question: "Cross-validation is used to:",
        options: ["Clean data", "Assess model performance", "Increase data size", "Remove outliers"],
        correctAnswer: "Assess model performance"
    },
    {
        id: 77,
        question: "The ROC curve plots:",
        options: ["Precision vs Recall", "True Positive Rate vs False Positive Rate", "Accuracy vs Error", "Training vs Testing"],
        correctAnswer: "True Positive Rate vs False Positive Rate"
    },
    {
        id: 78,
        question: "AUC stands for:",
        options: ["Average Under Curve", "Area Under Curve", "Accuracy Under Classification", "Algorithm Under Computation"],
        correctAnswer: "Area Under Curve"
    },
    {
        id: 79,
        question: "Feature scaling is important for:",
        options: ["Decision trees", "Algorithms sensitive to magnitude", "Naïve Bayes", "Random forests"],
        correctAnswer: "Algorithms sensitive to magnitude"
    },
    {
        id: 80,
        question: "Gradient descent is used for:",
        options: ["Classification", "Optimization", "Clustering", "Feature selection"],
        correctAnswer: "Optimization"
    },
    {
        id: 81,
        question: "The learning rate in gradient descent controls:",
        options: ["Number of iterations", "Step size in parameter updates", "Number of features", "Model complexity"],
        correctAnswer: "Step size in parameter updates"
    },
    {
        id: 82,
        question: "Regularization is used to:",
        options: ["Increase model complexity", "Prevent overfitting", "Speed up training", "Add more features"],
        correctAnswer: "Prevent overfitting"
    },
    {
        id: 83,
        question: "L1 regularization is also called:",
        options: ["Ridge", "Lasso", "Elastic Net", "Dropout"],
        correctAnswer: "Lasso"
    },
    {
        id: 84,
        question: "L2 regularization is also called:",
        options: ["Lasso", "Ridge", "Elastic Net", "Dropout"],
        correctAnswer: "Ridge"
    },
    {
        id: 85,
        question: "In K-means, convergence occurs when:",
        options: ["K reaches maximum", "Centroids stop changing significantly", "All points are in one cluster", "Error is zero"],
        correctAnswer: "Centroids stop changing significantly"
    },
    {
        id: 86,
        question: "Which distance metric is commonly used in K-means?",
        options: ["Manhattan distance", "Cosine similarity", "Euclidean distance", "Hamming distance"],
        correctAnswer: "Euclidean distance"
    },
    {
        id: 87,
        question: "A limitation of K-means is:",
        options: ["Cannot handle large datasets", "Sensitive to initial centroid positions", "Only works with binary data", "Requires labeled data"],
        correctAnswer: "Sensitive to initial centroid positions"
    },
    {
        id: 88,
        question: "Silhouette score measures:",
        options: ["Classification accuracy", "Cluster quality", "Regression error", "Training speed"],
        correctAnswer: "Cluster quality"
    },
    {
        id: 89,
        question: "In Naïve Bayes, P(A|B) is calculated using:",
        options: ["P(A|B) = P(B|A) * P(A) / P(B)", "P(A|B) = P(A) + P(B)", "P(A|B) = P(A) * P(B)", "P(A|B) = P(B) - P(A)"],
        correctAnswer: "P(A|B) = P(B|A) * P(A) / P(B)"
    },
    {
        id: 90,
        question: "Zero probability problem in Naïve Bayes is solved by:",
        options: ["Removing features", "Laplace smoothing", "Adding more data", "Using different algorithm"],
        correctAnswer: "Laplace smoothing"
    },
    {
        id: 91,
        question: "The coefficient in linear regression represents:",
        options: ["Error term", "Slope of the line", "Intercept", "Data point"],
        correctAnswer: "Slope of the line"
    },
    {
        id: 92,
        question: "R-squared in regression measures:",
        options: ["Error", "Goodness of fit", "Speed", "Complexity"],
        correctAnswer: "Goodness of fit"
    },
    {
        id: 93,
        question: "In logistic regression, the decision boundary is:",
        options: ["Always linear", "Always curved", "Can be linear or non-linear depending on features", "Random"],
        correctAnswer: "Can be linear or non-linear depending on features"
    },
    {
        id: 94,
        question: "Log loss (cross-entropy) is used in:",
        options: ["K-means", "Linear regression", "Logistic regression", "PCA"],
        correctAnswer: "Logistic regression"
    },
    {
        id: 95,
        question: "The odds ratio in logistic regression is:",
        options: ["Probability of success / Probability of failure", "True Positives / False Positives", "Accuracy / Error", "Precision / Recall"],
        correctAnswer: "Probability of success / Probability of failure"
    },
    {
        id: 96,
        question: "Which agent architecture uses condition-action rules?",
        options: ["Learning agent", "Simple reflex agent", "Utility-based agent", "Goal-based agent"],
        correctAnswer: "Simple reflex agent"
    },
    {
        id: 97,
        question: "A utility-based agent makes decisions based on:",
        options: ["Rules only", "Goals only", "Maximizing utility function", "Random choice"],
        correctAnswer: "Maximizing utility function"
    },
    {
        id: 98,
        question: "Model-based agents maintain:",
        options: ["No internal state", "Internal state of the world", "Only rules", "Only goals"],
        correctAnswer: "Internal state of the world"
    },
    {
        id: 99,
        question: "Learning agents improve performance through:",
        options: ["More memory", "Experience over time", "Faster processors", "More sensors"],
        correctAnswer: "Experience over time"
    },
    {
        id: 100,
        question: "The performance element in a learning agent is responsible for:",
        options: ["Selecting actions", "Generating feedback", "Suggesting improvements", "Determining problems"],
        correctAnswer: "Selecting actions"
    }
];

export default questionBank;
