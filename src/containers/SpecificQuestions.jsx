import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import '../assets/styles/SpecificQuestion.css'

function SpecificQuestions() {
    const [correct, setCorrect] = useState([]);
    const [inCorrect, setInCorrect] = useState([]);
    const { user, userIndex, specificUserIndex } = useSelector((state) => state.userData);
    console.log(user[userIndex]);
    console.log(specificUserIndex);
    
    

    let username = user[userIndex].name;
    console.log(username);
    let email = user[userIndex].email;
    console.log(email);
    
    
    let specificUser = user[userIndex];
    let specificQuestion = specificUser.user[specificUserIndex].question;
    let selectedAnswer = specificUser.user[specificUserIndex].selectedAnswers;
    let sepcificUserScore = specificUser.user[specificUserIndex].score;
    
    let correctAnswers = [];
    let inCorrectAnswer = [];
    useEffect(() => {
        specificQuestion.forEach((q, i) => {
            let findCorrect = q.options.find((option) =>
                option === selectedAnswer[i]?.answer && option === q.answer
            );
            if (findCorrect) {
                console.log(findCorrect);
                correctAnswers.push(findCorrect);
            }
            else {
                inCorrectAnswer.push(selectedAnswer[i].answer);
                console.log(selectedAnswer[i].answer);

            }
        });
        setCorrect(correctAnswers);
        setInCorrect(inCorrectAnswer);
        console.log("correct answers:", correctAnswers);

    }, [specificQuestion, selectedAnswer]);
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

                    {specificQuestion.forEach((question,i)=>{
                         console.log(question);
                         
                    })}

                    {
                        specificQuestion.map((question, index) => {
                            
                            
                            return (
                                <div key={index} className="questions-container">
                                    <h2>{index + 1}. {question.ques}</h2>
                                    {question.options.map((option, i) => {
                                        return (
                                            <div key={i} style={{
                                                backgroundColor: 
                                                correct.includes(option) ? "#99FF66" :
                                                inCorrect.includes(option)  ?"#F75D59" : 
                                                inCorrect.includes(selectedAnswer[index]?.answer) && option === question.answer ? "grey" :
                                "white",
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