import { StatisticType } from "../../types/StatisticType";

import "./style.scss";


const StatisticCard = ({ info }: { info: StatisticType }) => {
    return (
        <div className="statistic">
            <p><span className="label-text">Points: </span> { info.points }</p>
            <p><span className="label-text">Место: </span> { info.place }</p>
            <p><span className="label-text">Всего убийств: </span> { info.total_kills }</p>
        </div>
    )
}


export default StatisticCard;