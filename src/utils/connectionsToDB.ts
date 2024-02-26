import type { Error } from 'mongoose'
import { connect } from 'mongoose'

let isConnected = true

export const connectToDB = async () => {
  if (!isConnected) {
    return
  }

  try {
    const db = await connect(process.env.MONGODB as string)
    // if a value of readyState is 'disconnected', isConnected will become 'false'
    isConnected = !!db.connections[0].readyState
  } catch (error) {
    const err = error as Error
    throw err
  }
}
