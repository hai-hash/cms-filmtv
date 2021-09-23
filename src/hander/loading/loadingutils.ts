
import React,{useState,useEffect} from 'react'
interface UtilsLoading{
    loading: boolean
    setLoading: (loading: boolean) => void
}
export default function LoadingUtils (): UtilsLoading{
    const [loading,setLoading] = useState<boolean>(true);
    return {
        loading,
        setLoading,
    }
}


