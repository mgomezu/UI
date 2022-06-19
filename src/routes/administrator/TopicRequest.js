import React, {Component} from "react";

export default class TopicRequest extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [],
        }

        this.setTopicRequestList = this.setTopicRequestList.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick = (event) => {
        const btn = event.target;
        console.log(btn.name);

    }

    setTopicRequestList(list) {
        this.setState({
            list,
        });
    }

    render() {
        return (
            <div>
                <TopicRequestList
                    topicRequestList={this.state.list}
                    onButtonClick={this.onButtonClick} />

            </div>

        );
    }

    componentDidMount() {
        window.client.getTopicRequests(this.setTopicRequestList);

    }
}

const TopicRequestList = function({topicRequestList, onButtonClick}) {

    return (
        <div>
            <h3>Solicitudes tematicas</h3>
            <ul>
                {topicRequestList.map(item =>
                    <li>
                        {item.date.slice(0, item.date.indexOf("T"))}
                        <span> </span>
                        {item.status}
                        <span> </span>
                        {item.topic.name}
                        <span> </span>

                        <br/>
                        <button onClick={e => onButtonClick(e)} name="send_m">Enviar mensaje</button>
                        <button onClick={e => onButtonClick(e)} name="accept">Aceptar</button>
                        <button onClick={e => onButtonClick(e)} name="decline">Rechazar</button>
                    </li>
                )}
            </ul>
        </div>
    );
}