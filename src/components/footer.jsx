export default function Footer() {
    return (
        <>
            <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        @ 2023{" "}
                        <a href="#" className="hover:underline">
                            Deni Ace
                        </a>{" "}
                        allright reserved
                    </span>
                    <ul className="flex flex-wrap">
                        <li>
                            <a href="#">About</a>
                        </li>

                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="#">Licencing</a>
                        </li>

                        <li>
                            <a href="#">Contact </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
