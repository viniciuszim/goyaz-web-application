import { DepoimentosPageProps } from 'types/api'

export default function Depoimentos(props: DepoimentosPageProps) {
  // console.log(props)
  return (
    <>
      {/* begin testimonials section */}
      <section className="section-grey" id="testimonials">
        {/* begin container */}
        <div className="container">
          {/* begin row */}
          <div className="row align-items-center">
            {/* begin col-md-5 */}
            <div className="col-md-5 col-sm-12">
              <h2>What People Are Saying.</h2>

              <p>
                Quis autem velis ets reprehender net etid quiste nets voluptate.
                Utise wisi enim minim veniam, quis etsad aspernatis netsum
                stationes nets.
              </p>

              {/* begin row*/}
              <div className="row">
                {/* begin col-md-4*/}
                <div className="col-md-4 col-sm-6">
                  {/* begin testim-platform*/}
                  <div className="testim-platform first">
                    <p>TrustPilot</p>

                    <div className="testim-rating">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i
                        className="fas fa-star-half-alt"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  {/* end testim-platform*/}
                </div>
                {/* end col-sm-4*/}

                {/* begin col-md-4*/}
                <div className="col-md-4 col-sm-6">
                  {/* begin testim-platform*/}
                  <div className="testim-platform">
                    <p>Feefo</p>

                    <div className="testim-rating">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="far fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                  {/* end testim-platform*/}
                </div>
                {/* end col-sm-4*/}
              </div>
              {/* end row*/}
            </div>
            {/* end col-md-5 */}

            {/* begin col-md-1 */}
            <div className="col-md-1"></div>
            {/* end col-md-1 */}

            {/* begin col-md-6*/}
            <div className="col-md-6">
              {/* begin accordion */}
              <div className="accordion" id="accordionFAQ">
                {/* begin card */}
                <div className="card">
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionFAQ"
                  >
                    <div className="card-body">
                      Nemo enim ipsam voluptatem quia voluptas situm ets
                      aspernatis netsum loris fugit, sed quia magni dolores eos
                      quis ratione sequi etum nets vesciunt neque.
                    </div>
                  </div>

                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <img
                          src="http://placehold.it/200x200"
                          alt="testimonials"
                          className="testim-img"
                        />
                        <p className="testim-name">
                          Alexandra Smith / <span>Manager - SmartCoders</span>
                        </p>
                      </button>
                    </h5>
                  </div>
                </div>
                {/* end card */}

                {/* begin card */}
                <div className="card">
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionFAQ"
                  >
                    <div className="card-body">
                      Nemo enim ipsam voluptatem quia voluptas situm ets
                      aspernatis netsum loris fugit, sed quia magni dolores eos
                      quis ratione sequi etum nets vesciunt neque.
                    </div>
                  </div>

                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <img
                          src="http://placehold.it/200x200"
                          alt="testimonials"
                          className="testim-img"
                        />
                        <p className="testim-name">
                          John Doe / <span>CEO - Epic Design</span>
                        </p>
                      </button>
                    </h5>
                  </div>
                </div>
                {/* end card */}

                {/* begin card */}
                <div className="card">
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionFAQ"
                  >
                    <div className="card-body">
                      Nemo enim ipsam voluptatem quia voluptas situm ets
                      aspernatis netsum loris fugit, sed quia magni dolores eos
                      quis ratione sequi etum nets vesciunt neque.
                    </div>
                  </div>

                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <img
                          src="http://placehold.it/200x200"
                          alt="testimonials"
                          className="testim-img"
                        />
                        <p className="testim-name">
                          Christina Pages / <span>Designer - New Fashion</span>
                        </p>
                      </button>
                    </h5>
                  </div>
                </div>
                {/* end card */}
              </div>
              {/* end accordion */}
            </div>
            {/* end col-md-6*/}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end testimonials section */}
    </>
  )
}
