export function Button(props) {
    // if (props.type == "link") {
    //     return (
    //         <a
    //             href={props.link}
    //             title={props.title}
    //             className="bg-blue-700 hover:bg-blue-600 active:bg-blue-900 text-black-700  rounded-sm pt-2 pb-2 pl-3 pr-3 m-1"
    //         >
    //             {props.text}
    //         </a>
    //     );
    // }

    return (
        <button
            title={props.title}
            className="bg-blue-700 hover:bg-blue-600 focus:bg-blue-800 active:bg-blue-900 rounded-sm pt-1 pb-1 pl-3 pr-3 m-1 text-white"
        >
            {props.text}
        </button>
    );
}

export function ButtonRed(props) {
    return (
        <button
            title={props.title}
            className="bg-red-600 hover:bg-red-500 active:bg-red-800 rounded-sm pt-1 pb-1 pl-3 pr-3 m-1 text-white mb-3"
        >
            {props.text}
        </button>
    );
}
