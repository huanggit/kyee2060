import React, {Component} from "react";
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';


export default class Doc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likeIt: false,
            doc: {},
            chapters: [],
            index: 0,
            chapter: {"content":" "},
            auth: false
        };
        this.init = this.init.bind(this);
        // this.clickChapter = this.clickChapter.bind(this);
    }

    init(id){
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
                chapter: chs.length>0 ? chs[0]:{"content":" "}
            })
        }.bind(this));
        global.get("doc/authority/" + id, function (result) {
            this.setState({
                auth: result
            })
        }.bind(this));
    }

    componentWillReceiveProps(nextProps){
        this.init(nextProps.params.id);
    }

    componentDidMount() {
        this.init(this.props.params.id);
    }

    toggleLike() {
        global.get("like/toggle/" + this.props.params.id, function () {
            this.setState({
                likeIt: !this.state.likeIt,
            })
        }.bind(this));
    }

    clickChapter(i){
        this.setState({
            index: i,
            chapter: this.state.chapters[i]
        });
    }

    newChapter() {
        let formData = new FormData();
        formData.append("docId",this.props.params.id);
        formData.append("name",this.refs.name.value);
        formData.append("content",this.refs.content.value);
        global.post("doc/chapter/new", formData, function () {
            document.getElementById("box").style.display ="none";
        }.bind(this));
    }

    render() {
        var t = this;
        var s = this.state;
        return (
            <div>
                <div id="box" className="box">
                    <div className="button">
                        <button  onClick={t.newChapter.bind(t)}>保存</button>
                        <button  onClick={function () {
                            document.getElementById("box").style.display ="none";
                        }}>取消</button>
                    </div>
                    <div className="form">
                        <label>标题：</label>
                        <input ref={"name"}/>
                        <br/>
                        <label>内容（MarkDown格式）：</label>
                        <br/>
                        <textarea ref={"content"}></textarea>
                    </div>
                </div>

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
                                                    onClick={t.clickChapter.bind(t,i)}
                                                    className={(s.index==i)?"active":""}>
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
                                                    document.getElementById("box").style.display ="block";
                                                }}>新增</button>
                                                <button>修改</button>
                                                <button>删除</button>
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


