import 'core-js';

import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import { useDevTools, DevTools, wrapChildrenClassName } from 'flex-wrap-layout';

import './Boxes.html';
import './Boxes.scss';

function Boxes() {
  const ref = useRef(null);
  // Instead of useDetectRowWrap(ref)
  const devToolsContext = useDevTools(ref, false, true, true);

  const { showBordersClassName, flexFillClassName } = devToolsContext;

  return (
    <>
      <DevTools context={devToolsContext} />
      <div ref={ref} className={`${wrapChildrenClassName} ${showBordersClassName}`}>
        <div className={wrapChildrenClassName}>
          <div className="box blue" />
          <div className={`box grey ${flexFillClassName}`} />
          <div className="box blue" />
        </div>
        <div className={`${wrapChildrenClassName} ${flexFillClassName}`}>
          <div className="box green" />
          <div className={`box grey ${flexFillClassName}`} />
          <div className="box green" />
        </div>
        <div className={wrapChildrenClassName}>
          <div className="box yellow" />
          <div className={`box grey ${flexFillClassName}`} />
          <div className="box yellow" />
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<Boxes />, document.getElementById('app'));