import React, { FC } from "react";
import Image from "next/image";
import cn from "classnames";
import logo from "../../assets/logo.svg";

interface IProps {
  className?: string;
}

const Logo: FC<IProps> = ({ className }) => {
  return <Image className={cn("", className)} src={logo} alt="" />;
};

export default Logo;
