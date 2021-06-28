import { LandingPageProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

export default function Navigation(props: LandingPageProps) {
  const { Logo, MenuPrincipal: menus } = props
  const { imagem } = Logo

  return (
    <>
      {/* begin header */}
      <div className="row" style={{ backgroundColor: 'black', fontSize: 14 }}>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=5562995531771&text=Olá, queria uma informação..."
            target="_blank"
            rel="noreferrer"
          >
            <img className="whatsapp" src="img/whatsapp-circle.png" />
          </a>
        </div>
        <div className="col-xs-12 col-sm-2">&nbsp;</div>
        <div className="col-xs-12 col-sm-8">
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              alignItems: 'center',
              backgroundColor: 'black',
              height: 40
            }}
          >
            <i
              className="fa fa-phone"
              style={{
                color: 'var(--secundary-color)',
                fontSize: 18,
                fontWeight: 'bold',
                marginRight: 10
              }}
            ></i>
            <span>Grande Goiânia:&nbsp;</span>
            <span>(62) 3287-4569</span>
            <span style={{ marginLeft: 10, marginRight: 10 }}>
              &nbsp;&nbsp;|&nbsp;&nbsp;
            </span>
            <i
              className="fab fa-whatsapp"
              style={{
                color: 'var(--secundary-color)',
                fontSize: 18,
                fontWeight: 'bold',
                marginRight: 10
              }}
            ></i>
            <span>WhatsApp:&nbsp;</span>
            <a
              href="https://api.whatsapp.com/send?phone=5562995531771&text=Olá, queria uma informação..."
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'white',
                textDecoration: 'underline'
              }}
            >
              (62) 99553-1771
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-sm-2">&nbsp;</div>
      </div>
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
