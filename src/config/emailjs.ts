import emailjs from "@emailjs/browser";

// Track if EmailJS is properly configured
export let isEmailJSConfigured = false;

// Initialize EmailJS with your User ID
// This should be called once in your app, typically in your main component or entry file
export const initEmailJS = (): boolean => {
    try {
        // Check if all required environment variables are defined
        if (!import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
            console.error(
                "EmailJS Error: Public key is not defined in environment variables."
            );
            isEmailJSConfigured = false;
            return false;
        }

        if (!import.meta.env.VITE_EMAILJS_SERVICE_ID) {
            console.error(
                "EmailJS Error: Service ID is not defined in environment variables."
            );
            isEmailJSConfigured = false;
            return false;
        }

        if (!import.meta.env.VITE_EMAILJS_TEMPLATE_ID) {
            console.error(
                "EmailJS Error: Template ID is not defined in environment variables."
            );
            isEmailJSConfigured = false;
            return false;
        }

        // Initialize EmailJS with the public key
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        emailjs.init(publicKey);

        isEmailJSConfigured = true;
        return true;
    } catch (error) {
        console.error("EmailJS Error: Failed to initialize EmailJS", error);
        isEmailJSConfigured = false;
        return false;
    }
};

interface EmailParams {
    name: string;
    email: string;
    message: string;
    [key: string]: string;
}

/**
 * Error type for EmailJS configuration issues
 */
export class EmailJSConfigError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "EmailJSConfigError";
    }
}

/**
 * Send an email using EmailJS
 * @param params - Email parameters (name, email, message, etc.)
 * @returns Promise with EmailJS response
 * @throws EmailJSConfigError if EmailJS is not properly configured
 */
export const sendEmail = async (params: EmailParams): Promise<any> => {
    // Check if EmailJS is properly configured
    if (!isEmailJSConfigured) {
        console.error(
            "EmailJS Error: EmailJS is not properly configured. Check your environment variables."
        );
        throw new EmailJSConfigError(
            "Email service is temporarily unavailable due to configuration issues."
        );
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";

    try {
        // Send email using EmailJS
        const response = await emailjs.send(serviceId, templateId, params);
        return response;
    } catch (error) {
        console.error("EmailJS Error: Failed to send email");
        throw error;
    }
};
