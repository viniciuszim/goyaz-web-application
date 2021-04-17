import { ComoPodemosAjudarPageProps } from 'types/api'

export default function ComoPodemosAjudar(props: ComoPodemosAjudarPageProps) {
  const { ativo } = props

  if (!ativo) {
    return <></>
  }
  // console.log(props)
  return (
    <>
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
    </>
  )
}
