import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import DataDisplay from './DataDisplay';
import QueryBox from './QueryBox';
import DataTableToolbar from './DataTableToolbar';
import Paper from 'material-ui/Paper';
import RefreshButton from 'material-ui-icons/Refresh';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import PropTypes from 'prop-types';

const styleSheet = theme => ({
  dataTableContainer: {
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing.unit * 6
  }
});

/**
 * Componente que renderiza un datatable con capacidad de filtrado, ordenado y paginación
 * de elementos. Además de permitir incorporar acciones a realizar por registro.
 */
class DataTable extends Component {
  // eslint-disable-next-line
  componentDidMount() {
    this.props.onReloadTable();
  }

  // eslint-disable-next-line
  render() {
    const props = this.props;
    const classes = props.classes;
    return (
      <div className={classes.dataTableContainer}>
        <Paper>
          <DataTableToolbar title={props.title}>
            <Tooltip title="Recargar">
              <IconButton onClick={props.onReloadTable}>
                <RefreshButton />
              </IconButton>
            </Tooltip>
          </DataTableToolbar>
          <QueryBox
            queryData={props.dataTableState.queryData}
            onQueryChanged={props.onQueryChanged}
            onQueryRequested={() => {
              props.onQueryRequested();
              props.resetPaging();
              props.onReloadTable();
            }}
            onReloadTable={props.onReloadTable}
          />
          <DataDisplay
            listData={props.dataTableState.itemsData}
            orderData={props.dataTableState.orderData}
            pagerData={props.dataTableState.pagerData}
            onPageChanged={page => {
              props.onPageChanged(page);
              props.onReloadTable();
            }}
            onChangeItemsCountPerPage={itemsCountPerPage => {
              props.onChangeItemsCountPerPage(itemsCountPerPage);
              props.onReloadTable();
            }}
            settings={props.rowSettings}
            onOrderChanged={key => {
              props.onOrderChanged(key);
              props.onReloadTable();
            }}
          />
        </Paper>
      </div>
    );
  }
}

DataTable.propTypes = {
  onReloadTable: PropTypes.func.isRequired
};
export default withStyles(styleSheet)(DataTable);
