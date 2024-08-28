import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { ResultDisplay } from "./Components";

// 人物一覧画面を返す関数
export function NameAges() {

  // ページ遷移機能を使用する
  const navigate = useNavigate();
  // 変数nameAgesの状態管理を使用する
  const [nameAges, setNameAges] = useState([]);

  // ページ読み込み時に関数を実行する
  useEffect(() => {

    // サーバーから情報を取得する関数fetchDataを定義する
    const fetchData = () => {
      // 引数のURLからGETメソッド、corsモードで情報を取得する
      fetch("http://localhost:8080/name-age2", {
        method: "GET",
        mode: "cors"
      })
      // 情報が取得できた場合
      .then(response => {

        // レスポンスのステータスがOKの場合
        if (response.ok) {

          // JSON形式のレスポンスボディをJavaScriptオブジェクトに変換する
          return response.json();

        // そうでない場合
        } else {

          // レスポンスを引数としてエラーを初期化して出す
          throw new Error(response);

        }

      })
      // JavaScriptオブジェクトが得られた場合
      .then(json => {

        // 状態nameAgeにオブジェクトをセットする
        setNameAges(json);

      })
      // 例外が発生した場合
      .catch(reason => {

        // コンソールに例外の原因を出力する
        console.error(reason);

      });
    };

    // 関数fetchDataを30000ミリ秒間隔で実行するインターバルを登録する
    const intervalFetch = setInterval(fetchData, 30000);

    // 関数fetchDataを実行する
    fetchData();

    // intervalFetchのインターバルを削除する処理を後処理関数として返却する
    return () => clearInterval(intervalFetch);

  }, []);

  // nameAgeListに変数nameAgesの各keyに対応する要素を以下の関数で変換した結果を代入する。
  const nameAgeList = Object.keys(nameAges).map((key) => {

    // nameAgeに変数nameAgesのkeyに対応する要素を代入する。
    const nameAge = nameAges[key];

    // 名前、年齢、趣味、スキルを表示し、クリック時に詳細ページへ遷移する機能を付けたdivタグを返す。
    return(
      <div className="box hover-color" key={nameAge.id} id={nameAge.id} onClick={() => navigate(`/name-age/detail?name=${nameAge.name}`)}>
        <p className="title-bar text-content">
          <span className="message-title">名前: {nameAge.name}</span>
          <span className="message-user">年齢: {nameAge.age}</span>
        </p>
        <p className="text-content">
          <span className="message-user">趣味: </span><span className="message-text">{nameAge.hobby}</span>
        </p>
        <p className="text-content">
          <span className="message-user">スキル: </span><span className="message-text">{nameAge.skill}</span>
        </p>
      </div>
    );
  });

  // 表題とnameAgeListを入れたdivタグを返す。
  return (
    <div className="App">
      <h1>人物一覧</h1>
      {nameAgeList}
    </div>
  );
}

export function NameAgeDetail() {

  // ページ遷移機能を使用する
  const navigate = useNavigate();
  // 変数nameAgeの状態管理を使用する
  const [nameAge, setNameAge] = useState([]);
  // 変数deletedの状態管理を使用する
  const [deleted, setDeleted] = useState(false);
  // URLパラメータを使用する
  const [params, _] = useSearchParams();

  // ページ読み込み時に関数を実行する
  useEffect(() => {

    // 引数のURLからGETメソッド、corsモードで情報を取得する
    fetch(`http://localhost:8080/name-age2/detail?name=${params.get("name")}`, {
      method: "GET",
      mode: "cors"
    })
    // 情報が取得できた場合
    .then(response => {

      // レスポンスのステータスがOKでない場合
      if(!response.ok) {

        // 状態deletedに真偽値trueをセットする
        setDeleted(true);

      }

      // JSON形式のレスポンスボディをJavaScriptオブジェクトに変換する
      return response.json();

    })
    // JavaScriptオブジェクトが得られた場合
    .then(json => {

      // オブジェクトjsonのstatusがOKの場合
      if(json.status === "OK") {

        // オブジェクトjsonのcontentを取得する
        return json.content;

      // そうでない場合
      } else {

        // オブジェクトjsonのmessageを引数としてエラーを初期化して出す
        throw new Error(json.message);

      }

    })
    // 人物情報が得られた場合
    .then(nameAge => {

      // 状態nameAgeにオブジェクトをセットする
      setNameAge(nameAge);

      // コンソールにメッセージを出力する
      // console.log("Fetch succeeded.");

    })
    // 例外が発生した場合
    .catch(reason => {

      // コンソールに例外の原因を出力する
      console.error(reason);

    });
  }, []);

  // 状態deletedがtrueならば
  if(deleted) {

    // 人物取得失敗画面を返す
    return <GetNameAgeDetailFailed />;

  // そうでない場合
  } else {

    // ページに表示するdivタグを返す。
    return (
      <div className="App">
        {/* 表題 */}
        <h1>人物詳細</h1>
        {/* それぞれ修正・削除画面に遷移するボタン */}
        <div className="form-full right" >
          <button type="button" onClick={() => navigate("/name-age/update", { state: nameAge })}>修正</button>
          <button type="button" onClick={() => navigate("/name-age/delete", { state: nameAge })}>削除</button>
        </div>
        {/* 名前、年齢、趣味、スキルを表示するdivタグ */}
        <div className="box" key={nameAge.id} id={nameAge.id} >
          <p className="title-bar text-content">
            <span className="message-title">名前: {nameAge.name}</span>
            <span className="message-user">年齢: {nameAge.age}</span>
          </p>
          <p className="text-content">
            <span className="message-user">趣味: </span><span className="message-text">{nameAge.hobby}</span>
          </p>
          <p className="text-content">
            <span className="message-user">スキル: </span><span className="message-text">{nameAge.skill}</span>
          </p>
        </div>
      </div>
    );
  }
}

// 人物取得失敗画面を返す関数
function GetNameAgeDetailFailed() {
  // 表題・表示色・メッセージを与えて人物取得失敗画面を生成した結果を返却する。
  return <ResultDisplay header="人物取得失敗" className="red" message="人物の取得に失敗した、もしくは削除されています。" />;
}