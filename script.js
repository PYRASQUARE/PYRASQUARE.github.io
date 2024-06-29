function showVolumeCalculator() {
    document.getElementById('volume-calculator').style.display = 'block';
    document.getElementById('area-calculator').style.display = 'none';
}

function showAreaCalculator() {
    document.getElementById('volume-calculator').style.display = 'none';
    document.getElementById('area-calculator').style.display = 'block';
}

function calculateVolume(event) {
    event.preventDefault();
    const baseArea = parseFloat(document.getElementById('base-area').value);
    const height = parseFloat(document.getElementById('height').value);
    const volume = (1 / 3) * baseArea * height;
    document.getElementById('volume-result').textContent = `Volume: ${volume} cubic units`;
}

function calculateArea(event) {
    event.preventDefault();
    const baseSide = parseFloat(document.getElementById('base-side').value);
    const slantHeight = parseFloat(document.getElementById('slant-height').value);
    const baseArea = baseSide * baseSide;
    const lateralArea = 2 * baseSide * slantHeight;
    const totalArea = baseArea + lateralArea;
    document.getElementById('area-result').textContent = `Total Area: ${totalArea} square units`;
}

function gradeQuiz(event) {
    event.preventDefault();
    const answers = Array.from(document.querySelectorAll('#quiz-form input')).map(input => input.value);
    const correctAnswers = [
        "(1/3) * base area * height",
        "Base, Apex, Height, Slant Height",
        "Tomb for Pharaoh Khufu",
        "Architectural design, symbolic art",
        "250 square units",
        "Base area determines the size of the pyramid's base, which affects the volume.",
        "Height determines how tall the pyramid is, which affects the volume."
    ];
    let score = 0;

    answers.forEach((answer, index) => {
        const questionElement = document.querySelectorAll('.quiz-question')[index];
        if (answer.toLowerCase() === correctAnswers[index].toLowerCase()) {
            questionElement.style.color = 'green';
            score++;
        } else {
            questionElement.style.color = 'red';
        }
    });

    document.getElementById('quiz-result').textContent = `You scored ${score} out of ${answers.length}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('3d-model-container');
    container.innerHTML = `
        <iframe src="https://www.tinkercad.com/embed/3OFzifqdKO9?sharecode=qLmiXmPJwxJSGnFErV91RQum9Ce8h-tgfsBssCA3z4g" width="100%" height="480" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>`;
});
