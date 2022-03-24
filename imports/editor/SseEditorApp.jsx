import React from 'react';
import SseApp2d from "./2d/SseApp2d";
import SseApp3d from "./3d/SseApp3d";

class SseEditorApp extends React.Component {
    constructor() {
        super();
        this.state = {
            mode: null,
        }
    }

    render() {
        if (this.state.mode == "2d")
            return <SseApp2d imageId={this.props.match.params.id}/>;
        else if (this.state.mode == "3d")
            return <SseApp3d imageId={this.props.match.params.id}/>;
        else return null;
    }

    componentDidMount() {
        this.setState({
            mode: this.props.match.params.name.endsWith(".pcd") ? "3d" : "2d"
        })
    }
}


export default SseEditorApp;



// export default withTracker((props) => {
//     $("#waiting").removeClass("display-none");

//     const imageId = "/" + props.match.params.id;
//     // let subName = "sse-data-descriptor";
//     // const subscription = Meteor.subscribe(subName, imageUrl);

//     // // get imageUrl from Api then load

//     // const subReady = subscription.ready();
//     // const mode = props.match.params.path.endsWith(".pcd") ? "3d" : "2d";
//     // return {imageUrl, subReady, mode};
// })(SseEditorApp);
