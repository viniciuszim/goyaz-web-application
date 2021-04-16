import { PerguntasFrequentesPageProps } from 'types/api'

export default function PerguntasFrequentes(
  props: PerguntasFrequentesPageProps
) {
  // console.log(props)
  return (
    <>
      {' '}
      {/* begin faq section */}
      <section className="section-white" id="faq">
        {/* begin container */}
        <div className="container">
          {/* begin row */}
          <div className="row">
            {/* begin col-md-12*/}
            <div className="col-md-12 text-center padding-bottom-10">
              <h2 className="section-title">Frequently Asked Questions</h2>

              <p className="section-subtitle">
                Quis autem velis ets reprehender net etid quiste voluptate.
              </p>
            </div>
            {/* end col-md-12 */}
          </div>
          {/* end row */}

          {/* begin row */}
          <div className="row">
            {/* begin col-md-6*/}
            <div className="col-md-6">
              <div className="faq-box">
                <h5>Velit ut tortizi pretium viverra suspendisse?</h5>

                <p>
                  Utise wisi enim minim veniam, quis et stationes ullamcorper
                  nets suscipit ets lobotis nisle consequat nihis etim. Quis
                  autem velis ets reprehender net etid quiste voluptate velite
                  esse sedis.
                </p>
              </div>

              <div className="faq-box">
                <h5>Maecenas volutpat blandit etiam?</h5>

                <p>
                  Utise wisi enim minim veniam, quis et stationes ullamcorper
                  nets suscipit ets lobotis nisle consequat nihis etim. Quis
                  autem velis ets reprehender net etid quiste voluptate velite
                  esse sedis.
                </p>
              </div>
            </div>
            {/* end col-md-6 */}

            {/* begin col-md-6*/}
            <div className="col-md-6">
              <div className="faq-box">
                <h5>Nibh sit amet aliquam commodo?</h5>

                <p>
                  Utise wisi enim minim veniam, quis et stationes ullamcorper
                  nets suscipit ets lobotis nisle consequat nihis etim. Quis
                  autem velis ets reprehender net etid quiste voluptate velite
                  esse sedis.
                </p>
              </div>

              <div className="faq-box">
                <h5>Elementum curabitur vitae?</h5>

                <p>
                  Utise wisi enim minim veniam, quis et stationes ullamcorper
                  nets suscipit ets lobotis nisle consequat nihis etim. Quis
                  autem velis ets reprehender net etid quiste voluptate velite
                  esse sedis.
                </p>
              </div>
            </div>

            {/* end col-md-6 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end faq section */}
    </>
  )
}
