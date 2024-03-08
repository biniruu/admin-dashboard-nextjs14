import Link from 'next/link'

import { fetchProducts } from 'app/lib/fetchData'
import Pagination from 'components/pagination/Pagination'
import ProductsTable from 'components/products-table/ProductsTable'
import Searchbar from 'components/searchbar/Searchbar'
import type { Product } from 'types'
import { getParams } from 'utils/helper'

interface Props {
  searchParams: { [key: string]: string | undefined }
}

interface FetchProducts {
  products: Product[]
  totalProducts: number
}

async function ProductsPage({ searchParams }: Props) {
  // TODO: make sure the 'page' parameter is visible as soon as the page opens
  const { searchKeywords, currentPage } = getParams(searchParams)
  const ITEM_PER_PAGE = 2

  const { products, totalProducts } = (await fetchProducts(searchKeywords, currentPage)) as FetchProducts

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
      <ProductsTable products={products} />
      <Pagination total={totalProducts} itemPerPage={ITEM_PER_PAGE} currentPage={currentPage} />
    </div>
  )
}

export default ProductsPage
