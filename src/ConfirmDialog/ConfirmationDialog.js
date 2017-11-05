import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog';
import {LinearProgress} from 'material-ui/Progress';
import PropTypes from 'prop-types';

/**
 * Renderiza un modal para confirmación de acción.
 *
 * @param {Object} props - Los props del componente
 * @return {Component}
 */
const ConfirmationDialog = props => {
  return (
    <div>
      <Dialog open={props.open} onRequestClose={props.onCancel}>
        {props.loading ? <LinearProgress /> : null}
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.text}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onCancel}>{props.cancelText}</Button>
          <Button onClick={props.onConfirm} color="primary" autoFocus disabled={props.loading}>
            {props.confirmText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.text.isRequired,
  cancelText: PropTypes.text.isRequired,
  onConfirm: PropTypes.func.isRequired,
  confirmText: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default ConfirmationDialog;
