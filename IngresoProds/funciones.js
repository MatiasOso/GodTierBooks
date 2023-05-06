class Product{
    constructor(id,nombre,autor,cantidad,precio,imagen){
        this.id=id;
        this.nombre=nombre;
        this.autor=autor;
        this.cantidad=cantidad;
        this.precio=precio;
        this.imagen=imagen;
    }
}

class UI {
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>ID/strong>: ${product.id}
                    <strong>Nombre del Libro</strong>: ${product.nombre}
                    <strong>Autor</strong>: ${product.autor}
                    <strong>Stock</strong>: ${product.cantidad}
                    <strong>Precio $</strong>: ${product.precio}
                    <strong>Imagen</strong>: ${product.imagen}
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
        this.resetForm();
        
    }
    deleteProduct(element){
        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto eliminado', 'danger');
        }

    }
    showMessage(message,cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        // Mostrando en el DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },2000);
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }
}

//DOM EVENTS
document.getElementById('product-form').addEventListener('submit',function(e) {
   const id = document.getElementById('id').value
   const nombre = document.getElementById('name').value
   const cantidad = document.getElementById('cantidad').value
   const precio = document.getElementById('precio').value
   const imagen = document.getElementById('imagen').value

    

    const product =new Product(id,nombre,cantidad,precio,imagen);
    const ui = new UI();
    ui.addProduct(product);
    ui.showMessage('Producto agregado', 'success');
    e.preventDefault(); //para que no desaparezca esto puedo intervenir con la rapidez de la pagina ya que esto es util para almacenar en un servidor 
});

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
});