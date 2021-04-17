import { PrecoPageProps } from 'types/api'

export default function Preco(props: PrecoPageProps) {
  const { ativo } = props

  if (!ativo) {
    return false
  }
  // console.log(props)
  return (
    <>
      {/* begin pricing section */}
      <section className="section-grey" id="pricing">
        {/* begin container */}
        <div className="container">
          {/* begin row */}
          <div className="row align-items-center">
            {/* begin col-md-4 */}
            <div className="col-md-4 col-sm-12">
              <h3>Great pricing plans tailored to your needs.</h3>

              <p>
                Quis autem velis ets reprehender net etid quiste voluptate.
                Utise wisi enim minim veniam, quis et stationes nets.
              </p>
            </div>
            {/* end col-md-4 */}

            {/* begin col-md-4*/}
            <div
              className="col-md-4 col-sm-6 wow bounceIn"
              data-wow-delay="0.25s"
              // style="visibility: visible; animation-delay: 0.25s; animation-name: bounceIn;"
            >
              <div className="price-box-white">
                <ul className="pricing-list">
                  <li className="price-title">MONTHLY</li>

                  <li className="price-value">$19</li>

                  <li className="price-subtitle">Per Month</li>

                  <li className="price-tag">
                    <a href="#">GET STARTED</a>
                  </li>

                  <li className="price-text">First two weeks free.</li>

                  <li className="price-text">Amazing freatures.</li>
                </ul>
              </div>
            </div>
            {/* end col-md-4 */}

            {/* begin col-md-4 */}
            <div
              className="col-md-4 col-sm-6 wow bounceIn"
              data-wow-delay="0.75s"
              // style="visibility: visible; animation-delay: 0.75s; animation-name: bounceIn;"
            >
              <div className="price-box-grey">
                <ul className="pricing-list">
                  <li className="price-title">ANNUALY</li>

                  <li className="price-value">$29</li>

                  <li className="price-subtitle">Per Year</li>

                  <li className="price-tag">
                    <a href="#">GET STARTED</a>
                  </li>

                  <li className="price-text">First two weeks free.</li>

                  <li className="price-text">Save 45% with this plan</li>

                  <li className="price-text">Amazing freatures.</li>
                </ul>
              </div>
            </div>
            {/* end col-md-4 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end pricing section */}
    </>
  )
}
