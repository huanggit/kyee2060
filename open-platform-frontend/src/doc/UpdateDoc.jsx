import React, {Component} from "react";


export default class UpdateDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            type: "",
            icon: "",
            author: "",
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.doc.id,
            name: nextProps.doc.name,
            type: nextProps.doc.type,
            icon: nextProps.doc.icon,
            author: nextProps.doc.author,
        })
    }

    updateDoc() {
        let formData = new FormData();
        formData.append("id", this.state.id);
        formData.append("name", this.state.name);
        formData.append("type", this.state.type);
        formData.append("icon", this.state.icon);
        formData.append("author", this.state.author);
        global.post("doc/update", formData, function () {
            document.getElementById("updateDoc").style.display = "none";
            location.reload();
        }.bind(this));
    }

    render() {
        return (
            <div id="updateDoc" className="box">
                <div className="button">
                    <button onClick={this.updateDoc.bind(this)}>保存</button>
                    <button onClick={function () {
                        document.getElementById("updateDoc").style.display = "none";
                    }.bind(this)}>取消
                    </button>
                    <button onClick={function () {
                        if (confirm('确认删除当前文章?')) {
                            global.get("doc/delete/" + this.state.id, function () {
                                document.getElementById("updateDoc").style.display = "none";
                                location.reload();
                            }.bind(this));
                        }
                    }.bind(this)}>删除
                    </button>
                </div>
                <div className="docForm">
                    <label>标题：</label>
                    <input value={this.state.name} onChange={function (event) {
                        this.setState({name: event.target.value});
                    }.bind(this)} />
                    <br/>
                    <label>图标：</label>
                    <input value={this.state.icon} onChange={function (event) {
                        this.setState({icon: event.target.value});
                    }.bind(this)} />
                    <br/>
                    <label>作者：</label>
                    <input value={this.state.author} onChange={function (event) {
                        this.setState({author: event.target.value});
                    }.bind(this)} />
                    <br/>
                </div>
            </div>
        )
    }
}


