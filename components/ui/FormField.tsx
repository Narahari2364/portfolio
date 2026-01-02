"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
  className?: string;
  error?: string;
}

export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  textarea = false,
  rows = 4,
  className,
  error,
}: FormFieldProps) {
  const inputStyles =
    "w-full px-4 py-3 bg-transparent border-2 border-black/20 dark:border-white/20 rounded-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors";

  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={name}
        className="block text-sm font-medium uppercase tracking-wider"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={cn(inputStyles, "resize-none")}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputStyles}
        />
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}

