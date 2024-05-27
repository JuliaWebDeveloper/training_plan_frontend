import axios from 'axios';

const getAllPlans = (setPlan) => {
    axios.get("http://localhost:4040")
    .then(({data}) => {console.log(data)
    setPlan(data)})
}
const addPlan = (title, setTitle, setPlan) => {
    axios.post("http://localhost:4040/saveTraining", {title})
    .then((data) => {
        console.log(data)
        setTitle("")
        getAllPlans(setPlan)
    })
}
const editPlan = (planId, title, setPlan, setTitle,setEditing) => {
    axios.post("http://localhost:4040/editTraining", {_id: planId, title})
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllPlans(setPlan)

    })
}
const deletePlan = (_id, setPlan) => {
    axios.post("http://localhost:4040/deleteTraining", {_id})
    .then((data) => {
        console.log(data)
        getAllPlans(setPlan)
    })
}
export {getAllPlans, addPlan, editPlan, deletePlan};