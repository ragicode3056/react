export const Modal = (props) => {
    function cancelHandler() {
        return props.onCancel()
    }
    function confirmHandler() {
        props.onConfirm()
    }
    return (
        <div className='boxContanier-modal'>
            <p>Are you sure want to deleted</p>
            <div className="btn-div">
                <button className='btn-cancel' onClick={cancelHandler}> Cancel</button>
                <button className='btn' onClick={confirmHandler}>Confirm</button>
            </div>
        </div>
    )
}

