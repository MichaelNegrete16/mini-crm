import { createSlice } from "@reduxjs/toolkit";

// Datos temporales
// const tempEvent = {
//     id: new Date().getTime(),
//     name: 'Michael',
//     lastName: 'Negrete',
//     tarea: 'hacer diseño',
//     email: 'correo@correo.com',
//     telefono: 123123123,
//     direccion: 'Sucre',
// }

export const crmSlice = createSlice({
    name: 'CRM',
    initialState: {
        events: [],
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
                if(event._id === payload._id){
                    return payload
                }
                return event
            })
        },

        onSearEvent: (state, {payload}) => {
            // const result = data.msg.filter(registro => registro.name === nombre.name)
        },

        onDeleteEvent: (state,{payload}) => {
            if(payload){
                state.events = state.events.filter(event => event._id !== payload._id)
                
            }            
        },

        // Cargar eventos de la base de datos
        onLoadEvents : (state, {payload = []}) => {
            // state.events = payload
            payload.forEach(event => {
                const exist = state.events.some(dbEvent => dbEvent._id === event._id)
                if(!exist){
                  state.events.push(event)
                }
            })
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
              onSearEvent,
              onLoadEvents,
              onSetActiveEvent} = crmSlice.actions