import { useState } from 'react';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

const CocktailModal = ({cocktail}) => {
  const [cocktailDetails, setCocktailDetails] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (cocktail) => {
    setOpen(true);
    console.log(cocktail);
    setCocktailDetails(cocktail);
    console.log(cocktailDetails);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={() => handleOpen(cocktail)}>View Details</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            <p>{cocktailDetails.idDrink}</p>
            <p>{cocktailDetails.strDrink}</p>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default CocktailModal;



