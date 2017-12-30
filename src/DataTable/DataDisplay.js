import React from 'react';
import Table, {TableBody} from 'material-ui/Table';
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';

import DataTableRow from './DataTableRow';
import DataTableHeader from './DataTableHeader';
import Pager from './Pager';

/**
 * Componente que renderiza una tabla con su cabecera e items de acuerdo a la especificacion
 * recibida en el prop settings.
 * El prop settings se utiliza para la inicializacion de los componentes DataTableRow
 * y DataTableHeader que son utilizados aqui. Mirar la documentacion de los mismos para conocer
 * opciones de configuracion e inicializacion.
 * Tambien se espera en los props:
 *
 *  1. **listData**, un object con la siguiente estructura:
 *
 *      ```javascript
 *      {
 *          data: []  // array con los elementos a desplegar,
 *          loading: true | false,  // para renderizar una animacion de avance
 *      }
 *      ```
 *
 *  2. **orderData**, que es el estado de ordenamiento que sigue el siguiente formato:
 *
 *   ```javascript
 *      {
 *          attr: {
 *              direction: 'asc' | 'desc'
 *          }
 *      }
 *    ```
 * Se deben recibir en props los dispatches de:
 *
 *  1. **onOrderChanged** key => {} que es llamado cuando hay un evento de ordenamiento. Opcionalmente,
 * puede recibir los props del pager, en pagerData. Si no se pasan los props del pager, el mismo no sera renderizado.
 *
 * @param {Object} props - Los props del componente.
 * @return {JSX.Element}
 */
const DataDisplay = props => {
  const {classes} = props;
  return (
    <div className={classes.dataDisplayContainer}>
      <Table>
        <DataTableHeader orderData={props.orderData} settings={props.settings} onOrderChanged={props.onOrderChanged} />
        <TableBody>
          {props.listData.data.map(n => {
            console.log(props.settings);
            return <DataTableRow key={n.id} item={n} settings={props.settings} />;
          })}
        </TableBody>
        {props.pagerData ? (
          <Pager
            pagerData={props.pagerData}
            onPageChanged={props.onPageChanged}
            onChangeItemsCountPerPage={props.onChangeItemsCountPerPage}
          />
        ) : null}
      </Table>
    </div>
  );
};

DataDisplay.propTypes = {
  /**
   * @ignore
   */
  classes: PropTypes.any,

  /**
   * Representa la configuración de ordenamiento de los registros del DataDisplay.
   */
  orderData: PropTypes.object,

  /**
   * Los datos que se muestran en la tabla.
   */
  listData: PropTypes.shape({
    /**
     * El listado de elementos.
     */
    data: PropTypes.arrayOf(PropTypes.any),

    /**
     * Indica si se muestra o no una animación de loading.
     */
    loading: PropTypes.bool
  }).isRequired,

  /**
   * Se utiliza para la inicializacion de los componentes [DataTableRow](#datatablerow) y
   * [DataTableHeader](#datatableheader)
   */
  settings: PropTypes.object.isRequired,

  /**
   * Configuración de paginado.
   */
  pagerData: PropTypes.object,

  /**
   * Función invocada cuando se hace click en los botones de paginación.
   *
   * @param {number} page - El número de página.
   */
  onPageChanged: PropTypes.func,

  /**
   * Función invocada cuando se cambia el tamaño de página.
   *
   * @param {number} pageSize - El tamaño de página.
   */
  onChangeItemsCountPerPage: PropTypes.func,

  /**
   * Función invocada cuando se hace click sobre una columna "ordenable".
   *
   * @param {string} field - La columna afectada.
   */
  onOrderChanged: PropTypes.func
};

const styleSheet = theme => ({
  dataDisplayContainer: {
    padding: theme.spacing.unit * 3,
    paddingTop: 0
  }
});

export default withStyles(styleSheet)(DataDisplay);
