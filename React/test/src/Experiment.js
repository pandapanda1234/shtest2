
const numbers = [1,2,3,4,5];

const listItems = numbers.map((number) =>{
    return (
    <li>{number}</li>
    )
});

export default function Experiment(){
    return(
        <ul>{listItems}</ul>
    )
}

