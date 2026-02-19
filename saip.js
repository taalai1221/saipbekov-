const form = document.getElementById("surveyForm");
const answersList = document.getElementById("answersList");

// Загружаем сохраненные ответы
let answers = JSON.parse(localStorage.getItem("answers") || "[]");
displayAnswers();

form.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const color = document.getElementById("color").value;
    const music = document.getElementById("music").value;
    const comment = document.getElementById("comment").value;

    // Сохраняем новый ответ
    const newAnswer = { name, age, color, music, comment };
    answers.push(newAnswer);
    localStorage.setItem("answers", JSON.stringify(answers));

    // Показываем сообщение и обновляем список
    document.getElementById("surveyForm").reset();
    document.getElementById("surveyForm").style.display = "none";
    document.getElementById("thankyou").style.display = "block";

    displayAnswers();
});

function displayAnswers() {
    answersList.innerHTML = "";
    answers.forEach((a, index) => {
        const div = document.createElement("div");
        div.classList.add("answer-item");
        div.innerHTML = `
            <strong>#${index+1}</strong><br>
            Имя: ${a.name} <br>
            Возраст: ${a.age} <br>
            Любимый цвет: ${a.color} <br>
            Любимая музыка: ${a.music} <br>
            Комментарий: ${a.comment}
        `;
        answersList.appendChild(div);
    });
}