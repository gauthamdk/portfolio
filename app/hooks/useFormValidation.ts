"use client";

import { useState } from "react";

interface ValidationResult {
  isValid: boolean;
  message: string;
}

interface ValidationState extends ValidationResult {
  touched: boolean;
}

export const useFormValidation = () => {
  const [emailValidation, setEmailValidation] = useState<ValidationState>({
    isValid: true,
    message: "",
    touched: false,
  });

  const [nameValidation, setNameValidation] = useState<ValidationState>({
    isValid: true,
    message: "",
    touched: false,
  });

  // Name validation function
  const validateName = (name: string): ValidationResult => {
    if (!name.trim()) {
      return { isValid: false, message: "Name is required" };
    }

    if (name.trim().length < 2) {
      return { isValid: false, message: "Name must be at least 2 characters" };
    }

    if (name.trim().length > 50) {
      return {
        isValid: false,
        message: "Name must be less than 50 characters",
      };
    }

    // Check for valid name characters (letters, spaces, hyphens, apostrophes)
    const nameRegex = /^[a-zA-Z\s\-'\.]+$/;
    if (!nameRegex.test(name.trim())) {
      return {
        isValid: false,
        message:
          "Name can only contain letters, spaces, hyphens, and apostrophes",
      };
    }

    return { isValid: true, message: "" };
  };

  // Email validation function
  const validateEmail = (email: string): ValidationResult => {
    if (!email.trim()) {
      return { isValid: false, message: "Email is required" };
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(email)) {
      return { isValid: false, message: "Please enter a valid email address" };
    }

    // Additional checks for common issues
    if (email.length > 254) {
      return { isValid: false, message: "Email address is too long" };
    }

    if (email.includes("..") || email.startsWith(".") || email.endsWith(".")) {
      return { isValid: false, message: "Email format is invalid" };
    }

    return { isValid: true, message: "Valid email address" };
  };

  const updateNameValidation = (name: string) => {
    const validation = validateName(name);
    setNameValidation({
      isValid: validation.isValid,
      message: validation.message,
      touched: true,
    });
    return validation;
  };

  const updateEmailValidation = (email: string) => {
    const validation = validateEmail(email);
    setEmailValidation({
      isValid: validation.isValid,
      message: validation.message,
      touched: true,
    });
    return validation;
  };

  const resetValidation = () => {
    setNameValidation({
      isValid: true,
      message: "",
      touched: false,
    });
    setEmailValidation({
      isValid: true,
      message: "",
      touched: false,
    });
  };

  return {
    nameValidation,
    emailValidation,
    validateName,
    validateEmail,
    updateNameValidation,
    updateEmailValidation,
    resetValidation,
  };
};
