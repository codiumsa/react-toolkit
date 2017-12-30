import * as React from 'react';

interface OrderData {
  currentPage: number;
  pageSize: number;
  itemsCount: number;
}

export interface PagerProps {
  /**
   * Representa la configuración de ordenamiento de los registros del DataDisplay.
   */
  orderData?: OrderData;

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
}

declare const PagerProps: React.ComponentType<PagerProps>;

export default PagerProps;
