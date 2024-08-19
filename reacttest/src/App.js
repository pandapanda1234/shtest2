import { useEffect, useState } from 'react';
import './App.css';
import osaka from "./osaka.jpg";

function Texts() {
  const now = new Date();
  return (
    <div className="content">
      <img src={osaka} className="image-top" alt="osaka" />
      <ul className="text-list">
        <li>左は大阪のかに道楽の写真です。</li>
        <li>テキストテキストテキストテキストテキストテキストテキストテキスト</li>
        <li className="blue">青文字行ですテキストテキストテキストテキスト</li>
        <li className="red">赤文字行ですテキストテキストテキストテキスト</li>
        <li>{now.toString()}</li>
      </ul>
    </div>
  );
}

function AlphabetTable() {
  return (
    <table>
      <tbody>
        <tr>
          <td><span className="big">A</span></td>
          <td><span className="big">B</span></td>
          <td>
            <div className="grid_v2">
              <span>C</span>
              <span>D</span>
            </div>
          </td>
          <td><span className="red big">E</span></td>
          <td><span className="blue big">F</span></td>
        </tr>

        <tr>
          <td>
            <div className="grid_v2">
              <span className="red">G</span>
              <span className="blue">H</span>
            </div>
          </td>
          <td>
            <div className="grid_v2 grid_h2">
              <span>I</span><span>J</span>
              <span>K</span><span>L</span>
            </div>
          </td>
          <td rowSpan={2}><span className="big">M</span></td>
          <td colSpan={2}><span className="big">N</span></td>
        </tr>

        <tr>
          <td><span className="bold big">O</span></td>
          <td><span className="underline big">P</span></td>

          <td colSpan={2}>
            <div className="grid_h2">
              <span className="underline big">Q</span>
              <span className="bold big">R</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function NameInput() {
  const [myName, setMyName] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/myname", {
      method: "GET",
      mode: "cors"
    })
      .then(response => response.json())
      .then(json => json.content)
      .then(text => {
        setMyName(text);
        console.log(`My name is set to "${text}".`);
      })
      .catch(_ => { console.log("Fetch failed."); });
  }, []);

  return (
    <input id="myName" name="myName" type="text" className="inline-input" defaultValue={myName} onChange={() => {}} />
  );
}

function Forms() {
  const animals = [{name: "dog", display: "犬"}, {name: "cat", display: "猫"}];
  const tastes = [{name: "sweet", display: "超甘い"}, {name: "sour", display: "超酸っぱい"}, {name: "bitter", display: "超苦い"}];
  const bloods = [
    {name: "A", display: "A型"}, {name: "B", display: "B型"},
    {name: "O", display: "O型"}, {name: "AB", display: "AB型"}
  ];

  const listAnimals = animals.map(animal => {
    return (
      <>
        <input name="animal" id={"animal-" + animal.name} type="radio" className="inline-input" />
        {animal.display}
      </>
    );
  });
  const listTastes = tastes.map(taste => {
    return (
      <>
        <input name="taste" id={"taste-" + taste.name} type="checkbox" className="inline-input" />
        {taste.display}
      </>
    );
  });
  const listBloods = (
    <select name="blood" className="inline-input">
      {
        bloods.map(blood => {
          return (
            <option value={blood.name}>{blood.display}</option>
          );
        })
      }
    </select>
  );

  return (
    <form className="content small forms">
      <p>
        名前
        <NameInput />
      </p>
      <p>
        好きな動物
        {listAnimals}
      </p>
      <p>
        これは食べられる？
        {listTastes}
      </p>
      <p>
        血液型
        {listBloods}
      </p>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <h1>テストページ</h1>
      <Texts />
      <AlphabetTable />
      <Forms />
    </div>
  );
}

export default App;
