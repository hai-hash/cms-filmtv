import React,{useEffect} from 'react'
import { Table } from 'reactstrap';
import styles from './styles.module.scss';
import FilmUtils from './../../hander/film/filmUtils';
import {FilmTv} from './../../hander/film/film.types';
import ItemFirm from './ItemFirm';
import LoadingUtils from './../../hander/loading/loadingutils';
const FilmDisplay = () => {
    const {getAllFilms,data,changeActiveFilm,changeHotFilm} = FilmUtils();
    const {setLoading} = LoadingUtils();
    useEffect(() => {
        getAllFilms();
        setLoading(false);
    }, [])

    console.log("đây là dữ liệu data", data)
    const Dispplay = (data : FilmTv[]) =>{
        let result = null;
        if(data.length > 0){
            result = data.map((film,index) =>{
                return <ItemFirm key={index} film = {film} changeActiveFilm = {changeActiveFilm} changeHotFilm={changeHotFilm}/>
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
                                <th>Name Film</th>
                                <th>Ngày Tạo</th>
                                <th>Người Tạo</th>
                                <th>View</th>
                                <th>Hot</th>
                                <th>Active</th>
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

export default FilmDisplay
