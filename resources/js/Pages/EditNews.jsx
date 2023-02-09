import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import { router } from "@inertiajs/react";
import { useState } from "react";

export default function EditNews(props) {
    const [title, setTitle] = useState(props.myNews.title);
    const [desc, setDesc] = useState(props.myNews.desc);
    const [category, setCategory] = useState(props.myNews.category);

    const handleSubmit = () => {
        router.post("/news/update", {
            id: props.myNews.id,
            title: title,
            desc: desc,
            category: category,
        });
    };

    return (
        <div className="min-h-screen bg-slate-400">
            <Head title={props.title} />
            <Navbar auth={props.auth.user} />
            <div>
                <div className="p-4 text-2xl text-black text-center">
                    Edit Berita
                </div>
                <div className="card md:w-96 bg-base-100 shadow-xl sm:mx-auto m-5">
                    <figure id="Card-image">
                        <img src="https://picsum.photos/1000" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <input
                            type="text"
                            className="input input-bordered w-full m-2"
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            defaultValue={props.myNews.title}
                        />
                        <input
                            type="text"
                            className="input input-bordered w-full m-2"
                            onChange={(e) => {
                                setDesc(e.target.value);
                            }}
                            defaultValue={props.myNews.desc}
                        />
                        <input
                            type="text"
                            className="input input-bordered w-full m-2"
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}
                            defaultValue={props.myNews.category}
                        />
                        <button
                            className="btn btn-primary m-2"
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
