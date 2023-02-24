import { Outlet } from 'react-router-dom'

export function BlankLayout() {
  return (
    <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
      <Outlet />
    </main>
  )
}
