import {Episode} from './episode.type';
import React,{useState} from 'react';
import * as apis from './../api/api';
import * as urls from './../film/film.type.api';
interface UtilsEpisode{
    getAllEpisodes : () => void
    data : Episode[]
    createNewEpisode : (data : Episode,id:number | undefined) => void
}
export default function EpisodeUtils() :  UtilsEpisode {
    const [data, setdata] = useState<Episode[]>([]);
    const getAllEpisodes = async () =>{
        const res = await apis.get(urls.GET_ALL_EPISODES)
        console.log(res);
        setdata(res.data);
    }

    // thêm một tập phim mới cho một bộ phim nào đó
    const createNewEpisode = async(data : Episode,id: number | undefined) =>{
        if(!id) console.log("vui lòng chọn bộ phim muốn thêm");
        const res = await apis.post(`${urls.GET_ALL_EPISODES}/${id}`,data)
        console.log(res);
    }

    return {
        data,
        getAllEpisodes,
        createNewEpisode,

    }

}