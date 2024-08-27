import {useState,useEffect} from 'react'
import './training.css'

const CountButton= () =>{
    const [count,setCount] = useState(0);
    const [Message,setMessage] = useState('')

    useEffect(()=>{
        setMessage(`カウント：${count}`)
    },[count]);

    return(
        <>
            
            <p>{Message}</p>
            <button onClick={()=>setCount(count+1)} >ボタン</button>
            <button onClick={()=>setCount(0)}>リセット</button>
            
        </>
    );

};

export default CountButton
