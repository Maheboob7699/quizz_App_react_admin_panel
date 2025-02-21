import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/ShowQuestion.css'
import { useDispatch, useSelector } from "react-redux"
import { cancleShowQuestion } from "../store/questionSlice"
function ShowQuestion() {
    const localQuestion = JSON.parse(localStorage.getItem('questions'));
    console.log(localQuestion);

    const [questions, setQuestions] = useState(localQuestion);
    const { questionIndex, questionDisplay } = useSelector((state) => state.questionData);
    const dispatch = useDispatch();
    console.log("question is", questionDisplay);
    const canclebutton=()=>{
        dispatch(cancleShowQuestion());
    }

    return (
        <>
            <div className="questions-show-container">
                <div className="questions-show">
                    <div onClick={canclebutton}>
                        <FontAwesomeIcon icon={faXmark} className="cancle-button" />
                    </div>
                       <div className="question-and-option">
                       <h2>Questions</h2>
                       <p>{questionDisplay.ques}</p>
                        {
                            questionDisplay.options.map((option,i)=>{
                                return(
                                    <div key={i}>
                                        <h3>option {i+1} </h3>
                                         <p>{option}</p>
                                        </div>
                                )
                            })
                        }
                        <h3>Correct answer</h3>
                        <p>{questionDisplay.answer}</p>
                       </div>
                </div>
            </div>
        </>
    )
}
export default ShowQuestion