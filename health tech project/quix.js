const quizData = [
    {
        question: "How are you feeling today?",
        a: "Sad",
        b: "Depressed",
        c: "Motivated",
        d: "Calm",
        e: "Happy",
        f: "Enthusiastic",
        correct: "d"
    },
    {
        question: "What would you like to work on today?",
        a: "Social Skills",
        b: "Concentration",
        c: "Motivation",
        d: "Self care",
        f: "Relationships",
        g: "Feelings",
        correct: "b"
    },
    {
        question: "What is the reason you are feeling this way?",
        a: "Friends",
        b: "Family",
        c: "Work",
        d: "Hobbies",
        e: "School",
        f: "Others",
        correct: "a"
    },
    {
        question: "How do you want to feel today?",
        a: "Happy",
        b: "Motivated",
        c: "Enthusiastic",
        d: "Inspired",
        e: "Satisfied",
        f: "Confident",
        correct: "b"
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const f_text = document.getElementById('f_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
    f_text.innerText = currentQuizData.f
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Thank you for taking the quiz!</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})