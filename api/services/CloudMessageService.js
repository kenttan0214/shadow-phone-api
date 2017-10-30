const admin = require('firebase-admin');
const serviceAccount = require('../../config/firebase-adminsdk.json');

const init = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
};

const sendCloudMessageToDevices = async (deviceToken, data) => {
  const payload = { data };

  try {
    const result = await admin.messaging().sendToDevice(deviceToken, payload);
    return result;
  } catch (e) {
    throw new Error('Failed to send cloud message');
  }
};

module.exports = {
  init,
  sendCloudMessageToDevices
};