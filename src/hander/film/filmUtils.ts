import React,{useState} from 'react';
import * as apis from './../api/api';
import {FilmTv} from './film.types';
import * as urls from './film.type.api';

interface UtilsFilm{
    getAllFilms : () => void,
    data : FilmTv[],
    createNewFilm : (data : FilmTv) => void,
    changeActiveFilm : (id?: number) => void,
    changeHotFilm:(id?: number) => void,
}
export default function FilmUtils() : UtilsFilm {
    const [data, setData] = useState<FilmTv[]>([]);
    const getAllFilms = async () =>{
        const res = await apis.get(urls.GET_ALL)
        console.log(res);
        setData(res.data);
    }

    // thêm một phim mới
    const createNewFilm = async(data : FilmTv) =>{
        const res = await apis.post(urls.GET_ALL,data)
        console.log(res);
    }

    // thay đổi trang thái của film 
    const changeActiveFilm = async(id? : number) =>{
        const res = await apis.put(`${urls.CHANGE_ACTIVE_FILM}/${id}`);
        console.log(res);
    }

     // thay đổi trang thái của hot film
     const changeHotFilm = async(id? : number) =>{
        const res = await apis.put(`${urls.CHANGE_HOT}/${id}`);
        console.log(res);
    }

    return {
    getAllFilms,
    data,
    createNewFilm,
    changeActiveFilm,
    changeHotFilm,


    }
}


