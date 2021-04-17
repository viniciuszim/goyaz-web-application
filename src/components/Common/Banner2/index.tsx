import { Banner2PageProps } from 'types/api'

export default function Banner2(props: Banner2PageProps) {
  const { ativo } = props

  if (!ativo) {
    return false
  }
  // console.log(props)
  return (
    <>
      {/* begin section-grey */}
      <section className="section-grey">
        {/* begin container*/}
        <div className="container">
          {/* begin row*/}
          <div className="row align-items-center">
            {/* begin col-md-6*/}
            <div className="col-md-6">
              <div
                className="nav flex-column nav-pills margin-right-25"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  {/* begin features-second */}
                  <div className="features-second">
                    <div className="dropcaps-circle blue">
                      <i className="fas fa-chart-line"></i>
                    </div>

                    <h4 className="margin-bottom-5">
                      Customize your workflow.
                    </h4>

                    <p>
                      Manage any process and be ready to address any challenge
                      with total ease.
                    </p>
                  </div>
                  {/* end features-second*/}
                </a>

                <a
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href="#v-pills-profile"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  {/* begin features-second*/}
                  <div className="features-second">
                    <div className="dropcaps-circle red">
                      <i className="fas fa-network-wired"></i>
                    </div>

                    <h4 className="margin-bottom-5">
                      Easy onboarding, fast adoption.
                    </h4>

                    <p>
                      With Square getting your team on board is as simple as
                      sending an email.
                    </p>
                  </div>
                  {/* end features-second*/}
                </a>

                <a
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-toggle="pill"
                  href="#v-pills-messages"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  {/* begin features-second*/}
                  <div className="features-second">
                    <div className="dropcaps-circle green">
                      <i className="fas fa-rocket"></i>
                    </div>

                    <h4 className="margin-bottom-5">
                      Improve subscriber retention.
                    </h4>

                    <p>
                      Analyze customers by region, discounts and more and put a
                      plan in place.
                    </p>
                  </div>
                  {/* end features-second*/}
                </a>
              </div>
            </div>
            {/* end col-md-6*/}

            {/* begin col-md-6 */}
            <div className="col-md-6">
              <div
                className="tab-content margin-left-20"
                id="v-pills-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <img
                    src="http://placehold.it/555x425"
                    className="width-100 image-shadow top-margins-images"
                    alt="pic"
                  />
                </div>

                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <img
                    src="http://placehold.it/555x425"
                    className="width-100 image-shadow top-margins-images"
                    alt="pic"
                  />
                </div>

                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <img
                    src="http://placehold.it/555x425"
                    className="width-100 image-shadow top-margins-images"
                    alt="pic"
                  />
                </div>
              </div>
            </div>
            {/* end col-md-6 */}
          </div>
          {/* end row*/}
        </div>
        {/* end container*/}
      </section>
      {/* end section-grey*/}
    </>
  )
}
