import '../assets/styles/QuizzNavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,  faCircleUser } from '@fortawesome/free-solid-svg-icons'

function QuizzNavbar() {
    return (
        <>
            <div className="admin-navbar">
                <div >
                    <div className="techpatshala-img">
                        <img src="src/assets/images/techpatshala.svg" alt="" />
                    </div>
                    <div className="side-bar">
                        <FontAwesomeIcon icon={faBars} />
                       
                    </div>
                </div>

                <div className="admin-section">
                    <p>admin</p>
                    <div className="admin-logout">
                    <FontAwesomeIcon icon={ faCircleUser} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default QuizzNavbar