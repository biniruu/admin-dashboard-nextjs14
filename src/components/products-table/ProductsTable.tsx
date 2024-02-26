'use client'

import Image from 'next/image'
import Link from 'next/link'

import styles from './productsTable.module.css'

import type { Product } from 'types'
import { deleteProduct } from 'utils/actions'

const tableHead: string[] = ['title', 'description', 'price', 'created at', 'stock', 'action']

interface Props {
  products: Product[]
}

function ProductsTable({ products }: Props) {
  return (
    <table className={`${styles.table} w-full`}>
      <thead>
        <tr>
          {tableHead.map(item => (
            <td key={item}>{item}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {products?.map(product => {
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
  )
}

export default ProductsTable
