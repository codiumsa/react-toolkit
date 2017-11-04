/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { LinearProgress } from 'material-ui/Progress';

const ConfirmationDialog = props => {
  return (
    <div>
      <Dialog open={props.open} onRequestClose={props.onCancel}>
        {props.loading ? <LinearProgress /> : null}
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onCancel} >
            {props.cancelText}
          </Button>
          <Button onClick={props.onConfirm} color="primary" autoFocus disabled={props.loading}>
            {props.confirmText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmationDialog;