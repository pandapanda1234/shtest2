import DBList from "./DBList";
import DBInsert from "./DBInsert";
import {useState} from 'react';


function DB(){
    const [refresh,setRefresh] = useState(false)

    const handleUpdate = () =>{
        setRefresh(prev => !prev);
    }
   

    return(
        <>
        <DBInsert onUpdate={handleUpdate}/>
        <DBList refresh={refresh}/>   
        </>
    )
}

export default DB