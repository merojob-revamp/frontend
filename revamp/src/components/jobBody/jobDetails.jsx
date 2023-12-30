import * as React from "react";

export default function JobDetail() {
  return (
    <div className="items-stretch bg-white flex flex-col pb-12 rounded-lg border-2 border-solid border-neutral-900 border-opacity-10">
      <div className="self-center w-full max-w-[1312px] mt-9 mb-9 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-1/5 max-md:w-full max-md:ml-0">
            <div className="items-stretch border shadow-sm bg-white flex flex-col w-full px-6 py-7 rounded-lg border-solid border-neutral-900 border-opacity-10 max-md:mt-8 max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b3bf008ddd398cacc2414798cd4cca66f0defe4cc0f2f3a78d9bc23d240aa278?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3bf008ddd398cacc2414798cd4cca66f0defe4cc0f2f3a78d9bc23d240aa278?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3bf008ddd398cacc2414798cd4cca66f0defe4cc0f2f3a78d9bc23d240aa278?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3bf008ddd398cacc2414798cd4cca66f0defe4cc0f2f3a78d9bc23d240aa278?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3bf008ddd398cacc2414798cd4cca66f0defe4cc0f2f3a78d9bc23d240aa278?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3bf008ddd398cacc2414798cd4cca66f0defe4cc0f2f3a78d9bc23d240aa278?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3bf008ddd398cacc2414798cd4cca66f0defe4cc0f2f3a78d9bc23d240aa278?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3bf008ddd398cacc2414798cd4cca66f0defe4cc0f2f3a78d9bc23d240aa278?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                className="aspect-square object-contain object-center w-[202px] items-center overflow-hidden self-center"
              />
              <div className="text-zinc-700 text-base font-bold leading-6 whitespace-nowrap mt-4">
                Leapfrog Technology Inc.
              </div>
              <div className="text-zinc-700 text-base font-medium leading-6 self-center whitespace-nowrap mt-5">
                Industry - IT
              </div>
              <div className="text-zinc-700 text-base leading-6 whitespace-nowrap mt-4">
                No of Employees - 700+{" "}
              </div>
              <div className="text-zinc-700 text-base leading-6 self-center whitespace-nowrap mt-4">
                Offices in - 5 cities
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="border shadow-sm bg-white flex justify-between gap-5 w-full p-6 rounded-lg border-solid border-neutral-900 border-opacity-10 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-8 max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2fb03f1790dd9f3eb0143ed406af530c61a56b4f635e39a9a7f080cad5015067?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fb03f1790dd9f3eb0143ed406af530c61a56b4f635e39a9a7f080cad5015067?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fb03f1790dd9f3eb0143ed406af530c61a56b4f635e39a9a7f080cad5015067?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fb03f1790dd9f3eb0143ed406af530c61a56b4f635e39a9a7f080cad5015067?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fb03f1790dd9f3eb0143ed406af530c61a56b4f635e39a9a7f080cad5015067?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fb03f1790dd9f3eb0143ed406af530c61a56b4f635e39a9a7f080cad5015067?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fb03f1790dd9f3eb0143ed406af530c61a56b4f635e39a9a7f080cad5015067?apiKey=3b09c573e2794be0bf1bc69becf3280a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fb03f1790dd9f3eb0143ed406af530c61a56b4f635e39a9a7f080cad5015067?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                className="aspect-square object-contain object-center w-[72px] overflow-hidden shrink-0 max-w-full"
              />
              <div className="items-start self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                <div className="justify-between items-stretch content-between flex-wrap self-stretch flex w-full gap-5 max-md:max-w-full">
                  <div className="items-stretch flex flex-col">
                    <div className="text-neutral-900 text-lg leading-7">
                      Leapfrog Technology Inc.
                    </div>
                    <div className="justify-between items-stretch flex gap-3 mt-1">
                      <div className="text-neutral-900 text-2xl font-medium leading-9 grow whitespace-nowrap">
                        Software Engineer
                      </div>
                      <div className="text-green-600 text-xs font-medium leading-5 whitespace-nowrap items-stretch bg-green-600 bg-opacity-10 self-center aspect-[2.5454545454545454] justify-center my-auto px-1.5 py-0.5 rounded">
                        Remote
                      </div>
                    </div>
                  </div>
                  <div className="justify-end items-stretch flex gap-3 self-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac046488a0acc543fe897e43e0f4acbddc31da4850a8b42405004b9a2b4272f2?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                      className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-white text-base font-medium leading-6 whitespace-nowrap justify-center items-stretch content-center flex-wrap rounded bg-blue-500 grow px-14 py-2 max-md:px-5">
                      APPLY
                    </div>
                  </div>
                </div>
                <div className="justify-between items-center self-stretch flex gap-5 mt-1.5 py-0.5 max-md:max-w-full max-md:flex-wrap">
                  <div className="items-center self-stretch flex justify-between gap-1.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/07fccf3c557ef92055209c9626293551087742758cfe24f6101d169dbb30dfdc?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                      Brussels
                    </div>
                  </div>
                  <div className="flex w-0.5 shrink-0 h-0.5 flex-col my-auto rounded-[50%]" />
                  <div className="items-center self-stretch flex justify-between gap-1.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/79befeab62e7eba90d6545df0ed44febb02087ea46c86712203f6e623e87b879?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                      Full time
                    </div>
                  </div>
                  <div className="flex w-0.5 shrink-0 h-0.5 flex-col my-auto rounded-[50%]" />
                  <div className="items-center self-stretch flex justify-between gap-1.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fa44bb7b20a837c21da6ca3a27a13edaa16695a64622e482b6672f5095c8d1d?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                      50-55k
                    </div>
                  </div>
                  <div className="flex w-0.5 shrink-0 h-0.5 flex-col my-auto rounded-[50%]" />
                  <div className="items-center self-stretch flex justify-between gap-1.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6973973c6709ad083ecaeeb7572500a7b688434798310491a51f4859d0eca912?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                      29 min ago
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-neutral-900 text-opacity-70 text-base leading-6 mt-3 max-md:max-w-full">
                  Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad
                  sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.
                  laborum tempor Lorem incididunt. Mollit in laborum tempor
                  Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint
                  culpa do incididunt eiusmod eiusmod culpa. laborum tempor
                  Lorem incididunt.Mollit in laborum tempor Lorem incididunt
                  irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt
                  eiusmod eiusmod culpa. laborum tempor Lorem incididunt.Mollit
                  in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt.
                  Pariatur sint culpa do incididunt eiusmod eiusmod culpa.
                  laborum tempor Lorem incididunt.Mollit in laborum tempor Lorem
                  incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do
                  incididunt eiusmod eiusmod culpa. laborum tempor Lorem
                  incididunt.Mollit in laborum tempor Lorem incididunt irure.
                  Aute eu ex ad sunt.{" "}
                </div>
                <div className="text-neutral-900 text-2xl font-medium leading-9 whitespace-nowrap mt-3 self-start">
                  Other Job Openings
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e28ea66f7bc2f838a065b4b479812cb232bd19884b2b5ae28e97bc9d13fa144?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                  className="aspect-[114.5] object-contain object-center w-[229px] stroke-[2px] stroke-blue-500 overflow-hidden max-w-full mt-2 self-start"
                />
                <div className="self-stretch flex flex-col mt-6 border-b-zinc-600 border-b-opacity-20 border-b border-solid items-start max-md:max-w-full">
                  <div className="justify-center items-stretch flex gap-3">
                    <div className="text-neutral-900 text-xl font-medium leading-8 grow whitespace-nowrap">
                      Software Engineer
                    </div>
                    <div className="text-green-600 text-xs font-medium leading-5 whitespace-nowrap items-stretch bg-green-600 bg-opacity-10 self-center aspect-[2.5454545454545454] justify-center my-auto px-1.5 py-0.5 rounded">
                      Remote
                    </div>
                  </div>
                  <div className="justify-between items-center self-stretch flex gap-5 py-0.5 max-md:max-w-full max-md:flex-wrap">
                    <div className="items-center self-stretch flex justify-between gap-1.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/07fccf3c557ef92055209c9626293551087742758cfe24f6101d169dbb30dfdc?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                        Brussels
                      </div>
                    </div>
                    <div className="flex w-0.5 shrink-0 h-0.5 flex-col my-auto rounded-[50%]" />
                    <div className="items-center self-stretch flex justify-between gap-1.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/79befeab62e7eba90d6545df0ed44febb02087ea46c86712203f6e623e87b879?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                        Full time
                      </div>
                    </div>
                    <div className="flex w-0.5 shrink-0 h-0.5 flex-col my-auto rounded-[50%]" />
                    <div className="items-center self-stretch flex justify-between gap-1.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fa44bb7b20a837c21da6ca3a27a13edaa16695a64622e482b6672f5095c8d1d?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                        50-55k
                      </div>
                    </div>
                    <div className="flex w-0.5 shrink-0 h-0.5 flex-col my-auto rounded-[50%]" />
                    <div className="items-center self-stretch flex justify-between gap-1.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6973973c6709ad083ecaeeb7572500a7b688434798310491a51f4859d0eca912?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                        29 min ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col mt-2 border-b-zinc-600 border-b-opacity-20 border-b border-solid items-start max-md:max-w-full">
                  <div className="justify-center items-stretch flex gap-3">
                    <div className="text-neutral-900 text-xl font-medium leading-8 grow whitespace-nowrap">
                      Software Engineer
                    </div>
                    <div className="text-green-600 text-xs font-medium leading-5 whitespace-nowrap items-stretch bg-green-600 bg-opacity-10 self-center aspect-[2.5454545454545454] justify-center my-auto px-1.5 py-0.5 rounded">
                      Remote
                    </div>
                  </div>
                  <div className="justify-between items-center self-stretch flex gap-5 py-0.5 max-md:max-w-full max-md:flex-wrap">
                    <div className="items-center self-stretch flex justify-between gap-1.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/07fccf3c557ef92055209c9626293551087742758cfe24f6101d169dbb30dfdc?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                        Brussels
                      </div>
                    </div>
                    <div className="flex w-0.5 shrink-0 h-0.5 flex-col my-auto rounded-[50%]" />
                    <div className="items-center self-stretch flex justify-between gap-1.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/79befeab62e7eba90d6545df0ed44febb02087ea46c86712203f6e623e87b879?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                        Full time
                      </div>
                    </div>
                    <div className="flex w-0.5 shrink-0 h-0.5 flex-col my-auto rounded-[50%]" />
                    <div className="items-center self-stretch flex justify-between gap-1.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fa44bb7b20a837c21da6ca3a27a13edaa16695a64622e482b6672f5095c8d1d?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                        50-55k
                      </div>
                    </div>
                    <div className="flex w-0.5 shrink-0 h-0.5 flex-col my-auto rounded-[50%]" />
                    <div className="items-center self-stretch flex justify-between gap-1.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6973973c6709ad083ecaeeb7572500a7b688434798310491a51f4859d0eca912?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                        29 min ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="justify-center items-stretch flex gap-3 mt-2 self-start">
                  <div className="text-neutral-900 text-xl font-medium leading-8 grow whitespace-nowrap">
                    Software Engineer
                  </div>
                  <div className="text-green-600 text-xs font-medium leading-5 whitespace-nowrap items-stretch bg-green-600 bg-opacity-10 self-center aspect-[2.5454545454545454] justify-center my-auto px-1.5 py-0.5 rounded">
                    Remote
                  </div>
                </div>
                <div className="justify-between items-center self-stretch flex gap-5 py-0.5 max-md:max-w-full max-md:flex-wrap">
                  <div className="items-center self-stretch flex justify-between gap-1.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/07fccf3c557ef92055209c9626293551087742758cfe24f6101d169dbb30dfdc?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                      Brussels
                    </div>
                  </div>
                  <div className="flex w-0.5 shrink-0 h-0.5 flex-col my-auto rounded-[50%]" />
                  <div className="items-center self-stretch flex justify-between gap-1.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/79befeab62e7eba90d6545df0ed44febb02087ea46c86712203f6e623e87b879?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                      Full time
                    </div>
                  </div>
                  <div className="flex w-0.5 shrink-0 h-0.5 flex-col my-auto rounded-[50%]" />
                  <div className="items-center self-stretch flex justify-between gap-1.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fa44bb7b20a837c21da6ca3a27a13edaa16695a64622e482b6672f5095c8d1d?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                      50-55k
                    </div>
                  </div>
                  <div className="flex w-0.5 shrink-0 h-0.5 flex-col my-auto rounded-[50%]" />
                  <div className="items-center self-stretch flex justify-between gap-1.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6973973c6709ad083ecaeeb7572500a7b688434798310491a51f4859d0eca912?apiKey=3b09c573e2794be0bf1bc69becf3280a&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-neutral-900 text-opacity-70 text-base leading-6 self-stretch grow whitespace-nowrap">
                      29 min ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-8">
              <div className="items-stretch border shadow-sm bg-white flex flex-col p-6 rounded-lg border-solid border-neutral-900 border-opacity-10 max-md:px-5">
                <div className="text-neutral-900 text-xl font-bold leading-8 whitespace-nowrap">
                  📨 Email me for jobs
                </div>
                <div className="text-neutral-900 text-opacity-80 text-sm leading-5 mt-4">
                  Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat
                  commodo ea foes.
                </div>
                <div className="text-neutral-900 text-opacity-50 text-base leading-6 whitespace-nowrap rounded border shadow-sm bg-white justify-center mt-4 pl-3 pr-16 py-2 border-solid border-neutral-900 border-opacity-20 items-start max-md:pr-5">
                  name@mail.com
                </div>
                <div className="text-white text-base font-medium leading-6 whitespace-nowrap justify-center items-center rounded bg-blue-500 mt-3 px-16 py-2 max-md:px-5">
                  Subcribe
                </div>
              </div>
              <div className="items-stretch border shadow-sm bg-white flex flex-col mt-4 p-6 rounded-lg border-solid border-neutral-900 border-opacity-10 max-md:px-5">
                <div className="text-neutral-900 text-xl font-bold leading-8 whitespace-nowrap">
                  🚀 Get noticed faster
                </div>
                <div className="text-neutral-900 text-opacity-80 text-sm leading-5 mt-4">
                  Quis eiusmod deserunt cillum laboris magna cupidatat esse
                  labore irure quis cupidatat in.
                </div>
                <div className="text-white text-base font-medium leading-6 whitespace-nowrap justify-center items-stretch rounded bg-blue-500 mt-4 px-6 py-2 max-md:px-5">
                  Upload resume
                </div>
              </div>
              <div className="items-stretch border shadow-sm bg-white bg-opacity-30 flex flex-col -mr-px mt-4 p-6 rounded-lg border-solid border-neutral-900 border-opacity-10 max-md:px-5">
                <div className="text-neutral-900 text-xl font-bold leading-8">
                  😎 Freelance gigs
                </div>
                <div className="text-neutral-900 text-opacity-80 text-sm leading-5 mt-4">
                  Find curated freelance gigs on your freelance portal.
                </div>
                <div className="text-white text-base font-medium leading-6 whitespace-nowrap justify-center items-stretch rounded bg-blue-500 mr-0 mt-4 px-7 py-2 max-md:px-5">
                  Visit Freelance site
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


