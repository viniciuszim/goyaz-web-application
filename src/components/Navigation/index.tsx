import { LandingPageProps } from 'types/api'

export default function Navigation(props: LandingPageProps) {
  const { LogoProps, MenuPrincipalProps: menus } = props

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
    </>
  )
}
