import React from 'react';
import DeviceEmulator from 'react-device-emulator';
import 'react-device-emulator/lib/styles/style.css';
function App() {
  return (
    <div>
    <DeviceEmulator type="mobile" withDeviceSwitch withRotator>
      <h1>Welcome to React Device Emulator</h1>
    </DeviceEmulator>
  </div>
  );
}

export default App;
