import { useEffect, useState } from 'react';
import '../assets/styles/Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { showQuestion, editQuestionIndex,deleteQuestionIndex, showCreateQuestionComponent,showEditQuestionComponent } from '../store/questionSlice';
import ShowQuestion from './ShowQuestion';
import DeleteQuestion from './DeleteQuestion';
import Button from '../Components/common/Button'
import { useSelector, useDispatch } from 'react-redux';
import AddQuestion from './AddQuestion';
import EditQuestion from './EditQuestion';
import { fetchQuestionRequest,showQuestion,showAddQuestion, setDeleteIndex, setEditIndex} from '../stores/question/questionReducer';



function Question() {
    const {questions, showQuestionPage,addQuestionPage,deleteQuestionPage,deleteIndex, editIndex,editeQuestionPage} = useSelector((state)=>state.quizzQuestion);
    const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(fetchQuestionRequest())
      },[])
      console.log("deleteIndex",deleteIndex);
      console.log("editIndex",editIndex);
      
    //   const [show,setShow] = useState(false)
    // const { hideCreate, show, deleteIndex,editIndex, hideDelete,hideEdit } = useSelector((state) => state.questionData);
    // console.log(hideDelete);
    // const dispatch = useDispatch();
    // const [question, setQuestion] = useState([]);

    // useEffect(() => {
    //     const localQuestion = JSON.parse(localStorage.getItem("questions")) || [];
    //     setQuestion(localQuestion);
    // }, []);

    const handleCreate = () => {
        console.log('DKSDFKDSKD');
        dispatch(showAddQuestion())
        
        // dispatch(showCreateQuestionComponent())
    }


    const handleShow = (q) => {
        console.log(q);
        dispatch(showQuestion(q))
        
        // dispatch(showQuestion(q));
    };

    const handleEdit=(i)=>{
        console.log("eidt call",i);
        dispatch(setEditIndex(i))
    
          
    }

    const handleDelete = (index) => {
        console.log("index",index);
        dispatch(setDeleteIndex(index))
        
        // dispatch(deleteQuestionIndex(index));
    };


    return (
        <>
            <div className="question-container">
                <Button title={"Add Question"} textName={"add-question-button"} onClick={handleCreate} icon={faPlus} />
                <table>
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Questions</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((q, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{q.ques}</td>
                                <td>
                                    <button className='show-question' onClick={() => handleShow(q)}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                    <button className='show-edit' onClick={()=>handleEdit(i)}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                    <button className='show-delete' onClick={() => handleDelete(i)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            { showQuestionPage ? (<div className="show-question-wrapper">
                    <ShowQuestion />
                </div>) :null}

                {addQuestionPage ? (<div className='show-question-wrapper'>
                    <AddQuestion />
                </div>):null }

                {deleteQuestionPage ?( <div className='show-question-wrapper'>
                    <DeleteQuestion />
                </div>):null }

                {editeQuestionPage ? (  <div className='show-question-wrapper'>
              <EditQuestion/>
          </div>):null}

            {/* {show && (
                <div className="show-question-wrapper">
                    <ShowQuestion />
                </div>
            )}

            {}

            {hideDelete ? (
                <div className='show-question-wrapper'>
                    <DeleteQuestion setQuestion={setQuestion} />
                </div>
            ) : null}

            {hideCreate ? (
                <div className='show-question-wrapper'>
                    <AddQuestion setQuestion={setQuestion} question={question} />
                </div>
            ) : null}

           {hideEdit ?(
              <div className='show-question-wrapper'>
              <EditQuestion  setQuestion={setQuestion}/>
          </div>
           ):null} */}

           {/* <EditQuestion/> */}

        </>
    );
}

export default Question;
