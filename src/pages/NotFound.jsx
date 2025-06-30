export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 pb-4">Page not found</p>
        <a
          href="/"
          className="inline-block mt- rounded-lg p-2 bg-indigo-600 rounded hover:bg-indigo-700 hover:text-white hover:bg-black"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
