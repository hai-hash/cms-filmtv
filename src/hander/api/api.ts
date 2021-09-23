import axios from 'axios';
import * as types from './api.types';
import {FilmTv} from './../film/film.types';
export const get = async (url:string) =>{
    const res = await axios.get(`${types.URL}/${url}`);
    return res;
}

export const post = async (url:string,data: FilmTv) =>{
    const res = await axios.post(`${types.URL}/${url}`,data)
    return res;
}

export const put = async (url:string) =>{
    const res = await axios.put(`${types.URL}/${url}`);
    return res;
}