import {action} from '@storybook/addon-actions';
import React from 'react';
const {storiesOf} = require('@storybook/react-native');
const {default: CenterView} = require('../CenterView');
const {CustomButton} = require('./CustomButtom');

storiesOf('CustomButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Primary Button', () => (
    <CustomButton
      title="Primary Button"
      onClick={e => console.log('Spinner Button')}
    />
  ))
  .add('Disable Button', () => (
    <CustomButton
      title="Disable Button"
      disabled={true}
      onClick={e => console.log('Spinner Button')}
    />
  ))
  .add('Loading Button', () => (
    <CustomButton
      title="Loading Button"
      loading={true}
      onClick={e => console.log('Spinner Button')}
    />
  ));
