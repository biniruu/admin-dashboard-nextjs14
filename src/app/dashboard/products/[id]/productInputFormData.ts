import { type Product } from 'types'

const getProductInputFormData = (product: Product) => {
  const { title, price, stock, color } = product

  const inputFormData = [
    {
      type: 'text',
      label: 'title',
      value: title,
      placeholder: 'title',
    },
    {
      type: 'text',
      label: 'price',
      value: price,
      placeholder: 'price',
    },
    {
      type: 'text',
      label: 'stock',
      value: stock,
      placeholder: 'stock',
    },
    {
      type: 'text',
      label: 'color',
      value: color,
      placeholder: color || 'color',
    },
  ]

  return { inputFormData }
}

export default getProductInputFormData
