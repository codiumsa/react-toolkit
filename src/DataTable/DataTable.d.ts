import * as React from 'react';

interface DataTableData {
  /**
   * Listado de registros a mostrar en la tabla. Prop recibido por
   * el componente [DataDisplay](#datadisplay).
   */
  itemsData: object;

  /**
   * Configuración de ordenamiento.
   */
  orderData: object;

  /**
   * Configuración de paginación.
   */
  pagerData: object;

  /**
   * Objeto que contiene los filtros aplicados al datatable. Utilizado
   * por el componente [QueryBox](#querybox)
   */
  queryData: object;
}

export interface DataTableProps {
  /**
   * Título del DataTable.
   */
  title: string;

  /**
   * Función que permite cargar los datos del datatable.
   */
  onReloadTable(): void;

  /**
   * Objeto que almacena el estado del datatable.
   */
  dataTableState: DataTableData;

  /**
   * Se utiliza para la inicializacion de los componentes [DataTableRow](#datatablerow) y
   * [DataTableHeader](#datatableheader)
   */
  rowSettings: object;

  /**
   * Función que permite filtrar los datos del datatable.
   */
  onQueryRequested(): void;

  /**
   * Función que restablece los datos de paginación.
   */
  resetPaging(): void;

  /**
   * Función invocada cuando se hace click en los botones de paginación.
   *
   * @param {number} page - El número de página.
   */
  onPageChanged?(page: number): void;

  /**
   * Función invocada cuando se hace click sobre una columna "ordenable".
   *
   * @param {string} field - La columna afectada.
   */
  onOrderChanged?(field: string): void;
}

declare const DataTableProps: React.ComponentType<DataTableProps>;

export default DataTableProps;
