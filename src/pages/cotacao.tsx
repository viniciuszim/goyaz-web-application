const Cotacao = () => (
  <div id="app">
    {/* Início do Header */}
    <header className="header-page">
      <div className="container">
        <img
          style={{ display: 'none' }}
          className="pwrImgLogo"
          id="logo"
          alt="Logo"
        />
        <a
          style={{ display: 'none' }}
          href="javascript:void(0)"
          target="_blank"
          className="button-whatsapp pwrConsultantExists"
          rel="noreferrer"
        >
          <i className="icon-whatsapp"></i>
          <span>
            <small>Whatsapp do consultor</small>
            <p className="pwrConsultantPhone"></p>
          </span>
        </a>
      </div>
    </header>
    {/* Fim do Header */}

    {/* Banner */}
    <section className="banner pwrBackColor">
      {/* Header Banner */}
      <div className="container">
        <header>
          {/* Text Banner */}
          <div className="text-banner">
            <h1>Proteja seu veículo sem sair de casa</h1>
            <p>
              O risco de bater seu carro ou ser roubado é muito alto, não fique
              desprotegido. Faça agora uma cotação e contrate online.
            </p>
          </div>

          <div className="box-call-to-action-form pwr_form">
            <span>Proteja seu veículo. Faça sua cotação!</span>
            <div className="step" id="pwr_step_1">
              <div className="group-form">
                <label>Meu nome é:</label>
                <input type="text" id="pwr_field_name" />
              </div>
              <div className="group-form">
                <label>E-mail:</label>
                <input type="text" id="pwr_field_email" />
              </div>
              <div className="group-form">
                <label>WhatsApp:</label>
                <input type="text" id="pwr_field_mobile" />
              </div>
              <div className="group-form">
                <button type="submit" className="button" id="pwr_step_1_next">
                  Próximo passo
                </button>
              </div>
            </div>
            {/* STEP 2 */}
            <div className="step" style={{ display: 'none' }} id="pwr_step_2">
              <div className="group-form">
                <label>Tipo de veículo:</label>
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="pwr_field_type_car"
                      className="option-input radio"
                      name="pwr_field_type"
                      value="1"
                    />
                    <label htmlFor="pwr_field_type_car">Carro</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="pwr_field_type_motorcycle"
                      className="option-input radio"
                      name="pwr_field_type"
                      value="2"
                    />
                    <label htmlFor="pwr_field_type_motorcycle">Moto</label>
                  </li>
                  <li>
                    <input
                      id="pwr_field_type_truck"
                      type="radio"
                      className="option-input radio"
                      name="pwr_field_type"
                      value="3"
                    />
                    <label htmlFor="pwr_field_type_truck">Caminhão</label>
                  </li>
                </ul>
              </div>
              <div className="row-flexbox">
                <div className="group-form two-col">
                  <label htmlFor="pwr_field_brand">Marca</label>
                  <select id="pwr_field_brand"></select>
                </div>
                <div className="group-form two-col">
                  <label htmlFor="pwr_field_year">Ano Modelo</label>
                  <select id="pwr_field_year"></select>
                </div>
              </div>
              <div className="group-form">
                <label htmlFor="pwr_field_model">Modelo</label>
                <select id="pwr_field_model"></select>
              </div>
              <div className="row-flexbox">
                <button type="submit" className="back" id="pwr_step_2_back">
                  <i className="icon-left"></i>
                </button>
                <button className="button" id="pwr_step_2_next">
                  Próximo passo
                </button>
              </div>
            </div>

            <div className="step" style={{ display: 'none' }} id="pwr_step_3">
              <div className="group-form">
                <label htmlFor="pwr_field_state">Moro no Estado:</label>
                <select id="pwr_field_state"></select>
              </div>
              <div className="group-form">
                <label>Na cidade:</label>
                <select id="pwr_field_city"></select>
              </div>
              <div className="group-form">
                <label>
                  O seu veículo é Placa Vermelha ou usado em Taxi e Aplicativo?
                </label>
                <div className="box-input">
                  <input
                    id="pwr_field_uber"
                    type="checkbox"
                    className="option-input checkbox"
                  />
                  <label htmlFor="pwr_field_uber">
                    Sim <small>(deixe desmarcado se não usar)</small>
                  </label>
                </div>
              </div>

              <div className="row-flexbox">
                <button type="submit" className="back" id="pwr_step_3_back">
                  <i className="icon-left"></i>
                </button>
                <button className="button" id="pwr_step_3_go">
                  Receber Cotação
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* Footer Banner */}
      <div className="container">
        <footer>
          <div className="box-banner">
            <div className="number">1</div>
            <div className="text-box">
              <span>Faça uma cotação</span>
              <p>
                Descubra em tempo real o valor da mensalidade do seu veículo
              </p>
            </div>
          </div>

          <div className="box-banner">
            <div className="number">2</div>
            <div className="text-box">
              <span>Contrate online</span>
              <p>
                Escolha um plano, inclua opcionais e faça o pagamento online
              </p>
            </div>
          </div>

          <div className="box-banner">
            <div className="number">3</div>
            <div className="text-box">
              <span>Faça sua vistoria</span>
              <p>
                Baixe nosso aplicativo, faça sua própria vistoria e fique
                protegido mais rápido
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
    {/* Fim do Banner */}

    {/* Proteção Veicular Completa */}
    <div className="section-boxs">
      <div className="container">
        <div className="title-section">
          <span>Proteção Veicular Completa</span>
          <p>Com ressarcimento de até 100% da tabela FIPE</p>
        </div>

        <ul className="lists-box">
          <li>
            <i className="icon-icone-furto-roubo"></i>
            <div className="text-list-box">
              <span>Furto / Roubo</span>
              <p>
                Seja ressarcido em até 100% do valor de tabela FIPE caso seu
                veículo seja roubado ou furtado.
              </p>
            </div>
          </li>

          <li>
            <i className="icon-icone-colisoes"></i>
            <div className="text-list-box">
              <span>Colisão</span>
              <p>
                Em caso de acidente, nós providenciamos o conserto do seu
                veículo.
              </p>
            </div>
          </li>
          <li>
            <i className="icon-icone-perda-total"></i>
            <div className="text-list-box">
              <span>Perda total</span>
              <p>
                Se o estrago configurar Perda Total, nós iremos indenizá-lo por
                este prejuízo.
              </p>
            </div>
          </li>
          <li>
            <i className="icon-icone-incendio"></i>
            <div className="text-list-box">
              <span>Incêndio</span>
              <p>
                Com a gente o seu veículo fica protegido em casos de incêndio
                com indenização total ou parcial.
              </p>
            </div>
          </li>
          <li>
            <i className="icon-icone-granizo"></i>
            <div className="text-list-box">
              <span>Fenômenos naturais</span>
              <p>
                Se seu veículo for danificado por alagamentos, quedas de árvores
                ou chuvas de granizo, nós ressarcimos seu prejuízo.
              </p>
            </div>
          </li>
          <li>
            <i className="icon-icone-brasil"></i>
            <div className="text-list-box">
              <span>Cobertura em todo Brasil</span>
              <p>
                Não importa onde aconteça o evento, você poderá contar conosco
                em todo o Brasil.
              </p>
            </div>
          </li>
          <li>
            <i className="icon-icone-carro-reserva"></i>
            <div className="text-list-box">
              <span>Carro reserva</span>
              <p>
                Disponha um carro reserva caso aconteça algum imprevisto e o seu
                precise ir para à oficina.
              </p>
            </div>
          </li>
          <li>
            <i className="icon-icone-colisoes"></i>
            <div className="text-list-box">
              <span>Proteção para terceiros</span>
              <p>
                Caso você se envolva em um acidente com outro veículo, os
                consertos serão por nossa conta.
              </p>
            </div>
          </li>
          <li>
            <i className="icon-icone-vidros"></i>
            <div className="text-list-box">
              <span>Cobertura para vidros</span>
              <p>
                Caso aconteça algum dano com seus vidros, podemos substituí-los
                por outros novos.
              </p>
            </div>
          </li>
        </ul>
        <div className="row-flexbox-center">
          <button
            className="button-modal"
            data-toggle="modal"
            data-target="#cotation"
          >
            Faça uma cotação
          </button>
        </div>
      </div>
    </div>
    {/* Fim da Sessão Proteção Veicular Completa */}

    {/* Assistência 24 Horas Completa */}
    <div className="section-list">
      <div className="container">
        <div className="title-section">
          <span>Assistência 24 Horas Completa</span>
          <p>Cobertura em todo território nacional</p>
        </div>

        <ul className="lists">
          <li className="first-li">
            <div className="product">
              <span>Produto</span>
            </div>
            <div className="description">
              <p>Descrição</p>
            </div>
          </li>

          <li>
            <div className="product">
              <i className="icon-check"></i>
              <span>Reboque</span>
            </div>
            <div className="description">
              <p>
                Temos reboques disponíveis 24 horas em todo Brasil para te
                socorrer em casos de acidente ou pane.
              </p>
            </div>
          </li>

          <li>
            <div className="product">
              <i className="icon-check"></i>
              <span>Chaveiro</span>
            </div>
            <div className="description">
              <p>
                Trancou a chave dentro do carro? Nós enviamos um chaveiro para
                resolver seu problema na hora.
              </p>
            </div>
          </li>

          <li>
            <div className="product">
              <i className="icon-check"></i>
              <span>Troca de pneus</span>
            </div>
            <div className="description">
              <p>
                Furou o pneu? Nós enviamos um técnico para trocá-lo ou um
                reboque para te levar à um borracheiro.
              </p>
            </div>
          </li>

          <li>
            <div className="product">
              <i className="icon-check"></i>
              <span>Taxi</span>
            </div>
            <div className="description">
              <p>
                Seu veículo te deixou na mão e você precisa chegar ao seu
                destino? Nós chamamos um taxi para você.
              </p>
            </div>
          </li>

          <li>
            <div className="product">
              <i className="icon-check"></i>
              <span>Hospedagem</span>
            </div>
            <div className="description">
              <p>
                Seu veículo te deixou na mão e você precisa passar a noite em
                algum hotel? Nós conseguimos um para você.
              </p>
            </div>
          </li>

          <li>
            <div className="product">
              <i className="icon-check"></i>
              <span>Guarda do veículo</span>
            </div>
            <div className="description">
              <p>
                Não tem lugar para guardar seu veículo acidentado? Nós o
                guardamos até que você consiga resolver.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    {/* Fim da Sessão Assistência 24 Horas Completa */}

    {/* Sessão Call to Action */}
    <div className="section-call-to-action">
      <div className="container">
        <h2>Faça uma cotação gratuita</h2>
        <p>Descubra em tempo real quanto custa proteger seu veículo</p>
        <button type="submit" data-toggle="modal" data-target="#cotation">
          Faça uma cotação
        </button>
      </div>
    </div>
    {/* Fim da sessão Call to Action */}

    {/* Footer */}
    <footer className="footer-page">
      <div className="container">
        <header style={{ display: 'none' }} className="pwrConsultantExists">
          <div className="consultant">
            <img className="pwrConsultantPicture" alt="" />
            <div className="dados-consultant">
              <span>Consultor</span>
              <span className="pwrConsultantName"></span>
              <span className="pwrConsultantEmail"></span>
            </div>
          </div>

          <a
            href="javascript:void(0)"
            target="_blank"
            className="button-whatsapp pwrConsultantExists"
            rel="noreferrer"
          >
            <i className="icon-whatsapp"></i>
            <span>
              <small>Whatsapp do consultor</small>
              <p className="pwrConsultantPhone"></p>
            </span>
          </a>
        </header>
        <footer>
          <p className="pwrContentName"></p>
          <a
            target="_blank"
            href="http://powercrm.com.br"
            title="Somos um sistema de vendas para associações de proteção veicular"
            rel="noreferrer"
          >
            <img
              alt="Somos um sistema de vendas para associações de proteção veicular"
              src="/cotacao/images/power-crm.svg"
            />
          </a>
        </footer>
      </div>
    </footer>
    {/* Fim do Footer */}

    {/* Modal */}
    <div
      className="modal fade"
      id="cotation"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          {/* Form */}

          <div className="box-call-to-action-form pwr_form">
            <span>Proteja seu veículo. Faça sua cotação!</span>
            <div className="step" id="pwr_step_1">
              <div className="group-form">
                <label>Meu nome é:</label>
                <input type="text" id="pwr_field_name" />
              </div>
              <div className="group-form">
                <label>E-mail:</label>
                <input type="text" id="pwr_field_email" />
              </div>
              <div className="group-form">
                <label>WhatsApp:</label>
                <input type="text" id="pwr_field_mobile" />
              </div>
              <div className="group-form">
                <button type="submit" className="button" id="pwr_step_1_next">
                  Próximo passo
                </button>
              </div>
            </div>
            {/* STEP 2 */}
            <div className="step" style={{ display: 'none' }} id="pwr_step_2">
              <div className="group-form">
                <label>Tipo de veículo:</label>
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="pwr_field_type_car"
                      className="option-input radio"
                      name="pwr_field_type"
                      value="1"
                    />
                    <label htmlFor="pwr_field_type_car">Carro</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="pwr_field_type_motorcycle"
                      className="option-input radio"
                      name="pwr_field_type"
                      value="2"
                    />
                    <label htmlFor="pwr_field_type_motorcycle">Moto</label>
                  </li>
                  <li>
                    <input
                      id="pwr_field_type_truck"
                      type="radio"
                      className="option-input radio"
                      name="pwr_field_type"
                      value="3"
                    />
                    <label htmlFor="pwr_field_type_truck">Caminhão</label>
                  </li>
                </ul>
              </div>
              <div className="row-flexbox">
                <div className="group-form two-col">
                  <label htmlFor="pwr_field_brand">Marca</label>
                  <select id="pwr_field_brand"></select>
                </div>
                <div className="group-form two-col">
                  <label htmlFor="pwr_field_year">Ano</label>
                  <select id="pwr_field_year"></select>
                </div>
              </div>
              <div className="group-form">
                <label htmlFor="pwr_field_model">Modelo</label>
                <select id="pwr_field_model"></select>
              </div>
              <div className="row-flexbox">
                <button type="submit" className="back" id="pwr_step_2_back">
                  <i className="icon-left"></i>
                </button>
                <button className="button" id="pwr_step_2_next">
                  Próximo passo
                </button>
              </div>
            </div>

            <div className="step" style={{ display: 'none' }} id="pwr_step_3">
              <div className="group-form">
                <label htmlFor="pwr_field_state">Moro no Estado:</label>
                <select id="pwr_field_state"></select>
              </div>
              <div className="group-form">
                <label>Na cidade:</label>
                <select id="pwr_field_city"></select>
              </div>
              <div className="group-form">
                <label>
                  O seu veículo é Placa vermelha ou usado em Taxi e Aplicativo?
                </label>
                <div className="box-input">
                  <input
                    id="pwr_field_uber"
                    type="checkbox"
                    className="option-input checkbox"
                  />
                  <label htmlFor="pwr_field_uber">
                    Sim <small>(deixe desmarcado se não usar)</small>
                  </label>
                </div>
              </div>

              <div className="row-flexbox">
                <button type="submit" className="back" id="pwr_step_3_back">
                  <i className="icon-left"></i>
                </button>
                <button className="button" id="pwr_step_3_go">
                  Receber Cotação
                </button>
              </div>
            </div>
          </div>

          {/*  /Fim form */}
        </div>
      </div>
    </div>
    {/* /Modal */}
  </div>
)

export default Cotacao
