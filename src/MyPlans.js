import {AiFillEdit, AiFillDelete} from "react-icons/ai";

export const MyPlans = ({text, updatingInInput, deletePlan}) => {
return (
    <div>
        <p>{text}</p>
        <AiFillEdit onClick = {updatingInInput}></AiFillEdit>
        <AiFillDelete onClick = {deletePlan}></AiFillDelete>
    </div>
)
}