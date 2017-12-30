import * as React from 'react';

export interface ConfirmationDialogProps {
  /**
   * Indica si el modal se debe mostrar o no.
   */
  open?: boolean;

  /**
     * Función invocada cuando se hace click en el botón cancelar.
     */
  onCancel?: Function;

  /**
     * El título del modal.
     */
  title?: string;

  /**
     * El texto principal del modal.
     */
  text?: string;

  /**
     * Label para el botón cancelar.
     */
  cancelText?: string;

  /**
     * Función invocada al hacer click en el botón ok.
     */
  onConfirm?: Function;

  /**
     * Label para el botón ok.
     */
  confirmText?: string;

  /**
     * Indica si se debe mostrar o no una animación de loading.
     */
  loading?: boolean;
}

declare const ConfirmationDialog: React.ComponentType<ConfirmationDialogProps>;

export default ConfirmationDialog;
