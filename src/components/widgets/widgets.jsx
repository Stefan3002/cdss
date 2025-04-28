import './widgets.css'
import Widget from "../widget/widget.jsx";
const Widgets = () => {
    const data = [
        {
            name: 'Widget 1',
            description: 'This is the first widget',
            publishDate: '2023-10-01',
            downloads: 100
        },
        {
            name: 'Widget 2',
            description: 'This is the second widget',
            publishDate: '2023-10-01',
            downloads: 100
        },
        {
            name: 'Widget 3',
            description: 'This is the third widget',
            publishDate: '2023-10-01',
            downloads: 100
        }
    ]
    return (
        <div className='widgets'>
            {data.map(widget => {
                return <Widget data={widget} />
            })}
        </div>
    )
}
export default Widgets