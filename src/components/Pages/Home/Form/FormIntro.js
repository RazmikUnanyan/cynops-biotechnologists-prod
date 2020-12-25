import React, { useCallback } from "react";
import ReactHtmlParser from 'react-html-parser';
import { Formik} from "formik";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";




const FormIntro = ({state, updateHomeHeader}) => {

 const handleChangeHeading = useCallback(data => {
     updateHomeHeader(data);
 }, [updateHomeHeader]);

    return (
        <Formik initialValues={state} onSubmit={handleChangeHeading}>
            {({handleSubmit, handleChange}) =>{
                return(
                    <form onSubmit={handleSubmit} style={{backgroundColor:'white', padding: '10px 40px'}}>
                        <TextField name={"title"}
                                   type="text"
                                   label="Заголовок"
                                   onChange={handleChange}
                                   fullWidth
                                   defaultValue={ReactHtmlParser(state.title)}
                        />
                        <TextField name={"description"}
                                   label="Описание"
                                   type="text"
                                   onChange={handleChange}
                                   fullWidth
                                   defaultValue={state.description}
                        />
                        <TextField name={"videoUrl"}
                                   label="URL для видео"
                                   type="text"
                                   defaultValue={state.videoUrl}
                                   onChange={handleChange}
                                   fullWidth
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
    )
};

export default FormIntro;
