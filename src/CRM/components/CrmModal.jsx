import { useEffect, useState } from "react";
// Alertas
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css'
// React-Modal
import Modal from "react-modal"
// Hooks
import { useCrmStore } from "../../hooks/useCrmStore"

const customStyles = {
    content:{
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const CrmModal = () => {

    const {isCrmModalOpen, closeCrmModal, startUpdateEvent, activeEvent} = useCrmStore()

    const [formValues, setFormValues] = useState({
        name:'',
        lastName:'',
        tarea:'',
        email:'',
        telefono:'',
        direccion:''
    })
    const {name, tarea,email,telefono,direccion} = formValues

// Poner los datos en el modal
    useEffect(() => {
        if(activeEvent !== null){
            setFormValues({...activeEvent[0]})
        }
    }, [activeEvent])
    

    // Asignar valor del input al formValue
    const onInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onCloseModal = () => {
        console.log('Cerrando Modal')
        closeCrmModal()
        setFormValues({
            name:'',
            lastName:'',
            tarea:'',
            email:'',
            telefono:'',
            direccion:''
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        // Validar que tenga un valor
        if(name && tarea && email && telefono && direccion){
            console.log('paso')
            Swal.fire('Registro exitoso','Succes','success')
            startUpdateEvent(formValues)
            // Cerrar modal
            closeCrmModal()
        }else{
            console.log('Negado')
            Swal.fire('Registro fallido','Todos los campos son obligatorios','error')
        }

        // Resetear formulario
        setFormValues({
            name:'',
            lastName:'',
            tarea:'',
            email:'',
            telefono:'',
            direccion:''
        })
    }

    


    return (
        <Modal
            isOpen={isCrmModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className='modal'
            overlayClassName='modal-fondo'
            closeTimeoutMS={200}
        >
                    <form onSubmit={onSubmit} >
                        <div  className='modal-Container'>
                        {formValues.id ? <h1>Editar datos</h1> : <h1>Nuevo participante</h1>}
                        <div className="modal-data">

                            <div className="modal-newTarea">
                                <label>Nombre*</label>
                                <input  name="name"
                                        type="text" 
                                        placeholder="Cambiar nombre"
                                        value={formValues.name}
                                        onChange={onInputChange}/>
                            </div>
                            <div className="modal-newTarea">
                                <label>Apellido</label>
                                <input  name="lastName"
                                        type="text" 
                                        value={formValues.lastName}
                                        onChange={onInputChange}
                                        placeholder="Cambiar apellido"/>
                            </div>
                            <div className="modal-newTarea">
                                <label>Correo*</label>
                                <input  name="email"
                                        value={formValues.email}
                                        onChange={onInputChange}
                                        type="email" 
                                        placeholder="Cambiar email"/>
                            </div>

                            <div className="modal-newTarea">
                                <label>Telefono*</label>
                                <input  name="telefono"
                                        value={formValues.telefono}
                                        onChange={onInputChange}
                                        type="number" 
                                        placeholder="Cambiar telefono"/>
                            </div>
                            <div className="modal-newTarea">
                                <label>Direccion de residencia*</label>
                                <input  name="direccion"
                                        value={formValues.direccion}
                                        onChange={onInputChange}
                                        type="text" 
                                        placeholder="Cambiar direccion"/>
                            </div>
                            <div className="modal-newTarea">
                                <label>tarea*</label>
                                <input  name="tarea"
                                        value={formValues.tarea}
                                        onChange={onInputChange}
                                        type="text" 
                                        placeholder="Cambiar tarea"/>
                            </div>

                        </div>

                        <div className="modal-button">
                            <button>Guardar Cambios</button>
                        </div>

                        </div>
                    </form>
        </Modal>
    )
}

export default CrmModal