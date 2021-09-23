import {FilmTv} from './../film/film.types';
export enum typeEpisode{
	display,
	add,
	edit
}

export interface Episode{
	id?: number,
	nameEpisode?: string,
	urlVideo?: string,
	active?: boolean,
	createDate?: Date,
	film?: FilmTv,

}