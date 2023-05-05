class Register{
    constructor(nombre, fec, email, password1, password2){
        this.nombre = nombre;
        this.fec = fec; //fecha de nacimiento
        this.email = email;
        this.password1 = password1;
        this.password2 = password2;

    }   
}
class UI{
    // addUser(User){
    //     const userList = document.getElementById('Registro');
    //     const element = document.createElement('div');
    //     element.innerHTML = `
    //         <div class="card text-center mb-4">
    //             <div class="card-body">
    //                 <strong>Nombre/strong>: ${User.nombre}
    //                 <strong>Email/strong>: ${User.email}
    //                 <strong>Fecha de nacimiento/strong>: ${User.fec}
    //                 <strong>Contraseña/strong>: ${User.password1}
    //                 <strong>Repita su contraseña/strong>: ${User.password2}
    //             </div>
    //         </div>
    //     `;
    //     userList.appendChild(element);
    //     this.resetForm();
    // }
    resetForm(){
        document.getElementById('register').reset();
    }
    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-success ${cssClass}`;
        div.appendChild(document.createTextNode('Usuario registrado'));
        // Mostrando en el DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }


}

// DOM Events
document.getElementById('register')
    .addEventListener('submit', function(e){
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const fec = document.getElementById('fec').value;
        const password1 = document.getElementById('password1').value;
        const password2 = document.getElementById('password2').value;
        
        
        console.log(new Register(nombre, fec, email, password1, password2));
        const User = new Register(nombre, fec, email, password1, password2);

        const ui = new UI();
        //  ui.addUser(User);
        ui.resetForm();
        ui.showMessage('Usuario registrado', 'success');

        e.preventDefault();
    });
