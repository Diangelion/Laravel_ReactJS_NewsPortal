const isNews = (datas) => {
    return datas.map((data, i) => {
        return (
            <div key={i}>
                <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                    <figure id="Card-image">
                        <img src="https://picsum.photos/1000" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {data.title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{data.desc}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-inline">
                                {data.category}
                            </div>
                            <div className="badge badge-outline">
                                {data.author}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return (
        <>
            <p>Saat ini belum ada berita!</p>
        </>
    );
};

const NewsList = ({ news }) => {
    return news ? isNews(news) : noNews();
};

export default NewsList;
