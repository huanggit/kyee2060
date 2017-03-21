import React, {Component} from "react";
import {Link} from 'react-router';
import ReactMarkdown from 'react-markdown';
import NewChapter from './NewChapter';
import UpdateChapter from './UpdateChapter';

export default class Doc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likeIt: false,
            doc: {},
            chapters: [],
            index: 0,
            chapter: {"content": " "},
            auth: false
        };
        this.init = this.init.bind(this);
    }

    init(id) {
        global.get("like/isLike/" + id, function (result) {
            this.setState({
                likeIt: result
            })
        }.bind(this));
        global.get("doc/chapters/" + id, function (result) {
            var chs = result.chapters;
            this.setState({
                doc: result.doc,
                chapters: chs,
                chapter: chs.length > 0 ? chs[0] : {"content": " "}
            })
        }.bind(this));
        var authorityUrl = (["tech", "dev", "ops", "ui"].indexOf(id) > -1) ? "isAdmin" : "isAuthor";
        global.get(authorityUrl, function (result) {
            this.setState({
                auth: result
            })
        }.bind(this));
    }

    componentWillReceiveProps(nextProps) {
        this.init(nextProps.params.id);
    }

    componentDidMount() {
        this.init(this.props.params.id);
    }

    toggleLike() {
        global.get("like/toggle/" + this.state.doc.id, function () {
            this.setState({
                likeIt: !this.state.likeIt,
            })
        }.bind(this));
    }

    clickChapter(i) {
        this.setState({
            index: i,
            chapter: this.state.chapters[i]
        });
    }

    render() {
        var t = this;
        var s = this.state;
        return (
            <div>
                <NewChapter docId={s.doc.id}/>
                {s.chapter.id && (
                    <UpdateChapter chapter={s.chapter}/>
                )}
                <div className="wrap">
                    <div className="container">
                        <div className="wrap-content clearfix">
                            <div>
                                <div className="wrap-left">
                                    <div className={s.likeIt ? "liked-it" : "like-it"}
                                         onClick={t.toggleLike.bind(t)}>
                                        <span className="glyphicon glyphicon-heart"> </span>
                                    </div>
                                    <h3>{s.doc.name}</h3>
                                    <h5>作者：{s.doc.author}</h5>
                                    <ul className="menu-list">
                                        {s.chapters.map(function (c, i) {
                                            return <li key={i}>
                                                <a href="javascript:void(0)"
                                                   onClick={t.clickChapter.bind(t, i)}
                                                   className={(s.index == i) ? "active" : ""}>
                                                    {c.name}
                                                </a></li>
                                        })}
                                    </ul>
                                    <div className="clear"></div>
                                </div>
                            </div>

                            <div>
                                <div className="wrap-right">
                                    {s.auth && (
                                        <div className="editButton">
                                            <button onClick={function () {
                                                document.getElementById("newChapter").style.display = "block";
                                            }}>新增
                                            </button>
                                            {s.chapter.id && (
                                                <button onClick={function () {
                                                    document.getElementById("updateChapter").style.display = "block";
                                                }}>修改</button>
                                            )}
                                            {s.chapter.id && (
                                                <button onClick={function () {
                                                    if (confirm('确认删除当前章节?')) {
                                                        let formData = new FormData();
                                                        formData.append("id", s.chapter.id);
                                                        formData.append("docId", s.chapter.docId);
                                                        global.post("doc/chapter/delete", formData, function () {
                                                            location.reload();
                                                        })
                                                    }
                                                }}>删除</button>
                                            )}
                                        </div>
                                    )}
                                    <ReactMarkdown escapeHtml={true} source={s.chapter.content}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


