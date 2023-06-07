import fs from 'fs'

export function getProductsData() {
  const path = path.join(process.cwd(), 'lista-de-produtos.json')
  const products = fs.readFileSync(path, 'utf-8')
  const data = JSON.parse(products);

  return data
}

export function saveProductsData(data) {
  const path = path.join(process.cwd(), 'lista-de-produtos.json')
  const stringifyData = JSON.stringify(data)
  fs.writeFileSync(path, stringifyData)
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