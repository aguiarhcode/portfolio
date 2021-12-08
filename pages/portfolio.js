import Head from 'next/head'
import Image from 'next/image'

export default function portfolio() {
  return (
      <div className=" bg-bgBlue h-full pl-10 2xl:pl-20 pt-10 2xl:pt-20">
        <Head>
          <title>tom portfolio</title>
          <meta name="description" content="Tomás Aguiar's Portfolio" />
          <link rel="icon" href="/icon.png" />
        </Head>
  
        <div className="">
          <div className=" flex flex-row ">
            <div className="">
              <div className="w-48 2xl:w-96 h-full border-r-2 border-gray-500 ">
                <p className="text-white font-bold text-xl mb-2">tomás aguiar</p>
                <div className="flex flex-row space-x-2" >
                  <img className="w-8 h-8" src='/loc.png'></img>
                  <p className="text-textColor-dark mb-16">
                    aveiro, pt
                  </p>
                </div>
  
                <p className="text-textColor-light hover:text-textColor transition duration-200 ease-in-out mb-2 cursor-pointer">what i do</p>
                <p className="text-textColor hover:text-textColor transition duration-200 ease-in-out mb-2 cursor-pointer">what i've done</p>
                <p className="text-textColor-light hover:text-textColor transition duration-200 ease-in-out mb-2 cursor-pointer">how i do</p>
                <p className="text-textColor-light hover:text-textColor transition duration-200 ease-in-out mb-2 cursor-pointer">what am i + contact</p>
                <p className="text-textColor-light hover:text-textColor transition duration-200 ease-in-out mb-2 cursor-pointer">more</p>
              
                <div className="flex flex-row space-x-6 mt-96">
                  <a className="w-6 h-6 opacity-70" href="https://twitter.com"><img src="/twitter.png" width={72} height={16}/></a>
                  <a className="w-6 h-6 opacity-70" href="https://github.com/aguiarhcode"><img src="/github.png"/></a>
                  <a className="w-6 h-6 opacity-70" href="mailto:aguiarhcode@gmail.com"><img src="/email.png" width={72} height={16}/></a>
                </div>
              </div>
            </div>
  
            <div className=" pl-8 2xl:pl-16 ">
              <p className="text-white font-bold text-xl mb-8 ">Projects</p>
              
              <div className="flex flex-column space-x-6 2xl:space-x-8 mr-6">
                <div className="bg-card w-84 h-90 2xl:w-96 2xl:h-96 rounded-2xl hover:bg-gray-700 transition duration-700 ease-in-out">
                  <div className="flex flex-row m-6">
                    <div className="mr-6">
                      <img className="w-16 h-16" src="/logo.png"/>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row">
                        <a href="#" className=" text-textColor ">Goodthings</a>
                        <a href="#"><img className="w-6 h-6 ml-1" src="/arrow.png"></img></a>
                      </div>
                      <div>
                        <p className="text-textColor-gray">Social Media</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto h-1 bg-black"></div>
                  <div className="m-6">
                    <div>
                      <p className="text-textColor mb-2">Role</p>
                      <p className=" text-textColor-gray mb-4">Founder, Designer and Full Stack Developer</p>
                    </div>
                    <div>
                      <p className="text-textColor mb-2 ">What</p>
                      <p className=" text-textColor-gray mb-4 ">I founded Goodthings at 2021 for my final project course. To make a better place.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card w-84 h-90 2xl:w-96 2xl:h-96 rounded-2xl hover:bg-gray-700 transition duration-700 ease-in-out xl:w-86 xl:h-86">
                  <div className="flex flex-row m-6">
                    <div className="mr-6">
                      <img className="w-16 h-16" src="/logo.png" />
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <p className=" text-textColor ">Things+</p>
                        <img></img>
                      </div>
                      <div>
                        <p className="text-textColor-gray">Note app</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto h-1 bg-black"></div>
                  <div className="m-6">
                    <div>
                      <p className="text-textColor mb-2">Role</p>
                      <p className=" text-textColor-gray mb-4">Founder, Designer and Full Stack Developer</p>
                    </div>
                    <div>
                      <p className="text-textColor mb-2 ">What</p>
                      <p className=" text-textColor-gray mb-4 ">Your notes in a new level. Cutting edge tecnology. React Native App with Firebase</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card w-84 h-90 2xl:w-96 2xl:h-96 rounded-2xl hover:bg-gray-700 transition duration-700 ease-in-out xl:w-86 xl:h-86">
                  <div className="flex flex-row m-6">
                    <div className="mr-6">
                      <img className="w-16 h-16" src="/logo.png" />
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <p className=" text-textColor ">CryptoToday</p>
                        <img></img>
                      </div>
                      <div>
                        <p className="text-textColor-gray ">Crypto Price</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto h-1 bg-black"></div>
                  <div className="m-6">
                    <div>
                      <p className="text-textColor mb-2">Role</p>
                      <p className=" text-textColor-gray mb-4">Founder, Designer and Full Stack Developer</p>
                    </div>
                    <div>
                      <p className="text-textColor mb-2 ">What</p>
                      <p className=" text-textColor-gray mb-4 ">View all your crypto's prices. Cutting edge tecnology. React Native App with Firebase</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-white font-bold text-xl mb-8 ">Other(s) and Open Source</p>

                <div className="flex flex-col">
                  <div className="2xl:w-800 w-100 2xl:h-40 h-36 mr-6 bg-card rounded-2xl mb-4 hover:bg-gray-700 transition duration-700 ease-in-out">
                    <div className="flex flex-row space-x-16 m-6"> 
                      <div>
                        <div>
                          <p className="text-textColor mb-1">Name</p>
                          <p className="text-textColor-gray">Webscrapper</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="text-textColor mb-1">Language</p>
                          <div className="flex flex-row items-center">
                            <p className="text-textColor-gray">Javascript</p>
                            <div className="w-2 h-2 bg-yellow-300 rounded-full ml-2"/>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                            <p className="text-textColor mb-1">Description</p>
                            <p className="text-textColor-gray">Scrape all the titles and text to json file from a website you choose.  </p>
                          </div>
                        </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                  <div className="2xl:w-800 w-100 2xl:h-40 h-36 mr-6 bg-card rounded-2xl mb-4 hover:bg-gray-700 transition duration-700 ease-in-out">
                    <div className="flex flex-row space-x-16 m-6"> 
                      <div>
                        <div>
                          <p className="text-textColor mb-1">Name</p>
                          <p className="text-textColor-gray">File Manager</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="text-textColor mb-1">Language</p>
                          <div className="flex flex-row items-center">
                            <p className="text-textColor-gray">Rust</p>
                            <div className="w-2 h-2 bg-yellow-700 rounded-full ml-2"/>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                            <p className="text-textColor mb-1">Description</p>
                            <p className="text-textColor-gray">A simple file manager.  </p>
                          </div>
                        </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                  <div className="2xl:w-800 w-100 2xl:h-40 h-36 mr-6 bg-card rounded-2xl mb-4 hover:bg-gray-700 transition duration-700 ease-in-out">
                    <div className="flex flex-row space-x-16 m-6"> 
                      <div>
                        <div>
                          <p className="text-textColor mb-1">Name</p>
                          <p className="text-textColor-gray">App Backend</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="text-textColor mb-1">Language</p>
                          <div className="flex flex-row items-center">
                            <p className="text-textColor-gray">Elixir</p>
                            <div className="w-2 h-2 bg-purple-600 rounded-full ml-2"/>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                            <p className="text-textColor mb-1">Description</p>
                            <p className="text-textColor-gray">A app backend, tottaly done in elixir..  </p>
                          </div>
                        </div>
                    </div>
                  </div>

                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}