import React, { Fragment } from "react";
import { connect } from "react-redux";

const Video = ({activeLesson, activeModule}) => {
  return (
    <Fragment>
      <div>
        <strong>Módulo {activeModule.title}</strong>
        <span>Aula {activeLesson.title}</span>
      </div>
    </Fragment>
  );
};

export default connect(state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule
}))(Video);