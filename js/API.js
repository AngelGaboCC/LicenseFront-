const url = 'http://127.0.0.1:8000/licenses/' //'https://api-test-license.onrender.com/licenses/'

export const nuevaLicencia = async license => {
    
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(license),
            headers: {
                'Content-Type':'application/json'

            }
            
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}


export const obtenerLicencias = async () => {
    try {
        const resultado = await fetch(url);
        const licencias = await resultado.json();
        return licencias;


    } catch (error) {
        console.log(error);
    }
} 

export const eliminarLicencia = async id => {
    try {
        await fetch(`${url}${id}`, {
            method: 'DELETE'
        })
    window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

export const obtenerLicencia = async id => {
    try {
        const resultado = await fetch(`${url}${id}`);
        const licencia = await resultado.json();
        
        return licencia;
    } catch (error) {
        console.log(error);
    }
}

export const actualizarLicencia = async licencia => {
    try {
        await fetch(`${url}${licencia.id}`, {
            method: 'PUT',
            body: JSON.stringify(licencia),
            headers: {
                'Content-type' : 'application/json'
            }  
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}