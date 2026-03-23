import { useState } from "react";

const useRsvpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    guests: 1,
    status: "attending",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", guests: 1, status: "attending", message: "" });
  };

  return { formData, isSubmitted, handleChange, handleSubmit };
};

export default useRsvpForm;
