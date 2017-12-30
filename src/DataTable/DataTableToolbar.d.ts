import * as React from 'react';

export interface DataTableToolbarProps {
  /**
   * El título del DataTable.
   */
  title: string;

  /**
   * Componente a renderizar como children del Toolbar. Útil para
   * renderizar botones adicionales.
   */
  children: React.Component;
}

declare const DataTableToolbarProps: React.ComponentType<DataTableToolbarProps>;

export default DataTableToolbarProps;
