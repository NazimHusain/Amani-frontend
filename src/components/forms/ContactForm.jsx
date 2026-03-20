import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import React, { useState } from "react";
import { contactSchema } from "../../schemas/formsSchema";
import { contactUs } from "../../api/user";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";

const formFields = [
    { name: "name", type: "text", label: "Enter Name" },
    { name: "phone", type:"number", label: "Enter phone Number" },
    { name: "email", type: "email", label: "Enter Email" },
    {name: "message", type: "text", label: "Enter Message" },
];

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      const response = await contactUs(values); // POST request
      const id = response.data?.id;

      if (id) {
        toast.success("Contact created successfully");
        navigate("/");
      } else {
        toast.error("Contact failed");
      }
    } catch (error) {
      console.error("Contact error:", error);
      toast.error(error?.response?.data?.detail || "Contact Failed");
    } finally {
      actions.setSubmitting(false);
    }
  };


  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md text-white">
        <Formik
          initialValues={{ name: "", phone: "", email: "", subject: "", message: "" }}
          validationSchema={contactSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">

              {formFields.map((field) => (
                <div key={field.name}>
                  <Field
                    type={field.type}
                    name={field.name}
                    placeholder={field.label}
                    className="w-full px-4 py-2 rounded-md bg-gray-800 placeholder-gray-400"
                  />
                  <ErrorMessage name={field.name} component="div" className="text-red-400 text-sm" />
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-800 transition duration-200 focus:ring-2 focus:ring-red-400 py-2 rounded-md font-semibold"
              >
                {isSubmitting ? "messaging..." : "Message"}
              </button>

             
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
