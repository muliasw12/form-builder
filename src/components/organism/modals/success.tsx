import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";

interface ModalSuccessProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  description: string;
  title?: string;
}

export const ModalSuccess: FC<ModalSuccessProps> = ({
  open,
  onClose,
  onConfirm,
  description,
  title = "Yeay!",
  ...props
}) => {
  const handleButtonClick = () => {
    onConfirm(); // Only call `onConfirm` once.
    onClose(); // Close the modal after confirmation.
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "350px",
          },
          "& .MuiDialog-paper": {
            borderRadius: "10px",
          },
        },
      }}
      {...props}
    >
      <DialogTitle id="alert-dialog-title">
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <img src="/assets/thumb-dialog-success.svg" alt="Success" />
        <div className="text-lg font-extrabold justify-self-center">{title}</div>
        <div className="text-center mt-4">{description}</div>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "center",
          columnGap: "0.5rem",
          padding: "0 1.5rem 1.5rem",
        }}
      >
        <Button
          sx={{ padding: "8px 0" }}
          color="primary"
          onClick={handleButtonClick}
          autoFocus
        >
          Oke
        </Button>
      </DialogActions>
    </Dialog>
  );
};