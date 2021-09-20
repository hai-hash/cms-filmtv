import React,{ChangeEvent, useState,useEffect, FormEvent} from 'react'
import { Row, Col } from 'reactstrap';
import styles from './styles.module.scss';
import {FilmTv} from './../../hander/film/film.types';
import FilmUtils from './../../hander/film/filmUtils';
const FilmAdd = () => {
    const [data, setdata] = useState<FilmTv>({hot:false,active:true,countView: 0});
    const {createNewFilm} = FilmUtils();
    const onChangeData = (e : ChangeEvent<HTMLInputElement>) =>{
        var name = e.target.name;
        var value = e.target.value;
        setdata({...data,[name]:value})
        
    }
    useEffect(() => {
       console.log(data)
    }, [data])

    const onSaveFilm = (e : FormEvent<HTMLDivElement>) =>{
        e.preventDefault();
        createNewFilm(data);
    }
    return (
        <div className={styles.form} onSubmit={onSaveFilm}>
           
           <form>
               <Row>
                   <Col xs="6" className={styles.col}>
                    <div className="form-group">
                        <input required name="nameFilm"  type="text" className="form-control" placeholder="nameFilm" onChange={onChangeData}/>
                    </div>
                   </Col >
                   <Col xs="6" className={styles.col}>
                    <div className="form-group">
                        <input required  name="illustration"  type="text" className="form-control" placeholder="illustration" onChange={onChangeData}/>
                    </div>
                   </Col>
                   <Col xs="6"  className={styles.col}>
                    <div className="form-group">
                        <input required  name="title" type="text" className="form-control" placeholder="title" onChange={onChangeData}/>
                    </div>
                   </Col>
                   <Col xs="6"  className={styles.col}>
                    <div className="form-group">
                        <input required  name="status" type="text" className="form-control" placeholder="status" onChange={onChangeData}/>
                    </div>
                   </Col>
                   <Col xs="6"  className={styles.col}>
                    <div className="form-group">
                        <input required name="director" type="text" className="form-control" placeholder="director"onChange={onChangeData}/>
                    </div>
                   </Col>
                   <Col xs="6"  className={styles.col}>
                    <div className="form-group">
                        <input required name="actor" type="text" className="form-control" placeholder="actor"onChange={onChangeData}/>
                    </div>
                   </Col>
                   <Col xs="6"  className={styles.col}>
                    <div className="form-group">
                        <input required name="nation" type="text" className="form-control" placeholder="nation"onChange={onChangeData}/>
                    </div>
                   </Col>
                   <Col xs="6"  className={styles.col}>
                    <div className="form-group">
                        <input required name="viewingTime" type="text" className="form-control" placeholder="viewingTime" onChange={onChangeData}/>
                    </div>
                   </Col>
                   <Col xs="6"  className={styles.col}>
                    <div className="form-group">
                        <input required name="year" type="text" className="form-control" placeholder="year" onChange={onChangeData}/>
                    </div>
                   </Col>
               </Row>
               <button type="submit" className="btn btn-primary">Save</button>
           </form>
           
        </div>
    )
}

export default FilmAdd
