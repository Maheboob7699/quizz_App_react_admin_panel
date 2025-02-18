import '../assets/styles/User.css'
import { useState, useEffect } from 'react';
import { handleResult } from '../store/userSlice';
import { useSelector, useDispatch } from 'react-redux';

function SpecificUser() {
    const {user, userIndex, specificUserIndex } = useSelector((state) => state.usersData);
    const dispatch = useDispatch();

    useEffect(() => {}, [specificUserIndex]);

    console.log("specific userIndex is", specificUserIndex);
    let specificUser = user[userIndex]?.user;

    const handleResultButton = (id) => {
        console.log("index is", id);
        dispatch(handleResult(id));
    }

    return (
        <>
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
        </>
    )
}

export default SpecificUser;
