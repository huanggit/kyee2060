import React, {Component} from "react";


export default class DocNew extends Component {


    newChapter() {
        let formData = new FormData();
        formData.append("docId",this.props.docId);
        formData.append("name",this.refs.name.value);
        formData.append("content",this.refs.content.value);
        global.post("doc/chapter/new", formData, function () {
            document.getElementById("box").style.display ="none";
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
                        t.refs.content.value = "";
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
        )
    }
}


