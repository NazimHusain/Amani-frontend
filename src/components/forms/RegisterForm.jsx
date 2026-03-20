import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerSchema } from "../../schemas/formsSchema";
import { getRoles, registerUser } from "../../api/user";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const formFields = [
  { name: "first_name", type: "text", label: "First Name" },
  { name: "last_name", type: "text", label: "Last Name" },
  { name: "email", type: "email", label: "Email" },
  { name: "password", type: "password", label: "Password" },
];

export default function RegisterForm() {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getRoles()
      .then(setRoles)
      .catch(() => toast.error("Failed to load roles"));
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await registerUser(values);
      toast.success("Registration successful! Please login to continue.");
      resetForm();
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      const apiError = err?.response?.data?.detail || "Registration Failed!";
      toast.error(apiError);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md text-white">
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            role: "",
          }}
          validationSchema={registerSchema}
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

            <div>
              <Field as="select" name="role" className="w-full px-4 py-2 rounded-md bg-gray-800 text-white">
                <option value="">Select Role</option>
                {roles.map((r) => (
                  <option key={r.id} value={r.slug}>
                    {r.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="role" component="div" className="text-red-400 text-sm" />
            </div>

            <button type="submit" disabled={isSubmitting}  className="w-full bg-red-600 hover:bg-red-800 transition duration-200 focus:ring-2 focus:ring-red-400 py-2 rounded-md font-semibold cursor-pointer">
               {isSubmitting ? "Registerin..." : "Register"}
            </button>

            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-red-400 hover:underline">
                Login here
              </Link>
            </p>
          </Form>
           )}
        </Formik>
      </div>
    </div>
  );
}
