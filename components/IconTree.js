import React from "react";
import {
  DiCss3,
  DiGit,
  DiHtml5,
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiSass,
} from "react-icons/di";
import { SiBabel, SiWebpack, SiNextdotjs, SiVercel } from "react-icons/si";

export default function IconTree() {
  return (
    <div id="icon-tree-container" className="icon-tree-container">
      <div className="item">
        <DiGit />
      </div>
      <div className="item">
        <SiVercel />
      </div>
      <div className="item">
        <DiHtml5 />
      </div>
      <div className="item">
        <DiJavascript1 />
      </div>
      <div className="item">
        <DiReact />
      </div>
      <div className="item">
        <DiNodejs />
      </div>
      <div className="item">
        <SiBabel />
      </div>
      <div className="item">
        <SiWebpack />
      </div>
      <div className="item">
        <DiCss3 />
      </div>
      <div className="item">
        <DiSass />
      </div>
      <div className="icon-tree-rotation-point">
        <SiNextdotjs />
      </div>
    </div>
  );
}
