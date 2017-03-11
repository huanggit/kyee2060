import React, {Component} from "react";

export default class EntryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likesByTitle: {}
        }
    }

    componentDidMount() {
        global.get("/like/countGroupingByTitle", function (result) {
            this.setState({
                likesByTitle: result
            })
        }.bind(this));
    }

    dis(num) {
        if (num)return num;
        return 0;
    }
}