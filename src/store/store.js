import { configureStore } from "@reduxjs/toolkit";

// Store
import { crmSlice } from "./crm/crmSlice";

// Creacion del reducer que se mostrara en el storage
export const store = configureStore({
    reducer:{
        crm: crmSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})