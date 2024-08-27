//import React , { useState, useEffect } from "react";
//import axios from 'axios'; // axiosはHTTPリクエストを簡単に扱えるライブラリです。
import './training.css';





function Elements({passedVariable}){
    
    /*
        const [data, setTextdefaultValue] = useState(''); // テキストボックスの初期値を管理するための状態変数
      
        useEffect(() => {
          // コンポーネントがマウントされたときにデータを取得する
          const fetchData = async () => {
            try {
              const response = await axios.get('http://localhost:8080/React_otameshi/omuraisu/'); // サーバーからデータを取得する
              setTextdefaultValue(response.data); // レスポンスデータをテキストボックスの初期値に設定
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
        }, []); // 空の依存配列を指定すると、コンポーネントがマウントされたときにのみ実行されます
    */

    return(

        <div className="Elements">
            <p>
            <input type="text" name="name" defaultValue={passedVariable}/>:テキストボックス
            </p>

            <p>
            <label htmlFor="A">A</label>
            <input type="radio" id="A" name="botan" defaultValue="A"  />
            
            <label htmlFor="B">B</label>
            <input type="radio" id="B" name="botan" defaultValue="B"  />

            :ラジオボタン
            </p>

            <p>
            <input type="checkbox" id="B" name="B" defaultValue="B"  />
            <input type="checkbox" id="B" name="B" defaultValue="B"  />
            <input type="checkbox" id="B" name="B" defaultValue="B"  />

            :チェックボックス
            </p>

            <p>
            <select name="example">
            <option>ドックフード</option>
            <option>キャットフード</option>
            <option>魚</option>
            </select>
            </p>

            

        </div>

    );
};

export default Elements;