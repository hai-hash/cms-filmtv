import React,{useState} from 'react'
import { Table } from 'reactstrap';
import styles from './styles.module.scss';
import {typeEpisode} from './../../hander/episodes/episode.type';
import EpisodesDisplay from './../episodes/episodes.display';
import EpisodesAdd from './episodes.add';
export default function Episodes(){
    const [status,setStatus] = useState<typeEpisode>(typeEpisode.display);
    const genData = () =>{
        switch (status) {
            case typeEpisode.display:
                return  <EpisodesDisplay/>
            case typeEpisode.add:
                return <EpisodesAdd/>
        
            default:
                return  <EpisodesDisplay/>
        }
    }
    const onAdd = () =>{
        if(status === typeEpisode.display)
        setStatus(typeEpisode.add)
        else  setStatus(typeEpisode.display)
    }
    return (
        <div>
             <div className={styles.url}>
               <div className={styles.url_left}>
                   <span>/Firm</span>
                   <h5>Film</h5>
               </div>
               <div className={styles.url_right}>
                   <button onClick={onAdd}>Thêm Tập</button>
               </div>
           </div>
             {genData()}
        </div>
    )
}

