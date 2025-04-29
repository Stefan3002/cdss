import './loading.css'
import loadingSVG from '../../assets/images/loadingSVG.svg'
const Loading = () => {
    return (
        <div className='loading'>
            <img src={loadingSVG} className='loading-icon' alt=""/>
        </div>
    )
}
export default Loading