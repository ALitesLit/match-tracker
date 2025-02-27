import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import { RootState } from "../../store/store";
import { changeError, changeReloading } from "../../store/slices/ApiSlice";
import { fetchData } from "../../service/service";
import TableRow from "../../components/TableRow/TableRow";
import { getStatusList } from "../../shared/StatusService";
import { changeStatusList } from "../../store/slices/StatusSlice";

import "./style.scss";


const Main = () => {
    const [matchList, setMatchList]: [object[], Function] = useState([]);

    const { isReloading } = useSelector(( state: RootState ) => state.api);
    const { selectStatus } = useSelector((state: RootState) => state.status);

    const dispatch = useDispatch();


    const fetchMatches = useCallback(
        async () => {
            try {
                const data = await fetchData();
                
                setMatchList(
                    selectStatus ? data?.matches?.filter(
                        (i: any) => i.status === selectStatus
                    ) : data?.matches
                );

                dispatch(changeStatusList(getStatusList(data.matches)));
                dispatch(changeError(false));
            } catch (e) {
                dispatch(changeError(true));
            } finally {
                dispatch(changeReloading(false));
            }
        }, [ selectStatus, matchList ]
    );


    useEffect(
        () => {
            fetchMatches();
        }, [ isReloading, selectStatus ]
    );

    
    return (
        <>
            <Header />

            <main>
                {
                    matchList.length && (
                        matchList.map(
                            ( i, index ) => <TableRow key={index} card={i} />
                        )
                    )
                }
            </main>
        </>
    )
}


export default Main;