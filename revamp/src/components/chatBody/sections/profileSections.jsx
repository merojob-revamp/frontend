export default function ProfileCard(){
    return(
        <>
        <div className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-center border shadow-sm bg-white flex w-full flex-col mx-auto p-6 rounded-lg border-solid border-neutral-900 border-opacity-10 max-md:mt-8 max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b4a328c18d02b6a76603ca42de8031ed9649689770dd729353093a5681d86c26?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4a328c18d02b6a76603ca42de8031ed9649689770dd729353093a5681d86c26?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4a328c18d02b6a76603ca42de8031ed9649689770dd729353093a5681d86c26?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4a328c18d02b6a76603ca42de8031ed9649689770dd729353093a5681d86c26?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4a328c18d02b6a76603ca42de8031ed9649689770dd729353093a5681d86c26?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4a328c18d02b6a76603ca42de8031ed9649689770dd729353093a5681d86c26?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4a328c18d02b6a76603ca42de8031ed9649689770dd729353093a5681d86c26?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b4a328c18d02b6a76603ca42de8031ed9649689770dd729353093a5681d86c26?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                  className="aspect-square object-contain object-center w-[150px] justify-center items-center shadow-sm overflow-hidden self-center max-w-full"
                />
                <div className="justify-center items-stretch content-center self-stretch flex-wrap flex flex-col mt-2 pl-11 pr-6 max-md:px-5">
                  <div className="flex items-stretch justify-between gap-1">
                    <div className="text-zinc-600 text-center text-lg font-bold leading-7 grow whitespace-nowrap">
                      Travis Barker
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d6fce99062bf1af2ec389cda9e1d1a6835a2699e2ce6cc2ee077d056b158e20?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                  <div className="flex items-stretch justify-between gap-1 mt-1">
                    <div className="items-stretch bg-yellow-500 bg-opacity-10 flex aspect-[3.0454545454545454] flex-col justify-center px-2 py-0.5 rounded">
                      <div className="justify-between items-stretch flex gap-1 pr-2">
                        <div className="text-yellow-500 text-xs font-medium leading-5 grow whitespace-nowrap">
                          4.7
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1aacf16f6a6ccf393b8b566652c3c238c7d5f19f2a0d6b584c86a53895c9b421?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                          className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full self-start"
                        />
                      </div>
                    </div>
                    <div className="text-green-600 text-xs font-medium leading-5 self-center grow whitespace-nowrap my-auto">
                      25 hires
                    </div>
                  </div>
                </div>
                <div className="items-center self-center flex gap-1.5 mt-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2f175f8749de928689952089ba7594a71d03a03ea0a7f8293f31a72bb3975a3?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                    Kathmandu
                  </div>
                </div>
                <div className="text-red-700 text-center text-base leading-6 self-center whitespace-nowrap mt-2">
                  Report Profile
                </div>
              </div>
            </div>
        </>
    );
}