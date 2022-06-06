import React from "react";

const AvatarGroup = ({ children, shape = "circle", size = 70, ...props }) => {
  const avatars = React.Children.toArray(children)
    .filter((element) => {
      return !!React.isValidElement(element);
    })
    .map((avatar, index, avatars) => {
      return React.cloneElement(avatar, {
        ...avatar.props,
        size,
        shape,
        style: {
          ...avatar.props.style,
          marginLeft: -size / 5,
          zIndex: avatars.length - index,
        },
      });
    });

  return (
    <div style={{ paddingLeft: size / 5 }} {...props}>
      {avatars}
    </div>
  );
};

export default AvatarGroup;