import { useState } from 'react'
import { useCrmStore } from '../../hooks/useCrmStore'
import CrmModal from '../components/CrmModal'
// Components
import FormResultado from '../components/FormResultado'

const CrmPage = () => {

    const {openCrmModal,searchElement} = useCrmStore()

    const [formValues, setFormValues] = useState({
        name:''
    })
    const {name} = formValues

    // Asignar valor del input al formValue
    const onInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
        // console.log(target.name);
    }
    
    const handleClick = () => {
        // console.log(formValues)
        searchElement(formValues)
    }
    
    const openModal = () => {
        openCrmModal()
    }
    
    return (
        <div >

            <div className='marcoPrincipal'>
                <div className='marcoSecundario'>
                    <div className='principalSearch'>
                            <input type="search"  placeholder='Buscar' name='name' value={name} onChange={onInputChange} />
                            <button onClick={handleClick}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                    </div>

                    <div>
                        <FormResultado/>
                    </div>

                    <div>
                        <button onClick={openModal} className='btn'> Agregar
                            <span> </span>
                            <i className="fa-solid fa-user-plus"></i>
                        </button>
                    </div>

                    <div className='marcoFooter'>
                        <div className='footer'>
                            <div className='footerContent'>
                                <button><i className="fa-solid fa-address-book"></i></button>
                            </div>
                            <div className='footerLink'>
                                <a href='https://www.linkedin.com/in/michael-negrete-0a3938206/' target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                            <div className='footerGithub'>
                                <a href='https://github.com/MichaelNegrete16' target="_blank"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <CrmModal/>

        </div>
    )
}

export default CrmPage