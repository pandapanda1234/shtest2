import CountButton from "./CountButton";
import Game from "./sanmoku";
import './training.css'

function NextPage(){
    return(
        <>
        <div>
            <h1>ページ遷移完了</h1>
        </div>
        <div className="CountButton">
            <CountButton />
        </div>
        <div className="sanmoku" >
            <Game />
        </div>
        </>
    );
};

export default NextPage;