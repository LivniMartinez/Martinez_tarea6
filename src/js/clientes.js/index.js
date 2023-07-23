const formulario = document.querySelector('form')
const botonBuscar = document.getElementById('botonBuscar');
const botonModificar = document.getElementById('botonModificar');
const botonGuardar = document.getElementById('botonGuardar');
const botonCancelar = document.getElementById('botonCancelar');



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

