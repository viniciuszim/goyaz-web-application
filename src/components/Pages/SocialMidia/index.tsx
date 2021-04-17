import { SocialMidiaPageProps } from 'types/api'

export default function SocialMidia(props: SocialMidiaPageProps) {
  const { ativo } = props

  if (!ativo) {
    return <></>
  }
  // console.log(props)
  return (
    <>
      {/* begin footer */}
      <div className="footer">
        {/* begin container */}
        <div className="container">
          {/* begin row */}
          <div className="row">
            {/* begin col-md-5 */}
            <div className="col-md-5">
              <p>
                © 2020 <span className="template-name">LaunchPage</span>.
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
