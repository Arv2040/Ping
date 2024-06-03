

export default function Page() {
  return (
    <main className  = "bg-black w-full h-screen flex ">
      <aside className = "h-full border-2 w-fit border-red-500">
        this is the side bar
      </aside>
      <section className = "w-full flex flex-col justify-between items-center h-screen border-2 border-white-200">
          <h1 className = "w-full border-2 border-blue-500 text-center">User1</h1>
          <div className  = "border-2 border-yellow-300  w-full h-full flex flex-col items-end gap-y-4">
            <div className = "rounded-full bg-blue-700 text-white w-24 text-sm text-center ">
              Message1
            </div>
            <div className = "rounded-full bg-blue-700 text-white w-24 text-sm text-center ">
              Message2
            </div>
            <div className = "rounded-full bg-blue-700 text-white w-24 text-sm text-center ">
              Message3
            </div>
           
          </div>
          <div>
            <input placeholder = "Enter your message here" type="text" className = "text-black"/>
          </div>
      </section>

    </main>
  )
}
