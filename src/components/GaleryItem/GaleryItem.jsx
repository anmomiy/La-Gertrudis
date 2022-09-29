import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {useState} from 'react'
import './GaleryItem.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};




const GaleryItem = ({image}) => {
  AOS.init();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id="gallery"> 
      <Button className="galeryImg" onClick={handleOpen}><img src={`./${image}`} alt='imagen' data-aos="fade-up"/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box sx={style}>
          <AiOutlineCloseCircle onClick={handleClose}/>
          <img src={`./${image}`} alt='imagen' data-aos="fade-up"/>
        </Box>
      </Modal>
    </div>
  );
}
 export default GaleryItem;