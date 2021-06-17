import React from "react";
import Image from "next/image";
import { Wrapper } from "./styles";

const ImageComp = React.forwardRef((props, ref) => {
  return (
    <Wrapper href={props.href} ref={ref}>
      <Image {...props} />
    </Wrapper>
  );
});

export default ImageComp;
