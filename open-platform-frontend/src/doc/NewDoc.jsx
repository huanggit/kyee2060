import React, {Component} from "react";


export default class NewDoc extends Component {

    newDoc() {
        let formData = new FormData();
        formData.append("id",this.refs.id.value);
        formData.append("name",this.refs.name.value);
        formData.append("type",this.props.type);
        formData.append("icon",this.refs.icon.value);
        formData.append("author",this.refs.author.value);
        global.post("doc/new", formData, function () {
            document.getElementById("newDoc").style.display = "none";
            location.reload();
        }.bind(this));
    }

    render() {
        return (
            <div id="newDoc" className="box">
                <div className="button">
                    <button  onClick={this.newDoc.bind(this)}>保存</button>
                    <button  onClick={function () {
                        this.refs.id.value = "";
                        this.refs.name.value = "";
                        this.refs.icon.value = "";
                        this.refs.author.value = "";
                        document.getElementById("newDoc").style.display ="none";
                    }.bind(this)}>取消</button>
                </div>
                <div className="docForm">
                    <label>URL：</label>
                    <input ref={"id"} placeholder="只能包含字母和数字"/>
                    <br/>
                    <label>标题：</label>
                    <input ref={"name"}/>
                    <br/>
                    <label>图标：</label>
                    <input ref={"icon"}/>
                    <br/>
                    <label>作者：</label>
                    <input ref={"author"}/>
                    <br/>
                </div>
            </div>
        )
    }
}


