import React,{ChangeEvent, useState,useEffect, FormEvent} from 'react'
import { Row, Col } from 'reactstrap';
import styles from './styles.module.scss';
import {Episode} from './../../hander/episodes/episode.type';
import  FilmUtils from './../../hander/film/filmUtils';
import { FilmTv } from '../../hander/film/film.types';
import EpisodeUtils from './../../hander/episodes/episode.utils';
export default function EpisodesAdd (){
    const [dataEpisode, setDataEpisode] = useState<Episode>({active:true});
    const [film,setFilm] = useState<number | undefined>();
    const {data,getAllFilms} = FilmUtils();
    const {createNewEpisode} = EpisodeUtils();
    useEffect(() => {
        getAllFilms();
    }, [])
    const onChangeData = (e : ChangeEvent<HTMLInputElement>) =>{
        var name = e.target.name;
        var value = e.target.value;
        setDataEpisode({...dataEpisode,[name]:value})
        
    }
    const displaySelect = (data : FilmTv[]) =>{
        var result = null;
        if(data.length > 0){
            result = data.map((film,index) =>{
                return  <option key={index} value={film.id}>{film.nameFilm}</option>
            })
        }
        return result;
    }
    const onSaveFilm = (e : FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        createNewEpisode(dataEpisode,film)
    }
    const onSelectFilm= (e: ChangeEvent<HTMLSelectElement>) =>{
        var value = e.target.value;
        setFilm(parseInt(value));
    }
    return (
        <div className={styles.form} >
            <form onSubmit={onSaveFilm}>
                    <div className="form-group">
                        <input required name="nameEpisode"  type="text" className="form-control" placeholder="nameEpisode" onChange={onChangeData}/>
                    </div>
                    <div className="form-group">
                        <input required  name="urlVideo"  type="text" className="form-control" placeholder="urlVideo" onChange={onChangeData}/>
                    </div>
                        <select name="film"  className="form-control" onChange={onSelectFilm}>
                        {displaySelect(data)
                        }
                        </select>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
     </div>
    )
}