import { Typography, Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from 'react';
import { FormProducts } from "./FormProducts";


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Props {
    open: boolean
    handleClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void
}

export const ModalProducts:FC<Props> = ({ open, handleClose  }) => {
  return (
    <div>
      <Button >Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Agregar un producto
          </Typography>
          <FormProducts />
          
        </Box>
      </Modal>
    </div>
  );
}
