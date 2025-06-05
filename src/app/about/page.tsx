export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      <div className="flex flex-col items-center text-center space-y-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile photo"
          className="w-32 h-32 rounded-full object-cover"
        />
        <p className="text-gray-700 dark:text-gray-300 max-w-prose">
          I&apos;m Jane Doe, a web developer who enjoys building clean and minimal
          interfaces. This is a short bio section where you can share more about
          yourself and your interests.
        </p>
      </div>
    </div>
  );
}
