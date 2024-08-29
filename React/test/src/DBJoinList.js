
//reactからuseState,useEffectをインポートし、使えるようにする
import {useState,useEffect} from 'react'

//引数にTFChangeを持つDBJoinList関数を宣言する
function DBJointList({TFChange}){

    //変数JoinListData,変数を更新する関数setJoinListDataを宣言し、変数の初期値に空の配列を設定する
    const [JoinListData,setJointListData] = useState([]);

    //変数error、変数を更新する関数setErrorを宣言し、変数の初期値に''(空文字)を設定する
    const [error,setError] = useState('');

    //[TFChange]のTFChangeが更新されるたびにuseEffect内の関数を実行する
    useEffect(()=>{

        //JoinList関数を宣言する
        const JoinList= ()=>{

            //変数urlに`http://localhost:8080/DBJoin/JoinList`を代入する
            const url = `http://localhost:8080/DBJoin/JoinList`;

            //変数url宛にfetchを行う
            fetch(url)
                //レスポンスを変数resに格納後、resをjson形式に変換する
                .then((res) => res.json())
                //json形式変換後のレスポンスを変数jsonに格納後、setJoinListData関数を実行する
                .then((json) => setJointListData(json))
                //エラーが発生した時に実行される
                .catch((err) => {
                    //引数"error"からalert関数を実行する
                    alert("error")
                    //引数errからsetError関数を実行する
                    setError(err)
                })
                
                 
        }

        //JoinList関数を実行する
        JoinList();
    },[TFChange])


    //変数JoinListMapに、JoinListData(配列)の要素を変数listとし、引数listから実行したアロー関数の結果を代入する
    const JoinListMap = JoinListData.map((list)=>{
        return(
            //各要素が一意にであることを示すため、keyに各要素のidを設定する
            <tr key={list.id}>
                
                {/* listのid,name,age,hobby,skillを表示する */}
                <th>{list.id}</th>
                <th>{list.name}</th>
                <th>{list.age}</th>
                <th>{list.hobby}</th>
                <th>{list.skill}</th>
            </tr>
        )
    })


    return(
        <>
        <div className='DBJoinList'>

            {/* JoinListMapを表示するためのテーブル */}
            <table>
                {/* 複数の<tr>をグループ化する */}
                <tbody>
                    <tr>
                        
                        {/* カラム名の表示 */}
                        <td>ID</td>
                        <td>NAME</td>
                        <td>AGE</td>
                        <td>HOBBY</td>
                        <td>SKILL</td>
                        
                    </tr>

                    {/* JpinListMapの表示 */}
                    {JoinListMap}
                </tbody>
            </table>

            {/* errorが空ではないなら変数error内の値を表示する */}
            {error && <p style={{color:'red'}}>{error}</p>}
        </div>
        </>
    )
}

//DBJoinList関数を主要コンポーネント(DBJoinList.jsの代表コンポーネント)としてエクスポートする
export default  DBJointList;