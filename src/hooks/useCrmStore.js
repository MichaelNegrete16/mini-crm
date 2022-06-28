import {useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onCloseCrmModal, onDeleteEvent, onOpenCrmModal, onUpdateEvent } from "../store/crm/crmSlice"

export const useCrmStore = () => {
    
    const dispatch = useDispatch()
    const {events, isCrmModalOpen, activeEvent} = useSelector(state => state.crm)

    // Funciones para llamar el reducer del CRUD
    // const startSavingEvent = (crmEvent) => {
    //     dispatch(onAddNewEvent({...crmEvent, id: new Date().getTime()}))
    // }

    const startUpdateEvent = (crmEvent) => {
        if(crmEvent.id){
            //Actualizando
            dispatch(onUpdateEvent({...crmEvent}))
        }else{
            // Creando nuevo evento
            dispatch(onAddNewEvent({...crmEvent, id: new Date().getTime()}))
        }
    }

    const startDeleteEvent = (data) => {
        dispatch(onDeleteEvent({...data}))
    }

    // Funciones para llamar el reducer del modal
    const openCrmModal = (data = '') => {
        dispatch(onOpenCrmModal([{...data}]))
    }

    const closeCrmModal = () => {
        dispatch(onCloseCrmModal())
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
        startUpdateEvent
    }

}