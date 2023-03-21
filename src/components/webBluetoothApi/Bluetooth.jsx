import styled from "styled-components";
const Bluetooth = () => {
  const handelConnection = () => {
    console.log("clicked");
    navigator.bluetooth
      //TODO :old code here
      //   .requestDevice({
      //     // filters: [{ services: ["battery_service"] }],
      //     filters: [{ namePrefix: "Care" }],
      //   })
      //   .then((device) => {
      //     // Human-readable name of the device.
      //     console.log(device.name);
      //     //list the services the device offers
      //     console.log(device.services);
      //     // Attempts to connect to remote GATT Server.
      //     return device.gatt.connect();
      //   })
      //   .then((server) => {
      //     // Getting Battery Service...
      //     return server.getPrimaryService("battery_service");
      //   })
      //   .then((service) => {
      //     // Getting Battery Level Characteristic...
      //     return service.getCharacteristic("battery_level");
      //   })
      //   .then((characteristic) => {
      //     // Reading Battery Level...
      //     return characteristic.readValue();
      //   })
      //   .then((value) => {
      //     console.log("Battery percentage is " + value.getUint8(0));
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      //TODO : new code here
      //Origin is not allowed to access any service. Tip: Add the service UUID to 'optionalServices' in requestDevice() options
      .requestDevice({
        // filters: [
        // { services: ["0000180f-0000-1000-8000-00805f9b34fb"] }
        acceptAllDevices: true,
        // ],
      })
      .then((device) => {
        // Human-readable name of the device.
        console.log(device.name);
        // Attempts to connect to remote GATT Server.
        return device.gatt.connect();
      })
      .then((server) => {
        // Getting Battery Service...
        return server.getPrimaryService("0000180f-0000-1000-8000-00805f9b34fb");
      })
      .then((service) => {
        // Getting Battery Level Characteristic...
        return service.getCharacteristic(
          "00002a19-0000-1000-8000-00805f9b34fb"
        );
      })
      .then((characteristic) => {
        // Reading Battery Level...
        return characteristic.readValue();
      })
      .then((value) => {
        console.log("Battery percentage is " + value.getUint8(0));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelDisconnect = () => {
    console.log("clicked");
    navigator.bluetooth
      .requestDevice({
        filters: [{ services: ["0000180f-0000-1000-8000-00805f9b34fb"] }],
      })
      .then((device) => {
        // Human-readable name of the device.
        console.log(device.name);
        // Attempts to connect to remote GATT Server.
        return device.gatt.disconnect();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelReadGlucoseValue = () => {
    console.log("clicked");
    // //UUID for glucose service value
    // const glucoseServiceUUID = "00001808-0000-1000-8000-00805f9b34fb";
    // // UUID for glucose measurement characteristic
    // const glucoseMeasurementCharacteristicUUID =
    //   "00002a18-0000-1000-8000-00805f9b34fb";
    // //UUID for glucose measurement context characteristic
    // const glucoseMeasurementContextCharacteristicUUID =
    //   "00002a34-0000-1000-8000-00805f9b34fb";
    // //UUID for record access control point characteristic
    // const recordAccessControlPointCharacteristicUUID =
    //   "00002a52-0000-1000-8000-00805f9b34fb";
    // //UUID for glucose feature characteristic
    // const glucoseFeatureCharacteristicUUID =
    //   "00002a51-0000-1000-8000-00805f9b34fb";
    // // Read those UUIDs from the device to console
    // navigator.bluetooth
    //   .requestDevice({
    //     filters: [{ services: [glucoseServiceUUID] }],
    //   })
    //   .then((device) => {
    //     // Human-readable name of the device.
    //     console.log(device.name);
    //     // Attempts to connect to remote GATT Server.
    //     return device.gatt.connect();
    //   })
    //   .then((server) => {
    //     // Getting Glucose Service...
    //     return server.getPrimaryService(glucoseServiceUUID);
    //   })
    //   .then((service) => {
    //     // Getting Glucose Measurement Characteristic...
    //     return service.getCharacteristic(glucoseMeasurementCharacteristicUUID);
    //   })
    //   .then((characteristic) => {
    //     // Reading Glucose Measurement...
    //     return characteristic.readValue();
    //   })
    //   .then((value) => {
    //     console.log("Glucose Measurement is " + value.getUint8(0));
    //   })
    //   .then((service) => {
    //     // Getting Glucose Measurement Context Characteristic...
    //     return service.getCharacteristic(
    //       glucoseMeasurementContextCharacteristicUUID
    //     );
    //   })
    //   .then((characteristic) => {
    //     // Reading Glucose Measurement Context...
    //     return characteristic.readValue();
    //   })
    //   .then((value) => {
    //     console.log("Glucose Measurement Context is " + value.getUint8(0));
    //   })
    //   .then((service) => {
    //     // Getting Record Access Control Point Characteristic...
    //     return service.getCharacteristic(
    //       recordAccessControlPointCharacteristicUUID
    //     );
    //   })
    //   .then((characteristic) => {
    //     // Reading Record Access Control Point...
    //     return characteristic.readValue();
    //   })
    //   .then((value) => {
    //     console.log("Record Access Control Point is " + value.getUint8(0));
    //   })
    //   .then((service) => {
    //     // Getting Glucose Feature Characteristic...
    //     return service.getCharacteristic(glucoseFeatureCharacteristicUUID);
    //   })
    //   .then((characteristic) => {
    //     // Reading Glucose Feature...
    //     return characteristic.readValue();
    //   })
    //   .then((value) => {
    //     console.log("Glucose Feature is " + value.getUint8(0));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //read Only Glucose Measurement
    // navigator.bluetooth
    //   .requestDevice({
    //     filters: [{ services: ["00001808-0000-1000-8000-00805f9b34fb"] }],
    //   })
    //   .then((device) => {
    //     // Human-readable name of the device.
    //     console.log(device.name);
    //     // Attempts to connect to remote GATT Server.
    //     return device.gatt.connect();
    //   })
    //   .then((server) => {
    //     // Getting Glucose Service...
    //     return server.getPrimaryService("00001808-0000-1000-8000-00805f9b34fb");
    //   })
    //   .then((service) => {
    //     // Getting Glucose Measurement Characteristic...
    //     return service.getCharacteristic(
    //       "00002a18-0000-1000-8000-00805f9b34fb"
    //     );
    //   })
    //   .then((characteristic) => {
    //     // Reading Glucose Measurement...
    //     return characteristic.readValue();
    //   })
    //   .then((value) => {
    //     console.log("Glucose Measurement is " + value.getUint8(0));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //chatGPT code *_*
    // navigator.bluetooth
    //   .requestDevice({ filters: [{ services: ["glucose"] }] })
    //   .then((device) => device.gatt.connect())
    //   .then((server) => server.getPrimaryService("glucose"))
    //   .then((service) => service.getCharacteristic("record_access_control_point"))
    //   .then((characteristic) => characteristic.readValue())
    //   .then((value) => {
    //     const glucoseMeasurement = parseGlucoseMeasurement(value);
    //     console.log("Glucose measurement:", glucoseMeasurement);
    //   })
    //   .catch((error) => {
    //     console.error("Error reading glucose measurement:", error);
    //   });

    // function parseGlucoseMeasurement(value) {
    //   const flags = value.getUint8(0);
    //   const timeOffset = value.getInt16(1, true);
    //   const glucoseConcentration = value.getFloat32(3, true);
    //   const unitType = flags & 0x04 ? "mol/L" : "mg/dL";
    //   const timeType = flags & 0x08 ? "offset" : "absolute";
    //   const timestamp =
    //     timeType === "offset"
    //       ? timeOffset
    //       : new Date(value.getUint32(5, true) * 1000);
    //   return {
    //     glucoseConcentration,
    //     unitType,
    //     timeType,
    //     timestamp,
    //   };
    // }

    //new code
    navigator.bluetooth
      .requestDevice({ filters: [{ services: ["glucose"] }] })
      .then((device) => device.gatt.connect())
      .then((server) => server.getPrimaryService("glucose"))
      .then((service) =>
        service.getCharacteristic("record_access_control_point")
      )
      .then((controlPoint) => {
        // Request all stored records
        const request = new DataView(new ArrayBuffer(2));
        request.setUint8(0, 0x01); // Report stored records
        request.setUint8(1, 0x01); // All records
        return controlPoint.writeValue(request);
      })
      .then(() => {
        // Start listening for notifications from the glucose measurement characteristic
        return new Promise((resolve, reject) => {
          const characteristic = service.getCharacteristic(
            "glucose_measurement"
          );
          characteristic
            .startNotifications()
            .then(() => {
              characteristic.addEventListener(
                "characteristicvaluechanged",
                (event) => {
                  const value = event.target.value;
                  const glucoseMeasurement = parseGlucoseMeasurement(value);
                  glucoseData.push(glucoseMeasurement);
                  console.log("Glucose measurement:", glucoseMeasurement);
                }
              );
              resolve();
            })
            .catch((error) => {
              reject(
                "Error starting glucose measurement notifications:" + error
              );
            });
        });
      })
      .catch((error) => {
        console.error("Error reading glucose data:", error);
      });

    function parseGlucoseMeasurement(value) {
      const flags = value.getUint8(0);
      const timeOffset = value.getInt16(1, true);
      const glucoseConcentration = value.getFloat32(3, true);
      const unitType = flags & 0x04 ? "mol/L" : "mg/dL";
      const timeType = flags & 0x08 ? "offset" : "absolute";
      const timestamp =
        timeType === "offset"
          ? timeOffset
          : new Date(value.getUint32(5, true) * 1000);
      return {
        glucoseConcentration,
        unitType,
        timeType,
        timestamp,
      };
    }
  };
  const glucoseData = [];

  return (
    <div>
      <ActiveBtn
        onClick={() => {
          handelConnection();
        }}
      >
        Connect
      </ActiveBtn>
      <InactiveBtn
        onClick={() => {
          handelDisconnect();
        }}
      >
        Disconnect
      </InactiveBtn>

      <ReadGlucoseValue readOnly />
      <ReadGlucoseValueBtn
        onClick={() => {
          handelReadGlucoseValue();
        }}
      >
        Read Data
      </ReadGlucoseValueBtn>
    </div>
  );
};
const ActiveBtn = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;
const InactiveBtn = styled.button`
  background-color: #f44336;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

//yellow button to read glucose value
const ReadGlucoseValueBtn = styled.button`
  background-color: #ffff00;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;
//styled.input to readOnly glucose value
const ReadGlucoseValue = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

export default Bluetooth;
