class Product{
    constructor(id,nombre,autor,cantidad,precio,editorial,fecha,genero,imagen,descripcion){
        this.id=id;
        this.nombre=nombre;
        this.autor=autor;
        this.cantidad=cantidad;
        this.precio=precio;
        this.editorial=editorial;
        this.fecha=fecha;
        this.genero=genero;
        this.imagen=imagen;
        this.descripcion=descripcion;
    }
}


class UI {
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `   
            <div class="col">
                 <div class="card" style="width: 18rem;">
                     <img src="img/${product.imagen}" class="card-img-top" alt="...">
                     <div class="card-body">
                       <ul>
                       <strong>ID</strong>: ${product.id}
                       <li><strong>Nombre del Libro</strong>: ${product.nombre}</li>
                       <li><strong>Autor</strong>: ${product.autor}</li>
                       <li><strong>Stock</strong>: ${product.cantidad}</li>
                       <li><strong>Precio $</strong>: ${product.precio}</li>    <!-- ETIQUETA OFICIAL --> 
                       <li><strong>Editorial</strong>: ${product.editorial}</li>
                       <li><strong>Fecha de Publicacion</strong>: ${product.fecha}</li>
                       <li><strong>Genero</strong>: ${product.genero}</li>
                       <li><strong>Descripcion</strong>: ${product.descripcion}</li>
                       </ul>
                       <div class="card-footer">
                       <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                       <div>
                      </div>
                    </div>
              </div>
            </div>       
        `;
        productList.appendChild(element);
        this.resetForm();
        // window.addEventListener('load', () => {
        //     fetch('https://g9cd7530b8a8613-ecommerce.adb.sa-santiago-1.oraclecloudapps.com/ords/inacap_ecommerce/libros_osores/')
        //     .then((resultado)=> {
        //      return(resultado.json);
        //     })
        //     .then((datos)=> {
        //      console.log(datos)
        //      for (i in datos.items){
        //          console.log(datos.items[i]);
        //          document.getElementById('productos').innerHTML += `
        //          <div class="col">
        //          <div class="card" style="width: 18rem;">
        //              <img src="img/${datos.items[i].imagen}" class="card-img-top" alt="...">
        //              <div class="card-body">
        //                <ul>
        //                <strong>ID</strong>: ${datos.product.id}
        //                <li><strong>Nombre del Libro</strong>: ${datos.product.nombre}</li>
        //                <li><strong>Autor</strong>: ${datos.product.autor}</li>
        //                <li><strong>Stock</strong>: ${datos.product.cantidad}</li>
        //                <li><strong>Precio $</strong>: ${datos.product.precio}</li>    <!-- ETIQUETA OFICIAL --> 
        //                <li><strong>Editorial</strong>: ${datos.product.editorial}</li>
        //                <li><strong>Fecha de Publicacion</strong>: ${product.fecha}</li>
        //                <li><strong>Genero</strong>: ${product.genero}</li>
        //                <li><strong>Descripcion</strong>: ${product.descripcion}</li>
        //                </ul>
        //                <div class="card-footer">
        //                <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
        //                <div>
        //              </div>
        //            </div>
        //      </div>       
        //         `
             
        
        //      }
        //     })
        //     .catch(()=> {});//...
        //     });
        
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
    const autor = document.getElementById('autor').value
    const cantidad = document.getElementById('cantidad').value
    const precio = document.getElementById('precio').value
    const editorial = document.getElementById('editorial').value
    const fecha = document.getElementById('year').value
    const genero = document.getElementById('genero').value
    const imagen = document.getElementById('imagen').value
    const descripcion = document.getElementById('descripcion').value

    

    const product =new Product(id,nombre,autor,cantidad,precio,editorial,fecha,genero,imagen,descripcion);
    const ui = new UI();
    ui.addProduct(product);
    ui.showMessage('Producto agregado', 'success');
    e.preventDefault(); //para que no desaparezca esto puedo intervenir con la rapidez de la pagina ya que esto es util para almacenar en un servidor 
});

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
});