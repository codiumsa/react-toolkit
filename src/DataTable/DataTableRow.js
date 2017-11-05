import React from 'react';
import {TableCell, TableRow} from 'material-ui/Table';
import PropTypes from 'prop-types';

/**
 * En los props del componente se puede recibir el item, y settings de configuracion del row
 *
 *  Settings: {
 *    attr: {
 *      label: 'Attributo',
 *      numeric: true/false,
 *      checkbox: true/false,
 *      cellRendering: item => {return Component}, una funcion que recibe el item y retorna un componente.
 *          Este componente sera renderizado.
 *    }
 *  }
 *
 * Por defecto, cada celda despliega el valor del item dado el atributo, a no ser que haya especificado
 * un componente en el cellRendering, en cuyo caso se renderizara el componente.
 *
 * @param {Object} props - Los props del componente.
 * @return {Component}.
 */
const DataTableRow = props => {
  const defaultAttributeSetting = {numeric: false, checkbox: false};
  return (
    <TableRow>
      {Object.keys(props.settings).map(key => {
        const currentSetting = {...defaultAttributeSetting, ...props.settings[key]};
        return (
          <TableCell
            key={key}
            numeric={currentSetting.numeric}
            padding={currentSetting.checkbox ? 'checkbox' : 'default'}
          >
            {currentSetting.cellRendering ? currentSetting.cellRendering(props.item) : props.item[key]}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

DataTableRow.propTypes = {
  settings: PropTypes.any.isRequired,
  item: PropTypes.any.isRequired
};

export default DataTableRow;
