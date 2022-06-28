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
        // <div className='container'>
        //     <FormRegistro/>
        //     <FormResultado/>
        //     <CrmModal/>
        // </div>

        <div >
            <nav className='menu' tabIndex='0'>
            <div className='smartphone-menu-trigger'></div>
                <header className='avatar'>
                    <img src="https://cdn.icon-icons.com/icons2/1805/PNG/512/4230530-market-market-store-shop-store_115032.png" alt="IconoMercado" />
                    <h2>MINI - CRM</h2>
                </header>

                <ul>

                    <li tabIndex='0' className='icon-add' >
                        <button onClick={openModal}>
                            <span>Add New</span>
                        </button>
                    </li>

                    <li tabIndex='0' className='icon-search'>
                        <a href="https://www.linkedin.com/in/michael-negrete-0a3938206/" target='blank'>
                            <span>Linkedin</span>
                        </a>
                    </li>

                    <li tabIndex='0' className='icon-search'>
                        <a href="https://github.com/MichaelNegrete16" target='blank'>
                            <span>GitHub</span>
                        </a>
                    </li>

                </ul>

            </nav>

            <main>
                <dir className='helper'>
                    <FormResultado/>
                </dir>
            </main>


            <CrmModal/>

        </div>
    )
}

export default CrmPage