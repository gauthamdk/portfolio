"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { TerminalPrompt } from "./TerminalPrompt";
import { useFormValidation } from "../../hooks";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
}

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationForm = ({
  isOpen,
  onClose,
}: ConsultationFormProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    nameValidation,
    emailValidation,
    updateNameValidation,
    updateEmailValidation,
    validateName,
    validateEmail,
    resetValidation,
  } = useFormValidation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleFormInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "name") {
      updateNameValidation(value);
    }

    if (name === "email") {
      updateEmailValidation(value);
    }
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate name before submission
    const nameValidationResult = validateName(formData.name);
    if (!nameValidationResult.isValid) {
      updateNameValidation(formData.name);
      return;
    }

    // Validate email before submission
    const emailValidationResult = validateEmail(formData.email);
    if (!emailValidationResult.isValid) {
      updateEmailValidation(formData.email);
      return;
    }

    // Check if all required fields are filled
    if (!formData.projectType || !formData.description.trim()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // For now, we'll just log the form data and show success
      console.log("Consultation form submitted:", formData);

      setSubmitStatus("success");

      // Reset form data
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
      });

      // Reset validation states
      resetValidation();

      // Close form after success
      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !isMounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 consultation-form-modal flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="bg-gray-900/95 border border-gray-600 rounded-lg w-full max-w-2xl shadow-2xl flex flex-col relative mx-auto"
        style={{ maxHeight: "calc(100vh - 2rem)" }}
      >
        <div className="bg-gray-900/95 border-b border-gray-600 p-4 flex items-center justify-between flex-shrink-0">
          <div className="terminal-prompt-wrapper">
            <TerminalPrompt>project --new</TerminalPrompt>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Close consultation form"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto flex-1 min-h-0">
          <div className="p-6">
            <div className="command-output">
              <div className="text-[var(--terminal-accent)] mb-4 text-lg">
                Free Consultation Request
              </div>
              <p className="text-sm text-[var(--terminal-muted)] mb-6">
                Tell me about your project and let&apos;s build something
                amazing together. All consultations are free and confidential.
              </p>

              {submitStatus === "success" && (
                <div className="bg-green-900/30 border border-green-600 rounded p-4 mb-6 text-green-300">
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Thanks! I&apos;ll get back to you within 24 hours.
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-900/30 border border-red-600 rounded p-4 mb-6 text-red-300">
                  <div className="flex items-center">
                    <span className="text-red-400 mr-2">✗</span>
                    Something went wrong. Please try again or email me directly.
                  </div>
                </div>
              )}

              <form onSubmit={handleConsultationSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-[var(--terminal-accent)] mb-2"
                    >
                      Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormInputChange}
                        required
                        className={`w-full bg-gray-800/50 border rounded px-3 py-2 text-white focus:outline-none transition-colors ${
                          nameValidation.touched
                            ? nameValidation.isValid
                              ? "border-green-500 focus:border-green-400"
                              : "border-red-500 focus:border-red-400"
                            : "border-gray-600 focus:border-[var(--terminal-accent)]"
                        }`}
                        placeholder="Your full name"
                      />
                      {nameValidation.touched && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {nameValidation.isValid ? (
                            <span className="text-green-400 text-sm">✓</span>
                          ) : (
                            <span className="text-red-400 text-sm">✗</span>
                          )}
                        </div>
                      )}
                    </div>
                    {nameValidation.touched && !nameValidation.isValid && (
                      <div className="mt-1 text-xs text-red-400 flex items-center">
                        <span className="mr-1">⚠</span>
                        {nameValidation.message}
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-[var(--terminal-accent)] mb-2"
                    >
                      Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormInputChange}
                        required
                        className={`w-full bg-gray-800/50 border rounded px-3 py-2 text-white focus:outline-none transition-colors ${
                          emailValidation.touched
                            ? emailValidation.isValid
                              ? "border-green-500 focus:border-green-400"
                              : "border-red-500 focus:border-red-400"
                            : "border-gray-600 focus:border-[var(--terminal-accent)]"
                        }`}
                        placeholder="your@email.com"
                      />
                      {emailValidation.touched && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {emailValidation.isValid ? (
                            <span className="text-green-400 text-sm">✓</span>
                          ) : (
                            <span className="text-red-400 text-sm">✗</span>
                          )}
                        </div>
                      )}
                    </div>
                    {emailValidation.touched && !emailValidation.isValid && (
                      <div className="mt-1 text-xs text-red-400 flex items-center">
                        <span className="mr-1">⚠</span>
                        {emailValidation.message}
                      </div>
                    )}
                    {emailValidation.touched &&
                      emailValidation.isValid &&
                      formData.email && (
                        <div className="mt-1 text-xs text-green-400 flex items-center">
                          <span className="mr-1">✓</span>
                          {emailValidation.message}
                        </div>
                      )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm text-[var(--terminal-accent)] mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleFormInputChange}
                      className="w-full bg-gray-800/50 border border-gray-600 rounded px-3 py-2 text-white focus:border-[var(--terminal-accent)] focus:outline-none transition-colors"
                      placeholder="Your company (optional)"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm text-[var(--terminal-accent)] mb-2"
                    >
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleFormInputChange}
                      required
                      className="w-full bg-gray-800/50 border border-gray-600 rounded px-3 py-2 text-white focus:border-[var(--terminal-accent)] focus:outline-none transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="web-application">Web Application</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="api-development">API Development</option>
                      <option value="cloud-migration">Cloud Migration</option>
                      <option value="automation">Automation & Tools</option>
                      <option value="consulting">Technical Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm text-[var(--terminal-accent)] mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleFormInputChange}
                      className="w-full bg-gray-800/50 border border-gray-600 rounded px-3 py-2 text-white focus:border-[var(--terminal-accent)] focus:outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under £5,000</option>
                      <option value="5k-15k">£5,000 - £15,000</option>
                      <option value="15k-30k">£15,000 - £30,000</option>
                      <option value="30k-50k">£30,000 - £50,000</option>
                      <option value="50k-plus">£50,000+</option>
                      <option value="discuss">Let&apos;s discuss</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm text-[var(--terminal-accent)] mb-2"
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleFormInputChange}
                      className="w-full bg-gray-800/50 border border-gray-600 rounded px-3 py-2 text-white focus:border-[var(--terminal-accent)] focus:outline-none transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-months-plus">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm text-[var(--terminal-accent)] mb-2"
                  >
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleFormInputChange}
                    required
                    rows={4}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded px-3 py-2 text-white focus:border-[var(--terminal-accent)] focus:outline-none transition-colors resize-vertical"
                    placeholder="Describe your project, goals, and any specific requirements..."
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="text-xs text-[var(--terminal-muted)]">
                    * Required fields
                  </div>
                  <button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      (nameValidation.touched && !nameValidation.isValid) ||
                      (emailValidation.touched && !emailValidation.isValid)
                    }
                    className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded transition-all duration-300 ${
                      isSubmitting ||
                      (nameValidation.touched && !nameValidation.isValid) ||
                      (emailValidation.touched && !emailValidation.isValid)
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-[var(--terminal-success)] hover:bg-[var(--terminal-accent)] text-white hover:shadow-lg"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 text-current"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Consultation Request"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
