import {mostrarAlerta, validar} from './funciones.js';
import {nuevaLicencia} from './API.js';

(function(){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarLicencia);

    function validarLicencia(e){
        e.preventDefault();

        const company_name = document.querySelector('#company_name').value 
        const user_full_name = document.querySelector('#user_full_name').value 
        const job_title = document.querySelector('#job_title').value 
        const user_email = document.querySelector('#user_email').value
        const software_name = document.querySelector('#software_name').value 
        const software_user_name = document.querySelector('#software_user_name').value 
        const expiration_date = document.querySelector('#expiration_date').value 
        const version = document.querySelector('#version').value 
        
        const license = {
            company_name,
            user_full_name,
            job_title,
            user_email,
            software_name,
            software_user_name,
            expiration_date,
            version
        }

        if(validar(license)) {
            mostrarAlerta('All fields are required');
            return;
        }
        
        nuevaLicencia(license)
    }

})();