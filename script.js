const quizzData = [{
        question: 'Who is Prophet Muhammad (PBUH)?',
        a: 'Prophet Muhammad (PBUH) is the founder of a new religion',
        b: 'Prophet Muhammad (PBUH) was a commander of the army',
        c: 'Prophet Muhammad (PBUH) was the King of Arabia',
        d: 'Prophet Muhammad (PBUH) is the last Messenger of Allah',
        correct: 'd',
    },
    {
        question: 'Who was the first Caliph after the death of Prophet Muhammad (PBUH)?',
        a: 'Ali Bin Abu Talib (May Allah be pleased with him)',
        b: 'Uthman Bin Affan (May Allah be pleased with him)',
        c: 'Umar Bin Al-Khattab (May Allah be pleased with him)',
        d: 'Abu Bakr (May Allah be pleased with him)',
        correct: 'd',
    },
    {
        question: 'What does the Quran mention about the use of force to spread the religion?',
        a: 'Quran says “..Let there be no compulsion in religion..” (Quran 2:256)',
        b: 'Quran authorizes use of force for spreading the religion',
        c: 'There is no mention in the Quran about the spreading the religion',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 'When did Islam come into existence?',
        a: 'Islam came into existence after the birth of Prophet Muhammad (PBUH)',
        b: 'Islam came into existence only a few centuries ago',
        c: 'Islam has been the religion of all the Prophets, from Prophet Adam (PBUH) till Prophet Muhammad (PBUH)',
        d: 'Islam does not exist at all',
        correct: 'c',
    },
    {
        question: 'What does the religion of Islam preach?',
        a: 'Islam does not preach anything',
        b: 'Islam preaches the oneness of God, and that there is no God except Allah',
        c: 'Islam preaches that there are many Gods',
        d: 'Islam preaches Idolatry',
        correct: 'c',
    },
    {
        question: 'What was the first article of the constitution laid down by the Prophet Muhammad (PBUH) for the inhabitants of Madinah?',
        a: 'All were considered members and citizens of Medina society regardless of religion, race, or ancestry',
        b: 'Muslims were given shelter in Madinah',
        c: 'Other societies were asked to leave Madinah',
        d: 'There was no constitution laid',
        correct: 'a',
    },
    {
        question: 'According to Islam, which scripture was revealed to Prophet Moses (PBUH)?',
        a: 'Zabur (Psalms) was revealed to Prophet Moses (PBUH)',
        b: 'Torah (Old Testament) was revealed to Prophet Moses (PBUH)',
        c: 'Ingeel (Gospel) was revealed en to Prophet Moses (PBUH)',
        d: 'No scripture was revealed to Prophet Moses (PBUH)',
        correct: 'b',
    },
    {
        question: 'What is the calendar which Muslims use?',
        a: 'Gregorian Calendar',
        b: 'Roman Calendar',
        c: 'Hijrah',
        d: 'Persian Calendar',
        correct: 'c',
    },
    {
        question: 'Which verse best describes the religious harmony, religious freedom and religious tolerance of Islam in the Holy Quran?',
        a: 'There is no religious harmony in Islam',
        b: 'Drive away non-Muslims',
        c: '“..To you be your religion, to me be mine.” (Quran 109:6)',
        d: 'None of the above',
        correct: 'c',
    },
    {
        question: 'What is the meaning of Islam?',
        a: 'Islam means peace acquired by submitting your will to Allah, the Exalted',
        b: 'Islam means a new religion',
        c: 'Islam means a religion only for Arabs',
        d: 'There is no meaning of Islam',
        correct: '',
    },
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');

let currentQuizz = 0;
let score = 0;
let answer = undefined;

loadQuizz();

function loadQuizz() {
    const currentQuizzData = quizzData[currentQuizz];
    questionEl.innerText = currentQuizzData.question;
    a_text.innerText = currentQuizzData.a;
    b_text.innerText = currentQuizzData.b;
    c_text.innerText = currentQuizzData.c;
    d_text.innerText = currentQuizzData.d;
}

function getSelected() {
    const answerEls = document.querySelectorAll('.answer');
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitButton.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer);
    if (answer) {
        currentQuizz++;
        if (currentQuizz < quizzData.length) {
            loadQuizz();
        } else {
            alert('all done here...congrats!')
        }
    }
});