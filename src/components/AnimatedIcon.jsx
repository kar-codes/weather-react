import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import { ICONS } from '../constants.js/icons';

export default function AnimatedIcon({ icon, size = 40 }) {
  return <ReactAnimatedWeather icon={ICONS[icon]} color="white" size={size} animate />;
}
