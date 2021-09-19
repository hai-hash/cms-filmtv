import React from 'react'
import styles from './styles.module.scss';
import {MdAccountCircle} from "react-icons/md";
import Film from '../../pages/film/film';
import Category from '../../pages/category/category';
import Episodes from '../../pages/episodes/episodes';
import {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";
  
export default function Body(){
    return (
        <div className={styles.body}>
           <div className={styles.header}>
                <div><MdAccountCircle className={styles.icon_account}/></div> 
           </div>
           <Switch>
               <Route path="/api/film"> <Film/></Route>
               <Route path="/api/category"> <Category/></Route>
               <Route path="/api/episodes"> <Episodes/></Route>
           </Switch>
          
        </div>
    )
}

