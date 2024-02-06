import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img 
      className={styles.cover}
      src="https://images.unsplash.com/photo-1600876670541-ad960ed66b02?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <div className={styles.profile}>
        <Avatar hasBorder src="https://avatars.githubusercontent.com/u/94193698?v=4"/>
        <strong>Kalebe Bezerra</strong>
        <span>WebDeveloper</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}