import { useNavigate,useLocation } from "react-router-dom";
import {useState} from 'react';

const DBUpdate=()=>{
    const location = useLocation();
    const {id,name,age} = location.state || {};

    const [UpdateName,setUpdateName] = useState(name);
    const [UpdateAge,setUpdateAge] = useState(age);
    const [message,setMessage] = useState('');

    const UpdateNameChange=(event)=>{
        setUpdateName(event.target.value)
    }
    const UpdateAgeChange=(event)=>{
        setUpdateAge(event.target.value)
    }

    const UpdateState= async(event) =>{
        event.preventDefault(); // デフォルトのフォーム送信を防ぐ

        const UpdateList = {id:id,name:UpdateName,age:UpdateAge}

        const url = `http://localhost:8080/DBConnect/UpdateList`;

        try{
            const response = await fetch(url,{
                method:'POST',
                
                headers:{
                    'content-Type':'application/json',
                },

                body: JSON.stringify(UpdateList)
            });
        
            if (response.ok){
                const result = await response.text();
                setMessage(result);
                console.log('success:',result);
                
            }else{
                console.error('Error:',response.statusText)
            }
            }catch(error){
                console.error('Error:',error)
            }

    };


    const navigate = useNavigate();
    const returnButton =()=>{
        navigate('/DB');
    }


    return(
        <div className="DBUpdateMenu">
            <h1>Update Page</h1>
            <form onSubmit={UpdateState}>
                {message && <p style={{colir:'blue'}}>{message}</p>}
            <table>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                    </tr>                   
                    <tr>
                        <td>{id}</td>
                        <td><input name="name" placeholder={UpdateName} onChange={UpdateNameChange}/></td>
                        <td><input name="age" placeholder={UpdateAge} onChange={UpdateAgeChange}/></td>

                    </tr>
                </tbody>
            </table>
            <button  type='submit' >update</button>
            </form>
            
            <button onClick={()=>returnButton()}>戻る</button>
            

        </div>
    );
}

export default DBUpdate;