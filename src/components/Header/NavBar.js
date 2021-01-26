import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Modal from "../common/Modal";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Contacts from "../Pages/Contacts/Contacts";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
   &:hover li a button{
    transform: scale(1);
    opacity: .2;
    filter: blur(5px);   
}
   button{
    background: none;
    border: none;
    outline: none ;
   }
  li {
    list-style: none;
    transition: 0.5s;
     a, button {
     margin: 18px 10px;
     display: block;
     position: relative;
     padding: 18px 10px;
     text-decoration: none;
     font-size: 15px;
     font-family: sans-serif;
     color: #fff;
     transition: 0.5s;

    }
    a:hover, button:hover {
    transform: scale(1.2);
    opacity: 1;
    filter: blur(0);
    color: white;
    }

    a:before, button:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ed3c5e;
    transition: transform 0.5s;
    transform-origin: right;
    transform: scaleX(0);
    z-index: -1;
    }
  a:hover:before, button:hover:before {
    transition: transform 0.5s;
    transform-origin: right;
    transform: scaleX(1);
    }
   a.active, button.active {
    border-bottom:2px solid #ed3c5e;
    }
   }


  }
  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color:  rgba(0, 0, 0, 0.85);
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    &:hover li a button {
    transform: scale(1);
    opacity: 1;
    filter: blur(0);
}
    a.active, button.active {
    width: 100px;

}
  
  }
`;

const NavBar = ({open, setOpen}) => {

    const [emailForm, setEmailForm] = useState(false);
    const handleOpenEmailForm = useCallback(() => setEmailForm(true), []);
    const handleCloseModal = useCallback(() => setEmailForm(false), []);

    const [logInForm, setLogInForm] = useState(false);
    const handleOpenLogInForm = useCallback(() => setLogInForm(true), []);
    const handleCloseLogInForm = useCallback(() => setLogInForm(false), []);

    return (
            <Ul open={open} onClick={()=>setOpen(false)}>
                <li><NavLink exact to="/home">Home</NavLink></li>
                <li><NavLink exact to="/about">About</NavLink></li>
                <li><NavLink exact to="/models/1">3D Models</NavLink></li>
                <li><NavLink exact to="/team">Our Team</NavLink></li>
                <ContactsModal handleOpenEmailForm={handleOpenEmailForm}
                               emailForm={emailForm}
                               handleCloseModal={handleCloseModal}
                               setEmailForm={setEmailForm}
                />
                <LogInModal handleOpenLogInForm={handleOpenLogInForm}
                            logInForm={logInForm}
                            handleCloseLogInForm={handleCloseLogInForm}
                />
            </Ul>
    )
};

const ContactsModal = ({handleOpenEmailForm, emailForm, handleCloseModal, setEmailForm}) => (
    <li>
        <button onClick={handleOpenEmailForm}><MailOutlineIcon/></button>
        <Modal
            visible={emailForm}
            onClose={handleCloseModal}
        >
            <FormControl component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                    <Contacts setEmailForm={setEmailForm}/>
                </FormGroup>
            </FormControl>
        </Modal>
    </li>
);

const LogInModal = ({handleOpenLogInForm, logInForm, handleCloseLogInForm}) => (
    <li>
        <button onClick={handleOpenLogInForm}><AccountCircleIcon/></button>
        <Modal
            visible={logInForm}
            onClose={handleCloseLogInForm}
        >
            <FormControl component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                    <TextField
                        id="email"
                        label="E-Mail"
                        multiline
                        type="email"
                        fullWidth
                    />
                    <TextField
                        id="password"
                        label="Пароль"
                        multiline
                        type="password"
                        fullWidth
                    />
                    <Button
                        onClick={handleCloseLogInForm}
                        variant="contained"
                        fullWidth
                        style={{margin:'10px',  backgroundColor: '#f82249', color: "white"}}
                    >
                        Войти
                    </Button>
                </FormGroup>
            </FormControl>
        </Modal>
    </li>
);

export default NavBar
