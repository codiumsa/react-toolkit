import * as React from 'react';

export interface DataTableRowProps {
  /**
   * Configuración de las columnas.
   */
  settings: object;

  /**
   * Representa a un registro de la tabla.
   */
  item: object;
}

declare const DataTableRowProps: React.ComponentType<DataTableRowProps>;

export default DataTableRowProps;
