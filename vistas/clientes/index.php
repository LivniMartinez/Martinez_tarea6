<?php include_once '../../includes/header.php'?>
<?php include_once '../../includes/navbar.php'?>
    <div class="container">
        <h1 class="text-center">Formulario de ingreso de clientes</h1>
        <div class="row justify-content-center">
            <form  method="POST" class="col-lg-8 border bg-light p-3">
                <div class="row mb-3">
                    <input type="hidden" id="cliente_id" >
                    <div class="col">
                    <label for="cliente_nombre">Nombre del cliente</label>
                        <input type="text" name="cliente_nombre" id="cliente_nombre" class="form-control">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col">
                        <label for="cliente_nit">Nit del cliente</label>
                        <input type="text" name="cliente_nit" id="cliente_nit" class="form-control">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col">
                        <button type="submit" id="botonGuardar" class="btn btn-primary w-100">Guardar</button>
                    </div>
                    <div class="col">
                        <button type="button" id="botonModificar" class="btn btn-warning w-100">Modificar</button>
                    </div>
                    <div class="col">
                        <button type="button" id="botonBuscar" class="btn btn-info w-100">Buscar</button>
                    </div>
                    <div class="col">
                        <button type="button" id="botonCancelar" class="btn btn-danger w-100">Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="row justify-content-center" id="divTabla">
            <div class="col-lg-8">
                <h2>Listado de Clientes</h2>
                <table class="table table-bordered table-hover" id="tablaProductos">
                    <thead class="table-dark">
                        <tr>
                            <th>NO. </th>
                            <th>NOMBRE</th>
                            <th>NIT</th>
                            <th>Modificar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <script src="../../src/js/funciones.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.18/dist/sweetalert2.all.min.js"></script>
    <script src="../../src/js/clientes/index.js"></script>
<?php include_once '../../includes/footer.php'?> 