import React, { ReactChildren,useState,useEffect } from 'react'
import LoadingOverlay from 'react-loading-overlay';
import LoadingUtils from './../../hander/loading/loadingutils';
interface Props{
    children?: any
}
export default function Loading ({children}: Props) {
    const {loading,setLoading} = LoadingUtils();
    const [active,setActive] = useState<boolean>(true);
    useEffect(() => {
        console.log("loadding đã thay đổi", loading)
        setActive(loading)
       
    }, [loading])
    const onLoading = () =>{
        setActive(false)
    }
    console.log(active);

    return (
        <div>
            <LoadingOverlay
        active={active}
        spinner
        onClick={onLoading}
        styles={{
            overlay: (base) =>({
                ...base,
                height: '100vh'
            })
        }}
        >
        {children}
        </LoadingOverlay>
        </div>
    )
}

