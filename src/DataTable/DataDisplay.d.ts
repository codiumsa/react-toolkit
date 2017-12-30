import * as React from 'react';

interface ListData {
  /**
   * El listado de elementos.
   */
  data: any[];

  /**
   * Indica si se muestra o no una animación de loading.
   */
  loading?: string;
}

export interface DataDisplayProps {
  /**
   * Representa la configuración de ordenamiento de los registros del DataDisplay.
   */
  orderData?: object;

  /**
   * Los datos que se muestran en la tabla.
   */
  listData: ListData;

  /**
   * Se utiliza para la inicializacion de los componentes [DataTableRow](#datatablerow) y
   * [DataTableHeader](#datatableheader)
   */
  settings: object;

  /**
   * Configuración de paginado.
   */
  pagerData?: object;

  /**
   * Función invocada cuando se hace click en los botones de paginación.
   *
   * @param {number} page - El número de página.
   */
  onPageChanged?(page: number): void;

  /**
   * Función invocada cuando se cambia el tamaño de página.
   *
   * @param {number} pageSize - El tamaño de página.
   */
  onChangeItemsCountPerPage?(pageSize: number): void;

  /**
   * Función invocada cuando se hace click sobre una columna "ordenable".
   *
   * @param {string} field - La columna afectada.
   */
  onOrderChanged?(field: string): void;
}

declare const DataDisplayProps: React.ComponentType<DataDisplayProps>;

export default DataDisplayProps;
