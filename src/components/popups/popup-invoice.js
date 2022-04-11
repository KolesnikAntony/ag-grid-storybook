import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ButtonView from '../buttons/button-view';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  border: 'none',
  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
};

export default function PopupInvoice(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data } = props;
  console.log(data);
  return (
    <>
      <ButtonView {...props} handleOpen={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            ID: {data.number}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Client: {data.client}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Debtor: {data.guarantor}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Guarantor: {data.guarantor}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
