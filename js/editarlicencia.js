import {obtenerLicencia, actualizarLicencia} from './API.js';
import {mostrarAlerta, validar} from './funciones.js';



(function(){


    const companyNameInput = document.querySelector('#company_name')
    const fullNameInput = document.querySelector('#user_full_name')
    const jobTitleInput = document.querySelector('#job_title')
    const emailInput = document.querySelector('#user_email')
    const userNameInput = document.querySelector('#software_user_name')
    const expirationDateInput = document.querySelector('#expiration_date')
    const versionInput = document.querySelector('#version') 
    const idInputInput = document.querySelector('#id')

    document.addEventListener('DOMContentLoaded', async () => {

        const parameytrosURL = new URLSearchParams(window.location.search);

        const idLicencia = parseInt(parameytrosURL.get('id'));

        const licencia = await obtenerLicencia(idLicencia);

        mostrarLicencia(licencia);

        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarLicencia);

    });

    function mostrarLicencia(licencia) {
        const {companyName, fullName, jobTitle, email, userName, expirationDate, version, id} = licencia;

        companyNameInput.value = companyName;
        fullNameInput.value = fullName;
        jobTitleInput.value = jobTitle;
        emailInput.value = email;
        userNameInput.value = userName;
        expirationDateInput.value = expirationDate;
        versionInput.value = version;
        idInputInput.value = id;
        
    }

    function validarLicencia(e) {
        e.preventDefault();

        const license = {
            companyName: companyNameInput.value, 
            fullName: fullNameInput.value, 
            jobTitle: jobTitleInput.value,
            email: emailInput.value,
            userName: userNameInput.value,
            expirationDate: expirationDateInput.value,
            version: versionInput.value,
            id: parseInt(idInputInput.value)
        }

        if (validar(license)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        actualizarLicencia(license);
    }

})();