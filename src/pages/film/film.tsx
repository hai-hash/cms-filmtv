import FilmDisplay from './film.display';
import FilmAdd from './film.add';
import React,{useEffect,useState} from 'react'
import {typeFilm} from './../../hander/film/film.types';
import styles from './styles.module.scss';
export default function Film(){
    const [status,setStatus] = useState<typeFilm>(typeFilm.display);
    const genData = () =>{
        switch (status) {
            case typeFilm.display:
                return  <FilmDisplay/>
            case typeFilm.add:
                return <FilmAdd/>
        
            default:
                return  <FilmDisplay/>
        }
    }
    const onAdd = () =>{
        if(status === typeFilm.display)
        setStatus(typeFilm.add)
        else  setStatus(typeFilm.display)
    }

    return (
        <div>
             <div className={styles.url}>
               <div className={styles.url_left}>
                   <span>/Firm</span>
                   <h5>Film</h5>
               </div>
               <div className={styles.url_right}>
                   <button onClick={onAdd}>Thêm Film</button>
               </div>
           </div>
             {genData()}
        </div>
    )
}
