import React from "react";

export default function Comment(props) {
  const { data, className } = props;

  return (
    <div
      className={classNames(
        "comment flex flex1 u-marginBottom--20 u-borderBottom--gray",
        className
      )}>
      <p className="u-fontWeight--bold u-fontColor--tuna">{data.author}</p>
      <pre className="u-fontWeight--light u-fontColor-tuna">{data.content}</pre>
    </div>
  );
}
