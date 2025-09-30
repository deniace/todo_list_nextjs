"use client";

import { useState, useEffect } from "react";

import Layout from "@/components/layout";
import Form from "next/form";

export default function FormTodo() {
    useEffect(() => {
        console.log("render");
    }, []);

    const [queryValue, setQueryValue] = useState("");
    const handelInputQueryChange = (event) => {
        setQueryValue(event.target.value);
    };

    return (
        <div className="container">
            <Form id="form_query" action="/search">
                <div className="w-full">
                    <label htmlFor="query">Query</label>
                    <input
                        type="text"
                        value={queryValue}
                        onChange={handelInputQueryChange}
                        placeholder="set query"
                        className="bg-gray-50 text-gray-900 border-gray-300 text-sm rounded-sm"
                        autoFocus
                    />
                </div>
                <button type="submit">Search</button>
            </Form>

            <div className="my-3">
                <h1 className="text-lg font-bold text-white">{queryValue}</h1>
            </div>
        </div>
    );
}
