# Secure Quiz Application

A complete, production-ready React.js quiz application with advanced security features and localStorage-based data persistence.

## 🎯 Features

### Quiz Functionality
- **50 Multiple-Choice Questions** - Fully customizable question bank
- **Randomized Questions** - Questions shuffled on every page load
- **Shuffled Options** - Answer options randomized for each question
- **Progress Tracking** - Real-time progress indicator and question counter
- **Auto-Save** - Answers automatically saved to localStorage
- **Navigation** - Next/Previous buttons to move between questions
- **Results Screen** - Detailed score breakdown with percentage
- **Review Wrong Answers** - See all incorrect answers with correct solutions
- **Pass/Fail Status** - Automatic grading (≥60% = PASS)

### 🔒 Security Features (Front-End)

#### Anti-Screenshot Protection
- PrintScreen key detection and blocking
- Keyboard shortcut prevention (Ctrl+C, Ctrl+U, Ctrl+S, Cmd+Shift+3/4/5)
- Copy/paste/cut disabled
- Visual warning on screenshot attempts

#### Anti-Tab Switching
- Detects when user switches tabs or minimizes window
- **3-strike system** - Quiz automatically resets after 3 violations
- Real-time violation counter with warnings
- Automatic page reload on limit reached

#### Developer Tools Detection
- F12 and Ctrl+Shift+I blocked
- Window size change detection
- Console detection attempts
- Warning messages when DevTools detected

#### General Protection
- Right-click context menu disabled
- Text selection prevented
- All keyboard shortcuts blocked

### 💾 Data Management
All data stored in browser's localStorage:
- User answers
- Quiz progress
- Quiz results
- Violation count
- Shuffled question order

## 📁 Project Structure

```
quiz-app-vercel/
├── src/
│   ├── components/
│   │   ├── StartScreen.jsx    # Welcome screen with instructions
│   │   ├── Quiz.jsx            # Main quiz interface
│   │   ├── Result.jsx          # Results display
│   │   └── Review.jsx          # Wrong answers review
│   ├── data/
│   │   └── questions.js        # Question bank (customize with your 50 questions)
│   ├── utils/
│   │   ├── security.js         # All security features
│   │   ├── storage.js          # localStorage management
│   │   └── helpers.js          # Utility functions (shuffle, calculate score)
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Component styles
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── package.json
├── vite.config.js
└── index.html
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Questions**
   - Open `src/data/questions.js`
   - Replace the sample questions with your 50 questions
   - Follow this format:
   ```javascript
   {
     id: 1,
     question: "Your question here?",
     options: ["Option A", "Option B", "Option C", "Option D"],
     correctAnswer: "Option A"  // Must match one of the options exactly
   }
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   - Open your browser to `http://localhost:5173`

4. **Build for Production**
   ```bash
   npm run build
   ```
   - Production files will be in the `dist/` folder

## 📝 How to Use

1. **Start Screen**
   - Read the instructions and security warnings
   - Click "Start Quiz" to begin

2. **Taking the Quiz**
   - Read each question carefully
   - Select one answer from the four options
   - Use "Next" and "Previous" buttons to navigate
   - Your answers are automatically saved
   - Click "Submit Quiz" on the last question

3. **View Results**
   - See your score, percentage, and pass/fail status
   - Click "Review Wrong Answers" to see mistakes
   - Click "Restart Quiz" to try again

4. **Review Wrong Answers**
   - See each question you got wrong
   - Compare your answer with the correct answer
   - Click "Back to Results" to return

## ⚠️ Important Notes

### Security Limitations
- **Front-end security is NOT foolproof** - Determined users can bypass these measures
- For true security, implement backend validation and proctoring
- These features provide deterrence, not absolute prevention

### Quiz Reset Triggers
The quiz will automatically reset if:
- User switches tabs 3 or more times
- User minimizes browser 3 or more times
- User refreshes the page during quiz
- DevTools opening is detected (limited detection)

### Browser Compatibility
- Works best in modern browsers (Chrome, Firefox, Edge, Safari)
- Some security features may have limited effectiveness in certain browsers
- Mobile browsers may have reduced security feature support

## 🎨 Customization

### Styling
- Edit `src/App.css` for component styles
- Edit `src/index.css` for global styles
- CSS variables defined in `index.css` for easy theming

### Passing Score
- Default: 60%
- Change in `src/utils/helpers.js` → `getPassStatus()` function

### Violation Limit
- Default: 3 tab switches
- Change in `src/utils/security.js` → `detectTabSwitch()` function

### Question Count
- Add as many questions as needed in `src/data/questions.js`
- The app automatically adapts to any number of questions

## 🛠️ Tech Stack

- **React 18.3** - UI library
- **Vite 5.4** - Build tool and dev server
- **Vanilla CSS** - Styling (no frameworks)
- **LocalStorage API** - Data persistence
- **Browser Security APIs** - Anti-cheat features

## 📦 Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "@vitejs/plugin-react": "^4.3.4",
  "vite": "^5.4.11"
}
```

## 🔧 Troubleshooting

### Quiz keeps resetting
- Check if you're switching tabs too frequently
- Disable browser extensions that might trigger visibility changes
- Ensure you're not minimizing the window

### Security warnings appearing
- This is normal - the app is detecting potential violations
- Stay on the quiz tab and don't use keyboard shortcuts
- Close developer tools if open

### Questions not shuffling
- Clear browser localStorage
- Hard refresh the page (Ctrl+Shift+R)
- Check browser console for errors

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Development

### File Structure Explained

- **components/** - React components for each screen
- **data/** - Question bank (customize this!)
- **utils/** - Helper functions and utilities
  - `security.js` - All anti-cheat logic
  - `storage.js` - localStorage CRUD operations
  - `helpers.js` - Shuffle and score calculation

### Adding New Features

1. Security features → Edit `src/utils/security.js`
2. Storage logic → Edit `src/utils/storage.js`
3. UI components → Edit files in `src/components/`
4. Styling → Edit `src/App.css` or `src/index.css`

## 🎓 Educational Use

This application is designed for:
- Online assessments
- Practice quizzes
- Educational testing
- Knowledge evaluation

**Note:** For high-stakes exams, implement additional backend security measures.

---

**Built with ❤️ using React and Vite**
