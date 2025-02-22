import '../assets/styles/EditQuestion.css';
import Button from '../Components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { hideEditQuestionComponent } from '../store/questionSlice';

function EditQuestion({ setQuestion }) {
    const localQuestion = JSON.parse(localStorage.getItem("questions")) || [];
    const { editIndex } = useSelector((state) => state.questionData);
    const dispatch = useDispatch();
    const [questions, setEditQuestions] = useState(localQuestion);

    useEffect(() => {
        setEditQuestions(localQuestion);
    }, [editIndex]);

    const handleEditChange = (e, index = null) => {
        const { name, value } = e.target;

        setEditQuestions((prev) =>
            prev.map((question, i) =>
                i === editIndex
                    ? {
                        ...question,
                        [name]: name === "options"
                            ? question.options.map((opt, optIndex) => (optIndex === index ? value : opt))
                            : value,
                    }
                    : question
            )
        );
    };

 
    const handleEdit = () => {
        localStorage.setItem("questions", JSON.stringify(questions));
        setQuestion(questions); 
        alert("Question updated successfully!"); 
        dispatch(hideEditQuestionComponent()); 
    };

    return (
        <div className="edit-question">
            <div className="questions-container">
                <FontAwesomeIcon icon={faXmark} className="edit-question-cancel" onClick={() => dispatch(hideEditQuestionComponent())} />

                <div className="question-set">
                    <label>Question:</label>
                    <textarea 
                        name="ques" 
                        value={questions[editIndex]?.ques || ""} 
                        onChange={handleEditChange}
                    />

                    {questions[editIndex]?.options?.map((option, index) => (
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
                            value={questions[editIndex]?.answer || ""} 
                            onChange={handleEditChange}
                        >
                            {questions[editIndex]?.options?.map((option, index) => (
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
    );
}

export default EditQuestion;
