import Head from 'next/head'

export default function tech() {
  return (
    <div className=" bg-bgBlue pl-10 2xl:pl-20 pt-10 2xl:pt-20 h-full ">
      <Head>
        <title>Tom Dev</title>
        <meta name="description" content="Tomás Aguiar's Portfolio" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <div className="flex flex-row ">
          <div>
            <div className="w-48 2xl:w-96 h-full border-r-1 border-gray-500 ">
              <p className="text-white font-bold text-xl mb-2">tomás aguiar</p>
              <div className="flex flex-row space-x-2" >
                <img className="w-8 h-8" src='/loc.png'></img>
                <p className="text-textColor-dark mb-16">
                  aveiro, pt
                </p>
              </div>

              <ul>
                <li className="mb-2"><a className="text-textColor-light hover:text-textColor transition duration-200 ease-in-out cursor-pointer font-custom"> what i do</a></li>
                <li className="mb-2"><a className="text-textColor-light hover:text-textColor transition duration-200 ease-in-out cursor-pointer font-custom" href='./portfolio'> what i've done</a></li>
                <li className="mb-2"><a className="text-textColor font-custom" href='./tech'> how i do</a></li>
                <li className="mb-2"><a className="text-textColor-light hover:text-textColor transition duration-200 ease-in-out cursor-pointer font-custom " href='./contact'> what am i + contact </a></li>
                <li className="mb-2"><a className="text-textColor-light hover:text-textColor transition duration-200 ease-in-out cursor-pointer font-custom"> more</a></li>
              </ul>
            
              <div className="flex flex-row space-x-6 mt-96">
                <a className="w-6 h-6" href="https://twitter.com"><img src="/twitter.png" width={72} height={16}/></a>
                <a className="w-6 h-6" href="https://github.com/aguiarhcode"><img src="/github.png"/></a>
                <a className="w-6 h-6" href="mailto:aguiarhcode@gmail.com"><img src="/email.png" width={72} height={16}/></a>
              </div>
            </div>
          </div>

          <div className="mr-8 2xl:mr-16 pl-8 2xl:pl-16">

            <div>
              <p className="text-white font-medium text-xl mb-8 ">Tecnologies</p>
              <p className="text-textColor-light mb-8 font-custom">
                I highly leverage new bleeding-edge technologies and languages like Elixir to stay on top of the game. You can find a list of my most-used technologies below.
              </p>
            </div>

          <div className="flex flex-col">
                  <div className="2xl:w-800 w-100 2xl:h-40 h-36 mr-6 bg-card rounded-2xl mb-4 hover:bg-gray-700 transition duration-700 ease-in-out">
                    <div className="flex flex-row space-x-16 m-6">
                      <div>
                        <div>
                          <img src="/typescript.png" width={50} height={50} />
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="text-textColor mb-1">Name</p>
                          <div className="flex flex-row items-center">
                            <p className="text-textColor-gray">Typescript</p>
                            <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"/>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="text-textColor mb-1">type</p>
                          <p className="text-textColor-gray">JS Framework</p>
                        </div>
                      </div>
                      <div>
                        <div>
                            <p className="text-textColor mb-1">use case</p>
                            <p className="text-textColor-gray">Types for JS - will save your life when projects expand</p>
                          </div>
                        </div>
                    </div>
                  </div>


                <div className="2xl:w-800 w-100 2xl:h-40 h-36 mr-6 bg-card rounded-2xl mb-4 hover:bg-gray-700 transition duration-700 ease-in-out">
                    <div className="flex flex-row space-x-16 m-6">
                      <div>
                        <div>
                          <img src="/typescript.png" width={50} height={50} />
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="text-textColor mb-1">Name</p>
                          <div className="flex flex-row items-center">
                            <p className="text-textColor-gray">React</p>
                            <div className="w-2 h-2 bg-blue-800 rounded-full ml-2"/>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="text-textColor mb-1">type</p>
                          <p className="text-textColor-gray">Frontend Framework</p>
                        </div>
                      </div>
                      <div>
                        <div>
                            <p className="text-textColor mb-1">use case</p>
                            <p className="text-textColor-gray">Constructing stateful and durable frontends for large and interactive web apps</p>
                          </div>
                        </div>
                    </div>
                  </div>

                <div className="2xl:w-800 w-100 2xl:h-40 h-36 mr-6 bg-card rounded-2xl mb-4 hover:bg-gray-700 transition duration-700 ease-in-out">
                    <div className="flex flex-row space-x-16 m-6">
                      <div>
                        <div>
                          <img src="/typescript.png" width={50} height={50} />
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="text-textColor mb-1">Name</p>
                          <div className="flex flex-row items-center">
                            <p className="text-textColor-gray">Elixir</p>
                            <div className="w-2 h-2 bg-pink-500 rounded-full ml-2"/>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="text-textColor mb-1">type</p>
                          <p className="text-textColor-gray">Realtime, Backend</p>
                        </div>
                      </div>
                      <div>
                        <div>
                            <p className="text-textColor mb-1">use case</p>
                            <p className="text-textColor-gray">Constructing stateful and durable frontends for large and interactive web apps</p>
                          </div>
                        </div>
                    </div>
                  </div>

                <div className="2xl:w-800 w-100 2xl:h-40 h-36 mr-6 bg-card rounded-2xl mb-4 hover:bg-gray-700 transition duration-700 ease-in-out">
                    <div className="flex flex-row space-x-16 m-6">
                      <div>
                        <div>
                          <img src="/typescript.png" width={50} height={50} />
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="text-textColor mb-1">Name</p>
                          <div className="flex flex-row items-center">
                            <p className="text-textColor-gray">NextJS</p>
                            <div className="w-2 h-2 bg-white rounded-full ml-2"/>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="text-textColor mb-1">type</p>
                          <p className="text-textColor-gray">Frontend Framework</p>
                        </div>
                      </div>
                      <div>
                        <div>
                            <p className="text-textColor mb-1">use case</p>
                            <p className="text-textColor-gray">Web apps</p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            </div>
  );
}
