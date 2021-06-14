import React from 'react'
import styleLoading from './LoadingComponent.module.css';
import { useSelector } from 'react-redux';
import loadingGif from '../../../assets/imgLoading/loading.gif';

export default function LoadingComponent() {

    const { isLoading } = useSelector(state => state.LoadingReducer)

    if (isLoading) {
        return (
            <div className={styleLoading.bgLoading}>
                <img src={loadingGif} alt='loading.gif'/>
            </div>
        )
    } else {
        return ''
    }
}
