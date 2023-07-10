import {mostrarAlerta, validar} from './funciones.js';
import {nuevaLicencia} from './API.js';

(function(){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarLicencia);

    function validarLicencia(e){
        e.preventDefault();

        const companyName = document.querySelector('#company_name').value 
        const fullName = document.querySelector('#user_full_name').value 
        const jobTitle = document.querySelector('#job_title').value 
        const email = document.querySelector('#user_email').value 
        const userName = document.querySelector('#software_user_name').value 
        const expirationDate = document.querySelector('#expiration_date').value 
        const version = document.querySelector('#version').value 

        const license = {
            companyName,
            fullName,
            jobTitle,
            email,
            userName,
            expirationDate,
            version
        }

        if(validar(license)) {
            mostrarAlerta('All fields are required');
            return;
        }

        nuevaLicencia(license)
    }

})();