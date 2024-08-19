import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function ResultDisplay(props) {
  const header = props.header;
  const className = props.className;
  const message = props.message;

  return (
    <div className="App">
      <h1>{header}</h1>
      <p className={className}>{message}</p>
    </div>
  );
}

export function CreateDisplay(props) {
  const header = props.header;
  const links = props.links;
  const dataInfo = props.dataInfo;
  const navigate = useNavigate();
  const location = useLocation();
  const [state, _] = useState(location.state);
  const [errorMessage, setErrorMessage] = useState(null);

  const formItems = dataInfo.map(info => {
    const val = state == null ? null : state[info.name];
    switch(info.type) {
      case "hidden":
        return (
          <input type="hidden" name={info.name} defaultValue={val} />
        );

      case "textarea":
        return (
          <div className="form-item">
            <label htmlFor={info.name}>{info.displayName}: </label>
            <textarea name={info.name} className="full wide-line resize-vert" defaultValue={val} />
          </div>
        );

      default:
        return (
          <div className="form-item">
            <label htmlFor={info.name}>{info.displayName}: </label>
            <input type={info.type} name={info.name} className="full" defaultValue={val} />
          </div>
        );
    }
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    fetch(links.sendUrl, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(json => {
      if(json.status === "OK") {
        navigate(links.nextUrl, { state: data });
      } else {
        setErrorMessage(json.message);
      }
    })
    .catch(reason => console.log(reason));
  }
  
  return (
    <div className="App">
      <h1>{header}</h1>
      {(errorMessage == null) ? (<></>) : (<p className="red">{errorMessage}</p>)}
      <form onSubmit={submitHandler} className="message-form">
        {formItems}
        <div className="form-item right"><input formMethod="POST" type="submit" /></div>
      </form>
    </div>
  );
}

export function ConfirmDisplay(props) {
  const header = props.header;
  const links = props.links;
  const dataInfo = props.dataInfo;
  const texts = props.texts;
  const navigate = useNavigate();
  const location = useLocation();
  const [state, _] = useState(location.state);
  const [errorMessage, setErrorMessage] = useState(null);

  const formItems = dataInfo.map(info => {
    const val = state == null ? null : state[info.name];
    switch(info.type) {
      case "hidden":
        return <></>;
      default:
        return (
          <div className="form-item">
            <label>{info.displayName}: </label>
            <span className="overflow">{val}</span>
          </div>
        );
    }
  });

  const submitHandler = (event) => {
    event.preventDefault();
    
    fetch(links.sendUrl, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    })
    .then(response => response.json())
    .then(json => {
      if(json.status === "OK") {
        navigate(links.succeededUrl, { state: state });
      } else {
        navigate(links.failedUrl, { state: state });
      }
    })
    .catch(_ => navigate(links.failedUrl));
  }
  
  return (
    <div className="App">
      <h1>{header}</h1>
      <p>{texts.confirm}</p>
      <form onSubmit={submitHandler} className="message-form">
        {formItems}
        <div className="form-item right">
          <input formMethod="POST" type="submit" />
          <button type="button" onClick={() => navigate(-1, { state: state })}>戻る</button>
        </div>
      </form>
    </div>
  );
}
