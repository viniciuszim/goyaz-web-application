import { LandingPageProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

export default function Navigation(props: LandingPageProps) {
  const { Logo, MenuPrincipal: menus } = props
  const { imagem } = Logo

  return (
    <>
      {/* begin header */}
      <header className="header">
        {/* begin navbar-fixed-top */}
        <nav className="navbar navbar-expand-lg navbar-default navbar-fixed-top">
          {/* begin container */}
          <div className="container">
            {/* begin logo */}
            <a className="navbar-brand" href="/">
              <img
                src={getImageUrl(imagem.image.url)}
                style={{ height: 46 }} // ideal 46
              />
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
                {menus &&
                  menus.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={item.alternativo ? 'discover-link' : ''}
                      >
                        <a
                          href={item.link}
                          className={item.alternativo ? 'discover-btn' : ''}
                        >
                          {item.label}
                        </a>
                      </li>
                    )
                  })}
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
