import { 
  getProductsData, 
  productFactory, 
  saveProductsData, 
  productListFactory 
} from './product-data-helpers.js'

export function index (_, res) {
  return res.json(getProductsData())
}

export function get(req, res) {
  const { id } = req.params 
  const productsList = getProductsData()

  const product = productsList.find(product => product.id === Number(id))
  if(!product) {
    return res.status(404).json({ message: 'Produto não encontrado' })
  }

  res.json(product)
}

export function create(req, res) {
  const { descricao, valor, marca } = req.body
  const productsList = getProductsData()

  try {
    productsList.push({
      id: productsList.length + 1,
      descricao,
      valor,
      marca
    })

    saveProductsData(productsList)
  
    res.status(201).json(productsList)
    
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto' })
  }
}

export function update(req, res) {
  const productsList = getProductsData()
  const productIndex = productsList.findIndex(product => product.id == req.params.id)
  const newProduct = productFactory(req.body, req.params.id)

  try {  
    saveProductsData(productListFactory(productsList, productIndex, newProduct))
    
    res.status(201).json(getProductsData())
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto' })
  }
}


export function remove (req, res) {
  const productsList = getProductsData()
  const productIndex = productsList.findIndex(product => product.id == req.params.id)

  try {
    productsList.splice(productIndex, 1)
    saveProductsData(productsList)
    
    res.status(200).json(productsList)
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto' })
  }
}
