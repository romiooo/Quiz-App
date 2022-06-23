const QuestionList = [
    {
        question: "Which of the following is the correct name of React.js?",
        answersList:[
            {answer: "React", isCorrect: false },
            {answer: "React.js", isCorrect: false },
            {answer: "ReactJS", isCorrect: false },
            {answer: "All of the above", isCorrect: true },
        ],
    },
    {
        question: "Which of the following are the advantages of React.js?",
        answersList:[
            {answer: "React.js can increase the application's performance with Virtual DOM.", isCorrect: false },
            {answer: "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.", isCorrect: false },
            {answer: "React.js can render both on client and server side.", isCorrect: false },
            {answer: "All of the above", isCorrect: true },
        ],
    },
    {
        question: "Which of the following is not a disadvantage of React.js?",
        answersList:[
            {answer: "React.js has only a view layer. We have put your code for Ajax requests, events and so on.", isCorrect: false },
            {answer: "The library of React.js is pretty large.", isCorrect: false },
            {answer: "The JSX in React.js makes code easy to read and write.", isCorrect: true },
            {answer: "The learning curve can be steep in React.js.", isCorrect: false },
        ],
    },
    {
        question: "Which of the following command is used to install create-react-app?",
        answersList:[
            {answer: "npm install -g create-react-app", isCorrect: true },
            {answer: "npm install create-react-app", isCorrect: false },
            {answer: "npm install -f create-react-app", isCorrect: false },
            {answer: "install -g create-react-app", isCorrect: false },
        ],
    },
    {
        question: "What of the following is used in React.js to increase performance?",
        answersList:[
            {answer: "Original DOM", isCorrect: false },
            {answer: "Virtual DOM", isCorrect: true },
            {answer: "Both A and B.", isCorrect: false },
            {answer: "None of the above.", isCorrect: false },
        ],
    },
    {
        question: "A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
        answersList:[
            {answer: "Constructor", isCorrect: false },
            {answer: "Class", isCorrect: true },
            {answer: "Object", isCorrect: false },
            {answer: "DataObject", isCorrect: false },
        ],
    },
    {
        question: "Which of the following acts as the input of a class-based component?",
        answersList:[
            {answer: "Class", isCorrect: false },
            {answer: "Factory", isCorrect: false },
            {answer: "Render", isCorrect: false },
            {answer: "Props", isCorrect: true },
        ],
    },
];

export default QuestionList;