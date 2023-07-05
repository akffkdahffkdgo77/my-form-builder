import { Typography } from '@components';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex min-h-full w-full flex-col items-center justify-center bg-[#F6F6F6] p-5 pb-5 pt-10 font-mono ">
            <Typography component="h1" className="mb-10 text-5xl font-bold text-[#8785A2] underline">
                My Form Builder
            </Typography>
            <Typography component="h2" className="mb-10 text-3xl text-[#FFC7C7]">
                Simple HTML Form Builder
            </Typography>
            <div className="flex min-h-[300px] w-full flex-wrap items-start justify-center gap-5 xl:flex-nowrap">{children}</div>
        </main>
    );
}
