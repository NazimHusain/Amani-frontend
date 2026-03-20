import React from "react";
import RegisterForm from "../components/forms/RegisterForm";
import AuthLayout from '../layout/AuthLayout';


export default function Register() {
  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-white text-center mb-6">Create Account</h2>
      <RegisterForm />
    </AuthLayout>
  );
}




