import React from 'react'
import InputMask from 'react-input-mask'

export default function Boleto() {
  return (
    <>
      {/* begin section-bg-2 */}
      <section className="section-bg-2" id="boleto">
        <div className="section-bg-overlay"></div>

        {/* begin container*/}
        <div className="container">
          {/* begin row */}
          <div className="row">
            {/* begin col-md-12*/}
            <div className="col-md-12 text-center padding-bottom-10">
              <h2 className="section-title white-text">
                Segunda via de boleto
              </h2>

              <p className="section-subtitle white">
                Solicite aqui a segunda via do seu boleto
              </p>
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
                    id="contact-form2"
                    className="row contact-form contact"
                    action="https://eris.hinova.com.br/sga/area/4.1/login.action.php"
                    method="post"
                    target="_blank"
                  >
                    {/* begin col-md-6*/}
                    <div className="col-md-12">
                      <InputMask
                        className="contact-input"
                        required
                        name="dfsCpf"
                        placeholder="Seu CPF*"
                        mask="999.999.999-99"
                      />

                      <input
                        className="contact-input"
                        required
                        name="dfsSenha"
                        placeholder="Sua Senha*"
                        type="password"
                      />
                    </div>
                    {/* end col-md-6*/}

                    {/* begin col-md-12*/}
                    <div className="col-md-12">
                      <input
                        type="hidden"
                        name="dfsChave"
                        id="dfsChave"
                        value="00d357f7ebdaefd9e7a76cac310081bfc26e35a8eb00fa72190e0e5ab2d102aeacb18e95da5bcca7fceac5e5fdcf659baf2e6d6751f8787dbcf69f89596b5747"
                      />
                      <input
                        value="Solicitar"
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
