import { FaleConoscoPageProps } from 'types/api'

export default function FaleConosco(props: FaleConoscoPageProps) {
  const { ativo } = props

  if (!ativo) {
    return <></>
  }
  // console.log(props)
  return (
    <>
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
    </>
  )
}
