import { useEffect, useContext } from 'react';
import Cards from '../Component/Cards';
import useStore from '../_redux/Slice';
import * as actions from '../_redux/Action'
import { DrwaerContext } from '../Component/Drawer'
export default function MainPage() {
    const { examples, setExample } = useStore();
    const { expand } = useContext(DrwaerContext);
    const Api = {
        getExampleData: () => {
            actions.getExampleData(setExample)
        }
    }
    useEffect(() => {
        return (() => Api.getExampleData())
    }, [])

    return (
        <div className='row'>
            {
                examples.map((data, index) =>
                    <div className={`col-${expand ? 6 : 4} p-3`} key={index}> <Cards data={data} /></div>
                )
            }
        </div>
    )
}