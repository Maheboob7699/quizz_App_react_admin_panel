import { useEffect, useState } from 'react';
import '../assets/styles/User.css';
import { handleTest } from  '../stores/users/userReducer'
import { useSelector, useDispatch } from 'react-redux';
import SpecificUser from './SpecificUser';
import { fetchUserRequest } from '../stores/users/userReducer';
function User() {
    const [userShow, setUserShow] = useState(true);
    const {user} = useSelector((state)=>state.userData);
    const dispatch = useDispatch();
    console.log("user is",user);

    useEffect(()=>{
        dispatch(fetchUserRequest())
    },[])
  
    const handleTestButton = (index) => {
        dispatch(handleTest(index));
        setUserShow(false);
    }

    return (
        <>
            {userShow ?
                (
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
                                    user.map((userData, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{userData.name}</td>
                                                <td>{userData.email}</td>
                                                <td>{userData.score}</td>
                                                <td><button onClick={() => handleTestButton(index)}>tests</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (<SpecificUser />)}
        </>
    )
}
export default User