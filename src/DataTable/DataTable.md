```js
const Link = require('react-router-dom').Link;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const Tooltip = require('material-ui/Tooltip').default;
const IconButton = require('material-ui/IconButton').default;
const EditIcon = require('material-ui-icons/Edit').default;
const DeleteIcon = require('material-ui-icons/Delete').default;

const rowSettings = {
  nombre: {
    label: 'Nombre',
    sortable: true
  },
  cantidad: {
    label: 'Cantidad',
    sortable: false,
    cellRendering: item => (
      <div style={{ color: item.cantidad <= 10 ? 'red' : 'green' }}>
        {item.cantidad}
      </div>
    )
  },
  actions: {
    label: 'Acciones',
    cellRendering: item => (
      <div>
        <Link to={`frutas/${item.id}/edit`} style={{ textDecoration: 'none' }}>
          <Tooltip title="Editar" placement="top-start">
            <IconButton aria-label="Edit">
              <EditIcon />
            </IconButton>
          </Tooltip>
        </Link>
        <a
          style={{ textDecoration: 'none' }}
          onClick={() => props.deleteRequested(item)}>
          <Tooltip title="Eliminar" placement="top-start">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </a>
      </div>
    )
  }
};

let props = {
  frutaListState: {
    itemsData: {
      data: [
        { id: 1, nombre: 'Pera', cantidad: 10 },
        { id: 2, nombre: 'Manzana', cantidad: 40 },
        { id: 3, nombre: 'Frutilla', cantidad: 30 }
      ]
    },
    orderData: {},
    queryData: {}
  },
  orderChanged: _ => {},
  queryChanged: _ => {},
  queryRequested: _ => {},
  dataRequested: _ => {},
  pageChanged: _ => {},
  changeItemsCountPerPage: _ => {},
  resetPaging: _ => {},
  dataCleanError: _ => {}
};

<BrowserRouter>
  <DataTable
    title="Listado de frutas"
    rowSettings={rowSettings}
    dataTableState={props.frutaListState}
    onOrderChanged={props.orderChanged}
    onQueryChanged={props.queryChanged}
    onQueryRequested={props.queryRequested}
    onReloadTable={props.dataRequested}
    onPageChanged={props.pageChanged}
    onChangeItemsCountPerPage={props.changeItemsCountPerPage}
    resetPaging={props.resetPaging}
    onCleanErrors={props.dataCleanError}
  />
</BrowserRouter>;
```
