import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Kalebe Bezerra"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aperiam alias culpa, quaerat possimus perferendis libero accusamus fuga corrupti ut ea sequi, voluptatem modi voluptatibus,
        quod officia! Veniam, itaque saepe!"
          />
          <Post author="Gabriel Buzzi" content="Um post legal!" />
        </main>
      </div>
    </>
  );
}

export default App;
