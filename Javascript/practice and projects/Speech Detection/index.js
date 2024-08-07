const startBtn = document.getElementById("microBtn");
const textArea = document.getElementById("textCopy");

const copyBtn = document.getElementById("copyButton");
const clearBtn = document.getElementById("clearButton");

startBtn.addEventListener('click', function () {
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

        textArea.innerHTML = transcript;

        console.log(transcript);
    });

    if (speech == true) {
        recognition.start();
    }
});




copyBtn.onclick = function () {
    const textToCopy = textArea.value;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Text copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
};

clearBtn.onclick = function () {
    textArea.innerText = '';
};
