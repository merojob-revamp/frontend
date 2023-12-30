const Message = ({ text, time, isUser }) => {
    return (
      <div className={`items-stretch flex justify-between gap-5 mt-1.5 max-md:max-w-full max-md:flex-wrap ${isUser ? 'justify-end' : ''}`}>
        <div className="items-stretch bg-gray-100 self-stretch flex grow basis-[0%] flex-col pt-3 pb-1.5 px-7 rounded-none max-md:max-w-full max-md:px-5">
          <div className="text-black text-opacity-80 text-sm max-md:max-w-full">
            {text}
          </div>
          <div className="text-black text-opacity-50 text-xs font-bold leading-4 mt-1 max-md:max-w-full">
            {time}
          </div>
        </div>
      </div>
    );
  };
  
  export default Message;