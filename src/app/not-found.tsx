import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link href="/" className="text-blue-500 dark:text-blue-300">
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
