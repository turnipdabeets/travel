import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class EditableText extends React.Component {
  state = {
    text: '',
    editing: false
  };

  startEditing() {
    this.setState({
      editing: true,
      text: this.props.text
    });
  }

  stopEditing() {
    this.props.sendText(this.state.text);
    this.setState({
      editing: false
    });
  }

  renderText() {
    return (
      <TouchableOpacity onPress={() => this.startEditing()}>
        <Text {...this.props.textProps}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }

  renderTextInput() {
    return (
      <View>
        <TextInput
          autoFocus
          opacity={this.state.editing ? 1 : 0.1}
          {...this.props.textInputProps}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          returnKeyType={'done'}
          onBlur={() => this.stopEditing()}
        />
      </View>
    );
  }

  render() {
    return (
      <View>
        {!this.state.editing && this.renderText()}
        {this.state.editing && this.renderTextInput()}
      </View>
    );
  }
}

EditableText.propTypes = {
  text: PropTypes.string,
  sendText: PropTypes.func.isRequired,
  textProps: PropTypes.shape(),
  textInputProps: PropTypes.shape()
};

EditableText.defaultProps = {
  text: '',
  textProps: {},
  textInputProps: {}
};

export default EditableText;
