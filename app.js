let question = document.getElementById('question');
let option = document.getElementById('option')
let btn = document.getElementById('btn')
let quizOption = document.getElementsByName('quiz');
let container = document.getElementById('container')
let count = 0
let userAnswer;
let totalCorrectAnswer = 0
let NextQuestion = false
let quiz = [
    {
        question: 'which language most use in 2024?',
        option: ['javascript', 'java', 'C++', 'python'],
        answer: 0
    },
    {
        question: 'HTML stand for?',
        option: ['Headertext Markup Language', 'Hypertext Markup Language', 'Hyper Manaual Language', 'None of them'],
        answer: 1
    },
    {
        question: 'CSS Stand for?',
        option: ['Crop Style Sheet', 'Cascading Style Sheet', 'Capitalized Style Sheet', 'None of them'],
        answer: 1

    },

    {
        question: 'How to write if statement?',
        option: ['if i == 5 then', 'if i = 5', 'if(i == 5)', 'if i = 5'],
        answer: 2
    }
    , {
        question: 'Which of the following is a server-side Java Script object?',
        option: ['Function', 'File', 'FileUpload', 'Date'],
        answer: 1
    }
    , {
        question: 'To insert a JavaScript into an HTML page, which tag is used? ',
        option: ['&lt;script=â€™javaâ€™&gt;', '&lt;Javascript&gt;', '&lt;Script&gt;', '&lt;JS&gt;'],
        answer: 2
    }
    , {
        question: 'C-style block-level scoping is not supported in Java script?',
        option: ['False', 'True'],
        answer: 1
    }
]

question.innerHTML = `Q${count + 1} : ` + quiz[count].question

quiz[count].option.map((element, index) => {
    option.innerHTML += `
  <div id='options'>
        <li>
    <label> 
   <input name ='quiz' type ='radio' id=${'op' + index} value=${index} /> 
   ${element}
   </label>
  </li>
  </div>
   `})

count++


function next() {
    NextQuestion = false;
    for (let i = 0; i < quizOption.length; i++) {
        if (quizOption[i].checked) {

            if (quiz[count - 1].answer == Number(quizOption[i].value)) totalCorrectAnswer++

            quiz[count - 1].userAnswer = Number(quizOption[i].value)

            NextQuestion = true

            if (count < quiz.length) {
                option.innerHTML = ''
                question.innerHTML = `Q${count + 1} : ` + quiz[count].question

                quiz[count].option.map((element, index) => {

                    option.innerHTML += `
              <div id='options'>
                    <li>
                <label> 
               <input name ='quiz' type ='radio' id=${'op' + index} value=${index} /> 
               ${element}
               </label>
              </li>
              </div>
               `
                })
                count++

                if (count === quiz.length) {
                    btn.innerText = 'Done'
                    btn.addEventListener('click', () => {
                        if (NextQuestion) {
                            resultCalculate()
                            container.innerHTML = `
                            <div class="rersult-container">
                            <h2> Result</h2>
                            <div class="clearfix">
                                <div class="c100 p${resultCalculate()} small">
                                    <span>${resultCalculate()}%</span>
                                    <div class="slice">
                                        <div class="bar"></div>
                                        <div class="fill"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <p> ${totalCorrectAnswer} / ${quiz.length}</p>
                            </div>
                            
                            <button onclick='refresh()'>Again</button>
                        </div>
                    </div>
                            `
                        }
                    })
                }

            }


        }
    }
    if (!NextQuestion) {
        alert('Click any one option')
    }
}



function resultCalculate() {
    return Math.round(totalCorrectAnswer / quiz.length * 100)
}

function refresh(){
    window.location.reload()
}