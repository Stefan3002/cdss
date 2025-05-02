import './widget.css'
import calendarSVG from '../../assets/images/calendarSVG.svg'
import downloadsSVG from '../../assets/images/downloadSVG.svg'
import Divider from "../divider/divider.jsx";
import Button from "../button/button.jsx";
const Widget = ({data}) => {
    const {name, description, publishDate, downloads} = data

    const customizeWidget = () => {

    }

    return (
        <section className='widget module'>
            <div className="widget-header">
                <p className="widget-name">{name}</p>
                <div className="widget-buttons">
                    <Button clickHandler={customizeWidget} text='Customize & Download' />
                </div>
                <Divider />
            </div>
            <div className="widget-content">
                <p className="widget-description">{description}</p>
            </div>
            <section className="widget-footer">
                <div className="meta-data">
                    <img src={calendarSVG} alt="" className="svg-icon"/>
                    <p>{publishDate}</p>
                </div>
                <div className="meta-data">
                    <img src={downloadsSVG} alt="" className="svg-icon"/>
                    <p>{downloads}</p>
                </div>
            </section>

        </section>
    )
}
export default Widget