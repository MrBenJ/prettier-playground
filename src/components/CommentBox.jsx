import React, { Component } from "react";
import classNames from "classnames";

import Comment from "./Comment";

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasSelected: false,
      lockedPosition: false
    };
  }

  componentDidUpdate() {
    const { onUpdate } = this.props;

    if (onUpdate) {
      onUpdate();
    }
  }

  render() {
    const { className, comments, onUpdate } = this.props;
    const { hasSelected, lockedPosition } = this.state;

    return (
      <div
        className={classNames("comment-box", className, {
          clicked: hasSelected,
          lock: lockedPosition
        })}>
        {comments.map(comment => {
          return <Comment data={comment} forceUpdateCallback={onUpdate} />;
        })}
      </div>
    );
  }
}
