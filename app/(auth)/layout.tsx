

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <div className="flex h-full w-full flex-col items-center overflow-hidden justify-center py-12 px-4 sm:px-6 lg:px-8 bg-neutral-100 min-h-screen">
      {children}
    </div>
  )
}
