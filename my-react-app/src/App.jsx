import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Description from "./components/Description";
import Content from "./components/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text">
      {/*<h1>Lorem</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sit
        aliquam excepturi accusantium sed sunt doloribus, est itaque cumque,
        unde dicta nam voluptates aut! Magnam laudantium voluptates maiores iure
        beatae.
      </p>*/}
      <div>
        <Content
          name={"Lorem"}
          text={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam expeditajhglkjiojiohoiknij..."
          }
        />
      </div>
      <div>
        <Content
          name={"Ipsum"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sitjkcisofjeojif,ùvoijvrevnervdsovdsiocndsiocioicdsjcdijsidujfefçhdsnc xncxsjdqsdjçqdisqodjsqcoisfjezçàfqsxnkxnqsk qzfezfizejof cscnaziodn azaznsoa  dqcazdz fze fazfaz fdazf zfze af fazefezopaozjiefbgruizfoadpozfencsxqcvssdklcqmezfgrr kfjopeqzpafegrhzfd;,njvbfdvkscsdefrzodze..."
          }
        />
      </div>
    </div>
  );
}

export default App;
