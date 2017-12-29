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
  /**
   * Indica si el modal se debe mostrar o no.
   */
  open: PropTypes.bool.isRequired,

  /**
   * Función invocada cuando se hace click en el botón cancelar.
   */
  onCancel: PropTypes.func.isRequired,

  /**
   * El título del modal.
   */
  title: PropTypes.string.isRequired,

  /**
   * El texto principal del modal.
   */
  text: PropTypes.string.isRequired,

  /**
   * Label para el botón cancelar.
   */
  cancelText: PropTypes.string.isRequired,

  /**
   * Función invocada al hacer click en el botón ok.
   */
  onConfirm: PropTypes.func.isRequired,

  /**
   * Label para el botón ok.
   */
  confirmText: PropTypes.string.isRequired,

  /**
   * Indica si se debe mostrar o no una animación de loading.
   */
  loading: PropTypes.bool.isRequired
};

export default ConfirmationDialog;
