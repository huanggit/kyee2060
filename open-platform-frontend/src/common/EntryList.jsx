import React, {Component} from "react";
import Entry from '../common/Entry';

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
        global.get("doc/authority/" + this.props.type, function (result) {
            this.setState({
                auth: result
            })
        }.bind(this));
    }

    dis(num) {
        return num?num:0;
    }

    render() {
        var t = this;
        var s = t.state;
        var likes = s.likesByTitle;
        return (
            <div>
                <div>
                    <div className="welcome">
                        <div className="container">
                            <div className="intro">
                                <div className="tips"> 简介 </div>
                                医疗行业有哪些细分市场？公司几十个项目组都在做什么？要想代码写的好，业务知识要学好。
                            </div>
                            <h3>业务学习</h3>
                            {s.auth && (
                                <div className="editButton">
                                    <button onClick={function () {
                                        document.getElementById("newChapter").style.display = "block";
                                    }}>新增
                                    </button>
                                    <button onClick={function () {
                                        {/*document.getElementById("updateChapter").style.display = "block";*/}
                                    }}>编辑</button>
                                </div>
                            )}
                            <p className="ever"></p>
                            <div className="welcome-grids">
                                {
                                    s.docs && s.docs.map(function (c, i) {
                                        return <Entry  key={i}
                                                       link={"/doc/"+c.id}
                                                       icon={c.icon}
                                                       title={c.name}
                                                       like={t.dis(likes[c.id])}/>
                                    })
                                }
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}