import { genSalt, hash } from 'bcryptjs'

const getHashedPassword = async (password: string) => {
  const salt = await genSalt(10)
  const hashedPassword = await hash(password, salt)

  return hashedPassword
}

export default getHashedPassword
