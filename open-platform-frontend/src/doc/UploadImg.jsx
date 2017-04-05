import React, {Component} from "react";


export default class UploadImg extends Component {


    uploadImg() {
        let formData = new FormData();
        formData.append("file",this.refs.upload.files[0]);
        global.post("doc/img/upload", formData, function () {
            document.getElementById("uploadImg").style.display ="none";
        }.bind(this));
    }

    render() {
        var t = this;
        return (
            <div id="uploadImg" className="box">
                <div className="button">
                    <button  onClick={t.uploadImg.bind(t)}>保存</button>
                    <button  onClick={function () {
                        document.getElementById("uploadImg").style.display ="none";
                    }}>取消</button>
                </div>
                <div className="imgUploadForm">
                    <label>markdown语法引用图片：![alt文字](/img/图片名)</label>
                    <input ref="upload" type='file' multiple accept='image/*' />
                </div>
            </div>
        )
    }
}


