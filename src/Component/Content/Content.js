

import React from 'react';

const Content = ({title, image, desc ,id}) => {

    return (
        <div className="col-lg-4 p-2">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="m-5">
                        <img width="150" height="150" className="rounded-circle mr-2" src={image} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="m-2">
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
            <a  href={`/detailproduct/${id}`} className="btn btn-success">
                Xem chi tiết
            </a>
            <hr/>
        </div>
);
}

export default Content;

