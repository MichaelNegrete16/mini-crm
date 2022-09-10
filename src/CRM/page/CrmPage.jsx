import React from 'react'
import { useCrmStore } from '../../hooks/useCrmStore'
import CrmModal from '../components/CrmModal'
// Components
import FormResultado from '../components/FormResultado'

const CrmPage = () => {

    const {openCrmModal} = useCrmStore()

    const openModal = () => {
        openCrmModal()
    }
    
    const handleClickNew = () => {

    }

    return (
        <div >

            <div className='marcoPrincipal'>
                <div className='marcoSecundario'>
                    <div className='principalSearch'>
                            <input type="search"  placeholder='Buscar'/>
                            <i className="fa-solid fa-magnifying-glass"></i>
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
                                <a><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                            <div className='footerGithub'>
                                <a><i className="fa-brands fa-github"></i></a>
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