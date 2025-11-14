import React, { useState } from "react";

/* Contact page (CSS-only fallback) */

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  // no-op

  function update(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim() || !form.email.includes("@"))
      return "Please enter a valid email.";
    if (!form.message.trim()) return "Please include a short message.";
    return null;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ type: "error", message: err });
      return;
    }
    setSending(true);
    setStatus(null);
    // Simulated send (replace with real endpoint)
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setStatus({
      type: "success",
      message:
        "Thanks — your enquiry has been received. We will contact you shortly.",
    });
    setForm({ name: "", company: "", email: "", phone: "", message: "" });
  }

  return (
    <main className="contact-page min-h-screen bg-gray-50 revealable in-view">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <section className="contact-info">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 mb-6">
              We're happy to discuss your requirements. Send an enquiry and our
              sales team will get back to you within 24 hours.
            </p>

            <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
              <h4 className="font-semibold mb-2">Head Office</h4>
              <p className="text-sm text-gray-600">
                Plot No. 341, Sector 17, New York.
              </p>
              <p className="mt-3 text-sm">
                Email:{" "}
                <a
                  href="mailto:sales@shoefactory.com"
                  className="text-orange-600"
                >
                  sales@shoefactory.com
                </a>
              </p>
              <p className="text-sm">
                Phone:{" "}
                <a href="tel:+919999999999" className="text-orange-600">
                  +91-9999999999
                </a>
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <p className="text-sm text-gray-600">Mon - Sat 9am - 7pm</p>
              <p className="text-sm text-gray-600">Sunday Closed</p>
            </div>
          </section>

          <section className="contact-form bg-white p-8 rounded-2xl shadow-lg">
            <form onSubmit={onSubmit} className="space-y-4">
              {status && (
                <div
                  className={`p-3 rounded-md ${
                    status.type === "error"
                      ? "bg-red-50 text-red-700"
                      : "bg-green-50 text-green-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="form-field">
                  <span className="sr-only">Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={update}
                    placeholder="Full name"
                    className="input"
                  />
                </label>
                <label className="form-field">
                  <span className="sr-only">Company</span>
                  <input
                    name="company"
                    value={form.company}
                    onChange={update}
                    placeholder="Company (optional)"
                    className="input"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="form-field">
                  <span className="sr-only">Email</span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={update}
                    placeholder="Email"
                    className="input"
                  />
                </label>
                <label className="form-field">
                  <span className="sr-only">Phone</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={update}
                    placeholder="Phone"
                    className="input"
                  />
                </label>
              </div>

              <label className="form-field">
                <span className="sr-only">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update}
                  rows={6}
                  placeholder="Tell us briefly about your enquiry"
                  className="input textarea"
                />
              </label>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary"
                >
                  {sending ? "Sending..." : "Send Enquiry"}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setForm({
                      name: "",
                      company: "",
                      email: "",
                      phone: "",
                      message: "",
                    })
                  }
                  className="btn-ghost"
                >
                  Reset
                </button>
              </div>
            </form>

            <div className="mt-6 text-sm text-gray-500">
              Or reach us on WhatsApp:{" "}
              <a href="https://wa.me/919999999999" className="text-orange-600">
                +91-9999999999
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
