// @flow
import React, { Component } from 'react';
import { ipcRenderer } from 'electron';
import { Titlebar } from 'react-titlebar-osx';

export default class App extends Component {
  props: {
    children: HTMLElement
  };

  handleClose() {
    ipcRenderer.send('galanews-app-close');
  }

  handleMinimize() {
    ipcRenderer.send('galanews-app-minimize');
  }

  handleMaximize() {
    ipcRenderer.send('galanews-app-maximize');
  }

  handleFullscreen() {
    ipcRenderer.send('galanews-app-fullscreen');
  }

  render() {
    return (
      <div className="app-container">
        <Titlebar
          draggable
          padding={10}
          onClose={() => this.handleClose()}
          onMinimize={() => this.handleMinimize()}
          onMaximize={() => this.handleMaximize()}
          onFullscreen={() => this.handleFullscreen()}
        />
        {this.props.children}
      </div>
    );
  }
}
