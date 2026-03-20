import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import React, { useState } from "react";
import { loginSchema } from "../../schemas/formsSchema";
import { loginUser } from "../../api/user";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";

const formFields = [
  { name: "email", type: "email", label: "Enter Email" },
  { name: "password", type: "password", label: "Enter Password" },
];

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      const response = await loginUser(values);
      const token = response.data?.key;

      if (token) {
        localStorage.setItem("authToken", token);
        toast.success("Login successful. Redirecting...");
        navigate("/");
      } else {
        toast.error("Login failed. Token not received.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error?.response?.data?.detail || "Login Failed");
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md text-white">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div className="flex space-x-4 mb-4">
                <button className="flex items-center justify-center w-1/2 px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-800 transition cursor-pointer">
                  <FaGoogle className="text-xl text-orange-600" />
                  <span className="text-sm">oogle</span>
                </button>

              <button className="flex items-center justify-center w-1/2 px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-800 transition cursor-pointer">
                <span className="text-sm flex items-center">
                  <FaFacebookF className="text-xl text-blue-500" />
                  <span className="-ml-1">acebook</span>
                </span>
              </button>

              </div>

              <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-500" />
                <span className="text-gray-400 px-3 text-sm">Or continue with</span>
                <hr className="flex-grow border-gray-500" />
              </div>

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
                className="w-full bg-red-600 hover:bg-red-800 transition duration-200 focus:ring-2 focus:ring-red-400 py-2 rounded-md font-semibold cursor-pointer"
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>



              <p className="text-center text-sm mt-4">
                Don’t have an account?{" "}
                <Link to="/register" className="text-red-400 hover:underline">
                  Register
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
