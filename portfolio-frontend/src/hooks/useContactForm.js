import { useState } from "react";

const API_BASE_URL = "https://myportfolio-production-c06f.up.railway.app";

export const useContactForm = () => {
  /**
       This component manages contact form state, validation, and submission to backend API.
       Handles form data, loading states, and success/error messages.
     */
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({
      type: "",
      message: "",
    });
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Backend response:", data);
        setStatus({
          type: "success",
          message: `Thank you, ${formdata.name}! Your message has been sent successfully. I'll get back to you soon!`,
        });
        setFormdata({
          name: "",
          email: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        let errorMessage = "Failed to send message. Please try again.";

        // Handle rate limiting specifically
        if (response.status === 429) {
          errorMessage =
            "Too many messages sent. Please wait a minute before sending another message.";
        } else if (errorData.detail) {
          errorMessage = errorData.detail;
        }

        setStatus({
          type: "error",
          message: errorMessage,
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({
        type: "error",
        message:
          "Development mode: Message not actually sent (Railway is off). Turn on Railway to test real submissions.",
      });
      setFormdata({
        name: "",
        email: "",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return {
    formdata,
    status,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
