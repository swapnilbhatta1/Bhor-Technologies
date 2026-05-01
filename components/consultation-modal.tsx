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
  category: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  category: "",
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
      payload.append("category", formState.category);
      if (selectedService) {
        payload.append("service_requested", selectedService);
      }
      payload.append("_subject", "New service request from Sparkentech");
      payload.append("_template", "table");
      payload.append("_honey", "");
      payload.append("_url", window.location.href);

      const response = await fetch("https://formsubmit.co/ajax/hello.spearkentech@gmail.com", {
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
          <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,17,26,0.98)_0%,rgba(20,22,35,0.98)_100%)] shadow-panel backdrop-blur-md">
            <div className="border-b border-indigo-500/10 px-6 py-5 sm:px-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="eyebrow">Free Consultation</span>
                  <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
                    Tell us about your business
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                    Share a few details and Sparkentech will reach out with the right next step.
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close modal"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-slate-400 transition hover:text-indigo-400 hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  CLOSE
                </button>
              </div>
            </div>
            <div className="px-6 py-6 sm:px-8 sm:py-8">
              {isSubmitted ? (
                <div className="rounded-[28px] border border-indigo-500/30 bg-indigo-500/10 p-6">
                  <h3 className="text-xl font-bold text-white">Thanks, your consultation request was sent.</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Your details were submitted to Sparkentech successfully. We can now follow up using the email address you entered.
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
                    <span className="mb-2 block text-sm font-semibold text-slate-300">Customer Name</span>
                    <input
                      required
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, name: event.target.value }))
                      }
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                      placeholder="Enter full name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-300">Email Address</span>
                    <input
                      required
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, email: event.target.value }))
                      }
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                      placeholder="name@company.com"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-300">Phone Number</span>
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
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                      placeholder="+1 (555) 000-0000"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-300">Company Name</span>
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
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                      placeholder="Your company name"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-semibold text-slate-300">Category / Industry</span>
                    <select
                      required
                      name="category"
                      value={formState.category}
                      onChange={(event) =>
                        setFormState((current) => ({
                          ...current,
                          category: event.target.value,
                        }))
                      }
                      className="w-full rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-white shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 [&>option]:bg-slate-900 [&>option]:text-white"
                    >
                      <option value="" disabled>Select your industry</option>
                      <option value="E-commerce & Retail">E-commerce & Retail</option>
                      <option value="Healthcare & Medical">Healthcare & Medical</option>
                      <option value="Finance & Fintech">Finance & Fintech</option>
                      <option value="Education & EdTech">Education & EdTech</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Technology & Software">Technology & Software</option>
                      <option value="Manufacturing & Logistics">Manufacturing & Logistics</option>
                      <option value="Travel & Hospitality">Travel & Hospitality</option>
                      <option value="Media & Entertainment">Media & Entertainment</option>
                      <option value="Other">Other</option>
                    </select>
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
  variant?: "primary" | "secondary" | "ghost" | "custom";
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
      className={variant === "custom" ? className : buttonLinkClasses(variant as "primary" | "secondary" | "ghost", className)}
      onClick={() => {
        onClick?.();
        context.openModal(service);
      }}
    >
      {children}
    </button>
  );
}
