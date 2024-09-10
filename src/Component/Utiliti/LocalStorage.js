import { json } from "react-router-dom"

const getstorJobApplication = () => {
    const beforAdd = localStorage.getItem('id-addesAllredy')
    if (beforAdd) {
        return JSON.parse(beforAdd)
    }
    return []
}
const savejobapplication = (id) => {
    const storjobapplication = getstorJobApplication();
    const findDouble = storjobapplication.find(jobid => jobid === id)
    if (!findDouble) {
        storjobapplication.push(id)
        localStorage.setItem('id-addesAllredy', JSON.stringify(storjobapplication))
    }

}
export { getstorJobApplication, savejobapplication }