import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <ul className="flex">
                <i className="mr-6">
                    <a href="#" className="text-blue-300 hover:text-blue-600">
                        Active
                    </a>
                </i>

                <i className="mr-6">
                    <a href="#" className="text-blue-300 hover:text-blue-600">
                        Link
                    </a>
                </i>

                <i className="mr-6">
                    <a href="#" className="text-blue-300 hover:text-blue-600">
                        link
                    </a>
                </i>

                <i className="mr-6">
                    <a href="#" className="text-gray-300 cursor-not-allowed">
                        Disabled asdf
                    </a>
                </i>
            </ul>

            <div>{children}</div>
            <Footer />
        </div>
    );
}
