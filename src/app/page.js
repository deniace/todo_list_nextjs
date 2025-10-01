import Image from "next/image";
import Layout from "@/components/layout";

export async function generateMetadata({ params, searchParams }, parent) {
    return {
        title: "ini title dari page js",
        description: "Ini description dari page js",
    };
}

export default function Home() {
    return (
        <>
            <Layout>
                <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                    asdf
                </div>
            </Layout>
        </>
    );
}
