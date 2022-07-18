import { useEffect } from 'react'
// Importacion para mostrar alertas
import Swal from 'sweetalert2'
// Hooks
import { useCrmStore } from '../../hooks/useCrmStore'

const FormResultado = () => {

    const {events, startDeleteEvent, openCrmModal,startLoadingEvents} = useCrmStore()

    const handleClickEvent = (data) => {
        // llamado de evento Swal para mostrar la alerta
        Swal.fire({
            title: 'Estas seguro?',
            text: "No podras revertir los cambios!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'El archivo a sido eliminado.',
                'success'
              )
              startDeleteEvent(data)
            }
          })
    }

      // Cargar los eventos del backend
  useEffect(() => {
    startLoadingEvents()
  }, [])

    return (
        <div>
            <div className='result-containt'>
                <h3>Participantes</h3>
                
                    {events.map(r => (
                        <div className='datos-result' key={r._id}>
                            <div>
                                <div className='details'>
                                    <h5>{r.name} {r.lastName} </h5>
                                </div>
                                <div className='details-telf'>
                                    <small>{r.email}</small>
                                </div>
                                <div className='btnEdit'>
                                    <button onClick={() => openCrmModal(r)}>
                                        <i className='fas fa-eye'></i>
                                    </button>
                                </div>
                                <div className='btnDelete'>
                                    <button onClick={() => handleClickEvent(r)}>
                                        <i className='fas fa-trash'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>
            
        </div>
    )
}

export default FormResultado