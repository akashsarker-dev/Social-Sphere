import { configureStore } from '@reduxjs/toolkit'
import UserSlices from './slices/UserSlices'

export const store = configureStore({
  reducer: {
    userLoginInfo: UserSlices
  },
})