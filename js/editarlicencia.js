import {obtenerLicencia, actualizarLicencia} from './API.js';
import {mostrarAlerta, validar} from './funciones.js';



(function(){


    const companyNameInput = document.querySelector('#company_name')
    const fullNameInput = document.querySelector('#user_full_name')
    const jobTitleInput = document.querySelector('#job_title')
    const emailInput = document.querySelector('#user_email')
    const softwareInput = document.querySelector('#software_name')
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
        const {company_name, user_full_name, job_title, user_email,software_name, software_user_name, expiration_date, version, id} = licencia;

        companyNameInput.value = company_name;
        fullNameInput.value = user_full_name;
        jobTitleInput.value = job_title;
        emailInput.value = user_email;
        softwareInput.value = software_name;
        userNameInput.value = software_user_name;
        expirationDateInput.value = expiration_date;
        versionInput.value = version;
        idInputInput.value = id;
        
    }

    function validarLicencia(e) {
        e.preventDefault();

        const license = {
            company_name: companyNameInput.value, 
            user_full_name: fullNameInput.value, 
            job_title: jobTitleInput.value,
            user_email: emailInput.value,
            software_name: softwareInput.value,
            software_user_name: userNameInput.value,
            expiration_date: expirationDateInput.value,
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