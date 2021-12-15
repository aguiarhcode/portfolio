import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useSound from 'use-sound';

const Nav = () => {


  return (
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
      </div>
    </div>
  )
}

export default Nav