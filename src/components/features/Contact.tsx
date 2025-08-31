import React from "react";
import GradientButton from "../common/GradientButton";
import { useIsSticky } from "@/hooks/useIsSticky";
import { useEmailForm } from "@/hooks/useEmailForm";
import { MyInfo } from "@/constants";

const Contact: React.FC = () => {
    const { isSticky, headerRef } = useIsSticky();
    const {
        formData,
        formStatus,
        handleChange,
        handleSubmit,
        emailServiceAvailable,
    } = useEmailForm();

    return (
        <div id="contact" className="relative py-6 sm:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile Header */}
                <div
                    ref={headerRef}
                    className={`mobile-header ${isSticky ? "is-sticky" : ""}`}
                >
                    <h2 className="mobile-header-text uppercase text-xl sm:text-4xl font-bold lg:mb-8 md:mb-8 leading-[1.15] sm:leading-[1.2] lg:leading-[1.15]">
                        Contact
                    </h2>
                </div>

                {/* Main content container */}
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
                    {/* Left side content - Will appear above form on mobile */}
                    <div className="order-1 md:order-1 md:w-1/2">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                            <span className="gradient-text">
                                DO YOU HAVE A PROJECT TO
                            </span>
                            <br />
                            <span className="gradient-text">DISCUSS?</span>
                        </h3>

                        <div className="mb-6">
                            <h4 className="text-xl font-semibold">
                                GET IN TOUCH
                            </h4>
                            <a
                                href={`mailto:${MyInfo.EMAIL}`}
                                className="text-blue-400 hover:text-blue-500 hover:underline transition-colors text-lg"
                            >
                                {MyInfo.EMAIL}
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h5 className="text-white font-semibold mb-3">
                                    SOCIAL MEDIA
                                </h5>
                                <div className="flex gap-4">
                                    <a
                                        href={MyInfo.TELEGRAM}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                        </svg>
                                    </a>
                                    <a
                                        href={MyInfo.LINKEDIN}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                    <a
                                        href={MyInfo.GITHUB}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side form - Will appear below on mobile */}
                    <div className="order-2 md:order-2 md:w-1/2 md:-mt-12 lg:-mt-16">
                        {!emailServiceAvailable && (
                            <div className="mb-6 p-4 bg-red-900/30 border border-red-500 rounded-lg">
                                <h3 className="text-red-400 font-medium text-lg mb-2">
                                    Email Service Unavailable
                                </h3>
                                <p className="text-red-300">
                                    Our email service is temporarily unavailable
                                    due to high demand. Please contact me
                                    directly via email at{" "}
                                    <a
                                        href={`mailto:${MyInfo.EMAIL}`}
                                        className="text-blue-400 hover:underline"
                                    >
                                        {MyInfo.EMAIL}
                                    </a>
                                    .
                                </p>
                            </div>
                        )}
                        <form className="space-y-2" onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-white mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-4 bg-transparent border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-white mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-4 bg-transparent border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Your email"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-white mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Your message"
                                ></textarea>
                            </div>

                            {/* Form status messages */}
                            {formStatus.isSuccess && (
                                <div className="mb-4 p-3 bg-green-900/30 border border-green-500 rounded-lg text-green-400">
                                    {formStatus.message}
                                </div>
                            )}

                            {formStatus.isError && (
                                <div className="mb-4 p-3 bg-red-900/30 border border-red-500 rounded-lg text-red-400">
                                    {formStatus.message}
                                </div>
                            )}

                            <div className="mb-8">
                                <GradientButton
                                    type="submit"
                                    variant="primary"
                                    size="md"
                                    className="w-full"
                                    disabled={
                                        formStatus.isSubmitting ||
                                        !emailServiceAvailable
                                    }
                                >
                                    {formStatus.isSubmitting
                                        ? "SENDING..."
                                        : !emailServiceAvailable
                                          ? "SERVICE UNAVAILABLE"
                                          : "SEND"}
                                </GradientButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
