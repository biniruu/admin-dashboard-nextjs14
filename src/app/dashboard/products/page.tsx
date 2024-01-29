import Image from 'next/image'
import Link from 'next/link'

import styles from './products.module.css'

import Pagination from 'components/pagination/Pagination'
import Searchbar from 'components/searchbar/Searchbar'
import { type Product } from 'types'

function ProductsPage() {
  // TODO: set fetching method
  const products: Product[] = []

  // TODO: remove when fetching data logic is built
  const count = 0

  // TODO: convert into importing data from database
  const deleteProduct = () => {}

  const tableHead: string[] = ['title', 'description', 'price', 'created at', 'stock', 'action']

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
      <table className={`${styles.table} w-full`}>
        <thead>
          <tr>
            {tableHead.map(item => (
              <td key={item}>{item}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map(product => {
            const { id, img, title, desc, price, createdAt, stock } = product

            return (
              <tr key={id}>
                <td>
                  <div className="flex items-center gap-default">
                    <Image
                      src={img || '/noproduct.jpg'}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-half object-cover"
                    />
                    {title}
                  </div>
                </td>
                <td>{desc}</td>
                <td>${price}</td>
                <td>{createdAt?.toString().slice(4, 16)}</td>
                <td>{stock}</td>
                <td>
                  <div className="flex gap-default">
                    <Link href={`/dashboard/products/${id}`}>
                      <button className={`${styles.button} bg-[teal]`}>View</button>
                    </Link>
                    <form action={deleteProduct}>
                      <input type="hidden" name="id" value={id} />
                      <button className={`${styles.button} bg-[crimson]`}>Delete</button>
                    </form>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default ProductsPage
