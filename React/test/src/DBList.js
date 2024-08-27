import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import './training.css'

function DBList({refresh}){
    const [DBdata,setDBdata] = useState([]);
    const [error,setError] = useState(null)
    
    useEffect(() => {
        const DBread = async () =>{
            try{
                const url=`http://localhost:8080/DBConnect/name_age_list`;
                const response = await fetch(url,{method:'GET'});

                if(!response.ok){
                    throw new Error(`情報を取得できませんでした。 (E:${response.status})`);
                }

                const result = await response.json();
                
                setDBdata(result);
                setError(null);
            }catch(err){
                setError(err);
                setDBdata('')
            }
        }

        DBread();

    },[refresh])


   
    const navigate = useNavigate();
    const Updatepage = (id,name,age) =>{
        navigate('/DBUpdate',{state:{id,name,age}});
    }

    

    const DBlist = DBdata.map((list,number)=>{
        return (
            
            <tr key={list.id}>
            <th>{list.id}</th>
            <th>{list.name}</th>
            <th>{list.age}</th>
            <th><button onClick={() =>Updatepage(list.id,list.name,list.age)}>更新</button></th>
            </tr>
            
        )
    })


    return(
        <>
        <div className='DBList'>
            <table >
                <tbody>
                <tr>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>AGE</td>
                    <td>Update</td>
                </tr>
                {DBlist}
                </tbody>
            </table>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        </>
    )
}

export default DBList;