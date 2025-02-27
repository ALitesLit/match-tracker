import { useDispatch, useSelector } from "react-redux";

import "./buttons.scss";

import { RootState } from "../../store/store";
import { changeReloading } from "../../store/slices/ApiSlice";


const Update = () => {
    const { isReloading } = useSelector((state: RootState) => state.api);

    const dispatch = useDispatch();


    const handleUpdate = () => {
        dispatch(changeReloading(true));
    }


    return (
        <>
            <button className="update button" onClick={handleUpdate}>Обновить { isReloading && <span className="loading" /> }</button>
        </>
    )
}


export default Update;