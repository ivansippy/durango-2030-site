"use client";

import Script from "next/script";

export default function NewsletterFormEmbed() {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 shadow-lg">
      <div id="mlb2-35557292" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-35557292">
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
              <div className="ml-form-embedContent">
                <h4 className="ml-title">Stay Informed</h4>
                <p className="ml-subtitle">Sign up for news and updates as we close in on the event!</p>
              </div>

              <form
                className="ml-block-form"
                action="https://assets.mailerlite.com/jsonp/2025796/forms/176162900077971218/subscribe"
                method="post"
                target="_blank"
              >
                <div className="ml-form-formContent horozintalForm">
                  <div className="ml-form-horizontalRow">
                    <div className="ml-input-horizontal">
                      <div style={{ width: "100%" }} className="horizontal-fields">
                        <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                          <input
                            type="email"
                            className="form-control"
                            name="fields[email]"
                            placeholder="Email"
                            autoComplete="email"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="ml-button-horizontal primary">
                      <button type="submit" className="primary">Subscribe</button>

                      <button disabled style={{ display: "none" }} type="button" className="loading">
                        <div className="ml-form-embedSubmitLoad" />
                        <span className="sr-only">Loading...</span>
                      </button>
                    </div>
                  </div>
                </div>

                <input type="hidden" name="ml-submit" value="1" />
                <input type="hidden" name="anticsrf" value="true" />
              </form>
            </div>

            <div className="ml-form-successBody row-success" style={{ display: "none" }}>
              <div className="ml-form-successContent">
                <h4 className="ml-title">Thank you!</h4>
                <p className="ml-subtitle">You have successfully joined our subscriber list.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MailerLite embed scripts (required for success handling + behavior) */}
      <Script id="ml-success-handler" strategy="afterInteractive">
        {`
          function ml_webform_success_35557292() {
            var $ = window.ml_jQuery || window.jQuery;
            $('.ml-subscribe-form-35557292 .row-success').show();
            $('.ml-subscribe-form-35557292 .row-form').hide();
          }
        `}
      </Script>

      <Script
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024"
        strategy="afterInteractive"
      />

      <Script id="ml-takel" strategy="afterInteractive">
        {`fetch("https://assets.mailerlite.com/jsonp/2025796/forms/176162900077971218/takel");`}
      </Script>
    </div>
  );
}
/* --- End MailerLite styles --- */