import './body.css'
import Widget from "../../widget/widget.jsx";
import Widgets from "../../widgets/widgets.jsx";
import Aside from "../aside/aside.jsx";
const Body = () => {



    return (
        <section className='body'>
            <Aside />
            <Widgets />
        </section>
    )
}
export default Body