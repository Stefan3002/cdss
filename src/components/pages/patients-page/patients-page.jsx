import './patients-page.css'
import {useEffect, useState} from "react";
import useFetchHook from "../../../hooks/fetchHook.jsx";
import Loading from "../../loading/loading.jsx";
import Patients from "../../imports/patients/patients.jsx";
const PatientsPage = () => {

    return(
        <div className='patients-page'>
            <h1>Select Patient</h1>
            <Patients />
        </div>
    )
}
export default PatientsPage