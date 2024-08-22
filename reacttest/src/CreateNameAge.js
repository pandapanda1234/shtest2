// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import { ResultDisplay, ConfirmDisplay, CreateDisplay } from "./Components";

const dataInfo = [
  {name: "id", displayName: "ID", type: "hidden"},
  {name: "name", displayName: "名前", type: "text"},
  {name: "age", displayName: "年齢", type: "number"},
  {name: "hobby", displayName: "趣味", type: "text"},
  {name: "skill", displayName: "スキル", type: "text"}
];

const createLinks = {
  sendUrl: "http://localhost:8080/name-age2/check",
  nextUrl: "/name-age/create-confirm"
}

export function CreateNameAge() {
  return <CreateDisplay header="人物作成" dataInfo={dataInfo} links={createLinks} />
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

const updateLinks = {
  sendUrl: "http://localhost:8080/name-age2/check",
  nextUrl: "/name-age/update-confirm"
}

const updateOptions = {
  readonly: {
    name: true
  }
}

export function UpdateNameAge() {
  return <CreateDisplay header="人物修正" dataInfo={dataInfo} links={updateLinks} options={updateOptions} />
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

const createConfirmLinks = {
  sendUrl: "http://localhost:8080/name-age2/create",
  succeededUrl: "/name-age/create-succeeded",
  failedUrl: "/name-age/create-failed"
};

const createConfirmTexts = {
  confirm: "以下の内容で作成しますか？"
};

export function CreateNameAgeConfirm() {
  return <ConfirmDisplay header="人物作成確認"  dataInfo={dataInfo} links={createConfirmLinks} texts={createConfirmTexts} />
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

const updateConfirmLinks = {
  sendUrl: "http://localhost:8080/name-age2/update",
  succeededUrl: "/name-age/update-succeeded",
  failedUrl: "/name-age/update-failed"
};

const updateConfirmTexts = {
  confirm: "以下の内容に修正しますか？"
};

export function UpdateNameAgeConfirm() {
  return <ConfirmDisplay header="人物修正確認"  dataInfo={dataInfo} links={updateConfirmLinks} texts={updateConfirmTexts} />
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

const deleteConfirmLinks = {
  sendUrl: "http://localhost:8080/name-age/delete",
  succeededUrl: "/name-age/delete-succeeded",
  failedUrl: "/name-age/delete-failed"
};

const deleteConfirmTexts = {
  confirm: "以下の人物を削除しますか？"
};

export function DeleteNameAgeConfirm() {
  return <ConfirmDisplay header="人物削除確認"  dataInfo={dataInfo} links={deleteConfirmLinks} texts={deleteConfirmTexts} />
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

export function CreateNameAgeSucceeded() {
  return <ResultDisplay header="人物作成成功" className="blue" message="人物の作成に成功しました。" />;
}

export function CreateNameAgeFailed() {
  return <ResultDisplay header="人物作成失敗" className="red" message="人物の作成に失敗しました。" />;
}

export function UpdateNameAgeSucceeded() {
  return <ResultDisplay header="人物修正成功" className="blue" message="人物の修正に成功しました。" />;
}

export function UpdateNameAgeFailed() {
  return <ResultDisplay header="人物修正失敗" className="red" message="人物の修正に失敗しました。" />;
}

export function DeleteNameAgeSucceeded() {
  return <ResultDisplay header="人物削除成功" className="blue" message="人物の削除に成功しました。" />;
}

export function DeleteNameAgeFailed() {
  return <ResultDisplay header="人物削除失敗" className="red" message="人物の削除に失敗しました。" />;
}