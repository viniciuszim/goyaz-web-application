const GET_LANDING_PAGE = /* GraphQL */ `
  # Components
  fragment AvaliacaoComp on ComponentComponentAvaliacao {
    titulo
    valor
  }

  fragment BotaoComp on ComponentComponentBotao {
    label
    link
    linkExterno
    primario
    secundario
  }

  fragment ImageComp on ComponentComponentImage {
    image {
      caption
      url
    }
    link
    linkExterno
  }

  fragment DepoimentoComp on ComponentComponentDepoimento {
    imagem {
      ...ImageComp
    }
    nome
    cargo
    descricao
    ativo
  }

  fragment FaqComp on ComponentComponentFaq {
    pergunta
    resposta
    ativo
  }

  fragment FormItemComp on ComponentComponentFormularioItem {
    icone
    nome
    placeholder
    obrigatorio
  }

  fragment FormComp on ComponentComponentFormulario {
    titulo
    descricao
    itens {
      ...FormItemComp
    }
    botao {
      ...BotaoComp
    }
    ativo
  }

  fragment IconeDescComp on ComponentComponentIconeDescricao {
    icone
    titulo
    descricao
    cor
  }

  fragment ListaTextoComp on ComponentComponentTextList {
    label
  }

  fragment PrecoComp on ComponentComponentPreco {
    destaque
    tipo
    moeda
    valor
    frequencia
    botao {
      ...BotaoComp
    }
    itens {
      ...ListaTextoComp
    }
    ativo
  }

  fragment RedesSociaisComp on ComponentComponentRedesSociais {
    icone
    nome
    link
  }

  # Pages
  fragment LogoPage on LandingPage {
    Logo {
      imagem {
        ...ImageComp
      }
    }
  }

  fragment MenuPrincipalPage on LandingPage {
    MenuPrincipal {
      label
      link
      alternativo
    }
  }

  fragment ParceirosPage on LandingPage {
    Parceiros {
      titulo
      imagens {
        ...ImageComp
      }
      ativo
    }
  }

  fragment OQueFazemosPage on LandingPage {
    OQueFazemos {
      titulo
      descricao
      lista {
        ...IconeDescComp
      }
      ativo
    }
  }

  fragment ComoPodemosAjudarPage on LandingPage {
    ComoPodemosAjudar {
      imagem {
        ...ImageComp
      }
      titulo
      descricao
      TextList {
        ...ListaTextoComp
      }
      botao {
        ...BotaoComp
      }
      ativo
    }
  }

  fragment BannerPrincipalPage on LandingPage {
    BannerPrincipal {
      imagens {
        ...ImageComp
      }
      titulo
      descricao
      link
      formulario {
        ...FormComp
      }
      ativo
    }
  }

  fragment Banner2Page on LandingPage {
    Banner2 {
      imagens {
        ...ImageComp
      }
      icones {
        ...IconeDescComp
      }
      ativo
    }
  }

  fragment NumerosPage on LandingPage {
    Numeros {
      background {
        ...ImageComp
      }
      titulo
      itens {
        ...IconeDescComp
      }
      ativo
    }
  }

  fragment DepoimentosPage on LandingPage {
    Depoimentos {
      titulo
      descricao
      avaliacoes {
        ...AvaliacaoComp
      }
      depoimentos {
        ...DepoimentoComp
      }
      ativo
    }
  }

  fragment Banner3Page on LandingPage {
    Banner3 {
      background {
        ...ImageComp
      }
      titulo
      descricao
      botoes {
        ...BotaoComp
      }
      ativo
    }
  }

  fragment CaracteristicasPage on LandingPage {
    Caracteristicas {
      titulo
      descricao
      itens {
        ...IconeDescComp
      }
      ativo
    }
  }

  fragment PrecoPage on LandingPage {
    Preco {
      titulo
      descricao
      itens {
        ...PrecoComp
      }
      ativo
    }
  }

  fragment PerguntasFrequentesPage on LandingPage {
    PerguntasFrequentes {
      titulo
      descricao
      itens {
        ...FaqComp
      }
      ativo
    }
  }

  fragment FaleConoscoPage on LandingPage {
    FaleConosco {
      titulo
      descricao
      button {
        ...BotaoComp
      }
      ativo
    }
  }

  fragment SocialMidiaPage on LandingPage {
    SocialMidia {
      itens {
        ...RedesSociaisComp
      }
      ativo
    }
  }

  # Main
  query GET_LANDING_PAGE {
    landingPage {
      ...LogoPage
      ...MenuPrincipalPage
      ...BannerPrincipalPage
      ...ParceirosPage
      ...OQueFazemosPage
      ...ComoPodemosAjudarPage
      ...Banner2Page
      ...NumerosPage
      ...DepoimentosPage
      ...Banner3Page
      ...CaracteristicasPage
      ...PrecoPage
      ...PerguntasFrequentesPage
      ...FaleConoscoPage
      ...SocialMidiaPage
    }
  }
`

export default GET_LANDING_PAGE
