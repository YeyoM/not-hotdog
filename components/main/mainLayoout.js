export default function MainLayout({ children }) {
  return (
    <div className='flex h-screen items-center justify-center p-3'>
      {children}
    </div>
  )
}