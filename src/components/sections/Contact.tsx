import { useScrollReveal } from "../../hooks/useScrollReveal";
import { ChangeEvent, FormEvent, useState } from "react";
import { business } from "../../config/business";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialForm: FormValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d][\d\s()-]{6,}$/;

function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState<FormValues>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionState, setSubmissionState] = useState<"idle" | "ready">("idle");

  const hasContact = Boolean(business.phone || business.whatsapp || business.email);

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmissionState("idle");
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Enter your name.";
    }

    if (form.phone.trim() && !phonePattern.test(form.phone.trim())) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Enter your email address.";
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Tell us about your requirement.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmissionState("idle");
      const firstErrorField = ["name", "phone", "email", "message"].find(
        (field) => nextErrors[field as keyof FormValues],
      );
      if (firstErrorField) {
        document.getElementById(`contact-${firstErrorField}`)?.focus();
      }
      return;
    }

    setSubmissionState("ready");
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmissionState("idle");
  };

  const fieldClass = (fieldName: keyof FormValues) =>
    [
      "min-h-12 w-full border bg-white/5 px-4 py-3 text-sm text-bone-50 placeholder:text-steel-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:border-accent-400/70",
      errors[fieldName]
        ? "border-red-400/70 focus-visible:ring-red-400"
        : "border-white/15 hover:border-white/25",
    ].join(" ");

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden border-y border-white/10 bg-ink-950 py-24 sm:py-28 lg:py-36"
      aria-labelledby="contact-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial_gradient(circle_at_12%_15%,rgba(199,123,63,0.1),transparent_28rem),linear_gradient(105deg,rgba(17,30,40,0.5),transparent_58%)]" />
        <div className="absolute inset-0 opacity-[0.1] hero-grid" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <Container>
        <div className={`grid items-start gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 ${isVisible ? "reveal visible" : "reveal"}`}>
          <div className="relative">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent-400" aria-hidden="true" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-accent-400">Project enquiry</p>
            </div>
            <h2
              id="contact-title"
              className="mt-7 text-balance text-4xl leading-[1.04] tracking-[-0.045em] text-bone-50 sm:text-5xl lg:text-6xl"
            >
              Tell us what you{" "}
              <span className="text-accent-400">have in mind.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-bone-200/75 sm:text-lg sm:leading-9">
              Share the shape of the requirement, the material direction, or a reference you want to discuss.
              The form validates locally and does not transmit data without a connected delivery service.
            </p>

            <div className="mt-10 border border-white/10 bg-white/[0.025] p-6 shadow-[0_24px_70px_-35px_rgba(0,0,0,0.75)]">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center border border-accent-400/30 bg-accent-500/10 text-xs font-bold text-accent-400" aria-hidden="true">
                  {business.name.slice(0, 1)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-bone-50">{business.name}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-steel-400">{business.tagline}</p>
                </div>
              </div>
              <dl className="mt-7 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-[9px] font-semibold uppercase tracking-[0.2em] text-steel-400">Business</dt>
                  <dd className="mt-2 text-sm text-bone-200/80">Configured</dd>
                </div>
                <div>
                  <dt className="text-[9px] font-semibold uppercase tracking-[0.2em] text-steel-400">Contact details</dt>
                  <dd className="mt-2 text-sm text-bone-200/80">
                    {hasContact ? (
                      <span className="flex flex-col gap-1.5">
                        {business.phone && (
                          <a href={`tel:${business.phone}`} className="transition-colors hover:text-accent-400">
                            {business.phone}
                          </a>
                        )}
                        {business.email && (
                          <a href={`mailto:${business.email}`} className="transition-colors hover:text-accent-400">
                            {business.email}
                          </a>
                        )}
                        {business.whatsapp && (
                          <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent-400">
                            WhatsApp
                          </a>
                        )}
                      </span>
                    ) : (
                      "Not configured"
                    )}
                  </dd>
                </div>
              </dl>
              {!hasContact && (
                <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-6 text-bone-200/55">
                  No phone number, email address, or messaging link is displayed because none is currently configured.
                </p>
              )}
            </div>
          </div>

          <div className="border border-white/10 bg-ink-900 p-6 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.85)] sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-400">Enquiry form</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-bone-50">Start with the brief</h3>
              </div>
              <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.18em] text-steel-500 sm:inline">
                Frontend template
              </span>
            </div>

            <form className="mt-8 space-y-6" noValidate onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-bone-200/85">
                    Name <span className="text-accent-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleFieldChange}
                    autoComplete="name"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={fieldClass("name")}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-2 text-xs font-medium text-red-300" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-bone-200/85">
                    Phone <span className="text-steel-500">(optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleFieldChange}
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "contact-phone-error" : "contact-phone-hint"}
                    className={fieldClass("phone")}
                    placeholder="Optional phone number"
                  />
                  {errors.phone ? (
                    <p id="contact-phone-error" className="mt-2 text-xs font-medium text-red-300" role="alert">
                      {errors.phone}
                    </p>
                  ) : (
                    <p id="contact-phone-hint" className="mt-2 text-xs text-bone-200/45">Only if you want to be contacted by phone.</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-bone-200/85">
                  Email <span className="text-accent-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleFieldChange}
                  autoComplete="email"
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={fieldClass("email")}
                    placeholder="Your email address"
                  />

                {errors.email && (
                  <p id="contact-email-error" className="mt-2 text-xs font-medium text-red-300" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-bone-200/85">
                  Requirement or message <span className="text-accent-400" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleFieldChange}
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : "contact-message-hint"}
                  className={`${fieldClass("message")} min-h-36 resize-y`}
                  placeholder="Describe the metalwork, dimensions you have in mind, timeline, or reference..."
                />
                {errors.message ? (
                  <p id="contact-message-error" className="mt-2 text-xs font-medium text-red-300" role="alert">
                    {errors.message}
                  </p>
                ) : (
                  <p id="contact-message-hint" className="mt-2 text-xs text-bone-200/45">Include as much detail as you can share.</p>
                )}
              </div>

              {submissionState === "ready" && (
                <div
                  role="status"
                  className="border border-accent-400/30 bg-accent-500/10 p-5 text-sm leading-6 text-bone-100"
                >
                  <p className="font-semibold text-accent-400">Enquiry ready</p>
                  <p className="mt-1 text-bone-200/75">
                    Your details are valid. This form does not send the enquiry without a connected delivery service.
                    Copy the information or connect a backend to submit it.
                  </p>
                </div>
              )}

              {Object.keys(errors).length > 0 && submissionState !== "ready" && (
                <div role="alert" className="border border-red-400/30 bg-red-500/10 p-5 text-sm leading-6 text-red-200">
                  Review the highlighted fields and try again.
                </div>
              )}

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
                <Button type="button" variant="secondary" onClick={handleReset}>
                  Clear form
                </Button>
                <Button type="submit" className="sm:ml-auto">
                  Send enquiry
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Contact };