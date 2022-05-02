import { useEffect, useState } from "react"

const useCustomHook = () => {
    const [equipments, setEquipments] = useState([]);


    useEffect(() => {
        fetch('equipments.json')
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, [])

    return [equipments, setEquipments]
}


export default useCustomHook;