import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ name, email }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      width={"50%"}
      margin={"auto"}
      padding={"1rem"}
    >
      <Button
        variant="contained"
        color="success"
        style={{ marginTop: "2rem" }}
        onClick={handleOpen}
      >
        Enviar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Gracias por comunicarse con nosotros "{`${name}`}"
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Nos pondremos en contacto con usted lo antes posible a tu corero "{" "}
            {`${email}`}".
          </Typography>
          <Button component={Link} to="/" variant="contained" color="error">
            Volver
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}
