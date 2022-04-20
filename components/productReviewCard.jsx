import React, { Component } from "react";

const reviewCard = {
    backgroundColor: "white",
    padding: "3rem",
    boxShadow: "0px 2px 5px #B98B73",
    borderRadius: ".25rem",
    //marginBottom: "1rem",
    minHeight: "200",
    maxHeight: "250",
};

/*
Ask Anna for tips for resizing image to container while maintaining aspect ratio...
*/
const imgStyle = {
    height: "100%",
    //width: "auto",
    objectFit: "cover",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
};

// Me copy and pasting checkbox form input...
/*
class ReviewCard extends React.Component { 
constructor(props) {
    super(props);
    this.state = {
        toReserve: true,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
}
*/


/*
Do you need to make another function to take into account reserve checkbox? 
I want Items price amount in checkout page to update whenever a product's reserve checkbox is marked.
How do you take into account this form's properties externally in the checkout page...?
*/
function ReviewCard() {
    return (
        <div>
            <div className="card" style={{ reviewCard }}>
                <div className="row no-gutters">
                    <div className="col-lg-4" style={{ ...{ display: "flex" }, ...{ ustifyContent: "center" } }}>
                        <img
                            src="https://picsum.photos/100"
                            //className="card-img-side"
                            alt="..."
                            style={{ imgStyle }}
                        />
                    </div>
                    <div className="col-lg-8">
                        <h5 className="card-title">Title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Author</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Price</h6>
                        
                        <label className="form-check-label" for="checkReserve">
                            <input className="form-check-input" type="checkbox" value="" id="checkReserve"></input>
                            &nbsp;&nbsp;&nbsp;Reserve Instead

                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;

/* Add checkbox after Price
<form>
    <label>
        Reserve Book:
        <input
            name="toReserve"
            type="checkbox"
            checked={this.state.toReserve}
            onChange={this.handleInputChange} />
    </label>
</form>
*/