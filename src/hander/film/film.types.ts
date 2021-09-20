export interface FilmTv{
        id?: number,
        nameFilm?: string ,
		illustration?: string ;
		title?: string ;
		status?: string;
		director?: string;
		actor?: string ;
		type?: string ;
		nation?:string ;
		viewingTime?: string ;
		countView?: number ;
		hot?: boolean;
		year?: number ;
		active?: boolean;
		createDate?: Date;
}

export enum typeFilm{
	display,
	add,
	edit
}