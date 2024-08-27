import {useState,useEffect} from 'react'


function TimesComents(){
    const [time,setTime] = useState(new Date());

    useEffect(() =>{
        const timeID = setInterval(() =>{
            setTime(new Date());},1000);

            return () => clearInterval(timeID)
    },[]);

        const [comments,setMessage] = useState('');
        const [error,setError] = useState(null);

    useEffect(() => {
        const seconds = time.getSeconds();
    
        if(seconds % 10 === 0){

            const comments = async () =>{
                try{
                    const url =`http://localhost:8080/timesComments?seconds=${seconds}`;
                    const response = await fetch(url,{method:'GET'});
                
                if (!response.ok) {
                    throw new Error(`情報を取得できませんでした。（E:${response.status}）`);
                }
            
                const reserved = await response.json();
                setMessage(reserved.comments);
                setError(null);
                } catch (err) {
                setError(err.comments);
                setMessage('');
                }
            };

        comments();
        
        }
    },[time]);


    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');


    return(
        <>
        <div className="clock" >
            {hours}:{minutes}:{seconds}
        </div>

        <div className="inputValue">
          <p className="timesComments">{comments}</p>
         {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        
        </>

    )
};

export default TimesComents;