import Layout from "@/components/layout";
import { Button, ButtonRed } from "@/components/button";

export default function Todo() {
    const iniAdalahParagraf = <p>Paragraf didalam P</p>;

    const element1 = (
        <div>
            <h1>hellow</h1>
            <h2>good to see yoy</h2>
        </div>
    );

    function formatName(user) {
        return user.firstName + " " + user.lastName;
    }

    const user = {
        firstName: "Deni",
        lastName: "Supriyatna",
    };

    return (
        <div className="container mx-auto px-4">
            <Layout>
                <h1 className="text-lg">{formatName(user)}</h1>
                <p>asdf</p>
                ini adalah pertama kedua ketiga
                {iniAdalahParagraf}
                {element1}
            </Layout>

            <section>
                <div className="w-full max-wxs">
                    <form
                        action=""
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6"
                    >
                        {/* <div className="mb-4">
                            <label
                                id="labelUsername"
                                htmlFor="username"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Username
                            </label>

                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div> */}

                        <div className="mb-4">
                            <label
                                htmlFor="title"
                                id="labelTitle"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Title
                            </label>

                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="title"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="checkbox"
                                className="mr-2 leading-tight"
                            />
                            <label
                                htmlFor="isDone"
                                className="text-gray-700 text-sm font-bold mb-2"
                            >
                                Is Done
                            </label>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            title="save"
                            className="bg-green-700 hover:bg-green-600 focus:bg-green-800 active:bg-green-900 rounded-sm pt-1 pb-1 pl-3 pr-3 m-1 text-white"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </section>

            <section className="bg-gray-200 py-3 px-3 rounded">
                <form action="" className="rounded">
                    <input type="text" name="query" />
                    <button type="submit" className="text-black">
                        search
                    </button>
                </form>
            </section>

            <Button text="Link" title="hyper link" type="link" link="#" />
            <Button text="Button" title="button" type="button" link="#" />

            <ButtonRed text="Button" title="button" type="link" link="#" />

            <div className="flex flex-wrap mb-3">
                <div className="basis-1 bg-red-400 mx-1 mb-3"> 1</div>

                <div className="basis-2 bg-red-400 mx-1 mb-3"> 2</div>
                <div className="basis-3 bg-red-400 mx-1 mb-3"> 3</div>
                <div className="basis-4 bg-red-400 mx-1 mb-3"> 4</div>
                <div className="basis-5 bg-red-400 mx-1 mb-3"> 5</div>
                <div className="basis-6 bg-red-400 mx-1 mb-3"> 6</div>
                <div className="basis-7 bg-red-400 mx-1 mb-3"> 7</div>
                <div className="basis-8 bg-red-400 mx-1 mb-3"> 8</div>
                <div className="basis-9 bg-red-400 mx-1 mb-3"> 9</div>
                <div className="basis-10 bg-red-400 mx-1 mb-3"> 10</div>
                <div className="basis-11 bg-red-400 mx-1 mb-3"> 11</div>
                <div className="basis-12 bg-red-400 mx-1 mb-3"> 12</div>
                <div className="basis-13 bg-red-400 mx-1 mb-3"> 13</div>
                <div className="basis-14 bg-red-400 mx-1 mb-3"> 14</div>
                <div className="basis-15 bg-red-400 mx-1 mb-3"> 15</div>
                <div className="basis-16 bg-red-400 mx-1 mb-3"> 16</div>
                <div className="basis-17 bg-red-400 mx-1 mb-3"> 17</div>
                <div className="basis-18 bg-red-400 mx-1 mb-3"> 18</div>
                <div className="basis-19 bg-red-400 mx-1 mb-3"> 19</div>
                <div className="basis-20 bg-red-400 mx-1 mb-3"> 20</div>
                <div className="basis-21 bg-red-400 mx-1 mb-3"> 21</div>
                <div className="basis-22 bg-red-400 mx-1 mb-3"> 22</div>
                <div className="basis-23 bg-red-400 mx-1 mb-3"> 23</div>
                <div className="basis-24 bg-red-400 mx-1 mb-3"> 24</div>
                <div className="basis-25 bg-red-400 mx-1 mb-3"> 25</div>
                <div className="basis-26 bg-red-400 mx-1 mb-3"> 26</div>
                <div className="basis-27 bg-red-400 mx-1 mb-3"> 27</div>
                <div className="basis-28 bg-red-400 mx-1 mb-3"> 28</div>
                <div className="basis-29 bg-red-400 mx-1 mb-3"> 29</div>
                <div className="basis-30 bg-red-400 mx-1 mb-3"> 30</div>

                <div className="basis-sm bg-yellow-300 text-black mx-1 mb-3">
                    MD 1
                </div>
                <div className="basis-md bg-orange-300 text-black mx-1 mb-3">
                    MD 2
                </div>
                <div className="basis-md bg-lime-500 mx-1 mb-3">MD 3</div>
                <div className="basis-md flex-auto bg-amber-200 mx-1 text-black mb-3">
                    MD 4
                </div>

                <div className="basis-lg bg-teal-300 mb-3">LG</div>
                <div className="basis-xl bg-emerald-300 mb-3">XL</div>
                <div className="basis-2xl bg-purple-500 mb-3">2XL</div>
                <div className="basis-3xl bg-rose-400 mb-3">3XL </div>
                <div className="basis-4xl bg-zinc-400 mb-3">4XL</div>
                <div className="basis-5xl bg-gray-200 mb-3 text-black">5XL</div>
                <div className="basis-6xl bg-stone-500 mb-3">6XL</div>
                <div className="basis-7xl bg-blue-800 mb-3">7XL</div>
            </div>

            <div className="flex mb-3">
                <div className="basis-xl bg-red-500 text-white">bg-red</div>
                <div className="basis-xl bg-blue-500 text-white">bg-blue</div>
            </div>

            <div className="flex mb-3">
                <div className="basis-sm bg-red-400 text-white">bg-red</div>
                <div className="basis-sm bg-green-400 text-white">bg-green</div>
            </div>

            <div className="flex mb-3">
                <div className="basis-md bg-red-400 text-white">bg-red</div>
                <div className="basis-md bg-green-400 text-white">bg-green</div>
            </div>

            <div className="flex mb-3">
                <div className="basis-lg bg-red-400 text-white">bg-red</div>
                <div className="basis-lg bg-green-400 text-white">bg-green</div>
            </div>

            <div className="flex mb-3">
                <div className="basis-xl bg-red-400 text-white">bg-red</div>
                <div className="basis-xl bg-green-400 text-white">bg-green</div>
            </div>

            <div className="flex mb-3">
                <div className="basis-2xl bg-red-400 text-white">bg-red</div>
                <div className="basis-2xl bg-green-400 text-white">
                    bg-green
                </div>
            </div>
        </div>
    );
}
