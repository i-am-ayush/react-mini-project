import { useEffect, useState } from "react"
// Our 2nd custom hook to check whether we are offline or online
const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true)
        }
        const handleOffline = () => {
            setIsOnline(false)
        }
        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)
        // It will unmount when this other components load instead of that..
        // Its always better to remove listners when we go out of that component
        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }
    }, [])

    return isOnline
}

export default useOnline
