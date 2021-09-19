import React,{useEffect} from 'react'
import { Table } from 'reactstrap';
import styles from './styles.module.scss';
import FilmUtils from './../../hander/film/filmUtils';
export default function Film(){
    return (
        <div>
              <div className={styles.url}>
               <div className={styles.url_left}>
                   <span>/Firm</span>
                   <h5>Film</h5>
               </div>
               <div className={styles.url_right}>
                   <button>Thêm Film</button>
               </div>
           </div>
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
                                <tr>
                                <th scope="row">1</th>
                                <td>One pea</td>
                                <td>11/03/1999</td>
                                <td>Danchoi9x</td>
                                <td>10000</td>
                                <td>Hot</td>
                                <td>Active</td>
                                <td>Sửa</td>
                                </tr>
                            </tbody>
                </Table>
           </div>
        </div>
    )
}
