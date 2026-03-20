import React from "react";
import AuthLayout from '../layout/AuthLayout';
import LoginForm from "../components/forms/LoginForm"


export default function login() {
  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-white text-center mb-6"> Sign In to App</h2>
      <LoginForm />
    </AuthLayout>
  );
}

