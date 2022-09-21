// Obtener las variables de entorno, Solo funciona en vite
export const getEnvVariables = () => {
    
    // Se cambia el metodo de importancion por problemas con vite
    // import.meta.env

    return {
        VITE_API_URL: import.meta.env.VITE_API_URL
        // ...import.meta.env
    }
}