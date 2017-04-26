import React, {Component} from "react";
import Markdown from './Markdown';

export default class NewChapter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            html: false,
            content: "",
        };
    }

    newChapter() {
        let formData = new FormData();
        formData.append("docId",this.props.docId);
        formData.append("name",this.refs.name.value);
        formData.append("content",this.state.content);
        formData.append("html",this.state.html);
        global.post("doc/chapter/new", formData, function () {
            document.getElementById("newChapter").style.display ="none";
            location.reload();
        }.bind(this));
    }

    render() {
        var t = this;
        return (
            <div id="newChapter" className="box">
                <div className="button">
                    <button  onClick={t.newChapter.bind(t)}>保存</button>
                    <button  onClick={function () {
                        t.refs.name.value = "";
                        document.getElementById("newChapter").style.display ="none";
                    }}>取消</button>
                </div>
                <div className="chapterForm">
                    <div className="topic">
                        <label>标题：</label>
                        <input ref={"name"} className="topicName" placeholder="请把长度控制在8个字以内" maxLength="8"/>
                        <input type="checkbox" className="checkbox"
                               onChange={function (event) {
                                   this.setState({html: event.target.checked});
                               }.bind(this)}/><span>html</span>
                        <div className="clearfix"></div>
                    </div>

                    <div >
                        <label className="contentLabel">内容（MarkDown格式）：</label>
                        <label className="contentPreview">预览：</label>
                    </div>

                    <textarea value={t.state.content}
                              onChange={function (event) {
                                  this.setState({content: event.target.value});
                              }.bind(this)}
                              onScroll={function () {
                        document.getElementsByClassName("markdown")[0].scrollTop =
                            document.getElementsByTagName("textarea")[0].scrollTop;
                    }}
                    ></textarea>
                    <Markdown   html={t.state.html} source={t.state.content}/>
                </div>
            </div>
        )
    }
}


