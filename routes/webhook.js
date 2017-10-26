var express = require('express');
var router = express.Router();
var chatService = require('server/chatService')

/* GET hello world page. */
router.get('/', function(req, res, next) {
	if (chatService.authenticate(req)) {
		res.status(200).send(req.query['hub.challenge']);
	}
	else res.sendStatus(403);
  
});

module.exports = router;
