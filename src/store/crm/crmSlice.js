import { createSlice } from "@reduxjs/toolkit";

// Datos temporales
const tempEvent = {
    id: new Date().getTime(),
    name: 'Michael',
    lastName: 'Negrete',
    tarea: 'hacer diseño',
    email: 'correo@correo.com',
    telefono: 123123123,
    direccion: 'Sucre',
}

export const crmSlice = createSlice({
    name: 'CRM',
    initialState: {
        events: [tempEvent],
        activeEvent: null,
        isCrmModalOpen : false
    },
    reducers: {
        
        // Metodos para agregar o eliminar del storage
        onSetActiveEvent: (state, {payload}) => {
            state.activeEvent = payload
        },

        onAddNewEvent: (state,{payload}) => {
            state.events.push(payload)
        },

        onUpdateEvent: (state,{payload}) => {
            state.events = state.events.map(event => {
                if(event.id === payload.id){
                    return payload
                }
                return event
            })
        },

        onDeleteEvent: (state,{payload}) => {
            if(payload){
                state.events = state.events.filter(event => event.id !== payload.id)
                
            }            
        },

        // Ui Modal
        onOpenCrmModal : (state, {payload}) => {
            state.isCrmModalOpen = true
            state.activeEvent = payload
        },
        onCloseCrmModal : state => {
            state.isCrmModalOpen = false
            state.activeEvent = null
        },
    }
})

// Export funciones creadas
export const {onAddNewEvent,
              onUpdateEvent,
              onDeleteEvent,
              onOpenCrmModal,
              onCloseCrmModal,
              onSetActiveEvent} = crmSlice.actions