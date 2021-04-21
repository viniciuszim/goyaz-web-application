import { ParceirosPageProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

export default function Parceiros(props: ParceirosPageProps) {
  const { titulo, imagens, ativo } = props

  if (!ativo) {
    return <></>
  }
  return (
    <>
      {/* begin partners-section*/}
      <div className="partners-section" id="partners">
        {/* begin container*/}
        <div className="container">
          {/* begin row*/}
          <div className="row">
            {/* begin col-sm-12*/}
            <div className="col-md-10 mx-auto text-center partners">
              <h5 className="partners-title">{titulo}</h5>
              {imagens &&
                imagens.map((item, index) => {
                  const { caption, url } = item.image
                  return (
                    <img
                      key={index}
                      src={getImageUrl(url)}
                      className="partners"
                      alt={caption}
                    />
                  )
                })}
            </div>
            {/* end col-sm-12*/}
          </div>
          {/* end row*/}
        </div>
        {/* end container*/}
      </div>
      {/* end partners-section*/}
    </>
  )
}
