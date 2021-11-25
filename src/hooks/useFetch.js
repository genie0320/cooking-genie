// lecture48 ~ 52, 87, 88
import { useEffect, useState } from "react"

export const useFetch = (url, method = "GET") => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [opt, setOpt] = useState(null)

    const postData = (postData) => {
        setOpt({
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })
    }
    useEffect(() => {
        const controller = new AbortController()

        // .then을 사용해서 구현할 수도 있다. 다만 await를 쓸 수 없을 뿐.
        const fetchData = async (fetchOpt) => {
            setIsPending(true)

            try {
                const res = await fetch(url, { ...fetchOpt, signal: controller.signal }) // signal = posting 할 데이터. post method를 사용하기 위해선... 두번째 옵션이 필요함

                if (!res.ok) {
                    throw new Error(res.statusText)
                }

                const json = await res.json()

                setData(json)
                setError(null)
                setIsPending(false)
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log('the fetch was aborted')
                } else {
                    setIsPending(false)
                    setError('No fetch Data')
                    console.log(error.message)
                }
            }
        }

        if (method === "GET") {
            fetchData()
        }
        if (method === "POST" && opt) {
            fetchData(opt)
        }


        return () => {
            controller.abort()
        }

    }, [url, opt, method])

    return { data, isPending, error, postData }
}