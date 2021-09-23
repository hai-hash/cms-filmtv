import React,{useState,useEffect} from 'react'
import {FilmTv} from './../../hander/film/film.types';
import styles from './styles.module.scss';
import { AiOutlineEdit,AiFillFileText } from 'react-icons/ai';
interface Props{
    film : FilmTv;
    changeActiveFilm: (id?:number) => void,
    changeHotFilm: (id?:number) => void,
}
export default function ItemFirm({film,changeActiveFilm,changeHotFilm}: Props){
    const [hot,setHot] = useState<boolean | undefined>(film?.hot);
    const [active,setActive] = useState<boolean | undefined>(film?.active);
    const onHot = () =>{
        setHot(!hot);
        changeHotFilm(film?.id)
    }
    const onActive = () =>{
        setActive(!active);
        changeActiveFilm(film?.id)
    }
    return (
            <tr>
                <th scope="row">{film?.id}</th>
                <td>{film?.nameFilm}</td>
                <td>{film?.createDate}</td>
                <td>Danchoi9x</td>
                <td>{film?.countView}</td>
                <td className={hot ? styles.hot : styles.nhot} onClick={onHot}>Hot</td>
                <td className={active ? styles.hot : styles.nhot} onClick={onActive}>Hoạt động</td>
                <td className={styles.action}>
                    <button className={styles.edit}><AiOutlineEdit/></button>
                    <button className={styles.detail}><AiFillFileText/></button>
                </td>
         </tr>
      
    )
}
