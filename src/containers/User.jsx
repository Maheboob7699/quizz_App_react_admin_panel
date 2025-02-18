import { useState } from 'react';
import '../assets/styles/User.css';
import { handleTest } from '../store/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import SpecificUser from './SpecificUser';
function User() {
    const [userShow, setUserShow] = useState(true);
    const { user,userIndex } = useSelector((state) => state.usersData);
    const dispatch = useDispatch();

    
    console.log("userindex", userIndex);
    console.log(user);
  
    const handleTestButton = (index) => {
        dispatch(handleTest(index));
        console.log(user[index].user);
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