import * as React from 'react';

export interface DataTableHeaderProps {
  /**
   * Representa la configuración de ordenamiento.
   */
  orderData: object;

  /**
   * Configuración de las columnas.
   */
  settings: object;

  /**
   * Función invocada cuando se hace click sobre una columna "ordenable".
   *
   * @param {string} field - La columna afectada.
   */
  onOrderChanged?(field: string): void;
}

declare const DataTableHeaderProps: React.ComponentType<DataTableHeaderProps>;

export default DataTableHeaderProps;
