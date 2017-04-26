import React, {Component} from "react";
import Markdown from './Markdown';


export default class UpdateChapter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            docId: "",
            name: "",
            content: "",
            html: false
        };
        this.init = this.init.bind(this);
    }

    init(chapter){
        this.setState({
            id: chapter.id,
            docId: chapter.docId,
            name: chapter.name,
            content: chapter.content,
            html: chapter.html
        })
    }

    componentDidMount() {
        this.init(this.props.chapter);
    }

    componentWillReceiveProps(nextProps) {
        this.init(nextProps.chapter);
    }

    updateChapter() {
        var s = this.state;
        let formData = new FormData();
        formData.append("id", s.id);
        formData.append("docId", s.docId);
        formData.append("name", s.name);
        formData.append("content", s.content);
        formData.append("html",s.html);
        global.post("doc/chapter/update", formData, function () {
            document.getElementById("updateChapter").style.display = "none";
            location.reload();
        }.bind(this));
    }

    render() {
        var t = this;
        return (
            <div id="updateChapter" className="box">
                <div className="button">
                    <button onClick={t.updateChapter.bind(t)}>保存</button>
                    <button onClick={function () {
                        document.getElementById("updateChapter").style.display = "none";
                    }}>取消
                    </button>
                </div>
                <div className="chapterForm">
                    <div className="topic">
                        <label>标题：</label>
                        <input  className="topicName" value={t.state.name} disabled="disabled"/>
                        <input type="checkbox" className="checkbox" checked={t.state.html}
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
                                  document.getElementsByClassName("markdown")[1].scrollTop =
                                      document.getElementsByTagName("textarea")[1].scrollTop;
                              }}
                    ></textarea>
                    <Markdown html={t.state.html} source={t.state.content}/>
                </div>
            </div>
        )
    }
}


