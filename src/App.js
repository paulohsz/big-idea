import React, { useState } from 'react';
import {
  Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import Header from './component/home/Header';
import Tip from './component/home/Tip';
import RegisterNewsletter from './component/home/RegisterNewsletter';
import Footer from './component/home/Footer';

function App() {
  const [open, setOpen] = useState(false);
  const [textModal, setTextModal] = useState({
    title: '',
    description: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTextModal({
      title: '',
      description: '',
    });
  };

  const submitRegister = (email) => {
    setTextModal({
      title: 'Obrigado por se registrar em nossa plataforma',
      description: 'Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry....',
    });
    handleClickOpen();
    // eslint-disable-next-line no-console
    console.log('Register email: ', email); // not forget to clen this line, tratar email empty
    return ''; // Clean email value
  };

  const onSubNews = (email) => {
    setTextModal({
      title: 'Agora é só aguardar para receber as novidades no e-mail ',
      description: 'Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry....',
    });
    handleClickOpen();
    // eslint-disable-next-line no-console
    console.log('Newsletter email: ', email); // not forget to clen this line, tratar email empty
    return ''; // Clean email value
  };

  return (
    <>
      <Header submitRegister={submitRegister} />
      <Tip />
      <RegisterNewsletter onSubNews={onSubNews} />
      <Footer />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">{textModal.title}</DialogTitle>
        {textModal.description && (
        <DialogContent>
          <DialogContentText id="dialog-description">{textModal.description}</DialogContentText>
        </DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
