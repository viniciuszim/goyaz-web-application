// # Components

export type AvaliacaoComp = {
  titulo: string
  valor: number
}

export type BotaoComp = {
  label: string
  link: string
  linkExterno: string
  primario: boolean
  secundario: boolean
}

export type ImageType = {
  caption: string
  url: string
}

export type ImageComp = {
  image: ImageType
  link: string
  linkExterno: string
}

export type DepoimentoComp = {
  imagem: ImageComp
  nome: string
  cargo: string
  descricao: string
  ativo: boolean
}

export type FaqComp = {
  pergunta: string
  resposta: string
  ativo: boolean
}

export type FormItemComp = {
  icone: string
  nome: string
  placeholder: string
  obrigatorio: boolean
}

export type FormComp = {
  titulo: string
  descricao: string
  itens: FormItemComp
  botao: BotaoComp
  ativo: boolean
}

export type IconeDescComp = {
  icone: string
  titulo: string
  descricao: string
  cor: string
}

export type ListaTextoComp = {
  label: string
}

export type PrecoComp = {
  destaque: string
  tipo: string
  moeda: string
  valor: number
  frequencia: string
  botao: BotaoComp
  itens: [ListaTextoComp]
  ativo: boolean
}

export type RedesSociaisComp = {
  icone: string
  nome: string
  link: string
}

// # Pages
export type LogoPageProps = {
  imagem: ImageComp
}

export type MenuPrincipalPageProps = {
  label: string
  link: string
  alternativo: boolean
}

export type BannerPrincipalPageProps = {
  imagens: [ImageComp]
  titulo: string
  descricao: string
  link: string
  formulario: FormComp
  ativo: boolean
}

export type ParceirosPageProps = {
  titulo: string
  imagens: [ImageComp]
  ativo: boolean
}

export type OQueFazemosPageProps = {
  titulo: string
  descricao: string
  lista: [IconeDescComp]
  ativo: boolean
}

export type ComoPodemosAjudarPageProps = {
  imagem: ImageComp
  titulo: string
  descricao: string
  TextList: [ListaTextoComp]
  botao: BotaoComp
  ativo: boolean
}

export type Banner2PageProps = {
  imagens: [ImageComp]
  icones: [IconeDescComp]
  ativo: boolean
}

export type NumerosPageProps = {
  background: ImageComp
  titulo: string
  itens: [IconeDescComp]
  ativo: boolean
}

export type DepoimentosPageProps = {
  titulo: string
  descricao: string
  avaliacoes: [AvaliacaoComp]
  depoimentos: [DepoimentoComp]
  ativo: boolean
}

export type Banner3PageProps = {
  background: ImageComp
  titulo: string
  descricao: string
  botoes: [BotaoComp]
  ativo: boolean
}

export type CaracteristicasPageProps = {
  titulo: string
  descricao: string
  itens: [IconeDescComp]
  ativo: boolean
}

export type PrecoPageProps = {
  titulo: string
  descricao: string
  itens: [PrecoComp]
  ativo: boolean
}

export type PerguntasFrequentesPageProps = {
  titulo: string
  descricao: string
  itens: [FaqComp]
  ativo: boolean
}

export type FaleConoscoPageProps = {
  titulo: string
  descricao: string
  button: BotaoComp
  ativo: boolean
}

export type SocialMidiaPageProps = {
  itens: [RedesSociaisComp]
  ativo: boolean
}

// # Main

export type LandingPageProps = {
  Logo: LogoPageProps
  MenuPrincipal: [MenuPrincipalPageProps]
  BannerPrincipal: BannerPrincipalPageProps
  Parceiros: ParceirosPageProps
  OQueFazemos: OQueFazemosPageProps
  ComoPodemosAjudar: ComoPodemosAjudarPageProps
  Banner2: Banner2PageProps
  Numeros: NumerosPageProps
  Depoimentos: DepoimentosPageProps
  Banner3: Banner3PageProps
  Caracteristicas: CaracteristicasPageProps
  Preco: PrecoPageProps
  PerguntasFrequentes: PerguntasFrequentesPageProps
  FaleConosco: FaleConoscoPageProps
  SocialMidia: SocialMidiaPageProps
}
