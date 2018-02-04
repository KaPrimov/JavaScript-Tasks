import React from 'react';
import '../../style/submit.css'

const CreatePostFrom = ({ onChangeHandler, onSubmitHandler, url, title, image, description }) => {
    if (sessionStorage.getItem('username')) {
        return (
            <form id="editPostForm" className="submitForm" onSubmit={onSubmitHandler}>
                <label>Link URL:</label>
                <input name="url" value={url} type="text" onChange={onChangeHandler} />
                <label>Link Title:</label>
                <input name="title" value={title} type="text" onChange={onChangeHandler} />
                <label>Link Thumbnail Image (optional):</label>
                <input name="image" value={image} type="text" onChange={onChangeHandler} />
                <label>Comment (optional):</label>
                <textarea name="description" onChange={onChangeHandler}>{description}</textarea>
                <input id="btnSubmitPost" value="Submit" type="submit" />
            </form>
        );
    } else {
        return <h2>Please Login to see the content!!!</h2>
    }
}

export default CreatePostFrom
