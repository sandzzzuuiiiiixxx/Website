document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;
    let correctAnswers = ['a', 'a']; // Correct answers for questions

    let userAnswers = [
        document.querySelector('input[name="q1"]:checked')?.value,
        document.querySelector('input[name="q2"]:checked')?.value
    ];

    // Calculate score
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });

    // Display score and answers
    document.getElementById('score').textContent = `${score}/${correctAnswers.length}`;
    
    let explanations = [
        "1. Correct answer: <script src='script.js'></script> - This is the correct syntax to include an external script in HTML.",
        "2. Correct answer: function myFunction() - This is the correct syntax for defining a function in JavaScript."
    ];

    let answerList = document.getElementById('answer-explanations');
    explanations.forEach(explanation => {
        let li = document.createElement('li');
        li.textContent = explanation;
        answerList.appendChild(li);
    });
});