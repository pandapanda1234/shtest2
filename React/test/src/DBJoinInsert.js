
//reactからuseStateをインポートし、使えるようにする
import {useState} from 'react';

//引数Updateを持つDBJoinInsert関数を宣言する
function DBJoinInsert({Update}){

    //変数name、変数を更新する関数setNameを宣言し、変数の初期値に''(空文字)を設定する
    const [name,setName] = useState('');

    //変数age、変数を更新する関数setAgeを宣言し、変数の初期値に''(空文字)を設定する
    const [age,setAge] = useState('');

    //変数hobby、変数を更新する関数setHobbyを宣言し、変数の初期値に''(空文字)を設定する
    const [hobby,setHobby] = useState('');

    //変数skill、変数を更新する関数setSkillを宣言し、変数の初期値に''(空文字)を設定する
    const [skill,setSkill] = useState('');

    //変数message、変数を更新する関数setMessageを宣言し、変数の初期値に''(空文字)を設定する  
    const [message,setMessage] = useState('');

    //引数eventを持つnameChange関数を宣言する
    const nameChange=(event)=>{

        //引数event.target.valueからsetName関数を実行する
        setName(event.target.value);
    }

    //引数eventを持つageChange関数を宣言する
    const ageChange=(event)=>{

        //引数event.target.valueからsetAge関数を実行する
        setAge(event.target.value);
    }

    //引数eventを持つhobbyChange関数を宣言する
    const hobbyChange=(event)=>{

        //引数event.target.valueからsetHobby関数を実行する
        setHobby(event.target.value);
    }

    //引数eventを持つskillChange関数を宣言する
    const skillChange=(event)=>{

        //引数event.target.valueからsetSkill関数を実行する
        setSkill(event.target.value);
    }

    

    //引数eventを持つJoinInsertList関数を宣言する
    const JoinInsertList = (event)=>{

        // デフォルトのフォーム送信を防ぐ←fetchでの操作をしたいから
        event.preventDefault();

        //変数AddJoinListに、{name:name,age:age,hobby:hobby,skill:skill}を代入する
        const AddJoinList = {name:name,age:age,hobby:hobby,skill:skill}

        //変数urlに`http://localhost:8080/DBJoin/JoinListInsert`を代入する
        const url = `http://localhost:8080/DBJoin/JoinListInsert`

        //変数url宛にfetchを行う
        fetch(url,{

            //リクエストの種類をPOSTにする
            method:'POST',

            //json形式のデータのヘッダー←json形式でデータを送ると宣言する
            headers:{'content-Type':'application/json',},

            //引数AddJoinListをJSONのstringifyメソッドでJSON文字列に変換する←リクエストボディに設定する
            body:JSON.stringify(AddJoinList)
        })

        //レスポンスを変数resに格納後、resをtext形式に変換する
        .then((res) => res.text())
        //txt形式変換後のレスポンスを変数textに格納後、アロー関数を実行する
        .then((text) => {

            //もしtextが"Error"なら実行する
            if(text === "Error"){

                //引数textからsetMessage関数を実行する
                setMessage(text);

            //上記でないなら実行する
            }else{

                //引数''(空文字)からsetMessage関数を実行する
                setMessage('');
            }
        })

        //エラーが発生したら引数"error"からalert関数を実行する
        .catch(() => alert("error"))

        //Update関数を実行する←DBJoinコンポーネントからPropsされた関数
        Update();

    }


    
    
    return(
        <>
        <div className='DBJoinInsert'>
            <div className='DBJoinInsert2'>

            {/* Messageが空ではないなら変数Message内の値を表示する */}
            { message && <p style={{color: 'red'}}>{message}</p>}

            {/* ボタンが押された時にonSubmit内の関数が実行される */}
            <form onSubmit={JoinInsertList}>

                {/* input内の値が変更されるときにonChangeの関数を実行する */}
                Name:<input name="name" value={name} onChange={nameChange}/><br/>
                Age:<input name="age" value={age} onChange={ageChange}/><br/>
                Hobby:<input name="hobby" value={hobby} onChange={hobbyChange}/><br/>
                Skill:<input name="skill" value={skill} onChange={skillChange}/><br/>
                <button type="submit">追加</button>
            </form>
            </div>
        </div>
        </>
    )

}

//DBJoinInsert関数を主要コンポーネント(DBJoinInsert.jsの代表コンポーネント)としてエクスポートする
export default DBJoinInsert;