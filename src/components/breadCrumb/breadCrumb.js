import React from 'react';
import { useSelector } from 'react-redux';

function BreadCrumb() {
    const stateProductsList = useSelector((state) => state.products);

    if(stateProductsList.categories.length === 0) {
        return (
            <div></div>
        )
    } else {
        return (
            <div className="container-breadCrumbs">
                {
                    stateProductsList.categories.map((product, index, categories) => {
                        if(index === categories.length - 1) {
                            return (
                                <span className="breadCrumbs">{product}</span>
                            )
                        } else {
                            return (
                                <span className="breadCrumbs">{product} <span className="separator">></span> </span>
                            )
                        }
                    })
                }
            </div>
        )
    }

}

export default BreadCrumb;