import MessageCard from "./components/userCards";
import users from "./sections/dummydata";
import ChatSection from "./sections/chatSections";
import ProfileCard from "./sections/profileSections";
import {useState} from 'react'
export default function ChatPage(){
const [currentUser, setCurrentUser] = useState(users[0]);
if(!currentUser) {
    return (
        <>
        No User Selected..
        </>
    );
}
  return (
    <div className="items-stretch bg-white flex flex-col pb-9 rounded-lg border-2 border-solid border-neutral-900 border-opacity-10">
      {/* <div className="justify-center items-stretch bg-white flex w-full flex-col px-16 py-3 max-md:max-w-full max-md:px-5" /> */}
      <div className="items-stretch bg-neutral-50 flex w-full flex-col pt-12 px-16 max-md:max-w-full max-md:px-5">
        <div className="max-md:max-w-full max-md:mr-1">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
              <div className="items-start border shadow-sm bg-white flex w-full flex-col mx-auto pl-6 pr-10 py-6 rounded-lg border-solid border-neutral-900 border-opacity-10 max-md:mt-8 max-md:px-5">
                <div className="text-black text-2xl font-bold leading-4 self-stretch">
                  Messages
                </div>
                <div className="items-center bg-zinc-100 self-stretch flex justify-between gap-4 mt-3.5 px-3 py-2.5 rounded-xl max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8503f350274fadd215603f4460af5d5116ae3bb3fd594fdb99b89886222a8664?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                    className="aspect-square object-contain object-center w-2.5 fill-stone-500 stroke-[0.5px] stroke-stone-500 overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-black text-opacity-50 text-sm self-stretch grow whitespace-nowrap">
                    Search
                  </div>
                </div>
                <div className="flex gap-1.5 ml-3.5 mt-3 self-start items-start max-md:ml-2.5">
                  <div className="text-black text-opacity-70 text-xs leading-4 grow whitespace-nowrap">
                    Sort by
                  </div>
                  <div className="items-stretch self-stretch flex justify-between gap-2">
                    <div className="text-sky-500 text-sm leading-4">Newest</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/88de797f3d3527d5bc6dc89d158cc63c7e8d55cb1d7443beeb0f7706f74fc3f3?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                      className="aspect-[1.25] object-contain object-center w-[5px] fill-sky-500 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
                <div className="h-96 overflow-auto">
                {users.map((user) => (
                    <MessageCard key={user} onClick={() => setCurrentUser(user) }
                        {...{
                            imgSrc: user.imgSrc,
                            name: user.name,
                            message: user.message,
                            time: user.time,
                            notificationImgSrc: user.notificationImgSrc,
                            notificationCount: user.notificationCount,
                        }}
                    />
                ))}
                </div>
              </div>
            </div>
            <ChatSection user={currentUser} />
            <ProfileCard user={currentUser}/>
          </div>
        </div>
      </div>
    </div>
  );
}