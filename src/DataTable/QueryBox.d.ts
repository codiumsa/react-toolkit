import * as React from 'react';

interface QueryData {
  /**
   * El valor actual de búsqueda.
   */
  generalFilter: string;

  /**
   * El valor asociado al input de filtrado general.
   */
  generalFilterInput: string;

  /**
   * Array con las ultimas N busquedas anteriores
   */
  history: string[];
}

export interface QueryBoxProps {
  /**
   * Objeto que contiene los filtros aplicados al datatable.
   */
  queryData: QueryData;

  /**
   * Función invocada cuando se modifica el input de filtrado.
   *
   * @param {string} value - El nuevo valor de búsqueda
   */
  onQueryChanged(value: string): void;

  /**
   * Función que permite filtrar los datos del datatable.
   */
  onQueryRequested(): void;
}

declare const QueryBoxProps: React.ComponentType<QueryBoxProps>;

export default QueryBoxProps;
