import {useState} from 'react';



function DBInsert({onUpdate}){

    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [ErrorMessage,setErrorMessage] = useState('');

    const nameChange = (event)=>{
        setName(event.target.value);
    }

    const ageChange = (event) =>{
        setAge(event.target.value);
    }

    //form情報のPOST
    const InsertList = async (event)=>{
        event.preventDefault(); // デフォルトのフォーム送信を防ぐ

        
        //const AddList = [{"name":name , "age":age}];
        const AddList ={name:name,age:age}

        const url = `http://localhost:8080/DBConnect/InsertList`;

        try{
        const response = await fetch(url,{
            method:'POST', 
            //HTTPリクエストのメソッド
            headers:{ 'content-Type': 'application/json',
            },
            //サーバーへ送るファイルはJSONファイルであることを宣言
            body: JSON.stringify(AddList)
            //送るデータをJSON形式に変換する
        });

        onUpdate();

        if (response.ok){
            const result = await response.text();
            if(result === "Error"){
                setErrorMessage(result)
            }else{
                setErrorMessage('')
            }

            console.log('success:',result);
            
        }else{
            console.error('Error:',response.statusText)
        }
        }catch(error){
            console.error('Error:',error)
        }
    };
    
    
    return(
        <div className="DBInsert">
            { ErrorMessage && <p style={{color: 'red'}}>{ErrorMessage}</p>}
            <form onSubmit={InsertList}>
                Name:<input name="name" value={name} onChange={nameChange}/><br />
                Age:<input name="age" value={age} onChange={ageChange}/> <br />
                <button type="submit">追加</button>
            </form>
        </div>
    )
}

export default DBInsert;