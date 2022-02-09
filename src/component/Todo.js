export function Todo(props){
    return (
        <div className='boxContanier'>
        <h2>{props.text}</h2>
        <button className='btn'> {props.type}</button>
      </div>
    )
}


