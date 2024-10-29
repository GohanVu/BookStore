import React from "react";

const Footer = () => (
  <div className="design-system">
    <footer className="footer has-background-accent-2 has-text-white">
      <div className="container">
        <div className="content">
          <div className="columns is-centered">
            <div className="column">
              <div className="grid-container">
                <div className="grid-item"></div>
                <div className="grid-item">
                  <div className="trustpilot-widget" data-locale="en-US" data-template-id="53aa8807dec7e10d38f59f32"
                       data-businessunit-id="5e8b11f2dbc13c0001669534" data-style-height="120px"
                       data-style-width="255px"
                       data-theme="dark" style={{position: "relative"}}>
                    <iframe title="Customer reviews powered by Trustpilot" loading="auto"
                            src="https://widget.trustpilot.com/trustboxes/53aa8807dec7e10d38f59f32/index.html?templateId=53aa8807dec7e10d38f59f32&businessunitId=5e8b11f2dbc13c0001669534#locale=en-US&styleHeight=120px&styleWidth=255px&theme=dark"
                            style={{
                              position: "relative",
                              height: "120px",
                              width: "255px",
                              borderStyle: "none",
                              display: "block",
                              overflow: "hidden"
                            }}></iframe>
                  </div>
                  <div className="climate-neutral-logo mt-4">
                    <a target="_blank" href="https://www.climateneutral.org/brand/bookshop">
                      <img alt="Climate Neutral Certified Badge"
                           src="https://rails-assets-us.bookshop.org/assets/ClimateNeutralLabelCertifiedHorizontalWhiteOutline-17ebe1222195c2028711dcd4eb05d8ef1d83ad6f315c9f4445fa69fc570bfff2.png"/>
                    </a>
                  </div>
                </div>
                <div className="grid-item"></div>
              </div>
            </div>
            <div className="column has-text-centered">
              <div>
                <a className="is-block mb-4 has-text-white" href="https://bookshop.org/info/about-us">About</a>
                <a className="is-block mb-4 has-text-white" rel="noreferrer"
                   href="https://support.bookshop.org/en/support/home">Support / Help</a>
                <a className="is-block mb-4 has-text-white" href="/affiliates/profile/introduction">Become an
                  Affiliate</a>
                <a className="is-block mb-4 has-text-white" href="/gift_cards"><span className="translation_missing"
                                                                                     title="translation missing: en.spree.shared.footer.gift_cards">Gift Cards</span></a>
                <a className="is-block mb-4 has-text-white" rel="noreferrer"
                   href="https://bookshop.org/info/for-authors">Bookshop.org for Authors</a>
                <a className="is-block mb-4 has-text-white" rel="noreferrer"
                   href="https://bookshop.org/info/resources-for-booksellers">Bookshop.org for Bookstores</a>
                <a className="is-block mb-4 has-text-white" href="https://bookshop.org/info/careers">Careers - We're
                  hiring! 🚀</a>
                <a className="is-block mb-4 has-text-white" href="https://bookshop.org/info/indiebound-redirect">Indiebound
                  - Bookshop.org Changeover FAQ</a>
                <a className="is-block mb-4 has-text-white" href="/pages/contact">Contact</a>
                <a className="is-block mb-4 has-text-white" href="https://bookshop.org/info/terms-of-use#returns">Returns
                  and Refund Policy</a>
              </div>
            </div>
            <div className="column has-text-centered">
              <div className="is-size-l has-text-white">Follow us</div>
              <div className="flex justify-center">
                <p className="flex space-x-4">
                  <a href="https://twitter.com/bookshop_org">
                    <img title="X Logo" width="40" height="40" alt="Bookshop.org X formerly Twitter"
                         src="https://rails-assets-us.bookshop.org/assets/icon-x-06f2c6421bcff972e6d6da324504104da14c947623f367be696d63f47a0ea451.svg"/>
                  </a>
                  <a href="https://www.facebook.com/bookshop.org/">
                    <img title="Facebook Logo" width="48" height="48" alt="Bookshop.org Facebook"
                         src="https://rails-assets-us.bookshop.org/assets/icon-facebook-573255ba1a893bcc1b0e26d5bb3d26e29950e72079360d7b58e6ca1aa628757c.svg"/>
                  </a>
                  <a href="https://www.instagram.com/bookshop_org/">
                    <img title="Instagram Logo" width="48" height="48" alt="Bookshop.org Instagram"
                         src="https://rails-assets-us.bookshop.org/assets/icon-instagram-015ea6b8500fb243a606a5117772f949603f9d035d5ab677b7d24a6f379e3cbe.svg"/>
                  </a>
                  <a href="https://www.threads.net/@bookshop_org">
                    <img title="Threads Logo" width="44" height="44" alt="Bookshop.org Threads"
                         src="https://rails-assets-us.bookshop.org/assets/icon-threads-eaa5b4d30197b051e856f3476f6280ad90f0a34ec53cc090da4824a7f34713c8.svg"/>
                  </a>
                  <a href="https://www.tiktok.com/@bookshop_org">
                    <img title="TikTok Logo" width="44" height="44" alt="Bookshop.org TikTok"
                         src="https://rails-assets-us.bookshop.org/assets/icon-tiktok-f258edd439a6a0ff0def1987359fab63825f9204e5cc105aad9ec2f4e731340a.svg"/>
                  </a>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div>Payments Accepted</div>
                <img alt="Accepted Payment Methods: American Express, Discover, Mastercard, Visa" width="150"
                     height="48"
                     src="https://rails-assets-us.bookshop.org/assets/payment_methods-a0a4f59e2dde1469a5f84fa9a6462171db755cdb0dcdf8ce8bd2dc8ecb6fa03f.png"/>
              </div>
              <div className="flex flex-col items-center">
                <img alt="B-Corp Certification"
                     src="https://rails-assets-us.bookshop.org/assets/bcorp_logo-dbd633d3bd3540edec0d2271427738792bd79e1aae13585deec0b658d29ddc08.png"/>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="container is-max-desktop mt-6">
              <div className="has-text-centered">
                <span className="has-text-white">© 2024 All Rights Reserved</span>
                <a className="has-text-white mx-7 is-hidden-mobile" href="https://bookshop.org/info/terms-of-use">Terms
                  of
                  Use</a>
                <a className="has-text-white mx-7 is-hidden-mobile" href="https://bookshop.org/info/privacy-notice">Privacy
                  Notice</a>
                <a className="has-text-white is-hidden-mobile" href="https://bookshop.org/info/accessibility">Accessibility
                  Notice</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
              async></script>
    </footer>
  </div>
);

export default Footer;