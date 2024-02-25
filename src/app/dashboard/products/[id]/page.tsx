import Image from 'next/image'

import getProductInputFormData from './productInputFormData'
import styles from './singleProduct.module.css'

import { updateProduct } from 'app/utils/actions'
import { fetchProduct } from 'app/utils/fetchData'
import { type Product } from 'types'

interface Params {
  id: string
}

interface Props {
  params: Params
}

async function SingleProductPage({ params }: Props) {
  const { id } = params
  const product = (await fetchProduct(id)) as Product
  const { size, desc, title } = product
  // TODO: add a category field to DB
  const { inputFormData } = getProductInputFormData(product)

  return (
    <div className="mt-5 flex gap-[3.125rem]">
      <div className="h-max flex-[1] rounded-default bg-bg-soft p-5 font-bold text-text-soft">
        <div className="relative mb-5 h-[18.75rem] w-full overflow-hidden rounded-default">
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {title}
      </div>
      <div className="flex-[3] rounded-default bg-bg-soft p-5">
        <form action={updateProduct} className={`${styles.form} flex flex-col`}>
          <input type="hidden" name="id" value={id} />

          {inputFormData.map(item => {
            const { type, label, placeholder, value } = item

            return (
              <div key={label}>
                <label htmlFor={label}>{label}</label>
                <input type={type} name={label} id={label} placeholder={placeholder} defaultValue={value} />
              </div>
            )
          })}

          <div>
            <label htmlFor="size">size</label>
            <textarea name="size" id="size" placeholder={size || 'size'} defaultValue={size} />
          </div>
          <div>
            <label htmlFor="category">category</label>
            <select name="category" id="category">
              <option value="kitchen" selected>
                kitchen
              </option>
              <option value="computers">computers</option>
            </select>
          </div>
          <div>
            <label htmlFor="desc">description</label>
            <textarea name="desc" id="desc" placeholder="description" defaultValue={desc} />
          </div>
          <button className="mt-5 w-full cursor-pointer rounded-[0.3125rem] border-none bg-[teal] p-5 text-text">
            update
          </button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage
