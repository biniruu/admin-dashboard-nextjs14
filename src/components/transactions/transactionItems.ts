interface TransactionItem {
  img: string
  name: string
  status: string
  date: string
  price: string
}

const transactionItems: TransactionItem[] = [
  {
    img: '/noavatar.png',
    name: 'john doe',
    status: 'pending',
    date: '14.02.2024',
    price: '3.200',
  },
  {
    img: '/noavatar.png',
    name: 'john doe',
    status: 'done',
    date: '14.02.2024',
    price: '3.200',
  },
  {
    img: '/noavatar.png',
    name: 'john doe',
    status: 'cancelled',
    date: '14.02.2024',
    price: '3.200',
  },
]

export default transactionItems
