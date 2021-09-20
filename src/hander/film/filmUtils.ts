import React,{useState} from 'react';
import * as apis from './../api/api';
import {FilmTv} from './film.types';
import * as urls from './film.type.api';
interface UtilsFilm{
    getAllFilms : () => void
    data : FilmTv[]
    createNewFilm : (data : FilmTv) => void
}
export default function FilmUtils() : UtilsFilm {
    const [data, setdata] = useState<FilmTv[]>([]);
    const getAllFilms = async () =>{
        const res = await apis.get(urls.GET_ALL)
        console.log(res);
        setdata(res.data);
    }

    // thêm một phim mới
    const createNewFilm = async(data : FilmTv) =>{
        const res = await apis.post(urls.GET_ALL,data)
        console.log(res);
    }

    return {
    getAllFilms,
    data,
    createNewFilm,
    }
}


