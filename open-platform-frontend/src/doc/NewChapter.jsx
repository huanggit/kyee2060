import React, {Component} from "react";
import ReactMarkdown from 'react-markdown';

export default class NewChapter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: "",
        };
    }

    newChapter() {
        let formData = new FormData();
        formData.append("docId",this.props.docId);
        formData.append("name",this.refs.name.value);
        formData.append("content",this.state.content);
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
                    <label>标题：</label>
                    <input ref={"name"} placeholder="请把长度控制在8个字以内" maxLength="8"/>
                    <br/>
                    <label>内容（MarkDown格式）：</label>
                    <br/>
                    <textarea value={t.state.content}
                              onChange={function (event) {
                                  this.setState({content: event.target.value});
                              }.bind(this)}
                              onScroll={function () {
                        document.getElementsByClassName("markdown")[0].scrollTop =
                            document.getElementsByTagName("textarea")[0].scrollTop;
                    }}
                    ></textarea>
                    <ReactMarkdown className="markdown" escapeHtml={true} source={t.state.content}/>
                </div>
            </div>
        )
    }
}


