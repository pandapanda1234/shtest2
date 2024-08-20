import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ResultDisplay } from "./Components";

export function NameAges() {
  const navigate = useNavigate();
  const [nameAges, setNameAges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/name-age", {
      method: "GET",
      mode: "cors"
    })
      .then(response => response.json())
      .then(json => {
        setNameAges(json);
        console.log("Fetch succeeded.");
      })
      .catch(_ => { console.log("Fetch failed."); });
  }, []);
  // commit用
  const nameAgeList = Object.keys(nameAges).filter((key) => !nameAges[key].deleted).map((key) => {
    const nameAge = nameAges[key];
    return(
      <div className="box hover-color" key={nameAge.id} id={nameAge.id} onClick={() => navigate(`${nameAge.id}`)}>
        <p className="title-bar text-content">
          <span className="message-title">名前: {nameAge.name}</span>
          <span className="message-user">年齢: {nameAge.age}</span>
        </p>
      </div>
    );
  });

  return (
    <div className="App">
      <h1>人物一覧</h1>
      {nameAgeList}
    </div>
  );
}

export function NameAgeDetail() {
  const navigate = useNavigate();
  const [nameAge, setNameAge] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/name-age/${params.id}`, {
      method: "GET",
      mode: "cors"
    })
      .then(response => {
        if(!response.ok) {
          setDeleted(true);
        }
        return response.json();
      })
      .then(json => {
        if(json.status === "OK") {
          return json.content;
        } else {
          throw new Error(json.message);
        }
      })
      .then(nameAge => {
        setNameAge(nameAge);
        console.log("Fetch succeeded.");
      })
      .catch(_ => { console.log("Fetch failed."); });
  }, []);

  if(deleted) {
    return (<ResultDisplay header="人物取得失敗" className="red" message="人物の取得に失敗した、もしくは削除されています。" />);
  } else {
    return (
      <div className="App">
        <h1>人物詳細</h1>
        <div className="form-full right" >
          <button type="button" onClick={() => navigate("/name-age/update", { state: nameAge })}>修正</button>
          <button type="button" onClick={() => navigate("/name-age/delete", { state: nameAge })}>削除</button>
        </div>
        <div className="box" key={nameAge.id} id={nameAge.id} >
          <p className="title-bar text-content">
            <span className="message-title">名前: {nameAge.name}</span>
            <span className="message-user">年齢: {nameAge.age}</span>
          </p>
        </div>
      </div>
    );
  }
}
