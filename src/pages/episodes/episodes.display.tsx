import React,{useEffect} from 'react'
import { Table } from 'reactstrap';
import styles from './styles.module.scss';
import { Episode } from '../../hander/episodes/episode.type';
import ItemEpisode from './ItemEpisode';
import EpisodeUtils from './../../hander/episodes/episode.utils';
export default function EpisodesDisplay (){
    const { getAllEpisodes,data} =  EpisodeUtils();
    useEffect(() => {
        getAllEpisodes();
    }, [])
    const Dispplay = (data : Episode[]) =>{
        let result = null;
        if(data.length > 0){
            result = data.map((episode,index) =>{
                return <ItemEpisode key={index} episode = {episode}/>
            })
        }
        return result;
    }
    return (
        <div className={styles.table}>
                    <Table striped>
                            <thead>
                                <tr>
                                <th>Stt</th>
                                <th>Name</th>
                                <th>Ngày Tạo</th>
                                <th>Người Tạo</th>
                                <th>url</th>
                                <th>Active</th>
                                <th>Phim</th>
                                <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                            {Dispplay(data)}
                            </tbody>
                </Table>
           </div>
    )
}
