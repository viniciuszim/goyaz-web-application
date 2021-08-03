import React, { useState } from 'react'

import InputMask from 'react-input-mask'
import Slider from 'react-slick'

import { BannerPrincipalPageProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

interface BannerPrincipalProps {
  lista: BannerPrincipalPageProps[]
}

const sliderSettings = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

export default function BannerPrincipal(props: BannerPrincipalProps) {
  const { lista } = props

  if (!lista) {
    return <div style={{ height: 108 }}>&nbsp;</div>
  }

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [veiculo, setVeiculo] = useState('')

  const enviarContato = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    window.open(
      `https://api.whatsapp.com/send?phone=5562999118653&text=Olá, Sou o ${nome}, telefone ${telefone}, veículo ${veiculo}. Gostaria de fazer uma simulação...`,
      '_target'
    )

    setNome('')
    setTelefone('')
    setVeiculo('')
  }

  const handleSection = (
    { imagens, titulo, descricao, link, formulario }: BannerPrincipalPageProps,
    index: number,
    size: number
  ) => {
    return (
      <>
        {/* begin home section */}
        <section
          className={
            formulario && formulario.ativo
              ? 'home-section'
              : size === 1
              ? 'home-section home-section-no-form-big'
              : 'home-section home-section-no-form'
          }
          id={index === 0 ? 'home' : `home-${index}`}
          style={{
            background: `url(${getImageUrl(
              imagens.image.url
            )}) top center no-repeat`,
            backgroundSize: 'cover'
          }}
        >
          <div className="home-section-overlay2"></div>

          {/* begin container */}
          <div className="container">
            {/* begin row */}
            <div className="row">
              {/* begin col-md-6*/}
              <div
                className={
                  formulario
                    ? 'col-md-6 padding-top-120'
                    : 'col-md-12 padding-banner align-center'
                }
              >
                <a href={link} target="_blank" rel="noreferrer">
                  <h1>{titulo}</h1>

                  <p className="hero-text">{descricao}</p>

                  {/* begin popup-video-wrapper*/}
                  {/* <div className="popup-gallery-wrapper">
                  <div className="popup-gallery hero-gallery">
                    <a
                      className="popup4 video-icon"
                      href="https://www.youtube.com/watch?v=FPfQMVf4vwQ"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>

                  <p className="popup-video-text">Watch Presentation Video</p>
                </div> */}
                  {/* end popup-video-wrapper*/}
                </a>
              </div>
              {/* end col-md-6*/}

              {/* begin col-md-5*/}
              {formulario && formulario.ativo && (
                <div
                  className="col-md-5 offset-md-1 margin-top-20"
                  style={{ zIndex: 9999 }}
                >
                  {/* begin register-form-wrapper*/}
                  <div
                    className="register-form-wrapper wow bounceIn"
                    data-wow-delay="0.5s"
                    // style={"visibility: visible; animation-delay: 0.5s; animation-name: bounceIn;"
                  >
                    <h3>{formulario.titulo}</h3>

                    <p>{formulario.descricao}</p>

                    {/* begin form*/}
                    <div>
                      {/* begin success message */}
                      <p
                        className="register_success_box2"
                        style={{ display: 'none' }}
                      >
                        Recebemos sua mensagem e você terá notícias nossas em
                        breve. Obrigado!
                      </p>
                      {/* end success message */}

                      {/* begin register form */}
                      {/* TODO enviar p/ https://api.whatsapp.com/send?phone=5562999118653&text=Ol%C3%A1%2C%20tudo%20bem%3F%0D%0AVim%20do%20site%2C%20e%20gostaria%20de%20fazer%20uma%20cota%C3%A7%C3%A3o%20pro%20meu%20veiculo%3A */}
                      <form
                        id="register-form2"
                        className="register-form register"
                        action=""
                        method="post"
                        onSubmit={enviarContato}
                      >
                        <input
                          className="register-input name-input white-input"
                          required
                          name="register_names"
                          placeholder="Seu Nome*"
                          type="text"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                        />

                        <InputMask
                          className="register-input name-telefone white-input"
                          required
                          name="register_names"
                          placeholder="Seu Telefone*"
                          mask="(99)99999-9999"
                          value={telefone}
                          onChange={(e: any) => setTelefone(e.target.value)}
                        />

                        <input
                          className="register-input name-veiculo white-input"
                          required
                          name="register_email"
                          placeholder="Seu Veículo*"
                          type="text"
                          value={veiculo}
                          onChange={(e) => setVeiculo(e.target.value)}
                        />

                        {/* <select
                          className="register-input white-input"
                          required
                          name="register_ticket"
                        >
                          <option value="">We need LaunchPage for...</option>

                          <option value="Individual">Our Support Team</option>

                          <option value="Professional">
                            Our Sales Department
                          </option>
                        </select> */}

                        <input
                          value={formulario.botao.label}
                          className="register-submit"
                          type="submit"
                        />
                      </form>
                      {/* end register form */}

                      {/* <p className="register-form-terms">
                        No Credit Card &#8226; No Installation Required
                      </p> */}
                    </div>
                    {/* end form*/}
                  </div>
                  {/* end register-form-wrapper*/}
                </div>
              )}
              {/* end col-md-5*/}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end home section */}
      </>
    )
  }

  return (
    <Slider {...sliderSettings}>
      {lista.map((banner, index) => {
        if (!banner.ativo && index === 0) {
          return <div style={{ height: 108 }}>&nbsp;</div>
        }
        return (
          <div key={index}>{handleSection(banner, index, lista.length)}</div>
        )
      })}
    </Slider>
  )
}
