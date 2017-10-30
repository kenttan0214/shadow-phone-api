const registrationToken = "fxdqVJEnsXU:APA91bH-w4Hw21gnqAYeGasn1VlIYGgA2M9QNVwD6Hrrym0-t419gw3SqF9jtwAd5NO66CeIFg00nB3zi0IZyWuKYGNnuP1ESalPOVd5b07u4t3XCiMbluEnsB0zFMGq_G8oblPMTjiW";

module.exports = {
  send: async (req, res) => {
    const data = { message: 'testing only la' };

    try {
      const response = await CloudMessageService.sendCloudMessageToDevices(registrationToken, data);
      
      res.json({
        response
      });
    } catch (e) {
			res.json({
				error: e
			});
    } 
    
  }
};

