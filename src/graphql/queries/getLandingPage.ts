const GET_LANDING_PAGE = /* GraphQL */ `
  # Components
  fragment ImageComp on ComponentComponentImage {
    image {
      caption
      url
    }
    link
    linkExterno
  }

  # Pages
  fragment LogoPage on LandingPage {
    Logo {
      imagem {
        ...ImageComp
      }
    }
  }

  # Main
  query GET_LANDING_PAGE {
    landingPage {
      ...LogoPage
    }
  }
`

export default GET_LANDING_PAGE
