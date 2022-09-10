import {useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import crmApi from "../../api/crmApi"
import { onAddNewEvent, onCloseCrmModal, onDeleteEvent, onLoadEvents, onOpenCrmModal, onSearEvent, onUpdateEvent } from "../store/crm/crmSlice"

export const useCrmStore = () => {
    
    const dispatch = useDispatch()
    const {events, isCrmModalOpen, activeEvent} = useSelector(state => state.crm)

    // Funciones para llamar el reducer del CRUD
    // const startSavingEvent = (crmEvent) => {
    //     dispatch(onAddNewEvent({...crmEvent, id: new Date().getTime()}))
    // }

    const startUpdateEvent = async(crmEvent) => {
        
        try {
            if(crmEvent._id){
                //Actualizando
                // dispatch(onUpdateEvent({...crmEvent}))
                await crmApi.put(`/${crmEvent._id}`, crmEvent)
                dispatch(onUpdateEvent({...crmEvent}))
                return
            }

            // Creando nuevo evento
            // dispatch(onAddNewEvent({...crmEvent, id: new Date().getTime()}))

            // Hacer post a la base de datos
            const {data} = await crmApi.post('/',crmEvent)
            console.log(data)
            dispatch(onAddNewEvent({...crmEvent, id: data.msg._id}))

        } catch (error) {
           console.log(error)
           Swal.fire('Error al guardar',error.data.response.data.msg,'error') 
        }    
        
    }

    const searchElement = async(nombre) => {
        try {
            const {data} = await crmApi.get('/')
            const result = data.msg.filter(registro => registro.name === nombre.name )
            if(result[0]) {
                openCrmModal(result[0])
            }

        } catch (error) {
            console.log(error)
            Swal.fire('Error en la base de datos','error')
        }
    }

    const startDeleteEvent = async(data) => {
        // dispatch(onDeleteEvent({...data}))
        // Eliminar de la base de datos
        try{
            await crmApi.delete(`/${data._id}`)
            dispatch(onDeleteEvent({...data}))
        }catch(error){
            console.log(error)
            Swal.fire('Error al eliminar',error.response.data.msg,'error')
        }
    }

    // Funciones para llamar el reducer del modal
    const openCrmModal = (data = '') => {
        console.log(data)
        dispatch(onOpenCrmModal([{...data}]))
    }

    const closeCrmModal = () => {
        dispatch(onCloseCrmModal())
    }

    // Cargar los enventos del backend
    const startLoadingEvents = async() => {
        try {
            
            const {data} = await crmApi.get('/')
            dispatch(onLoadEvents(data.msg))

        } catch (error) {
            console.log(error)
        }
    }

    return{
        //* Propiedades
        events,
        isCrmModalOpen,
        activeEvent,
        //* Metodos
        // startSavingEvent,
        startDeleteEvent,
        openCrmModal,
        closeCrmModal,
        startUpdateEvent,
        startLoadingEvents,
        searchElement
    }

}