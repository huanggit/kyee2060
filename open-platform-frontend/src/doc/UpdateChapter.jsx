import React, {Component} from "react";


export default class UpdateChapter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            docId: "",
            name: "",
            content: "",
        };
        this.init = this.init.bind(this);
    }

    init(chapter){
        this.setState({
            id: chapter.id,
            docId: chapter.docId,
            name: chapter.name,
            content: chapter.content,
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
                    <label>内容（MarkDown格式）：</label>
                    <br/>
                    <textarea ref={"content"} value={t.state.content} onChange={function (event) {
                        this.setState({content: event.target.value});
                    }.bind(this)}></textarea>
                </div>
            </div>
        )
    }
}


