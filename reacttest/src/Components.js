import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// 結果画面を返す関数
export function ResultDisplay(props) {

  // headerに表題を引数propsから取得して代入する
  const header = props.header;
  // classNameにCSSクラス名を引数propsから取得して代入する
  const className = props.className;
  // messageに表示メッセージを引数propsから取得して代入する
  const message = props.message;

  // 表題とメッセージが入ったdivタグを返す。
  return (
    <div className="App">
      <h1>{header}</h1>
      <p className={className}>{message}</p>
    </div>
  );
}

// 作成画面を返す関数
export function CreateDisplay(props) {

  // headerに表題を引数propsから取得して代入する
  const header = props.header;
  // linksにURL情報を引数propsから取得して代入する
  const links = props.links;
  // dataInfoにフォーム情報を引数propsから取得して代入する
  const dataInfo = props.dataInfo;
  // optionsに設定項目を引数propsから取得して（取得できなければ空オブジェクト）代入する
  const options = props.options ?? {};
  // errorDisplayMapにエラーメッセージを引数propsから取得して代入する
  const errorDisplayMap = props.errorDisplayMap;
  // ページ遷移機能を使用する
  const navigate = useNavigate();
  // ページ遷移時の情報を使用する
  const location = useLocation();
  // 変数stateの状態管理を使用し、ページ遷移時にstateを取得した結果で初期化する
  const [state, _] = useState(location.state);
  // 変数errorMessageの状態管理を使用する
  const [errorMessage, setErrorMessage] = useState(null);

  // フォーム送信時の処理を行う関数submitHandlerを定義する
  const submitHandler = (event) => {

    // 送信イベントのデフォルト送信を中断する
    event.preventDefault();

    // formDataにイベントの登録されたフォームからフォームデータオブジェクトを生成し代入する。
    const formData = new FormData(event.currentTarget);
    // dataにformDataの項目からJavaScriptオブジェクトに変換して代入する。
    const data = Object.fromEntries(formData.entries());
    
    // 引数のURLからPOSTメソッド、corsモードを用い、リクエストボディをdataをJson文字列に変換した結果として情報を送信する
    fetch(links.sendUrl, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    // 情報が取得できた場合JSON形式のレスポンスボディをJavaScriptオブジェクトに変換する
    .then(response => response.json())
    // JavaScriptオブジェクトが得られた場合
    .then(json => {

      // オブジェクトjsonのstatusがOKの場合
      if(json.status === "OK") {

        // 遷移先URLに、stateとしてdataを登録して遷移する
        navigate(links.nextUrl, { state: data });

      // そうでない場合
      } else {

        // 状態errorMessageにオブジェクトjsonからmessageを取得した結果をセットする
        setErrorMessage(json.message);

      }

    })
    // 例外が発生した場合
    .catch(reason => {

      // コンソールに例外の原因を出力する
      console.error(reason);

    });

  }

  // formItemsにフォームの部品リストを、フォーム情報の各要素から生成して代入する。
  const formItems = dataInfo.map(info => {

    // valにstateからフォーム情報のnameをキーとして取得した結果（stateがnullの場合はnull）を代入する。
    const val = state?.[info.name];

    // フォーム情報のtypeで場合分けを行う
    switch(info.type) {

      // typeが"hidden"の場合
      case "hidden":

        // 名前にname、値にval、形式に"hidden"が設定されたinputタグを返す。
        return (
          <input key={info.name} type="hidden" name={info.name} defaultValue={val} />
        );

      // typeが"textarea"の場合
      case "textarea":

        // 表示名にdisplayNameが設定されたlabelタグと名前にname、値にvalが設定されたtextareaタグを持つdivタグを返す。
        return (
          <div key={info.name} className="form-item">
            <label htmlFor={info.name}>{info.displayName}: </label>
            <textarea name={info.name} className="full wide-line resize-vert" defaultValue={val} />
          </div>
        );

      // いずれでもない場合
      default:

        // readonlyにoptions.readonlyから読み取り専用要素の設定をnameをキーとして取得して（取得できなければundefined）代入する
        const readonly = options?.readonly?.[info.name];

        // 表示名にdisplayNameが設定されたlabelタグと名前にname、値にval、形式にtype、読み取り専用属性にreadonlyが設定されたinputタグを持つdivタグを返す。
        return (
          <div key={info.name} className="form-item">
            <label htmlFor={info.name}>{info.displayName}: </label>
            <input type={info.type} name={info.name} className="full" defaultValue={val} readOnly={readonly} />
          </div>
        );

    }

  });

  // errorDisplayにエラー情報を、エラーメッセージの各要素から生成して代入する。
  const errorDisplay = ((errorMessage) => {

    // errorMessageがnullなら
    if(errorMessage == null) {

      // 空要素を返す。
      return <></>;

    // そうでない場合
    } else {

      // エラータイトルと、各エラーのメッセージを取得した結果を持つdivタグを返す。
      return (
        <div key="error" className="error">
          {/* エラータイトル */}
          <div className="error-head">ERROR!</div>
          {/* 各エラーからそれぞれメッセージを持つspanタグのリスト */}
          {errorMessage.map(message => <span key={message} id={message} >{errorDisplayMap[message]}</span>)}
        </div>
      );

    }
  })(errorMessage);
  
  // 表題、エラーメッセージ、各項目と送信ボタンのあるフォームを持つdivタグを返す。
  return (
    <div className="App">
      <h1>{header}</h1>
      {errorDisplay}
      <form onSubmit={submitHandler} className="message-form">
        {formItems}
        <div className="form-item right"><input formMethod="POST" type="submit" /></div>
      </form>
    </div>
  );
}

export function ConfirmDisplay(props) {

  // headerに表題を引数propsから取得して代入する
  const header = props.header;
  // linksにURL情報を引数propsから取得して代入する
  const links = props.links;
  // dataInfoにフォーム情報を引数propsから取得して代入する
  const dataInfo = props.dataInfo;
  // textsに確認メッセージを引数propsから取得して代入する
  const texts = props.texts;
  // ページ遷移機能を使用する
  const navigate = useNavigate();
  // ページ遷移時の情報を使用する
  const location = useLocation();
  // 変数stateの状態管理を使用し、ページ遷移時にstateを取得した結果で初期化する
  const [state, _] = useState(location.state);
  // 変数errorMessageの状態管理を使用する
  // const [errorMessage, setErrorMessage] = useState(null);

  // formItemsにフォームの部品リストを、フォーム情報の各要素から生成して代入する。
  const formItems = dataInfo.map(info => {

    // valにstateからフォーム情報のnameをキーとして取得した結果（stateがnullの場合はnull）を代入する。
    const val = state?.[info.name];

    // フォーム情報のtypeで場合分けを行う
    switch(info.type) {

      // typeが"hidden"の場合
      case "hidden":

        // 空要素を返す
        return <></>;

      // いずれでもない場合
      default:

        // 表示名にdisplayNameが設定されたlabelタグと名前にname、値にvalが設定されたinputタグを持つdivタグを返す。
        return (
          <div key={info.name} className="form-item">
            <label>{info.displayName}: </label>
            <span className="overflow">{val}</span>
          </div>
        );

    }

  });

  // フォーム送信時の処理を行う関数submitHandlerを定義する
  const submitHandler = (event) => {

    // 送信イベントのデフォルト送信を中断する
    event.preventDefault();
    
    // 引数のURLからPOSTメソッド、corsモードを用い、リクエストボディをstateをJson文字列に変換した結果として情報を送信する
    fetch(links.sendUrl, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    })
    // 情報が取得できた場合JSON形式のレスポンスボディをJavaScriptオブジェクトに変換する
    .then(response => response.json())
    // JavaScriptオブジェクトが得られた場合
    .then(json => {

      // オブジェクトjsonのstatusがOKの場合
      if(json.status === "OK") {

        // 成功時の遷移先URLに、stateとしてstateを登録して遷移する
        navigate(links.succeededUrl, { state: state });

      // そうでない場合
      } else {

        // 失敗時の遷移先URLに、stateとしてstateを登録して遷移する
        navigate(links.failedUrl, { state: state });

      }

    })
    // 例外が発生した場合失敗時の遷移先URLに遷移する
    .catch(_ => navigate(links.failedUrl));

  }
  
  // 表題、確認メッセージ、各項目と送信ボタンおよび戻るボタンのあるフォームを持つdivタグを返す。
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
