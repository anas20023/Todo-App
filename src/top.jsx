export default function Top_bar()
{
    return <div className="flex flex-row w-full sm:w-full lg:w-2/4 mt-5 h-10 justify-between items-center gap-1.5">
        <input className="shadow appearance-none border rounded w-2/5 py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="" id="" placeholder="Enter Todo Name" />
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5"  type="date" name="" id="" />
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/5 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
    </div>
}