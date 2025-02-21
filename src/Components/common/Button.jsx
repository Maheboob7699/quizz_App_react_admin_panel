import '../../assets/styles/Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function QuizzButton({title,textName,onClick,icon}){
    return(
        <>
         <button className={textName} onClick={onClick}> {icon ? <FontAwesomeIcon icon={icon} />:null} {title}</button>
        </>
    )
}
export default QuizzButton