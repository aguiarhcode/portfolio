import Head from 'next/head'
import Image from 'next/image'

export default function portfolio() {
  return (
      <div class=" bg-bgBlue pt-20 pl-20 h-screen ">
        <Head>
          <title>tom portfolio</title>
          <meta name="description" content="Tomás Aguiar's Portfolio" />
          <link rel="icon" href="/icon.png" />
        </Head>
  
        <div class="">
          <div class="flex flex-row ">
            <div>
              <div class="w-96 border-r-2 border-gray-500 ">
                <p class="text-white font-bold text-xl mb-2">tomás aguiar</p>
                <div class="flex flex-row space-x-2" >
                  <img class="w-8 h-8" src='/loc.png'></img>
                  <p class="text-textColor-dark mb-16">
                    aveiro, pt
                  </p>
                </div>
  
                <p class="text-textColor-light hover:text-textColor transition duration-200 ease-in-out mb-2 cursor-pointer">what i do</p>
                <p class="text-textColor hover:text-textColor transition duration-200 ease-in-out mb-2 cursor-pointer">what i've done</p>
                <p class="text-textColor-light hover:text-textColor transition duration-200 ease-in-out mb-2 cursor-pointer">how i do</p>
                <p class="text-textColor-light hover:text-textColor transition duration-200 ease-in-out mb-2 cursor-pointer">what am i + contact</p>
                <p class="text-textColor-light hover:text-textColor transition duration-200 ease-in-out mb-2 cursor-pointer">more</p>
              
                <div class="flex flex-row space-x-6 mt-96">
                  <a class="w-6 h-6 opacity-70" href="https://twitter.com"><img src="/twitter.png" width={72} height={16}/></a>
                  <a class="w-6 h-6 opacity-70" href="https://github.com/aguiarhcode"><img src="/github.png"/></a>
                  <a class="w-6 h-6 opacity-70" href="mailto:aguiarhcode@gmail.com"><img src="/email.png" width={72} height={16}/></a>
                </div>
              </div>
            </div>
  
            <div class=" pl-20 ">
              <p class="text-white font-bold text-xl mb-8 ">Projects</p>
              
              <div class="flex flex-column space-x-8">
                <div class="bg-card w-96 h-96 rounded-2xl hover:bg-gray-700 transition duration-700 ease-in-out">
                  <div class="flex flex-row m-6">
                    <div class="mr-6">
                      <img class="w-16 h-16" src="/logo.png"/>
                    </div>
                    <div class="flex flex-col">
                      <div class="flex flex-row">
                        <a href="#" class=" text-textColor ">Goodthings</a>
                        <a href="#"><img class="w-6 h-6 ml-1" src="/arrow.png"></img></a>
                      </div>
                      <div>
                        <p class="text-textColor-gray">Social Media</p>
                      </div>
                    </div>
                  </div>
                  <div class="w-auto h-1 bg-black"></div>
                  <div class="m-6">
                    <div>
                      <p class="text-textColor mb-2">Role</p>
                      <p class=" text-textColor-gray mb-4">Founder, Designer and Full Stack Developer</p>
                    </div>
                    <div>
                      <p class="text-textColor mb-2 ">What</p>
                      <p class=" text-textColor-gray mb-4 ">I founded Goodthings at 2021 for my final project course. To make a social media a better place.</p>
                    </div>
                  </div>
                </div>

                <div class="bg-card w-96 h-96 rounded-2xl hover:bg-gray-700 transition duration-700 ease-in-out">
                  <div class="flex flex-row m-6">
                    <div class="mr-6">
                      <img class="w-16 h-16" src="/twitter.png" />
                    </div>
                    <div class="flex flex-col">
                      <div>
                        <p class=" text-textColor ">Goodthings</p>
                        <img></img>
                      </div>
                      <div>
                        <p class="text-textColor-light">Social Media</p>
                      </div>
                    </div>
                  </div>
                  <div class="w-auto h-1 bg-black"></div>
                  <div class="m-6">
                    <div>
                      <p class="text-textColor mb-2">Role</p>
                      <p class=" text-textColor-gray mb-4">Founder, Designer and Full Stack Developer</p>
                    </div>
                    <div>
                      <p class="text-textColor mb-2 ">What</p>
                      <p class=" text-textColor-gray mb-4 ">I founded Goodthings at 2021 for my final project course. To make a social media a better place.</p>
                    </div>
                  </div>
                </div>

                <div class="bg-card w-96 h-96 rounded-2xl hover:bg-gray-700 transition duration-700 ease-in-out">
                  <div class="flex flex-row m-6">
                    <div class="mr-6">
                      <img class="w-16 h-16" src="/twitter.png" />
                    </div>
                    <div class="flex flex-col">
                      <div>
                        <p class=" text-textColor ">Goodthings</p>
                        <img></img>
                      </div>
                      <div>
                        <p class="text-textColor-light">Social Media</p>
                      </div>
                    </div>
                  </div>
                  <div class="w-auto h-1 bg-black"></div>
                  <div class="m-6">
                    <div>
                      <p class="text-textColor mb-2">Role</p>
                      <p class=" text-textColor-gray mb-4">Founder, Designer and Full Stack Developer</p>
                    </div>
                    <div>
                      <p class="text-textColor mb-2 ">What</p>
                      <p class=" text-textColor-gray mb-4 ">I founded Goodthings at 2021 for my final project course. To make a social media a better place.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <p class="text-white font-bold text-xl mb-8 ">Other(s) and Open Source</p>

                <div class="flex flex-col">
                  <div class="w-800 h-40 bg-card rounded-2xl mb-4 hover:bg-gray-700 transition duration-700 ease-in-out">
                    <div class="flex flex-row space-x-16 m-6"> 
                      <div>
                        <div>
                          <p class="text-textColor mb-1">Name</p>
                          <p class="text-textColor-gray">Webscrapper</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p class="text-textColor mb-1">Language</p>
                          <div class="flex flex-row items-center">
                            <p class="text-textColor-gray">Javascript</p>
                            <div class="w-2 h-2 bg-yellow-300 rounded-full ml-2"/>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                            <p class="text-textColor mb-1">Description</p>
                            <p class="text-textColor-gray">Scrape all the titles and text to json file from a website you choose.  </p>
                          </div>
                        </div>
                    </div>
                  </div>

                  <div class="flex flex-col">
                  <div class="w-800 h-40 bg-card rounded-2xl mb-4 hover:bg-gray-700 transition duration-700 ease-in-out">
                    <div class="flex flex-row space-x-16 m-6"> 
                      <div>
                        <div>
                          <p class="text-textColor mb-1">Name</p>
                          <p class="text-textColor-gray">Webscrapper</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p class="text-textColor mb-1">Language</p>
                          <div class="flex flex-row items-center">
                            <p class="text-textColor-gray">Javascript</p>
                            <div class="w-2 h-2 bg-yellow-300 rounded-full ml-2"/>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                            <p class="text-textColor mb-1">Description</p>
                            <p class="text-textColor-gray">Scrape all the titles and text to json file from a website you choose.  </p>
                          </div>
                        </div>
                    </div>
                  </div>

                  <div class="flex flex-col">
                  <div class="w-800 h-40 bg-card rounded-2xl mb-4 hover:bg-gray-700 transition duration-700 ease-in-out">
                    <div class="flex flex-row space-x-16 m-6"> 
                      <div>
                        <div>
                          <p class="text-textColor mb-1">Name</p>
                          <p class="text-textColor-gray">Webscrapper</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p class="text-textColor mb-1">Language</p>
                          <div class="flex flex-row items-center">
                            <p class="text-textColor-gray">Javascript</p>
                            <div class="w-2 h-2 bg-yellow-300 rounded-full ml-2"/>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                            <p class="text-textColor mb-1">Description</p>
                            <p class="text-textColor-gray">Scrape all the titles and text to json file from a website you choose.  </p>
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