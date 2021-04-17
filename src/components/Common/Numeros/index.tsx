import { NumerosPageProps } from 'types/api'

export default function Numeros(props: NumerosPageProps) {
  const { ativo } = props

  if (!ativo) {
    return false
  }
  // console.log(props)
  return (
    <>
      {/* begin section-bg-1 */}
      <section className="section-bg-1">
        <div className="section-bg-overlay"></div>

        {/* begin container*/}
        <div className="container">
          {/* begin row*/}
          <div className="row">
            {/* begin col md 7 */}
            <div className="col-md-7 mx-auto margin-bottom-20 text-center">
              <h2 className="white-text">Fun Facts About Our Agency</h2>
            </div>
            {/* end col md 7*/}
          </div>
          {/* end row*/}

          {/* begin row*/}
          <div className="row">
            {/* begin fun-facts-box */}
            <div className="col-md-2 offset-md-2 fun-facts-box text-center">
              <i className="far fa-gem"></i>

              <p className="fun-facts-title">
                <span className="facts-numbers">1050+</span>
                <br />
                Projects Completed
              </p>
            </div>
            {/* end fun-facts-box */}

            {/* begin fun-facts-box */}
            <div className="col-md-2 fun-facts-box text-center">
              <i className="far fa-heart"></i>

              <p className="fun-facts-title">
                <span className="facts-numbers">217k</span>
                <br />
                Happy Clients
              </p>
            </div>
            {/* end fun-facts-box */}

            {/* begin fun-facts-box */}
            <div className="col-md-2 fun-facts-box text-center">
              <i className="fas fa-award"></i>

              <p className="fun-facts-title">
                <span className="facts-numbers">1210</span>
                <br />
                Design Awards
              </p>
            </div>
            {/* end fun-facts-box */}

            {/* begin fun-facts-box */}
            <div className="col-md-2 fun-facts-box text-center">
              <i className="fas fa-anchor"></i>

              <p className="fun-facts-title">
                <span className="facts-numbers">2137</span>
                <br />
                Line Of Codes
              </p>
            </div>
            {/* end fun-facts-box */}
          </div>
          {/* end row*/}
        </div>
        {/* end container*/}
      </section>
      {/* end section-bg-1 */}
    </>
  )
}
