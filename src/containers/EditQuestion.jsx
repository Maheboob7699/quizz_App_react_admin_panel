import '../assets/styles/EditQuestion.css';
import Button from '../Components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { hideEditQuestionComponent } from '../store/questionSlice';
import { cancelEditQuestionPage,updateEditQuestion } from '../stores/question/questionReducer';

function EditQuestion() {
    const { questions, editIndex } = useSelector((state) => state.quizzQuestion);
    console.log(questions);
    
    const dispatch = useDispatch();

    // Initial State
    const initialState = {
        ques: '',
        options: ['', '', '', ''],
        answer: '',
    };

    const [editInput, setEditInput] = useState(initialState);

    useEffect(() => {
        if (editIndex !== null && questions[editIndex]) {
            setEditInput(questions[editIndex]);
        }
    }, [editIndex, questions]);

    const handleEditChange = (e, index = null) => {
        const { name, value } = e.target;
    
        setEditInput(prev => {
            if (name === "options") {
                return {
                    ...prev,
                    options: prev.options.map((opt, i) => (i === index ? value : opt))
                };
            } else {
               return { ...prev, [name]: value };
            }
        });

        console.log(editInput);
        
    };

    const handleEdit = () => {
 console.log(editInput);
 dispatch(updateEditQuestion(editInput))
 
    };

    const handleCancel = () => {
        dispatch(cancelEditQuestionPage());
    };

    return (
        <>
            <h2>Edit Question Page</h2>
            <div className="edit-question">
                <div className="questions-container">
                    <FontAwesomeIcon icon={faXmark} className="edit-question-cancel" onClick={handleCancel} />

                    <div className="question-set">
                        <label>Question:</label>
                        <textarea
                            name="ques"
                            value={editInput.ques}
                            onChange={handleEditChange}
                        />

                        {editInput.options.map((option, index) => (
                            <div key={index}>
                                <label>Option {index + 1}:</label>
                                <input
                                    type="text"
                                    name="options"
                                    value={option}
                                    onChange={(e) => handleEditChange(e, index)}
                                />
                            </div>
                        ))}

                        <div>
                            <label>Select correct answer:</label>
                            <select
                                name="answer"
                                value={editInput.answer}
                                onChange={handleEditChange}
                            >
                                {editInput.options.map((option, index) => (
                                    <option key={index} value={option}>
                                        Option {index + 1}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <Button title="Edit" textName="edit-button" onClick={handleEdit} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditQuestion;
