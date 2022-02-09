export function Todo(props) {
  const deleteHandler = () => {
    console.log("delete clicked");
  }
  return (
    <div className='boxContanier'>
      <h2>{props.text}</h2>
      <button className='btn' onClick={deleteHandler}> Delete</button>
    </div>
  )
}


