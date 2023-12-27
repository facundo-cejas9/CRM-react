
function Error({children} ) {
  return (
    <div className="bg-red-500 text-center px-2 py-2 rounded mb-1 text-white font-bold uppercase">
        {children}
    </div>
  )
}

export default Error