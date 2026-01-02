"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FormField from "@/components/ui/FormField";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <FormField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <FormField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        textarea
        rows={6}
        required
      />
      <Button type="submit">Send Message</Button>
    </motion.form>
  );
}

