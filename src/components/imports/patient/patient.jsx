import './patient.css'
import userSVG from '../../../assets/images/userSVG.svg'
import calendarSVG from '../../../assets/images/calendarSVG.svg'
import genderSVG from '../../../assets/images/genderSVG.svg'
import {setPatient} from "../../../store/actions/patientActions.js";
import {useDispatch} from "react-redux";
const Patient = ({patient}) => {
    const familyName = patient.resource.name[0].family
    const bod = patient.resource.birthDate
    const gender = patient.resource.gender
    const givenName = patient.resource.name[0].given.join(', ')
    const dispatch = useDispatch()

    const selectPatient = () => {
        dispatch(setPatient(patient))
        window.location.href = '/'
    }

    return (
        <div onClick={selectPatient} className='patient'>
            <div className="patient-header">
                <div className="meta-data">
                    <img className='svg-icon' src={userSVG} alt=""/>
                    <p>{familyName} {givenName}</p>
                </div>
            </div>
            <div className="patient-footer">
                <div className="meta-data">
                    <img className='svg-icon' src={calendarSVG} alt=""/>
                    <p>{bod}</p>
                </div>
                <div className="meta-data">
                    <img className='svg-icon' src={genderSVG} alt=""/>
                    <p>{gender}</p>
                </div>

            </div>
        </div>
    )
}
export default Patient