import React from 'react';
import Table, { TableBody } from 'material-ui/Table';
import DataTableRow from './DataTableRow';
import DataTableHeader from './DataTableHeader';
import Pager from './Pager';
import { withStyles } from 'material-ui/styles';

const styleSheet = theme => ({
    dataDisplayContainer: {
        padding: theme.spacing.unit * 3,
        paddingTop: 0,
    },
});

/**
 * Componente que renderiza una tabla con su cabecera e items de acuerdo a la especificacion 
 * recibida en el prop settings. 
 * El prop settings se utiliza para la inicializacion de los componentes DataTableRow
 * y DataTableHeader que son utilizados aqui. Mirar la documentacion de los mismos para conocer
 * opciones de configuracion e inicializacion.
 * Tambien se espera en los props:
 *  1. listData, un object con la siguiente estructura:
 *      {
 *          items: [] array con los elementos a desplegar,
 *          loading: true/false, para renderizar una animacion de avance
 *      }
 *  2. orderData, que es el estado de ordenamiento que sigue el siguiente formato:
 *      {
 *          attr: {
 *              direction: 'asc'/'desc'
 *          }
 *      }
 * Se deben recibir en props los dispatches de:
 *  1. onOrderChanged key => {} que es llamado cuando hay un evento de ordenamiento
 * Opcionalmente, puede recibir los props del pager, en pagerData. Si no se pasan los
 * props del pager, el mismo no sera renderizado
 * @param {* los props del componente} props 
 */
const DataDisplay = props => {
    const { classes } = props;
    return (
        <div className={classes.dataDisplayContainer}>
            <Table>
                <DataTableHeader
                    orderData={props.orderData}
                    settings={props.settings}
                    onOrderChanged={props.onOrderChanged}
                />
                <TableBody>
                    {props.listData.data.map(n => {
                        return (
                            <DataTableRow
                                key={n.id}
                                item={n}
                                settings={props.settings}
                            />
                        )
                    })}
                </TableBody>
                {props.pagerData ?
                    <Pager
                        pagerData={props.pagerData}
                        onPageChanged={props.onPageChanged}
                        onChangeItemsCountPerPage={props.onChangeItemsCountPerPage}
                    />
                    :
                    null
                }
            </Table>
        </div>
    )
}

export default withStyles(styleSheet)(DataDisplay);