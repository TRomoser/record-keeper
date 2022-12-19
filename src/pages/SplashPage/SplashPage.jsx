import AuthPage from "../AuthPage/AuthPage"

export default function SplashPage(user) {
  return (
    <section>
    { user ?
    <>
      <section className="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
          <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
              <a className="relative block group" href="#0">
                  <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                  <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                      <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://i.imgur.com/ivprwWb.png" width="540" height="303" alt="Blog post" />
                  </figure>
              </a>
              <div>
                  <header>
                      <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                          <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Create a Personal Inventory of Your Record Collection</a>
                      </h3>
                  </header>
                  <p className="text-lg text-gray-400 flex-grow">recordKeeper is all about keeping all the important data about your records in one place. We make it easy to search through your collection, 
                  sort by type and style, and even add records from the Discogs website. Try it out by joining today!</p>
                  <footer className="flex items-center mt-4">
                      <a href="#0">
                          <img className="rounded-full flex-shrink-0 mr-4" src="https://i.imgur.com/xaA9Dqt.png" width="40" height="40" alt="Author 04" />
                      </a>
                      <div>
                          <a className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Taylor Romoser</a>
                          <span className="text-gray-700"> - </span>
                          <span className="text-gray-500">Jan 19, 2020</span>
                      </div>
                  </footer>
              </div>
          </article>    
      </div>
  </section>
</>
:
  <AuthPage user={user} />
}
</section>
  )
}