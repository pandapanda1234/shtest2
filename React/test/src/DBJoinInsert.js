import {useState} from 'react';


function DBJoinInsert({Update}){

    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [hobby,setHobby] = useState('');
    const [skill,setSkill] = useState('');

    const [message,setMessage] = useState('');

    const nameChange=(event)=>{
        setName(event.target.value);
    }

    const ageChange=(event)=>{
        setAge(event.target.value);
    }

    const hobbyChange=(event)=>{
        setHobby(event.target.value);
    }

    const skillChange=(event)=>{
        setSkill(event.target.value);
    }

    

    
    const JoinInsertList = (event)=>{
        event.preventDefault();// デフォルトのフォーム送信を防ぐ

        const AddJoinList = {name:name,age:age,hobby:hobby,skill:skill}
        const url = `http://localhost:8080/DBJoin/JoinListInsert`


        fetch(url,{
            method:'POST',
            headers:{'content-Type':'application/json',},
            body:JSON.stringify(AddJoinList)
        })
        .then((res) => res.text())
        .then((text) => {
            if(text === "Error"){
                setMessage(text);
            }else{
                setMessage('');
            }
        })
        .catch(() => alert("error"))

        Update();

    }


    
    
    return(
        <>
        <div className='DBJoinInsert'>
            <div className='DBJoinInsert2'>
            { message && <p style={{color: 'red'}}>{message}</p>}
            <form onSubmit={JoinInsertList}>
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

export default DBJoinInsert;