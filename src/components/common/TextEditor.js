import React, {useCallback} from "react";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const TextEditor = ({setNewDescription}) => {

    const handleChange =useCallback( (e, editor) => {
        const data = editor.getData();
        setNewDescription(data)
    }, [setNewDescription]);
    return (
        <div style={{maxWidth: 500, marginTop: 20}}>
            <CKEditor
                editor={ClassicEditor}
                onChange={handleChange}
            />
        </div>
    )
};

export default TextEditor
