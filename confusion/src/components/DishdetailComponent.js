import React, { Component } from "react";
import { list } from "reactstrap";

import { Card, CardImg, CardImgOverlay,CardText, CardBody, CardTitle } from "reactstrap";


class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                            <CardTitle heading>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComment(comments) {
        if (comments == null) {
            return (
                <div></div>
            );
        }

        const listComments = comments.map(comment => {
            return (
                <div>
                    <ul className="list-unstyled" key={comment.id}>
                        <li>{comment.comment}</li>
                        <li>-- {comment.author} ,
                            {" "}
                            {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit"
                            }).format(new Date(Date.parse(comment.date)))}
                        </li>
                    </ul>
                </div>
            );
        });

        return (
            <div>
              <h4>Comments</h4>
              <div>{listComments}</div>
            </div>
        );
    }

    render() {
        if (this.props.selectedDish != null) {
            return (
                
                <div className="row"> 
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComment(this.props.selectedDish.comments)}
                    </div>
                </div>
        
            );
        }
    }
}

export default Dishdetail;
