import React from 'react';

const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            Here you can edit {props.match.params.id}
        </div>
    )
}

export default EditExpensePage;