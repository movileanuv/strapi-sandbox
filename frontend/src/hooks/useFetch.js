import { useState, useEffect } from "react"

function useFetch(uri) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(uri)
                const json = await res.json()
                setData(json.data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()
    }, [uri])

    return {loading, error, data}
}

export default useFetch
