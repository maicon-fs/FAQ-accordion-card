window.addEventListener("click", onClick);

function onClick(e) {
    try {
        let idNumber = e.target.id.substr(1, 1);
        let targQuestion = 'q' + idNumber;
        let targAngle = 'ag' + idNumber;
        let targAnswer = 'a' + idNumber;

        toggleQuestion(targQuestion, targAngle, targAnswer);
    }catch{
        return;
    }
}

function toggleQuestion(idQuestion, idAngle, idAnswer) {
    let question = document.getElementById(idQuestion);
    let angle = document.getElementById(idAngle);
    let answer = document.getElementById(idAnswer);

    if (answer.style.display == 'inline') {
        answer.style.display = 'none';
        angle.classList.remove('fa-angle-up');
        angle.classList.add('fa-angle-down');
        question.style.fontWeight = 400;
    } else {
        answer.style.display = 'inline';
        angle.classList.remove('fa-angle-down');
        angle.classList.add('fa-angle-up');
        question.style.fontWeight = 700;
    }
}