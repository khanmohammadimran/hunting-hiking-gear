import { useEffect, useState } from "react"

const useCustomHook = () => {
    const [equipments, setEquipments] = useState([]);


    useEffect(() => {
        fetch('https://hiking-equipment-outdoor-gear.web.app/equipment')
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, [])

    return [equipments, setEquipments]
}


export default useCustomHook;