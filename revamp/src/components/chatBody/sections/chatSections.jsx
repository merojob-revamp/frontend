import Message from "../components/messageBox";

export default function ChatSection({currentUser}){
    return (
        <>
        <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch border shadow-sm bg-white flex grow flex-col w-full pt-6 px-6 rounded-lg border-solid border-neutral-900 border-opacity-10 max-md:max-w-full max-md:mt-8 max-md:px-5">
                <div className="bg-white flex flex-col justify-center pr-16 py-2.5 items-start max-md:max-w-full max-md:pr-5">
                  <div className="items-stretch flex gap-3">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/467e41997d3a4b373318eb57ca96d6858a99e19fcbf70613c7e688597fce9f72?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/467e41997d3a4b373318eb57ca96d6858a99e19fcbf70613c7e688597fce9f72?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/467e41997d3a4b373318eb57ca96d6858a99e19fcbf70613c7e688597fce9f72?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/467e41997d3a4b373318eb57ca96d6858a99e19fcbf70613c7e688597fce9f72?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/467e41997d3a4b373318eb57ca96d6858a99e19fcbf70613c7e688597fce9f72?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/467e41997d3a4b373318eb57ca96d6858a99e19fcbf70613c7e688597fce9f72?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/467e41997d3a4b373318eb57ca96d6858a99e19fcbf70613c7e688597fce9f72?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/467e41997d3a4b373318eb57ca96d6858a99e19fcbf70613c7e688597fce9f72?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                      className="aspect-square object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="justify-center items-stretch flex grow basis-[0%] flex-col py-1">
                      <div className="text-black text-opacity-80 text-base font-medium leading-4">
                        Travis Barker
                      </div>
                      <div className="text-green-500 text-sm leading-4 mt-1">
                        Online
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-zinc-100 shrink-0 h-px max-md:max-w-full" />
                <div className="flex justify-between gap-2.5 mt-1.5 items-start max-md:max-w-full max-md:flex-wrap">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b640cb27387b574e0eb7fd86fdbf7125a47b83b804687c6a73e4ac5a979d7?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b640cb27387b574e0eb7fd86fdbf7125a47b83b804687c6a73e4ac5a979d7?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b640cb27387b574e0eb7fd86fdbf7125a47b83b804687c6a73e4ac5a979d7?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b640cb27387b574e0eb7fd86fdbf7125a47b83b804687c6a73e4ac5a979d7?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b640cb27387b574e0eb7fd86fdbf7125a47b83b804687c6a73e4ac5a979d7?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b640cb27387b574e0eb7fd86fdbf7125a47b83b804687c6a73e4ac5a979d7?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b640cb27387b574e0eb7fd86fdbf7125a47b83b804687c6a73e4ac5a979d7?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b640cb27387b574e0eb7fd86fdbf7125a47b83b804687c6a73e4ac5a979d7?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="items-start self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                    <div className="text-black text-opacity-80 text-sm justify-center items-stretch bg-gray-100 self-stretch px-5 py-3 rounded-none max-md:max-w-full">
                      Hi! I made new UI-Kit for project, check it late{" "}
                    </div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/84626309b858d09d4ae987cd79e4e29ddea21382f7f8a5c5ed78c516077c7cb8?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/84626309b858d09d4ae987cd79e4e29ddea21382f7f8a5c5ed78c516077c7cb8?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84626309b858d09d4ae987cd79e4e29ddea21382f7f8a5c5ed78c516077c7cb8?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/84626309b858d09d4ae987cd79e4e29ddea21382f7f8a5c5ed78c516077c7cb8?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/84626309b858d09d4ae987cd79e4e29ddea21382f7f8a5c5ed78c516077c7cb8?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84626309b858d09d4ae987cd79e4e29ddea21382f7f8a5c5ed78c516077c7cb8?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/84626309b858d09d4ae987cd79e4e29ddea21382f7f8a5c5ed78c516077c7cb8?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/84626309b858d09d4ae987cd79e4e29ddea21382f7f8a5c5ed78c516077c7cb8?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                      className="aspect-square object-contain object-center w-60 overflow-hidden max-w-full mt-1 self-start"
                    />
                    <div className="text-sky-500 text-sm justify-center items-stretch bg-gray-100 self-stretch mt-1 px-5 py-3 rounded-2xl max-md:max-w-full">
                      https://dribbble.com/shots/17742253-ui-kit-designjam
                    </div>
                    <Message text="Hi! I made new UI-Kit for project, check it late" time="15:42" isUser={true} />
                  </div>
                </div>
                <div className="flex justify-between gap-2.5 mt-1.5 items-start max-md:max-w-full max-md:flex-wrap">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b640cb27387b574e0eb7fd86fdbf7125a47b83b804687c6a73e4ac5a979d7?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b640cb27387b574e0eb7fd86fdbf7125a47b83b804687c6a73e4ac5a979d7?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b640cb27387b574e0eb7fd86fdbf7125a47b83b804687c6a73e4ac5a979d7?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b640cb27387b574e0eb7fd86fdbf7125a47b83b804687c6a73e4ac5a979d7?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b640cb27387b574e0eb7fd86fdbf7125a47b83b804687c6a73e4ac5a979d7?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b640cb27387b574e0eb7fd86fdbf7125a47b83b804687c6a73e4ac5a979d7?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b640cb27387b574e0eb7fd86fdbf7125a47b83b804687c6a73e4ac5a979d7?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e2b640cb27387b574e0eb7fd86fdbf7125a47b83b804687c6a73e4ac5a979d7?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="items-stretch bg-gray-100 self-stretch flex grow basis-[0%] flex-col pt-3 pb-1.5 px-7 rounded-none max-md:max-w-full max-md:px-5">
                    <div className="text-black text-opacity-80 text-sm max-md:max-w-full">
                      Hello! Have you seen my backpack anywhere in office?
                    </div>
                    <div className="text-black text-opacity-50 text-xs font-bold leading-4 mt-1 max-md:max-w-full">
                      15:42
                    </div>
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-5 mt-1.5 max-md:max-w-full max-md:flex-wrap">
                  <div className="bg-zinc-100 self-center w-[257px] shrink-0 max-w-full h-px my-auto" />
                  <div className="text-black text-opacity-50 text-xs font-medium">
                    Today
                  </div>
                  <div className="bg-zinc-100 self-center w-64 shrink-0 max-w-full h-px my-auto" />
                </div>
                <div className="justify-center flex flex-col mt-1.5 pl-20 items-end max-md:max-w-full max-md:pl-5">
                  <div className="justify-end items-stretch bg-gray-100 flex w-[360px] max-w-full flex-col pt-3 pb-1.5 px-5 rounded-2xl">
                    <div className="text-black text-opacity-80 text-right text-sm whitespace-nowrap">
                      Hi, yes, David have found it, ask our concierge 👀{" "}
                    </div>
                    <div className="items-center flex w-[52px] max-w-full gap-2 mt-1 self-end">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d447211f39e31dc476503bb0da3723bb52fc9b40c2dec8bd2930e00a6b74052?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
                      />
                      <div className="text-black text-opacity-50 text-xs font-bold leading-4 self-stretch">
                        15:42
                      </div>
                    </div>
                  </div>
                  <div className="justify-end items-stretch bg-gray-100 flex w-[231px] max-w-full flex-col mt-1.5 pt-3 pb-1.5 px-5 rounded-2xl">
                    <div className="text-black text-opacity-80 text-right text-sm whitespace-nowrap">
                      Thank you for work, see you!
                    </div>
                    <div className="items-center flex gap-2 mt-1 self-end">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d447211f39e31dc476503bb0da3723bb52fc9b40c2dec8bd2930e00a6b74052?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                        className="aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="text-black text-opacity-50 text-xs font-bold leading-4 self-stretch">
                        15:42
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow-sm bg-white flex flex-col justify-center items-stretch mt-1.5 py-0.5 max-md:max-w-full">
                  <div className="items-stretch flex justify-between gap-3 pl-3.5 py-0.5 max-md:max-w-full max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/59f2b6a821196c37d39b8dfacb7e90fbbd914261ed69cf2af30c1980859d9b99?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                      className="aspect-[0.88] object-contain object-center w-3.5 fill-black fill-opacity-50 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                    <div className="text-black text-opacity-50 text-sm whitespace-nowrap bg-neutral-50 grow justify-center pl-3 pr-16 py-3 rounded-xl items-start max-md:max-w-full max-md:pr-5">
                        <input type="text" className="bg-transparent w-full outline-none" placeholder="Type your message here.."/>
                    </div>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    <span className="sr-only">Icon description</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
}