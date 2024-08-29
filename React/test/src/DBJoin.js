
//DBJoinList.jsからDBJoinListコンポーネントをインポートする
import DBJointList from "./DBJoinList"

//DBJoinInsert.jsからDBJoinListInsertコンポーネントをインポートする
import DBJoinInsert from "./DBJoinInsert";

//reactからuseStateをインポートし、使えるようにする
import {useState} from 'react';

//DBJoin関数を宣言する
function DBJoin(){

    //変数TFChange、変数を更新する関数setTFChangeを宣言し、変数の初期値にfalseを設定する
    const [TFChange,setTFChange] = useState(false)

    //handleTFChange関数を宣言する
    const handleTFChange = () =>{

        //1000ms後にsetTimeout内の処理を実行する
        setTimeout(async ()=>{

            //引数に現在の状態を反転させた値を用いてsetTFChange関数を実行する
            setTFChange(prev => !prev);
        },1000)
        
    }

    //return内の処理を返す(主に画面上に表示されるhtml文)
    return(

        <>
            {/* DBJoinInsertコンポーネント内の引数UpdateにhandleTFChange関数を渡す(Props:別コンポーネントにデータを渡す) */}
            <DBJoinInsert Update={handleTFChange}/>
            {/* DBJoinListコンポーネント内の引数TFChangeにTFChangeを渡す(Props) */}
            <DBJointList TFChange={TFChange}/>
        </>
    )
}

//DBJoin関数を主要コンポーネント(DBJoin.jsの代表コンポーネント)としてエクスポートする
export default DBJoin;