import Post from "./Post";

export default function Posts(){
   const posts =
       [
           {
               "photoLink": "https://picsum.photos/200/200?random=1",
               "user": "johndoe123",
               "userpic":"https://picsum.photos/200/200?random=6",
               "description": "Beautiful sunrise at the beach this morning!",
               "likes": 102,
               "place": "Jaipur,India",
               "lastInteractionUsername": "AnonymousUser1",
               "comments": 15
           },
    {
        "photoLink": "https://picsum.photos/200/200?random=2",
        "user": "janesmith987",
        "userpic":"https://picsum.photos/200/200?random=7",
        "description": "Just made the most delicious chocolate cake  ",
        "likes": 56,
        "place": "Mohali,India",
        "lastInteractionUsername": "AnonymousUser2",
        "comments": 8
    },
    {
        "photoLink": "https://picsum.photos/200/200?random=3",
        "user": "travelholic",
        "userpic":"https://picsum.photos/200/200?random=8",
        "description": "Exploring the ancient ruins of Rome ️ #italy",
        "likes": 214,
        "place": "Mumbai",
        "lastInteractionUsername": "AnonymousUser3",
        "comments": 27
    },
    {
        "photoLink": "https://picsum.photos/200/200?random=4",
        "user": "craftycatlady",
        "userpic":"https://picsum.photos/200/200?random=9",
        "description": "Finished knitting a cozy scarf for my cat ",
        "likes": 89,
        "place": "Delhi, India",
        "lastInteractionUsername": "AnonymousUser4",
        "comments": 12
    },
    {
        "photoLink": "https://picsum.photos/200/200?random=5",
        "user": "bookworm99",
        "userpic":"https://picsum.photos/200/200?random=10",
        "description": "Reading my favorite book by the fireplace ",
        "likes": 72,
        "place": "tokyo,japan",
        "lastInteractionUsername": "AnonymousUser5",
        "comments": 5
    }
]

    return(
        <div className='flex flex-col px-6 py-4 gap-4'>
            {
                posts.map(data =>{
                    return <Post data ={data}/>
                })
            }
        </div>
    )
}