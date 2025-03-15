import '../assets/styles/DeleteQuestion.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import '../assets/styles/ShowQuestion.css'
import Button from '../Components/common/Button'
import { hideDeleteComponent } from '../store/questionSlice'
import { deleteQuestion ,cancelDeleteQuestionPage} from '../stores/question/questionReducer'
function DeleteQuestion() {
    //   const localQuestion = JSON.parse(localStorage.getItem('questions')) || [];
    //     const [question, setQuest] = useState(localQuestion);
    //     console.log(question);
    //     const { deleteIndex} = useSelector((state) => state.questionData);
        const dispatch = useDispatch();

    const handleCancle =()=> {
         dispatch(cancelDeleteQuestionPage());   
    }

    // const handleDelete = () => {
    //     let updateQuestion = question.filter((item,i)=>{
    //         return i !== deleteIndex
    //     })
    //     setQuestion(updateQuestion);
    //     localStorage.setItem('questions',JSON.stringify(updateQuestion));
    //     dispatch(hideDeleteComponent());  
    // }

    const handleDelete=()=>{
        console.log("dsdfsfd");
        
        dispatch(deleteQuestion())
    }
    return (
        <>
            <div className="question-delete">
                <FontAwesomeIcon icon={faXmark} className="question-delete-cancle" onClick={handleCancle} />
                <h2>Are you sure </h2>
                <div className='button-container'>
                    <Button title={"cancle"} textName={"cancle-question"} />
                    <Button title={"Delete"} textName={"delete-button"}  onClick={handleDelete} />
                </div>

            </div>
            
        </>
    )
}
export default DeleteQuestion