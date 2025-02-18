import '../assets/styles/QuizzMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleUser,faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function QuizzMenu() {
    const [color, setColor] = useState('');
    const navigate = useNavigate();

    const handleChangeColor=(text)=>{
        console.log(text);
        setColor(text);
        navigate(`/${text}`)

    }

    return (
        <>
            <div className="quizz-menu">
                <p>Menu</p>
                <div onClick={()=>handleChangeColor("home")} style={{color: color === "home" ? "orange" :null}}>
                    <FontAwesomeIcon icon={faBars} className='icon' />
                    <p>Home</p>
                </div>
                <div onClick={()=>handleChangeColor("user")}
                 style={{color: color === "user" ? "orange" :null}}
                    >
                <FontAwesomeIcon icon={faCircleUser} className='icon'/>
                <p>User</p>
                </div>
                <div onClick={()=>handleChangeColor("quizz")} 
                 style={{color: color === "quizz" ? "orange" :null}}
                    >
                    <FontAwesomeIcon icon={faCircleQuestion} className='icon'/>
                    <p>Quizz</p>
                </div>
            </div>
        </>
    )
}
export default QuizzMenu