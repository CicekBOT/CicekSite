
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Ortaklar
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.gg/CxeFFJYybY">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/attachments/1146110534266126477/1158037542940192828/Levon.png?ex=651aca01&is=65197881&hm=6a6b46bd68560ea0887be14d0b46ea2f6466cebd55a1ec57f56352dc344a32d1&" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Levon</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                        Kendi Botunu Kolayca Yap (Şşt aramızda ama güzel altyapılarda var)
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                    <div className="flex flex-col justify-center text-white rounded">
                        <a href="">
                            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/icons/924312493537509407/721de16575a9048c9c6980613ebb99f0.webp" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">CicekUptime</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                    Yakında...
                                    </p>
                                </div>     
                            </div>
                        </div>
                        </a>
                        </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
