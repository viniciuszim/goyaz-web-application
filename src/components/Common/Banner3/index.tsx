import { Banner3PageProps } from 'types/api'

export default function Banner3(props: Banner3PageProps) {
  const { ativo } = props

  if (!ativo) {
    return <></>
  }
  // console.log(props)
  return (
    <>
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
    </>
  )
}
