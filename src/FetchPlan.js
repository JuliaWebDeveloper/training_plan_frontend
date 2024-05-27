import axios from 'axios';

const getAllPlans = (setPlan) => {
    axios.get("https://training-plan-backend.onrender.com")
    .then(({data}) => {console.log(data)
    setPlan(data)})
}
const addPlan = (title, setTitle, setPlan) => {
    axios.post("https://training-plan-backend.onrender.com/saveTraining", {title})
    .then((data) => {
        console.log(data)
        setTitle("")
        getAllPlans(setPlan)
    })
}
const editPlan = (planId, title, setPlan, setTitle,setEditing) => {
    axios.post("https://training-plan-backend.onrender.com/editTraining", {_id: planId, title})
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllPlans(setPlan)

    })
}
const deletePlan = (_id, setPlan) => {
    axios.post("https://training-plan-backend.onrender.com/deleteTraining", {_id})
    .then((data) => {
        console.log(data)
        getAllPlans(setPlan)
    })
}
export {getAllPlans, addPlan, editPlan, deletePlan};
