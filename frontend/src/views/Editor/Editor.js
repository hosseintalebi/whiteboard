import React, { Component } from 'react'
import { Select } from 'rmwc/Select'
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarMenuIcon,
} from 'rmwc/Toolbar'

import { Drawer } from 'rmwc/Drawer'

import _ from 'lodash'
import MonacoEditor from 'react-monaco-editor'

class Editor extends Component {
  constructor() {
    super()
    this.state = {
      language: 'javascript',
      theme: 'vs-dark',
      persistentOpen: false,
      monaco: null,
    }
    this.editorWillMount = this.editorWillMount.bind(this)
  }
  editorWillMount(monaco) {
    this.setState({ monaco })
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor)
    editor.focus()
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e)
  }
  renderLangSelector() {
    const { monaco } = this.state
    let options
    if (monaco == null) {
      options = [
        {
          label: 'JavaScript',
          value: 'javascript',
        },
      ]
    } else {
      options = _.map(monaco.languages.getLanguages(), lng => {
        return {
          label: lng.aliases[0],
          value: lng.id,
        }
      })
    }
    return (
      <Select
        value={this.state.language}
        onChange={evt => this.setState({ language: evt.target.value })}
        label="Language"
        placeholder=""
        options={options}
      />
    )
  }
  renderThemeSelector() {
    return (
      <Select
        value={this.state.theme}
        onChange={evt => this.setState({ theme: evt.target.value })}
        label="Theme"
        placeholder=""
        options={[
          {
            label: 'VS Dark',
            value: 'vs-dark',
          },
          {
            label: 'VS Light',
            value: 'vs',
          },
          {
            label: 'hc-black',
            value: 'hc-black',
          },
        ]}
      />
    )
  }
  renderToolbar() {
    return (
      <Toolbar>
        <ToolbarRow>
          <ToolbarSection alignEnd>
            <ToolbarMenuIcon
              use="settings"
              onClick={() =>
                this.setState({ persistentOpen: !this.state.persistentOpen })
              }
            />
          </ToolbarSection>
        </ToolbarRow>
      </Toolbar>
    )
  }
  renderDrawer() {
    return (
      <Drawer
        persistent
        open={this.state.persistentOpen}
        onClose={() => this.setState({ persistentOpen: false })}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', margin: '10px 0' }}
        >
          <div style={{ margin: 10, display: 'flex', flexDirection: 'column' }}>
            {this.renderLangSelector()}
          </div>
          <div style={{ margin: 10, display: 'flex', flexDirection: 'column' }}>
            {this.renderThemeSelector()}
          </div>
        </div>
      </Drawer>
    )
  }
  renderEditor() {
    const options = {
      selectOnLineNumbers: true,
      lineHeight: 18,
    }
    return (
      <MonacoEditor
        width="100%"
        height="500"
        language={this.state.language}
        theme={this.state.theme}
        value={'let a =12'}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
        editorWillMount={this.editorWillMount}
      />
    )
  }
  render() {
    return (
      <div className="App">
        {this.renderToolbar()}
        <div style={{ display: 'flex' }}>
          {this.renderDrawer()}
          {this.renderEditor()}
        </div>
      </div>
    )
  }
}

export default Editor
