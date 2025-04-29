import './widgets.css'
import Widget from "../widget/widget.jsx";
import {useEffect, useState} from "react";
import useFetchHook from "../../hooks/fetchHook.jsx";
import Loading from "../loading/loading.jsx";

const Widgets = () => {
    const {fetchData} = useFetchHook()
    const [data, setData] = useState(null)

    useEffect(() => {
        (async () => {
            const apiUrl = import.meta.env.VITE_API_URL;
            const widgetList = await fetchData(`${apiUrl}/api/widgets/0/2`)
            console.log(widgetList)
            setData(widgetList)
        })()
    }, []);
    if(data === null)
        return <Loading />
    else
        return (
            <div className='widgets'>
                {data.map(widget => {
                    return <Widget data={widget} />
                })}
            </div>
        )
}
export default Widgets