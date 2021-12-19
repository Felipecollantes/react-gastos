import { useEffect, useState } from "react"
import { Outlay } from "../../domain/models/Outlay"
import { outlayService } from "../../domain/services/Outlay.service"

type OutlayListProps = {
    onSelectOutlay: (outlay: Outlay) => void
}

export const OutlayList = ({ onSelectOutlay }: OutlayListProps) => {
    const [outlays, setOutlays] = useState<Outlay[]>([])

    useEffect(() => {
        outlayService.getOutlays().then(setOutlays)
    }, [])

    useEffect(() => {
        outlayService.addOutlay()
    }, [])

    const logOutlays = () => {
        outlayService.getOutlays().then(console.log)
    }

    return (
        <>
            <ul>
                {outlays.map((outlay) => <li key={outlay.id}>
                    <button onClick={() => { onSelectOutlay(outlay) }}>{outlay.namePerson}</button>
                </li>)}
            </ul>
            <div>
                <button onClick={logOutlays}>AÑADIR</button>
            </div>
        </>
    )
}
