const formulario = document.querySelector('form')
const botonBuscar = document.getElementById('botonBuscar');
const botonModificar = document.getElementById('botonModificar');
const botonGuardar = document.getElementById('botonGuardar');
const botonCancelar = document.getElementById('botonCancelar');
const divTabla = document.getElementById('divTabla');
const tablaProductos = document.getElementById('tablaProductos');

botonModificar.disabled = true
botonModificar.parentElement.style.display = 'none'
botonCancelar.disabled = true
botonCancelar.parentElement.style.display = 'none'

const guardar = async (evento) => {
    evento.preventDefault();
    if(!validarFormulario(formulario, ['cliente_id'])){
        alert('Debe llenar todos los campos');
        return 
    }

    const body = new FormData(formulario)
    body.append('tipo', 1)
    body.delete('cliente_id')
    const url = '/Martinez_tarea6/controladores/clientes/index.php';
    const config = {
        method : 'POST',
        // body: otroNombre
        body
    }

    try {
        const respuesta = await fetch(url, config)
        const data = await respuesta.json();
        
        const {codigo, mensaje,detalle} = data;

        switch (codigo) {
            case 1:
                formulario.reset();
                buscar();
                break;
        
            case 0:
                console.log(detalle)
                break;
        
            default:
                break;
        }

        alert(mensaje);

    } catch (error) {
        console.log(error);
    }
}
const buscar = async () => {

    let cliente_nombre = formulario.cliente_nombre.value;
    let cliente_nit = formulario.cliente_nit.value;
    const url = `/Martinez_tarea6/controladores/clientes/index.php?cliente_nombre=${cliente_nombre}&cliente_nit=${cliente_nit}`;
    const config = {
        method : 'GET'
    }
    
        try {
            const respuesta = await fetch(url, config)
            const data = await respuesta.json();
            
            tablaProductos.tBodies[0].innerHTML = ''
            const fragment = document.createDocumentFragment();
            console.log(data);
            if(data.length > 0){
                let contador = 1;
                data.forEach( cliente => {
                    //Se crearon los elementos
                    const tr = document.createElement('tr');
                    const td1 = document.createElement('td')
                    const td2 = document.createElement('td')
                    const td3 = document.createElement('td')
                    const td4 = document.createElement('td')
                    const td5 = document.createElement('td')
                    const buttonModificar = document.createElement('button')
                    const buttonEliminar = document.createElement('button')
    
                    // Caracteristicas de los elementos
                    buttonModificar.classList.add('btn', 'btn-warning')
                    buttonEliminar.classList.add('btn', 'btn-danger')
                    buttonModificar.textContent = 'Modificar'
                    buttonEliminar.textContent = 'Eliminar'
    
                    buttonModificar.addEventListener('click', () => colocarDatos(cliente))
                    buttonEliminar.addEventListener('click', () => eliminar(cliente.CLIENTE_ID))
    
                    td1.innerText = contador;
                    td2.innerText = cliente.CLIENTE_NOMBRE
                    td3.innerText = cliente.CLIENTE_NIT
                    
                    
                    // ESTRUCTURANDO DOM
                    td4.appendChild(buttonModificar)
                    td5.appendChild(buttonEliminar)
                    tr.appendChild(td1)
                    tr.appendChild(td2)
                    tr.appendChild(td3)
                    tr.appendChild(td4)
                    tr.appendChild(td5)
    
                    fragment.appendChild(tr);
    
                    contador++;
                })
            }else{
                const tr = document.createElement('tr');
                const td = document.createElement('td')
                td.innerText = 'No existen registros'
                td.colSpan = 5
                tr.appendChild(td)
                fragment.appendChild(tr);
            }
    
            tablaProductos.tBodies[0].appendChild(fragment)
        } catch (error) {
            console.log(error);
        }
    }