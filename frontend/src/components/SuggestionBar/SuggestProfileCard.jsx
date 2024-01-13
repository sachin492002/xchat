export default function SuggestProfileCard({data}){
    return(
        <div className='md:inline-flex justify-between w-full items-center'>
            <div className='flex gap-4'>
                <img src={data.image} alt={"user"} className='w-16 h-16 rounded-full'/>
                <div className='flex flex-col items-start'>
                    <h1>{data.name}</h1>
                    <p className='font-thin text-sm'>{data.username}</p>
                </div>
            </div>
            <button className='text-[var(--clr-blue)]'>
                Follow
            </button>
        </div>
    )
}