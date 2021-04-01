const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', function() {
        if (!question.querySelector('p').classList.contains('question-p-show')) {
            removeClass();
        }
        question.querySelector('h3').classList.toggle('question-h3-bold');
        question.querySelector('p').classList.toggle('question-p-show');
        question.querySelector('img').classList.toggle('question-img-rotate');
    })
})

function removeClass () {
    questions.forEach(question => {
        question.querySelector('h3').classList.remove('question-h3-bold');
        question.querySelector('p').classList.remove('question-p-show');
        question.querySelector('img').classList.remove('question-img-rotate');
    })
}