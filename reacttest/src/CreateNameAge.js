// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import { ResultDisplay, ConfirmDisplay, CreateDisplay } from "./Components";

// フォーム情報の名前と種類
const dataInfo = [
  {name: "id", displayName: "ID", type: "hidden"},
  {name: "name", displayName: "名前", type: "text"},
  {name: "age", displayName: "年齢", type: "number"},
  {name: "hobby", displayName: "趣味", type: "text"},
  {name: "skill", displayName: "スキル", type: "text"}
];

// エラーメッセージ一覧
const errorDisplayMap = {
  "name-empty": "名前が空です。",
  "name-long": "名前が長すぎます。",
  "age-negative": "年齢が負です。",
  "hobby-empty": "趣味が空です。",
  "hobby-long": "趣味が長すぎます。",
  "skill-empty": "スキルが空です。",
  "skill-long": "スキルが長すぎます。",
  "name-not-exists": "その名前は存在しません。",
  "name-exists": "その名前は既に存在します。",
}

// 人物作成画面での情報送信先と遷移先URL
const createLinks = {
  sendUrl: "http://localhost:8080/name-age2/check-create",
  nextUrl: "/name-age/create-confirm"
}

// 人物作成画面を返す関数
export function CreateNameAge() {
  // 表題・フォーム情報・URL情報・エラーメッセージを与えて人物作成画面を生成した結果を返却する。
  return <CreateDisplay header="人物作成" dataInfo={dataInfo} links={createLinks} errorDisplayMap={errorDisplayMap} />
}

// export function CreateNameAge() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [state, setState] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null);
  
//   useEffect(() => {
//     setState(location.state);
//   }, []);
  
//   return (
//     <div className="App">
//       <h1>人物作成</h1>
//       {
//         (errorMessage == null) ? (<></>) : (<p className="red">{errorMessage}</p>)
//       }
//       <form onSubmit={(event) => {
//         event.preventDefault();
//         const formData = new FormData(event.currentTarget);
//         const data = Object.fromEntries(formData.entries());
        
//         fetch("http://localhost:8080/name-age/check", {
//           method: "POST",
//           mode: "cors",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(data),
//         })
//         .then(response => response.json())
//         .then(json => {
//           if(json.status === "OK") {
//             navigate("/name-age/create-confirm", { state: data });
//           } else {
//             setErrorMessage("Error!");
//           }
//         })
//         .catch(reason => console.log(reason));
//       }
//     } className="message-form">
//         <NameAgeInputForm state={state}/>
//       </form>
//     </div>
//   );
// }

// 人物修正画面での情報送信先と遷移先URL
const updateLinks = {
  sendUrl: "http://localhost:8080/name-age2/check-update",
  nextUrl: "/name-age/update-confirm"
}

// 人物修正画面での設定項目
const updateOptions = {
  readonly: {
    name: true
  }
}

// 人物修正画面を返す関数
export function UpdateNameAge() {
  // 表題・フォーム情報・URL情報・設定項目・エラーメッセージを与えて人物修正画面を生成した結果を返却する。
  return <CreateDisplay header="人物修正" dataInfo={dataInfo} links={updateLinks} options={updateOptions} errorDisplayMap={errorDisplayMap} />
}

// export function UpdateNameAge() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [state, setState] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null);
  
//   useEffect(() => {
//     setState(location.state);
//   }, []);
  
//   return (
//     <div className="App">
//       <h1>人物修正</h1>
//       {
//         (errorMessage == null) ? (<></>) : (<p className="red">{errorMessage}</p>)
//       }
//       <form onSubmit={
//         (event) => {
//           event.preventDefault();
//           const formData = new FormData(event.currentTarget);
//           const data = Object.fromEntries(formData.entries());
          
//           fetch("http://localhost:8080/name-age/check", {
//             method: "POST",
//             mode: "cors",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(data),
//           })
//           .then(response => response.json())
//           .then(json => {
//             if(json.status === "OK") {
//               navigate("/name-age/update-confirm", { state: data });
//             } else {
//               setErrorMessage("Error!");
//             }
//           })
//           .catch(reason => console.log(reason));
//           }
//         } className="message-form">
//           <NameAgeInputForm state={state}/>
//       </form>
//     </div>
//   );
// }

// function NameAgeInputForm(props) {
//   const state = props.state;
//   const name = state == null ? null : state.name;
//   const age = state == null ? null : state.age;
//   const id = state == null ? null : state.id;

//   return (
//     <>
//       <div className="form-item">
//         <label>名前: </label>
//         <input type="text" name="name" className="full" defaultValue={name} />
//       </div>
//       <div className="form-item">
//         <label>年齢: </label>
//         <input type="number" name="age" className="full" defaultValue={age} />
//       </div>
//       <input type="hidden" name="id" defaultValue={id} />
//       <div className="form-item right"><input formMethod="POST" type="submit" /></div>
//     </>
//   )
// }

// 人物作成確認画面での情報送信先と遷移先URL
const createConfirmLinks = {
  sendUrl: "http://localhost:8080/name-age2/create",
  succeededUrl: "/name-age/create-succeeded",
  failedUrl: "/name-age/create-failed"
};

// 人物作成確認画面での確認メッセージ
const createConfirmTexts = {
  confirm: "以下の内容で作成しますか？"
};

// 人物作成確認画面を返す関数
export function CreateNameAgeConfirm() {
  // 表題・フォーム情報・URL情報・確認メッセージを与えて人物作成確認画面を生成した結果を返却する。
  return <ConfirmDisplay header="人物作成確認" dataInfo={dataInfo} links={createConfirmLinks} texts={createConfirmTexts} />
}

// export function CreateNameAgeConfirm() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [state, setState] = useState(null);
  
//   useEffect(() => {
//     setState(location.state);
//   }, []);
  
//   return (
//     <form onSubmit={
//       (event) => {
//         event.preventDefault();
//         fetch("http://localhost:8080/name-age/create", {
//             method: "POST",
//             mode: "cors",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(state),
//           })
//           .then(_ => navigate("/name-age/create-succeeded"))
//           .catch(_ => navigate("/name-age/create-failed"));
//         }
//       } className="App">
//       <h1>人物作成確認</h1>
//       <p>以下の内容で作成しますか？</p>
//       <div className="message-form">
//         <NameAgeConfirmForm state={state} back="/name-age/create" />
//       </div>

//     </form>
//   );
// }

// 人物修正確認画面での情報送信先と遷移先URL
const updateConfirmLinks = {
  sendUrl: "http://localhost:8080/name-age2/update",
  succeededUrl: "/name-age/update-succeeded",
  failedUrl: "/name-age/update-failed"
};

// 人物修正確認画面での確認メッセージ
const updateConfirmTexts = {
  confirm: "以下の内容に修正しますか？"
};

// 人物修正確認画面を返す関数
export function UpdateNameAgeConfirm() {
  // 表題・フォーム情報・URL情報・確認メッセージを与えて人物作成確認画面を生成した結果を返却する。
  return <ConfirmDisplay header="人物修正確認" dataInfo={dataInfo} links={updateConfirmLinks} texts={updateConfirmTexts} />
}

// export function UpdateNameAgeConfirm() {
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const [state, setState] = useState(null);
  
//   useEffect(() => {
//     setState(location.state);
//   }, []);
  
//   return (
//     <form onSubmit={
//       (event) => {
//         event.preventDefault();
//         fetch("http://localhost:8080/name-age/update", {
//             method: "POST",
//             mode: "cors",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(state),
//           }).then(_ => navigate("/name-age/update-succeeded"))
//           .catch(_ => navigate("/name-age/update-failed"));
//         }
//       } className="App">
//       <h1>人物修正確認</h1>
//       <p>以下の内容に修正しますか？</p>
//       <div className="message-form">
//         <NameAgeConfirmForm state={state} back="/name-age/update" />
//       </div>

//     </form>
//   );
// }

// 人物削除確認画面での情報送信先と遷移先URL
const deleteConfirmLinks = {
  sendUrl: "http://localhost:8080/name-age2/delete",
  succeededUrl: "/name-age/delete-succeeded",
  failedUrl: "/name-age/delete-failed"
};

// 人物削除確認画面での確認メッセージ
const deleteConfirmTexts = {
  confirm: "以下の人物を削除しますか？"
};

// 人物削除確認画面を返す関数
export function DeleteNameAgeConfirm() {
  // 表題・フォーム情報・URL情報・確認メッセージを与えて人物削除確認画面を生成した結果を返却する。
  return <ConfirmDisplay header="人物削除確認" dataInfo={dataInfo} links={deleteConfirmLinks} texts={deleteConfirmTexts} />
}

// export function DeleteNameAgeConfirm() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [state, setState] = useState({});
  
//   useEffect(() => {
//     setState(location.state);
//   }, []);
  
//   return (
//     <form onSubmit={
//       (event) => {
//         event.preventDefault();
//         fetch("http://localhost:8080/name-age/delete", {
//             method: "POST",
//             mode: "cors",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(state),
//           }).then(_ => navigate("/name-age/delete-succeeded"))
//           .catch(_ => navigate("/name-age/delete-failed"));
//         }
//       } className="App">
//       <h1>人物削除確認</h1>
//       <p>以下の人物を削除しますか？</p>
//       <div className="message-form">
//         <NameAgeConfirmForm state={state} back={`/name-age/${state.id}`} />
//       </div>

//     </form>
//   );
// }

// function NameAgeConfirmForm(props) {
//   const navigate = useNavigate();
//   const state = props.state;
//   const name = state == null ? null : state.name;
//   const age = state == null ? null : state.age;
//   const back = props.back;
  
//   return (
//     <>
//       <div className="form-item">
//         <label>名前: </label>
//         <span className="overflow">{name}</span>
//       </div>
//       <div className="form-item">
//         <label>年齢: </label>
//         <span className="overflow">{age}</span>
//       </div>
//       <div className="form-item right">
//         <input formMethod="POST" type="submit" />
//         <button type="button" onClick={() => navigate(back, { state: state })}>戻る</button>
//       </div>
//     </>
//   )
// }

// 人物作成成功画面を返す関数
export function CreateNameAgeSucceeded() {
  // 表題・表示色・メッセージを与えて人物作成成功画面を生成した結果を返却する。
  return <ResultDisplay header="人物作成成功" className="blue" message="人物の作成に成功しました。" />;
}

// 人物作成失敗画面を返す関数
export function CreateNameAgeFailed() {
  // 表題・表示色・メッセージを与えて人物作成失敗画面を生成した結果を返却する。
  return <ResultDisplay header="人物作成失敗" className="red" message="人物の作成に失敗しました。" />;
}

// 人物修正成功画面を返す関数
export function UpdateNameAgeSucceeded() {
  // 表題・表示色・メッセージを与えて人物修正成功画面を生成した結果を返却する。
  return <ResultDisplay header="人物修正成功" className="blue" message="人物の修正に成功しました。" />;
}

// 人物修正失敗画面を返す関数
export function UpdateNameAgeFailed() {
  // 表題・表示色・メッセージを与えて人物修正失敗画面を生成した結果を返却する。
  return <ResultDisplay header="人物修正失敗" className="red" message="人物の修正に失敗しました。" />;
}

// 人物削除成功画面を返す関数
export function DeleteNameAgeSucceeded() {
  // 表題・表示色・メッセージを与えて人物削除成功画面を生成した結果を返却する。
  return <ResultDisplay header="人物削除成功" className="blue" message="人物の削除に成功しました。" />;
}

// 人物削除失敗画面を返す関数
export function DeleteNameAgeFailed() {
  // 表題・表示色・メッセージを与えて人物削除成功画面を生成した結果を返却する。
  return <ResultDisplay header="人物削除失敗" className="red" message="人物の削除に失敗しました。" />;
}