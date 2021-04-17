import { LandingPageProps } from 'types/api'

import Navigation from 'components/Navigation'
import Banner2 from 'components/Pages/Banner2'
import Banner3 from 'components/Pages/Banner3'
import BannerPrincipal from 'components/Pages/BannerPrincipal'
import Caracteristicas from 'components/Pages/Caracteristicas'
import ComoPodemosAjudar from 'components/Pages/ComoPodemosAjudar'
import Depoimentos from 'components/Pages/Depoimentos'
import FaleConosco from 'components/Pages/FaleConosco'
import Numeros from 'components/Pages/Numeros'
import OQueFazemos from 'components/Pages/OQueFazemos'
import Parceiros from 'components/Pages/Parceiros'
import PerguntasFrequentes from 'components/Pages/PerguntasFrequentes'
import Preco from 'components/Pages/Preco'
import SocialMidia from 'components/Pages/SocialMidia'

const Main = (props: LandingPageProps) => {
  const {
    BannerPrincipal: BannerPrincipalProps,
    Parceiros: ParceirosProps,
    OQueFazemos: OQueFazemosProps,
    ComoPodemosAjudar: ComoPodemosAjudarProps,
    Banner2: Banner2Props,
    Numeros: NumerosProps,
    Depoimentos: DepoimentosProps,
    Banner3: Banner3Props,
    Caracteristicas: CaracteristicasProps,
    Preco: PrecoProps,
    PerguntasFrequentes: PerguntasFrequentesProps,
    FaleConosco: FaleConoscoProps,
    SocialMidia: SocialMidiaProps
  } = props
  return (
    <>
      <Navigation {...props} />

      <BannerPrincipal {...BannerPrincipalProps} />

      <Parceiros {...ParceirosProps} />

      <OQueFazemos {...OQueFazemosProps} />

      <ComoPodemosAjudar {...ComoPodemosAjudarProps} />

      <Banner2 {...Banner2Props} />

      <Numeros {...NumerosProps} />

      <Depoimentos {...DepoimentosProps} />

      <Banner3 {...Banner3Props} />

      <Caracteristicas {...CaracteristicasProps} />

      <Preco {...PrecoProps} />

      <PerguntasFrequentes {...PerguntasFrequentesProps} />

      <FaleConosco {...FaleConoscoProps} />

      <SocialMidia {...SocialMidiaProps} />
    </>
  )
}

export default Main
