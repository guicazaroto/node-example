
let productsData = [
  {"id":2,"descricao":"Maionese 250gr","valor":7.2,"marca":"Helmans"},
  {"id":3,"descricao":"Iogurte Natural 200ml","valor":2.5,"marca":"Itambé"},
  {"id":4,"descricao":"Batata Maior Palha 300gr","valor":15.2,"marca":"Chipps"},
  {"id":5,"descricao":"Nescau 400gr","valor":8,"marca":"Nestlé"},
]

export function getProductsData() {
  return productsData
}

export function saveProductsData(data) {
  productsData = data
}

export function productFactory(body, id) {
  const productsList = getProductsData()
  const product = productsList.find(product => product.id === Number(id))
  
  const newProduct = {
    descricao: body?.descricao || product.descricao,
    valor: body?.valor || product.valor,
    marca: body?.marca || product.marca
  }

  return newProduct
}

export function productListFactory (productsList, productIndex, newProduct) {
  productsList[productIndex] = {
    ...productsList[productIndex], 
    ...newProduct
  }

  return [...productsList]
}