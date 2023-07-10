import {obtenerLicencias, eliminarLicencia} from './API.js'


(function() {

    const listado = document.querySelector('#listado-licencias');

    document.addEventListener('DOMContentLoaded', mostrarLicencias);

    listado.addEventListener('click', confirmarEliminar);

    async function mostrarLicencias() {
        const licencias = await obtenerLicencias();

        licencias.forEach(licencia => {
            const {companyName, fullName, jobTitle, email, userName, expirationDate, version, id} = licencia;
            
            const row = document.createElement('tr');

            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${companyName} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${fullName}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${jobTitle}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${email}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${userName}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${expirationDate}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${version}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-licencia.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Edit</a>
                    <a href="#" data-licencia="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminate</a>
                </td>
            `;

            listado.appendChild(row);
        });
    }

    function confirmarEliminar(e) {
        if(e.target.classList.contains('eliminar')) {
            const clienteId = parseInt(e.target.dataset.licencia);

            const confirmar = confirm('¿Deseas eliminar este registro?');

            if(confirmar) {
                eliminarLicencia(clienteId)
            }
        }
    }
    
})();