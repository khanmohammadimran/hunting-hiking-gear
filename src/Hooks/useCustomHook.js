import { useEffect, useState } from "react"

const useCustomHook = () => {
    const [equipments, setEquipments] = useState([]);


    useEffect(() => {
        fetch('https://murmuring-harbor-91585.herokuapp.com/equipment')
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, [])

    return [equipments, setEquipments]
}


export default useCustomHook;