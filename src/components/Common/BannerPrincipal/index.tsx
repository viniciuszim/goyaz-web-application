import { BannerPrincipalPageProps } from 'types/api'

export default function BannerPrincipal(props: BannerPrincipalPageProps) {
  // console.log(props)
  return (
    <>
      {/* begin home section */}
      <section className="home-section" id="home">
        <div className="home-section-overlay"></div>

        {/* begin container */}
        <div className="container">
          {/* begin row */}
          <div className="row">
            {/* begin col-md-6*/}
            <div className="col-md-6 padding-top-120">
              <h1>Award-Winning Agency Based In Manchested</h1>

              <p className="hero-text">
                Excepteur sint occaecat cupidatat nonet proident, vante nisn
                culpa qui officia deserunt etimus quis autem nets lorem entimus
                velis netsad.
              </p>

              {/* begin popup-video-wrapper*/}
              <div className="popup-gallery-wrapper">
                {/* begin popup-video*/}
                <div className="popup-gallery hero-gallery">
                  <a
                    className="popup4 video-icon"
                    href="https://www.youtube.com/watch?v=FPfQMVf4vwQ"
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                {/* end popup-video*/}

                <p className="popup-video-text">Watch Presentation Video</p>
              </div>
              {/* end popup-video-wrapper*/}
            </div>
            {/* end col-md-6*/}

            {/* begin col-md-5*/}
            <div className="col-md-5 offset-md-1 margin-top-20">
              {/* begin register-form-wrapper*/}
              <div
                className="register-form-wrapper wow bounceIn"
                data-wow-delay="0.5s"
                // style={"visibility: visible; animation-delay: 0.5s; animation-name: bounceIn;"
              >
                <h3>Get Your Free 14-Day Trial</h3>

                <p>Velis demo enim quia tempor magnet.</p>

                {/* begin form*/}
                <div>
                  {/* begin success message */}
                  <p
                    className="register_success_box"
                    style={{ display: 'none' }}
                  >
                    We received your message and you ll hear from us soon. Thank
                    You!
                  </p>
                  {/* end success message */}

                  {/* begin register form */}
                  <form
                    id="register-form"
                    className="register-form register"
                    action="php/register.php"
                    method="post"
                  >
                    <input
                      className="register-input name-input white-input"
                      required
                      name="register_names"
                      placeholder="Company Name*"
                      type="text"
                    />

                    <input
                      className="register-input name-email white-input"
                      required
                      name="register_email"
                      placeholder="Email Adress*"
                      type="email"
                    />

                    <select
                      className="register-input white-input"
                      required
                      name="register_ticket"
                    >
                      <option value="">We need LaunchPage for...</option>

                      <option value="Individual">Our Support Team</option>

                      <option value="Professional">Our Sales Department</option>
                    </select>

                    <input
                      value="Start My Free 14-Day Trial"
                      className="register-submit"
                      type="submit"
                    />
                  </form>
                  {/* end register form */}

                  <p className="register-form-terms">
                    No Credit Card &#8226; No Installation Required
                  </p>
                </div>
                {/* end form*/}
              </div>
              {/* end register-form-wrapper*/}
            </div>
            {/* end col-md-5*/}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end home section */}
    </>
  )
}
