import { ParceirosPageProps } from 'types/api'

export default function Parceiros(props: ParceirosPageProps) {
  // console.log(props)
  return (
    <>
      {/* begin partners-section*/}
      <div className="partners-section">
        {/* begin container*/}
        <div className="container">
          {/* begin row*/}
          <div className="row">
            {/* begin col-sm-12*/}
            <div className="col-md-10 mx-auto text-center partners">
              <h5 className="partners-title">As featured in:</h5>
              <img
                src="http://placehold.it/250x128"
                className="partners"
                alt="image"
              />
              <img
                src="http://placehold.it/250x128"
                className="partners"
                alt="image"
              />
              <img
                src="http://placehold.it/250x128"
                className="partners"
                alt="image"
              />
              <img
                src="http://placehold.it/250x128"
                className="partners"
                alt="image"
              />
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
