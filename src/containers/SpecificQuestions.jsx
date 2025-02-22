import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import '../assets/styles/SpecificQuestion.css'

function SpecificQuestions() {
    const [correct, setCorrect] = useState([]);
    const [inCorrect, setInCorrect] = useState([]);
    const { user, userIndex, specificUserIndex } = useSelector((state) => state.usersData);

    console.log("user is", user[userIndex]);
    let specificUser = user[userIndex].user;
    console.log("specific user", user[userIndex].name);

    let username = user[userIndex].name;
    let email = user[userIndex].email;
    let sepcificUserScore = specificUser[specificUserIndex].score;
    console.log("score", sepcificUserScore);

    let selctedAnswer = specificUser[specificUserIndex].selected;
    console.log(selctedAnswer);
    let specificQuestion = specificUser[specificUserIndex].questions;
    console.log(specificQuestion);

    let correctAnswers = [];
    let inCorrectAnswer = [];
    useEffect(() => {
        specificQuestion.forEach((q, i) => {
            let findCorrect = q.options.find((option) =>
                option === selctedAnswer[i]?.answer && option === q.answer
            );
            if (findCorrect) {
                console.log(findCorrect);
                correctAnswers.push(findCorrect);
            }
            else {
                inCorrectAnswer.push(selctedAnswer[i].answer);
                console.log(selctedAnswer[i].answer);

            }
        });
        setCorrect(correctAnswers);
        setInCorrect(inCorrectAnswer);
        console.log("correct answers:", correctAnswers);

    }, [specificQuestion, selctedAnswer]);
    console.log("final correct answers:", correct);
    console.log("incorrect answer is", inCorrect);


    return (
        <>
            <div className="questions">
                <div className="user-detail">
                    <div className="user-data">
                        <h3>{username}</h3>  <h3>{email}</h3>
                    </div>
                    <div className="score">
                        <h3> score: {sepcificUserScore}</h3>
                    </div>
                </div>
                <div>

                    {
                        specificQuestion.map((question, index) => {
                            return (
                                <div key={index} className="questions-container">
                                    <h2>{index + 1}. {question.ques}</h2>
                                    {question.options.map((option, i) => {
                                        return (
                                            <div key={i} style={{
                                                backgroundColor: correct.includes(option) ? "#99FF66" : inCorrect.includes(option) ? "#F75D59" : null,
                                            }}>
                                                <button>{option}</button>
                                            </div>
                                        )
                                    })}

                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
export default SpecificQuestions;