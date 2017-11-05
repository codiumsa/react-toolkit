/**
 * Construye un objeto que contiene los params de filtrado, paginado y ordenamiento
 * en el formato esperado por el persistent data parser.
 *
 * @param {Object} queryData - informacion de filtrado.
 * @param {Object} pagerData - informacion de paginado.
 * @param {Object} orderData - informacion de ordenamiento.
 * @return {Object}.
 */
const construcParams = (queryData, pagerData, orderData) => {
  const orderParams = Object.keys(orderData).reduce((prev, current) => {
    prev[`orderBy_${current}`] = orderData[current];
    return prev;
  }, {});
  const pagerParams = {page: pagerData.currentPage + 1, pageSize: pagerData.pageSize};
  const queryParams = {all: queryData.generalFilter ? queryData.generalFilter : undefined};
  const params = {...orderParams, ...pagerParams, ...queryParams};
  return params;
};
export default construcParams;
