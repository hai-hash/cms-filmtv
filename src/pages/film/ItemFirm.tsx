import React from 'react'
import {FilmTv} from './../../hander/film/film.types';
import styles from './styles.module.scss';
interface Props{
    film : FilmTv;
}
export default function ItemFirm({film}: Props){
    return (
            <tr>
                <th scope="row">1</th>
                <td>{film?.nameFilm}</td>
                <td>{film?.createDate}</td>
                <td>Danchoi9x</td>
                <td>{film?.countView}</td>
                <td style={{color : `${film?.hot ? "red" : ""}`}}>Hot</td>
                <td>{film?.active ? "Hoạt động" : "Không hoạt động"}</td>
                <td className={styles.action}>
                    <button className={styles.edit}>sửa</button>
                    <button className={styles.detail}>chi tiết</button>
                </td>
         </tr>
      
    )
}
