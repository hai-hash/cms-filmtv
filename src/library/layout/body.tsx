import React from 'react'
import styles from './styles.module.scss';
import {MdAccountCircle} from "react-icons/md";
import Film from '../../pages/film/film';
import Category from '../../pages/category/category';
import Episodes from '../../pages/episodes/episodes';
import {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";
import NotFound from './notfound';
import Home from '../../pages/home/home';
  
export default function Body(){
    return (
        <div className={styles.body}>
           <div className={styles.header}>
                <div><MdAccountCircle className={styles.icon_account}/></div> 
           </div>
           <Switch>
               <Route exact path="/"> <Home/></Route>
               <Route path="/film"> <Film/></Route>
               <Route path="/category"> <Category/></Route>
               <Route path="/episodes"> <Episodes/></Route>
               <Route path="*"><NotFound/></Route>
           </Switch>
          
        </div>
    )
}

