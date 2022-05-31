import React, { FC } from "react";
import { Hello } from "./components/Hello";

export const Main: FC = () => 
{
    return (
        <Hello message="Heading">
            <div className="features">
                Hello
            </div>
        </Hello>
    );
}