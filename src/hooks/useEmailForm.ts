import { useState, FormEvent } from "react";
import {
    sendEmail,
    EmailJSConfigError,
    isEmailJSConfigured,
} from "../config/emailjs";

interface FormState {
    name: string;
    email: string;
    message: string;
}

interface FormStatus {
    isSubmitting: boolean;
    isSuccess: boolean;
    isError: boolean;
    message: string;
}

export const useEmailForm = () => {
    const [formData, setFormData] = useState<FormState>({
        name: "",
        email: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState<FormStatus>({
        isSubmitting: false,
        isSuccess: false,
        isError: false,
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    // Check if EmailJS is properly configured
    const [emailServiceAvailable, setEmailServiceAvailable] =
        useState<boolean>(isEmailJSConfigured);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Check if email service is available
        if (!emailServiceAvailable) {
            setFormStatus({
                isSubmitting: false,
                isSuccess: false,
                isError: true,
                message:
                    "Email service is temporarily unavailable due to high demand. Please try again later or contact directly via email.",
            });
            return;
        }

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus({
                isSubmitting: false,
                isSuccess: false,
                isError: true,
                message: "Please fill in all fields",
            });
            return;
        }

        // Set submitting state
        setFormStatus({
            isSubmitting: true,
            isSuccess: false,
            isError: false,
            message: "",
        });

        try {
            // Get current time
            const now = new Date();
            const time = now.toLocaleTimeString();

            // Send email with EmailJS
            // Add additional fields that might be required by the EmailJS template
            await sendEmail({
                ...formData,
                time,
                from_name: formData.name, // Common template variable
                to_name: "Nagaraju Kasarla", // Recipient name
                reply_to: formData.email, // Common template variable
                subject: "New Contact Form Submission",
            });

            // Set success state
            setFormStatus({
                isSubmitting: false,
                isSuccess: true,
                isError: false,
                message: "Your message has been sent successfully!",
            });

            // Reset form after successful submission
            resetForm();

            // Reset success message after 5 seconds
            setTimeout(() => {
                setFormStatus((prev) => ({
                    ...prev,
                    isSuccess: false,
                    message: "",
                }));
            }, 5000);
        } catch (error) {
            // Check if it's a configuration error
            if (error instanceof EmailJSConfigError) {
                console.error("EmailJS configuration error:", error.message);
                setEmailServiceAvailable(false);
                setFormStatus({
                    isSubmitting: false,
                    isSuccess: false,
                    isError: true,
                    message:
                        "Email service is temporarily unavailable due to high demand. Please try again later or contact directly via email.",
                });
            } else {
                // Set general error state
                console.error("Email sending error:", error);
                setFormStatus({
                    isSubmitting: false,
                    isSuccess: false,
                    isError: true,
                    message: "Failed to send message. Please try again later.",
                });
            }
        }
    };

    return {
        formData,
        formStatus,
        handleChange,
        handleSubmit,
        resetForm,
        emailServiceAvailable,
    };
};
