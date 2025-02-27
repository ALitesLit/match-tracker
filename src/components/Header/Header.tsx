import { useDispatch, useSelector } from "react-redux";

import Update from "../Buttons/Update";
import { RootState } from "../../store/store";

import "./style.scss";
import { changeSelectedStatus } from "../../store/slices/StatusSlice";


const Header = () => {
    const { isError } = useSelector(( state: RootState ) => state.api);
    const { statusList } = useSelector(( state: RootState ) => state.status);

    const dispatch = useDispatch();

    
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value: string = event.target.value;

        dispatch(changeSelectedStatus( value == "null" ? null : value ));
    }


    return (
        <header>
            <div className="left-content">
                <h1>Match Tracker</h1>

                <select name="statuses" id="" onChange={handleSelect} className="statuses">
                    <option value="null">Все статусы</option>
                    
                    {
                        statusList.length && statusList.map(
                            (i, index) => <option key={index} value={i}>{i}</option>
                        )
                    }
                </select>
            </div>

            <div className="update_content">
                { isError && 
                    <div className="error">
                        <span />
                        Ошибка: не удалось загрузить информацию
                    </div>
                }

                <Update />
            </div>
        </header>
    )
}


export default Header;