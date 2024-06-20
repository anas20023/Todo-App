// eslint-disable-next-line react/prop-types
const Item = ({ event_name, event_date }) => {
    return (
        <div className="flex flex-row w-full sm:w-full lg:w-2/4 mt-5 h-10 justify-between items-center gap-1.5">
            <p className="w-2/5 px-3 py-4 text-lg text-gray-700 font-semibold">
                {event_name}
            </p>
            <p className="w-2/5 px-3 py-4 text-baseg font-bold text-gray-800">
                {event_date}
            </p>
            <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-1/5 px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Delete
            </button>
        </div>
    )
}
export default Item;