export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />

          <div className="mt-6 flex items-center gap-5">
            <div className="h-20 w-20 animate-pulse rounded-2xl bg-gray-200" />

            <div>
              <div className="h-10 w-40 animate-pulse rounded bg-gray-200" />

              <div className="mt-3 h-5 w-72 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 h-20 animate-pulse rounded-2xl bg-white" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="h-32 animate-pulse bg-gray-200" />

              <div className="space-y-3 p-5">
                <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />

                <div className="h-8 w-24 animate-pulse rounded bg-gray-200" />

                <div className="h-10 w-full animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}