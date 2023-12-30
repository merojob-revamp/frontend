const MessageCard = ({imgSrc, name, message, time, notificationImgSrc}) => {
    return (
        <div className="justify-between items-stretch self-stretch flex gap-5 mt-4 cursor-pointer py-4 border-b">
            <div className="items-stretch flex justify-between gap-3">
                <img
                    loading="lazy"
                    srcSet={imgSrc}
                    className=" rounded-full aspect-square object-cover object-center w-10 overflow-hidden shrink-0 max-w-full"
                />
                <div className="items-stretch flex grow basis-[0%] flex-col self-start">
                    <div className="text-black text-opacity-80 text-sm font-medium leading-4">
                        {name}
                    </div>
                    <div className="text-black text-opacity-50 text-sm leading-4 whitespace-nowrap">
                        {message}
                    </div>
                </div>
            </div>
            <div className="items-stretch flex basis-[0%] flex-col self-start">
                <div className="text-black text-opacity-70 text-xs leading-4 whitespace-nowrap">
                    {time}
                </div>
                <img
                    loading="lazy"
                    src={notificationImgSrc}
                    className="aspect-square object-contain object-center w-3 overflow-hidden ml-4 mt-1.5 self-start max-md:ml-2.5"
                />
            </div>
        </div>
    );
}

export default MessageCard;