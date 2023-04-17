import React, {useState} from "react";
import "./style-contact.css"

function Contact(props) {
    return (
        <main>
        <form id="form">
            <div class="form-control">
                <label for="username">Nome e Sobrenome</label>
                <input type="text" id="username" placeholder="Digite seu nome e sobrenome."/>
                <i class="fas fa-exclamation-circle"></i>
                <i class="fas fa-check-circle"></i>
                <small>Mensagem de Erro</small>
            </div>

            <div class="form-control ">
                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Digite seu e-mail."/>
                <i class="fas fa-exclamation-circle"></i>
                <i class="fas fa-check-circle"></i>
                <small>Mensagem de Erro</small>
            </div>

            <div class="form-control"> 
                <label for="telefone">Telefone</label>
                <input type="text" id="telefone" placeholder="(99) 99999-9999" maxlength="15" />
                <i class="fas fa-exclamation-circle"></i>
                <i class="fas fa-check-circle"></i>
                <small>Mensagem de Erro</small>
            </div>

            <div>
                    <label for="mensage">Mensagem</label>
                    <textarea name="mensage" id="mensage" cols="60" rows="9" class="input-padrao"></textarea>
            </div>

                    <button id="button" onclick="event.preventDefault()" type="submit">Enviar</button>                
                </form>
            </main>

    )
}

export default Contact;