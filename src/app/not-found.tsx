import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-2">Page Not Found</h2>
      <p className="text-lg mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        passHref
        className="text-blue-600 underline hover:text-blue-800 transition duration-150"
      >
        Go back to the homepage
      </Link>
    </div>
  );
}
