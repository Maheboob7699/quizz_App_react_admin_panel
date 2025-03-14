import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/ShowQuestion.css'
import { useDispatch, useSelector } from "react-redux"
import { cancelShowQuestionPage } from "../stores/question/questionReducer"

function ShowQuestion() {
    const {showQuestion,} =useSelector((state)=>state.quizzQuestion);
    const dispatch = useDispatch();
    console.log(showQuestion);

    const canclebutton=()=>{
       dispatch(cancelShowQuestionPage())
    }

    return (
        <>
         <h1>show question </h1>
            <div className="questions-show-container">
                <div className="questions-show">
                    <div onClick={canclebutton}>
                        <FontAwesomeIcon icon={faXmark} className="cancle-button" />
                    </div>
                       <div className="question-and-option">
                       <h2>Questions</h2>
                       <p>{showQuestion.ques}</p>
                        {
                            showQuestion.options.map((option,i)=>{
                                return(
                                    <div key={i}>
                                        <h3>option {i+1} </h3>
                                         <p>{option}</p>
                                        </div>
                                )
                            })
                        }
                        <h3>correct answer :</h3>
                        <p>{showQuestion.answer}</p>
                       </div>
                </div>
            </div>
        </>
    )
}
export default ShowQuestion