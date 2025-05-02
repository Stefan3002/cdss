import './patients.css'
import useFetchHook from "../../../hooks/fetchHook.jsx";
import {useEffect, useState} from "react";
import Loading from "../../loading/loading.jsx";
import Patient from "../patient/patient.jsx";
const Patients = () => {
    const {fetchData} = useFetchHook()
    const [patients, setPatients] = useState(null)

    useEffect(() => {
        (async () => {
            const data = await fetchData(`${import.meta.env.VITE_FHIR_SERVER_URL}/Patient?_count=5`)
            setPatients(data)
        })()
    }, []);
    if(patients)
        console.log(patients.entry[0].resource.name[0].family)

    if(patients === null)
        return <Loading />
    else
        return (
            <div className='patients'>
                {patients.entry.map(patient => {
                  return <Patient patient={patient} />
                })
                }

            </div>
        )
}
export default Patients