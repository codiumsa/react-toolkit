import React from 'react';
import {TableCell, TableHead, TableRow, TableSortLabel} from 'material-ui/Table';
import Tooltip from 'material-ui/Tooltip';
import PropTypes from 'prop-types';

/**
 * En los props del componente se recibe configuracion del header
 *
 * ```javascript
 * settings: {
 *  attr: {
 *      label: 'Attributo',
 *      numeric: true/false,
 *      checkbox: true/false,
 *      sortable: true/false
 *      headerRendering: Component
 *  }
 * }
 * ```
 * Por defecto, cada celda despliega el valor del label, a no ser que haya especificado
 * un componente en el headerRendering, en cuyo caso se renderizara el componente.
 * Ademas, se recibe el estado de ordenamiento, con el siguiente formato:
 * ```
 * {
 *  attr: {
 *      direction: 'asc'/'desc'
 *  }
 * }
 * ```
 * Para el caso en el que se reciba una configuracion con sortable=true, se debe recibir ademas como
 * prop el dispatch onOrderChanged, una funcion que recibe el field y hace el dispatch que corresponde.
 *
 * @param {Object} props - Los props del componente.
 * @return {JSX.Element}
 */
const DataTableHeader = props => {
  const defaultAttributeSetting = {numeric: false, checkbox: false, sortable: false};
  const orderData = props.orderData ? props.orderData : {};
  return (
    <TableHead>
      <TableRow>
        {Object.keys(props.settings).map(key => {
          const currentSetting = {...defaultAttributeSetting, ...props.settings[key]};
          return currentSetting.sortable ? (
            <TableCell
              key={key}
              numeric={currentSetting.numeric}
              padding={currentSetting.checkbox ? 'checkbox' : 'default'}>
              <Tooltip
                title="Ordenar"
                placement={currentSetting.numeric ? 'bottom-end' : 'bottom-start'}
                enterDelay={200}>
                <TableSortLabel
                  active={!!orderData[key]}
                  direction={orderData[key] ? orderData[key] : undefined}
                  onClick={_ => props.onOrderChanged(key)}>
                  {currentSetting.headerRendering ? currentSetting.headerRendering : currentSetting.label}
                </TableSortLabel>
              </Tooltip>
            </TableCell>
          ) : (
            <TableCell
              key={key}
              numeric={currentSetting.numeric}
              padding={currentSetting.checkbox ? 'checkbox' : 'default'}>
              {currentSetting.headerRendering ? currentSetting.headerRendering : currentSetting.label}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

DataTableHeader.propTypes = {
  orderData: PropTypes.any.isRequired,
  settings: PropTypes.any.isRequired
};

export default DataTableHeader;
