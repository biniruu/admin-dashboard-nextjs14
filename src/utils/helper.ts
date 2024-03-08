interface Props {
  [key: string]: string | undefined
}

const getParams = (searchParams: Props) => {
  const searchKeywords = searchParams?.search || ''
  const currentPage = Number(searchParams?.page || '1')

  return { searchKeywords, currentPage }
}

export { getParams }
