import { useState, useEffect } from "react";
import { MyPlans } from "../MyPlans";
import { getAllPlans, addPlan, editPlan, deletePlan } from "../FetchPlan";
import { AiFillEdit } from "react-icons/ai";
import './style.css';


function Plan() {

    const [ plan, setPlan ] = useState([]);
    const [ title, setTitle ] = useState("");
    const [ editing, setEditing ] = useState(false);
    const [ planId, setPlanId ] = useState("");


    useEffect(() => {
        getAllPlans(setPlan)
    },[])

    const updatingInInput = (_id, title) => {
        setEditing(true)
        setTitle(title)
        setPlanId(_id)
    }


    return (
      <div className='container'>
        <h1>Ваш персональный план тренировки</h1>
        <div className="container-inline">
        <input
        type = "text"
        placeholder = "Название упражнения"
        value = {title}
        onChange = {(e) => setTitle(e.target.value)}/>
        <button
        disabled = {!title}
        onClick =
        {editing ? () => editPlan(planId, title, setPlan, setTitle, setEditing) : () => addPlan(title, setTitle, setPlan)}>
          {editing ? <AiFillEdit></AiFillEdit> : "+"}
          </button>
        </div>
        <div className="container-list">
        {plan.map((training) => <MyPlans text = {training.title} key = {training._id}
        updatingInInput = {() => updatingInInput(training._id, training.title)}
        deletePlan = {() => deletePlan(training._id, setPlan)}
        />
        )}
        </div>
       
      </div>
    );
  }
  
  export default Plan;