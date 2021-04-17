import { OQueFazemosPageProps } from 'types/api'

export default function OQueFazemos(props: OQueFazemosPageProps) {
  const { ativo } = props

  if (!ativo) {
    return false
  }
  // console.log(props)
  return (
    <>
      {/* begin section-grey */}
      <section className="section-grey" id="about">
        {/* begin container */}
        <div className="container">
          {/* begin row */}
          <div className="row">
            {/* begin col-md-12 */}
            <div className="col-md-12 text-center margin-bottom-10">
              <h2 className="section-title">What We Do</h2>

              <p className="section-subtitle">
                Dicover how our amazing team can help your business.
              </p>
            </div>
            {/* end col-md-12 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}

        {/* begin services-wrapper */}
        <div className="services-wrapper">
          {/* begin container */}
          <div className="container">
            {/* begin row */}
            <div className="row">
              {/* begin col-md-4 */}
              <div className="col-md-4">
                <div className="main-services blue">
                  <i className="far fa-chart-bar"></i>

                  <h4>Google Analitycs</h4>

                  <p>
                    Curabitur quam etsum lacus net netsum nulat iaculis etsimun
                    vitae etsum nisle varius netsum.
                  </p>
                </div>
              </div>
              {/* end col-md-4 */}

              {/* begin col-md-4 */}
              <div className="col-md-4">
                <div className="main-services red">
                  <i className="far fa-heart"></i>

                  <h4>Brand Awareness</h4>

                  <p>
                    Curabitur quam etsum lacus net netsum nulat iaculis etsimun
                    vitae etsum nisle varius netsum.
                  </p>
                </div>
              </div>
              {/* end col-md-4 */}

              {/* begin col-md-4 */}
              <div className="col-md-4">
                <div className="main-services green">
                  <i className="fas fa-anchor"></i>

                  <h4>Graphic Design</h4>

                  <p>
                    Curabitur quam etsum lacus net netsum nulat iaculis etsimun
                    vitae etsum nisle varius netsum.
                  </p>
                </div>
              </div>
              {/* end col-md-4 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end services-wrapper */}
      </section>
      {/* end section-grey */}
    </>
  )
}
