import React from 'react';

const DishDetail = ({ renderDish, renderDishDetail, selectedDish }) => {
    return (
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                {renderDish(selectedDish)}
            </div>
            <div className="col-12 col-md-5 m-1">
                {
                    renderDishDetail(selectedDish)
                }
            </div>
        </div>
    )
}

export default DishDetail;