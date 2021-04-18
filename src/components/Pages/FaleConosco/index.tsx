import React, { useState } from 'react'
import InputMask from 'react-input-mask'

import { FaleConoscoPageProps } from 'types/api'

export default function FaleConosco(props: FaleConoscoPageProps) {
  const { titulo, descricao, button, ativo } = props

  if (!ativo) {
    return <></>
  }

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [cidade, setCidade] = useState('')
  const [mensagem, setMensagem] = useState('')

  const enviarContato = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    // TODO ENVIAR EMAIL
    console.log(nome)
    console.log(telefone)
    console.log(email)
    console.log(cidade)
    console.log(mensagem)

    setNome('')
    setTelefone('')
    setEmail('')
    setCidade('')
    setMensagem('')
  }

  return (
    <>
      {/* begin section-bg-2 */}
      <section className="section-bg-2" id="contact">
        <div className="section-bg-overlay"></div>

        {/* begin container*/}
        <div className="container">
          {/* begin row */}
          <div className="row">
            {/* begin col-md-12*/}
            <div className="col-md-12 text-center padding-bottom-10">
              <h2 className="section-title white-text">{titulo}</h2>

              <p className="section-subtitle white">{descricao}</p>
            </div>
            {/* end col-md-12 */}
          </div>
          {/* end row */}

          {/* begin row*/}
          <div className="row justify-content-md-center">
            {/* begin col-md-8*/}
            <div className="col-md-8 text-center margin-top-10">
              {/* begin contact-form-wrapper*/}
              <div
                className="contact-form-wrapper wow bounceIn"
                data-wow-delay="0.5s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: bounceIn;"
              >
                {/* begin form*/}
                <div>
                  {/* begin success message */}
                  <p
                    className="contact_success_box"
                    style={{ display: 'none' }}
                  >
                    Recebemos sua mensagem e você terá notícias nossas em breve.
                    Obrigado!
                  </p>
                  {/* end success message */}

                  {/* begin contact form */}
                  <form
                    id="contact-form"
                    className="row contact-form contact"
                    action=""
                    method="post"
                    onSubmit={enviarContato}
                  >
                    {/* begin col-md-6*/}
                    <div className="col-md-6">
                      <input
                        className="contact-input"
                        required
                        name="contact_names"
                        placeholder="Seu Nome*"
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                      />

                      <InputMask
                        className="contact-input"
                        required
                        name="contact_phone"
                        placeholder="Seu Telefone*"
                        mask="(99)99999-9999"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                      />
                    </div>
                    {/* end col-md-6*/}

                    {/* begin col-md-6*/}
                    <div className="col-md-6">
                      <input
                        className="contact-input"
                        required
                        name="contact_email"
                        placeholder="Seu E-mail*"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <input
                        className="contact-input"
                        required
                        name="contact_email"
                        placeholder="Sua Cidade*"
                        type="text"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                      />
                    </div>
                    {/* end col-md-6*/}

                    {/* begin col-md-12*/}
                    <div className="col-md-12">
                      <textarea
                        className="contact-input"
                        rows={2}
                        cols={20}
                        name="contact_message"
                        placeholder="Escreva o modelo, versão e ano do seu veículo... (Ford Ka 1.0 SE 2014/2015)"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                      ></textarea>

                      <input
                        value={button.label}
                        className="contact-submit"
                        type="submit"
                      />
                    </div>
                    {/* end col-md-12*/}
                  </form>
                  {/* end contact form */}
                </div>
                {/* end form*/}
              </div>
              {/* end contact-form-wrapper*/}
            </div>
            {/* end col-md-8*/}
          </div>
          {/* end row*/}
        </div>
        {/* end container*/}
      </section>
      {/* end section-bg-2 */}
    </>
  )
}
