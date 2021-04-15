// # Components
export type ImageType = {
  caption: string
  url: string
}

export type ImageComp = {
  image: ImageType
  link: string
  linkExterno: string
}

// # Pages
export type LogoPageProps = {
  Logo: ImageComp
}

// # Main

export type LandingPageProps = {
  Logo: LogoPageProps
}
