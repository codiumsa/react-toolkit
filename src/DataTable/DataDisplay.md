```js
const items = [
  { id: 1, nombre: 'Pera', cantidad: 30 },
  { id: 2, nombre: 'Manzana', cantidad: 20 },
  { id: 3, nombre: 'Frutilla', cantidad: 10 }
];

<div>
  <h3> Listado de frutas</h3>
  <DataDisplay
    listData={{
      data: items,
      loading: false
    }}
    settings={{
      nombre: {
        label: 'Nombre'
      },
      cantidad: {
        label: 'Cantidad'
      }
    }}
  />
</div>;
```
