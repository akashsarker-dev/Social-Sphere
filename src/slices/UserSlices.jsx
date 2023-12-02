import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: null,
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    UserLoginInfo: (state) => {
     console.log(state);
    }
  },
})

// Action creators are generated for each case reducer function
export const { UserLoginInfo } = counterSlice.actions

export default counterSlice.reducer