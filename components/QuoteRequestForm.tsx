"use client";

import { useState, SyntheticEvent } from "react";
import clsx from "clsx";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const services = [
  "Manned Guarding",
  "Mobile Patrols",
  "CCTV Monitoring",
  "Event Security",
  "Key Holding & Alarm Response",
  "Concierge Security",
  "Construction Site Security",
  "Other",
];

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function QuoteRequestForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    const field = name as keyof FormData;

    setFormData((prev) => ({ ...prev, [field]: value }));

    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));

    if (status === "error") {
      setStatus("idle");
    }
  };
  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("submitting");

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("https://formsubmit.co/stpholise@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mx-auto max-w-2xl rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <h2 className="text-xl font-semibold text-green-800">
          Request Received
        </h2>
        <p className="mt-2 text-green-700">
          Thank you for your enquiry. A member of the EverGuard team will be in
          touch shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl space-y-6 rounded-lg border border-gray-200 bg-white p-4 sm:p-8 shadow-sm"
      noValidate
    >
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Request a Quote</h1>
        <p className="mt-1 text-sm text-gray-600">
          Tell us about your security needs and we&apos;ll get back to you.
        </p>
      </div>

      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          className={clsx(
            "mt-1 block w-full text-gray-700 rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-1",
            errors.fullName
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
          )}
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1 text-sm text-red-600">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={clsx(
            "mt-1 block  text-gray-700 w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-1",
            errors.email
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
          )}
        />
        {errors.email && (
          <p id="fullName-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={clsx(
            "mt-1 block text-gray-700  w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-1",
            errors.phone
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
          )}
        />
        {errors.phone && (
          <p id="fullName-error" className="mt-1 text-sm text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-700"
        >
          Service Required <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "service-error" : undefined}
          className={clsx(
            "mt-1 block w-full text-gray-700  rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-1",
            errors.service
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
          )}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="fullName-error" className="mt-1 text-sm text-red-600">
            {errors.service}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please tell us about your security requirements..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={clsx(
            "mt-1 block w-full text-gray-700  rounded-md border px-3 py-2 shadow-sm focus:outline-none focus:ring-1",
            errors.message
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
          )}
        />
        {errors.message && (
          <p id="fullName-error" className="mt-1 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="rounded-md bg-red-50 p-3 text-sm text-red-700">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit Request"}
      </button>

      <p className="text-center text-xs text-gray-500">
        By submitting this form, you agree to be contacted by EverGuard Security
        UK Limited
      </p>
    </form>
  );
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Your name must contain at least 2 characters.";
  }

  const email = data.email.trim();

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const phone = data.phone.trim();
  const digits = phone.replace(/\D/g, "");

  if (!phone) {
    errors.phone = "Please enter your phone number.";
  } else if (
    !/^\+?[0-9\s().-]+$/.test(phone) ||
    digits.length < 7 ||
    digits.length > 15
  ) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.service) {
    errors.service = "Please select a service.";
  }

  if (!data.message.trim()) {
    errors.message = "Please describe your security requirements.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Please provide at least 10 characters.";
  }

  return errors;
};
