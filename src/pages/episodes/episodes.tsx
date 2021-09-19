import React from 'react'
import { Table } from 'reactstrap';
import styles from './styles.module.scss';
export default function Episodes(){
    return (
        <div>
        <div className={styles.url}>
         <div className={styles.url_left}>
             <span>/api/episodes</span>
             <h5>episodes</h5>
         </div>
         <div className={styles.url_right}>
             <button>Thêm Film</button>
         </div>
     </div>
     <div className={styles.table}>
              <Table striped>
                      <thead>
                          <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          </tr>
                          <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                          </tr>
                          <tr>
                          <th scope="row">3</th>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                          </tr>
                      </tbody>
          </Table>
     </div>
  </div>
    )
}

