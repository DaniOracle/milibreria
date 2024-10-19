import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/system';

export interface DanielPNProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string[];
  titleSx?: SxProps;
  contentSx?: SxProps;
  dialogSx?: SxProps;
  width?: string; 
  height?: string; 
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const DanielPN: React.FC<DanielPNProps> = ({
  open,
  onClose,
  title,
  content,
  titleSx,
  contentSx,
  dialogSx,
  width = '600px',
  height = 'auto',  
}) => {
  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{
        ...dialogSx,
        '& .MuiDialog-paper': {
          width: width, 
          height: height, 
          maxWidth: '90%', 
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, ...titleSx }} id="customized-dialog-title">
        {title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={contentSx}>
        {content.map((paragraph, index) => (
          <Typography gutterBottom key={index}>
            {paragraph}
          </Typography>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default DanielPN;
