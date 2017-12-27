```js
const ReactDOM = require('react-dom');

initialState = { open: false };

<div>
  {state.open && (
    <ConfirmationDialog
      open={true}
      loading={false}
      title="Eliminar registro?"
      text="Está seguro que desea eliminar el registro? Esta operación no se puede deshacer."
      cancelText="Cancelar"
      confirmText="Confirmar"
      onCancel={_ => setState({ open: false })}
      onConfirm={_ => setState({ open: false })}
    />
  )}
  {!state.open && (
    <button onClick={_ => setState({ open: true })}>Mostrar</button>
  )}
</div>;
```
