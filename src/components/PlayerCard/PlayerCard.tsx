const PlayerCard = ({ card }: { card: any }) => {
    return (
        <div className="player__card">
            <p><span className="player-frame" />{ card?.username }</p>

            <p><span className="label-text">Убийств:</span> { card?.kills }</p>
        </div>
    )
}


export default PlayerCard;