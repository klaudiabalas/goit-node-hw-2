const express = require("express");
const passport = require("../../middleware/passport");
const auth = require("../../middleware/auth");
const {
  validateBody,
  validateSubscription,
  userValidationSchema,
} = require("../../service/schemas/users");

const controllersAuth = require("../../controllers/users");

const router = express.Router();

router.use(passport.initialize());

router.post(
  "/signup",
  validateBody(userValidationSchema),
  controllersAuth.getNewUser
);
router.post(
  "/login",
  validateBody(userValidationSchema),
  controllersAuth.login
);
router.get("/logout", auth, controllersAuth.logout);
router.get("/current", auth, controllersAuth.currentUser);
router.patch(
  "/",
  auth,
  validateSubscription,
  controllersAuth.updateSubscription
);

module.exports = router;
