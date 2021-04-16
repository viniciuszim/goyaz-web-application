import { LandingPageProps } from 'types/api'

import Navigation from 'components/Navigation'
import Banner2 from 'components/Common/Banner2'
import Banner3 from 'components/Common/Banner3'
import BannerPrincipal from 'components/Common/BannerPrincipal'
import Caracteristicas from 'components/Common/Caracteristicas'
import ComoPodemosAjudar from 'components/Common/ComoPodemosAjudar'
import Depoimentos from 'components/Common/Depoimentos'
import FaleConosco from 'components/Common/FaleConosco'
import Numeros from 'components/Common/Numeros'
import OQueFazemos from 'components/Common/OQueFazemos'
import Parceiros from 'components/Common/Parceiros'
import PerguntasFrequentes from 'components/Common/PerguntasFrequentes'
import Preco from 'components/Common/Preco'
import SocialMidia from 'components/Common/SocialMidia'

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
