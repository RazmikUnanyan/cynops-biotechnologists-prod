import React, {useCallback, useState} from "react";
import {Formik} from "formik";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import TextEditor from "../../../common/TextEditor";
import {useDispatch} from "react-redux";
import {addHomeNews} from "../../../../state/homeReducer";

const initialState = {
    imgUrl: "",
    videoUrl: "",
    twitter: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    titleHeader: "",
    detailsHeading: "",
    titleAuthor: "",
};

const FormNews = ({updateHomeHeader}) => {
    const dispath = useDispatch();
    const [newDescription, setNewDescription] = useState('');
    const handleChangeHeading = useCallback(data => {
        dispath(addHomeNews({...data, description: newDescription}));
    }, [dispath, newDescription]);
    return (

        <>
            <Formik initialValues={initialState} onSubmit={handleChangeHeading}>
                {({handleSubmit, handleChange}) => {
                    return (
                        <form onSubmit={handleSubmit} style={{backgroundColor: 'white', padding: '10px 40px'}}>
                            <TextField name={"imgUrl"}
                                       type="text"
                                       label="imgURL"
                                       onChange={handleChange}
                                       fullWidth
                                       defaultValue=""
                            />
                            <TextField name={"videoUrl"}
                                       label="videoUrl"
                                       type="text"
                                       onChange={handleChange}
                                       fullWidth
                                       defaultValue=""
                            />
                            <TextField name={"titleHeader"}
                                       type="text"
                                       label="Заголовок"
                                       onChange={handleChange}
                                       fullWidth
                                       defaultValue=""
                            />
                            <TextField name={"detailsHeading"}
                                       label="Оглавление"
                                       type="text"
                                       defaultValue=""
                                       onChange={handleChange}
                                       fullWidth
                            />

                            <TextField name={"twitter"}
                                       label="twitter"
                                       type="text"
                                       defaultValue=""
                                       onChange={handleChange}
                                       fullWidth
                            />
                            <TextField name={"facebook"}
                                       type="text"
                                       label="facebook"
                                       onChange={handleChange}
                                       fullWidth
                                       defaultValue=""
                            />
                            <TextField name={"instagram"}
                                       label="instagram"
                                       type="text"
                                       onChange={handleChange}
                                       fullWidth
                                       defaultValue=""
                            />
                            <TextField name={"linkedin"}
                                       label="linkedin"
                                       type="text"
                                       defaultValue=""
                                       onChange={handleChange}
                                       fullWidth
                            />
                            <TextField name={"titleAuthor"}
                                       label="Автор"
                                       type="text"
                                       onChange={handleChange}
                                       fullWidth
                                       defaultValue=""
                            />
                            {/*<TextField name={"description"}*/}
                            {/*           multiline*/}
                            {/*           style={{marginTop: "20px"}}*/}
                            {/*           fullWidth*/}
                            {/*           variant="outlined"*/}
                            {/*           label="Текст статьи"*/}
                            {/*           onChange={handleChange}*/}
                            {/*/>*/}
                            <TextEditor
                                setNewDescription={setNewDescription}
                            />
                            <Button
                                style={{margin: '20px 0'}}
                                variant="contained"
                                size="small"
                                endIcon={<Icon>send</Icon>}
                                type="submit"
                            >
                            </Button>
                        </form>
                    )
                }}
            </Formik>
        </>)
};

export default FormNews;
