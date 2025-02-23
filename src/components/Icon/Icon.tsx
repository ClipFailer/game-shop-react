import {FC} from 'react';
import {IconType} from "react-icons";

export interface IconProps {
    icon: IconType;
}

const Icon: FC<IconProps> = ({icon}: IconProps) => {
    return (
        <div>
            {/*{icon}*/}
        </div>
    );
};

export default Icon;