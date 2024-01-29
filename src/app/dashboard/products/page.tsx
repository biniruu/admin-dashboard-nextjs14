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
    <div className={styles.container}>
      <div className={styles.top}>
        <Searchbar placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
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
                  <div className={styles.product}>
                    <Image
                      src={img || '/noproduct.jpg'}
                      alt=""
                      width={40}
                      height={40}
                      className={styles.productImage}
                    />
                    {title}
                  </div>
                </td>
                <td>{desc}</td>
                <td>${price}</td>
                <td>{createdAt?.toString().slice(4, 16)}</td>
                <td>{stock}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/products/${id}`}>
                      <button className={`${styles.button} ${styles.view}`}>View</button>
                    </Link>
                    <form action={deleteProduct}>
                      <input type="hidden" name="id" value={id} />
                      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
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
