import {configureStore } from '@reduxjs/toolkit'
import registerSlice from './slice/registerSlice';


export const store = configureStore ({
  reducer: {
      register: registerSlice,
  }
})