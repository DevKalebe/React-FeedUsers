import { Post } from "./Post";
import { Header } from "./components/Header";
import './global.css'

function App() {
  return (
    <>
    <Header/>
      <Post
        author="Kalebe Bezerra"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aperiam alias culpa, quaerat possimus perferendis libero accusamus fuga corrupti ut ea sequi, voluptatem modi voluptatibus,
        quod officia! Veniam, itaque saepe!"
      />
      <Post
        author="Gabriel Buzzi"
        content="Um post legal!"
      />
    </>
  );
}

export default App;
