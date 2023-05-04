import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegister: localStorage.getItem('isRegister') === true //получаем данные если они существуют 
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    login (state) {
       state.isRegister = true
       localStorage.setItem('isRegister', true) //cохранение данных
    },
    logout (state) {
      state.isRegister = false
      localStorage.removeItem("isRegister",false) //удаляем данные
    }
  },
});

export const { login, logout } = registerSlice.actions;
export default registerSlice.reducer;