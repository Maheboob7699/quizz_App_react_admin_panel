import axios from 'axios'
// import {put,takeLatest} from './redux-saga/effects'
import { put, takeLatest } from 'redux-saga/effects';
import { fetchQuestionRequest,fetchQuestionSuccess, fetchQuestionError } from './questionReducer';

const getRandomQuestions = (questions) => {
    let randomQuestion = [];
    let usedIndices = new Set();

    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * questions.length);

        if (usedIndices.has(randomNumber)) {
            i--; // Retry if duplicate index
        } else {
            usedIndices.add(randomNumber);

            let questandAns = {
                ques: questions[randomNumber].ques,
                options: questions[randomNumber].options,
                answer: questions[randomNumber].answer
            };
            randomQuestion.push(questandAns);
        }
    }

    return randomQuestion;
};

function* quizzQuestionSaga() {
    try {
        // loading start
        const { data } = yield axios.get('https://json-server-2-aggn.onrender.com/questions');

        if (data.length >= 10) {
            let randomQuestions = getRandomQuestions(data);
            yield put(fetchQuestionSuccess(randomQuestions)); // stop
        } else {
            yield put(fetchQuestionError("Not enough questions available"));
        }
    } catch (err) {
        yield put(fetchQuestionError(err.message));
    }
}

export  function* questionSaga(){
       yield takeLatest(fetchQuestionRequest.type,quizzQuestionSaga)
}