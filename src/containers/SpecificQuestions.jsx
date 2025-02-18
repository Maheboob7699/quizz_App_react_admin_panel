import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function SpecificQuestions() {
    const [correct, setCorrect] = useState([]);
    const [inCorrect, setInCorrect] = useState([]);
    const {user, userIndex, specificUserIndex } = useSelector((state) => state.usersData);

    console.log("user is", user[userIndex]);
    let specificUser = user[userIndex].user;
    let selctedAnswer = specificUser[specificUserIndex].selected;
    console.log(selctedAnswer);
    let specificQuestion = specificUser[specificUserIndex].questions;
    console.log(specificQuestion);

    let correctAnswers = [];
    let inCorrectAnswer=[];
    useEffect(() => {
        specificQuestion.forEach((q, i) => {
            let findCorrect = q.options.find((option) =>
                option === selctedAnswer[i]?.answer && option === q.answer
            );
            if (findCorrect) {
                console.log(findCorrect);
                correctAnswers.push(findCorrect);
            }
            else{
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
            <div>
                {
                    specificQuestion.map((question, index) => {
                        return (
                            <div key={index}>
                                <p>{question.ques}</p>

                                {question.options.map((option, i) => {
                                    return (
                                <div  key={i} style={{
                                backgroundColor: correct.includes(option) ? "green" : inCorrect.includes(option)? "red":null,
                                }}>
                                            <button >{option}</button>
                                        </div>
                                    )
                                })}

                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}
export default SpecificQuestions;