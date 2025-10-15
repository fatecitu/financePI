import { login } from "../modules/auth.js";

export function loginUi(){
    const form = document.getElementById('formLogin')
    if(!form) return

    form.addEventListener('submit', async(e) => {
        e.preventDefault() //evita recarregar
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        if(!email || !password){
            Swal.fire({
                icon: 'error',
                title: 'Erro no login',
                text: 'É obrigatório informar o email e a senha para fazer o login',
                confirmButtonText: 'Tentar novamente'
            })
            return
        }
        try {
            await login(email, password)
            await Swal.fire({
                icon: 'success',
                title: 'Login bem sucedido!',
                text: 'Aguarde... Redirecionando para o menu',
                showConfirmButton: false,
                timer: 1500 //1.5seg
            })
            window.location.href = 'menu.html'
        } catch (err){
           Swal.fire({
            icon: 'error',
            title: 'Erro no login',
            text: err.message,
            confirmButtonText: 'Tentar novamente'
           })
        }
    })
}