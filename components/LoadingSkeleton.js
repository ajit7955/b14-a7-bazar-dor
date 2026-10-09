export default function LoadingSkeleton({
  count = 6,
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map(
        (_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-2xl border bg-white p-5"
          >
            <div className="flex justify-between">
              <div className="h-16 w-16 rounded-2xl bg-gray-200" />

              <div className="h-6 w-20 rounded-full bg-gray-200" />
            </div>

            <div className="mt-5 h-4 w-24 rounded bg-gray-200" />

            <div className="mt-2 h-7 w-32 rounded bg-gray-200" />

            <div className="mt-5 h-8 w-28 rounded bg-gray-200" />

            <div className="mt-5 h-px bg-gray-200" />

            <div className="mt-4 h-4 w-full rounded bg-gray-200" />
          </div>
        )
      )}
    </div>
  );
}