import './body.css'
import Widget from "../../widget/widget.jsx";
import Widgets from "../../widgets/widgets.jsx";
import Aside from "../aside/aside.jsx";
import {useSelector} from "react-redux";
import {getPatient} from "../../../store/selectors/patientSelectors.js";
const Body = () => {

    const patient = useSelector(getPatient)
    console.log('aa', patient)
    return (
        <section className='body'>
            <Aside />
            <Widgets />
        </section>
    )
}
export default Body