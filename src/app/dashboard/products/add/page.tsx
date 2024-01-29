'use client'

import styles from './addProduct.module.css'

function AddProductPage() {
  // TODO: convert into fetching data when a fetching logic is built
  const addProduct = () => {}

  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">choose a category</option>
          <option value="kitchen">kitchen</option>
          <option value="phone">phone</option>
          <option value="computer">computer</option>
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea name="desc" id="desc" rows={16} placeholder="Description" required></textarea>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default AddProductPage
