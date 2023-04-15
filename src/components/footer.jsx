import React from 'react'
import logo from '../assets/logo.png'

const footer = () => {
    return (
        <footer class="text-gray-600  body-font bg-green-600">
            <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img className='w-15 h-10' src={logo} />
                    <span class="ml-3 text-xl text-white">Mero Paisa</span>
                </a>
                <p class="text-sm text-white sm:ml-4 sm:pl-4  pr-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022-2023 Mero Paisa. All rights reserved
                    
                </p>
                <p><a href="https://github.com/officialrabinpandey" class="text-white pl-4 ml-1" rel="noopener noreferrer" target="_blank">Github</a> </p>
                
            </div>
        </footer>
    )
}

export default footer ;