import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
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

              <p class="text-textColor mb-2">what i do</p>
              <p class="text-textColor-light hover:text-textColor transition duration-200 ease-in-out mb-2 cursor-pointer">what i've done</p>
              <p class="text-textColor-light hover:text-textColor transition duration-200 ease-in-out mb-2 cursor-pointer">how i do</p>
              <p class="text-textColor-light hover:text-textColor transition duration-200 ease-in-out mb-2 cursor-pointer">what am i + contact</p>
              <p class="text-textColor-light hover:text-textColor transition duration-200 ease-in-out mb-2 cursor-pointer">more</p>
            
              <div class="flex flex-row space-x-6 mt-96">
                <a class="w-6 h-6" href="https://twitter.com"><img src="/twitter.png" width={72} height={16}/></a>
                <a class="w-6 h-6" href="https://github.com/aguiarhcode"><img src="/github.png"/></a>
                <a class="w-6 h-6" href="mailto:aguiarhcode@gmail.com"><img src="/email.png" width={72} height={16}/></a>
              </div>
            </div>
          </div>

          <div class=" pl-20 ">
            <p class="text-white font-bold text-xl mb-8 ">I’m a Software Developer</p>
            <p class="text-textColor-light mb-4">Tom, 17 y/o entusiast by software. </p>
            <p class="text-textColor-light w-200 mb-4">I design, build and deploy innovating and reliability software. Currently i’m developing Goodthings, a social media app.</p>
            <p class="text-textColor-light w-200 mb-10">In my free time, I learn new technologies and expand my network. Always looking for to learn new things meet new people and change knowledge. With a huge team spirit i also help my school colleges.</p>

            <p class="text-white font-bold text-xl mb-8">About Goodthings</p>
            <p class="text-textColor-light w-200 mb-4">Goodthings is a social media. unfortunately social medias tend to be a place good for learning and sharing moments, but in some cases social medias can be a super toxic place, where preconception, prejudgement, racism and others exists. With Goodthings we want to create a friendly enviroment all the time, a open-minded place where you can meet and learn new things.</p>
            <a href="twitter.com" class="text-textColor-dark w-200 underline">see more about it</a>
          </div>
        </div>
      </div>
    </div>
  )
}
