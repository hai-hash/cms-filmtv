import React,{useState} from 'react'
import {FilmTv} from './../../hander/film/film.types';
import styles from './styles.module.scss';
import { Episode } from '../../hander/episodes/episode.type';
import { AiOutlineEdit,AiFillFileText } from 'react-icons/ai';
interface Props{
    episode : Episode;
}
export default function ItemEpisode({episode}: Props){
    const [active,setActive] = useState<boolean | undefined>(episode?.active);
    const onActive = () =>{
        setActive(!active);
    }
    return (
            <tr>
                <th scope="row">{episode?.id}</th>
                <td>{episode?.nameEpisode}</td>
                <td>{episode?.createDate}</td>
                <td>Danchoi9x</td>
                <td>{episode?.urlVideo}</td>
                <td className={active ? styles.hot : styles.nhot} onClick={onActive}>Hoạt động</td>
                <td>{episode?.film?.nameFilm}</td>
                <td className={styles.action}>
                    <button className={styles.edit}><AiOutlineEdit/></button>
                    <button className={styles.detail}><AiFillFileText/></button>
                </td>
         </tr>
      
    )
}
