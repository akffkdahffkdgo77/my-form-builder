import { Outlet } from 'react-router-dom';

export default function BaseLayout() {
    return (
        <main className="bg-[#F6F6F6] w-full min-h-screen flex justify-center items-center flex-col pt-10 font-mono p-5 ">
            <h1 className="text-5xl font-bold underline text-[#8785A2] mb-10">My Form Builder</h1>
            <h2 className="text-3xl text-[#FFC7C7] mb-10">Simple HTML Form Builder</h2>
            <div className="w-full min-h-[300px] flex justify-center items-start gap-5 flex-wrap xl:flex-nowrap">
                <Outlet />
            </div>
        </main>
    );
}
