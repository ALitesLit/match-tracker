import { useState } from "react";

import { getStatusColor } from "../../shared/StatusService";
import useMediaQuery from "../../shared/useMediaQuery";
import PlayerCard from "../PlayerCard/PlayerCard";
import StatisticCard from "../StatisticCard/StatisticCard";

import "./style.scss";


const TableRow = ({ card }: { card: any }) => {
    const [ activeInfo, setInfoActive ]: [ activeInfo: boolean, setInfoActive: Function ] = useState(false);

    const matches = useMediaQuery("(max-width: 768px)");


    return (
        <div className="table__row">
            <div className="table__row-content">
                <div className="name-team">
                    <span className="icon" />
                    <p>{card?.awayTeam?.name}</p>
                </div>

                <div className="table__row-score">
                    <p>{card?.awayScore} : {card?.homeScore}</p>

                    <div className="status" style={{
                        backgroundColor: getStatusColor(card?.status)
                    }}>{ card?.status }</div>
                </div>

                <div className="name-team">
                    <p>{card?.homeTeam?.name}</p>
                    <span className="icon" />

                    {
                        !matches && (
                            <button className="table__row-show-btn" onClick={() => setInfoActive(!activeInfo)} style={{
                                rotate: `${activeInfo ? "180deg" : "0deg"}`
                            }} />
                        )
                    }
                </div>
            </div>

            <div className="btn-center">
                {
                    matches && (
                        <button className="table__row-show-btn" onClick={() => setInfoActive(!activeInfo)} style={{
                            rotate: `${activeInfo ? "180deg" : "0deg"}`
                        }} />
                    )
                }
            </div>

            <div className="table__row-info" style={{
                display: `${activeInfo ? "flex" : "none"}`
            }}>
                <div className="table__row-info-content">
                    {
                        card?.awayTeam?.players.map(
                            ( i: any, index: number ) => <PlayerCard card={i} key={index} />
                        )
                    }

                    <StatisticCard info={{
                        place: card?.awayTeam?.place,
                        points: card?.awayTeam?.points,
                        total_kills: card?.awayTeam?.total_kills
                    }} />
                </div>


                <div className="vs">
                    <p>VS</p>
                </div>

                <div className="table__row-info-content">
                    {
                        card?.homeTeam?.players.map(
                            ( i: any, index: number ) => <PlayerCard card={i} key={index} />
                        )
                    }
                    
                    <StatisticCard info={{
                        place: card?.awayTeam?.place,
                        points: card?.awayTeam?.points,
                        total_kills: card?.awayTeam?.total_kills
                    }} />
                </div>
            </div>
        </div>
    )
}


export default TableRow;