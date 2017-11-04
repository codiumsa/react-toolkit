import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import DataDisplay from './DataDisplay';
import QueryBox from './QueryBox';
import DataTableToolbar from './DataTableToolbar';
import Paper from 'material-ui/Paper';
import RefreshButton from 'material-ui-icons/Refresh';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';

const styleSheet = theme => ({
    dataTableContainer: {
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing.unit * 6,
    }
});

class DataTable extends Component {

    componentDidMount() {
        this.props.onReloadTable();
    }

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
export default withStyles(styleSheet)(DataTable);