import React, {Component} from "react";
import ReactMarkdown from "react-markdown";


export default class Markdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            source: " ",
            html: false
        };
        this.init = this.init.bind(this);
    }

    init(source, html) {
        var isHtml = (html) ? html : false;

        var content = (html) ? "<style></style>" + source
            .replace(/<h2>/ig, "<h1>")
            .replace(/<\/h2>/ig, "</h1>")
            .replace(/\r/ig, "")
            .replace(/\n/ig, "")
            : source;
        this.setState({
            source: content,
            html: isHtml
        })
    }

    componentWillReceiveProps(nextProps) {
        this.init(nextProps.source, nextProps.html);
    }

    componentDidMount() {
        this.init(this.props.source, this.props.html);
    }


    render() {
        var s = this.state;
        return (
            <ReactMarkdown className="markdown" escapeHtml={!s.html} source={s.source}/>
        )
    }
}


