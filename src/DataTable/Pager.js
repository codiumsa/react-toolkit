import React from 'react';
import { withStyles } from 'material-ui/styles';
import { TableFooter, TablePagination, TableRow } from 'material-ui/Table';

const styleSheet = theme => ({

});

/**
 * En los props, debe recibir el estado de paginacion pagerData con el siguiente formato
 *  {
 *      currentPage: number,
 *      pageSize: number,
 *      itemsCount: number
 *  }
 * Debe recibir como props los dispatches
 *  1. onPageChanged: page => {}, page es la pagina a la cual ir,
 *  2. onChangeRowsPerPage: itemsCountPerPage => {}, itemsCountPerPage es la cantidad de items
 *  que se desplegaran por pagina
 * @param {* los props del componente} props 
 */
const Pager = props => {
    const { currentPage, pageSize, itemsCount } = props.pagerData;
    return (
        <TableFooter>
            <TableRow>
                <TablePagination
                    count={itemsCount}
                    rowsPerPage={pageSize}
                    page={currentPage}
                    labelRowsPerPage={'Items por página:'}
                    labelDisplayedRows={({ from, to, count }) => `Se muestran ítems ${from} al ${to} de un total de ${count}`}
                    onChangePage={(event, page) => {
                        if (event != null) {
                            props.onPageChanged(page)
                        }
                    }}
                    onChangeRowsPerPage={(event) => props.onChangeItemsCountPerPage(event.target.value)}
                />
            </TableRow>
        </TableFooter>
    );
}

export default withStyles(styleSheet)(Pager);