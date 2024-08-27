import DBJointList from "./DBJoinList"
import DBJoinInsert from "./DBJoinInsert";
import {useState} from 'react';

function DBJoin(){
    const [TFChange,setTFChange] = useState(false)

    const handleTFChange = () =>{
        setTimeout(async ()=>{
            setTFChange(prev => !prev);
        },1000)
        
    }

    return(
        <>
            <DBJoinInsert Update={handleTFChange}/>
            <DBJointList TFChange={TFChange}/>
        </>
    )
}
export default DBJoin;