import { LandingPageProps } from 'types/api'

const Main = ({ ...props }: LandingPageProps) => {
  const { Logo } = props
  console.log(Logo)
  return (
    <>
      {/* begin header */}
      <header className="header">
        {/* begin navbar-fixed-top */}
        <nav className="navbar navbar-expand-lg navbar-default navbar-fixed-top">
          {/* begin container */}
          <div className="container">
            {/* begin logo */}
            <a className="navbar-brand" href="#">
              LaunchPage
            </a>
            {/* end logo */}

            {/* begin navbar-toggler */}
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="fas fa-bars"></i>
              </span>
            </button>
            {/* end navbar-toggler */}

            {/* begin navbar-collapse */}
            <div className="navbar-collapse collapse" id="navbarCollapse">
              {/* begin navbar-nav */}
              <ul className="navbar-nav ml-auto">
                <li>
                  <a href="#home">Home</a>
                </li>

                <li>
                  <a href="#about">About</a>
                </li>

                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>

                <li>
                  <a href="#portfolio">Work</a>
                </li>

                <li>
                  <a href="#team">Team</a>
                </li>

                <li>
                  <a href="#features">Features</a>
                </li>

                <li>
                  <a href="#pricing">Pricing</a>
                </li>

                <li className="discover-link">
                  <a href="#contact" className="discover-btn">
                    Get Started
                  </a>
                </li>
              </ul>
              {/* end navbar-nav */}
            </div>
            {/* end navbar-collapse */}
          </div>
          {/* end container */}
        </nav>
        {/* end navbar-fixed-top */}
      </header>
      {/* end header */}

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

      {/* begin section-white */}
      <section className="section-white">
        {/* begin container*/}
        <div className="container">
          {/* begin row*/}
          <div className="row align-items-center">
            {/* begin col-md-6*/}
            <div
              className="col-md-6 wow slideInLeft"
              data-wow-delay="0.25s"
              // style="visibility: visible; animation-delay: 0.25s; animation-name: slideInLeft;"
            >
              <div className="margin-right-15">
                <img
                  src="http://placehold.it/555x425"
                  className="width-100 image-shadow bottom-margins-images"
                  alt="pic"
                />
              </div>
            </div>
            {/* end col-sm-6*/}

            {/* begin col-md-6*/}
            <div className="col-md-6">
              <h3>Discover how we can help you to grow your business fast.</h3>

              <p>
                Velis demo enim ipsam voluptatem quia voluptas sit aspernatur
                netsum lorem fugit, seditum netis velas matrix net nesciunt.
              </p>

              <ul className="benefits">
                <li>
                  <i className="fas fa-check"></i> Quias netus magni netsum eos
                  qui ratione sequi.
                </li>
                <li>
                  <i className="fas fa-check"></i> Venis ratione sequi netus
                  enim quia tempor magni.
                </li>
                <li>
                  <i className="fas fa-check"></i> Enim ipsam netus voluptatem
                  quia voluptas.
                </li>
              </ul>

              <a href="#" className="btn-red small scrool">
                Discover More
              </a>
            </div>
            {/* end col-md-6*/}
          </div>
          {/* end row*/}
        </div>
        {/* end container*/}
      </section>
      {/* end section-white*/}

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

      {/* begin section-white */}
      <section className="section-white" id="portfolio">
        {/* begin container */}
        <div className="container">
          {/* begin row */}
          <div className="row">
            {/* begin col-md-12 */}
            <div className="col-md-12 text-center margin-bottom-30">
              <h2 className="section-title">Our Portfolio</h2>

              <p className="section-subtitle">
                Dicover the latest projects accomplished for my clients.
              </p>
            </div>
            {/* end col-md-12 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}

        {/* begin container */}
        <div className="container">
          {/* begin row*/}
          <div
            className="row wow fadeIn"
            data-wow-delay="0.25s"
            // style="visibility: visible; animation-delay: 0.25s; animation-name: fadeIn;"
          >
            {/* begin col-md-4 */}
            <div className="col-md-4 col-sm-12 p-0 m-0">
              <figure className="gallery-insta">
                {/* begin popup-gallery*/}
                <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                  <a className="popup2" href="http://placehold.it/555x460">
                    <img
                      src="http://placehold.it/555x460"
                      className="width-100"
                      alt="pic"
                    />
                    <span className="eye-wrapper">
                      <i
                        className="fa fa-search-plus eye-icon"
                        // style="font-size: 38px;"
                      ></i>
                    </span>
                  </a>
                </div>
                {/* end popup-gallery*/}
              </figure>

              <figure className="gallery-insta">
                {/* begin popup-gallery*/}
                <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                  <a className="popup2" href="http://placehold.it/555x460">
                    <img
                      src="http://placehold.it/555x460"
                      className="width-100"
                      alt="pic"
                    />
                    <span className="eye-wrapper">
                      <i
                        className="fa fa-search-plus eye-icon"
                        // style="font-size: 38px;"
                      ></i>
                    </span>
                  </a>
                </div>
                {/* end popup-gallery*/}
              </figure>
            </div>
            {/* end col-md-4 */}

            {/* begin col-md-4 */}
            <div className="col-md-4 col-sm-6 col-xs-12 p-0 m-0">
              <figure className="gallery-insta">
                {/* begin popup-gallery*/}
                <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                  <a className="popup2" href="http://placehold.it/623x1050">
                    <img
                      src="http://placehold.it/623x1050"
                      className="width-100"
                      alt="pic"
                    />
                    <span className="eye-wrapper">
                      <i
                        className="fa fa-search-plus eye-icon"
                        // style="font-size: 38px;"
                      ></i>
                    </span>
                  </a>
                </div>
                {/* end popup-gallery*/}
              </figure>
            </div>
            {/* end col-md-4 */}

            {/* begin col-md-4 */}
            <div className="col-md-4 col-sm-6 col-xs-12 p-0 m-0">
              <figure className="gallery-insta">
                {/* begin popup-gallery*/}
                <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                  <a className="popup2" href="http://placehold.it/555x460">
                    <img
                      src="http://placehold.it/555x460"
                      className="width-100"
                      alt="pic"
                    />
                    <span className="eye-wrapper">
                      <i
                        className="fa fa-search-plus eye-icon"
                        // style="font-size: 38px;"
                      ></i>
                    </span>
                  </a>
                </div>
                {/* end popup-gallery*/}
              </figure>

              <figure className="gallery-insta">
                {/* begin popup-gallery*/}
                <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                  <a className="popup2" href="http://placehold.it/555x460">
                    <img
                      src="http://placehold.it/555x460"
                      className="width-100"
                      alt="pic"
                    />
                    <span className="eye-wrapper">
                      <i
                        className="fa fa-search-plus eye-icon"
                        // style="font-size: 38px;"
                      ></i>
                    </span>
                  </a>
                </div>
                {/* end popup-gallery*/}
              </figure>
            </div>
            {/* end col-md-4 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end section-white */}

      {/* begin team section */}
      <section className="section-grey" id="team">
        {/* begin container*/}
        <div className="container">
          {/* begin row*/}
          <div className="row">
            {/* begin col-md-12 */}
            <div className="col-md-12 text-center">
              <h2 className="section-title">Meet Our Team</h2>

              <p className="section-subtitle">
                Discover more about our high performing team.
              </p>
            </div>
            {/* end col-md-12 */}

            {/* begin team-item */}
            <div className="col-sm-12 col-md-4 margin-top-30">
              <img
                src="http://placehold.it/555x555"
                className="team-img width-100"
                alt="pic"
              />

              <div className="team-item">
                <h3>CHRISTINA HAWKINS</h3>

                <div className="team-info">
                  <p>Head of SEO</p>
                </div>

                <p>
                  Johnathan is our co-founder and has developed search
                  strategies for a variety of clients for over 5 years.
                </p>
              </div>
            </div>
            {/* end team-item */}

            {/* begin team-item */}
            <div className="col-sm-12 col-md-4 margin-top-30">
              <img
                src="http://placehold.it/555x555"
                className="team-img width-100"
                alt="pic"
              />

              <div className="team-item">
                <h3>ANDRES JOHANSON</h3>

                <div className="team-info geen">
                  <p>Marketing Manager</p>
                </div>

                <p>
                  Andres fell in love with marketing at the school and looks
                  forward to being part of the industry for years.
                </p>
              </div>
            </div>
            {/* end team-item */}

            {/* begin team-item */}
            <div className="col-sm-12 col-md-4 margin-top-30">
              <img
                src="http://placehold.it/555x555"
                className="team-img width-100"
                alt="pic"
              />

              <div className="team-item">
                <h3>ALEXANDRA SMITHS</h3>

                <div className="team-info green">
                  <p>SEO Specialist</p>
                </div>

                <p>
                  Graduating with a degree in Spanish, English and French, she
                  has always loved writing.
                </p>
              </div>
            </div>
            {/* end team-item */}
          </div>
          {/* end row*/}
        </div>
        {/* end container*/}
      </section>
      {/* end team section*/}

      {/* begin section-bg-2 */}
      <section className="section-bg-2">
        <div className="section-bg-overlay"></div>

        {/* begin container*/}
        <div className="container">
          {/* begin row*/}
          <div className="row">
            {/* begin col md 7 */}
            <div className="col-md-7 mx-auto text-center">
              <h2 className="white-text">Award-Winning Agency</h2>

              <p className="white-text">
                Utise wisi enim minim veniam, quis et stationes ullamcorper nets
                suscipit ets lobotis nisle consequat nihis etim aspernatur
                netsum.
              </p>

              <a href="#" className="btn-white small scrool">
                Discover More
              </a>

              <a href="#" className="btn-white-border small scrool">
                Get In Touch
              </a>
            </div>
            {/* end col md 7*/}
          </div>
          {/* end row*/}
        </div>
        {/* end container*/}
      </section>
      {/* end section-bg-2 */}

      {/* begin features section */}
      <section className="section-white" id="features">
        {/* begin container */}
        <div className="container">
          {/* begin row */}
          <div className="row">
            {/* begin col-md-12*/}
            <div className="col-md-12 text-center padding-bottom-10">
              <h2 className="section-title">Amazing Features</h2>

              <p className="section-subtitle">
                Quis autem velis ets reprehender net etid quiste voluptate.
              </p>
            </div>
            {/* end col-md-12 */}
          </div>
          {/* end row */}

          {/* begin row */}
          <div className="row">
            {/* begin col-md-4*/}
            <div className="col-md-4">
              <div
                className="feature-box light-green wow fadeIn"
                data-wow-delay="0.25s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;"
              >
                <i className="fas fa-tools"></i>

                <div className="feature-box-text">
                  <h4>Support 24/7</h4>

                  <p>
                    Utise wisi enim minim veniam, quis tation ullamcorper
                    suscipit et loboti nisl consequat nihis.
                  </p>
                </div>
              </div>
            </div>
            {/* end col-md-4 */}

            {/* begin col-md-4*/}
            <div className="col-md-4">
              <div
                className="feature-box light-blue wow fadeIn"
                data-wow-delay="0.5s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;"
              >
                <i className="fas fa-users"></i>

                <div className="feature-box-text">
                  <h4>User Friendly</h4>

                  <p>
                    Utise wisi enim minim veniam, quis tation ullamcorper
                    suscipit et loboti nisl consequat nihis.
                  </p>
                </div>
              </div>
            </div>
            {/* end col-md-4 */}

            {/* begin col-md 4*/}
            <div className="col-md-4">
              <div
                className="feature-box orange wow fadeIn"
                data-wow-delay="0.75s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;"
              >
                <i className="far fa-bell"></i>

                <div className="feature-box-text">
                  <h4>Notifications</h4>

                  <p>
                    Utise wisi enim minim veniam, quis tation ullamcorper
                    suscipit et loboti nisl consequat nihis.
                  </p>
                </div>
              </div>
            </div>
            {/* end col-md-4 */}
          </div>
          {/* end row */}

          {/* begin row */}
          <div className="row">
            {/* begin col-md-4*/}
            <div className="col-md-4">
              <div
                className="feature-box dark-blue wow fadeIn"
                data-wow-delay="1s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;"
              >
                <i className="fas fa-gift"></i>

                <div className="feature-box-text">
                  <h4>Accesibility</h4>

                  <p>
                    Utise wisi enim minim veniam, quis tation ullamcorper
                    suscipit et loboti nisl consequat nihis.
                  </p>
                </div>
              </div>
            </div>
            {/* end col-md-4 */}

            {/* begin col-md-4*/}
            <div className="col-md-4">
              <div
                className="feature-box light-red wow fadeIn"
                data-wow-delay="1.25s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;"
              >
                <i className="fas fa-piggy-bank"></i>

                <div className="feature-box-text">
                  <h4>Cost Control</h4>

                  <p>
                    Utise wisi enim minim veniam, quis tation ullamcorper
                    suscipit et loboti nisl consequat nihis.
                  </p>
                </div>
              </div>
            </div>
            {/* end col-md-4 */}

            {/* begin col-md-4*/}
            <div className="col-md-4">
              <div
                className="feature-box dark-green wow fadeIn"
                data-wow-delay="1.5s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;"
              >
                <i className="far fa-comments"></i>

                <div className="feature-box-text">
                  <h4>Chat With Friends</h4>

                  <p>
                    Utise wisi enim minim veniam, quis tation ullamcorper
                    suscipit et loboti nisl consequat nihis.
                  </p>
                </div>
              </div>
            </div>
            {/* end col-md-4 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end features section */}

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

      {/* begin section-bg-2 */}
      <section className="section-bg-2" id="contact">
        <div className="section-bg-overlay"></div>

        {/* begin container*/}
        <div className="container">
          {/* begin row */}
          <div className="row">
            {/* begin col-md-12*/}
            <div className="col-md-12 text-center padding-bottom-10">
              <h2 className="section-title white-text">Contact Us</h2>

              <p className="section-subtitle white">
                Have any queries? Get in touch today.
              </p>
            </div>
            {/* end col-md-12 */}
          </div>
          {/* end row */}

          {/* begin row*/}
          <div className="row justify-content-md-center">
            {/* begin col-md-8*/}
            <div className="col-md-8 text-center margin-top-10">
              {/* begin contact-form-wrapper*/}
              <div
                className="contact-form-wrapper wow bounceIn"
                data-wow-delay="0.5s"
                // style="visibility: visible; animation-delay: 0.5s; animation-name: bounceIn;"
              >
                {/* begin form*/}
                <div>
                  {/* begin success message */}
                  <p
                    className="contact_success_box"
                    style={{ display: 'none' }}
                  >
                    We received your message and you ll hear from us soon. Thank
                    You!
                  </p>
                  {/* end success message */}

                  {/* begin contact form */}
                  <form
                    id="contact-form"
                    className="row contact-form contact"
                    action="php/contact.php"
                    method="post"
                  >
                    {/* begin col-md-6*/}
                    <div className="col-md-6">
                      <input
                        className="contact-input"
                        required
                        name="contact_names"
                        placeholder="Your Name*"
                        type="text"
                      />

                      <input
                        className="contact-input"
                        required
                        name="contact_phone"
                        placeholder="Phone Number*"
                        type="text"
                      />
                    </div>
                    {/* end col-md-6*/}

                    {/* begin col-md-6*/}
                    <div className="col-md-6">
                      <input
                        className="contact-input"
                        required
                        name="contact_email"
                        placeholder="Email Adress*"
                        type="email"
                      />

                      <select
                        className="contact-input"
                        required
                        name="contact_ticket"
                      >
                        <option value="">Choose Option</option>

                        <option value="Individual">Individual</option>

                        <option value="Corporate">Corporate</option>
                      </select>
                    </div>
                    {/* end col-md-6*/}

                    {/* begin col-md-12*/}
                    <div className="col-md-12">
                      <textarea
                        className="contact-input"
                        rows={2}
                        cols={20}
                        name="contact_message"
                        placeholder="Your Message..."
                      ></textarea>

                      <input
                        value="Get In Touch"
                        className="contact-submit"
                        type="submit"
                      />
                    </div>
                    {/* end col-md-12*/}
                  </form>
                  {/* end contact form */}
                </div>
                {/* end form*/}
              </div>
              {/* end contact-form-wrapper*/}
            </div>
            {/* end col-md-8*/}
          </div>
          {/* end row*/}
        </div>
        {/* end container*/}
      </section>
      {/* end section-bg-2 */}

      {/* begin footer */}
      <div className="footer">
        {/* begin container */}
        <div className="container">
          {/* begin row */}
          <div className="row">
            {/* begin col-md-5 */}
            <div className="col-md-5">
              <p>
                Â© 2020 <span className="template-name">LaunchPage</span>.
                Designed by{' '}
                <a
                  href="https://themeforest.net/user/epic-themes/portfolio?ref=Epic-Themes"
                  target="_blank"
                  rel="noreferrer"
                >
                  Epic-Themes
                </a>
              </p>
            </div>
            {/* end col-md-5 */}

            {/* begin col-md-2 */}
            <div className="col-md-2"></div>
            {/* end col-md-2 */}

            {/* begin col-md-5 */}
            <div className="col-md-5">
              {/* begin footer_social */}
              <ul className="footer_social">
                <li>Follw us:</li>

                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fab fa-skype"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fab fa-dribble"></i>
                  </a>
                </li>
              </ul>
              {/* end footer_social */}
            </div>
            {/* end col-md-5 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
      {/* end footer */}
    </>
  )
}

export default Main
