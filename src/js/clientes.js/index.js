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
}