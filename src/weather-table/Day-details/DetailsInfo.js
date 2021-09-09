import "./DetailsInfo.css"

function DetailsInfo(){
    return (
        <div className="ditails__info">
            <div className="info__temp">Температура, &deg;</div>
            <div className="info__temp-fils">Відчувається як</div>
            <div>Вологість, %</div>
            <div>Вітер, м/сек</div>
            <div>Ймовірність опадів, %</div>
        </div>
    )

}
export default DetailsInfo;