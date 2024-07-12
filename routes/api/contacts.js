const express = require("express");
const router = express.Router();
const contactsController = require("../../controllers/contacts");

// Definicje endpointów
router.get("/", contactsController.listContacts);
router.post("/", contactsController.addContact);
router.get("/:id", contactsController.getContactById);
router.put("/:id", contactsController.updateContact);
router.delete("/:id", contactsController.removeContact);

module.exports = router;
