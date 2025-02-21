import '../assets/styles/AddQuestion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import Button from '../Components/common/Button'
import { hideCreateQuestionComponent } from '../store/questionSlice'
import { useDispatch } from 'react-redux'

function AddQuestion({setQuestion,question}) {
    let initalState = {
        ques: '',
        options: ['', '', '', ''] ,
        answer :'',
    }

    const [input, setInput] = useState(initalState);
    const dispatch = useDispatch();
    useEffect(()=>{
    },[input])


    const handleOnChange = (e, index = null) => {
        const { name, value } = e.target;

        if (name === "ques") {
            setInput(prevState => ({
                ...prevState,
                ques: value,
            }));
        } 
        else if(name === "answer"){
            setInput(prevstate => ({
                ...prevstate,
                answer:value
            }))
        }
        else {
            setInput(prevState => ({
                ...prevState,
                options: prevState.options.map((opt, i) => (i === index ? value : opt))
            }));
        }
    };
    console.log(input);

 
    const handelAddQuestion = () => {
    
            const updatedQuestions = [...question, input]; 
           setQuestion(updatedQuestions)
            localStorage.setItem("questions", JSON.stringify(updatedQuestions));
        setInput(initalState);
        dispatch(hideCreateQuestionComponent());
    };
    

    const cancleCreateQuestion=()=>{
        dispatch(hideCreateQuestionComponent())
    }
   
    

    return (
        <>
            <div className="add-question">
                <div className='questions-container'>
                    <div>
                        <FontAwesomeIcon icon={faXmark} className="add-question-cancle" onClick= {cancleCreateQuestion}/>
                    </div>

                    <div className='question-set'>
                        Questions :
                        <textarea name="ques" value={input.ques} onChange={handleOnChange}></textarea>

                        <div>
                            option 1
                            <br />
                            <input type="text" name='options' value={input.options[0]} onChange={(e) => handleOnChange(e, 0)} />
                        </div>
                        <div>
                            option 2
                            <br />
                            <input type="text" name='options' value={input.options[1]} onChange={(e) => handleOnChange(e, 1)} />
                        </div>
                        <div>
                            option 3
                            <br />
                            <input type="text" name='options' value={input.options[2]} onChange={(e) => handleOnChange(e, 2)} />
                        </div>
                        <div>
                            option 4
                            <br />
                            <input type="text" name='options' value={input.options[3]} onChange={(e) => handleOnChange(e, 3)} />
                        </div>

                        <div>
                            select correct answer :
                            <br />
                            <select name="answer"value={input.answer} onChange={handleOnChange}>
                                <option value="All">All</option>
                                <option value="option 1">option 1</option>
                                <option value="option 2">option 2</option>
                                <option value="option 3">option 3</option>
                                <option value="option 4">option 4</option>
                            </select>
                        </div>
                       <Button title={"Add"} textName={"add-button"} onClick={handelAddQuestion}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddQuestion;
