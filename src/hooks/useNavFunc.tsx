import { usePathname, useRouter, useSearchParams } from 'next/navigation'

function useNavFunc() {
  const searchParams = useSearchParams()
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { replace } = useRouter()
  const pathname = usePathname()

  return { searchParams, replace, pathname }
}

export default useNavFunc
