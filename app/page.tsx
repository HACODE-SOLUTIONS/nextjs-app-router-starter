export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Next.js App Router Starter
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Built for AI coding agents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
          <a
            href="https://hacode.solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-800"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              HACODE SOLUTIONS{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                →
              </span>
            </h2>
            <p className="m-0 text-sm opacity-70">
              Visit our main website
            </p>
          </a>

          <a
            href="https://hacode-solutions-site.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-800"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Demo Site{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                →
              </span>
            </h2>
            <p className="m-0 text-sm opacity-70">
              Check out our live demo
            </p>
          </a>
        </div>

        <div className="pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Compatible with Cursor • Claude • GitHub Copilot • Google Gemini
          </p>
        </div>
      </div>
    </main>
  )
}
