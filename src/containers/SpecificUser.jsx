import '../assets/styles/User.css'
import { useState, useEffect } from 'react';
import { handleResult } from '../stores/users/userReducer';
import { useSelector, useDispatch } from 'react-redux';
import SpecificQuestions from './SpecificQuestions';
import { fetchUserRequest } from '../stores/users/userReducer';

function SpecificUser() {
    const {user,userIndex} = useSelector((state) => state.userData);
    const dispatch = useDispatch();
    const [showQuestionPage, setShowQuestionPage] = useState(false);
    console.log(user[userIndex].user);
    

   useEffect(()=>{
    dispatch(fetchUserRequest())
   },[])

    // console.log("specific userIndex is", specificUserIndex);
    let specificUser = user[userIndex]?.user;

    const handleResultButton = (id) => {
        console.log("index is", id);
        dispatch(handleResult(id));
        setShowQuestionPage(true);
    }

    return (
        <>
           {showQuestionPage ?(<SpecificQuestions/>):(
             <div className="container">
             <table>
                 <thead>
                     <tr>
                         <th>Sr No</th>
                         <th>Name</th>
                         <th>Email Id</th>
                         <th>Scores</th>
                         <th>Actions</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         specificUser.map((specificUserData, index) => {
                             return (
                                 <tr key={index}>
                                     <td>{index + 1}</td>
                                     <td>{user[userIndex].name}</td>
                                     <td>{user[userIndex].email}</td>
                                     <td>{specificUserData.score}</td>
                                     <td><button onClick={() => handleResultButton(index)}>result</button></td>
                                 </tr>
                             )
                         })
                     }
                 </tbody>
             </table>
         </div>
           )}
        </>
    )
}

export default SpecificUser;
