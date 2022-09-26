import React from 'react'

const Contacts = () => {
  return (
    
    <div>
    <div className="flex flex-items justify-center mt-5 mb-3" >
      <h1>Contactanos</h1>
      
     </div>

     <div className="flex flex-items justify-center ">
     <h3>Dejanos tus recomendaciones.</h3>
     </div>
    <div class="mb-6 justify-center">
    <div >
    <label for="small-input" class=" block  mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Correo</label>
    <input type="text" id="small-input" class="block p-2 w-96 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="example@example.com" required />
</div>
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Descripcion</label>
    <input type="text" id="large-input" class="block p-4 w-96 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>


<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

</div>
  )
}

export default Contacts