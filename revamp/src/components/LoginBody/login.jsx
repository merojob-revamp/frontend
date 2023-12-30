import {Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="items-stretch bg-white flex flex-col justify-center rounded-lg border-2 border-solid border-neutral-900 border-opacity-10">
      <div className="bg-white flex w-full flex-col items-stretch rounded-lg border-2 border-solid border-neutral-900 border-opacity-10 max-md:max-w-full">
        <div className="flex-col overflow-hidden relative flex min-h-[822px] w-full pl-20 pr-16 py-12 items-end max-md:max-w-full max-md:px-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/73214d185d5907ab78e8965affd763a17b03ef41edf82ecb75f27940044caa16?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/73214d185d5907ab78e8965affd763a17b03ef41edf82ecb75f27940044caa16?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73214d185d5907ab78e8965affd763a17b03ef41edf82ecb75f27940044caa16?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/73214d185d5907ab78e8965affd763a17b03ef41edf82ecb75f27940044caa16?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/73214d185d5907ab78e8965affd763a17b03ef41edf82ecb75f27940044caa16?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/73214d185d5907ab78e8965affd763a17b03ef41edf82ecb75f27940044caa16?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/73214d185d5907ab78e8965affd763a17b03ef41edf82ecb75f27940044caa16?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/73214d185d5907ab78e8965affd763a17b03ef41edf82ecb75f27940044caa16?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative justify-center items-center border shadow-sm bg-white flex w-[439px] max-w-full flex-col mt-32 px-9 py-7 rounded-lg border-solid border-neutral-900 border-opacity-10 max-md:mt-10 max-md:px-5">
            <div className="text-black text-3xl font-medium self-center whitespace-nowrap">
              Sign in
            </div>
            <input placeholder="Enter email or username" className="text-zinc-700 text-base whitespace-nowrap bg-indigo-50 self-stretch justify-center mt-5 pl-7 pr-16 py-6 rounded-lg items-start max-md:px-5"/>
            <input placeholder="Password.." className="text-zinc-700 text-base whitespace-nowrap bg-indigo-50 self-stretch justify-center mt-5 pl-7 pr-16 py-6 rounded-lg items-start max-md:px-5"/>
            <div className="text-zinc-400 text-base whitespace-nowrap mt-4 self-end">
              Forgot password ?
            </div>
            <Link to="/">
            <div className="flex text-white text-base font-medium whitespace-nowrap shadow-2xl bg-blue-500 self-stretch justify-center items-center mt-6 px-16 py-6 rounded-lg max-md:px-5 cursor-pointer">
                Login
            </div>
            </Link>
            
            {/* <div className="text-white text-base font-medium whitespace-nowrap shadow-2xl bg-blue-500 self-stretch justify-center items-center mt-6 px-16 py-6 rounded-lg max-md:px-5">
              Login
            </div> */}
            <div className="text-zinc-400 text-base font-medium self-center whitespace-nowrap mt-5">
              or continue with
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/870579b4ebfefd7573e8ec72b773cae7fb91d757c29e78cd7ed35eb88af48cba?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
              className="aspect-[3.84] object-contain object-center w-[165px] overflow-hidden self-center max-w-full mt-5"
            />
          </div>
          <div className="relative self-center flex w-[66px] max-w-full items-stretch gap-2.5 mt-28 max-md:mt-10">
            <div className="bg-white flex shrink-0 h-[9px] flex-col flex-1" />
            <div className="bg-blue-500 flex shrink-0 h-[9px] flex-col flex-1" />
            <div className="bg-white flex shrink-0 h-[9px] flex-col flex-1" />
            <div className="bg-white flex shrink-0 h-[9px] flex-col flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
}


