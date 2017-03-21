import React, {Component} from "react";


export default class UpdateChapter extends Component {

    updateChapter() {
        let formData = new FormData();
        formData.append("id",this.props.chapter.id);
        formData.append("docId",this.props.chapter.docId);
        formData.append("name",this.props.chapter.name);
        formData.append("content",this.refs.content.value);
        global.post("doc/chapter/update", formData, function () {
            document.getElementById("updateChapter").style.display ="none";
            location.reload();
        }.bind(this));
    }

    render() {
        var t = this;
        return (
            <div id="updateChapter" className="box">
                <div className="button">
                    <button  onClick={t.updateChapter.bind(t)}>保存</button>
                    <button  onClick={function () {
                        t.refs.content.value = "";
                        document.getElementById("updateChapter").style.display ="none";
                    }}>取消</button>
                </div>
                <div className="chapterForm">
                    <label>内容（MarkDown格式）：</label>
                    <br/>
                    <textarea ref={"content"} defaultValue={this.props.chapter.content}></textarea>
                </div>
            </div>
        )
    }
}


