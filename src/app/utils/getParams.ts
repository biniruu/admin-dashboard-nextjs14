interface Props {
  [key: string]: string | undefined
}

const getParams = (searchParams: Props) => {
  const searchKeywords = searchParams?.search || ''
  const currentPage = searchParams?.page || '1'
  const pageNumber = Number(currentPage)

  return { searchKeywords, pageNumber }
}

export default getParams
