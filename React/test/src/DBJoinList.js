import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


function DBJointList({TFChange}){

    const [JoinListData,setJointListData] = useState([]);
    const [error,setError] = useState('');

    useEffect(()=>{
        const JoinList= async()=>{
            const url = `http://localhost:8080/DBJoin/JoinList`;

            await fetch(url)
                .then((res) => res.json())
                .then((json) => setJointListData(json))
                .catch(() => alert("error"))
                .catch(() => setError)
                 
        }
        JoinList();
    },[TFChange])


    const navigate= useNavigate();
    const Updatepage = (name) =>{
        navigate('/DBJoinUpdate',{state:{name}});
    }

    
   
    

    const JoinListMap = JoinListData.map((list,number)=>{
        return(
            <tr key={list.id}>
                <th>{list.id}</th>
                <th>{list.name}</th>
                <th>{list.age}</th>
                <th>{list.hobby}</th>
                <th>{list.skill}</th>
                <th><button onClick={() =>Updatepage(list.name)}>更新</button></th>
            </tr>
        )
    })





    return(
        <>
        <div className='DBJoinList'>
            <table>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>AGE</td>
                        <td>HOBBY</td>
                        <td>SKILL</td>
                        <td>Update</td>
                    </tr>
                    {JoinListMap}
                </tbody>
            </table>
            {error && <p style={{color:'red'}}>{error}</p>}
        </div>
        </>
    )
}

export default  DBJointList;