import Link from 'next/link'

import Pagination from 'components/pagination/Pagination'
import ProductsTable from 'components/products-table/ProductsTable'
import Searchbar from 'components/searchbar/Searchbar'
import { type Product } from 'types'

function ProductsPage() {
  // TODO: set fetching method
  const products: Product[] = []

  // TODO: remove when fetching data logic is built
  const count = 0

  // TODO: convert into importing data from database
  const deleteProduct = () => {}

  return (
    <div className="mt-5 rounded-default bg-bg-soft p-5">
      <div className="flex items-center justify-between">
        <Searchbar placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className="cursor-pointer rounded-[0.3125rem] border-none bg-[#5d57c9] p-default text-text">
            Add New
          </button>
        </Link>
      </div>
      <ProductsTable products={products} deleteProduct={deleteProduct} />
      <Pagination count={count} />
    </div>
  )
}

export default ProductsPage
