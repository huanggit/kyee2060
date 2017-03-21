import React, {Component} from "react";
import Entry from './Entry';
import NewDoc from './NewDoc';

export default class EntryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likesByTitle: {},
            docs: [],
            auth: false
        }
    }

    componentDidMount() {
        global.get("doc/type/" + this.props.type, function (result) {
            this.setState({
                docs: result
            })
        }.bind(this));
        global.get("/like/countGroupingByTitle", function (result) {
            this.setState({
                likesByTitle: result
            })
        }.bind(this));
        global.get("isAuthor", function (result) {
            this.setState({
                auth: result
            })
        }.bind(this));
    }

    render() {
        var t = this;
        var s = t.state;
        var likes = s.likesByTitle;
        return (
            <div>
                <NewDoc type={this.props.type} />
                <div>
                    <div className="welcome">
                        <div className="container">
                            <div className="intro">
                                <div className="tips"> 简介</div>
                                {this.props.brief}
                            </div>
                            <h3>{this.props.title}</h3>
                            {s.auth && (
                                <div className="editButton">
                                    <button onClick={function () {
                                        document.getElementById("newDoc").style.display = "block";
                                    }}>新增
                                    </button>
                                    <button onClick={function () {
                                        {/*document.getElementById("updateChapter").style.display = "block";*/
                                        }
                                    }}>编辑
                                    </button>
                                </div>
                            )}
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                {
                                    s.docs && s.docs.map(function (c, i) {
                                        return <Entry key={i}
                                                      link={"/doc/" + c.id}
                                                      icon={c.icon}
                                                      title={c.name}
                                                      like={likes[c.id]}/>
                                    })
                                }
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}