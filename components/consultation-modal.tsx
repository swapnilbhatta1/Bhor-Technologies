"use client";

import type { FormEvent, ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { buttonLinkClasses } from "@/components/ui/button-link";

type ConsultationContextValue = {
  openModal: (service?: string) => void;
  closeModal: () => void;
};

const ConsultationContext = createContext<ConsultationContextValue | null>(null);

type ConsultationProviderProps = {
  children: ReactNode;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
};

export function ConsultationProvider({ children }: ConsultationProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState<FormState>(initialFormState);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({
      openModal: (service?: string) => {
        setIsSubmitted(false);
        setErrorMessage("");
        setSelectedService(service || "");
        setIsOpen(true);
      },
      closeModal: () => setIsOpen(false),
    }),
    [],
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload = new FormData();
      payload.append("name", formState.name);
      payload.append("email", formState.email);
      payload.append("phone", formState.phone);
      payload.append("company_name", formState.businessName);
      if (selectedService) {
        payload.append("service_requested", selectedService);
      }
      payload.append("_subject", "New service request from Bhor Technologies");
      payload.append("_template", "table");
      payload.append("_honey", "");
      payload.append("_url", window.location.href);

      const response = await fetch("https://formsubmit.co/ajax/bhor.technologies.bd@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong while sending your request.");
      }

      setIsSubmitted(true);
      setFormState(initialFormState);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong while sending your request.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ConsultationContext.Provider value={value}>
      {children}
      {isOpen ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-8">
          <button
            type="button"
            aria-label="Close consultation form"
            className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,248,238,0.98)_100%)] shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
            <div className="border-b border-orange-100/80 px-6 py-5 sm:px-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="eyebrow">Free Consultation</span>
                  <h2 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    Tell us about your business
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                    Share a few details and Bhor Technologies will reach out with the right next step.
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close modal"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-100 bg-white text-sm font-semibold text-slate-500 transition hover:text-orange-500"
                  onClick={() => setIsOpen(false)}
                >
                  CLOSE
                </button>
              </div>
            </div>
            <div className="px-6 py-6 sm:px-8 sm:py-8">
              {isSubmitted ? (
                <div className="rounded-[28px] border border-emerald-100 bg-emerald-50/80 p-6">
                  <h3 className="text-xl font-bold text-slate-900">Thanks, your consultation request was sent.</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Your details were submitted to Bhor Technologies successfully. We can now follow up using the email address you entered.
                  </p>
                  <button
                    type="button"
                    className={buttonLinkClasses("primary", "mt-5")}
                    onClick={() => {
                      setIsSubmitted(false);
                      setErrorMessage("");
                      setIsOpen(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form className="grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Customer Name</span>
                    <input
                      required
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, name: event.target.value }))
                      }
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                      placeholder="Enter full name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Email Address</span>
                    <input
                      required
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, email: event.target.value }))
                      }
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                      placeholder="name@company.com"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Phone Number</span>
                    <input
                      required
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(event) =>
                        setFormState((current) => ({
                          ...current,
                          phone: event.target.value,
                        }))
                      }
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                      placeholder="+1 (555) 000-0000"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Company Name</span>
                    <input
                      required
                      name="company_name"
                      type="text"
                      value={formState.businessName}
                      onChange={(event) =>
                        setFormState((current) => ({
                          ...current,
                          businessName: event.target.value,
                        }))
                      }
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                      placeholder="Your company name"
                    />
                  </label>
                  <input type="hidden" name="_captcha" value="false" />
                  {selectedService && (
                    <input type="hidden" name="service_requested" value={selectedService} />
                  )}
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                  <div className="sm:col-span-2 flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm leading-7 text-slate-500">
                        We usually reply quickly for qualified projects and early-stage consultations.
                      </p>
                      {errorMessage ? (
                        <p className="mt-2 text-sm font-medium text-rose-600">{errorMessage}</p>
                      ) : null}
                    </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={buttonLinkClasses(
                          "primary",
                          isSubmitting ? "cursor-not-allowed opacity-70" : "",
                        )}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          "Submit Request"
                        )}
                      </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </ConsultationContext.Provider>
  );
}

type ConsultationTriggerProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  service?: string;
};

export function ConsultationTrigger({
  children,
  variant = "primary",
  className = "",
  onClick,
  service,
}: ConsultationTriggerProps) {
  const context = useContext(ConsultationContext);

  if (!context) {
    throw new Error("ConsultationTrigger must be used inside ConsultationProvider.");
  }

  return (
    <button
      type="button"
      className={buttonLinkClasses(variant, className)}
      onClick={() => {
        onClick?.();
        context.openModal(service);
      }}
    >
      {children}
    </button>
  );
}
